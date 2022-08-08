import React from 'react';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
      <Link href="/about"><a className="mr-5 hover:text-gray-900">About</a></Link>
      <Link href="/product"><a className="mr-5 hover:text-gray-900">Product</a></Link>
      <Link href="/contacts"><a className="hover:text-gray-900">Contact</a></Link>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="./logo.svg" alt="logo" width={28}className="my-2"/>
      <span className="ml-3 text-xl">ECity-Kart</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <button className="flex pd-4 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text- md:px-6  my-2">Login</button>
    </div>
  </div>
</header>
    </div>
  )
}
