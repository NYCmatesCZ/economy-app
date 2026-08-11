import { useRef,useEffect } from "react"
import "./SurovinaNakup.css"
const SurovinaNakup = ({surovina, zmenaPoctuSuroviny}) =>{
    const inputRef = useRef(null);
    return <tr>
        <td>{surovina['nazev']}</td>
        <td>{surovina['nakup']}</td>
        <td>{surovina['prodej']}</td>
        <td><input ref={inputRef}
            type="number"
            min={0}
            max={1000}
            defaultValue={0} 
            onChange={() => zmenaPoctuSuroviny(surovina['nazev'], inputRef.current.value)}>
        </input></td>
    </tr>
}
export default SurovinaNakup