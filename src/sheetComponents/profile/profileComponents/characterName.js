import styles from '../styleComponents/characterName.module.css'
import React, { useState } from 'react';


export default function CharacterName({name, changeNewChar}){

    return (
        <div className={styles.name}>
           <input type="text" value={name} onChange={(e) => changeNewChar("name", e.target.value)} placeholder="Character name"></input> 
           
        </div>
        //{name} для передачи в стейт
    )
}

