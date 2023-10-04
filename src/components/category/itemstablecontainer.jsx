import ItemsRows from "./itemsRow"

const ItemsTableContainer = ({items})=> {
    return(
        <div className="table" border={5} cellPadding={20} >
            <div>
                <ItemsRows items={items} />
            </div>
        </div>
    )

}
export default ItemsTableContainer