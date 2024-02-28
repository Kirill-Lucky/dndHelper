

export default function Characters(){
    const dragCharacter = () => {
        
        const dragData = localStorage.getItem('Character 2');
        const pickedData = JSON.parse(dragData);
        
        console.log(pickedData[level])
       
        
        

    };

    return (
        <button type="button" onClick={dragCharacter}>Save</button>
        
        // <div className={styles.character}>
        //     <form>
        //         <table className="profile">
        //             <tbody>
        //                 <tr>
        //                     <td rowspan="2"><CharacterName name={name} characterName= {characterName}/></td>
        //                     <td><ClassDropdown clas={clas} selectedClas={selectedClas}/></td>
        //                     <td><Expirience expirience={expirience} allExp={allExp}/></td>
        //                     <td><LevelCounter setLevel={setLevel} level={level}/></td>
        //                 </tr>
        //                 <tr>
        //                     <td><RaceDropdown race={race} selectedRace={selectedRace}/></td>
        //                     <td><Backstory backstory = {backstory} selectedBackstory = {selectedBackstory}/></td>
        //                     <td><Aligment aligment={aligment} selectedAligment = {selectedAligment}/></td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //         <button type="button" className={styles.creation} onClick={saveCharacter}>Save</button>
        //         <button type="button" className={styles.creation} onClick={dragCharacter}>Take</button>
        //     </form>
        // </div>
     )
}