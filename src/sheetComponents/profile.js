import React from "react"
import styles from './styleComponents/profile.module.css'
export default function Profile(){
    return (
        <div className={styles.character}>
            <table class="profile">
	            <tbody>
                    <tr>
                        <td rowspan="2"><input placeholder="Character name"></input></td>
                        <td><h2>Class</h2></td>
                        <td><h2>Expirience</h2></td>
                        <td><h2>LVL</h2></td>
                    </tr>
                    <tr>
                        <td>RRa</td>
                        <td><h2>Backstory</h2></td>
                        <td><h2>Aligment</h2></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}