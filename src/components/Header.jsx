import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, UserIcon, UserCircleIcon, EnvelopeIcon, IdentificationIcon, MapPinIcon, GlobeAltIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { navigation } from '../constants/navbar'
import { NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'

// Modal component (customized dark UI with icons)
function Modal({ open, onClose, onSave }) {
  const [form, setForm] = useState({
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
      setForm(prev => ({ ...prev, photo: files[0] }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(form)
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="bg-neutral-900 text-white rounded-2xl p-8 w-full max-w-lg shadow-2xl relative border border-gray-700">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <XMarkIcon className="w-7 h-7" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <UserCircleIcon className="w-8 h-8 text-blue-400" />
          Profilga kirish settings
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              {form.photo ? (
                <img
                  src={URL.createObjectURL(form.photo)}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
                />
              ) : (
                <UserCircleIcon className="w-20 h-20 text-gray-700 bg-gray-800 rounded-full" />
              )}
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full px-2 py-1 text-xs cursor-pointer shadow hover:bg-blue-700 transition flex items-center gap-1">
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                <UserIcon className="w-4 h-4" /> Foydalanuvchi nomi
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="foydalanuvchi123"
                className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                <IdentificationIcon className="w-4 h-4" /> Ism
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Ismingiz"
                className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                <IdentificationIcon className="w-4 h-4" /> Familiya
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Familiyangiz"
                className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                <EnvelopeIcon className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                <GlobeAltIcon className="w-4 h-4" /> Mamlakat
              </label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Mamlakat"
                className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" /> Shahar
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Shahar"
                className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className=" text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
              <PencilSquareIcon className="w-4 h-4" /> O‘zingiz haqingizda
            </label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleChange}
              rows={2}
              placeholder="O‘zingiz haqingizda qisqacha yozing..."
              className="w-full rounded-lg border border-gray-700 bg-neutral-800 text-white px-4 py-2 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition mt-2"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  // User state
  const [user, setUser] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // LocalStorage'dan user olish
  useEffect(() => {
    const stored = localStorage.getItem('saleUser')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  // User o'zgarsa localStorage'ga yozish
  useEffect(() => {
    if (user) {
      localStorage.setItem('saleUser', JSON.stringify(user))
    }
  }, [user])

  // Sign out
  const handleSignOut = () => {
    setUser(null)
    localStorage.removeItem('saleUser')
  }

  // User navigation
  const userNavigation = [
    { name: 'Your Profile', href: '/profile' },
    { name: 'Sign out', href: '#', onClick: handleSignOut },
  ]

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={setUser}
      />
      <div className="min-h-full">
        <Disclosure as="nav" className="backdrop-blur-md bg-white/70 shadow z-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                      <MapPin className="text-blue-500" size={28} />
                    </span>
                    <span className="text-2xl font-extrabold text-blue-700 tracking-tight">SaleMarket</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className={({ isActive }) =>
                          classNames(
                            'relative rounded-md px-3 py-2 text-base transition flex flex-col items-center',
                            isActive
                              ? 'text-indigo-700 font-semibold after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:rounded-full after:bg-indigo-600 after:scale-100 after:opacity-100 after:transition-all after:duration-500'
                              : 'text-gray-700 hover:text-indigo-700 after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:rounded-full after:bg-indigo-600 after:scale-0 after:opacity-0 after:transition-all after:duration-500'
                          )
                        }
                      >
                        <span className="inline-flex items-center gap-1">
                          <item.icon className="size-5" />
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full  p-1 text-gray-400  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-7" />
                  </button>

                  {/* Profile dropdown */}
                  {user ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          {user.photo ? (
                            <img alt="" src={URL.createObjectURL(user.photo)} className="size-10 rounded-full object-cover" />
                          ) : user.imageUrl ? (
                            <img alt="" src={user.imageUrl} className="size-10 rounded-full object-cover" />
                          ) : (
                            <UserIcon className="size-10 text-white bg-gray-700 rounded-full p-2" />
                          )}
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            {item.onClick ? (
                              <button
                                onClick={item.onClick}
                                className="block w-full text-left px-4 py-2 text-sm text-black data-focus:bg-gray-100 data-focus:outline-hidden"
                              >
                                {item.name}
                              </button>
                            ) : (
                              <NavLink
                                to={item.href}
                                className="block px-4 py-2 text-sm text-black data-focus:bg-gray-100 data-focus:outline-hidden"
                              >
                                {item.name}
                              </NavLink>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <button
                      className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                      onClick={() => setModalOpen(true)}
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    <item.icon className="size-5" />
                    {item.name}
                  </span>
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                {user ? (
                  <>
                    <div className="shrink-0">
                      {user.photo ? (
                        <img alt="" src={URL.createObjectURL(user.photo)} className="size-10 rounded-full object-cover" />
                      ) : user.imageUrl ? (
                        <img alt="" src={user.imageUrl} className="size-10 rounded-full object-cover" />
                      ) : (
                        <UserIcon className="size-10 text-white bg-gray-700 rounded-full p-2" />
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base/5 font-medium text-black">{user.firstName || user.username || user.name}</div>
                      <div className="text-sm font-medium text-black-400">{user.email}</div>
                    </div>
                  </>
                ) : (
                  <button
                    className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    onClick={() => setModalOpen(true)}
                  >
                    Sign In
                  </button>
                )}
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              {user && (
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="button"
                      onClick={item.onClick}
                      className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white w-full text-left"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              )}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  )
}