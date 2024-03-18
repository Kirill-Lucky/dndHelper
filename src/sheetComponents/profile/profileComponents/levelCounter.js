import React from "react"
import styles from '../styleComponents/levelCounter.module.css'



export default function LevelCounter({changeNewChar, level, newChar}){
    const increment = () => {
      if (level < 20) {
        changeNewChar('level', newChar.level + 1);
      }
    };

    const decrement = () => {
        if (level > 1) {
          changeNewChar('level', newChar.level - 1);
        }
    };


    return (
        <div className={styles.counter}>
            <p>Level</p>
            <div className="counter-container">
                <button type="button" className="decrement" onClick={decrement}>-</button>
                    <span className="count">{level}</span>
                <button type="button" className="increment" onClick={increment}>+</button>
            </div>
           
        </div>
    )
}