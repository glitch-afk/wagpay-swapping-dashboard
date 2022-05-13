import Link from 'next/link';

import Navbar from '@/components/Navbar';
import { Hero } from '@/layouts/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use swapping Dashboard"
        />
      }
    >
      <Navbar />
      <Hero>
        <main className="relative h-fit pt-24 pb-12 lg:mb-0">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="flex flex-col items-center justify-center space-y-8 sm:px-6 sm:text-center md:mx-auto md:max-w-5xl md:items-start lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="flex w-full flex-col items-center justify-center space-y-1 md:space-y-2 lg:items-start">
                  <span className="text-5xl font-extrabold text-wagpay-dark drop-shadow-lg sm:text-7xl">
                    Frictionless
                  </span>
                  <span className="bg-gradient-to-br from-orange-700 to-yellow-400 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-lg sm:text-7xl">
                    Crosschain
                  </span>
                  <span className="text-5xl font-extrabold text-wagpay-dark drop-shadow-lg sm:text-7xl">
                    Swapping
                  </span>
                </div>
                <div className="flex w-full items-center justify-center text-center text-lg lg:justify-start">
                  Helping you choose the best bridge for your swap
                </div>
                <div className="flex w-full items-center justify-center space-x-2 md:space-x-6 lg:justify-start">
                  <Link href="/swap">
                    <a className="rounded-full bg-wagpay-dark py-3 px-6 text-white drop-shadow-lg">
                      Swap Here
                    </a>
                  </Link>
                  <button className="rounded-full border border-wagpay-dark bg-white py-3 px-6 text-wagpay-dark drop-shadow-lg">
                    Download Extension
                  </button>
                </div>
              </div>
              <div className="mt-16 w-full sm:mt-24 lg:col-span-6 lg:mt-0">
                <div className="sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                  <img src="/images/group.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Hero>
    </Main>
  );
};

export default Index;
