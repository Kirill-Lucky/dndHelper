import styles from '../styleComponents/characterName.module.css'
import React, { useState } from 'react';
import Profile from '../profile';


export default function CharacterName(){
    const [name, setName] = useState('');

    const characterName = (event) => {
        setName(event.target.value);
    };

    return (
        <div className={styles.name}>
           <input type="text" value={name} onChange={(e)=>characterName(e)} placeholder="Character name"></input> 
           <Profile name={name} />
        </div>
        //{name} для передачи в стейт
    )
}

