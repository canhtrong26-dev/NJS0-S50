export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-4 gap-10">
        <div>
          <div className="text-xl font-semibold tracking-widest mb-4">⋘ CORAL ⋙</div>
          <p className="text-sm text-gray-500 mb-6">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
          </p>
          <div className="flex gap-4 text-gray-600">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">◎</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">CATALOG</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#">Necklaces</a></li>
            <li><a href="#">Hoodies</a></li>
            <li><a href="#">Jewelry Box</a></li>
            <li><a href="#">T-Shirt</a></li>
            <li><a href="#">Jacket</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">ABOUT US</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#">Our Producers</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold tracking-widest text-sm mb-4">CUSTOMER SERVICES</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Product Care &amp; Repair</a></li>
            <li><a href="#">Book An Appointment</a></li>
            <li><a href="#">Shipping &amp; Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center text-sm">
        <span>© 2022 Coral , Inc.</span>
        <div className="flex gap-2">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">MC</span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">VISA</span>
          <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded">AMEX</span>
          <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded">PayPal</span>
          <span className="bg-red-400 text-white text-xs px-2 py-1 rounded">MC</span>
          <span className="bg-pink-400 text-white text-xs px-2 py-1 rounded">Klarna</span>
        </div>
        <a href="#" className="text-white">Scroll To Top ↑</a>
      </div>
    </footer>
  );
}