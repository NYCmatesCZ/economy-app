import SurovinaNakup from "../components/SurovinaNakup"
import data from "../vsechnySuroviny"
import { useState,useEffect,useRef } from "react"
import "./Kalkulacka.css"
import defaultProfil from "../defaultProfil.jsx"
const Kalkulacka = () =>{
    const [prepinac, setPrepinac ] = useState(true)
    useEffect(()=>{
        if(prepinac){
            nakoupit(event)
        }else{
            prodej(event)
        }
    })
    const [celkem, setCelkem] = useState(0)
    const [suroviny, setSuroviny] = useState(data)
    const [profil, setProfil] = useState(()=>{
        return localStorage.getItem('profil') ? JSON.parse(localStorage.getItem('profil')) : defaultProfil
    })
    const zmenaPoctuSuroviny = (surovinaNazev,pocet) =>{
        setSuroviny(suroviny.map((polozka, index) => {
            return polozka.nazev == surovinaNazev ? {...polozka, pocet: Number(pocet)} : polozka
        }))
    }
    const nakoupit = (event) =>{
        event.preventDefault()
        let suma = 0
        suroviny.forEach(({nakup, pocet}) =>{
            suma+=(nakup*pocet)
        })
        setCelkem(suma)
    }
    const prodej = (event) =>{
        event.preventDefault()
        let suma = 0
        suroviny.forEach(({prodej, pocet}) =>{
            suma+=(prodej*pocet)
        })
        setCelkem(suma)
    }
    const formSubmit = (event) => {
        event.preventDefault()
        if(prepinac){
        setProfil((prevProfil => {
            return {...prevProfil,
                money: prevProfil.money - celkem,
                suroviny: prevProfil.suroviny.map((jednaSurovina,index) => {
                    return {...jednaSurovina, 
                        pocet: jednaSurovina.pocet + Number(suroviny[index].pocet)}
                })
            }
        }))
        }else{
            const osetreneSuroviny = suroviny.map((surovina,index) => {
                return surovina.pocet>profil.suroviny[index].pocet ? 
                {...surovina, pocet: profil.suroviny[index].pocet} : 
                {...surovina}
            })
            setProfil((prev)=>{
                return {...prev,
                    money: osetreneSuroviny.reduce((sum, surovina)=> sum + surovina.pocet * surovina.prodej , prev.money),
                    suroviny: prev.suroviny.map((surovina,index)=>{
                        return {...surovina, pocet: surovina.pocet - osetreneSuroviny[index].pocet}
                    })
                }
            })
        }
        setCelkem(0)
    }
    useEffect(()=>{
        localStorage.setItem("profil",JSON.stringify(profil))
    },[profil])
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
            <input type="radio" name="prepinac" id="nakup" checked={prepinac} onChange={() =>setPrepinac(!prepinac)} />
            <input type="radio" name="prepinac" id="prodej" checked={!prepinac} onChange={() =>setPrepinac(!prepinac)}/>
            <label htmlFor="nakup">Nakoupit</label>
            <label htmlFor="prodej">Prodat</label>
            <label htmlFor="celkem">Celková suma: </label><input id="celkem" readOnly value={celkem}></input>
            <input type="submit" value={"Potvrdit obchod"} onClick={(event) => formSubmit(event)}/>
        </form>
        
    </div>
}
export default Kalkulacka