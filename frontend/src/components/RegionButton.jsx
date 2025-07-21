
// props:
// function handleModal
// country code
// region name
// images array


export default function RegionButton(props) {

    const {handleModal, countryCode, imageArray} = props;

    return (
          <div className="text-lg sm:text-xl mt-2">
            <div className="flex flex-col">
                    <button
                        onClick={
                          () => handleModal(imageArray, countryCode)
                        }
                        rel="noopener noreferrer"
                        className="hover:text-[#869bd4]"
                    >
                        {countryCode}
                    </button>
            </div>
          </div>
    )
}
