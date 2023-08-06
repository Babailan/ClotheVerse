import { getCartLength, initializeDatabase } from "../libs/cartHandler";
import { Navbar } from "../components/navbar";
import "../style/global.css";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";

function App({ Component, pageProps }) {
  const [cartItem, setCartItem] = useState("");
  useEffect(() => {
    initializeDatabase().then(async () => {
      try {
        const length = await getCartLength();
        setCartItem(length);
      } catch (e) {
        console.error(e);
      }
    });
  }, []);
  return (
    <>
      <main className="min-h-screen text-gray-50 bg-zinc-900 font-sans">
        <Navbar cartItem={cartItem} />
        <div className="p-5 sm:p-10 bg-zinc-800">
          <Component {...pageProps} setCartItem={setCartItem}></Component>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
