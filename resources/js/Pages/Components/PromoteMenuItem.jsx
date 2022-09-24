export default function PromoteMenuItem({menu,shadow,admin}){
  return <div className={`mb-5 basis-1/6 p-3 text-center flex flex-col justify-between ${shadow}`}>
  <img src="/jumbotron/jumbotron.jpg" className='w-full'/>
  <p className="uppercase pt-3">{menu.title}</p>
  <p className="pb-3">IDR{menu.price},000.00</p>
  <div>
    {admin ? <>
      <button className="btn-sm uppercase gap-2 btn-warning btn">update</button>
      <button className="btn-sm uppercase btn btn-error gap-2">delete</button></> 
      :
      <button className="btn-sm uppercase btn btn-outline btn-warning gap-2">add to cart</button>}
  </div>
  
</div>
}