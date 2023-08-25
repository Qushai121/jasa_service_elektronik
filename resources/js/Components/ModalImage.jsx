import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Modal from "./Modal";

const ModalImage = ({children}) => {
    
    const [tutupModalFoto, setTutupModalFoto] = useState(false);
    return (
        <>
        
            <PrimaryButton
                className="btn btn-sm m-2 "
                onClick={() => setTutupModalFoto(!tutupModalFoto)}
            >
                Lihat Gambar
            </PrimaryButton>
            {
                tutupModalFoto ? <>
                    <Modal show={tutupModalFoto} onClose={() => setTutupModalFoto(!tutupModalFoto)}>
                        {children}
                    </Modal>
                </>
                :null
            }
        </>
    );
};

export default ModalImage;
