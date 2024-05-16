import React from "react"
import styles from '../styleComponents/raceDropdown.module.css'

export default function RaceDropdown({ race, handleChangeRace, changeNewChar, handleChangeRaceType }) {
    const handleChange = handleChangeRaceType === 'handleChangeRace' ? handleChangeRace : changeNewChar;

    return (
        <div className={styles.race}>
            <p>Race</p>
            <select value={race} onChange={(e) => handleChange("race", e.target.value)}>
                <option value="">Pick your Race</option>
                <option value="Gnome">Gnome</option>
                <option value="Dwarf">Dwarf</option>
                <option value="Dragonborn">Dragonborn</option>
                <option value="Half-ork">Half-orc</option>
                <option value="Halfling">Halfling</option>
                <option value="Half-elf">Half-elf</option>
                <option value="Human">Human</option>
                <option value="Tiefling">Tiefling</option>
                <option value="Elf">Elf</option>
            </select>
        </div>
    );
}
