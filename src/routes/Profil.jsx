import Surovina from "../components/Surovina"
import "./Profil.css";
import data from "../data"
import { useState } from "react";
const Profil = () =>{
   
    const [Profil, setProfil] = useState(data)
    const ulozeniProfilu = (nazevSuroviny, pocetSurovin) =>{
        Profil['suroviny'][nazevSuroviny] = pocetSurovin;

        localStorage.setItem("profil",JSON.stringify(Profil))
    }
    return <div>
        <h1>Tohle je profil</h1>
        <h2>Peníze: {Profil['money']}</h2>
        <div className="hlavicka-surovin">
            <h3>Surovina</h3>
            <h3>Pocet</h3>
            <h3>Úprava množství</h3>
        </div>
        {Profil['suroviny'].map((jednaSurovina, index) => {
            return <Surovina 
            key={index} 
            jednaSurovina={jednaSurovina} 
            ulozeniProfilu={ulozeniProfilu} />})
        }
        
    </div>
}

export default Profil
