import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="responsive bg-cover bg-no-repeat bg-center w-screen h-screen fixed"
        style={{ backgroundImage: "url(/dorms.jpg)" }}
      >
        <div className="flex items-center justify-center">
          <div className="text-center mt-16">
            <div className="text-5xl">HostelXpert</div>
            <p className="text-xl ml-28">~Your second home</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="p-6 md:p-10 md:w-1/2 mt-28 bg-white bg-opacity-75">
            <h4 className="text-xl text-center">
              Welcome to HostelXpert - Where Comfort meets Convenience
            </h4>
            <a href="/rooms">
              <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow-md hover:bg-yellow-500 transition duration-200 ml-64">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
