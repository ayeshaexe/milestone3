"use client";
import { useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white-200 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className="max-w-[1440px] lg:mx-[55px] mx-[20px] sm:px-6 mt-[20px]">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <div className='flex gap-[120px]'>
          <div className="logo flex-shrink-0 text-xl font-bold uppercase">
          <Link href="#">Frontend Fusion</Link>
          </div>
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 justify-center">
            <Link href="/" className="font-bold text-[#737373] text-[14px]">HOME</Link>
            <Link href="/" className="font-bold text-[#737373] text-[14px]">BLOG</Link>
            <Link href="/about" className="font-bold text-[#737373] text-[14px]">ABOUT</Link>
            <Link href="/contact" className="font-bold text-[#737373] text-[14px]">CONTACT</Link>
          </div>
          </div>
          {/* Icons for Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-[]">
          <Button variant="outline">LOGIN</Button>
          <Button variant="outline">SIGNUP</Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
          <div className="px-4 flex space-x-4 icons">
          </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <BiMenuAltRight className="w-6 h-6 icon1" />
              ) : (
                <BiMenuAltRight className="w-6 h-6 icon1" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3 links text-[20px] font-normal leading-[50px] flex flex-col ml-[10px] md:justify-center md:items-center">
            <div className='flex flex-col justify-items-start text-left md:justify-center md:items-center gap-2'>
            <Link href="/" className="">HOME</Link>
            <Link href="/blog" className="">BLOG</Link>
            <Link href="/about" className="">ABOUT</Link>
            <Link href="/contact" className="">CONTACT</Link>
            </div>
            <div className="lg:flex items-center space-x-4">
            <Button variant="outline">LOGIN</Button>
            <Button variant="outline">SIGNUP</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}