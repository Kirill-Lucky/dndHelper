import React, {useState} from "react"
import styles from './profile.module.css'
import LevelCounter from "./profileComponents/levelCounter.js" 
import  RaceDropdown from "./profileComponents/raceDropdown.js"
import ClassDropdown from "./profileComponents/classDropdown.js"
import CharacterName from "./profileComponents/characterName.js"
import Aligment from "./profileComponents/aligment.js"
import Backstory from "./profileComponents/backstory.js"
import Expirience from "./profileComponents/expirience.js"
//вызывать стейты в profile. и создавать там переменные value и setValue через useState. 
//потом прокинуть эту функцию в дочерний компонент пропсом и там менять значение.

export default function Profile(){
       
    const [level, setLevel] = useState(1);
   
    const saveCharacter = () => {
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
                            <td><LevelCounter setLevel={setLevel} level={level}/></td>
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