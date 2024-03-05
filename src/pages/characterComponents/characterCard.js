import React from 'react';
import styles from './characterCard.module.css'; 


export default function Card(){
        
        const dragData = localStorage.getItem('Character 2');
        const pickedData = JSON.parse(dragData);
        
        if(pickedData && pickedData.level){
            return (
                <div>
                <div className={styles.card}>
                    <table class="iksweb"> 
                        <tbody>
                            <tr>
                                <td rowspan="2"><div className={styles.avatar}></div></td>
                                <td><h2>{pickedData.clas} lvl {pickedData.level}</h2></td>
                            </tr>
                            <tr>
                                <td><h2>{pickedData.race}</h2></td>
                            </tr>
                            <tr>
                                <td><h2>{pickedData.name}</h2></td>
                                <td><h2>{pickedData.backstory}</h2></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                
                </div>
              );
        } else {
            console.log("No data")
        }
       
    };

