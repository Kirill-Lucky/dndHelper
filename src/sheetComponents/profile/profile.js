import React, {useState} from "react"
import styles from './profile.module.css'
import LevelCounter from "./profileComponents/levelCounter.js" 
import  RaceDropdown from "./profileComponents/raceDropdown.js"
import ClassDropdown from "./profileComponents/classDropdown.js"
import CharacterName from "./profileComponents/characterName.js"
import Aligment from "./profileComponents/aligment.js"
import Backstory from "./profileComponents/backstory.js"
import Expirience from "./profileComponents/expirience.js"


export default function Profile(){
    
    const [aligment, setAligment] = useState('');
    const selectedAligment  = (event) =>{
        setAligment(event.target.value);
    }

    const [backstory, setBackstory] = useState('');
    const selectedBackstory  = (event) =>{
        setBackstory(event.target.value);
    }

    const [name, setName] = useState('');
    const characterName = (event) => {
        setName(event.target.value);
    };

    const [clas, setClas] = useState('');
    const selectedClas = (event) =>{
        setClas(event.target.value);
    }

    const [expirience, setExpirience] = useState('');
    const allExp = (event) => {
        setExpirience(event.target.value);
    };

    const [level, setLevel] = useState(1);

    const [race, setRace] = useState('');
    const selectedRace = (event) =>{
        setRace(event.target.value);
    }
   
    const saveCharacter = () => {
        let id = 1;
        id = getNextId(id);

        const data = {
            id: id,
            level: level,
            aligment: aligment,
            backstory: backstory,
            name: name,
            clas: clas,
            experience: expirience,
            race: race,
        }

        const characters = JSON.parse(localStorage.getItem('Characters')) || [];
        characters.push(data);
        localStorage.setItem('Characters', JSON.stringify(characters));

        
        resetData();
        
    };

    function getNextId(key) {
        const data = JSON.parse(localStorage.getItem('Characters')) || [];
        if (data.length === 0) {
          return key; 
        }
        const lastObject = data[data.length - 1];
        return lastObject.id + 1;
      }

    const resetData = () =>{
        setLevel(1);
        setAligment('');
        setBackstory('');
        setName('');
        setClas('');
        setExpirience('');
        setRace('');
    }



    return (
        <div className={styles.character}>
            <form>
                <table className="profile">
                    <tbody>
                        <tr>
                            <td rowspan="2"><CharacterName name={name} characterName= {characterName}/></td>
                            <td><ClassDropdown clas={clas} selectedClas={selectedClas}/></td>
                            <td><Expirience expirience={expirience} allExp={allExp}/></td>
                            <td><LevelCounter setLevel={setLevel} level={level}/></td>
                        </tr>
                        <tr>
                            <td><RaceDropdown race={race} selectedRace={selectedRace}/></td>
                            <td><Backstory backstory = {backstory} selectedBackstory = {selectedBackstory}/></td>
                            <td><Aligment aligment={aligment} selectedAligment = {selectedAligment}/></td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className={styles.creation} onClick={saveCharacter}>Save</button>
            </form>
        </div>
    )
}