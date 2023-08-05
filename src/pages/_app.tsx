import { initializeDatabase } from "../libs/cartHandler";
import { Navbar } from "../components/navbar";
import "../style/global.css";
import { useEffect } from "react";
import { Footer } from "../components/footer";

function App({ Component, pageProps }) {
  useEffect(() => {
    initializeDatabase();
  }, []);
  return (
    <>
      <main className="p-5 sm:p-10 min-h-screen text-gray-50 bg-slate-900 font-sans">
        <Navbar />
        <Component {...pageProps}></Component>
        <Footer />
      </main>
    </>
  );
}

export default App;
