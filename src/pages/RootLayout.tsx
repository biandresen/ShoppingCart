import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import StickyCartButton from "../components/StickyCartButton";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
        <StickyCartButton />
      </main>
      <Footer />
    </>
  );
}
