import { Link } from "react-router-dom"

const Items = ({name, color, id, onClick, style}) => {
    return(
        // <tr>
        //     <td>{name}</td>
        //     <td>
        //         <div onClick={() => onClick({name, color, id})}>
        //             {color}
        //         </div>
        //     </td>
        //     <td>
        //         {id}
        //     </td>
        // </tr>

        <div onClick={ ()=> onClick(id)}>
            <h2>{name}</h2>
            <ul>
                <li>Color : {color}</li>
                <li>Id : {id}</li>
            </ul>
            <Link to={`/producto/${name}`}>Abrir</Link>
        </div>
    )

}
export default Items