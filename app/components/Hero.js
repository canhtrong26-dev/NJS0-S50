import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex justify-between items-center">
      <div className="max-w-lg">
        <h1 className="text-5xl font-light mb-6">Collections</h1>
        <p className="text-gray-500 mb-2">You Can Explore Ans Shop Many Differnt Collection</p>
        <p className="text-gray-500 mb-8">From Various Barands Here.</p>
        <button className="bg-black text-white px-6 py-3 flex items-center gap-2 text-sm">
          🛍 Shop Now
        </button>
      </div>

      <div>
        <Image
          src="/images/image-product.png"
          alt="hero"
          width={400}
          height={400}
          className="rounded-tl-full rounded-tr-full object-cover"
        />
      </div>
    </section>
  );
}