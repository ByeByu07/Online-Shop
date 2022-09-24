import PromoteMenuItem from "./PromoteMenuItem"
import { PromoteMenu1 as Menu1 } from "@/data/DataPromote"

export default function PromoteMenu(props){
  return <div className='px-5 py-5 flex-column flex-warp'>
  <div>
      <button className="btn btn-outline  mr-2 tooltip animate-pulse" data-tip="Click to see all new products">NEW</button>
      <button className="btn btn-outline mr-2">DISCOUNT</button>
      <button className="btn btn-outline ">BESTSELLER</button>
  </div>
  <div className='mt-5 flex flex-wrap gap-3' id="menu1">
    {Menu1.length != 0 ? Menu1.map((menu,i)=>{
        return <PromoteMenuItem key={i} menu={menu}/>
    }) : <p className="shadowme1 p-5 w-full">No Products in current tab at this time</p>}
  </div>
</div>
}