import Image from "next/image";

export default function Book() {
  return (
    <>
      <div
        className="responsive bg-cover bg-no-repeat bg-center w-screen h-96 opacity-85 text-white"
        style={{ backgroundImage: "url(book.jpeg)" }}
      ></div>

      <div className="p-5 bg-amber-100 ">
        <div id="mainContent" className="pt-10 pl-5 pr-5 pb-5">
          <div className="bg-white p-5 shadow-md rounded-lg">
            <div
              role="contentinfo"
              aria-label="Ushodaya Hospitatlities"
              className="flex flex-col md:flex-row justify-between items-start md:items-center min-h-[28px]"
            >
              <div className="flex items-center">
                <span
                  role="button"
                  aria-label="Justdial Verified"
                  className="mr-2 cursor-pointer"
                >
                  🛡️
                </span>
                <div className="text-2xl font-bold text-gray-900">
                  K G N Royal Pg Hostel For Womens
                </div>
              </div>
              <ul className="flex mt-4 md:mt-0 space-x-4 text-sm font-medium text-gray-600">
                <li>
                  <a
                    href="/Visakhapatnam/Hostels-For-Men-in-Mvp-Colony"
                    className="hover:underline"
                  >
                    Hostels For Women
                  </a>
                </li>
                <li>
                  <a
                    href="/Visakhapatnam/Hostels-in-Mvp-Colony"
                    className="hover:underline"
                  >
                    Hostels
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8">
              <div className="flex items-center">
                <div
                  role="button"
                  className="flex text-white bg-yellow-500 px-2 py-1 rounded-lg cursor-pointer"
                >
                  <div className="text-xl text-center align-middle font-semibold mr-2">
                    4.6
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 1000 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </div>

                <div
                  role="button"
                  aria-label="Ratings"
                  className="ml-4 text-sm text-gray-600 cursor-pointer"
                >
                  108 Ratings
                </div>
                <span className="ml-2 text-gray-500 cursor-pointer">
                  🛡️ Verified
                </span>
              </div>

              <div className="mt-4 md:mt-0 text-sm text-gray-700">
                <div className="flex items-center">
                  <span role="presentation" className="mr-2">
                    📍
                  </span>
                  <div
                    aria-label="Atchutapuram, Visakhapatnam"
                    className="hover:underline cursor-pointer"
                  >
                    Maharanipeta, Visakhapatnam
                    <span className="ml-2 text-gray-500">
                      (Jandachattu, Near Vijetha Hospital, Kgh Down)
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500">Opens at 7:00 a.m.</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-700">
                <span role="none" className="mr-2">
                  📞
                </span>
                <a href="07795684728" className="hover:underline">
                  07795684728
                </a>
              </div>

              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="flex items-center text-sm text-gray-700 hover:underline">
                  ⭐ Tap to Rate
                </button>
                <button className="flex items-center text-sm text-gray-700 hover:underline">
                  📷 Add Photo
                </button>
                <button className="flex items-center text-sm text-gray-700 hover:underline">
                  🔗 Share
                </button>

                <button className="flex items-center text-sm text-gray-700 hover:underline">
                  ❤️ Favorite
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                id="dp_best_deal"
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-500"
              >
                <a
                  href="https://wa.me/8128198752"
                  className="flex items-center text-sm hover:underline"
                >
                  Enquire Now
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 shadow-md rounded-lg m-6">
          <div className="space-y-8">
            {/* Facilities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Facilities
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-lg font-medium text-gray-700">
                    Kitchen
                  </span>
                </li>
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-lg font-medium text-gray-700">
                    AC and Non-AC Rooms
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-lg font-medium text-gray-700">
                    24 Hours Water
                  </span>
                </li>
              </ul>
            </div>

            {/* Suitable For */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Suitable For
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-lg font-medium text-gray-700">
                    Students and PG
                  </span>
                </li>
              </ul>
            </div>

            {/* Accommodation */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Accommodation
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span className="text-lg font-medium text-gray-700">
                    Women
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 border bg-white border-gray-200 rounded-lg shadow-sm m-6">
          <div className="flex items-center">
            {/* Profile Image */}
            <div className="w-12 h-12">
              <img
                className="w-full h-full rounded-full cursor-pointer"
                alt="pavan photo"
                src="https://profile.justdial.com/profileImg?i=htvMAqr%2FBBzT0iOnQdtu54Q%2FqZjqEuRUzPZn8TjsGA4%3D"
              />
            </div>

            {/* Profile Text */}
            <div className="ml-4">
              <span className="text-lg font-semibold text-gray-900 capitalize cursor-pointer">
                pavani
              </span>
              <div className="text-sm font-normal text-gray-500 cursor-pointer">
                64 reviews
              </div>
            </div>

            {/* Date */}
            <div className="ml-auto">
              <div className="text-sm text-gray-500">24 Feb 2023</div>
            </div>

            {/* Edit Options */}
            <div className="relative ml-4">
              <div className="cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </div>
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                  <span className="mr-2">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 13h6m2 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </span>
                  Report Review
                </li>
              </ul>
            </div>
          </div>

          {/* Rating and Review */}
          <div className="mt-4">
            <div className="flex items-center">
              {/* Star Rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.982h5.245c.97 0 1.371 1.24.588 1.81l-4.244 3.082 1.618 4.982c.3.921-.755 1.688-1.539 1.118L10 13.187l-4.244 3.082c-.784.57-1.838-.197-1.539-1.118l1.618-4.982L1.591 9.719c-.784-.57-.382-1.81.588-1.81h5.245l1.618-4.982z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div className="mt-4 text-gray-700 text-sm">
              The atmosphere of the hostel is mind-blowing. How cleanly they are
              maintaining it is so beautiful, and the rooms are very good with
              24 hours power supply and water is available. Hostel food is very
              tasty. The price of rooms is also available for very reasonable
              prices only.
            </div>
          </div>

          {/* Social Interaction */}
          <div className="mt-4 flex space-x-4">
            <button className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              Helpful (2)
            </button>
            <button className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              Comment
            </button>
            <button className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              Share
            </button>
          </div>
        </div>

        <div className="p-6 border bg-white m-6 border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center">
            {/* Profile Image */}
            <div className="w-12 h-12">
              <img
                className="w-full h-full rounded-full cursor-pointer"
                alt="Sunita photo"
                src="https://profile.justdial.com/profileImg?i=NXA3aPsewEw0hS50Ly6X3b9Bb06wHqIR3ElQhEaJTkI%3D"
              />
            </div>

            {/* Profile Text */}
            <div className="ml-4">
              <span className="text-lg font-semibold text-gray-900 capitalize cursor-pointer">
                Sunita
              </span>
              <div className="text-sm font-normal text-gray-500 cursor-pointer">
                2 reviews
              </div>
            </div>

            {/* Date */}
            <div className="ml-auto">
              <div className="text-sm text-gray-500">30 Jul</div>
            </div>

            {/* Edit Options */}
            <div className="relative ml-4">
              <div className="cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </div>
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <li className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                  <span className="mr-2">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 13h6m2 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </span>
                  Report Review
                </li>
              </ul>
            </div>
          </div>

          {/* Rating and Review */}
          <div className="mt-4">
            <div className="flex items-center">
              {/* Star Rating */}
              <div className="flex space-x-1">
                <div className="relative w-6 h-6">
                  <svg
                    className="w-full h-full text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <clipPath id="star-clip">
                        <polygon points="100,10 40,198 190,78 10,78 160,198" />
                      </clipPath>
                    </defs>
                    <rect
                      width="40%"
                      height="100%"
                      clipPath="url(#star-clip)"
                      style={{ fill: "rgb(255, 110, 0)" }}
                    ></rect>
                    <rect
                      width="60%"
                      height="100%"
                      clipPath="url(#star-clip)"
                      style={{ fill: "rgb(215, 215, 215)" }}
                    ></rect>
                  </svg>
                </div>
              </div>
            </div>

            {/* User Rating Tags */}
            <div className="mt-4">
              <ul className="text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="negative_tag mr-2 bg-red-200 text-red-600 px-2 py-1 rounded-full">
                    Expensive
                  </span>
                </li>
              </ul>
            </div>

            {/* Review Text */}
            <div className="mt-4 text-gray-700 text-sm">
              Sri Krishna Pg offers a comfortable stay but it`s quite expensive.
              The amenities are good, but the pricing is not justified. The
              location is convenient, and the staff is friendly. Overall, it`s a
              decent option for those who can afford it, but definitely not
              budget-friendly.
            </div>
          </div>

          {/* Social Interaction */}
          <div className="mt-4 flex space-x-4">
            <button className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              Helpful
            </button>
            <button className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              Comment
            </button>
            <button className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
