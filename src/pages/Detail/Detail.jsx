'use client'

import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup, Radio } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Detail() {
  const { slug } = useParams()
  const product = useSelector(state =>
    state.dataSlice.products.find(item => item.slug === slug)
  )

  // Har doim hooklar chaqirilsin!
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")
  const [selectedSize, setSelectedSize] = useState("") // boshlang'ichda hech biri tanlanmagan

  if (!product || !product.colors || !product.sizes) {
    return (
      <div className="py-20 text-center text-xl text-gray-500">
        Mahsulot topilmadi yoki to‘liq emas
      </div>
    )
  }

  // reviews fallback
  const reviews = product.reviews || { average: 0, totalCount: 0 }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-8">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/90 shadow-2xl p-6 md:p-12 flex flex-col lg:flex-row gap-10">
        {/* Image section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-blue-100 via-white to-pink-100 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Info section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-xs text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-600 font-medium">Bosh sahifa</a>
                <span className="mx-2">/</span>
              </li>
              <li>
                <span className="font-medium text-gray-500">{product.name}</span>
              </li>
            </ol>
          </nav>

          {/* Title & Brand */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">{product.brand}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`}>
                {product.inStock ? 'Sotuvda' : 'Yo‘q'}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          </div>

          {/* Price & Reviews */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-4xl font-bold text-blue-700">${product.price}</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={classNames(
                    product?.rating >= star ? 'text-yellow-400' : 'text-gray-200',
                    'h-5 w-5'
                  )}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">{product.rating || 0} </span>
            </div>
          </div>


          {/* Color selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Rang</h3>
            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex gap-3">
              {product.colors.map((color) => (
                <Radio
                  key={color}
                  value={color}
                  className={({ checked }) =>
                    classNames(
                      checked
                        ? "bg-blue-600 text-white border-blue-600 ring-2 ring-blue-400"
                        : "bg-gray-100 text-gray-700 border-gray-200",
                      "cursor-pointer rounded-full px-4 py-1 text-sm font-semibold capitalize border transition outline-none"
                    )
                  }
                >
                  {({ checked }) => (
                    <span className="flex items-center gap-2">
                      <span
                        className={classNames(
                          "inline-block w-4 h-4 rounded-full border border-gray-300",
                          checked ? "border-blue-600 ring-2 ring-blue-400" : ""
                        )}
                        style={{
                          backgroundColor:
                            color === "white" ? "#fff"
                              : color === "black" ? "#222"
                                : color === "red" ? "#ef4444"
                                  : color === "blue" ? "#3b82f6"
                                    : color === "green" ? "#22c55e"
                                      : color === "yellow" ? "#fde047"
                                        : color === "pink" ? "#ec4899"
                                          : color === "gray" ? "#6b7280"
                                            : color // fallback for custom colors
                        }}
                      />
                      <span className="capitalize">{color}</span>
                    </span>
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </div>

          {/* Size selection */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">O‘lcham</h3>
            </div>
            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <Radio
                  key={size}
                  value={size}
                  className={({ checked }) =>
                    classNames(
                      checked
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-100 text-gray-700 border-gray-200",
                      "cursor-pointer rounded-md border px-4 py-2 text-sm font-semibold text-center transition"
                    )
                  }
                >
                  {({ checked }) => (
                    <span className="flex items-center justify-center w-12 capitalize">
                      {size}
                    </span>
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </div>

          {/* Add to bag button */}
          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-white font-bold text-lg hover:bg-blue-700 transition"
          >
            Savatga qo‘shish
          </button>

          {/* Highlights & Details */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Afzalliklari</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
              {product.highlights && product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">Batafsil</h3>
            <p className="text-sm text-gray-600">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}