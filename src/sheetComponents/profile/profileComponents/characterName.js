import styles from '../styleComponents/characterName.module.css'
import React from 'react';


export default function CharacterName({name, changeNewChar, isEditing}){

    return (
        <div className={styles.name}>
           <input type="text" value={name} onChange={(e) => isEditing ? changeNewChar(e.target.value) : changeNewChar("name", e.target.value)} placeholder="Character name"></input> 
           
        </div>
        //{name} для передачи в стейт
    )
}

