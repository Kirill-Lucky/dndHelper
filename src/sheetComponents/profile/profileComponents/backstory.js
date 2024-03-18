import React, {useState} from "react"
import styles from '../styleComponents/backstory.module.css'


export default function Backstory({backstory, changeNewChar}){
   

    return(
        <div className={styles.backstory}>
            <p>Backstory</p>
            <select value={backstory} onChange={(e) => changeNewChar("backstory", e.target.value)}>
                <option value= "">Pick your Backstory</option>
                <option value="entertainer">Entertainer</option>
                <option value="urchin">Urchin</option>
                <option value="noble">Noble</option>
                <option value="guild-artisan">Guild artisand</option>
                <option value="sailor">Sailor</option>
                <option value="sage">Sage</option>
                <option value="folk-hero">Folk hero</option>
                <option value="hermit">Hermit</option>
                <option value="pirate">Pirate</option>
                <option value="criminal">Criminal</option>
                <option value="acolyte">Acolyte</option>
                <option value="soldier">Soldier</option>
                <option value="outlander">Outlander</option>
                <option value="charlatan">Charlatan</option>
            </select>
           
        </div>

        //{backstory} переменная для передачи state
  )
}

