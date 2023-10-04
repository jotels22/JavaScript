import { useState } from "react"

const CardWidget = () => {

    const [count, setCount] = useState(0)

    const sumarDeaUno = ()=>{
        setCount(count + 1)} 

    return(
        <div>
        <p></p>
        <button onClick={sumarDeaUno}>CardWidget</button> {count} 
        </div>
    )
}


export default CardWidget