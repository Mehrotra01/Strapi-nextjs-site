import React from 'react'
import Image from 'next/image'


const products = (props) => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
      <div className="flex flex-wrap w-full md:mb-20 flex-col items-center text-center">
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">ECity-Kart - Product List</h1>
<div className="h-1 w-40 bg-indigo-500 rounded"></div>
<p className="lg:w-1/2 w-full leading-relaxed mt-3 text-gray-500">Shop owner -{props.name}</p>
</div> 
    <div className="flex flex-wrap -m-4">
        {props.products.data.map((item)=> {
            return(
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={"/uploads/"+item.attributes.image.data.attributes.name} alt="blog" width={500} height={500}/>
		  {/* {console.log(item.attributes.image.data.attributes.formats.small.url)} */}
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.attributes.category}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.attributes.Title}</h1>
            <button class={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none "+ ` bg-${item.attributes.colors}-800`}></button>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>views
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>commentss
              </span>
            </div>
          </div>
        </div>
      </div>
      )})}
    </div>
  </div>
</section>
  )
}
export async function getServerSideProps(context) {
  let headers={Authorization:"bearer 9eda00b7313fc67ff0af3d8cab93166f4a7fb0c91d2af66ccad8d3b216f3d93b84c2827bbd3e7a65ed08a0843983b8a2ac88b53dd553a40dc11be82e273dd684cf2fec31fc2e8ddeb4aafa87f7e4f9e0af23d05861e397eca4189c69cee24d7ba905515f6640d8f14db326ceb724e9d032764456ccd2171f1bd7935235415047"}
  let getProApi= await fetch("http://localhost:1337/api/products?populate=*",{header:headers});
  let getProducts = await getProApi.json();
//   console.log(getProducts);
  return {
    props: {products:getProducts}, // will be passed to the page component as props
  }
}

export default products
