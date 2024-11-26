import { assets } from "../assets/assets";
import { NewsletterBox } from "../components/NewsletterBox";
import { Title } from "../components/Title";
import {WhatsAppChat } from "../components/WhatsAppButton";

export function Contact(){

    return(
        <div>
            <div className="text-center text-2xl pt-10 border-1">
                <Title text1={'NOS'} text2={'CONTACTE'} />
            </div>

            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />    
                <div className="flex flex-col justify-center items-center gap-6">
                <p className="font-semibold text-xl text-gray-600">Nossa Loja</p>
                <p className="text-gray-500">Endereço: Rua 123, 456, Cidade, Estado, CEP</p>
                <p className="text-gray-500">Telefone: (123) 456-7890 <br />Email: 123@example.com</p>
                <p className="font-semibold text-xl text-gray-600">Carreiras para Sempre</p>
                <p className="text-gray-500">Se você é uma pessoa apaixonada por moda e está procurando uma oportunidade para trabalhar em uma empresa que valoriza a excelência e a inovação, você está no lugar certo. Estamos sempre em busca de talentos apaixonados e dedicados para se juntar à nossa equipe.</p>
                <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explorar Empregos</button>
                </div>
                
            </div>
            <NewsletterBox/>
            <WhatsAppChat />
        </div>
    )
}