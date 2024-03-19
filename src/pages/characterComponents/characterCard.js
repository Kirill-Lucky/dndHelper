import React from 'react';
import styles from './characterCard.module.css';
 

export default function Card(){

    const userCharacter = JSON.parse(localStorage.getItem('Characters')) || [];

    if (!Array.isArray(userCharacter) || userCharacter.length === 0) {
        return <div>No characters found.</div>;
    }
    
    const handleDelete = (id) => {
        const updatedCharacters = userCharacter.filter(character => character.id !== id);
        localStorage.setItem('Characters', JSON.stringify(updatedCharacters));
        window.location.reload(); // Reload the page to reflect the changes
    };



    const characterCards = userCharacter.map(character => (
        <div key={character.id} className={styles.card}>
            <div className={styles.avatar}></div>
            <div>
                <h1 className={styles.name}>{character.name}</h1>        
                <h3>{character.race}</h3>
                <h3>{character.backstory}</h3>
                <h3>{character.clas} lvl {character.level}</h3>
            </div>
            <div className={styles.actions}>
                <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`}  onClick={() => handleDelete(character.id)}>Delete</button>
            </div>
            <div style={{ clear: 'both' }}></div>
        
        </div>
    ));

    return (
        
            characterCards
    );
};
