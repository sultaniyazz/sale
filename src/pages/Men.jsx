import React, { useState, useEffect } from 'react'
import { Heart, Star } from 'lucide-react'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Men() {
  const [liked, setLiked] = useState({})
  const menProducts = useSelector(state =>
    state.dataSlice.products.filter(item => item.gender === 'male')
  )

  // LocalStorage'dan like holatini olish
  useEffect(() => {
    const stored = localStorage.getItem('likedProducts')
    if (stored) setLiked(JSON.parse(stored))
  }, [])

  // liked o'zgarsa localStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(liked))
  }, [liked])

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="relative flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-10 via-white to-blue-20" />
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center tracking-tight">Erkaklar uchun mahsulotlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {menProducts.map((product) => (
              <Link
                to={`/detail/${product.slug}`}
                key={product.id}
                className="relative bg-white z-10 rounded-3xl  shadow-xl hover:shadow-blue-100 transition-shadow duration-300 flex flex-col overflow-hidden border border-blue-100 group"
              >
                {/* Like button */}
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleLike(product.id + product.name)
                  }}
                  className="absolute top-4 right-4 z-10 rounded-full p-2.5 bg-white/90 hover:bg-blue-100 shadow transition"
                  aria-label="Like"
                >
                  <Heart
                    className={`size-6 transition-colors ${liked[product.id + product.name] ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
                    fill={liked[product.id + product.name] ? 'currentColor' : 'none'}
                  />
                </button>
                {/* Product image */}
                <div className="bg-gradient-to-t from-blue-10 via-white to-white p-5 pb-0 flex items-center justify-center">
                  <img
                    alt={product.name}
                    src={product.image}
                    className="w-full h-60 object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Product info */}
                <div className="flex-1 flex flex-col justify-between p-6 pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-blue-700">${product.price}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`}>
                      {product.inStock ? 'Sotuvda' : 'Yo‘q'}
                    </span>
                  </div>
                </div>
                {/* Brand & rating bar */}
                <div className="flex items-center justify-between px-6 py-3 border-t bg-blue-10">
                  <span className="text-sm font-medium text-gray-600">{product.brand}</span>
                  <span className="text-sm flex items-center gap-1 text-blue-10 font-semibold">
                    <Star className="size-5 fill-yellow-400 text-yellow-400" strokeWidth={0} />
                    {product.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}