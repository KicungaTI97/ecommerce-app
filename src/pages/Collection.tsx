import { useContext, useEffect, useState } from "react"
import { Product, ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import { Title } from "../components/Title"
import { ProductItem } from "../components/ProductItem"
import { WhatsAppChat } from "../components/WhatsAppButton"

interface EventType extends React.ChangeEvent<HTMLInputElement>{
    customData?: string;
}
export function Collection(){

    const { products,search, showSearch} = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<string[]>([])
    const [subCategory, setSubCategory] = useState<string[]>([])
    const [sortType, setSortType] = useState<string>("relevant")

     // Função que alterna a seleção de categorias.
    const toggleCategory = (e:EventType) => {

        if(category.includes(e.target.value)){
            // Se a categoria já estiver na lista, remove-a.
            setCategory(category.filter(item => item !== e.target.value))
        }
        else{
            // Se a categoria não estiver na lista, adiciona-a.
            setCategory(prev => [...prev, e.target.value])
        }
    }
     // Função que alterna a seleção de categorias.
    const toogleSubcategory = (e:EventType) =>{
        if(subCategory.includes(e.target.value)){
            // Se a categoria já estiver na lista, remove-a.
            setSubCategory(subCategory.filter(item => item !== e.target.value))
        }
        else{
            // Se a categoria não estiver na lista, adiciona-a.
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    // Aplicar filtro aos produtos.
    const applyFilter = () => {

    // Cria uma cópia dos produtos para não alterar o original.
     let productsCopy = products.slice();

     // Filtra pelo nome se houver pesquisa.
     if(search){
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    } 
     
     // Filtra pela categoria se houver categorias selecionadas.
     if(category.length > 0){
        productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

     // Filtra pela sub-categoria se houver sub-categorias selecionadas.
    if(subCategory.length > 0){
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    // Atualiza o estado com os produtos filtrados.
     setFilterProducts(productsCopy)

    }

    // Ordenar os produtos.
    const sortProduct = () => {
        // Cria uma cópia dos produtos filtrados para não alterar o original.
        const fpCopy = filterProducts.slice();

        // Ordena os produtos de acordo com o tipo de ordenação escolhido.
        switch (sortType) {
            case 'low-high': 
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
            break;

            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    }

    // Chama a função `applyFilter` sempre que `category` ou `subCategory` mudarem.
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch])

    // Chama a função `sortProduct` sempre que `sortType` mudar.
    useEffect(() => {
        sortProduct();
    },[sortType])

    return(
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

            {/*Filtrar Opções */}
            <div className="min-w-60">
                {/* Título e botão para mostrar/esconder os filtros */}
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTROS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>

            {/* Categoria de filtros*/}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIAS</p>
                    <div className="flex flex-col gap-2 text-sm font-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/> Homem
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/> Mulher
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}/> Crianças
                        </p>
                    </div>
                </div>

                {/*SubCategory Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TIPO</p>
                    <div className="flex flex-col gap-2 text-sm font-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Topwear'} onChange={toogleSubcategory}/> Topwear
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toogleSubcategory}/> Roupas do Interior
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toogleSubcategory}/> Roupas de Inverno 
                        </p>
                    </div>
                </div>

            </div>

            {/* Righ Side */}
            <div className="flex-1">
                <div className="flex justify-between  text-base sm:text-2xl mb-4">
                    <Title text1={'TODAS'} text2={'COLEÇÕES'}/>

                    {/*Product Sort */}
                    <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
                        <option value="relevant">Ordenar pr: Relevante</option>
                        <option value="low-high">Ordernar por: Baixo para Alto</option>
                        <option value="high-low">Ordernar por: Alto para Baixo</option>
                    </select>
                </div>

                {/*Map Product*/}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                        ))
                    }
                </div>
                 
            </div>
            <WhatsAppChat />
        </div>
    )
}