import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import StickyCartButton from "../components/StickyCartButton";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop /> {/* Makes sure scroll to top of page on route change */}
      <Header />
      <main>
        <Outlet /> {/* Renders all pages */}
        <StickyCartButton /> {/* Renders the sticky cart button on narrow devices like mobile*/}
      </main>
      <Footer />
    </>
  );
}
