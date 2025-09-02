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
                { code: "USA", images: ["/images/programes/Slide16.JPG"] },
                { code: "Canada", images: ["/images/programes/Slide17.JPG"] }, // place holder
            ],
        },
        {
            name: "Europe",
            countries: [
                { code: "Austria", images: ["/images/programes/Slide18.JPG"] },
                { code: "UK", images: ["/images/programes/Slide13.JPG", "/images/programes/Slide14.JPG", "/images/programes/Slide15.JPG"] },
                { code: "Finland", images: ["/images/programes/Slide7.JPG", "/images/programes/Slide8.JPG"] },
                { code: "Estonia", images: ["/images/programes/Slide6.JPG"] },
            ],
        },
        {
            name: "Australia",
            countries: [
                { code: "Australia", images: ["/images/programes/Slide1.JPG"] },
                { code: "New Zealand", images: ["/images/programes/Slide19.JPG"] }
            ],
        },
        {
            name: "Asia",
            countries: [
                { code: "China", images: ["/images/programes/Slide2.JPG", "/images/programes/Slide3.JPG", "/images/programes/Slide4.JPG", "/images/programes/Slide5.JPG"] },
                { code: "Japan", images: ["/images/programes/Slide9.JPG", "/images/programes/Slide10.JPG"] },
                { code: "South Korea", images: ["/images/programes/Slide12.JPG"] },
                { code: "Singapore", images: ["/images/programes/Slide11.JPG"] },
            ],
        },
    ];

    return (
        <div className="w-full h-auto p-5 bg-[url('/images/homepage_sec2_yellow_en_th.png')] bg-cover bg-center">
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
