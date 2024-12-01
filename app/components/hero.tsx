import React from "react";
import "font-awesome/css/font-awesome.min.css";

type HeroProps = object;

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="text-center w-full h-screen flex justify-center items-center">
      <div className="bg-neutral-900 text-white w-5/6 h-5/6 flex  flex-wrap items-center justify-center rounded-3xl p-6">
        <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Image de Profil */}
          <div className="flex justify-center items-center w-52 h-52 lg:w-60 lg:h-60 bg-blue-700 rounded-full overflow-hidden">
            <img
              src="/profil.png"
              alt="photo-profil"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Texte et description */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 p-4">
            <h1 className="text-xl font-bold lg:text-2xl xl:text-2xl text-white leading-snug">
              Hi, I&apos;m Ryad
            </h1>
            <h2 className="mt-2 text-l font-semibold lg:text-xl text-white">
              Software Developer & SaaS Addict
            </h2>
            <p className="py-4 text-xl text-gray-300 leading-snug flex justify-start">
              I build innovative solutions using modern technologies and effective approaches.
            </p>

            {/* Icônes de réseaux sociaux */}
            <div className="flex justify-center items-start space-x-4 mt-6">
              <a
                href="https://github.com/Ryad-Dev"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center h-12 w-12 bg-indigo-600 rounded-full text-white"
              >
                <i className="fa fa-github text-4xl"></i> {/* Logo GitHub */}
              </a>
              <a
                href="https://instagram.com/ryad.sc"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center h-12 w-12 bg-indigo-600 rounded-full text-white"
              >
                <i className="fa fa-instagram text-4xl"></i> {/* Logo Instagram */}
              </a>
              <a
                href="https://x.com/ryad_sc"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center h-12 w-12 bg-indigo-600 rounded-full text-white"
              >
                <i className="fa fa-twitter text-4xl"></i> {/* Logo X */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
