import React, { useEffect, useState } from 'react';
import '../paypal/paypal.css';
import axios from 'axios';
import razorpay from '../../image/razorpay.svg'
// import { totalAmount } from '../../card/Property';

const Razorpay = () => {
  const key_secret = 'rzp_test_xdf7PW38e9ILAi' //from dashboard
  const [orderid, setOrderId] = useState(null);
  const [loading2, setLoading2] = useState(false);

  const data ={
    amount: 1000,
    name: 'Heemaang Saxena',
    profile_name: 'Heemaang Saxena',
    email: 'heemaang2000@gmail.com',
    product: 'The StayCationer',
    number: '7501194248',
    address: 'Durgapur Shivaji A-Zone',
    callback_url: "http://localhost:5000/api/payment-callback",
    cancel: "http://localhost:5000/api/payment-cancel"
  }

  const getOrderId = ()=>{
    setLoading2(true)
    axios.post('api/orders', {...data})
    .then(res => {  
      setTimeout(() => {
        setOrderId(res.data)
        setLoading2(false)
      }, 1500);
    })
    .catch(error => {
      setLoading2(false)
      console.error(error);
    });   
  }

  useEffect(()=>{
    getOrderId();
    // eslint-disable-next-line
  }, [])
  return (
    <>
    <div className='main'>
      <img width={300} src={razorpay} alt="" />
      <div className='card px-5 py-4 mt-5'>
        <form className=''>
          <div className='col-12 '>
            <p>Name: {data.profile_name}</p>
          </div>
          <div className='col-12 '>
            <p>Email: {data.email}</p>
          </div>
          <div className='col-12 '>
            <p>Product: {data.product}</p>
          </div>
          <div className='col-12 '>
            <p>Amount: {data.amount}Rs</p>
          </div>

            <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
                <input type="hidden" name="key_id" value={key_secret}/>
                <input type="hidden" name="amount" value={data.amount} />
                <input type="hidden" name="order_id" value={orderid}/>
                <input type="hidden" name="name" value={data.name}/>
                <input type="hidden" name="description" value={data.product}/>
                <input type="hidden" name="prefill[name]" value={data.profile_name}/>
                <input type="hidden" name="prefill[contact]" value={data.number}/>
                <input type="hidden" name="prefill[email]" value={data.email}/>
                <input type="hidden" name="notes[shipping address]" value={data.address}/>
                <input type="hidden" name="callback_url" value={data.callback_url}/>
                <input type="hidden" name="cancel_url" value={data.cancel_url}/>

                <hr />
                <div className='text-center'>
                  {loading2 && <p className='m-0 my-3 text-danger'>generating order_id...</p>}
                </div>
                <div className='text-center'>
                  {orderid && <p className='m-0 my-3 text-success'>order id generated successfully!</p>}
                  {orderid && <p className='m-0'>{orderid}</p>}
                </div>
                {!loading2? <div className='col-12 center'>
                    <button disabled={!orderid} className='w-100' type="submit">Pay Now</button>
                </div>
                :
                <div className='col-12 center'>
                    <button className='w-100 text-center btn' type="submit">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Wait...</span>
                    </div>
                    </button>
                </div>
                }
                
            </form>
        </form>
      </div>
    </div>
    </>
  )
}

export default Razorpay
