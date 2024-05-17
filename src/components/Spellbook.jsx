import React, {useState, useEffect} from 'react';
import Spell from './Spell';

function Spellbook() {
    
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        // Hämta spells
        fetch("http://localhost:3000/spells")
        .then((response) => response.json())
        .then((data) => setSpells(data));

    });

    useEffect(() => {
        if(spells.length > 0)
        console.log("SPELLS HAVE BEEN SET"), [spells]
        });
    
    
    return (  
        <>
        {spells.map((s) => (    
            <h1>{spells.name}</h1>

        ))}
        
        </>
    );

}

export default Spellbook;