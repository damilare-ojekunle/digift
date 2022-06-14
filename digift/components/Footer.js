function Footer(props) {
  return (
    <div>
      <hr className="mx-32  " />
      <footer className="bg-white   my-32 mx-32">
        <div className="flex justify-between ">
          <div>
            <svg
              width="96"
              height="26"
              viewBox="0 0 96 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.754 21.0152C36.4416 21.0152 36.1293 21.0152 35.7128 21.0152C35.2963 21.0152 34.9839 21.0152 34.5675 20.911C34.151 20.911 33.7345 20.8069 33.318 20.7028C32.9015 20.5987 32.5892 20.4946 32.1727 20.3904C31.2356 20.0781 30.715 19.4533 30.715 18.5162L30.715 6.54227C30.715 6.22991 30.8191 5.91755 31.0273 5.7093C31.2356 5.50106 31.4438 5.39694 31.8603 5.18869C32.5892 4.98045 33.4221 4.77221 34.2551 4.66809C35.0881 4.66809 35.8169 4.56396 36.4416 4.56396C37.7952 4.56396 39.0447 4.77221 40.0859 5.08457C41.1271 5.39694 42.0642 5.91754 42.8972 6.54227C43.7302 7.27112 44.2508 8.1041 44.6673 9.14531C45.0837 10.1865 45.292 11.436 45.292 12.7896C45.292 14.1431 45.0837 15.3926 44.6673 16.4338C44.2508 17.475 43.626 18.308 42.8972 19.0369C42.1683 19.7657 41.2312 20.2863 40.19 20.5987C39.2529 20.911 38.0035 21.0152 36.754 21.0152ZM35.2963 17.2668C35.5046 17.2668 35.7128 17.3709 36.0252 17.3709C36.3375 17.3709 36.5458 17.3709 36.754 17.3709C37.3787 17.3709 37.8993 17.2668 38.3158 17.1627C38.8364 16.9544 39.2529 16.7462 39.5653 16.3297C39.8777 16.0173 40.19 15.4967 40.3983 14.9761C40.6065 14.3514 40.7106 13.7267 40.7106 12.8937C40.7106 11.3319 40.3983 10.1865 39.6694 9.35356C38.9406 8.52058 38.0035 8.20822 36.754 8.20822C36.5458 8.20822 36.2334 8.20822 36.0252 8.20822C35.8169 8.20822 35.5046 8.20822 35.2963 8.31234V17.2668Z"
                fill="#0E0244"
              />
              <path
                d="M47.5828 4.66812C47.5828 4.04339 47.791 3.41866 48.2075 3.00217C48.624 2.58568 49.2487 2.37744 49.9776 2.37744C50.7064 2.37744 51.227 2.58568 51.7476 3.00217C52.1641 3.41866 52.3724 4.04339 52.3724 4.66812C52.3724 5.29284 52.1641 5.91757 51.7476 6.33406C51.3311 6.75055 50.7064 6.95879 49.9776 6.95879C49.2487 6.95879 48.7281 6.75055 48.2075 6.33406C47.791 5.81345 47.5828 5.29284 47.5828 4.66812ZM51.3311 20.7028C51.0188 20.7028 50.8105 20.807 50.6023 20.807C50.0817 20.807 49.5611 20.807 49.2487 20.7028C48.9363 20.7028 48.7281 20.5987 48.5199 20.3905C48.3116 20.1822 48.1034 19.974 47.9992 19.7657C47.8951 19.4534 47.791 19.141 47.791 18.7245V8.31237C47.9993 8.31237 48.2075 8.20825 48.624 8.20825C48.8322 8.20825 49.1446 8.10413 49.3528 8.10413C49.8734 8.10413 50.394 8.10413 50.7064 8.20825C51.0188 8.20825 51.227 8.31237 51.4353 8.52061C51.6435 8.62473 51.8517 8.9371 51.9559 9.14534C52.06 9.4577 52.1641 9.77007 52.1641 10.1866L52.1641 19.8699C52.1641 20.2863 51.7476 20.7028 51.3311 20.7028Z"
                fill="#0E0244"
              />
              <path
                d="M61.0145 7.68799C61.9516 7.68799 62.8887 7.79211 63.7216 8.10447C64.5546 8.31272 65.1793 8.62508 65.7 9.04157C66.0123 9.24981 66.3247 9.56218 66.5329 9.87454C66.7412 10.1869 66.8453 10.4993 66.8453 11.0199V20.0784C66.8453 21.0155 66.637 21.7444 66.3247 22.4732C66.0123 23.098 65.4917 23.7227 64.9711 24.1392C64.3464 24.5557 63.7216 24.868 62.8887 25.0763C62.0557 25.2845 61.2227 25.3886 60.2856 25.3886C58.7238 25.3886 57.4744 25.1804 56.6414 24.7639C55.7043 24.3474 55.2878 23.6186 55.2878 22.6815C55.2878 22.265 55.3919 21.9526 55.496 21.6403C55.7043 21.3279 55.8084 21.1197 56.0167 20.9114C56.5373 21.2238 57.0579 21.432 57.6826 21.6403C58.3073 21.8485 58.9321 21.9526 59.6609 21.9526C60.598 21.9526 61.3268 21.8485 61.8475 21.5361C62.3681 21.2238 62.6804 20.7032 62.6804 20.0784V19.662C61.9516 19.9743 61.1186 20.0784 60.0774 20.0784C59.3485 20.0784 58.6197 19.9743 57.8908 19.7661C57.162 19.5578 56.5373 19.1414 56.0167 18.7249C55.496 18.2043 55.0796 17.5795 54.7672 16.8507C54.4548 16.1218 54.2466 15.1847 54.2466 14.1435C54.2466 13.1023 54.4548 12.1652 54.7672 11.4364C55.0796 10.7075 55.6002 9.97866 56.1208 9.56218C56.7455 9.04157 57.3702 8.7292 58.2032 8.41684C59.1403 7.89623 60.0774 7.68799 61.0145 7.68799ZM62.5763 11.4364C62.4722 11.3322 62.2639 11.3322 62.0557 11.2281C61.8475 11.124 61.5351 11.124 61.2227 11.124C60.3898 11.124 59.765 11.3322 59.3485 11.8528C58.9321 12.3735 58.7238 12.9982 58.7238 13.8312C58.7238 14.8724 58.9321 15.4971 59.3485 16.0177C59.765 16.4342 60.2856 16.6424 60.9104 16.6424C61.6392 16.6424 62.1598 16.4342 62.5763 16.1218V11.4364Z"
                fill="#0E0244"
              />
              <path
                d="M69.4484 4.66812C69.4484 4.04339 69.6566 3.41866 70.0731 3.00217C70.4896 2.58568 71.1143 2.37744 71.8432 2.37744C72.572 2.37744 73.0926 2.58568 73.6132 3.00217C74.0297 3.41866 74.238 4.04339 74.238 4.66812C74.238 5.29284 74.0297 5.91757 73.6132 6.33406C73.1967 6.75055 72.572 6.95879 71.8432 6.95879C71.1143 6.95879 70.5937 6.75055 70.0731 6.33406C69.6566 5.81345 69.4484 5.29284 69.4484 4.66812ZM73.1967 20.7028C72.8844 20.7028 72.6761 20.807 72.4679 20.807C71.9473 20.807 71.4267 20.807 71.1143 20.7028C70.802 20.7028 70.5937 20.5987 70.3855 20.3905C70.1772 20.2863 69.969 19.974 69.8649 19.7657C69.7607 19.4534 69.6566 19.141 69.6566 18.7245V8.31237C69.8649 8.31237 70.0731 8.20825 70.4896 8.20825C70.6978 8.20825 71.0102 8.10413 71.2184 8.10413C71.739 8.10413 72.2596 8.10413 72.572 8.20825C72.8844 8.20825 73.0926 8.31237 73.3009 8.52061C73.5091 8.62473 73.7174 8.9371 73.8215 9.14534C73.9256 9.4577 74.0297 9.77007 74.0297 10.1866V19.8699C74.0297 20.2863 73.6132 20.7028 73.1967 20.7028Z"
                fill="#0E0244"
              />
              <path
                d="M76.8409 8.10391C76.8409 7.27094 76.9451 6.43796 77.2574 5.81323C77.5698 5.1885 77.9863 4.6679 78.5069 4.25141C79.0275 3.83493 79.6522 3.52256 80.277 3.31432C81.0058 3.10607 81.7346 3.00195 82.4635 3.00195C83.713 3.00195 84.6501 3.2102 85.2748 3.52256C85.8995 3.83493 86.2119 4.45965 86.2119 5.18851C86.2119 5.50087 86.1078 5.81323 86.0036 6.1256C85.8995 6.43796 85.6913 6.64621 85.483 6.75033C85.1707 6.64621 84.8583 6.54208 84.4418 6.54208C84.2336 6.64621 83.8171 6.64621 83.2965 6.64621C82.5676 6.64621 81.9429 6.75033 81.5264 7.06269C81.1099 7.27094 80.9017 7.79154 80.9017 8.31215V9.14512L85.1707 9.14512C85.2748 9.35337 85.3789 9.56161 85.483 9.87397C85.5871 10.1863 85.5871 10.4987 85.5871 10.8111C85.5871 11.4358 85.483 11.8523 85.1707 12.0605C84.8583 12.3729 84.5459 12.477 84.1295 12.477H81.214V19.8696C81.214 20.2861 80.9017 20.7026 80.3811 20.8067C79.9646 20.8067 79.6522 20.9109 79.2357 20.9109C78.8192 20.9109 78.5069 20.9109 78.1945 20.8067C77.8822 20.8067 77.6739 20.7026 77.4657 20.4944C77.2574 20.3902 77.0492 20.0779 76.9451 19.8696C76.8409 19.5573 76.7368 19.2449 76.7368 18.8284V8.10391H76.8409Z"
                fill="#0E0244"
              />
              <path
                d="M92.1468 16.3298C92.1468 16.7463 92.2509 17.0587 92.5633 17.2669C92.8756 17.4752 93.2921 17.5793 93.8127 17.5793C94.021 17.5793 94.3333 17.5793 94.6457 17.4752H94.7498C95.1663 17.3711 95.5828 17.5793 95.6869 17.9958C95.791 18.204 95.8952 18.5164 95.8952 18.8288C95.8952 19.4535 95.6869 19.9741 95.1663 20.3906C94.6457 20.8071 93.8127 21.0153 92.5633 21.0153C91.0014 21.0153 89.8561 20.703 89.0231 19.9741C88.1902 19.2453 87.7737 18.204 87.7737 16.6422V5.60533C87.9819 5.60533 88.1902 5.50121 88.6066 5.39709C88.919 5.29297 89.3355 5.29297 89.752 5.29297C90.4808 5.29297 91.1056 5.39709 91.5221 5.70946C91.9385 6.02182 92.1468 6.54243 92.1468 7.3754V9.04134H94.8539C95.2704 9.04134 95.6869 9.35371 95.8952 9.77019C95.9993 10.0826 95.9993 10.3949 95.9993 10.7073C95.9993 11.332 95.8952 11.7485 95.5828 11.9567C95.2704 12.2691 94.9581 12.3732 94.5416 12.3732L92.1468 12.3732V16.3298Z"
                fill="#0E0244"
              />
              <path
                d="M3.7478 3.93931C3.7478 3.52282 3.7478 3.00222 3.85192 2.58573C4.06017 1.54452 4.89314 0.815665 5.83023 0.607422L14.6806 0.607422C18.8454 1.02391 22.0732 4.56404 22.0732 8.83302V16.2257C22.0732 17.4751 21.2402 18.5163 19.9908 18.7246C19.5743 18.7246 19.0537 18.8287 18.6372 18.8287C10.4116 18.8287 3.7478 12.1649 3.7478 3.93931Z"
                fill="url(#paint0_linear_1_3519)"
              />
              <path
                d="M25.509 7.68774L25.509 20.7029C25.509 22.2648 24.2596 23.6183 22.5936 23.9307C22.3854 24.0348 22.073 24.0348 21.8648 24.0348L11.0362 24.0348C4.89298 24.0348 -0.000732422 19.4535 -0.000732422 13.935L-0.000732422 3.93936C-0.000732422 3.73112 -0.000732026 3.41876 0.10339 3.21051C0.207511 2.68991 0.415753 2.27342 0.832239 1.85693C0.832239 2.06518 0.832239 2.27342 0.832239 2.48166C0.832239 13.4144 9.47433 22.1606 20.0947 22.1606C20.7195 22.1606 21.2401 22.1606 21.8648 22.0565C23.4266 21.7441 24.5719 20.2864 24.5719 18.7246L24.5719 4.04349C25.1967 5.18882 25.509 6.33416 25.509 7.68774Z"
                fill="url(#paint1_linear_1_3519)"
              />
              <path
                d="M22.0732 8.93714V16.3298C22.0732 17.5792 21.2402 18.6204 19.9908 18.8287C19.5743 18.8287 19.0537 18.9328 18.6372 18.9328C10.4116 18.9328 3.7478 12.269 3.7478 4.04343C3.7478 3.62695 3.7478 3.10634 3.85192 2.68985C4.06017 1.64864 4.89314 0.919787 5.83023 0.711544C6.03848 0.711544 6.1426 0.607422 6.35084 0.607422L13.7435 0.607422C14.0558 0.607422 14.3682 0.607422 14.6806 0.711544C18.8454 1.12803 22.0732 4.66816 22.0732 8.93714Z"
                fill="white"
              />
              <path
                d="M22.0732 8.93714V16.3298C22.0732 17.5792 21.2402 18.6204 19.9908 18.8287C19.5743 18.8287 19.0537 18.9328 18.6372 18.9328C10.4116 18.9328 3.7478 12.269 3.7478 4.04343C3.7478 3.62695 3.7478 3.10634 3.85192 2.68985C4.06017 1.64864 4.89314 0.919787 5.83023 0.711544C6.03848 0.711544 6.1426 0.607422 6.35084 0.607422L13.7435 0.607422C14.0558 0.607422 14.3682 0.607422 14.6806 0.711544C18.8454 1.12803 22.0732 4.66816 22.0732 8.93714Z"
                fill="url(#paint2_linear_1_3519)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_3519"
                  x1="3.778"
                  y1="9.75033"
                  x2="22.0474"
                  y2="9.75033"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0137063" stop-color="#5AC8FA" />
                  <stop offset="0.1956" stop-color="#44B4FB" />
                  <stop offset="0.5419" stop-color="#1F94FD" />
                  <stop offset="0.8224" stop-color="#087FFF" />
                  <stop offset="1" stop-color="#0078FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_3519"
                  x1="-0.00531377"
                  y1="13.029"
                  x2="25.56"
                  y2="13.029"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0137063" stop-color="#5AC8FA" />
                  <stop offset="0.1956" stop-color="#44B4FB" />
                  <stop offset="0.5419" stop-color="#1F94FD" />
                  <stop offset="0.8224" stop-color="#087FFF" />
                  <stop offset="1" stop-color="#0078FF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_3519"
                  x1="3.778"
                  y1="9.72378"
                  x2="22.0474"
                  y2="9.72378"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0078FF" />
                  <stop offset="0.327" stop-color="#325EFF" />
                  <stop offset="0.6177" stop-color="#574AFF" />
                  <stop offset="0.8518" stop-color="#6E3EFF" />
                  <stop offset="1" stop-color="#763AFF" />
                </linearGradient>
              </defs>
            </svg>
            <p className="mt-4">Creating Happiness One Giftcard at a Time.</p>
            <div className="flex space-x-4 mt-8">
              <img src="fa-socials.svg" alt="image" />
              <img src="ins-socials.svg" />
              <img src="li-socials.svg" />
              <img src="tw-socials.svg" />
            </div>
          </div>
          <div>
            <h3 className="">Contact us</h3>
            <p className="text-textColor">hello@digift.ng</p>
            <h3 className="mt-8 font-bold">Office</h3>
            <p className="mt-4 text-textColor">
              226,Awolowo road,Ikoyi, <br />
              Lagos State,Nigeria
            </p>
            <div className="flex space-x-4 mt-8 text-textColor ">
              <div className="flex items-center space-x-4">
                <span>Our privacy policy</span>
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 5.75801L13.5 5.75801M13.5 5.75801L8.92857 1.18686M13.5 5.75801L8.92857 10.044"
                    stroke="#8A91A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-4">
                <span>Terms and condition</span>
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 5.75801L13.5 5.75801M13.5 5.75801L8.92857 1.18686M13.5 5.75801L8.92857 10.044"
                    stroke="#8A91A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold ">Company</h3>
            <p className="mt-8 text-textColor ">Careers</p>
            <p className="mt-8 text-textColor ">FAQ</p>
          </div>
          <div>
            <h3 className="font-bold ">Products</h3>
            <p className="mt-8 text-textColor ">Personal</p>
            <p className="mt-8 text-textColor ">Business</p>
          </div>
          <div>
            <h3 className="font-bold ">Contact </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-8 text-textColor ">
                Instagram
              </a>
              <a href="#" className="mt-8 text-textColor ">
                Twitter
              </a>
              <a href="#" className="mt-8 text-textColor ">
                Facebook
              </a>
              <a href="#" className="mt-8 text-textColor ">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
