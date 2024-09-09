import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency,delivery_fee,getAmount} = useContext(ShopContext)
    const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchAmount = async () => {
      const total = await getAmount();
      setAmount(total);
    };

    fetchAmount();
  }, [getAmount]); // Dependency to re-run effect when getAmount function changes

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"CART"} text2={"TOTALS"}></Title>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {amount}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shiping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between font-bold'>
                <p>Total</p>
                <p>{currency} {amount === 0 ? 0 : Number(amount? amount+delivery_fee : 0)}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal