import React from 'react'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <div className="relative flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 py-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="text-blue-600">SaleMarket</span> — Oson va tez savdo maydoni!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Mahsulotlaringizni joylang, yangi xaridorlar toping va bozorda muvaffaqiyatga erishing.
              Biz bilan savdo qilish oson, xavfsiz va zamonaviy!
            </p>
            <div className="flex gap-4">
              <NavLink to={'men'} className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                E'lonlarni ko‘rish
              </NavLink>
            </div>
            {/* Statistika */}
            <div className="flex gap-8 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-600">20+</span>
                <span className="text-gray-500 text-sm">Aktiv e'lonlar</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-600">121+</span>
                <span className="text-gray-500 text-sm">Xaridorlar</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-600">99%</span>
                <span className="text-gray-500 text-sm">Mamnun mijozlar</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/articles/sales_and_marketing_b50b46f3-8a4b-4ca3-a985-5005544f8b7e.jpg?v=1729111046"
              alt="Savdo banner"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Tez va oson" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Tez va oson</h3>
            <p className="text-gray-500">E'lon joylash va mahsulot topish juda oson va tez amalga oshadi.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Xavfsiz savdo" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Xavfsiz savdo</h3>
            <p className="text-gray-500">Foydalanuvchilarimiz xavfsizligi va ishonchi biz uchun muhim.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Keng imkoniyatlar" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Keng imkoniyatlar</h3>
            <p className="text-gray-500">Turli toifadagi mahsulotlar va xizmatlar uchun keng imkoniyatlar.</p>
          </div>
        </div>

        {/* Qanday ishlaydi */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Qanday ishlaydi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center border border-blue-100">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="Ro‘yxatdan o‘tish" className="w-14 h-14 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Ro‘yxatdan o‘ting</h4>
              <p className="text-gray-500">Foydalanuvchi sifatida ro‘yxatdan o‘ting yoki tizimga kiring.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center border border-blue-100">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" alt="E'lon joylash" className="w-14 h-14 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-blue-700">E'lon joylang</h4>
              <p className="text-gray-500">Mahsulotingiz haqida ma'lumot kiriting va e'lonni joylang.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center border border-blue-100">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt="Savdo qilish" className="w-14 h-14 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Savdo qiling</h4>
              <p className="text-gray-500">Xaridorlar bilan bog‘laning va tez savdo qiling!</p>
            </div>
          </div>
        </div>

        {/* Foydali maslahatlar */}
        <div className="mt-20 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Foydali maslahatlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828977.png" alt="Sifatli rasm" className="w-14 h-14 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Sifatli rasm yuklang</h4>
              <p className="text-gray-500">Mahsulotingizni yaxshi ko‘rsatadigan, sifatli suratlar joylang.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828986.png" alt="To‘liq ma'lumot" className="w-14 h-14 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-blue-700">To‘liq ma'lumot bering</h4>
              <p className="text-gray-500">E'loningizda mahsulot haqida to‘liq va aniq ma'lumot yozing.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828991.png" alt="Xavfsizlik" className="w-14 h-14 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Xavfsizlikka e'tibor bering</h4>
              <p className="text-gray-500">Hech qachon oldindan to‘lov qilmang va faqat ishonchli xaridorlar bilan ishlang.</p>
            </div>
          </div>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home