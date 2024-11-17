import {assets} from "../assets/assets";

export function Footer() {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
            <div>
                <img className="mb-5 w-32" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum incidunt ut officiis recusandae a facere consequuntur reprehenderit aspernatur quia exercitationem eius minus eligendi deleniti repellendus blanditiis, adipisci pariatur non voluptatum.
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">EMPRESA</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Início</li>
                    <li>Sobre Nós</li>
                    <li>Entrega</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>

            <div>

                <p className="text-xl font-medium mb-5">ENTRE EM CONTACTO</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Email: 123@example.com</li>
                    <li>Telefone: (123) 456-7890</li>
                    <li>Endereço: Rua 123, 456, Cidade, Estado, CEP</li>
                </ul>
            </div>
        </div> 
        <div >
              <hr />
              <p className="py-5 text-sm text-center">Copyright 2024@ KicuDev.com - All Right Reserved.</p>
        </div> 
    </div>
    
  )
}
