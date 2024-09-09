import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import RelatedProduct from "../components/RelatedProduct"

const Product = () => {

  const {productId} = useParams()
  const {products,currency,addToCart} = useContext(ShopContext)
  const [productData,setProductData] = useState<any>(null)
  const [image,setImage] = useState<any>([])
  const [size,setSize] = useState('')
  const fetchProduct = async()=>{
    let data = products.find((item:any)=>item._id === productId)
    setProductData(data)
    setImage(data.image[0])
  }
  useEffect(()=>{
    fetchProduct()
  },[products,productId])
  return productData ?  (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*Product image*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {
                productData.image.map((item:any,index:number)=>(
                  <img key={index} onClick={()=>setImage(item)} src={item} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
                ))
              }
          </div>

          <div className="w-full sm:w-[80%]">
              <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>


        {/*Product info*/}
        <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2 ">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img className="w-3 " src={assets.star_icon} alt="" />
              <img className="w-3 " src={assets.star_icon} alt="" />
              <img className="w-3 " src={assets.star_icon} alt="" />
              <img className="w-3 " src={assets.star_icon} alt="" />
              <img className="w-3 " src={assets.star_dull_icon} alt="" />
              <p className="pl-2">{122}</p>
            </div>
              <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
              <p className="mt-5 text-gray-400 md:w-4/5">{productData.description}</p>
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item:any,index:number)=>(
                    <button onClick={()=>setSize(item)} className={`${item === size ? 'border-orange-500' : ''} border py-2 px-4 bg-gray-100`} key={index}>{item}</button>
                  ))}
                </div>
              </div>

              <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700 ">ADD TO CART</button>
              <hr  className="mt-8 sm:w-4/5"/>
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                  <p>100% Original product</p>
                  <p>Cash on delivery is available on this product</p>
                  <p>Easy return and exchange policy with 7 days</p>
              </div>
        </div>
      </div>

       {/*Description and review*/}

      <div className="mt-20">
         <div className="flex ">
            <b className="border px-5 py-3 text-sm">Description</b>
            <b className="border px-5 py-3 text-sm">Reviews (122)</b>
         </div>
         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
         
         </div>
      </div>

    {/*Description and review*/}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}></RelatedProduct>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product