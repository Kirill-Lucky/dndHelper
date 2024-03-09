
import Card from "./characterComponents/characterCard";
import styles from './Characters.module.css';


export default function Characters(){
    return (
       <div className={styles.container}>
         <Card />
       </div>
     )
}