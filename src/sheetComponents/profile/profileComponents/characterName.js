import styles from '../styleComponents/characterName.module.css'
import React, { useState } from 'react';


export default function CharacterName(){
    const [name, setName] = useState('');

    const characterName = (event) => {
        setName(event.target.value);
    };

    return (
        <div className={styles.name}>
           <input type="text" value={name} onChange={characterName} placeholder="Character name"></input> 
        </div>
        //{name} для передачи в стейт
    )
}

