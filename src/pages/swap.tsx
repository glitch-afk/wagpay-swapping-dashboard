import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

import Navbar2 from '@/components/Navbar2';
import { Hero } from '@/layouts/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Toggle from '@/utils/toggle';

const Swap = () => {
  return (
    <Main
      meta={
        <Meta
          title="WagPay"
          description="A Powerful yet simple to use swapping Dashboard"
        />
      }
    >
      <Navbar2 />
      <Hero>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="mx-4 rounded-lg bg-wagpay-dark py-8 px-4 shadow sm:px-6">
              {/* card starts here */}
              <div className="grid grid-cols-7 place-content-center gap-y-6 sm:grid-cols-7 sm:gap-y-0 sm:gap-x-2">
                <div className="col-span-3">
                  <label
                    htmlFor="from"
                    className="block text-sm font-medium text-white"
                  >
                    From
                  </label>
                  <select
                    id="sender"
                    name="sender"
                    className="mt-2 block w-full rounded-md border border-gray-200 bg-transparent p-2 text-white shadow-sm sm:text-sm"
                  >
                    <option className="bg-wagpay-dark">Polygon</option>
                    <option className="bg-wagpay-dark">USDC</option>
                    <option className="bg-wagpay-dark">Ethereum</option>
                    <option className="bg-wagpay-dark">Avalanche</option>
                    <option className="bg-wagpay-dark">BNB</option>
                  </select>
                </div>
                <div className="col-span-1 mt-8  place-self-center sm:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="rounded-full bg-gray-700 p-1"
                    aria-hidden="true"
                    role="img"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M388.9 266.3c-5.1-5-5.2-13.3-.1-18.4L436 200H211c-7.2 0-13-5.8-13-13s5.8-13 13-13h224.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c1.1 1.2 2.1 2.5 2.7 4.1.7 1.6 1 3.3 1 5 0 3.4-1.3 6.6-3.7 9.1l-69 70c-5 5.2-13.2 5.3-18.3.3z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M123.1 404.3c5.1-5 5.2-13.3.1-18.4L76.1 338H301c7.2 0 13-5.8 13-13s-5.8-13-13-13H76.1l47.2-47.9c5-5.1 5-13.3-.1-18.4-5.1-5-13.3-5-18.4.1l-69 70c-1.1 1.2-2.1 2.5-2.7 4.1-.7 1.6-1 3.3-1 5 0 3.4 1.3 6.6 3.7 9.1l69 70c5 5.2 13.2 5.3 18.3.3z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="to"
                    className="block text-sm font-medium text-white"
                  >
                    To
                  </label>
                  <select
                    id="sender"
                    name="sender"
                    className="mt-2 block w-full rounded-md border border-gray-200 bg-transparent p-2 text-white shadow-sm sm:text-sm"
                  >
                    <option className="bg-wagpay-dark">USDC</option>
                    <option className="bg-wagpay-dark">Polygon</option>
                    <option className="bg-wagpay-dark">Ethereum</option>
                    <option className="bg-wagpay-dark">Avalanche</option>
                    <option className="bg-wagpay-dark">BNB</option>
                  </select>
                </div>
                {/* you send section */}
                <div className="col-span-7 mt-4 sm:mt-7">
                  <label
                    htmlFor="sender"
                    className="block text-sm font-medium text-white"
                  >
                    You Send
                  </label>
                  <div className="flex w-full">
                    <div className="relative  w-3/4 rounded-md shadow-sm">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="mt-2 block w-full rounded-l-md border border-r-0 border-gray-200 bg-transparent p-2 text-white shadow-sm focus:outline-none sm:text-sm"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-xs text-gray-300">MAX</span>
                      </div>
                    </div>
                    <select
                      id="sender"
                      name="sender"
                      className="mt-2 block w-1/4 rounded-r-md border border-gray-200 bg-transparent p-1 text-white shadow-sm sm:text-sm"
                    >
                      <option className="bg-wagpay-dark">USDC</option>
                      <option className="bg-wagpay-dark">Polygon</option>
                      <option className="bg-wagpay-dark">Ethereum</option>
                      <option className="bg-wagpay-dark">Avalanche</option>
                      <option className="bg-wagpay-dark">BNB</option>
                    </select>
                  </div>
                </div>
                {/* You receive section */}
                <div className="col-span-7 mt-0 sm:mt-5">
                  <label
                    htmlFor="receive"
                    className="block text-sm font-medium text-white"
                  >
                    You Receive
                  </label>
                  <div className="flex w-full">
                    <div className="relative w-3/4 rounded-md shadow-sm">
                      <input
                        type="number"
                        placeholder="0.00"
                        className="mt-2 block w-full rounded-l-md border border-r-0 border-gray-200 bg-transparent p-2 text-white shadow-sm focus:outline-none sm:text-sm"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-xs text-gray-300">MAX</span>
                      </div>
                    </div>
                    <select
                      id="sender"
                      name="sender"
                      className="mt-2 block w-1/4 rounded-r-md border border-gray-200 bg-transparent p-1 text-white shadow-sm sm:text-sm"
                    >
                      <option className="bg-wagpay-dark">USDC</option>
                      <option className="bg-wagpay-dark">Polygon</option>
                      <option className="bg-wagpay-dark">Ethereum</option>
                      <option className="bg-wagpay-dark">Avalanche</option>
                      <option className="bg-wagpay-dark">BNB</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-7 mt-1 flex items-center justify-between sm:mt-6">
                  <span className="text-white">
                    Select bridge Automatically
                  </span>
                  <div>
                    <Toggle />
                  </div>
                </div>
                {/* connect wallet button */}
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    mounted,
                  }) => {
                    return (
                      <div
                        {...(!mounted && {
                          'aria-hidden': true,
                          style: {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                          },
                        })}
                        className="col-span-7 sm:mt-6"
                      >
                        {(() => {
                          if (!mounted || !account || !chain) {
                            return (
                              <button
                                onClick={openConnectModal}
                                type="button"
                                className="col-span-7 w-full rounded-full border border-transparent bg-white py-2 px-4 text-base font-medium text-wagpay-dark hover:bg-indigo-50"
                              >
                                Connect Wallet
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="col-span-7 w-full rounded-full border border-transparent bg-red-600 py-2 px-4 text-base font-medium text-white"
                              >
                                Wrong network
                              </button>
                            );
                          }
                          return (
                            <div className="flex w-full flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 md:space-x-4 lg:space-x-6">
                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="col-span-7 w-full rounded-full border border-transparent bg-white px-1 py-2 text-base text-wagpay-dark hover:bg-indigo-50"
                              >
                                {account.displayName}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </Main>
  );
};

export default Swap;
