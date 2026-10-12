import Image from "next/image";

const categories = ["All Products", "T-Shirt", "Hoodies", "Jacket"];

const products = [
  { src: "/images/5.jpg", name: "Basic Dress Green", category: "Dress", price: "$236.00", badge: "HOT" },
  { src: "/images/2.jpg", name: "Nike Sportswear Futura Luxe", category: "Bag", price: "$130.00" },
  { src: "/images/4.jpg", name: "Yellow Reserved Hoodie", category: "Dress", price: "$155.00", oldPrice: "$364.00", badge: "SALE" },
  { src: "/images/6.jpg", name: "Nike Air Zoom Pegasus", category: "Shoe", price: "$198.00", oldPrice: "$220.00", badge: "SALE" },
];

export default function BestSellers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Best Sellers</h2>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-sm text-gray-600">
          {categories.map((cat) => (
            <button key={cat} className={cat === "All Products" ? "font-bold text-black" : ""}>
              {cat}
            </button>
          ))}
        </div>
        <button className="bg-black text-white text-sm px-4 py-2">Show All</button>
      </div>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-4">‹</button>

        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.name} className="relative">
              {product.badge && (
                <span className={`absolute top-2 left-2 text-white text-xs px-2 py-1 z-10 ${product.badge === "HOT" ? "bg-red-500" : "bg-black"}`}>
                  {product.badge}
                </span>
              )}
              <Image
                src={product.src}
                alt={product.name}
                width={300}
                height={350}
                priority={products.indexOf(product) < 4}
                className="w-full object-cover"
              />
              <p className="text-sm font-semibold mt-2">{product.name}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{product.category}</span>
                <div className="flex gap-2">
                  {product.oldPrice && <span className="line-through text-gray-400">{product.oldPrice}</span>}
                  <span className="text-red-500 font-medium">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-4">›</button>
      </div>
    </section>
  );
}