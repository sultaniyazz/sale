import React, { useState } from 'react'
import { UserCircleIcon, EnvelopeIcon, UserIcon, IdentificationIcon, MapPinIcon, GlobeAltIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

export default function Profile() {
  const [profile, setProfile] = useState({
    username: '',
    about: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    photo: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'photo') {
      setProfile(prev => ({ ...prev, photo: files[0] }))
    } else {
      setProfile(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleReset = () => {
    setProfile({
      username: '',
      about: '',
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      city: '',
      photo: null,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profil saqlandi!')
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen w-full bg-white px-0 py-8 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="relative">
          {profile.photo ? (
            <img
              src={URL.createObjectURL(profile.photo)}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
          ) : (
            <UserCircleIcon className="w-24 h-24 text-gray-300" />
          )}
          <label className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full px-2 py-1 text-xs cursor-pointer shadow hover:bg-gray-700 transition flex items-center gap-1">
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
            <PencilSquareIcon className="w-4 h-4" />
            O‘zgartirish
          </label>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <UserIcon className="w-6 h-6 text-gray-400" />
            {profile.firstName || 'Ismingiz'}
          </div>
          <div className="text-gray-500 flex items-center justify-center gap-2">
            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
            {profile.email || 'Emailingiz'}
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <UserIcon className="w-4 h-4" /> Foydalanuvchi nomi
          </label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="foydalanuvchi123"
            className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <IdentificationIcon className="w-4 h-4" /> Ism
          </label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            placeholder="Ismingiz"
            className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <IdentificationIcon className="w-4 h-4" /> Familiya
          </label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            placeholder="Familiyangiz"
            className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <EnvelopeIcon className="w-4 h-4" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <GlobeAltIcon className="w-4 h-4" /> Mamlakat
          </label>
          <input
            type="text"
            name="country"
            value={profile.country}
            onChange={handleChange}
            placeholder="Mamlakat"
            className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" /> Shahar
          </label>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            placeholder="Shahar"
            className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="w-full max-w-3xl mt-8 px-4">
        <label className=" text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
          <PencilSquareIcon className="w-4 h-4" /> O‘zingiz haqingizda
        </label>
        <textarea
          name="about"
          value={profile.about}
          onChange={handleChange}
          rows={3}
          placeholder="O‘zingiz haqingizda qisqacha yozing..."
          className="w-full rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 px-4 py-2 text-gray-700 transition placeholder:text-gray-400"
        />
      </div>

      <div className="w-full max-w-3xl flex justify-end gap-4 mt-8 px-4">
        <button
          type="reset"
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
          onClick={handleReset}
        >
          Tozalash
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
        >
          Saqlash
        </button>
      </div>
    </form>
  )
}