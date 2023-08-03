import React, { useEffect, useRef, useState } from 'react'
import{useCart,useDispatch} from './ContextReducer'

export default function Card(props) {
  let dispatch= useDispatch()
  let data = useCart()
  const priceRef = useRef()
  let options =  props.options;
  let priceOptions = Object.keys(options);
  const [qty,setQty] = useState('1')
  const[size ,setSize]=useState('')

  const handletoCart = async()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size,img:props.foodItem.img})
    console.log(data);
  }

  let finalPrice = qty * parseInt(options[size])
  useEffect(()=>{
setSize(priceRef.current.value)
  },[])
  return (
    <div>
    <div className="card mt-3 m-3" style={{"width":"18rem","maxHeight":"380px"}}>
      <img src={props.foodItem.img} className="card-img-top img-fluid" alt="..." style={{"height":"160px","objectFit":"fill"}} />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>
        <p className="card-text" style={{"fontSize":"8px"}}>
          {props.foodItem.description}
        </p>
        <div className="container w-100 d-flex justify-content-center align-items-center">
          <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(6),(e,i)=>{
              return (
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
          </select>

          <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>{
            priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })
          }
          </select>

          <div className="text-center">₹{finalPrice}/-</div>

        </div>
        <hr></hr>
        <button className='btn btn-success justify-center ms-2' onClick={handletoCart}>Add to Cart</button>
      </div>
    </div>
  </div>
  )
}
