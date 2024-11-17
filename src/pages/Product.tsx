import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Product as ProductType, ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { ShoppingCart } from 'phosphor-react';
import { RelatedProduct } from '../components/RelatedProduct';


export function Product(){

    const { productId } = useParams<string>();
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState<ProductType | null  >(null)
    const [image, setImage] = useState('')
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if(item._id === productId){
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })
    }

    useEffect(()=>{
        fetchProductData();
    }, [productId, products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/*-------------------Dados do produto-------------------------- */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

            {/*--------------------Imagem do produto------------------ */}
              <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((item, index) => (
                            <img onClick={() => setImage(item)} src={item} key={index} alt=""  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                        ))
                    }
                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />
                </div>
              </div>
              {/* ------------- Informação do produto--------------*/}
              <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                    <p className='pl-2'>(122)</p>
                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                    <p>Selecionar Tamanho</p>
                    <div className='flex gap-2'>
                        {
                            productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} key={index} className={`border bg-gray-100 px-4 py-2 ${item === size ? 'border-orange-500' : ''} `}>
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <button onClick={()=>addToCart(productData._id, size)} className='flex gap-2 bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
                    ADICIONAR 
                    <ShoppingCart size={20} />
                </button>
                <hr className='mt-8 sm:w4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>Produto 100% Original.</p>
                    <p>Dinheiro na entrega está disponível neste produto</p>
                    <p>política fácil de devolução e troca dentro de 7 dias</p>
                </div>
              </div>
            </div>
            {/*------------------- Detalhes do produto e Secção de revisão -------------------------- */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Descrição</b>
                    <p className='border px-5 py-3 text-sm'>Análise (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
                    <p>Visitar nosso e-commerce traz diversos benefícios: você encontra uma variedade de produtos disponíveis 24/7, proporcionando conveniência e facilidade de compra a qualquer hora. Oferecemos promoções exclusivas e comparações de preços para ajudar a fazer a melhor escolha. A experiência de compra é segura, com métodos de pagamento protegidos e opções de devolução fáceis. Além disso, nossas descrições detalhadas e avaliações de outros clientes garantem que você tenha todas as informações para uma compra informada. Por fim, você recebe os produtos diretamente na sua porta com rapidez e praticidade.</p>
                    <p>Nosso e-commerce oferece suporte ao cliente dedicado e acessível via WhatsApp, garantindo que suas dúvidas sejam respondidas e qualquer problema seja resolvido rapidamente. Dessa forma, proporcionamos uma experiência de compra tranquila e satisfatória, com atendimento personalizado e eficiente.</p>
                </div>
            </div>
            {/*------------------- Exibir produtos relacionados -------------------------- */}
            <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
           
        </div>
    ) : <div className='opacity-0'></div>
}