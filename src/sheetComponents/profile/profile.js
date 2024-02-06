import React from "react"
import styles from './profile.module.css'
import LevelCounter from "./profileComponents/levelCounter.js" 
import RaceDropdown from "./profileComponents/raceDropdown.js"
import ClassDropdown from "./profileComponents/classDropdown.js"
import CharacterName from "./profileComponents/characterName.js"
import Aligment from "./profileComponents/aligment.js"
import Backstory from "./profileComponents/backstory.js"
import Expirience from "./profileComponents/expirience.js"


export default function Profile(){
    return (
        <div className={styles.character}>
            <form>
                <table class="profile">
                    <tbody>
                        <tr>
                            <td rowspan="2"><CharacterName /></td>
                            <td><ClassDropdown /></td>
                            <td><Expirience /></td>
                            <td><LevelCounter/></td>
                        </tr>
                        <tr>
                            <td><RaceDropdown /></td>
                            <td><Backstory /></td>
                            <td><Aligment /></td>
                        </tr>
                    </tbody>
                </table>
                <button className={styles.creation}>Create</button>
            </form>
        </div>
    )
}