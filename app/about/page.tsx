import React from "react";

export default function About() {
  return (
    <>
      <div
        className="responsive bg-cover bg-no-repeat bg-center w-screen h-96 opacity-85 text-white"
        style={{ backgroundImage: "url(/luggage.jpg)" }}
      >
        <div className=" text-center text-rounded pt-40 font-semibold text-8xl">
          About us
        </div>
      </div>
      <div className="bg-amber-100">
        <div className="text-3xl text-center pt-8 pb-8">
          Welcome to Hostelxpert
        </div>
        <div className="text-center pl-16 pr-16 pt-4 pb-4">
          Founded with the vision of creating a supportive and vibrant living
          space, HostelXpert has become a preferred choice for students and
          employees alike. Our commitment to providing a safe, clean, and
          friendly environment has made us a trusted name in the community.
        </div>
        <div className="text-3xl text-center font-bold pb-4 pt-4">
          What we offer
        </div>

        <div className="flex flex-row justify-around p-4 gap-5">
          <div className="bg-gray-100 p-4 rounded shadow-md w-1/4">
            <div className="display flex">
              <img
                width="32"
                height="20"
                src="https://img.icons8.com/pulsar-color/48/rupee.png"
                alt="rupee"
              />
              <h2 className="pt-4 text-xl font-bold mb-2 pl-2">
                Affordable Rates
              </h2>
            </div>
            <p className="text-gray-700 pt-4">
              We offer competitive pricing without compromising on quality,
              making it easier for you to manage your budget.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-md w-1/4">
            <div className="display flex">
              <img width="32" height="20" src="icons8-home-48.png" alt="home" />
              <h2 className="text-xl font-bold mb-2 pt-4 pl-2">
                Comfortable Living
              </h2>
            </div>
            <p className="pt-4 text-gray-700">
              Choose from a range of accommodation options, including shared
              rooms and private spaces, all thoughtfully furnished to ensure
              your comfort and privacy.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-md w-1/4">
            <div className="display flex">
              <img
                width="32"
                height="20"
                src="https://img.icons8.com/pulsar-color/48/star.png"
                alt="star"
              />
              <h2 className="pl-2 text-xl font-bold mb-2 pt-4">
                Great Experience
              </h2>
            </div>
            <p className="text-gray-700 pt-4">
              We strive to create an exceptional living experience for our
              residents that makes you feel right at home.
            </p>
          </div>
        </div>

        <div className="text-3xl text-center font-bold pb-4 pt-4">
          Our Mission
        </div>
        <div className="text-center pl-16 pr-16 pt-4 pb-8">
          At HostelXpert, our mission is to provide a nurturing environment
          where students and professionals can thrive. We understand the
          challenges of balancing study, work, and personal life, and we strive
          to make your stay as smooth and enjoyable as possible. Our dedicated
          staff is always here to assist you, ensuring that you have everything
          you need to succeed.
        </div>
      </div>
    </>
  );
}
