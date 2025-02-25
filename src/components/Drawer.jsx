import React from 'react'

const Drawer = () => {
   return (
      <div className="overlay" style={{ display: 'none' }}>
         <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">
               Корзина
               <img
                  className="removeBtn cu-p"
                  src="/assets/image/btn-remove.svg"
                  alt="Remove"
               />
            </h2>
            <div className="items">
               <div className="cartItem d-flex align-center mb-20">
                  <div
                     style={{
                        backgroundImage: 'url(/assets/sneakers/1.jpg)',
                     }}
                     className="cartItemImg"
                  ></div>
                  <div className="mr-20">
                     <p className="mb-5">
                        Мужские Кроссовки Nike Blazer Mid Suede
                     </p>
                     <b>12 999 руб.</b>
                  </div>
                  <img
                     className="removeBtn"
                     src="/assets/image/btn-remove.svg"
                     alt="Remove"
                  />
               </div>
               <div className="cartItem d-flex align-center mb-20">
                  <div
                     style={{
                        backgroundImage: 'url(/assets/sneakers/2.jpg)',
                     }}
                     className="cartItemImg"
                  ></div>
                  <div className="mr-20">
                     <p className="mb-5">
                        Мужские Кроссовки Nike Blazer Mid Suede
                     </p>
                     <b>12 999 руб.</b>
                  </div>
                  <img
                     className="removeBtn"
                     src="/assets/image/btn-remove.svg"
                     alt="Remove"
                  />
               </div>
            </div>
            <div className="cartTotalBlock">
               <ul>
                  <li>
                     <span>Итого:</span>
                     <div></div>
                     <b>21 498 руб.</b>
                  </li>
                  <li>
                     <span>Налог 5%:</span>
                     <div></div>
                     <b>1074 руб.</b>
                  </li>
               </ul>
               <button className="greenButton">
                  Оформить заказ
                  <img src="/assets/image/arrow.svg" alt="arrow" />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Drawer
