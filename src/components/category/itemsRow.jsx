import Items from "./items.jsx";

const ItemsRows = ( {items} )  => {
    return items.map( (item) => {
        return(
            <Items
            name={item.name}
            color={item.color}
            id={item.id}
            style={item.style}
            onClick={item.onClick}
            />
        )
    }

    )
}

export default ItemsRows