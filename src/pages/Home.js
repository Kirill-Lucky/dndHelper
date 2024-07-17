import styles from './Home.module.css';

export default function Home(){
       
    return (
       <div className={styles.home}>
        {/* 
        После удаление всех объектов в локал сторедж остается пустая запись, и потому туда добавляется один персонаж перезаписывается на другого (исправить())
        
        
        */}
            <h1>Modified 16.05.2024</h1>
        </div>
    )
}