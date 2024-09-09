import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductsItem from './ProductsItem'

interface RelatedProductProps{
    category: string[],
    subCategory : string[]
}

const RelatedProduct:React.FC<RelatedProductProps> = ({category,subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related,setRelated] = useState<any>([])

    useEffect(()=>{
        if(products.length > 0 ){
            let productCopy = products.slice()

            productCopy = productCopy.filter((item:any)=>category === item.category)
            productCopy = productCopy.filter((item:any)=>subCategory === item.subCategory)

            setRelated(productCopy.slice(0,5))

        }
    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}></Title>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item:any,index:number)=>(
                <ProductsItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}></ProductsItem>
            ))}
        </div>
    </div>
  )
}

export default RelatedProduct