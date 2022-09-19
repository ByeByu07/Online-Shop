export default function SearchBar(props){
  return <div className="flex w-full gap-8 mx-4">
    {props.item.map((item,i)=>{
      return <p key={i}>{item}</p>   
    })}
    {props.search && <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
    }
  </div>
}