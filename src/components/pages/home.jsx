import NavBar from "../NavBar/navbar"
import Items from "../category/items"
import ItemsRows from "../category/itemsRow"
import items from "../category/items"
import ItemsTableContainer from "../category/itemstablecontainer"
import { useState } from "react"

const Home = () => {

    const [selectedItems, setSelectedItems] = useState([])

    const estaFuncionando = (item) => {
        const newArray = [...selectedItems, item]
        setSelectedItems(newArray)
    }

    const itemsWithOnClick = items.map ((items) => {
        return{
            ...items,
            onClick: function(id) {
                estaFuncionando(id)
            },
        }
    }
    )


    return (
        <>
            <h1>Home</h1>
            <ItemsTableContainer items={itemsWithOnClick} />
        </>

    )
}
export default Home

