import { AppProps } from "next/app";
import Footer from "../components/Public/Footer";
import Navbar from "../components/Public/Navbar";
import "../styles/globals.css";
import "../styles/Helper.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
        </>
    );
}
