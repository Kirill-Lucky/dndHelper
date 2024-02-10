import React, {useState} from "react"
import styles from '../styleComponents/aligment.module.css'
import Profile from "../profile";

export default function Aligment(){
    const [aligment, setAligment] = useState('');
    const selectedAligment  = (event) =>{
        setAligment(event.target.value);
    }

    return(
        <div className={styles.aligment}>
            <p>Aligment</p>
            <select value={aligment} onChange={selectedAligment}>
                <option value= "">Pick your Aligment</option>
                <option value="lawful-good">Lawful-Good</option>
                <option value="lawful-neutral">Lawful-Neutral</option>
                <option value="lawful-evil">Lawful-Evil</option>
                <option value="neutral-good">Neutral-Good</option>
                <option value="true-neutral">True-Neutral</option>
                <option value="neutral-evil">Neutral-Evil</option>
                <option value="chaotic-good">Chaotic-Good</option>
                <option value="chaotic-neutral">Chaotic-Neutral</option>
                <option value="chaotic-evil">Chaotic-Evil</option>
            </select>
            <Profile aligment={aligment} />
        </div>

        //{aligment} переменная для передачи state
  )
}

