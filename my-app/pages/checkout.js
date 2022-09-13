import React, { useEffect ,useState} from "react"

const checkout = ({cart}) => {
  
const [subtotal,setsubtotal] =useState(0)
const [form,setform] =useState({name:"",email:"",Address:"",phone:""})

  useEffect(() => {
    // console.log(cart)
    let myTotal=0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal+=cart[index][1];
    }
    setsubtotal(myTotal)


  },[])

  const handelChange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
    console.log()
  }


  return (
    
    <>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Checkout</h1>
          <h2 className='text-2xl font-medium text-black'>Cart</h2>
          <div className="cart">{cart.length ? `Your cart details are as follows:` : `Your cart is empty!`}</div>
          <ul className='list-decimal px-8 '>
        {cart.map((item) => {
          return <li key={item.id}>
          Product {item[0]} with a price of ₹{item[1]} 
         </li>
        }, [])}
        </ul>
        <div className="font-bold text-black">
            Subtotal: {subtotal}
          </div>

        </div>
        <div className="lg:w-full md:w-2/3 ">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={handelChange} value={form.name}type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input onChange={handelChange} value={form.email}type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                <input onChange={handelChange} value={form.phone}type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="Addess" className="leading-7 text-sm text-gray-600">Address</label>
                <textarea onChange={handelChange} value={form.Address}type="Address" id="Address" name="Address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">pay Now</button>
            </div>

          </div>
        </div>
      </div>
    </section>      
    </>
  )
}

export default checkout
