'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AvisClients() {
  // ✅ SEULEMENT id + url des profils clients !
  const clients = [
    { id: 1, url: 'https://www.linkedin.com/in/john-doe/' },
    { id: 2, url: 'https://www.linkedin.com/in/marie-dupont/' },
    { id: 3, url: 'https://www.linkedin.com/in/pierre-martin/' },
  ];

  const [testimonials, setTestimonials] = useState<any[]>([]);

  // ✅ Récupération automatique des métadonnées des profils
  useEffect(() => {
    clients.forEach(async (client) => {
      const response = await fetch(`/api/project?id=${client.id}&url=${encodeURIComponent(client.url)}`);
      const data = await response.json();
      setTestimonials(prev => [...prev.filter(p => p.id !== client.id), data]);
    });
  }, []);

  if (testimonials.length === 0) {
    return (
      <div className="text-center w-full h-screen flex justify-center items-center">
        <div className="bg-neutral-900 text-white w-5/6 h-5/6 flex justify-center items-center rounded-3xl p-8">
          <div className="text-center py-20">Chargement des avis...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center w-full h-screen flex justify-center items-center bg-neutral-950">
      <div className="bg-neutral-900 text-white w-5/6 h-5/6 flex justify-center items-start rounded-3xl p-8 overflow-y-auto border-2 border-white/10">
        <div className="w-full max-w-6xl mx-auto">
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">
              Avis de nos clients
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ce que disent nos clients satisfaits
            </p>
          </div>

          {/* Grille des témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Link
                key={testimonial.id}
                href={testimonial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20 h-full"
              >
                {/* Avatar/Favicon + Nom */}
                <div className="flex items-start gap-4 mb-6">
                  {/* AVATAR/FavIcon */}
                  <div className="w-16 h-16 flex-shrink-0 bg-white/80 rounded-xl border border-white/50 shadow-lg overflow-hidden mt-1">
                    {testimonial.favicon ? (
                      <img
                        src={testimonial.favicon}
                        alt={testimonial.nom}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">👤</span>
                      </div>
                    )}
                  </div>

                  {/* NOM Client (va à la ligne) */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent 
                                   break-words leading-tight max-w-none">
                      {testimonial.nom}
                    </h3>
                  </div>
                </div>

                {/* Citation fictive (peut être connectée à une API témoignages) */}
                <div className="italic text-gray-300 text-sm leading-relaxed mb-6">
                  "Travail exceptionnel ! Professionnalisme et résultats au-delà de mes attentes. 
                  Je recommande les yeux fermés."
                </div>

                {/* Note 5 étoiles */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-2">(5.0)</span>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-semibold text-white hover:text-yellow-300 transition-colors">
                    Voir le profil
                  </span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
