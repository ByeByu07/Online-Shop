export default function Footer(props){
  return <div>
    {props.newsletter && <div className="md:flex bg-black justify-between items-center h-fit px-10 py-10">
        <section className="flex items-center justify-center">
          <article>
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/email-open.png"/>
          </article>
          <article className="ml-3">
            <h1 className="text-white">Newsletter</h1>
            <p className="text-white">Sign Up For Our Newsletter</p>
          </article>
        </section>
        <section>
          <article className="flex">
            <input type="text" className="flex-1" name="newsletter" placeholder="Your email address"/>
            <button type="submit" className="bg-orange-500 text-white p-2 flex-none">SUBSCRIBE</button>
          </article>
          <p className="text-white mt-4">You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
        </section>
      </div>}
    <div className="bg-gray-900 grid grid-cols-4 p-10">
      <section className="pr-5">
        <div className="flex gap-3">
          <article className="basis-1/6">
            <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/order-delivered.png" width={30}/>
          </article>
          <article className="basis-5/6">
            <h2 className="text-white text-xl">ADDRESS</h2>
            <p className="text-slate-500 hover:text-orange-400">Jl. Imammu masih disini Kav. 9-10, Malang Downtown City,4th floor,Malang 10212</p>
          </article>
        </div>
        <div className="flex gap-3 mt-8 border-t pt-6">
          <article className="basis-1/6">
            <img src="https://img.icons8.com/windows/64/FFFFFF/phone-disconnected--v1.png" width={30}/>
          </article>
          <article className="basis-5/6">
            <h2 className="text-white text-xl">CALL NOW</h2>
            <p className="text-slate-500 hover:text-orange-400">+8823132323</p>
          </article>
        </div>
        <div className="flex gap-3 mt-8 border-t pt-6">
          <article className="basis-1/6">
            <img src="https://img.icons8.com/material-sharp/48/FFFFFF/new-post.png" width={30}/>
          </article>
          <article className="basis-5/6">
            <h2 className="text-white text-xl">EMAIL ID</h2>
            <p className="text-slate-500 hover:text-orange-400">cs.store@siolshop.com</p>
          </article>
        </div>
      </section>
      <section className="border-l pl-10 pt-3">
        <header className="text-white mb-5 text-xl">
          <h1>YOUR ACCOUNT</h1>
        </header>
        <ul className="text-slate-500"> 
          <li className="hover:text-orange-400">Personal info</li>
          <li className="hover:text-orange-400">Orders</li>
          <li className="hover:text-orange-400">Credit slips</li>
          <li className="hover:text-orange-400">Addresses</li>
          <li className="hover:text-orange-400">Vouchers</li>
          <li className="hover:text-orange-400">My wishlists</li>
        </ul>
      </section>
      <section className="border-l pl-10 pt-3">
        <header className="text-white mb-5 text-xl">
          <h1>INFORMATION</h1>
        </header>
        <ul className="text-slate-500"> 
          <li className="hover:text-orange-400">Terms and Condition</li>
          <li className="hover:text-orange-400">New Products</li>
          <li className="hover:text-orange-400">Best seller</li>
          <li className="hover:text-orange-400">Contact us</li>
        </ul>
      </section>
      <section className="border-l"></section>
    </div>
    <footer className="py-3 text-center bg-slate-100">
      <h2>©2022 - SiOlShop by M.Baharuddin Yusuf with ❤</h2>
    </footer>
  </div>
}