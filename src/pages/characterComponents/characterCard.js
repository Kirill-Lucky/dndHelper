import React from 'react';
import styles from './characterCard.module.css'; 


export default function Card(){
    
        const userCharacter = JSON.parse(localStorage.getItem('Characters')) || [];
        const characterCard = userCharacter.map(obj => (
            <div className={styles.card}>
                    <table class="iksweb"> 
                        <tbody>
                            <tr>
                                <td rowspan="2"><div className={styles.avatar}></div></td>
                                <td><h2>{obj.clas} lvl {obj.level}</h2></td>
                            </tr>
                            <tr>
                                <td><h2>{obj.race}</h2></td>
                            </tr>
                            <tr>
                                <td><h2>{obj.name}</h2></td>
                                <td><h2>{obj.backstory}</h2></td>
                            </tr> 
                        </tbody>
                    </table>
            </div>
            ));

            return characterCard;
};

