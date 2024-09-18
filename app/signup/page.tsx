"use client";
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputs = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Handle successful registration
        alert("Registration successful!");
      } else {
        // Handle errors
        alert(result.error || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around bg-white fixed w-screen">
        <div>
          <Image src={"/signup.jpg"} alt="" height={5000} width={1000} />
        </div>
        <div className="flex flex-col w-1/3 pl-8 pr-16 shadow-black rounded-lg shadow-xl bg-pink-300">
          <div className="self-center justify-center">
            <Image
              src={"/logo2.png"}
              alt="Example Image"
              width={200}
              height={200}
            />
          </div>
          <div>
            <form method="POST" onSubmit={addData}>
              <div className="mb-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full name
                </div>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="76749 46477"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
              </div>

              <div className="self-center ml-44 mb-4 mt-8">
                <button
                  type="submit"
                  className="w-20 h-8 bg-blue-700 rounded-lg text-blue-100"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-6">
              Already have an account?
              <a href="/login" className="text-blue-600">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputs = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("User registered successfully");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert("An error occurred");
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around bg-white fixed w-screen">
        <div>
          <Image src={"/signup.jpg"} alt="" height={5000} width={1000} />
        </div>
        <div className="flex flex-col w-1/3 pl-8 pr-16 shadow-black rounded-lg shadow-xl bg-pink-300">
          <div className=" self-center justify-center">
            <Image
              src={"/logo2.png"}
              alt="Example Image"
              width={200}
              height={200}
            />
          </div>
          <div>
            <form action="/api/register" method="POST" onSubmit={addData}>
              <div className="mb-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full name
                </div>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                ></input>
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="76749 46477"
                />
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
              </div>

              <div className=" self-center ml-44 mb-4 mt-8">
                <button
                  type="submit"
                  className="w-20 h-8 bg-blue-700 rounded-lg text-blue-100"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-6">
              Already have an account?
              <a href="/login" className=" text-blue-600">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}*/

/*"use client";
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [data, setData] = useState({ email: "", password: "" });

  const addData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/mongo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("data saved");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleInputs = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="flex flex-row justify-around bg-white fixed w-screen">
        <div>
          <Image src={"/signup.jpg"} alt="" height={5000} width={1000} />
        </div>
        <div className="flex flex-col w-1/3 pl-8 pr-16 shadow-black rounded-lg shadow-xl bg-pink-300">
          <div className=" self-center justify-center">
            <Image
              src={"/logo2.png"}
              alt="Example Image"
              width={200}
              height={200}
            />
          </div>
          <div>
            <form method="POST" onSubmit={addData}>
              <div className="mb-2">
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full name
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                ></input>
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="76749 46477"
                />
              </div>

              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data?.email || ""}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={data.password || ""}
                  onChange={handleInputs}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
              </div>

              <div className=" self-center ml-44 mb-4 mt-8">
                <button
                  type="submit"
                  className="w-20 h-8 bg-blue-700 rounded-lg text-blue-100"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-6">
              Already have an account?
              <a href="/login" className=" text-blue-600">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*ila odhaa? hlooaagu 
oddu mari login ekada pttukoli?
andke dihmaangei left petti form right pedadam ankunna alantappudu bg ga ivvadam endhuku image ga pettukochu ga 
avna ala pettu aite
sare nek time undi ga?prleda haa
increase h and w 
classname lona? led ledu height and width lo 20 kakunda penchu ankunta aapuko mari 
aapukovey lkasepu alaaa mouse ni dhobbuthav endhuku
sare ra chetulu katteskunta
aa pani cheyyu
lafooting
hey inkotiii endku ala scroll avttundi na page chiraak gaa
ok na haa nen try chesane adi ento le sarle 
nuvvu try chesthey avvaledha? matladu musti dhana naku  time bokka aapestha reply ivvave haaa avnuu
hehe chooskole ponle nuv chemsav ga iyindi ipdu form right side pedtava malli
haa
mee aayana tho sollesukuntunnava lafoot kadu 
copy avvaledhey jaddi nen copy cheste avtadi nuv cheiledaaa 
 */
