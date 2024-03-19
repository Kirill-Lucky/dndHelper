import React, { useState, useEffect } from 'react';
import styles from './editingData.module.css'; 
import CharacterName from '../../sheetComponents/profile/profileComponents/characterName';
import ClassDropdown from '../../sheetComponents/profile/profileComponents/classDropdown';
import Expirience from '../../sheetComponents/profile/profileComponents/expirience';
import LevelCounter from '../../sheetComponents/profile/profileComponents/levelCounter';
import RaceDropdown from '../../sheetComponents/profile/profileComponents/raceDropdown';
import Backstory from '../../sheetComponents/profile/profileComponents/backstory';
import Aligment from '../../sheetComponents/profile/profileComponents/aligment';

export default function Editor({ onClose }) {
    const [characterData, setCharacterData] = useState({
        characterName: '',
        class: '',
        expirience: '',
        level: '',
        race: '',
        backstory: '',
        alignment: ''
    });

    useEffect(() => {
        const characters = JSON.parse(localStorage.getItem('Characters'));
        const characterId = localStorage.getItem('selectedCharacterId');
        const selectedCharacter = characters.find(character => character.id === characterId);
        if (selectedCharacter) {
            setCharacterData(selectedCharacter);
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCharacterData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const saveCharacter = () => {
        const characters = JSON.parse(localStorage.getItem('Characters'));
        const updatedCharacters = characters.map(character => {
            if (character.id === characterData.id) {
                return { ...character, ...characterData };
            }
            return character;
        });
        localStorage.setItem('Characters', JSON.stringify(updatedCharacters));
        onClose();
    };

    return (
        <div className={styles.character}>
            <form>
                <table className="profile">
                    <tbody>
                        <tr>
                            <td rowspan="2"><CharacterName value={characterData.characterName} onChange={handleChange} /></td>
                            <td><ClassDropdown value={characterData.class} onChange={handleChange} /></td>
                            <td><Expirience value={characterData.expirience} onChange={handleChange} /></td>
                            <td><LevelCounter value={characterData.level} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><RaceDropdown value={characterData.race} onChange={handleChange} /></td>
                            <td><Backstory value={characterData.backstory} onChange={handleChange} /></td>
                            <td><Aligment value={characterData.alignment} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className={styles.creation} onClick={saveCharacter}>Save</button>
            </form>
        </div>
    );
}
