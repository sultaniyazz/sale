import React from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const brandName = "SaleMarket"

  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:gap-6 md:justify-between md:items-start">
          {/* Brand & Contact */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                <MapPin className="text-blue-500" size={28} />
              </span>
              <span className="text-2xl font-extrabold text-blue-700 tracking-tight">{brandName}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              O‘zbekiston bo‘ylab zamonaviy va ishonchli onlayn savdo platformasi.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400" />
                <span>+998 90 123 45 67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <span>info@salemarket.uz</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-400" />
                <span>Toshkent, Amir Temur ko‘chasi 10</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Bo‘limlar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Bosh sahifa</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Erkaklar</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Ayollar</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Aloqa</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex gap-5">
              <a href="#" className="hover:text-gray-900 transition" aria-label="Github">
                <Github size={28} />
              </a>
              <a href="#" className="hover:text-blue-700 transition" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
              <a href="#" className="hover:text-blue-500 transition" aria-label="Instagram">
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Yangiliklarga obuna bo‘ling</h3>
            <p className="text-sm text-gray-500 mb-3">
              Emailingizni kiriting va eng so‘nggi yangiliklardan xabardor bo‘ling:
            </p>
            <form className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="email"
                placeholder="Emailingiz"
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition flex-shrink-0"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        {/* Bottom line */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-gray-400 border-gray-200">
          &copy; {new Date().getFullYear()} <span className="text-blue-700 font-semibold">{brandName}</span>. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}

export default Footer