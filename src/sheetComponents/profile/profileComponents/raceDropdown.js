import React, {useState} from "react"
import styles from '../styleComponents/raceDropdown.module.css'


export default function RaceDropdown({race, selectedRace}){

    return(
        <div className={styles.race}>
            <p>Race</p>
            <select value={race} onChange={selectedRace}>
                <option value= "">Pick your Race</option>
                <option value="gnome">Gnome</option>
                <option value="dwarf">Dwarf</option>
                <option value="dragonborn">Dragonborn</option>
                <option value="half-ork">Half-orc</option>
                <option value="halfling">Halfling</option>
                <option value="half-elf">Half-elf</option>
                <option value="human">Human</option>
                <option value="tiefling">Tiefling</option>
                <option value="elf">Elfe</option>
            </select>
          
        </div>

        //{race} переменная для передачи state
  )
}

