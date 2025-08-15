import React, { useState, useEffect } from "react";
import ImageModal from "../components/RegionPop";
import RegionButton from "./RegionButton";

function Region() {
    const [showModal, setShowModal] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState();

    // handle Modal
    const openModal = (images, alts) => {
        setModalImageSrc({ src: images, alt: alts });
        setShowModal(true);
    };

    useEffect(() => {
        console.log(modalImageSrc);
    }, [modalImageSrc]);

    // Region data in an array of objects
    const regions = [
        {
            name: "North America",
            countries: [
                { code: "USA", images: ["/images/Slide16.JPG"] },
            ],
        },
        {
            name: "Europe",
            countries: [
                { code: "UK", images: ["/images/Slide13.JPG", "/images/Slide14.JPG", "/images/Slide15.JPG"] },
                { code: "Finland", images: ["/images/Slide7.JPG", "/images/Slide8.JPG"] },
                { code: "Estonia", images: ["/images/Slide6.JPG"] },
            ],
        },
        {
            name: "Australia",
            countries: [
                { code: "Australia", images: ["/images/Slide1.JPG"] },
            ],
        },
        {
            name: "Asia",
            countries: [
                { code: "China", images: ["/images/Slide2.JPG", "/images/Slide3.JPG", "/images/Slide4.JPG", "/images/Slide5.JPG"] },
                { code: "Japan", images: ["/images/Slide9.JPG", "/images/Slide10.JPG"] },
                { code: "Korea", images: ["/images/Slide12.JPG"] },
                { code: "Singapore", images: ["/images/Slide11.JPG"] },
            ],
        },
    ];

    return (
        <div className="w-full h-auto p-5 bg-[url('/images/ODOS%20Website_EN_BG%20Section%202.png')] bg-cover bg-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {regions.map((region, index) => (
                    <div key={index} className="text-center">
                        <p className="text-2xl sm:text-3xl font-bold">{region.name}</p>
                        {region.countries.map((country, idx) => (
                            <RegionButton
                                key={idx}
                                handleModal={openModal}
                                countryCode={country.code}
                                imageArray={country.images}
                            />
                        ))}
                    </div>
                ))}
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
