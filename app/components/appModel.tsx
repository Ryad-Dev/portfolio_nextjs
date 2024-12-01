// ItemList.tsx (ou le fichier de votre choix)

import React from "react"; // Assurez-vous que le type est bien importé

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-start"
        >
          
           <img
            src={item.image}
            alt={item.nom}
            className="w-40 h-40 object-cover rounded-lg"
          /> 
          <div className="flex flex-col pl-3 h-40 justify-start">
            <h2 className="text-xl font-bold mt-4 text-black flex justify-start ">
              {item.nom}
            </h2>
            <div className="bg-blue-300  p-1 rounded-md">
              {" "}
              <p className="text-sm text-gray-600 flex justify-start ">
                {item.type}
              </p>
              
            </div>
            <p className="text-sm text-gray-600 flex justify-start ">
                {item.description}
              </p>

            {/* <p className="text-gray-800 mt-2 flex justify-start pl-3">{item.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// types.ts (ou directement dans le fichier du composant si vous préférez)
export interface Item {
  id: number;
  nom: string;
  image: string;
  type: string;
  description: string;
}
