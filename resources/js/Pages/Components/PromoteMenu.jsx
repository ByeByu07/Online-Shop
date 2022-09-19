export default function PromoteMenu(props){
  return <div className='px-5 py-5 flex-column flex-warp'>
  <div>
      <button className="btn btn-outline  mr-2">NEW</button>
      <button className="btn btn-outline mr-2">DISCOUNT</button>
      <button className="btn btn-outline ">BESTSELLER</button>
  </div>
  <div className='mt-5 flex gap-5'>
      <div className='shadowme1 mb-5 animate-pulse basis-1/3 '>
          <img src="/jumbotron/jumbotron.jpg" className='w-full'/>
          <p className='w-full'>halo</p>
      </div>
  </div>
</div>
}