import React, {useState} from "react"
import styles from '../styleComponents/classDropdown.module.css'
import Profile from "../profile";

export default function ClassDropdown(){
    const [clas, setClas] = useState('');
    const selectedClas = (event) =>{
        setClas(event.target.value);
    }

    return(
        <div className={styles.clas}>
            <p>Class</p>
            <select value={clas} onChange={selectedClas}>
                <option value= "">Pick your Class</option>
                <option value="bard">Bard</option>
                <option value="barbarian">Barbarian</option>
                <option value="fighter">Fighter</option>
                <option value="wizard">Wizard</option>
                <option value="druid">Druid</option>
                <option value="cleric">Cleric</option>
                <option value="artificer">Artificer</option>
                <option value="warlock">Warlock</option>
                <option value="monk">Monk</option>
                <option value="paladin">Paladin</option>
                <option value="rogue">Rogue</option>
                <option value="ranger">Ranger</option>
                <option value="sorcerer">Sorcerer</option>
            </select>
            <Profile clas={clas} />
        </div>

         //{clas} переменная для передачи state
  )
}

