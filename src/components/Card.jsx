import React from 'react'

export default function Card() {
  return (
    <div>
    <div className="card mt-3 m-3" style={{"width":"18rem","maxHeight":"360px"}}>
      <img src="https://source.unsplash.com/random/?food,burger" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="container w-100 d-flex justify-content-center align-items-center">
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6),(e,i)=>{
              return (
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
          </select>

          <select className="m-2 h-100  bg-success rounded">
            <option key={1} value={"half"}>Half</option>
            <option key={2} value={"full"}>Full</option>
          </select>

          <div className="text-center">Total Price</div>
        </div>
      </div>
    </div>
  </div>
  )
}
