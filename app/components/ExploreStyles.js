import Image from "next/image";

const brands = [
  { src: "/images/5b76d807825ca8f5e4af4e34d9cbc49df2f6ca27.png", alt: "Graphic Studio" },
  { src: "/images/866a35b51552921cb844b281a8f6b0f90a71d303.png", alt: "S. Salva" },
  { src: "/images/8090fbb96ae3d647538f9358b251aab3b02a22d8.png", alt: "Golden Studio" },
  { src: "/images/76831a248b0e71ed534515dd3dced47e8fa05506.png", alt: "Furniture Design" },
  { src: "/images/travel.png", alt: "Travel Lookbook" },
];

const styleImages = [
  { src: "/images/00adaefdde3bf7c31966e6491968c6624691f180.jpg", alt: "style 2" },
  { src: "/images/6f41b41b8da33a22ac4df682e8611d37c589aa8d.jpg", alt: "style 3" },
  { src: "/images/545f95cd165a3345c9f91c12ab6be7a972cffd73.jpg", alt: "style 4" },
  { src: "/images/aeed7dfe519adf0ed7e906616bd8e64b644cd5d0.jpg", alt: "style 5" },
];

export default function ExploreStyles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-center gap-12 mb-10">
        {brands.map((brand) => (
          <Image
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            width={100}
            height={40}
            className="object-contain"
          />
        ))}
      </div>

      <div className="flex gap-4">
        <div className="relative w-1/2">
          <p className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs tracking-widest text-gray-400 origin-left">
            EXPLORE NEW AND POPULAR STYLES
          </p>
          <Image
            src="/images/6341a226f9d9d005d25dd5c0ac5bce699116fc7a.jpg"
            alt="main style"
            width={500}
            height={600}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 w-1/2">
          {styleImages.map((img) => (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              width={250}
              height={290}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}