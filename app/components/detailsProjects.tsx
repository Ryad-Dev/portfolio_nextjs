// ItemList.tsx (ou le fichier de votre choix)
import Image from "next/image";
import ImageCarousel from "@/components/ui/ImageCarousel";
import React from "react"; // Assurez-vous que le type est bien importé
export default function DetailsProjets() {
  const images = [
    "./bt_apercu/1.png",
    "./bt_apercu/2.png",
    "./bt_apercu/3.png",
    "./bt_apercu/4.png",
  ];
  const handleClick = () => {
    // Rediriger l'utilisateur vers Instagram
    window.location.href = 'https://drive.google.com/file/d/1qENB-FHvbjjrmNbvFnMUAvmVqXrblna1/view?usp=drive_link';
  };
  return (
    <div className=" text-center w-full h-screen  flex justify-center items-center   ">
      <div className=" text-white  w-5/6 h-5/6 flex justify-start rounded-3xl flex-col">
        {/* <h1 className="text-4xl font-bold mb-6">Nos Projets</h1> */}
        {/* Ajouter le composant ItemList ici */}

        <div className="bg-white rounded-lg  flex items-start justify-start w-full pb-5">
          <div className=" w-28 h-28 lg:w-60 lg:h-60"> <Image
            src="/logo_bt.png" // Remplacez par votre chemin d'image
            alt="logo_businessTracker"
            width={300}
            height={300}
            className=" object-cover rounded-2xl"
            priority // Charger l'image en priorité si elle est visible dès le début
          /></div>
         
          {/* <img
            src="./logo_bt.png"
            alt="BTracker"
            className="w-40 h-40 object-cover rounded-3xl"
          /> */}
          <div className="flex flex-col pl-3 h-28 lg:h-40 justify-between">
            <h2 className="text-xl font-bold mt-4 text-black flex justify-start $inter.className">
              Business Tracker
            </h2>
            <div className="bg-blue-300  p-1 rounded-md">
              {" "}
              <p className="text-sm text-gray-600 flex justify-center ">
                mobile application
              </p>
            </div>

            <div className="bg-blue-600 p-2 rounded-xl text-sm text-white flex justify-center w-20">
              <button
              onClick={handleClick}>
                
                Obtenir</button>
            </div>

            {/* <p className="text-gray-800 mt-2 flex justify-start pl-3">{item.description}</p> */}
          </div>
        </div>
        <p className="text-sm text-gray-600 flex justify-start text-left">
          Business Tracker vous aide à suivre vos revenus et dépenses, offrant
          des rapports détaillés pour optimiser vos finances et votre business.
        </p>
        <div className="h-5"></div>
        <h1 className=" text-black text-left font-bold text-lg">Apercu</h1>
        <div>
          {" "}
          <ImageCarousel images={images} />{" "}
        </div>

        <h1 className=" text-black text-left font-bold text-lg">
          Informations
        </h1>
        {/* // */}
        <div className="flex flex-col text-black ">
          <div className="flex justify-between ">
            <h2 className="text-gray-600 ">Fournisseurs</h2>
            <h2>Ryad.sc</h2>
          </div>
          <hr className=" border-gray-600 my-2 mx-2 " />
        </div>
        {/* // */}
        <div className="flex flex-col text-black ">
          <div className="flex justify-between ">
            <h2 className="text-gray-600 ">Taille</h2>
            <h2>23 Mo</h2>
          </div>
          <hr className=" border-gray-600 my-2 mx-2 " />
        </div>
        {/* // */}
        <div className="flex flex-col text-black ">
          <div className="flex justify-between ">
            <h2 className="text-gray-600 ">Langues</h2>
            <h2>Francais</h2>
          </div>
          <hr className=" border-gray-600 my-2 mx-2 " />
        </div>
        {/* // */}
        <div className="flex flex-col text-black  ">
          <div className="flex justify-between ">
            <h2 className="text-gray-600 ">Compatibilité</h2>
            <h2>Android</h2>
          </div>
          <hr className=" border-gray-600 my-2 mx-2 " />
        </div>
        {/* // */}
        <div className="flex flex-col text-black  ">
          <div className="flex justify-between ">
            <h2 className="text-gray-600 ">Version</h2>
            <h2>Beta test</h2>
          </div>
          <hr className=" border-gray-600 my-2 mx-2 " />
        </div>
        {/* // */}
        <div className="flex flex-col text-black pb-5 ">
          <div className="flex justify-between ">
            <h2 className="text-gray-600 ">Date de publication</h2>
            <h2>2 Décembre 2024</h2>
          </div>
          {/* <hr className=" border-gray-600 my-2 mx-2 " /> */}
        </div>
      </div>
    </div>
  );
}
