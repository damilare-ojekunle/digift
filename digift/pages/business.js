import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Business(props) {
  return (
    <>
      <section>
        <div className="min-h-screen">
          <Header />
          <div className=" mt-16 mx-16 bg-mainBlue bg-image rounded-[32px]  ">
            <div className="py-32 relative">
              <div className="flex justify-center  ">
                <svg
                  width="45"
                  height="37"
                  viewBox="0 0 45 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_7590)">
                    <path
                      d="M41.1323 31.7874L29.1367 29.2642C28.1444 29.0554 27.4653 28.1371 27.5565 27.1272L28.2662 19.265C28.3709 18.1057 27.4672 17.1022 26.3032 17.0854L18.1875 16.9682C16.985 16.9508 16.0696 15.8837 16.2355 14.6926L17.3305 6.82886C17.4868 5.70696 16.681 4.67935 15.5542 4.56351L2.99963 3.27279"
                      stroke="white"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_7590"
                      x="-0.000610352"
                      y="0.272461"
                      width="44.1336"
                      height="36.5156"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.360784 0 0 0 0 0.647059 0 0 0 0 1 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_7590"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_7590"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <h2 className="text-white text-7xl font-bold  ">
                  Eliminate Bank{" "}
                </h2>
                <svg
                  width="45"
                  height="37"
                  viewBox="0 0 45 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_7589)">
                    <path
                      d="M2.99958 31.7874L14.9952 29.2642C15.9875 29.0554 16.6666 28.1371 16.5754 27.1272L15.8657 19.265C15.761 18.1057 16.6648 17.1022 17.8287 17.0854L25.9444 16.9682C27.147 16.9508 28.0623 15.8837 27.8964 14.6926L26.8014 6.82886C26.6452 5.70696 27.451 4.67935 28.5777 4.56351L41.1323 3.27279"
                      stroke="white"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_7589"
                      x="-0.0010376"
                      y="0.272461"
                      width="44.1336"
                      height="36.5156"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.360784 0 0 0 0 0.647059 0 0 0 0 1 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_7589"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_7589"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-white text-7xl font-bold ">
                  restrictions with our
                </h2>

                <h2 className="text-white text-7xl font-bold ">
                  unique gift cards
                </h2>
                <p className="text-white text-center max-w-xs mt-10">
                  Shop on Amazon, ASOS, 1800 flowers, Whilst paying for
                  utilities and even more.
                </p>
                <button className="flex items-center justify-between bg-white px-6 py-4 rounded-md mt-10 text-mainBlue  btn-shadow">
                  Start Shopping
                </button>
              </div>
              <img className="absolute bottom-4 " src="amazon.png" />
              <img className="absolute bottom-4 right-1 " src="atm.png" />
            </div>
          </div>
          <div className="mt-32 mx-8 ">
            <h2 className="inline-block font-bold text-3xl  mx-16 mb-16 ">
              Latest Arrival
            </h2>
            <div className="flex justify-between">
              <div className="w-1/6  bg-fadeBlue rounded-md h-1/3">
                <div className="flex justify-between py-8 px-8">
                  <p className="text-black font-bold text-lg">Filters</p>
                  <p className="text-blue-500 font-bold text-lg">Reset</p>
                </div>
                <div className="px-8 pb-32">
                  <p className="text-black font-semibold ">Categories</p>
                  <div className="mt-8">
                    <div className="flex items-center space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">Ecommerce</label>
                    </div>
                    <div className="flex items-center  space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">Popular</label>
                    </div>
                    <div className="flex items-center  space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">
                        Airtime & Electricty
                      </label>
                    </div>
                    <div className="flex items-center  space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">Gaming</label>
                    </div>
                    <div className="flex items-center  space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">Electronics</label>
                    </div>
                    <div className="flex items-center  space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">
                        Clothes and Fashion
                      </label>
                    </div>
                    <div className="flex items-center space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">
                        Jewelry & Watches
                      </label>
                    </div>
                    <div className="flex items-center space-x-8 mb-8 ">
                      <input
                        type="checkbox"
                        id="ecomm"
                        name="ecomm"
                        value="Ecommerce"
                      />
                      <label className="text-textColor ">
                        Home & Furnitures
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4  rounded-md bg-fadeBlue  ">
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-1/4  rounded-md bg-fadeBlue  ">
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-1/4  rounded-md bg-fadeBlue  ">
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="bg-white shadow-md rounded-lg py-8 px-8 my-4 mx-4   ">
                  <span className="bg-fadeBlue rounded-full px-4 py-4 ">
                    Giftcard
                  </span>
                  <div className="my-8 flex items-center space-x-8">
                    <img src="card.png" />
                    <p>Amazon Gift Card</p>
                  </div>
                  <p className="text-sm text-textColor">
                    Amazon Gift Card is a global fashion destination for
                    20-somethings, selling all the freshest styles complemented
                    by exclusive content....
                  </p>
                  <div className="flex items-center mt-8">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99994 0.653809C3.13431 0.653809 -6.10352e-05 3.78818 -6.10352e-05 7.65381C-6.10352e-05 11.5194 3.13431 14.6538 6.99994 14.6538C10.8656 14.6538 13.9999 11.5194 13.9999 7.65381C13.9999 3.78818 10.8656 0.653809 6.99994 0.653809ZM6.99994 13.4663C3.79056 13.4663 1.18744 10.8632 1.18744 7.65381C1.18744 4.44443 3.79056 1.84131 6.99994 1.84131C10.2093 1.84131 12.8124 4.44443 12.8124 7.65381C12.8124 10.8632 10.2093 13.4663 6.99994 13.4663Z"
                        fill="#8A91A8"
                      />
                      <path
                        d="M6.24994 4.90381C6.24994 5.10272 6.32896 5.29349 6.46961 5.43414C6.61026 5.57479 6.80103 5.65381 6.99994 5.65381C7.19885 5.65381 7.38962 5.57479 7.53027 5.43414C7.67092 5.29349 7.74994 5.10272 7.74994 4.90381C7.74994 4.7049 7.67092 4.51413 7.53027 4.37348C7.38962 4.23283 7.19885 4.15381 6.99994 4.15381C6.80103 4.15381 6.61026 4.23283 6.46961 4.37348C6.32896 4.51413 6.24994 4.7049 6.24994 4.90381ZM7.37494 6.65381H6.62494C6.55619 6.65381 6.49994 6.71006 6.49994 6.77881V11.0288C6.49994 11.0976 6.55619 11.1538 6.62494 11.1538H7.37494C7.44369 11.1538 7.49994 11.0976 7.49994 11.0288V6.77881C7.49994 6.71006 7.44369 6.65381 7.37494 6.65381Z"
                        fill="#8A91A8"
                      />
                    </svg>
                    <p className="text-textColor">
                      This card has a fee of $ 0.99
                    </p>
                  </div>
                  <button className="  group  w-full bg-mainBlue text-white py-3 rounded-md mt-8">
                    <div className=" flex items-center justify-center space-x-4">
                      <p className="">Purchase card</p>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999878 0.653809L4.99988 4.65381L0.999878 8.65381"
                          stroke="white"
                          stroke-opacity="0.8"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </section>
      <section className="my-72 ">
        <div>
          <h1 className="text-6xl font-bold  text-center">
            “Hear what happy customers
            <br /> are saying about Digift”
          </h1>
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-[32%] mt-16 shadow-md">
              <p className="py-16 px-16 text-textColor ">
                “Digift stood out from the crowd with an impressive team and
                even more impressive mission: harnessing the power of giftcards
                enterprises to support people who are restricted by banks in
                Nigeria.”
              </p>
              <div className="flex items-center py-4 px-16 space-x-4">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_7960)">
                    <rect
                      x="-6.10352e-05"
                      y="0.615601"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#EBF4FF"
                    />
                    <path
                      d="M39.7383 43.0954C30.3009 50.362 17.1375 50.3038 7.76465 42.9543L14.6343 39.734C14.9615 39.5802 15.2754 39.3999 15.5731 39.1947C15.6635 39.1326 15.7538 39.0677 15.8399 38.9999C16.5876 38.4278 17.203 37.7012 17.6442 36.8695C17.9777 36.2306 18.1993 35.5391 18.2992 34.8253C18.3682 34.3621 18.4031 33.8945 18.4037 33.4263C18.4037 32.6187 18.3599 31.8112 18.3515 31.0023C18.3458 30.5543 18.3411 30.1067 18.3374 29.6597L18.6197 29.8008L19.3538 30.1806L19.6941 30.2385L23.6301 30.9077L28.0235 31.6559L28.1562 36.1735L28.1999 37.6503L28.2211 38.3674V38.414L29.9294 39.1086L39.7383 43.0954Z"
                      fill="#E18477"
                    />
                    <path
                      d="M28.2151 38.2402C27.7299 38.3237 27.2307 38.2464 26.7935 38.02L18.3695 31.1292C18.3596 30.8101 18.3511 31.1447 18.3469 30.8256C18.3412 30.3786 18.3365 29.931 18.3328 29.483L18.6151 29.6242L19.3492 30.004L19.6895 30.0619L23.6255 30.731L28.0189 31.4793L28.1516 35.9969L28.1954 37.4736L28.2165 38.1908V38.2374L28.2151 38.2402Z"
                      fill="#A76962"
                    />
                    <path
                      d="M34.5148 15.3499C36.9369 16.7219 38.8445 18.8476 39.9473 21.4035C39.0099 21.4795 38.0856 21.672 37.1958 21.9767H37.1873C36.9558 22.0558 36.7261 22.1428 36.4984 22.2379L36.3572 22.2986L36.1327 22.3974C36.0579 22.4299 35.9831 22.4652 35.9097 22.5019C35.8363 22.5386 35.7685 22.5739 35.688 22.612C35.6075 22.6501 35.5468 22.6868 35.4692 22.7264C35.3915 22.7659 35.3407 22.7955 35.2772 22.8322C35.1247 22.9169 34.9751 23.0059 34.8283 23.0977C34.7699 23.1334 34.712 23.1701 34.6546 23.2078C34.0884 23.5742 33.5568 23.9915 33.0664 24.4544C32.4466 25.0402 31.8678 25.7137 31.2311 26.3151C30.685 26.8655 30.0454 27.3143 29.3421 27.6407C27.9812 28.2266 26.4071 28.5654 24.9939 29.0525L18.3586 31.3466C18.3586 31.2421 17.6076 30.4995 16.6645 29.5946C14.1826 27.2351 12.7445 23.983 12.6692 20.5593C12.4405 10.2167 24.5901 7.17577 32.8574 9.39224C34.1706 9.74585 35.4195 10.3053 36.5577 11.0497C37.3114 11.5371 38.001 12.1171 38.6104 12.7762C39.3214 13.5412 39.8925 14.4253 40.2974 15.388L40.1859 15.3682C38.3119 15.0227 36.391 15.0164 34.5148 15.3499Z"
                      fill="url(#paint0_linear_1_7960)"
                    />
                    <path
                      d="M39.9472 21.4037C39.0098 21.4796 38.0855 21.6722 37.1957 21.9769H37.1872C36.953 22.0512 36.723 22.1384 36.4983 22.238L36.3571 22.2988L36.1298 22.4004C36.055 22.4343 35.9816 22.4682 35.9068 22.5049C35.8319 22.5416 35.7656 22.5769 35.6851 22.615C35.6046 22.6531 35.5439 22.6898 35.4663 22.7293C35.3886 22.7689 35.3378 22.7985 35.2743 22.8352C35.1218 22.9199 34.9722 23.0089 34.8253 23.1006L34.6517 23.2108C34.0855 23.5772 33.5539 23.9945 33.0635 24.4573C32.4437 25.0432 31.8649 25.7166 31.2282 26.318C31.0221 26.4028 30.8173 26.4917 30.6126 26.5806C30.6381 26.5693 30.4503 24.1806 30.4559 23.9392C30.4795 23.0169 30.5849 22.0985 30.7708 21.1948C31.1293 19.4569 30.9006 17.8404 31.2465 16.0588C31.3196 15.6611 31.4138 15.2676 31.5289 14.8799C32.119 14.4395 32.9406 14.3039 33.6564 14.2009C35.3717 13.9538 37.1364 14.1882 38.7868 14.7077C39.0597 14.7941 39.3278 14.8949 39.5901 15.0098C39.7143 15.0649 39.8357 15.1242 39.9557 15.1877C40.0615 15.2674 40.1762 15.3347 40.2973 15.3882C38.3852 15.0354 36.4258 15.0225 34.5091 15.35C36.9333 16.7211 38.8429 18.8469 39.9472 21.4037Z"
                      fill="url(#paint1_linear_1_7960)"
                    />
                    <ellipse
                      cx="16.9483"
                      cy="25.7052"
                      rx="2.4"
                      ry="2.4"
                      fill="#E18477"
                    />
                    <ellipse
                      cx="17.7085"
                      cy="25.705"
                      rx="2.14871"
                      ry="2.14871"
                      fill="#A76962"
                    />
                    <path
                      d="M17.7417 23.4406L18.3601 31.4877L27.7398 36.9682C29.0864 37.4704 30.5943 36.868 31.2241 35.5762C32.5737 32.8119 34.7393 28.4482 34.4542 26.8232C34.0306 24.4232 32.9012 23.5762 32.9012 23.5762C33.0584 22.635 33.2146 21.6966 33.3699 20.7611C33.5478 19.7009 33.7737 18.594 33.5111 17.5282C33.2104 16.307 32.2871 15.7846 31.5276 14.8712C29.5285 17.4463 26.2419 18.9018 23.3718 20.3771C21.8895 21.1564 17.7417 23.4406 17.7417 23.4406Z"
                      fill="#E18477"
                    />
                    <path
                      d="M22.2659 21.7761C23.5732 21.5082 24.9174 21.4723 26.2372 21.6703"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M30.603 21.7917C31.4101 21.6053 32.2415 21.5476 33.0666 21.6209"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M27.3517 27.2242C27.141 27.3321 27.0403 27.5775 27.1147 27.8022C27.189 28.027 27.4161 28.164 27.6496 28.125"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M29.8994 25.7643C29.8994 25.7643 29.9404 26.5619 30.1282 26.936C30.2086 27.097 30.3343 27.2325 30.4105 27.3935C30.7225 28.0048 30.2185 28.1346 29.7314 28.1346"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M39.7383 43.0954C30.3009 50.362 17.1375 50.3038 7.76465 42.9543L14.6343 39.734C14.9615 39.5802 15.2754 39.3999 15.5731 39.1947C15.6635 39.1326 15.7538 39.0677 15.8399 38.9999C16.5876 38.4278 17.203 37.7012 17.6442 36.8696C17.9777 36.2306 18.1993 35.5391 18.2992 34.8253C18.3989 34.9219 18.5035 35.0133 18.6126 35.0992C19.4783 35.7393 20.4177 36.273 21.4108 36.6888C21.8929 36.89 22.3859 37.0639 22.8875 37.2098C24.3986 37.6504 25.9764 37.8173 27.5463 37.7025C27.7637 37.6856 27.9825 37.6644 28.1999 37.6488L28.2211 38.366V38.4126L29.9294 39.1072L39.7383 43.0954Z"
                      fill="#00214E"
                    />
                    <circle
                      cx="25.2199"
                      cy="23.8937"
                      r="2.68235"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <ellipse
                      cx="32.7218"
                      cy="23.4703"
                      rx="2.68235"
                      ry="2.68235"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M27.9019 23.8939L30.0393 23.7103"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M25.0193 29.75C25.0586 29.6882 25.1219 29.6455 25.1939 29.6321C25.2659 29.6187 25.3402 29.6359 25.3991 29.6794C25.6913 29.8856 26.2292 30.3232 26.9916 30.4743C28.0306 30.6818 28.9313 30.2653 29.1473 30.5336C29.2688 30.6846 29.1205 30.8696 28.8368 31.1053C28.236 31.554 27.4798 31.7418 26.7389 31.6263C25.7393 31.4385 24.9883 30.2808 24.9883 29.87C24.9885 29.8281 24.9992 29.7868 25.0193 29.75Z"
                      fill="white"
                    />
                    <ellipse
                      cx="24.5879"
                      cy="23.8688"
                      rx="0.461647"
                      ry="1.12094"
                      transform="rotate(-85.77 24.5879 23.8688)"
                      fill="#00214E"
                    />
                    <ellipse
                      cx="31.8601"
                      cy="23.6399"
                      rx="1.12094"
                      ry="0.461647"
                      transform="rotate(-8.85999 31.8601 23.6399)"
                      fill="#00214E"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_7960"
                      x1="28.6491"
                      y1="33.7518"
                      x2="45.3336"
                      y2="13.0617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#16243F" />
                      <stop offset="1" stop-color="#6878B1" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_7960"
                      x1="30.4573"
                      y1="26.5803"
                      x2="40.2973"
                      y2="26.5803"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#16243F" />
                      <stop offset="1" stop-color="#6878B1" />
                    </linearGradient>
                    <clipPath id="clip0_1_7960">
                      <rect
                        x="-6.10352e-05"
                        y="0.615601"
                        width="48"
                        height="48"
                        rx="24"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="text-black font-bold ">Osemwengie Benjamin</p>
                  <p className="text-textColor">Product Designer at Digift</p>
                </div>
              </div>
            </div>
            <div className="w-[32%] mt-16 shadow-md">
              <p className="py-16 px-16 text-textColor ">
                “Digift stood out from the crowd with an impressive team and
                even more impressive mission: harnessing the power of giftcards
                enterprises to support people who are restricted by banks in
                Nigeria.”
              </p>
              <div className="flex items-center py-4 px-16 space-x-4">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_7960)">
                    <rect
                      x="-6.10352e-05"
                      y="0.615601"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#EBF4FF"
                    />
                    <path
                      d="M39.7383 43.0954C30.3009 50.362 17.1375 50.3038 7.76465 42.9543L14.6343 39.734C14.9615 39.5802 15.2754 39.3999 15.5731 39.1947C15.6635 39.1326 15.7538 39.0677 15.8399 38.9999C16.5876 38.4278 17.203 37.7012 17.6442 36.8695C17.9777 36.2306 18.1993 35.5391 18.2992 34.8253C18.3682 34.3621 18.4031 33.8945 18.4037 33.4263C18.4037 32.6187 18.3599 31.8112 18.3515 31.0023C18.3458 30.5543 18.3411 30.1067 18.3374 29.6597L18.6197 29.8008L19.3538 30.1806L19.6941 30.2385L23.6301 30.9077L28.0235 31.6559L28.1562 36.1735L28.1999 37.6503L28.2211 38.3674V38.414L29.9294 39.1086L39.7383 43.0954Z"
                      fill="#E18477"
                    />
                    <path
                      d="M28.2151 38.2402C27.7299 38.3237 27.2307 38.2464 26.7935 38.02L18.3695 31.1292C18.3596 30.8101 18.3511 31.1447 18.3469 30.8256C18.3412 30.3786 18.3365 29.931 18.3328 29.483L18.6151 29.6242L19.3492 30.004L19.6895 30.0619L23.6255 30.731L28.0189 31.4793L28.1516 35.9969L28.1954 37.4736L28.2165 38.1908V38.2374L28.2151 38.2402Z"
                      fill="#A76962"
                    />
                    <path
                      d="M34.5148 15.3499C36.9369 16.7219 38.8445 18.8476 39.9473 21.4035C39.0099 21.4795 38.0856 21.672 37.1958 21.9767H37.1873C36.9558 22.0558 36.7261 22.1428 36.4984 22.2379L36.3572 22.2986L36.1327 22.3974C36.0579 22.4299 35.9831 22.4652 35.9097 22.5019C35.8363 22.5386 35.7685 22.5739 35.688 22.612C35.6075 22.6501 35.5468 22.6868 35.4692 22.7264C35.3915 22.7659 35.3407 22.7955 35.2772 22.8322C35.1247 22.9169 34.9751 23.0059 34.8283 23.0977C34.7699 23.1334 34.712 23.1701 34.6546 23.2078C34.0884 23.5742 33.5568 23.9915 33.0664 24.4544C32.4466 25.0402 31.8678 25.7137 31.2311 26.3151C30.685 26.8655 30.0454 27.3143 29.3421 27.6407C27.9812 28.2266 26.4071 28.5654 24.9939 29.0525L18.3586 31.3466C18.3586 31.2421 17.6076 30.4995 16.6645 29.5946C14.1826 27.2351 12.7445 23.983 12.6692 20.5593C12.4405 10.2167 24.5901 7.17577 32.8574 9.39224C34.1706 9.74585 35.4195 10.3053 36.5577 11.0497C37.3114 11.5371 38.001 12.1171 38.6104 12.7762C39.3214 13.5412 39.8925 14.4253 40.2974 15.388L40.1859 15.3682C38.3119 15.0227 36.391 15.0164 34.5148 15.3499Z"
                      fill="url(#paint0_linear_1_7960)"
                    />
                    <path
                      d="M39.9472 21.4037C39.0098 21.4796 38.0855 21.6722 37.1957 21.9769H37.1872C36.953 22.0512 36.723 22.1384 36.4983 22.238L36.3571 22.2988L36.1298 22.4004C36.055 22.4343 35.9816 22.4682 35.9068 22.5049C35.8319 22.5416 35.7656 22.5769 35.6851 22.615C35.6046 22.6531 35.5439 22.6898 35.4663 22.7293C35.3886 22.7689 35.3378 22.7985 35.2743 22.8352C35.1218 22.9199 34.9722 23.0089 34.8253 23.1006L34.6517 23.2108C34.0855 23.5772 33.5539 23.9945 33.0635 24.4573C32.4437 25.0432 31.8649 25.7166 31.2282 26.318C31.0221 26.4028 30.8173 26.4917 30.6126 26.5806C30.6381 26.5693 30.4503 24.1806 30.4559 23.9392C30.4795 23.0169 30.5849 22.0985 30.7708 21.1948C31.1293 19.4569 30.9006 17.8404 31.2465 16.0588C31.3196 15.6611 31.4138 15.2676 31.5289 14.8799C32.119 14.4395 32.9406 14.3039 33.6564 14.2009C35.3717 13.9538 37.1364 14.1882 38.7868 14.7077C39.0597 14.7941 39.3278 14.8949 39.5901 15.0098C39.7143 15.0649 39.8357 15.1242 39.9557 15.1877C40.0615 15.2674 40.1762 15.3347 40.2973 15.3882C38.3852 15.0354 36.4258 15.0225 34.5091 15.35C36.9333 16.7211 38.8429 18.8469 39.9472 21.4037Z"
                      fill="url(#paint1_linear_1_7960)"
                    />
                    <ellipse
                      cx="16.9483"
                      cy="25.7052"
                      rx="2.4"
                      ry="2.4"
                      fill="#E18477"
                    />
                    <ellipse
                      cx="17.7085"
                      cy="25.705"
                      rx="2.14871"
                      ry="2.14871"
                      fill="#A76962"
                    />
                    <path
                      d="M17.7417 23.4406L18.3601 31.4877L27.7398 36.9682C29.0864 37.4704 30.5943 36.868 31.2241 35.5762C32.5737 32.8119 34.7393 28.4482 34.4542 26.8232C34.0306 24.4232 32.9012 23.5762 32.9012 23.5762C33.0584 22.635 33.2146 21.6966 33.3699 20.7611C33.5478 19.7009 33.7737 18.594 33.5111 17.5282C33.2104 16.307 32.2871 15.7846 31.5276 14.8712C29.5285 17.4463 26.2419 18.9018 23.3718 20.3771C21.8895 21.1564 17.7417 23.4406 17.7417 23.4406Z"
                      fill="#E18477"
                    />
                    <path
                      d="M22.2659 21.7761C23.5732 21.5082 24.9174 21.4723 26.2372 21.6703"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M30.603 21.7917C31.4101 21.6053 32.2415 21.5476 33.0666 21.6209"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M27.3517 27.2242C27.141 27.3321 27.0403 27.5775 27.1147 27.8022C27.189 28.027 27.4161 28.164 27.6496 28.125"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M29.8994 25.7643C29.8994 25.7643 29.9404 26.5619 30.1282 26.936C30.2086 27.097 30.3343 27.2325 30.4105 27.3935C30.7225 28.0048 30.2185 28.1346 29.7314 28.1346"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M39.7383 43.0954C30.3009 50.362 17.1375 50.3038 7.76465 42.9543L14.6343 39.734C14.9615 39.5802 15.2754 39.3999 15.5731 39.1947C15.6635 39.1326 15.7538 39.0677 15.8399 38.9999C16.5876 38.4278 17.203 37.7012 17.6442 36.8696C17.9777 36.2306 18.1993 35.5391 18.2992 34.8253C18.3989 34.9219 18.5035 35.0133 18.6126 35.0992C19.4783 35.7393 20.4177 36.273 21.4108 36.6888C21.8929 36.89 22.3859 37.0639 22.8875 37.2098C24.3986 37.6504 25.9764 37.8173 27.5463 37.7025C27.7637 37.6856 27.9825 37.6644 28.1999 37.6488L28.2211 38.366V38.4126L29.9294 39.1072L39.7383 43.0954Z"
                      fill="#00214E"
                    />
                    <circle
                      cx="25.2199"
                      cy="23.8937"
                      r="2.68235"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <ellipse
                      cx="32.7218"
                      cy="23.4703"
                      rx="2.68235"
                      ry="2.68235"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M27.9019 23.8939L30.0393 23.7103"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M25.0193 29.75C25.0586 29.6882 25.1219 29.6455 25.1939 29.6321C25.2659 29.6187 25.3402 29.6359 25.3991 29.6794C25.6913 29.8856 26.2292 30.3232 26.9916 30.4743C28.0306 30.6818 28.9313 30.2653 29.1473 30.5336C29.2688 30.6846 29.1205 30.8696 28.8368 31.1053C28.236 31.554 27.4798 31.7418 26.7389 31.6263C25.7393 31.4385 24.9883 30.2808 24.9883 29.87C24.9885 29.8281 24.9992 29.7868 25.0193 29.75Z"
                      fill="white"
                    />
                    <ellipse
                      cx="24.5879"
                      cy="23.8688"
                      rx="0.461647"
                      ry="1.12094"
                      transform="rotate(-85.77 24.5879 23.8688)"
                      fill="#00214E"
                    />
                    <ellipse
                      cx="31.8601"
                      cy="23.6399"
                      rx="1.12094"
                      ry="0.461647"
                      transform="rotate(-8.85999 31.8601 23.6399)"
                      fill="#00214E"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_7960"
                      x1="28.6491"
                      y1="33.7518"
                      x2="45.3336"
                      y2="13.0617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#16243F" />
                      <stop offset="1" stop-color="#6878B1" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_7960"
                      x1="30.4573"
                      y1="26.5803"
                      x2="40.2973"
                      y2="26.5803"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#16243F" />
                      <stop offset="1" stop-color="#6878B1" />
                    </linearGradient>
                    <clipPath id="clip0_1_7960">
                      <rect
                        x="-6.10352e-05"
                        y="0.615601"
                        width="48"
                        height="48"
                        rx="24"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="text-black font-bold ">Osemwengie Benjamin</p>
                  <p className="text-textColor">Product Designer at Digift</p>
                </div>
              </div>
            </div>
            <div className="w-[32%] mt-16 shadow-md">
              <p className="py-16 px-16 text-textColor ">
                “Digift stood out from the crowd with an impressive team and
                even more impressive mission: harnessing the power of giftcards
                enterprises to support people who are restricted by banks in
                Nigeria.”
              </p>
              <div className="flex items-center py-4 px-16 space-x-4">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_7960)">
                    <rect
                      x="-6.10352e-05"
                      y="0.615601"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#EBF4FF"
                    />
                    <path
                      d="M39.7383 43.0954C30.3009 50.362 17.1375 50.3038 7.76465 42.9543L14.6343 39.734C14.9615 39.5802 15.2754 39.3999 15.5731 39.1947C15.6635 39.1326 15.7538 39.0677 15.8399 38.9999C16.5876 38.4278 17.203 37.7012 17.6442 36.8695C17.9777 36.2306 18.1993 35.5391 18.2992 34.8253C18.3682 34.3621 18.4031 33.8945 18.4037 33.4263C18.4037 32.6187 18.3599 31.8112 18.3515 31.0023C18.3458 30.5543 18.3411 30.1067 18.3374 29.6597L18.6197 29.8008L19.3538 30.1806L19.6941 30.2385L23.6301 30.9077L28.0235 31.6559L28.1562 36.1735L28.1999 37.6503L28.2211 38.3674V38.414L29.9294 39.1086L39.7383 43.0954Z"
                      fill="#E18477"
                    />
                    <path
                      d="M28.2151 38.2402C27.7299 38.3237 27.2307 38.2464 26.7935 38.02L18.3695 31.1292C18.3596 30.8101 18.3511 31.1447 18.3469 30.8256C18.3412 30.3786 18.3365 29.931 18.3328 29.483L18.6151 29.6242L19.3492 30.004L19.6895 30.0619L23.6255 30.731L28.0189 31.4793L28.1516 35.9969L28.1954 37.4736L28.2165 38.1908V38.2374L28.2151 38.2402Z"
                      fill="#A76962"
                    />
                    <path
                      d="M34.5148 15.3499C36.9369 16.7219 38.8445 18.8476 39.9473 21.4035C39.0099 21.4795 38.0856 21.672 37.1958 21.9767H37.1873C36.9558 22.0558 36.7261 22.1428 36.4984 22.2379L36.3572 22.2986L36.1327 22.3974C36.0579 22.4299 35.9831 22.4652 35.9097 22.5019C35.8363 22.5386 35.7685 22.5739 35.688 22.612C35.6075 22.6501 35.5468 22.6868 35.4692 22.7264C35.3915 22.7659 35.3407 22.7955 35.2772 22.8322C35.1247 22.9169 34.9751 23.0059 34.8283 23.0977C34.7699 23.1334 34.712 23.1701 34.6546 23.2078C34.0884 23.5742 33.5568 23.9915 33.0664 24.4544C32.4466 25.0402 31.8678 25.7137 31.2311 26.3151C30.685 26.8655 30.0454 27.3143 29.3421 27.6407C27.9812 28.2266 26.4071 28.5654 24.9939 29.0525L18.3586 31.3466C18.3586 31.2421 17.6076 30.4995 16.6645 29.5946C14.1826 27.2351 12.7445 23.983 12.6692 20.5593C12.4405 10.2167 24.5901 7.17577 32.8574 9.39224C34.1706 9.74585 35.4195 10.3053 36.5577 11.0497C37.3114 11.5371 38.001 12.1171 38.6104 12.7762C39.3214 13.5412 39.8925 14.4253 40.2974 15.388L40.1859 15.3682C38.3119 15.0227 36.391 15.0164 34.5148 15.3499Z"
                      fill="url(#paint0_linear_1_7960)"
                    />
                    <path
                      d="M39.9472 21.4037C39.0098 21.4796 38.0855 21.6722 37.1957 21.9769H37.1872C36.953 22.0512 36.723 22.1384 36.4983 22.238L36.3571 22.2988L36.1298 22.4004C36.055 22.4343 35.9816 22.4682 35.9068 22.5049C35.8319 22.5416 35.7656 22.5769 35.6851 22.615C35.6046 22.6531 35.5439 22.6898 35.4663 22.7293C35.3886 22.7689 35.3378 22.7985 35.2743 22.8352C35.1218 22.9199 34.9722 23.0089 34.8253 23.1006L34.6517 23.2108C34.0855 23.5772 33.5539 23.9945 33.0635 24.4573C32.4437 25.0432 31.8649 25.7166 31.2282 26.318C31.0221 26.4028 30.8173 26.4917 30.6126 26.5806C30.6381 26.5693 30.4503 24.1806 30.4559 23.9392C30.4795 23.0169 30.5849 22.0985 30.7708 21.1948C31.1293 19.4569 30.9006 17.8404 31.2465 16.0588C31.3196 15.6611 31.4138 15.2676 31.5289 14.8799C32.119 14.4395 32.9406 14.3039 33.6564 14.2009C35.3717 13.9538 37.1364 14.1882 38.7868 14.7077C39.0597 14.7941 39.3278 14.8949 39.5901 15.0098C39.7143 15.0649 39.8357 15.1242 39.9557 15.1877C40.0615 15.2674 40.1762 15.3347 40.2973 15.3882C38.3852 15.0354 36.4258 15.0225 34.5091 15.35C36.9333 16.7211 38.8429 18.8469 39.9472 21.4037Z"
                      fill="url(#paint1_linear_1_7960)"
                    />
                    <ellipse
                      cx="16.9483"
                      cy="25.7052"
                      rx="2.4"
                      ry="2.4"
                      fill="#E18477"
                    />
                    <ellipse
                      cx="17.7085"
                      cy="25.705"
                      rx="2.14871"
                      ry="2.14871"
                      fill="#A76962"
                    />
                    <path
                      d="M17.7417 23.4406L18.3601 31.4877L27.7398 36.9682C29.0864 37.4704 30.5943 36.868 31.2241 35.5762C32.5737 32.8119 34.7393 28.4482 34.4542 26.8232C34.0306 24.4232 32.9012 23.5762 32.9012 23.5762C33.0584 22.635 33.2146 21.6966 33.3699 20.7611C33.5478 19.7009 33.7737 18.594 33.5111 17.5282C33.2104 16.307 32.2871 15.7846 31.5276 14.8712C29.5285 17.4463 26.2419 18.9018 23.3718 20.3771C21.8895 21.1564 17.7417 23.4406 17.7417 23.4406Z"
                      fill="#E18477"
                    />
                    <path
                      d="M22.2659 21.7761C23.5732 21.5082 24.9174 21.4723 26.2372 21.6703"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M30.603 21.7917C31.4101 21.6053 32.2415 21.5476 33.0666 21.6209"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M27.3517 27.2242C27.141 27.3321 27.0403 27.5775 27.1147 27.8022C27.189 28.027 27.4161 28.164 27.6496 28.125"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M29.8994 25.7643C29.8994 25.7643 29.9404 26.5619 30.1282 26.936C30.2086 27.097 30.3343 27.2325 30.4105 27.3935C30.7225 28.0048 30.2185 28.1346 29.7314 28.1346"
                      stroke="#00214E"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M39.7383 43.0954C30.3009 50.362 17.1375 50.3038 7.76465 42.9543L14.6343 39.734C14.9615 39.5802 15.2754 39.3999 15.5731 39.1947C15.6635 39.1326 15.7538 39.0677 15.8399 38.9999C16.5876 38.4278 17.203 37.7012 17.6442 36.8696C17.9777 36.2306 18.1993 35.5391 18.2992 34.8253C18.3989 34.9219 18.5035 35.0133 18.6126 35.0992C19.4783 35.7393 20.4177 36.273 21.4108 36.6888C21.8929 36.89 22.3859 37.0639 22.8875 37.2098C24.3986 37.6504 25.9764 37.8173 27.5463 37.7025C27.7637 37.6856 27.9825 37.6644 28.1999 37.6488L28.2211 38.366V38.4126L29.9294 39.1072L39.7383 43.0954Z"
                      fill="#00214E"
                    />
                    <circle
                      cx="25.2199"
                      cy="23.8937"
                      r="2.68235"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <ellipse
                      cx="32.7218"
                      cy="23.4703"
                      rx="2.68235"
                      ry="2.68235"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M27.9019 23.8939L30.0393 23.7103"
                      stroke="white"
                      stroke-width="0.198265"
                    />
                    <path
                      d="M25.0193 29.75C25.0586 29.6882 25.1219 29.6455 25.1939 29.6321C25.2659 29.6187 25.3402 29.6359 25.3991 29.6794C25.6913 29.8856 26.2292 30.3232 26.9916 30.4743C28.0306 30.6818 28.9313 30.2653 29.1473 30.5336C29.2688 30.6846 29.1205 30.8696 28.8368 31.1053C28.236 31.554 27.4798 31.7418 26.7389 31.6263C25.7393 31.4385 24.9883 30.2808 24.9883 29.87C24.9885 29.8281 24.9992 29.7868 25.0193 29.75Z"
                      fill="white"
                    />
                    <ellipse
                      cx="24.5879"
                      cy="23.8688"
                      rx="0.461647"
                      ry="1.12094"
                      transform="rotate(-85.77 24.5879 23.8688)"
                      fill="#00214E"
                    />
                    <ellipse
                      cx="31.8601"
                      cy="23.6399"
                      rx="1.12094"
                      ry="0.461647"
                      transform="rotate(-8.85999 31.8601 23.6399)"
                      fill="#00214E"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_7960"
                      x1="28.6491"
                      y1="33.7518"
                      x2="45.3336"
                      y2="13.0617"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#16243F" />
                      <stop offset="1" stop-color="#6878B1" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_7960"
                      x1="30.4573"
                      y1="26.5803"
                      x2="40.2973"
                      y2="26.5803"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#16243F" />
                      <stop offset="1" stop-color="#6878B1" />
                    </linearGradient>
                    <clipPath id="clip0_1_7960">
                      <rect
                        x="-6.10352e-05"
                        y="0.615601"
                        width="48"
                        height="48"
                        rx="24"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <p className="text-black font-bold ">Osemwengie Benjamin</p>
                  <p className="text-textColor">Product Designer at Digift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Business;
