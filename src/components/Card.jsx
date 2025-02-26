import React from 'react'

const Card = () => {
   return (
      <div className="card">
         <div className="favorite">
            <img src="/assets/image/unliked.svg" alt="HeartUnlinked" />
         </div>
         <img
            width={133}
            height={112}
            src="/assets/sneakers/1.jpg"
            alt="Sneakers"
         />
         <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>12 999 руб.</b>
            </div>
            <button className="button">
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
