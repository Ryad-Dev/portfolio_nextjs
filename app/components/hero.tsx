// export default function Hero() {
//   return (
//     <div className=" text-center w-full h-screen  flex justify-center items-center p-10  ">
//       <div className="bg-slate-500 text-white text-center w-full h-screen flex justify-evenly items-center rounded-3xl">

//       </div>
//     </div>
//   );
// }

//import { Container } from "./container";

// // className="bg-blue-500 text-white text-center w-full h-screen rounded-3xl flex justify-center items-center">

//import Image from "next/image";
//import heroImg from "../../public/img/hero.png";
//import Container from "./container";
import React from "react";
import "font-awesome/css/font-awesome.min.css";
// Si vous avez un composant Container personnalisé, assurez-vous d'importer son type ici.
// import { Container } from './Container'; // Exemple d'importation, ajustez selon votre projet

// Typing pour les props du composant (si vous avez des props à passer)
type HeroProps = object;

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className=" text-center w-full h-screen  flex justify-center items-center   ">
      <div className="bg-neutral-900 text-white text-center w-5/6 h-5/6 flex justify-evenly items-center rounded-3xl">
        <div className="flex flex-wrap">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              src="/momoji.png"
              alt="ryad-momoji"
              //   width={100}
              //   height={100}
              className="w-100 h-100 object-cover sm:w-30 sm:h-30 rounded-lg"
            />
          </div>
          <div className="flex items-center w-full lg:w-1/2 p-5">
            <div className="max-w-2xl mb-8 text-start">
              <h1 className="text-2xl font-bold leading-snug tracking-tight  lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                Hi, I&apos;m Ryad
              </h1>
              <h2 className=" pt-2 font-bold leading-snug tracking-tight  lg:text-xl lg:leading-tight xl:text-xl xl:leading-tight dark:text-white">
                Software developpeur & Saas adict
              </h2>
              <p className="py-5 text-xl leading-normal  lg:text-xl xl:text-xl dark:text-gray-300">
              I build innovative solutions using modern technologies and effective approaches.
              </p>

              <div className="flex items-start space-x-3 ">
                {/* <a
                  href="https://github.com/Ryad-Dev"
                  target="_blank"
                  rel="noopener"
                  className="px-4 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-full"
                >
                  <svg
                    role="img"
                    width="22"
                    height="22"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a> */}
                <a
                  href="https://github.com/Ryad-Dev"
                  target="_blank"
                  rel="noopener"
                  className="flex justify-center items-center h-12 w-12 bg-indigo-600 rounded-full text-white"
                >
                  <i className="fa fa-github text-3xl"></i>{" "}
                  {/* Logo GitHub agrandi */}
                </a>

                <a
                  href="https://instagram.com/ryad.sc"
                  target="_blank"
                  rel="noopener"
                  className="flex justify-center items-center h-12 w-12 bg-indigo-600 rounded-full text-white"
                >
                  <i className="fa fa-instagram text-3xl"></i>{" "}
                  {/* Agrandir l'icône */}
                </a>
                <a
                  href="https://x.com/ryad_sc"
                  target="_blank"
                  rel="noopener"
                  className="flex justify-center items-center h-12 w-12 bg-indigo-600 rounded-full text-white"
                >
                  <i className="fa fa-twitter text-4xl"></i> {/* Logo de X agrandi */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
