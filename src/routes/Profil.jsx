import Surovina from "../components/Surovina"
import "./Profil.css";
import defaultProfil from "../defaultProfil"
import { useState,useEffect } from "react";
const Profil = () =>{
    const [profil, setProfil] = useState(()=>{
        return localStorage.getItem('profil') ? JSON.parse(localStorage.getItem('profil')) : defaultProfil
    })
    const ulozeniProfilu = (nazevSuroviny, pocetSurovin) =>{
            setProfil((prev)=>{
                return {
                    ...prev,
                    suroviny: prev.suroviny.map((jedna)=>{
                        return nazevSuroviny===jedna.nazev 
                        ? {...jedna, pocet: pocetSurovin}
                         : {...jedna}
                    })
                }
            })
    }
    useEffect(()=>{
        localStorage.setItem("profil",JSON.stringify(profil))
    },[profil])
    useEffect(() => {
        setProfil(JSON.parse(localStorage.getItem('profil')))
    },[])
    return <div>
        <h1>Tohle je profil</h1>
        <h2>Peníze: {profil['money']}</h2>
        {!profil['suroviny'] ? <p className="hlaska">Aktuálně nemáte žádné suroviny</p> : <div className="hlavicka-surovin">
            <h3>Surovina</h3>
            <h3>Pocet</h3>
            <h3>Úprava množství</h3>
        </div>}
        {profil.suroviny.map((jednaSurovina, index) => {
            return <Surovina 
            key={index} 
            jednaSurovina={jednaSurovina} 
            ulozeniProfilu={ulozeniProfilu} />})
        }
    </div>
}

export default Profil
