import Header from "./components/Header";
import Hero from "./components/Hero";
import ExploreStyles from "./components/ExploreStyles";
import ProductGrid from "./components/ProductGrid";
import SeeCollection from "./components/SeeCollection";
import BestSellers from "./components/BestSellers";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <ExploreStyles />
      <ProductGrid />
      <SeeCollection />
      <BestSellers />
    <Instagram />
    <Footer />
    </div>
  );
}