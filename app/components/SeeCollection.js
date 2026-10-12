import Image from "next/image";

export default function SeeCollection() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/6393662ad662685c1fd4744541198822233aacaa.jpg"
        alt="Zara Collection"
        width={1320}
        height={450}
        priority
         className="w-full object-cover h-200"
        style={{ transform: "scaleX(-1)" }}
      />

      <div className="absolute inset-0 flex items-center justify-end pr-20">
        <div className="text-white max-w-sm">
          <h2 className="text-6xl font-bold mb-6">ZARA</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Lustrous Yet Understated. The New Evening Wear Collection Exclusively Offered At The Reopened Giorgio Armani Boutique In Los Angeles.
          </p>
          <button className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition">
            See Collection
          </button>
        </div>
      </div>
    </section>
  );
}