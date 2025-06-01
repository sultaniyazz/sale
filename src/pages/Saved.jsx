import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Heart } from 'lucide-react'

export const Saved = () => {
  const [savedIds, setSavedIds] = useState([])
  const [liked, setLiked] = useState({})
  const products = useSelector(state => state.dataSlice.products)

  // LocalStorage'dan like holatini olish
  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('likedProducts') || '{}')
    setLiked(all)
    setSavedIds(Object.keys(all).filter(id => all[id]))
  }, [])

  // Like bosilganda ochirish yoki qo'shish
  const toggleLike = (id) => {
    const updated = { ...liked, [id]: !liked[id] }
    setLiked(updated)

    const newSavedIds = Object.keys(updated).filter(k => updated[k])
    setSavedIds(newSavedIds)

    // localStorage yangilash
    if (updated[id]) {
      // Like bosilgan — qo‘shish
      const all = JSON.parse(localStorage.getItem('likedProducts') || '{}')
      all[id] = true
      localStorage.setItem('likedProducts', JSON.stringify(all))
    } else {
      // Unlike bosilgan — o‘chirish
      const all = JSON.parse(localStorage.getItem('likedProducts') || '{}')
      delete all[id]
      localStorage.setItem('likedProducts', JSON.stringify(all))
    }
  }


  const savedProducts = products.filter(
    p => savedIds.includes(p.id + p.name)
  )

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className="relative flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 w-full">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center tracking-tight">Saqlangan mahsulotlar</h2>
        {savedProducts.length === 0 ? (
          <div className="text-center text-gray-400 text-lg py-20">Saqlangan mahsulotlar yo‘q</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {savedProducts.map(product => {
              const id = product.id + product.name
              return (
                <div
                  key={id}
                  className="relative bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-blue-100 group hover:shadow-blue-100 transition-shadow duration-300"
                >
                  {/* Like button */}
                  <button
                    type="button"
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleLike(id)
                    }}
                    className="absolute lg:top-4 top-2 lg:right-4 right-2 z-10 rounded-full p-2.5 bg-white/90 hover:bg-blue-100 shadow transition"
                    aria-label="Like"
                  >
                    <Heart
                      className={`lg:size-6 size-5 transition-colors ${liked[id] ? 'fill-blue-500 text-blue-500' : 'text-gray-300'}`}
                      fill={liked[id] ? 'currentColor' : 'none'}
                    />
                  </button>
                  <Link
                    to={`/detail/${product.slug}`}
                    className="flex-1 flex flex-col"
                  >
                    <div className="bg-gradient-to-t from-blue-10 via-white to-white p-5 pb-0 flex items-center justify-center">
                      <img
                        alt={product.name}
                        src={product.image}
                        className="w-full lg:h-60 object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-3 lg:p-6 pt-4">
                      <h3 className="lg:text-lg font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                      <p className="lg:text-sm text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="lg:text-xl font-bold text-blue-700">${product.price}</span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`}>
                          {product.inStock ? 'Sotuvda' : 'Yo‘q'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-6 py-3 border-t bg-blue-10">
                      <span className="text-sm font-medium text-gray-600">{product.brand}</span>
                      <span className="text-sm flex items-center gap-1 text-blue-10 font-semibold">
                        {product.rating}
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div><Footer /></div>
    </div>
  )
}