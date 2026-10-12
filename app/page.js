import Header from "./components/Header";
import Hero from "./components/Hero";
import ExploreStyles from "./components/ExploreStyles";
import ProductGrid from "./components/ProductGrid";
import SeeCollection from "./components/SeeCollection";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <ExploreStyles />
      <ProductGrid />
      <SeeCollection />
    </div>
  );
}