import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "./Title";

export function CartTotal() {
    const { currency, getCartAmount,delivery_free } = useContext(ShopContext);
  return (
    <div className="w-full">
        <div className="text-2xl">
            <Title text1={'RESUMO'} text2={'DO PEDIDO'}/>
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Taxa de Entrega</p>
                <p>{currency} {delivery_free}</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_free}.00</b>
            </div>
        </div>
    </div>
  )
}
