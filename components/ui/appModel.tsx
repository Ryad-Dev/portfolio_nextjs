

// // import React from "react"; // Assurez-vous que le type est bien importé

// // interface ItemListProps {
// //   items: Item[];
// // }

// // const ItemList: React.FC<ItemListProps> = ({ items }) => {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //       {items.map((item) => (
// //         <div
// //           key={item.id}
// //           className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-start"
// //         >

// //            <img
// //             src={item.image}
// //             alt={item.nom}
// //             className="w-40 h-40 object-cover rounded-lg"
// //           /> 
// //           <div className="flex flex-col pl-3 h-40 justify-start">
// //             <h2 className="text-xl font-bold mt-4 text-black flex justify-start ">
// //               {item.nom}
// //             </h2>
// //             <div className="bg-blue-300  p-1 rounded-md">
// //               {" "}
// //               <p className="text-sm text-gray-600 flex justify-start ">
// //                 {item.type}
// //               </p>

// //             </div>
// //             <p className="text-sm text-gray-600 flex justify-start ">
// //                 {item.description}
// //               </p>

// //             {/* <p className="text-gray-800 mt-2 flex justify-start pl-3">{item.description}</p> */}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ItemList;

// // // types.ts (ou directement dans le fichier du composant si vous préférez)
// // export interface Item {
// //   id: number;
// //   nom: string;
// //   image: string;
// //   type: string;
// //   url: string;
// //   description: string;
// // }

// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // ✅ Type ULTRA-SIMPLE
// export interface SimpleItem {
//   id: number;
//   url: string;
// }

// export default function ItemList({ items }: { items: SimpleItem[] }) {
//   const [projects, setProjects] = useState<any[]>([]);

//   useEffect(() => {
//     items.forEach(async (item) => {
//       const response = await fetch(`/api/project?id=${item.id}&url=${encodeURIComponent(item.url)}`);
//       const data = await response.json();
//       setProjects(prev => [...prev.filter(p => p.id !== item.id), data]);
//     });
//   }, [items]);

//   if (projects.length === 0) return <div className="text-center py-20">Chargement...</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((project) => (
//         <LinkPreviewItem key={project.id} project={project} />
//       ))}
//     </div>
//   );
// }

// function LinkPreviewItem({ project }: { project: any }) {
//   return (








//     <Link
//     href={project.url}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
//   >
//     {/* ✅ DIV 1 : FAVICON + DIV 2 : TITRE → MÊME LIGNE */}
//     <div className="flex items-center gap-4 ">
      
//       {/* DIV 1 : FAVICON CARRÉ */}
//       <div className="w-16 h-16 flex-shrink-0 bg-white/80 rounded-xl border border-white/50 shadow-lg overflow-hidden">
//         {project.favicon ? (
//           <img
//             src={project.favicon}
//             alt={project.nom}  // ✅ Corrigé : alt={project.nom}
//             className="w-full h-full object-contain p-2"
//             onError={(e) => {
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
//             <span className="text-lg font-bold text-gray-600">🌐</span>
//           </div>
//         )}
//       </div>
  
//       {/* DIV 2 : TITRE */}
//       <div className="flex-1 min-w-0">
//   <h3 className="text-sm font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent 
//                  break-words leading-tight max-w-none">
//     {project.nom}
//   </h3>
// </div>

//     </div>
  
//     {/* Autres contenus si besoin */}
//   </Link>
  
//   );
// }
