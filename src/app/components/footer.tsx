import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div>
          <Image src="/urminelogo-negate.webp" height={20} width={100} alt={""}/>
          <br/>
            <p className="text-gray-400">We are a technology company committed to providing innovative solutions</p>
            <p className="text-gray-400 mt-4">© URmine Plus Szolgaltato Kft.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500">About</Link></li>
              <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
              <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><p className="text-gray-400">Email: info@urmine.com</p></li>
              <li><p className="text-gray-400">Phone: +1 800 123 4567</p></li>
              <li><p className="text-gray-400">Address: 123 Tech Street, City, Country</p></li>
            </ul>
          </div>

          {/* Social Media Section */}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400">Powered by URMINE - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;