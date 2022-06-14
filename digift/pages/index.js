import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

import frame2 from "../images/frame2.svg";
import gif from "../images/Gif.svg";

import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white min-h-screen">
        {/* Navbar */}
        <Header />
        <section className="flex items-center justify-between my-32 mx-32 ">
          <div className="w-[40%]   ">
            <div className="flex flex-col  space-y-12 ">
              <p className="max-w-md  ">
                Digift helps businesses connect with customers by letting them
                offer their business gift cards to a large number of people.
              </p>
              <h2 className="text-6xl max-w-xl ">
                Expand the giftcard industry,{" "}
                <span className="text-blue-500">one card</span> at a time!
                <span>
                  <svg
                    className="inline-block"
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8815 1.2506L11.5671 1.39058L11.6953 1.70995L15.0964 10.18C17.0554 15.0588 14.918 20.6227 10.1964 22.9351L1.76011 27.0667L1.45087 27.2182L1.59092 27.5328L1.8076 28.0194L1.94765 28.334L2.26711 28.2055L10.9826 24.7007C15.8604 22.7392 21.4253 24.8737 23.7401 29.5941L27.7588 37.7892L27.9104 38.0982L28.2248 37.9582L28.7114 37.7416L29.0258 37.6016L28.8976 37.2822L25.4965 28.8122C23.5375 23.9333 25.6749 18.3695 30.3965 16.0571L38.8328 11.9254L39.142 11.774L39.002 11.4594L38.7853 10.9727L38.6452 10.6582L38.3258 10.7867L29.6103 14.2914C24.7325 16.253 19.1676 14.1184 16.8528 9.39802L12.8341 1.20295L12.6825 0.893953L12.3681 1.03393L11.8815 1.2506ZM16.8654 11.7899C19.4553 15.2178 23.801 16.8813 28.0186 16.0579C24.5846 18.6413 22.913 22.9839 23.7275 27.2023C21.1376 23.7744 16.7919 22.1109 12.5743 22.9342C16.0083 20.3508 17.6798 16.0083 16.8654 11.7899Z"
                      fill="#0078FF"
                      stroke="#0078FF"
                      stroke-width="0.714286"
                    />
                  </svg>
                </span>
              </h2>
              <div className="flex items-center space-x-3">
                <button className="flex items-center justify-between bg-[#005FDE] px-6 py-4 rounded-md space-x-4 ">
                  <span className="text-white">Get Started</span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999146 6.13878L12.9991 6.13878M12.9991 6.13878L8.42772 1.56763M12.9991 6.13878L8.42772 10.4248"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-between bg-white shadow-sm px-6 py-4 rounded-sm space-x-4 ">
                  <span className="text-[#8A91A8]">Sign In </span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999146 6.13878L12.9991 6.13878M12.9991 6.13878L8.42772 1.56763M12.9991 6.13878L8.42772 10.4248"
                      stroke="#8A91A8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[47%] relative ">
            <img className="absolute -left-6 top-32" src="left.png" />
            <img className="absolute -right-6 top-32" src="right.png" />
            <div className="bg-bluish pt-8 pl-8  ">
              <img src="test1.png" />
            </div>
          </div>
        </section>
        <section className="my-32 mx-16 ">
          <div className="flex flex-col items-center  space-y-10 bg-image bg-mainBlue rounded-3xl py-10 ">
            <div className="flex items-center pt-16">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.39419 0.963344H8.25653L8.25143 1.10091L8.11621 4.74936C8.03832 6.85089 6.35208 8.53628 4.2505 8.61309L0.495514 8.75033L0.357875 8.75536V8.8931V9.10618V9.24392L0.495514 9.24895L4.2505 9.38619C6.35208 9.463 8.03832 11.1484 8.11621 13.2499L8.25143 16.8984L8.25653 17.0359H8.39419H8.60727H8.74493L8.75003 16.8984L8.88525 13.2499C8.96314 11.1484 10.6494 9.463 12.751 9.38619L16.5059 9.24895L16.6436 9.24392V9.10618V8.8931V8.75536L16.5059 8.75033L12.751 8.61309C10.6494 8.53628 8.96314 6.85089 8.88525 4.74936L8.75003 1.10091L8.74493 0.963344H8.60727H8.39419ZM8.50073 5.62543C8.88944 7.29942 10.2068 8.61433 11.8819 8.99964C10.2068 9.38495 8.88944 10.6999 8.50073 12.3738C8.11203 10.6999 6.79469 9.38495 5.11953 8.99964C6.79469 8.61433 8.11203 7.29942 8.50073 5.62543Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.285714"
                />
              </svg>

              <p className="text-white">Digift helps business</p>
            </div>

            <h1 className="text-white text-6xl font-bold max-w-2xl leading-tight">
              Why do fast-growing
              <br />
              merchant and vendor
            </h1>
            <div className="flex items-center">
              <span className="text-center text-6xl text-white font-bold ">
                choose
              </span>
              <Image src={gif} />
              <span className="text-center text-6xl text-white font-bold ">
                us?
              </span>
            </div>

            <p className="text-white max-w-md mt-8">
              Whether you’re a business looking to sell your own gift cards, a
              company looking for bulk gift card solution, digift is for you.
            </p>
            <a className="text-white underline">Create an account today</a>
          </div>
        </section>
        <section className="my-32 mx-16 flex items-center justify-around  ">
          <div className="w-[45%] bg-rearBlue rounded-md   ">
            <div className="relative pt-10">
              <h2 className="mx-12 font-bold text-5xl leading-tight">
                Designed for <br />
                today’s
                <span className="text-blue-500"> ambitious</span> businesses.
              </h2>
              <p className="max-w-md mx-12 mt-6">
                We give merchants the ability to sell digital Gift Cards for
                their business quickly, intuitively and affordably.
              </p>
              <div className="pl-12">
                <img src="Image.png" />
              </div>

              {/* <Image className="mx-12" src={icon} /> */}
            </div>
            {/* <div className="absolute mx-12  ">
              <Image src={icon} />
            </div> */}
          </div>
          <div className="w-[45%] bg-rearBlue rounded-md  ">
            <div className="relative pt-10">
              <h2 className="mx-12 font-bold text-5xl leading-tight">
                Features that <br />
                <span className="text-blue-500"> empower</span> your <br />{" "}
                business.
              </h2>
              <p className="max-w-md mx-12 mt-6">
                Automate your sales and marketing so you can focus on other
                areas of your business.
              </p>
              <div className="pl-12">
                <img src="Image.png" />
              </div>
              {/* <Image className="mx-12" src={icon} /> */}
            </div>
          </div>
        </section>
        <section className="flex items-center justify-between my-32 mx-32">
          <div className="w-[40%] max-h-[26rem] ">
            <div className="flex flex-col space-y-10 ">
              <h2 className="text-6xl max-w-xl font-bold leading-tight">
                Our API is built to be as ,{" "}
                <span className="text-blue-500">lightweight</span> and effecient
                as possible. !
              </h2>
              <p className="max-w-md">
                We offer client and server libraries in everything from our API
              </p>
              <div className="flex items-center space-x-3">
                <button className="flex items-center justify-between bg-[#005FDE] px-6 py-4 rounded-sm space-x-4 ">
                  <span className="text-white">Get Started</span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999146 6.13878L12.9991 6.13878M12.9991 6.13878L8.42772 1.56763M12.9991 6.13878L8.42772 10.4248"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-between bg-white shadow-sm px-6 py-4 rounded-sm space-x-4 ">
                  <span className="text-[#8A91A8]">Sign In </span>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999146 6.13878L12.9991 6.13878M12.9991 6.13878L8.42772 1.56763M12.9991 6.13878L8.42772 10.4248"
                      stroke="#8A91A8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[47%]  ">
            <div className="pt-8 pl-8">
              <svg
                width="480"
                height="39"
                viewBox="0 0 480 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.000244141 9.64824C0.000244141 4.31966 4.31991 0 9.64849 0L470.352 0C475.681 0 480 4.31967 480 9.64824V38.593H0.000244141V9.64824Z"
                  fill="#191B1E"
                />
                <circle cx="19.2968" cy="19.2965" r="4.82412" fill="#464A52" />
                <circle cx="33.7692" cy="19.2965" r="4.82412" fill="#464A52" />
                <circle cx="48.2416" cy="19.2965" r="4.82412" fill="#464A52" />
              </svg>

              <Image src={frame2} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
