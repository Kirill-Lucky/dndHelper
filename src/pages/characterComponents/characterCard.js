import React, { useState, useEffect } from 'react';
import styles from './characterCard.module.css';
import EditingWindow from './editingWindow/editingWindow';

export default function Card() {
    const [modalIsOpen, setModalOpen] = useState(false);
    const [id, setId] = useState(null);
    const [userCharacter, setUserCharacter] = useState([]);

    useEffect(() => {
        const characters = JSON.parse(localStorage.getItem('Characters')) || [];
        setUserCharacter(characters);
    }, []);

    const handleDelete = (id) => {
        const updatedCharacters = userCharacter.filter(character => character.id !== id);
        if (updatedCharacters.length === 0) {
            localStorage.removeItem('Characters');
        } else {
            localStorage.setItem('Characters', JSON.stringify(updatedCharacters));
        }
        setUserCharacter(updatedCharacters);
    };

    const handleEditClick = (characterId) => {
        setId(characterId);
        setModalOpen(true);
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
                <button className={`${styles.btn} ${styles.edit}`} onClick={() => handleEditClick(character.id)}>Edit</button>
                <EditingWindow isOpen={modalIsOpen} onClose={() => setModalOpen(false)} id={id} />
                <button className={`${styles.btn} ${styles.delete}`} onClick={() => handleDelete(character.id)}>Delete</button>
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    ));

    return (
        <div>
            {userCharacter.length === 0 ? <div>No characters found.</div> : characterCards}
        </div>
    );
}
