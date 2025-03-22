import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl text-gray-800 hover:text-deep-green transition-colors">
          Case Estates Home Interiors
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/portfolio" 
            className="text-gray-600 hover:text-deep-green transition-colors font-medium pb-0.5 hover:border-b-2 border-deep-green"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-deep-green transition-colors font-medium pb-0.5 hover:border-b-2 border-deep-green"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-deep-green transition-colors font-medium pb-0.5 hover:border-b-2 border-deep-green"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
} 