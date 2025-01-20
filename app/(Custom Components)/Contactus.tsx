import React from "react";

const Contact = () => {
  return (
    <>
      <div className="relative top-[10vh]">
        <p className="relative -top-5 left-[100vh]  text-5xl font-aboro text-white ">
          Contact Us
        </p>
        <p className="relative -top-5 left-[83vh] text-l text-white">
          For any queries regarding section mentioned feel free to contact.
        </p>
        <div className="flex flex-wrap relative top-[5vh] left-48 gap-14 box-border	box-sizing: border-box; ">
          <div className="transform origin hover:scale-125 transition duration-300">
            <img className="" src="/images/Register.png" alt="card1" />
            <div className=" h-[15px]">
              <p className=" p-0 m-0 relative  text-[13px] left-32 top-[-35vh] text-[#0F595B] overflow-y-auto ">
                Event Coordinator
              </p>
            </div>
            <h2 className="relative left-9 -top-52 text-2xl text-[#0F595B] ">
              Chetan Anand Jhariya
            </h2>
            <div className="flex relative left-10 -top-44 gap-4">
              <img src="/images/Vector.png" alt="" width="50" height="50" />
              <p>+91 70009 47461</p>
            </div>
            <div className="flex relative left-10 -top-40 gap-4">
              <img src="/images/Group.png" alt="" width="50" height="50" />
              <p>22bme021@iiitdmj.ac.in</p>
            </div>
          </div>
          <div className="transform origin hover:scale-125 transition duration-300">
            <img src="/images/Register.png" alt="card1" />
            <p className="relative text-[13px] left-32 top-[-35vh] text-[#0F595B] ">
              Event Coordinator
            </p>
            <h2 className="relative left-11  -top-52 text-2xl text-[#0F595B]">
              Sankalp
            </h2>
            <div className="flex relative left-10 -top-44 gap-4">
              <img src="/images/Vector.png" alt="" width="50" height="50" />
              <p>+91 84096 46129</p>
            </div>
            <div className="flex relative left-10 -top-40 gap-4">
              <img src="/images/Group.png" alt="" width="50" height="50" />
              <p>22bme051@iiitdmj.ac.in</p>
            </div>
          </div>
          <div className="transform origin hover:scale-125 transition duration-300">
            <img src="/images/Register.png" alt="card1" />
            <p className="relative text-[13px] left-32 top-[-35vh] text-[#0F595B] ">
              Faculty Incharge
            </p>
            <h2 className="relative left-7 -top-52 text-2xl  text-[#0F595B]">
              Dr. Yashpal Singh Katharria
            </h2>
            <div className="flex relative left-10 -top-44 gap-4">
              <img src="/images/Vector.png" alt="" width="50" height="50" />
              <p>+91 81075 91910</p>
            </div>
            <div className="flex relative left-10 -top-40 gap-4">
              <img src="/images/Group.png" alt="" width="50" height="50" />
              <p>yashpalk@iiitdmj.ac.in</p>
            </div>
          </div>
        </div>
        <img
          className="relative -top-[90vh] left-[120vh]"
          src="/images/Groupgear.png"
          width="50"
          height="50"
          alt="blah"
        />
      </div>
    </>
  );
};

export default Contact;
