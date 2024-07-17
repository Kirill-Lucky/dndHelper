import React, { useState, useEffect } from 'react';
import { IoMdClose as IconClose } from "react-icons/io";
import styles from './editingWindow.module.css';
import CharacterName from '../../../sheetComponents/profile/profileComponents/characterName';
import LevelCounter from "../../../sheetComponents/profile/profileComponents/level.js" 
import RaceDropdown from "../../../sheetComponents/profile/profileComponents/raceDropdown.js"
import ClassDropdown from "../../../sheetComponents/profile/profileComponents/classDropdown.js"
import Aligment from "../../../sheetComponents/profile/profileComponents/aligment.js"
import Backstory from "../../../sheetComponents/profile/profileComponents/backstory.js"
import Expirience from "../../../sheetComponents/profile/profileComponents/expirience.js"


export default function EditingWindow({ isOpen, onClose, id }) {
    const [editedCharacter, setEditedCharacter] = useState(null); // Состояние для отслеживания редактируемого персонажа



    useEffect(() => {
        if (isOpen && id) {
            // Получаем данные из локального хранилища по ключу 'Characters'
            const characters = JSON.parse(localStorage.getItem('Characters')) || [];
            // Находим в массиве персонажей редактируемый персонаж по его ID
            const characterToEdit = characters.find(character => character.id === id);
            // Устанавливаем найденного персонажа в состояние editedCharacter
            setEditedCharacter(characterToEdit);
        }
    }, [isOpen, id]);




    const handleChangeName = (newName) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            name: newName
        }));
    };

    
    const handleChangeClass = (newClass) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            clas: newClass
        }));
    };

    const changeNewChar = (param, value) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            [param] : value
        }))
    }

    
    const handleChangeRace = (newRace) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            race: newRace
        }));
    };

    
    const handleChangeBackstory = (newBackstory) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            backstory: newBackstory
        }));
    };

    
    const handleChangeExpirience = (newExpirience) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            expiriece: newExpirience
        }));
    };

    
    const handleChangeAligment = (newAligment) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            aligment: newAligment
        }));
    };


    const handleChangeLevel = (newLevel) => {
        setEditedCharacter(prevState => ({
            ...prevState,
            level: newLevel
        }));
    };

    const handleSave = () => {
        // Получаем все персонажи из локального хранилища
        let characters = JSON.parse(localStorage.getItem('Characters')) || [];
        // Обновляем данные редактируемого персонажа в массиве characters
        characters = characters.map(character => {
            if (character.id === editedCharacter.id) {
                return editedCharacter;
            }
            return character;
        });
        // Записываем обновленные данные в локальное хранилище
        localStorage.setItem('Characters', JSON.stringify(characters));
        // Закрываем всплывающее окно
        onClose();
    };

    return (
        <>
            {isOpen && editedCharacter && (
                <div className={styles.modal}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <button className={styles.modalButton} onClick={onClose}>
                                <IconClose />
                            </button>
                            <div className={styles.character}>
                                <form>
                                    <table className="profile">
                                        <tbody>
                                        <tr>
                                                    <td rowspan="2"><CharacterName name={editedCharacter.name} changeNewChar={handleChangeName} isEditing={true}/></td>
                                                    <td><ClassDropdown clas={editedCharacter.clas} changeNewChar={handleChangeClass} isEditing={true}/></td>
                                                    <td><Expirience expirience={editedCharacter.expiriece} onChange={handleChangeExpirience}/></td>
                                                    <td><LevelCounter level={editedCharacter.level} changeNewChar={handleChangeLevel} isEditing={true}/></td>
                                                </tr>
                                                <tr>
                                                    <td><RaceDropdown race={editedCharacter.race} changeNewChar={handleChangeRace} isEditing={true}/></td>
                                                    <td><Backstory backstory ={editedCharacter.backstory} changeNewChar={handleChangeBackstory} isEditing={true}/></td>
                                                    <td><Aligment aligment={editedCharacter.aligment} changeNewChar={handleChangeAligment} isEditing={true}/></td>
                                                </tr>
                                        </tbody>
                                    </table>
                                    <button type="button" className={styles.creation} onClick={handleSave}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
