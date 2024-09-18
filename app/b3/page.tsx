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
                  Taj Residency Girls Hostel
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
                    3.9
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
                  421 Ratings
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
                    Gajuwaka, Visakhapatnam
                    <span className="ml-2 text-gray-500">
                      (Near Manna Church)
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500">Opens at 6:00 a.m.</span>
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
                    Rooms
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
      </div>
    </>
  );
}
