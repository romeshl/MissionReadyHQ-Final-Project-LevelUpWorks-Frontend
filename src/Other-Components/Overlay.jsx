import Style from "..//Other-Components/Overlay.module.css";

import close from "..//assets/LoginSignup/esc.png";

export default function Overlay({ isOpen, onClose, children }) {
    return (
        <>
            {isOpen && (
                <div>
                    <div className={Style.overlay__background} onClick={onClose} />
                    <div className={Style.overlay__container}>
                        <div className={Style.overlay__controls}>
                            <img src={close}
                                className={Style.overlay__close}
                                
                                onClick={onClose}
                            />
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

