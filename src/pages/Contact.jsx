import React, { useState } from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className='flex flex-col justify-between'>
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <form
          className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-xl p-12"
          autoComplete="off"
        >
          <h2 className="text-4xl font-bold text-indigo-700 mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-500 text-center mb-8 text-base">We'd love to hear from you!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="first-name"
              placeholder="First name"
              className="rounded-lg border border-gray-300 px-5 py-3 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-700 text-base"
            />
            <input
              type="text"
              name="last-name"
              placeholder="Last name"
              className="rounded-lg border border-gray-300 px-5 py-3 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-700 text-base"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="mt-6 rounded-lg border border-gray-300 px-5 py-3 w-full focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-700 text-base"
          />
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            className="mt-6 rounded-lg border border-gray-300 px-5 py-3 w-full focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-700 text-base"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            className="mt-6 rounded-lg border border-gray-300 px-5 py-3 w-full focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-gray-700 text-base resize-none"
          />
          <div className="flex items-center mt-6 mb-3">
            <input
              id="agree"
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="accent-indigo-600 h-5 w-5 rounded"
            />
            <label htmlFor="agree" className="ml-3 text-sm text-gray-600">
              I agree to the&nbsp;
              <a href="#" className="text-indigo-600 underline font-medium">privacy policy</a>
            </label>
          </div>
          <button
            type="submit"
            disabled={!agreed}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition disabled:opacity-60 text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
      <div><Footer /></div>
    </div>
  )
}