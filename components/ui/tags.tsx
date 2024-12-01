import React from 'react';

// Définir le type pour les props du composant TagList
interface TagListProps {
  items: Tag[];
}

const TagList: React.FC<TagListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {items.map((item) => (
        <div
          key={item.id}
           className={` ${item.couleur} p-1 rounded-md text-sm text-gray-700 `}
        >
          {item.titre}
        </div>
      ))}
    </div>
  );
};

export default TagList;

export interface Tag {
  id: number;
  titre: string;
  couleur: string;
}
