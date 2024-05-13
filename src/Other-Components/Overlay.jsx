import Style from "..//Other-Components/Overlay.module.css";

// image for closing x symbol
import close from "..//assets/LoginSignup/esc.png";

// Overlay component to display Login/Signup and message box
export default function Overlay({ isOpen, onClose, children }) {
    return (
        <>
            {/* Displays the component when isOpen is true*/}
            {isOpen && (
                <div>
                    {/* Background of the overlay */}
                    <div className={Style.overlay__background} onClick={onClose} />
                    {/* Overlay container */}
                    <div className={Style.overlay__container}>
                        {/* div holding the close image */}
                        <div className={Style.overlay__controls}>
                            <img src={close}
                                className={Style.overlay__close}
                                onClick={onClose}
                            />
                        </div>
                        {/* components and elements to be displayed */}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

