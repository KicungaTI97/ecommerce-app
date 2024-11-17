import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"
interface ProductItemType{
    id: string
    image: string[]
    name: string
    price: number
}
export function ProductItem({id, image, name, price}: ProductItemType){
    const {currency} = useContext(ShopContext);

    return(
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    )
}