import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-pink-100 flex justify-between items-center pr-5 pl-20 pt-3 pb-3 bg-blend-normal shadow-inner w-screen opacity-100 ">
      {/*<div>
        <Image src={"/logo.png"} alt="Example Image" width={100} height={50} />
      </div>*/}
      <div className="text-3xl">HostelXpert</div>

      <div className="flex justify-between gap-3">
        <p>Home</p>
        <a href="/about">About Us</a>
        <a href="/rooms">Rooms</a>
        <a href="/contact">Contact</a>
      </div>
      
      <div className="flex justify-between gap-5 mr-10">
        <a href="/login">
          <button>Login</button>
        </a>
        <a href="/signup">
          <button>Sign Up</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
