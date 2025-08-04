export default function CarouselButton(props) {

    const {handleButton, direction, className} = props;

    return (
        <button
            className={className}
            onClick={() => handleButton()}
        >
            {direction}
        </button>
    )
}
