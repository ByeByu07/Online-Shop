import { Link } from "@inertiajs/inertia-react"


export default function MiniMenu(props){
  return <div className="bg-black sm-min:hidden">
    <ul className="flex flex-row justify-center gap-5 text-white items-center h-14">
      {props.item.map((item,i)=>{
        return <li key={i} className="hover:text-orange-400">
          <Link href={item.url}>{item.title}</Link>
        </li>
      })}
    </ul>
  </div>
}