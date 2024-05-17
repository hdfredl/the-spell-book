import React, {useState, useEffect} from 'react';
import Spell from './Spell';

function Spellbook() {
    
    const [spells, setSpells] = useState([]);
    const [castedSpell, setCastedSpell] = useState([]);

    useEffect(() => {
        console.log("Spellbook created.....");
        //Hämta spells och sätt spells-variabeln.
        fetch("http://localhost:3000/spells")
          .then((response) => response.json())
          .then((data) => setSpells(data));
      }, []);

    useEffect(() => {
        if(spells.length > 0)
        {console.log("SPELLS HAVE BEEN SET")}
        
        },  [spells]);

        function handleOnCastSpell(spell) {
            console.log("casting spell...", spell.name)
            setCastedSpell(spell); // set castedSpell så den use-state på varje prop
            
            if(spell.oneUse )
            {
                console.log("spell can be casted once")
                // Ta bort spellen från spell listan
                // const oneUseSpell = spell.filter((s) => s.name !== spell.name)
                // setCastedSpell(oneUseSpell)

                // Skapa en egen frikopplad spells arrayen
                let tempSpells = [...spells]
                // filtrera ut spellen som vi klickat på
                tempSpells = tempSpells.filter ((s) => s.id !== spell.id);

                // Lägg in tempSpells i setSpells (spells)
                setSpells(tempSpells)
            }
        }
    
    
    return (  
        <>
        <h1>{castedSpell.description}</h1>
        {spells.map((s) => (    
           <Spell 
           key = {s.id}
           spell = {s} 
           onCastSpell = { handleOnCastSpell} // hämtar onCastSpell från Spell.jsx - > {() => handleOnCastSpell} 

           />
        ))}

        </>
    );

}

export default Spellbook;