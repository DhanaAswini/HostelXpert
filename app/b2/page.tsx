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
                  Ushodaya Hospitalities
                </div>
              </div>
              <ul className="flex mt-4 md:mt-0 space-x-4 text-sm font-medium text-gray-600">
                <li>
                  <a
                    href="/Visakhapatnam/Hostels-For-Men-in-Mvp-Colony"
                    className="hover:underline"
                  >
                    Hostels For Men
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
                    4.4
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
                  14 Ratings
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
                    Atchutapuram, Visakhapatnam
                    <span className="ml-2 text-gray-500">
                      (Bhargava Green Fields, STBL Road)
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500">Open 24 Hrs</span>
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
                  href="https://wa.me/7795684728"
                  className="flex items-center text-sm hover:underline"
                >
                  Enquire Now
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white m-6 rounded-lg">
          {/* Amenities Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Amenities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-10">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Kid's Friendly</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">24 Hours Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Extra Bed On Request</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">AC Rooms</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">24 Hours Water</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Free Parking</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Housekeeping</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Air Conditioned</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Attached Bathroom</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Drinking Water Provided</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Fridge/Freezer</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Ceiling Fan</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Bathroom</span>
              </li>
            </ul>
          </div>

          {/* Suitable For Section */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Suitable For
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-10">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Students</span>
              </li>
            </ul>
          </div>

          {/* Accommodation Section */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Accommodation
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-10">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Boys</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Men</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span className="text-gray-900">Sharing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
