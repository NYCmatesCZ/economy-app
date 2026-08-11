import { useState,useEffect } from "react";
import "./Surovina.css";
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
const Surovina = ( {jednaSurovina, ulozeniProfilu }) => {
    const [nazev, setNazev] = useState(jednaSurovina.nazev)
    const [pocet, setPocet] = useState(jednaSurovina.pocet)
    useEffect(() => {
        ulozeniProfilu(nazev,pocet)
    },[pocet])
    const upravitPocet = (number) =>{
        let newPocet = pocet+number;
        if (newPocet < 0) newPocet = 0 
        if (newPocet > 999) newPocet = 999
        setPocet(newPocet)
    }
    
    return <div className="Surovina"> 
        <p>{nazev}</p>
        <p>{pocet}</p>
        <div className="buttonBox">
            <button className="buttonPocet" onClick={() => upravitPocet(1)}><FaPlusCircle/></button>
            <button className="buttonPocet" onClick={() => upravitPocet(-1)}><FaMinusCircle/></button>
        </div>
    </div>
}
export default Surovina
