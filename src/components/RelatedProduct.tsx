import { useContext, useEffect, useState } from "react"
import { Product, ShopContext } from "../context/ShopContext"
import { Title } from "./Title"
import { ProductItem } from "./ProductItem"

import { Product as ProductType } from "../context/ShopContext"
export  function RelatedProduct({category, subCategory}: ProductType) {
    const {products} = useContext(ShopContext)
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
    useEffect(()=>{
        if(products.length > 0){
         let productsCopy = products.slice();

         productsCopy = productsCopy.filter((item) => category === item.category);
         productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

         setRelatedProducts(productsCopy.slice(0, 3))  // Limit to 3 related products);
        }
    },[products])

  return (
    <div className="my-24">
        <div className="text-center text-3xl py-2">
            <Title text1={'PRODUTOS'} text2={'RELACIONADOS'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
       {
        relatedProducts.map((item, index) => (
            <ProductItem  key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}     
        </div>
    </div>
  )
}
