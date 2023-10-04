import React from 'react'

const Cards = ({heading,description,imgSrc}) => {
  return (
      <div
              class="card mb-3 w-75 "
              id="mainCard"
              style={{borderRadius:"2vw",height:"20vw",background:"#17245b"}}
              
            >
              <div  class=" no-gutters cardcol ">
            
                  <div class="card-body">
                    <div className='rounded-full bg-white flex justify-center items-center my-8' style={{width:"50px",height:"50px"}}>
                    <img style={{width:"2vw"}} src={imgSrc} alt='cards'></img>
                    </div>
                    <h4 className='font-bold text-white'>{heading}</h4>
                    <p className='text-white'>{description}</p>
                  </div>
                
              </div>
            </div>
    
  )
}

export default Cards
