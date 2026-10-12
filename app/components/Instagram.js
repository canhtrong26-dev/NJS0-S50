import Image from "next/image";

const photos = [
  { src: "/images/7025163680c6ff68161a98d043f71715118774aa.jpg", alt: "instagram 1" },
  { src: "/images/8fb87aaef2f42f5c3a920eaa24ad0b06ac3a08cf.jpg", alt: "instagram 2" },
  { src: "/images/ec317cce9c2328962c3590f699b66845f1832e21.jpg", alt: "instagram 3" },
  { src: "/images/5f5f53ced2561d0f546e8903c455535f5d399d59.jpg", alt: "instagram 4" },
  { src: "/images/79218a78e047be8d90bf362898ac978dc501fe69.jpg", alt: "instagram 5" },
  { src: "/images/ec317cce9c2328962c3590f699b66845f1832e21.jpg", alt: "instagram 6" },
];

export default function Instagram() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 text-center">
      <h2 className="text-2xl font-bold mb-8">Follow Products And Discounts On Instagram</h2>

      <div className="flex gap-2 justify-center mb-12">
        {photos.map((photo) => (
          <Image
            key={photo.alt}
            src={photo.src}
            alt={photo.alt}
            width={160}
            height={160}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPc5HGjHgAF2QJTpf3U0AAAAABJRU5ErkJggg=="  
          />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6">Or Subscribe To The Newsletter</h3>

      <div className="flex justify-center gap-4">
        <input
          type="email"
          placeholder="Email Address..."
          className="border-b border-gray-400 outline-none px-2 py-2 w-80 text-sm"
        />
        <button className="text-sm font-semibold tracking-widest">SUBMIT</button>
      </div>
    </section>
  );
}