import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const {products,currency,cartItem,updateQuatity} = useContext(ShopContext)
  const [cartData,setCartData] = useState<any>([])
  const navigate = useNavigate()

  useEffect(()=>{
    const data = structuredClone(cartItem)
    const tempData = []

    for(const items in data){
      for(const item in data[items]){
        if(data[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quatity: data[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItem])
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"}></Title>
      </div>

      <div>
        {cartData.map((item:any,index:number)=>{
          const productData = products.find((product:any)=>product._id === item._id)

          return (
            <div key={index} className="py-4  bordet-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />

                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                      <p className="">{currency} {productData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuatity(item._id,item.size,+e.target.value)} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quatity} name="" id="" />
              <img onClick={()=>updateQuatity(item._id,item.size,0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
            
            </div>
          )
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal></CartTotal> 
          <div className="w-full text-end">
              <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm  my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart