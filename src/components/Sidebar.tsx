import React from 'react';

const navigation = [
  { name: 'How we do it', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Community', href: '#' },
];

const Sidebar = () => {
  return (
    <header className="bg-wagpay-dark pb-4 lg:pb-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-wagpay-dark py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Wagpay</span>
              <h2 className="text-3xl font-bold text-white">Wagpay.</h2>
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-full border border-transparent bg-gray-700 py-2 px-4 text-base font-medium text-white"
            >
              Swap Here
            </a>
            <a
              href="#"
              className="hidden rounded-full border border-transparent bg-white py-2 px-4 text-base font-medium text-wagpay-dark hover:bg-indigo-50 md:inline-block"
            >
              <span className="hidden md:inline lg:hidden">
                Download Extension
              </span>
              <span className="hidden lg:inline">Download Extension</span>
            </a>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-500 lg:hidden" />
        <div className="mt-4 flex justify-center space-x-6 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
