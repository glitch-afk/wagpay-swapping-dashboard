import Link from 'next/link';
import React from 'react';

const Navbar2 = () => {
  return (
    <header className="bg-wagpay-dark pb-4 lg:pb-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-wagpay-dark py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Wagpay</span>
                <h2 className="text-3xl font-bold text-white">Wagpay.</h2>
              </a>
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="rounded-full border border-transparent bg-white py-2 px-4 text-base font-medium text-wagpay-dark hover:bg-indigo-50"
            >
              <span>Connect Wallet</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
