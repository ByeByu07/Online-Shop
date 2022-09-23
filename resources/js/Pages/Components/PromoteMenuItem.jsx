export default function PromoteMenuItem({menu}){
  return <div className='shadowme1 mb-5 basis-1/3 p-3 text-center'>
  <img src="/jumbotron/jumbotron.jpg" className='w-full'/>
  <p className="uppercase pt-3">{menu.title}</p>
  <p className="pb-3">IDR{menu.price},000.00</p>
  <button className="btn-sm uppercase btn btn-outline btn-warning gap-2">
    add to cart
    {/* <img src="https://img.icons8.com/ios-glyphs/30/1A1A1A/shopping-cart--v1.png"/> */}
  </button>
</div>
}