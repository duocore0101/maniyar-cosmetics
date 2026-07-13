export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-heading font-bold text-primary tracking-wider mb-2">MANIYAR</h2>
            <p className="text-sm font-subheading text-gray-400">Narayangaon's Trusted Beauty Destination</p>
          </div>
          
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://wa.me/918446117199" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm font-subheading text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Maniyar Cosmetics. All rights reserved.</p>
          <p>Designed with ❤️ for premium beauty.</p>
        </div>
      </div>
    </footer>
  );
}
