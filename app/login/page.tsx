"use client"; // Ensures that this component is treated as a client component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation for app directory
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Correct useRouter for app directory

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();

    if (result.success) {
      // If login is successful, navigate to the home page
      router.push("/rooms"); // Correct navigation for the app directory
    } else {
      alert("Login failed: " + result.message);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around bg-white fixed w-screen">
        <div>
          <Image src="/signup.jpg" alt="" height={5000} width={1000} />
        </div>
        <div className="flex flex-col w-1/3 pl-8 pr-16 shadow-black rounded-lg shadow-xl bg-pink-300">
          <div className="self-center justify-center">
            <Image
              src="/logo2.png"
              alt="Example Image"
              width={200}
              height={200}
            />
          </div>
          <div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="self-center ml-44 mb-4">
                <a href="/rooms">
                  <button
                    type="submit"
                    className="w-20 h-8 bg-blue-700 rounded-lg text-blue-100"
                  >
                    Login
                  </button>
                </a>
              </div>
            </form>
            <div className="text-center">
              Don't have an account?
              <a href="/signup" className="text-blue-600">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
