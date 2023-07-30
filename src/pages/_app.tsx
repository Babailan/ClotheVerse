import { Navbar } from "../components/navbar";
import "../style/global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <main className="p-5 sm:p-10 min-h-screen text-gray-50 bg-slate-900 font-sans">
        <Navbar />
        <Component {...pageProps}></Component>
      </main>
    </>
  );
}

export default App;
