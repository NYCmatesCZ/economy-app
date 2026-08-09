import SurovinaNakup from "../components/SurovinaNakup"
import data from "../vsechnySuroviny"
import { useState } from "react"
import "./Kalkulacka.css"
import profilData from "../data.jsx"
const Kalkulacka = () =>{
    const [suroviny, setsuroviny] = useState(data)
    const [profil, setProfil] = useState(profilData)
    const nakup = (event,surovina,pocet) =>{
        event.preventDefault()
        let newProfil = {...profil};
        newProfil.money -= surovina['nakup'] * pocet
        newProfil['suroviny'].push({
            nazev: surovina['nazev'],
            pocet: Number(pocet)
        })
        console.log(newProfil);
        setProfil(newProfil)
        console.log(Profil);
        
    }
    const prodej = (event,surovina,pocet) =>{
        event.preventDefault()
    }
    return <div>
        <h1>Tohle je Kalkulacka</h1>
        <form >
            <div className="tabulka">
            <table>
                <thead>
                    <tr>
                        <th>Název</th>
                        <th>Nákupní cena</th>
                        <th>Prodejní cena</th>
                        <th>Počet</th>
                        <th>Nakoupit</th>
                        <th>Prodat</th>
                    </tr>
                </thead>
                <tbody>
                    {suroviny.map((surovina,index) => {
                        return <SurovinaNakup
                        key={index}
                        surovina={surovina}
                        nakup={nakup}
                        prodej={prodej}/>
                        }
                    )}
                    
                </tbody>
            </table>
            </div>
            <h5>Vaše peníze: {profil.money}</h5>
            <h5>Celková Suma: {0}</h5>
        </form>
        
    </div>
}
export default Kalkulacka