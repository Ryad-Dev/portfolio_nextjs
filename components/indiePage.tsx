'use client';
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import TagList from "@/components/ui/tags";
import Link from "next/link";
import { useState, useEffect } from 'react';
import DiscordIcon from "./ui/discord-icon";

const tags = [
  { id: 1, titre: 'mobile app', couleur: 'bg-blue-500/90 backdrop-blur-sm border border-blue-300/50 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 font-medium' },
  { id: 2, titre: 'web app', couleur: 'bg-amber-500/90 backdrop-blur-sm border border-amber-300/50 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 font-medium' },
  { id: 3, titre: 'Saas', couleur: 'bg-red-500/90 backdrop-blur-sm border border-red-300/50 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 font-medium' },
];

export default function IndiePage() {

  const items = [
   
    { id: 1, url: 'https://www.dataview.live/?ref=portfolio' },
    { id: 2, url: 'https://coursquiz.com/' },


  ];

  const [projects, setProjects] = useState<any[]>([]);

  // ✅ Récupération automatique des métadonnées
  useEffect(() => {
    items.forEach(async (item) => {
      const response = await fetch(`/api/project?id=${item.id}&url=${encodeURIComponent(item.url)}`);
      const data = await response.json();
      setProjects(prev => [...prev.filter(p => p.id !== item.id), data]);
    });
  }, []);

  if (projects.length === 0) {
    return (
      <div className="text-center w-full h-screen flex justify-center items-center bg-neutral-950">
        <div className="bg-neutral-900 text-white w-5/6 h-5/6 flex justify-center items-center rounded-3xl p-8">
          <div className="text-center py-20">Chargement...</div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center w-full h-screen flex justify-center items-center relative overflow-hidden bg-neutral-950">
      {/* Fond subtil sans dégradé */}
      {/* <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm"></div> */}

      <div className="relative bg-neutral-900/95 backdrop-blur-xl text-white w-5/6 h-5/6 flex flex-wrap items-center justify-center rounded-3xl p-6 border-2 border-white/10 shadow-2xl ring-1 ring-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-4 lg:space-y-0 lg:space-x-12 w-full max-w-6xl mx-auto">
          {/* Gauche */}
          <div className="flex flex-col items-start lg:items-start h-screen w-full lg:w-1/2 p-6 lg:p-8 space-y-2 lg:space-y-4">
            {/* Image de Profil - SANS dégradé */}


            <div className="relative w-20 h-20 lg:w-48  lg:h-48  bg-zinc-800/90 backdrop-blur-sm rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-white/40 group-hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/momoji.png"
                alt="Ryad - Software Developer"
                width={200}
                height={200}
                className="object-cover rounded-full w-full h-full shadow-xl relative z-10 hover:brightness-110 transition-all duration-300"
                priority
              />
            </div>
            {/* Titre principal - SANS dégradé */}
            <div className="space-y-3">
              <h1 className="text-xl font-black lg:text-l xl:text-3xl text-white leading-tight tracking-tight shadow-lg">
                Ryad sc<span className="text-blue-400 font-black drop-shadow-lg"></span>
              </h1>
              <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto lg:ml-0 shadow-md"></div>
            </div>

            {/* Sous-titre - SANS dégradé */}
            <h2 className="text-l lg:text-xl font-bold text-white/95 tracking-wide shadow-sm">
              Software Developer & SaaS Hunter
            </h2>

            {/* Description - SANS dégradé */}
            <p className="text-base lg:text-base text-gray-200 leading-relaxed font-light text-left">
              On partage sur discord comment trouver des idées de SaaS, la lancer rapidement et devenir rentable.👇
            </p>

            <div className="flex items-center space-x-6  w-full justify-center lg:justify-start">
              <a
                href="https://discord.gg/y3QZ8BXUw"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center  h-10 w-10 bg-blue-600 hover:bg-blue-600 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                aria-label="Discord"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>

                <img src="/icons/discord-logo.png" className="w-6 h-6 relative z-10" alt="Discord" />
              </a>
              <a
                href="https://instagram.com/ryad.sc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center h-10 w-10 bg-pink-500 hover:bg-pink-400 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <i className="fa fa-instagram text-xl relative z-10"></i>
              </a>


              <a
                href="https://x.com/ryad_sc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center  h-10 w-10 bg-sky-500 hover:bg-sky-400 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                aria-label="X/Twitter"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                <i className="fa fa-twitter text-xl relative z-10"></i>
              </a>

            </div>
          </div>

          {/* Droite */}
          <div className="flex flex-col justify-start items-start w-full h-screen lg:w-1/2 lg:p-2 lg:pt-2 space-y-2 lg:space-y-2 p-4 pt-8">
            {/* Grille des projets */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 ">
              {projects.slice().sort((a, b) => a.id - b.id).map((project) => (

                <Link
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/10 backdrop-blur-sm rounded-2xl p-2 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 h-full"
                >
                  {/* FAVICON + TITRE sur même ligne */}
                  <div className="flex items-center gap-4 mb-0">
                    {/* FAVICON CARRÉ  - bg-white/80 rounded-xl border border-white/50*/}
                    <div className="w-8 h-8 flex-shrink-0  shadow-lg overflow-hidden flex flex-col justify-start">
                      {project.favicon ? (
                        <img
                          src={project.favicon}
                          alt={project.nom}
                          className="h-full w-full rounded object-cover"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-600">🌐</span>
                        </div>
                      )}
                    </div>

                    {/* TITRE (va à la ligne) */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-left text-sm font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent 
                                 break-words leading-tight max-w-none">
                        {project.nom}
                      </h3>
                    </div>
                  </div>


                </Link>
              ))}
            </div>






          </div>
        </div>


      </div>
    </div>
  );
};


