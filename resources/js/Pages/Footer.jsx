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
      <section>
        <img src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/order-delivered.png"/>
      </section>
      <section className="border-l">b</section>
      <section className="border-l">c</section>
      <section className="border-l">d</section>
    </div>
    <footer className="py-3 text-center bg-slate-100">
      <h2>©2022 - SiOlShop by M.Baharuddin Yusuf with ❤</h2>
    </footer>
  </div>
}