import styles from '../styleComponents/characterName.module.css'
import React, { useState } from 'react';


export default function CharacterName({name, characterName}){

    return (
        <div className={styles.name}>
           <input type="text" value={name} onChange={(e)=>characterName(e)} placeholder="Character name"></input> 
           
        </div>
        //{name} для передачи в стейт
    )
}

