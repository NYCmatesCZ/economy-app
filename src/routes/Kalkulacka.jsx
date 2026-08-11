import SurovinaNakup from "../components/SurovinaNakup"
import data from "../vsechnySuroviny"
import { useState } from "react"
import "./Kalkulacka.css"
import profilData from "../data.jsx"
const Kalkulacka = () =>{
    const [celkem, setCelkem] = useState(0)
    const [suroviny, setsuroviny] = useState(data)
    const [profil, setProfil] = useState(profilData)
    const zmenaPoctuSuroviny = (surovinaNazev,pocet) =>{
        suroviny.find(({nazev}) => nazev == surovinaNazev).pocet = Number(pocet);
    }
    const nakoupit = (event) =>{
        event.preventDefault()
        let suma = 0
        suroviny.forEach(({nakup, pocet}) =>{
            suma+=(nakup*pocet)
        })
        setCelkem(suma)
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

                    </tr>
                </thead>
                <tbody>
                    {suroviny.map((surovina,index) => {
                        return <SurovinaNakup
                        key={index}
                        surovina={surovina}
                        zmenaPoctuSuroviny={zmenaPoctuSuroviny}
                        />}
                    )}
                    
                </tbody>
            </table>
            </div>
            <p>Vaše peníze: {profil.money}</p>
            <button onClick={(event)=> {nakoupit(event)}}>Nakoupit</button>
            <button onClick={(event)=> {nakoupit(event)}}>Prodat</button>
            <label htmlFor="celkem">Celková suma: </label><input id="celkem" readOnly value={celkem}></input>
            <input type="submit" value={"Potvrdit obchod"} />
        </form>
        
    </div>
}
export default Kalkulacka