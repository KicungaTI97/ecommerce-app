import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { CartTotal } from "../components/CartTotal";
import { Title } from "../components/Title";
import { ShopContext } from "../context/ShopContext";

export function PlaceOrder(){

    const [paymentMethod, setPaymentMethod] = useState<string>('cod')
    const { navigate } = useContext(ShopContext)

    return(
        <div className="flex flex-col sm:flex-row justify-between gap-5 pt-5 sm:pt-14 min-h-[80vh] border-t">
            {/*-------------------Left Side -------------------------- */}
            <div className="flex flex-col gap-4 w-full sm:w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={'ENDEREÇO'} text2={'DE ENTREGA'}/>
                </div>
                <div className="flex gap-3">
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="Primeiro Nome" />
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="Último Nome" />
                </div>
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder=" Endereço de email" />
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder=" Rua" />

                <div className="flex gap-3">
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="Cidade" />
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="Provincia" />
                </div>
                <div className="flex gap-3">
                    <input type="number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="Zipcode" />
                    <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="País" />
                </div>
                <input type="number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full " placeholder="Número de telefone" />
            </div>

            {/*-------------------Right Side -------------------------- */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title text1={'MÉTODO'} text2={'DE PAGAMENTO'}/>
                </div>
                {/*-------------------Payment Method -------------------------- */}
                <div className="flex gap-3 flex-col lg:flex-row ">
                    <div onClick={() =>setPaymentMethod('strip')} className="flex items-center gap-3 border p-2 p-x cursor-pointer">
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "strip" ? 'bg-green-400': ''}`}></p>
                        <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
                    </div> 
                    <div onClick={() =>setPaymentMethod('razorpay')} className="flex items-center gap-3 border p-2 p-x cursor-pointer">
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "razorpay" ? 'bg-green-400': ''}`}></p>
                        <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
                    </div>
                    <div onClick={() =>setPaymentMethod('cod')} className="flex items-center gap-3 border p-2 p-x cursor-pointer">
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "cod" ? 'bg-green-400': ''}`}></p>
                        <p className="text-gray-500 text-sm font-medium mx-4">DINHEIRO NA ENTREGA </p>
                    </div>  
                </div>
                <div className="w-full text-end mt-8">
                    <button onClick={() => navigate('/orders')} className="bg-black text-white py-3 px-16 rounded-md text-sm">
                        FAZER PEDIDO
                    </button>
                </div>
            </div>
        </div>
    )
}