import { assets } from "../assets/assets";
import { NewsletterBox } from "../components/NewsletterBox";
import { Title } from "../components/Title";

export function About(){

    return(
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1="SOBRE" text2="A LOJA" />
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cum error ipsa dicta est cupiditate distinctio, hic, id nostrum eos modi quisquam, delectus aspernatur eaque earum quia quo eum dignissimos!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio magni dicta quod hic, pariatur, neque ea, vitae quae consectetur eius rerum similique minima harum ipsum in libero atque asperiores.</p>
                    <b className="text-gray-800">Nossa Missão</b>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eos labore voluptatem eligendi minima laboriosam, vero earum. Id, alias omnis, assumenda blanditiis inventore, vero facere et corrupti repudiandae repellendus eius!</p>
                </div>
            </div>
            <div className="text-xl">
                <Title text1="PORQUÊ " text2="NOS ESCOLHER" />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Garantia de Qualidade:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tempore.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Entrega Rápida:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tempore.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Satisfação Garantida:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, tempore.</p>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    )
}