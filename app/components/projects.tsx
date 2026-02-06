// import ItemList, { Item } from "../../components/ui/appModel";

// // Page Projets
// export default function Projets() {
//   // Exemple de liste d'objets que vous allez passer au composant ItemList
//   const items: Item[] = [
//     {
//       id: 1,
//       nom: 'BTracker',
//       image: 'https://via.placeholder.com/300',
//       type: 'application mobile',
//       description: 'Ceci est une description du projet A.',
//     },
//     {
//       id: 2,
//       nom: 'Projet B',
//       image: 'https://via.placeholder.com/300',
//       type: 'Type 2',
//       description: 'Ceci est une description du projet B.',
//     },
//     {
//       id: 3,
//       nom: 'Projet C',
//       image: 'https://via.placeholder.com/300',
//       type: 'Type 3',
//       description: 'Ceci est une description du projet C.',
//     },
//   ];

//   return (
//     <div className=" text-center w-full h-screen  flex justify-center items-center   ">
//       <div className="bg-white-500 text-white  w-5/6 h-5/6 flex justify-center items-start rounded-3xl">
//       {/* <h1 className="text-4xl font-bold mb-6">Nos Projets</h1> */}
//       {/* Ajouter le composant ItemList ici */}
//       <ItemList items={items} />
//     </div>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';
import ItemList from "../../components/ui/appModel";

export default function Projets() {
  // ✅ SEULEMENT id + url !
  const items = [
    { id: 1, url: 'https://www.cashin-app.me/' },
    { id: 2, url: 'https://360-miniamaker.vercel.app/' },
    { id: 3, url: 'https://coursquiz.com' }
  ];

  return (
    <div className="text-center w-full h-screen flex justify-center items-center">
      <div className="bg-neutral-900  text-white w-5/6 h-5/6 flex justify-center items-start rounded-3xl p-8 overflow-y-auto">
        <ItemList items={items} />
      </div>
    </div>
  );
}
