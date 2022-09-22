export default function PromoteMenu(props){
  return <div className='px-5 py-5 flex-column flex-warp'>
  <div>
      <button className="btn btn-outline  mr-2 tooltip" data-tip="Click to see all new products">NEW</button>
      <button className="btn btn-outline mr-2">DISCOUNT</button>
      <button className="btn btn-outline ">BESTSELLER</button>
  </div>
  <div className='mt-5 flex flex-wrap'>
      <div className='shadowme1 mb-5 animate-pulse basis-1/3 p-3'>
          <img src="/jumbotron/jumbotron.jpg" className='w-full'/>
      </div>
      <div className='shadowme1 mb-5 animate-pulse basis-1/3 p-3'>
          <img src="/jumbotron/jumbotron.jpg" className='w-full'/>
      </div>
      <div className='shadowme1 mb-5 animate-pulse basis-1/3 p-3'>
          <img src="/jumbotron/jumbotron.jpg" className='w-full'/>
      </div>
  </div>
</div>
}