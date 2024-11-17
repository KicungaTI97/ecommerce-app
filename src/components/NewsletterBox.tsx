
export function NewsletterBox() {
  function onSubmitHandler(event){
    event.preventDefault();
    alert('Newsletter Subscribed');
    event.target.reset();

  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscreva agora & ganha até 20% de desconto</p>
        <p className="text-gray-400 mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic vitae facilis vel sed atque iusto porro, sequi delectus incidunt expedita in distinctio magni cupiditate, itaque neque harum sapiente explicabo aliquid.
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Digite o seu email" required/>
          <button className="bg-black text-white text-xs px-10 py-4" type="submit">SUBSCREVER</button>
        </form>
    </div>
  )
}
