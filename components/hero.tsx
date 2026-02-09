// import React from "react";
// import Image from "next/image";
// import "font-awesome/css/font-awesome.min.css";
// import TagList from "@/components/ui/tags";

// type HeroProps = object;
// const tags = [
//   { id: 1, titre: 'mobile app', couleur: 'bg-blue-300' },
//   { id: 2, titre: 'web app', couleur: 'bg-amber-300' },
//   { id: 3, titre: 'Saas', couleur: 'bg-red-300' },
// ];
// const Hero: React.FC<HeroProps> = () => {


//   return (
//     <div className="text-center w-full h-screen flex justify-center items-center">
//       <div className="bg-neutral-900 text-white w-5/6 h-5/6 flex  flex-wrap items-center justify-center rounded-3xl p-6">
//         <div className="flex flex-col lg:flex-row bg- items-center justify-evenly space-y-1 lg:space-y-2 lg:space-x-8">
//           {/* Image de Profil */}
//           <div className="flex justify-center items-center w-28 h-28 lg:w-60 lg:h-60 bg-zinc-700 rounded-full overflow-hidden">
//             {/* <img
//               src="/profil.png"
//               alt="photo-profil"
//               className="object-cover w-full h-full"
//             /> */}
//             <Image
//               src="/momoji.png" // Remplacez par votre chemin d'image
//               alt="photo-profil"
//               width={500}
//               height={500}
//               className=" object-cover rounded-full"
//               priority // Charger l'image en priorité si elle est visible dès le début
//             />
//           </div>

//           {/* Texte et description */}
//           <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 p-4">
//             <h1 className="text-l font-bold lg:text-2xl xl:text-2xl text-white leading-snug">
//               Hi, I&apos;m Ryad
//             </h1>
//             <h2 className="mt-2 text-sm font-semibold lg:text-xl text-white">
//               Software Developer & SaaS Addict
//             </h2>
//             <p className="py-4 text-sm lg:text-xl text-gray-300 leading-snug flex justify-start">
//               I build innovative solutions using modern technologies and
//               effective approaches.
//             </p>

//             <TagList items={tags} />


//             {/* Icônes de réseaux sociaux */}
//             <div className="flex justify-center items-start space-x-4 mt-4">
//               <a
//                 href="https://github.com/Ryad-Dev"
//                 target="_blank"
//                 rel="noopener"
//                 className="flex justify-center items-center h-10 w-10 bg-indigo-600 rounded-full text-white"
//               >
//                 <i className="fa fa-github text-4xl"></i> {/* Logo GitHub */}
//               </a>
//               <a
//                 href="https://instagram.com/ryad.sc"
//                 target="_blank"
//                 rel="noopener"
//                 className="flex justify-center items-center h-10 w-10 bg-red-400 rounded-full text-white"
//               >
//                 <i className="fa fa-instagram text-4xl"></i>{" "}
//                 {/* Logo Instagram */}
//               </a>
//               <a
//                 href="https://x.com/ryad_sc"
//                 target="_blank"
//                 rel="noopener"
//                 className="flex justify-center items-center h-10 w-10 bg-blue-400 rounded-full text-white"
//               >
//                 <i className="fa fa-twitter text-4xl"></i> {/* Logo X */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




'use client';
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import TagList from "@/components/ui/tags";

const tags = [
  { id: 1, titre: 'mobile app', couleur: 'bg-blue-500/90 backdrop-blur-sm border border-blue-300/50 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 font-medium' },
  { id: 2, titre: 'web app', couleur: 'bg-amber-500/90 backdrop-blur-sm border border-amber-300/50 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 font-medium' },
  { id: 3, titre: 'Saas', couleur: 'bg-red-500/90 backdrop-blur-sm border border-red-300/50 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 font-medium' },
];

const Hero: React.FC = () => {
  return (
    <div className="text-center w-full h-screen flex justify-center items-center relative overflow-hidden bg-neutral-950">
      {/* Fond subtil sans dégradé */}
      <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm"></div>

      <div className="relative bg-neutral-900/95 backdrop-blur-xl text-white w-5/6 h-5/6 flex flex-wrap items-center justify-center rounded-3xl p-6 border-2 border-white/10 shadow-2xl ring-1 ring-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-4 lg:space-y-0 lg:space-x-12 w-full max-w-6xl mx-auto">

          {/* Image de Profil - SANS dégradé */}
          <div className="flex justify-center items-center w-28 h-28 lg:w-60 lg:h-60 relative group cursor-pointer">
            <div className="absolute inset-0 bg-amber-900/70 rounded-full shadow-2xl group-hover:shadow-white/20 transition-shadow duration-300"></div>
            <div className="relative w-28 h-28 lg:w-60 lg:h-60 bg-zinc-800/90 backdrop-blur-sm rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-white/40 group-hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/momoji.png"
                alt="Ryad - Software Developer"
                width={500}
                height={500}
                className="object-cover rounded-full w-full h-full shadow-xl relative z-10 hover:brightness-110 transition-all duration-300"
                priority
              />
            </div>
          </div>

          {/* Texte et description */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 p-6 lg:p-8 space-y-6 lg:space-y-8">

            {/* Titre principal - SANS dégradé */}
            <div className="space-y-3">
              <h1 className="text-l font-black lg:text-3xl xl:text-3xl text-white leading-tight tracking-tight shadow-lg">
                Hi, I'm <span className="text-blue-400 font-black drop-shadow-lg">Ryad</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto lg:ml-0 shadow-md"></div>
            </div>

            {/* Sous-titre - SANS dégradé */}
            <h2 className="text-lg lg:text-2xl font-bold text-white/95 tracking-wide shadow-sm">
              Software Developer & SaaS Addict
            </h2>

            {/* Description - SANS dégradé */}
            <div className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <p className="text-sm lg:text-lg text-gray-200 leading-relaxed font-light text-left">
                I build <span className="font-bold text-yellow-300 drop-shadow-md">innovative solutions</span> using modern technologies
                and effective approaches.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <TagList items={tags} />
            </div>

            {/* Boutons sociaux - SANS dégradés */}
            <div className="flex items-center space-x-6 pt-6 border-t border-white/20 w-full justify-center lg:justify-start">
            <a
                href="https://instagram.com/ryad.sc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center h-12 w-12 bg-pink-500 hover:bg-pink-400 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <i className="fa fa-instagram text-xl relative z-10"></i>
              </a>
              <a
                href="https://github.com/Ryad-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center h-12 w-12 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <i className="fa fa-github text-xl relative z-10"></i>
              </a>


              <a
                href="https://x.com/ryad_sc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center h-12 w-12 bg-sky-500 hover:bg-sky-400 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                aria-label="X/Twitter"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <i className="fa fa-twitter text-xl relative z-10"></i>
              </a>
              <p>
              contactryaddev@gmail.com
            </p>
            </div>
            
          </div>
        </div>
        {/* <svg className="w-8 h-8 -translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg> */}


      </div>
    </div>
  );
};

export default Hero;
