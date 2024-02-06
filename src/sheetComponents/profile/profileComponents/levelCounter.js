import React, { useState } from "react"
import styles from '../styleComponents/levelCounter.module.css'


export default function LevelCounter(){
    const[count, setCount] = useState(1);
    const increment = () => {
        if (count < 20) {
          setCount(count + 1);
        }
      };
    
      const decrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };

    return (
        <div className={styles.counter}>
            <p>Level</p>
            <div className="counter-container">
                <button type="button" className="decrement" onClick={decrement}>-</button>
                    <span className="count">{count}</span>
                <button type="button" className="increment" onClick={increment}>+</button>
            </div>
        </div>
    )
}