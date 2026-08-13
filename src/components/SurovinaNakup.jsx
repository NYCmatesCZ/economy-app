import { useRef,useEffect } from "react"
import "./SurovinaNakup.css"
import { useState } from "react";
const SurovinaNakup = ({surovina, zmenaPoctuSuroviny}) =>{
    const inputRef = useRef(null);
    const kontrola = (number) =>{
        if(number<0){inputRef.current.value=0}
        if(number>1000){inputRef.current.value=1000}
        zmenaPoctuSuroviny(surovina['nazev'], inputRef.current.value)
    }

    return <tr>
        <td>{surovina['nazev']}</td>
        <td>{surovina['nakup']}</td>
        <td>{surovina['prodej']}</td>
        <td><input ref={inputRef}
            type="number"
            min={0}
            max={1000}
            defaultValue={0}
            onChange={(event) => kontrola(event.target.valueAsNumber)}
            >
        </input></td>
    </tr>
}
export default SurovinaNakup