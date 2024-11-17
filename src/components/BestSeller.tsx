import { useContext, useEffect, useState } from "react"
import { Product, ShopContext } from "../context/ShopContext"
import { Title } from "./Title";
import { ProductItem } from "./ProductItem";


interface BestSellerProduct extends Product{
    bestseller: boolean, // Add this property to your Product interface
}
export function BestSeller(){

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState<BestSellerProduct[]>([])

    useEffect(()=>{
        const bestProducts = products.filter(item => item.bestseller);
        // Filter products that are marked as bestseller
        setBestSeller(bestProducts.slice(0,5))
    }, [])

    return(
        <div className="my-10">
            {/* Add your best seller items here */}
            <div className="text-center py-8 text-3xl">
                <Title text1={'Produtos'} text2={'MAIS VENDIDOS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum esse ullam consequatur alias quaerat earum, asperiores modi repellendus repudiandae, quidem veniam distinctio, possimus dolorem totam! Placeat quis fugit enim.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                    bestSeller.map((item, index) =>(
                        <ProductItem
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image}/>
                    ))
                }
            </div>
        </div>
    )
}