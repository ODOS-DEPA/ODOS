// import React from "react";
import React, { useEffect, useState } from "react";
import ImageModal from "../components/RegionPop";
import RegionButton from "./RegionButton";

function Region() {
  // default: False
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState(); 
  // array of image and alt 
  // 
  //     {
  //         src: ["image1", "image2"], 
  //         alt: "UK"
  //     }
  // 

  // handle Modal
  const openModal = (images, alts) => {
    setModalImageSrc({src: images, alt: alts});
    setShowModal(true);
  };

  useEffect(() => {
    console.log(modalImageSrc);
  }, [modalImageSrc])

  // ['']

  return (
    <div className="w-full h-auto p-5 bg-[url('/images/ODOS%20Website_EN_BG%20Section%202.png')] bg-cover bg-center" >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <div className="text-center" >
          <p className="text-2xl sm:text-3xl font-bold ">North America</p>
          <RegionButton
            handleModal={openModal}
            countryCode={"USA"}
            imageArray={["/images/04_USA.JPG"]}
          />
        </div>

        <div className="text-center" >
          <p className="text-2xl sm:text-3xl font-bold ">Europe</p>
              <RegionButton
                handleModal={openModal}
                countryCode={"UK"}
                imageArray={["/images/07_UK_Programme ODOS Summer Camp.jpg"]}
              />
          
              {/* <RegionButton
                handleModal={openModal}
                countryCode={"Sweden"}
                imageArray={[""]}
              /> */}
            
              <RegionButton
                handleModal={openModal}
                countryCode={"Finland"}
                imageArray={["/images/finland.jpg", "/images/finland2.jpg"]}
              />
            
              <RegionButton
                handleModal={openModal}
                countryCode={"Estonia"}
                imageArray={["/images/03_Estonia.JPG"]}
              />
        </div>

        <div className="text-center" >
          <p className="text-2xl sm:text-3xl font-bold ">Australia</p>
          <RegionButton
            handleModal={openModal}
            countryCode={"Australia"}
            imageArray={["/images/01_AUS.JPG"]}
          />
        </div>

        <div className="text-center" >
          <p className="text-2xl sm:text-3xl font-bold ">Asia</p>
          <RegionButton
            handleModal={openModal}
            countryCode={"China"}
            imageArray={["/images/06_China.jpg" , "/images/china2.jpg", "/images/china3.jpg"]}
          />
        
          <RegionButton
            handleModal={openModal}
            countryCode={"Japan"}
            imageArray={["/images/02_JAP.JPG" , "/images/05_Japan Embassy_Programme ODOS Summer Camp.jpg"]}
          />
        
          <RegionButton
            handleModal={openModal}
            countryCode={"Korea"}
            imageArray={["/images/korea.jpg"]}
          />
        
          <RegionButton
            handleModal={openModal}
            countryCode={"Singapore"}
            imageArray={[""]}
          />
        
          {/*<RegionButton*/}
          {/*  handleModal={openModal}*/}
          {/*  countryCode={"Taiwan"}*/}
          {/*  imageArray={[""]}*/}
          {/*/>*/}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ImageModal
          images={modalImageSrc}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="mt-16">
        <p className="text-right">
          * Click on the destination to see more details.
        </p>
      </div>
    </div>
  );
}

export default Region;