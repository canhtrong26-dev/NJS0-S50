import Image from "next/image";

const products = [
  { src: "/images/3cac8188ed8947320d61598763ced4028331d3b9.jpg", name: "Adicolor Classics Joggers", category: "Dress", price: "$63.85", sale: null },
  { src: "/images/2.jpg", name: "Nike Sportswear Futura Luxe", category: "Bag", price: "$130.00", sale: null },
  { src: "/images/3.jpg", name: "Geometric Print Scarf", category: "Scarf", price: "$53.00", sale: null },
  { src: "/images/4.jpg", name: "Yellow Reserved Hoodie", category: "Dress", price: "$155.00", oldPrice: "$364.00", badge: "SALE" },
  { src: "/images/5.jpg", name: "Basic Dress Green", category: "Dress", price: "$236.00", badge: "HOT" },
  { src: "/images/6.jpg", name: "Nike Air Zoom Pegasus", category: "Shoe", price: "$198.00", oldPrice: "$220.00", badge: "SALE" },
  { src: "/images/7.jpg", name: "Nike Repel Miler", category: "Dress", price: "$120.50", sale: null },
  { src: "/images/8.jpg", name: "Nike Sportswear Futura Luxe", category: "Glasses", price: "$160.00", sale: null },
];

const categories = ["All Products", "T-Shirt", "Hoodies", "Jacket"];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Or Subscribe To The Newsletter</h2>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-sm text-gray-600">
          {categories.map((cat) => (
            <button key={cat} className={cat === "All Products" ? "font-semibold text-black" : ""}>
              {cat}
            </button>
          ))}
        </div>
        <button className="bg-black text-white text-sm px-4 py-2">▼ Filter</button>
      </div>

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
              className="w-full object-cover"
            />
            <p className="text-sm font-medium mt-2">{product.name}</p>
            <p className="text-xs text-gray-400">{product.category}</p>
            <div className="flex gap-2 text-sm">
              {product.oldPrice && <span className="line-through text-gray-400">{product.oldPrice}</span>}
              <span className="font-medium">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}