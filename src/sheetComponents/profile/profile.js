import React, {useState} from "react"
import styles from './profile.module.css'
import LevelCounter from "./profileComponents/level.js" 
import  RaceDropdown from "./profileComponents/raceDropdown.js"
import ClassDropdown from "./profileComponents/classDropdown.js"
import CharacterName from "./profileComponents/characterName.js"
import Aligment from "./profileComponents/aligment.js"
import Backstory from "./profileComponents/backstory.js"
import Expirience from "./profileComponents/expirience.js"
import { v4 as uuidv4 } from 'uuid';
import Approving from "./approvidWindow/approvingWindow.js"


export default function Profile(){
    const [characters, setCharacters] = useState([]);
    const [newChar, setNewChar] = useState({
        level: '',
        aligment: '',
        backstory: '',
        name: '',
        clas: '',
        experience: '',
        race: ''
    });

    const changeNewChar = (param, value) => {
        setNewChar({
            ...newChar,
            [param] : value
        })
    }
    

   
   const saveCharacter = () => {
        const characterWithId = { ...newChar, id: uuidv4() };
        const updatedCharacters = [...characters, characterWithId];
        setCharacters(updatedCharacters);
        localStorage.setItem('Characters', JSON.stringify(updatedCharacters));
        resetData();
    };

    

    const resetData = () =>{
        setNewChar({
            level: '',
            aligment: '',
            backstory: '',
            name: '',
            clas: '',
            experience: '',
            race: ''
        })
    }

    const[approveOpen, setApproveOpen] = useState(false);

    const helpFunction = () =>{
        saveCharacter();
        setApproveOpen(true)
    };



    return (
        <div className={styles.character}>
            <form>
                <table className="profile">
                    <tbody>
                        <tr>
                            <td rowspan="2"><CharacterName name={newChar.name} changeNewChar = {changeNewChar}/></td>
                            <td><ClassDropdown clas={newChar.clas} changeNewChar = {changeNewChar}/></td>
                            <td><Expirience expirience={newChar.expirience} changeNewChar = {changeNewChar}/></td>
                            <td><LevelCounter level={newChar.level} changeNewChar = {changeNewChar}/></td>
                        </tr>
                        <tr>
                            <td><RaceDropdown race={newChar.race} changeNewChar = {changeNewChar}/></td>
                            <td><Backstory backstory = {newChar.backstory} changeNewChar = {changeNewChar}/></td>
                            <td><Aligment aligment={newChar.aligment} changeNewChar = {changeNewChar}/></td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className={styles.creation} onClick={helpFunction} >Save</button>
                <Approving isOpen={approveOpen} onClose= {()=>setApproveOpen(false)} />
            </form>
        </div>
    )
}