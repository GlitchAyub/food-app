import React from 'react'

export default function Card(props) {
  let options =  props.options;
  let priceOptions = Object.keys(options);

  return (
    <div>
    <div className="card mt-3 m-3" style={{"width":"18rem","maxHeight":"360px"}}>
      <img src={props.imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.foodname}</h5>
        <p className="card-text" style={{"fontSize":"8px"}}>
          {props.desc}
        </p>
        <div className="container w-100 d-flex justify-content-center align-items-center">
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6),(e,i)=>{
              return (
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
          </select>

          <select className="m-2 h-100  bg-success rounded">{
            priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })
          }
          </select>

          <div className="text-center">Total Price</div>
        </div>
      </div>
    </div>
  </div>
  )
}
