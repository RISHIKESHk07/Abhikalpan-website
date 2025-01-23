import { ArrowUpCircleIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">

        <div className="flex flex-col items-start space-y-6">

          <img
            src="/assets/Logo.png"
            alt="Abhikalpan Logo"
            className="h-40"
          />


          <div className="flex space-x-4">
            <a href="https://x.com/Abhikalpanfest?t=k9TVaA4kf8Zwb6yrR-xK3Q&s=09" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-white hover:text-cyan-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56a9.94 9.94 0 01-2.83.78 4.93 4.93 0 002.17-2.72 9.86 9.86 0 01-3.12 1.2 4.92 4.92 0 00-8.38 4.49A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.91 4.91 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.21.08 4.93 4.93 0 004.6 3.42 9.87 9.87 0 01-6.1 2.1A10 10 0 010 21.54 13.94 13.94 0 007.56 24c9.14 0 14.14-7.57 14.14-14.14 0-.22 0-.44-.02-.66A10.08 10.08 0 0024 4.56z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/abhikalpan_iiitdmj?igsh=MTI3cWo2ODd4dTFtZQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-white hover:text-cyan-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 0C3.477 0 0 3.477 0 7.75v8.5C0 20.523 3.477 24 7.75 24h8.5C20.523 24 24 20.523 24 16.25v-8.5C24 3.477 20.523 0 16.25 0h-8.5zM12 5.8a6.2 6.2 0 110 12.4 6.2 6.2 0 010-12.4zm0 10.2a4 4 0 100-8 4 4 0 000 8zm7.5-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abhikalpan-iiitdmj-2k19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-white hover:text-cyan-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.5 1.12 2.5 2.5zM0 24V7.99h5V24H0zm8.59-13.01h4.26V13c.6-1.14 2.08-2.14 4.29-2.14 4.59 0 5.44 3.04 5.44 6.98V24h-5v-5.64c0-1.34-.03-3.07-1.88-3.07-1.89 0-2.18 1.48-2.18 2.97V24h-5V10.99z" />
              </svg>
            </a>
          </div>


          <p className="text-sm">
            &copy; 2025 Abhikalpan, All rights reserved
          </p>
        </div>


        <div className="flex flex-col items-end space-y-6">

          <a href="/register">
            <img
              src="/assets/image.png"
              alt="Register Now"
              className="h-20 hover:opacity-90 hidden"
            />
          </a>


          <div className="self-end">
    <a href="#top" className="text-cyan-300">
      <ArrowUpCircleIcon className="w-12 h-12 hover:text-white" />
    </a>
  </div>


          <div className="text-right text-sm">
            <p>
              Designed in collaboration with Department of Design IIITDMJ
            </p>
            <p>Developed by the Technical Fraternity IIITDMJ</p>
          </div>
        </div>
      </div>
    </footer>
  );
}