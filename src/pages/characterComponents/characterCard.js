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
            <table className="iksweb"> 
                <tbody>
                    <tr>
                        <td rowspan="2"><div className={styles.avatar}></div></td>
                        <td><h2>{character.clas} lvl {character.level}</h2></td>
                    </tr>
                    <tr>
                        <td><h2>{character.race}</h2></td>
                    </tr>
                    <tr>
                        <td><h2>{character.name}</h2></td>
                        <td><h2>{character.backstory}</h2></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button onClick={() => handleDelete(character.id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    ));

    return characterCards;
};
