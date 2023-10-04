import { useNavigate, useParams } from "react-router-dom"
import items from "../category/items"

const Detail = () => {

    const {name, id,} = useParams()

    const navigate = useNavigate()
    const item = items.find(i => i.name === name)
 
    return(
        <>
            <h1>Detail de {name}</h1>
            <p>img</p>
            <ul>
                <li> Color : {item.color}</li>
                <li>Id : {item.id} </li>
            </ul>
            <button onClick={() => navigate(-1)}>Volver</button>
        </>


    )

}
export default Detail