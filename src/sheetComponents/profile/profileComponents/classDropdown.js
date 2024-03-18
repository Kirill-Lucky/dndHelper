import React from "react"
import styles from '../styleComponents/classDropdown.module.css'


export default function ClassDropdown({clas, changeNewChar}){

    return(
        <div className={styles.clas}>
            <p>Class</p>
            <select value={clas} onChange={(e) => changeNewChar("clas", e.target.value)}>
                <option value= "">Pick your Class</option>
                <option value="Bard">Bard</option>
                <option value="Barbarian">Barbarian</option>
                <option value="Fighter">Fighter</option>
                <option value="Wizard">Wizard</option>
                <option value="Druid">Druid</option>
                <option value="Cleric">Cleric</option>
                <option value="Artificer">Artificer</option>
                <option value="Warlock">Warlock</option>
                <option value="Monk">Monk</option>
                <option value="Paladin">Paladin</option>
                <option value="Rogue">Rogue</option>
                <option value="Ranger">Ranger</option>
                <option value="Sorcerer">Sorcerer</option>
            </select>
            
        </div>

         //{clas} переменная для передачи state
  )
}

