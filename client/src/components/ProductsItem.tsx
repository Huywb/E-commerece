import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'


interface ProductsItemProps{
    id:string,
    image:string[],
    name:string,
    price:number
}
const ProductsItem:React.FC<ProductsItemProps> = ({id,name,image,price}) => {
  const {currency} = useContext(ShopContext)


  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
          <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <div className='flex flex-col justify-between h-[25%]'>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency} {price}</p>
      </div>
    </Link>
  )
}

export default ProductsItem