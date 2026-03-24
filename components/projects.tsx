'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projets() {
  // ✅ SEULEMENT id + url !
  const items = [
    { id: 1, url: 'https://www.dataview.live/?ref=portfolio' },
    { id: 2, url: 'https://coursquiz.com/' },
    { id: 3, url: 'https://360-miniamaker.vercel.app/' },
    { id: 4, url: 'https://semicolon-seven.vercel.app/' },
   
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
    <div className="text-center w-full h-screen flex justify-center items-center bg-neutral-950">
      <div className="bg-neutral-900 text-white w-5/6 h-5/6 flex flex-col justify-start items-center rounded-3xl p-8 overflow-y-auto border-2 border-white/10">

        {/* ✅ TITRE DE LA SECTION */}
        <div className="w-full max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-yellow-200 to-orange-400 bg-clip-text text-transparent mb-6 tracking-tight">
          
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez mes réalisations les plus récentes
          </p>
        </div>

        {/* Grille des projets */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* FAVICON CARRÉ */}
                <div className="w-14 h-14 flex-shrink-0 bg-white/80 rounded-xl border border-white/50 shadow-lg overflow-hidden">
                  {project.favicon ? (
                    <img
                      src={project.favicon}
                      alt={project.nom}
                      className="w-full h-full object-contain p-2"
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

               {/*CTA */}
              {/* <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 pt-4 border-t border-white/20 flex items-center gap-2">
                <span className="text-sm font-semibold text-white hover:text-yellow-300 transition-colors">
                  Voir le projet
                </span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

