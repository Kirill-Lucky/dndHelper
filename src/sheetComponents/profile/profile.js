import React from "react"
import styles from './profile.module.css'
import LevelCounter from "./profileComponents/levelCounter.js" 
import  RaceDropdown from "./profileComponents/raceDropdown.js"
import ClassDropdown from "./profileComponents/classDropdown.js"
import CharacterName from "./profileComponents/characterName.js"
import Aligment from "./profileComponents/aligment.js"
import Backstory from "./profileComponents/backstory.js"
import Expirience from "./profileComponents/expirience.js"


export default function Profile({aligment, backstory, name, clas, expirience, level, race}){
    const saveCharacter = (level) => {
        //const characterSheet = [aligment, backstory, name, clas, expirience, level, race]
        console.log(level);
    };


    return (
        <div className={styles.character}>
            <form>
                <table className="profile">
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
                <button type="button" className={styles.creation} onClick={saveCharacter}>Create</button>
            </form>
        </div>
    )


}