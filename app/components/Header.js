import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Image src="/images/icon.png" alt="search" width={20} height={20} />
        <div className="text-xl font-semibold tracking-widest">⋘ CORAL ⋙</div>
        <div className="flex gap-6 text-gray-600 text-sm">
          <span>👤 Account</span>
          <span>🛍 Shoping</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-2 flex justify-center gap-10 text-sm text-gray-600 border-t border-gray-100">
        <a href="#" className="hover:text-black">Jewelry &amp; Accessories</a>
        <a href="#" className="hover:text-black">Clothing &amp; Shoes</a>
        <a href="#" className="hover:text-black">Home &amp; Living</a>
        <a href="#" className="hover:text-black">Wedding &amp; Party</a>
        <a href="#" className="hover:text-black">Toys &amp; Entertainment</a>
        <a href="#" className="hover:text-black">Art &amp; Collectibles</a>
        <a href="#" className="hover:text-black">Craft Supplies &amp; Tools</a>
      </nav>
    </header>
  );
}