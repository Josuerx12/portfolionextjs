/* eslint-disable react/no-unescaped-entities */
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Experience from "@/pages/experience";
import HomePage from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import dynamic from "next/dynamic";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const ToastContainer = dynamic(
    () => import("react-toastify").then((mod) => mod.ToastContainer),
    { ssr: false }
  );
  return (
    <>
      <HomePage />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
