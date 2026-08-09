import { useRef,useEffect } from "react"
import "./SurovinaNakup.css"
const SurovinaNakup = ({surovina, nakup, prodej}) =>{
    const inputRef = useRef(null);
    return <tr>
        <td>{surovina['nazev']}</td>
        <td>{surovina['nakup']}</td>
        <td>{surovina['prodej']}</td>
        <td><input ref={inputRef} type="number" min={0} max={1000} defaultValue={0}></input></td>
        <td><button onClick={(event) => nakup( event, surovina, inputRef.current.value)}>Koupit</button></td>
        <td><button onClick={(event) => prodej( event, surovina, inputRef.current.value)}>Prodat</button></td>
    </tr>
}
export default SurovinaNakup