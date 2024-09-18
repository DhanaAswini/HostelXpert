import Image from "next/image";

export default function contact() {
  return (
    <>
      <div
        className="responsive bg-cover bg-no-repeat bg-center w-screen h-96 opacity-85"
        style={{ backgroundImage: "url(contact.jpg)" }}
      ></div>

      <div className="bg-amber-100 pt-16 pb-16 content-around display flex">
        <div className="mt-8 ml-48">
          <Image
            src={"/cont.jpeg"}
            alt="Example Image"
            width={500}
            height={600}
          />
        </div>

        <div className=" bg-gray-100 rounded-3xl shadow-md w-96 ml-36 p-12">
          <div className="text-3xl pb-8">Get In Touch</div>
          <div className="display flex">
            <img
              width="32"
              height="20"
              src="https://img.icons8.com/pulsar-color/48/new-post.png"
              alt="new-post"
            />
            <a
              href="mailto:hostelxpert@gmail.com"
              className=" text-xl text-center pl-4"
            >
              hostelxpert@gmail.com
            </a>{" "}
          </div>
          <br />
          <div className="border-dashed border-2 border-black"></div>
          <br />

          <div className="display flex">
            <img
              width="32"
              height="20"
              src="https://img.icons8.com/pulsar-color/48/man-on-phone.png"
              alt="man-on-phone"
            />
            <a href="tel:9807654321" className="text-xl text-center pl-4">
              +91 9807654321
            </a>
          </div>
          <br />
          <div className="border-dashed border-2 border-black"></div>
          <br />
          <div className="display flex">
            <img
              width="32"
              height="20"
              src="icons8-website-48.png"
              alt="domain"
            />
            <a className="text-xl text-center pl-4">www.hostelxpert.com</a>
          </div>
          <br />
          <div className="border-dashed border-2 border-black"></div>
          <br />
        </div>
      </div>

      <footer className="bg-pink-100 footer footer-center text-center p-4  text-base-content bg-blend-normal shadow-inner w-screen opacity-100">
        <aside>
          <p>Copyright © 2024 - All right reserved by HostelXpert Ltd</p>
        </aside>
      </footer>
    </>
  );
}
