import { assets } from "../assets/assets";

export function OurPolicy(){

    return(
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
                <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
                <p className="font-semibold">Política de Troca Fácil</p>
                <p className="text-gray-400">Oferecemos uma política de troca sem complicações</p>
            </div>

            <div>
                <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="" />
                <p className="font-semibold">Política de devolução de 7 dias</p>
                <p className="text-gray-400">Política de devolução gratuita de 7 dias</p>
            </div>

            <div>
                <img className="w-12 m-auto mb-5" src={assets.support_img} alt="" />
                <p className="font-semibold">Oferecemos melhor suporte ao cliente</p>
                <p className="text-gray-400">oferecemos suporte ao cliente 24 horas por dia, 7 dias por semana</p>
            </div>

        </div>
    )
}