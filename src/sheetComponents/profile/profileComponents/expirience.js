import React, {useState} from "react"
import styles from '../styleComponents/expirience.module.css'
import Profile from "../profile";

export default function Expirience(){
    
    const [expirience, setExpirience] = useState('');

    const allExp = (event) => {
        setExpirience(event.target.value);
    };

    return (
        <div className={styles.expirience}>
            <p>Expirience</p>
           <input type="number" min="0" step="1" value={expirience} onChange={(e)=>expirience(e)} placeholder="Expirience"></input>
           <Profile expirience={expirience} /> 
        </div>
        //{expirience} для передачи в стейт
    )
}

