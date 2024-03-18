import React from "react"
import styles from '../styleComponents/backstory.module.css'


export default function Backstory({backstory, changeNewChar}){
   

    return(
        <div className={styles.backstory}>
            <p>Backstory</p>
            <select value={backstory} onChange={(e) => changeNewChar("backstory", e.target.value)}>
                <option value= "">Pick your Backstory</option>
                <option value="Entertainer">Entertainer</option>
                <option value="Urchin">Urchin</option>
                <option value="Noble">Noble</option>
                <option value="Guild-artisan">Guild artisand</option>
                <option value="Sailor">Sailor</option>
                <option value="Sage">Sage</option>
                <option value="Folk-hero">Folk hero</option>
                <option value="Hermit">Hermit</option>
                <option value="Pirate">Pirate</option>
                <option value="Criminal">Criminal</option>
                <option value="Acolyte">Acolyte</option>
                <option value="Soldier">Soldier</option>
                <option value="Outlander">Outlander</option>
                <option value="Charlatan">Charlatan</option>
            </select>
           
        </div>

        //{backstory} переменная для передачи state
  )
}

