import React from "react";
import { IoMdClose as IconClose } from "react-icons/io";
import styles from './approvingWindom.module.css';


export default function Approving({isOpen, onClose}){
   
    return(
        <>
        {isOpen && (
            <div className={styles.modal}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <button className={styles.modalButton} onClick={() => onClose()}>
                                <IconClose />
                        </button>
                        <h1>Character created!</h1>
                        <h2>Now you can close the window.</h2>                  
                    </div>
                </div>
            </div>
        )}
            
        </>
  )
}

