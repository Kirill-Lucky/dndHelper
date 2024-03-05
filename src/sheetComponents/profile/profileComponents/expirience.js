import React from "react"
import styles from '../styleComponents/expirience.module.css'


export default function Expirience({expirience, allExp}){

    return (
        <div className={styles.expirience}>
            <p>Expirience</p>
           <input type="number" min="0" step="1" value={expirience} onChange={(e)=>allExp(e)} placeholder="Expirience"></input>
            
        </div>
        //{expirience} для передачи в стейт
    )
}

