import React from 'react'

const Card = ({ title, price, imageUrl }) => {
   const onCLickButton = () => {
      alert(price)
   }

   return (
      <div className="card mb-20">
         <div className="favorite">
            <img src="/assets/image/unliked.svg" alt="HeartUnlinked" />
         </div>
         <img width={133} height={112} src={imageUrl} alt="Sneakers" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <button onClick={onCLickButton} className="button">
               <img
                  width={11}
                  height={11}
                  src="/assets/image/plus.svg"
                  alt="PlusImage"
               />
            </button>
         </div>
      </div>
   )
}

export default Card
