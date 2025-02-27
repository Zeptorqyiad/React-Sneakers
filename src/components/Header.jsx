import React from 'react'

const Header = () => {
   return (
      <header className="d-flex justify-between align-center p-40">
         <div className="d-flex align-center">
            <img
               width={40}
               height={40}
               src="/assets/image/logo.png"
               alt="LogoImage"
            />
            <div>
               <h3 className="text-uppercase">React Sneakers</h3>
               <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="d-flex">
            <li className="mr-30 cu-p">
               <img
                  width={18}
                  height={18}
                  src="/assets/image/cart.svg"
                  alt="CartSvg"
               />
               <span>1205 руб.</span>
            </li>
            <li>
               <img
                  width={18}
                  height={18}
                  src="/assets/image/user.svg"
                  alt="UserSvg"
               />
            </li>
         </ul>
      </header>
   )
}

export default Header
