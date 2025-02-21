import LogoImage from './assets/image/logo.png'
import CartSvg from './assets/image/cart.svg'
import UserSvg from './assets/image/user.svg'
import PlusImage from './assets/image/plus.svg'
import Sneakers1 from './assets/sneakers/1.jpg'
import Sneakers2 from './assets/sneakers/2.jpg'
import Sneakers3 from './assets/sneakers/3.jpg'
import Sneakers4 from './assets/sneakers/4.jpg'

const App = () => {
   return (
      <div className="wrapper clear">
         <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
               <img width={40} height={40} src={LogoImage} alt="LogoImage" />
               <div>
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовок</p>
               </div>
            </div>
            <ul className="d-flex">
               <li className="mr-30">
                  <img width={18} height={18} src={CartSvg} alt="CartSvg" />
                  <span>1205 руб.</span>
               </li>
               <li>
                  <img width={18} height={18} src={UserSvg} alt="UserSvg" />
               </li>
            </ul>
         </header>
         <div className="content p-40">
            <h1 className="mb-40">Все кроссовки</h1>
            <div className="d-flex">
               <div className="card">
                  <img
                     width={133}
                     height={112}
                     src={Sneakers1}
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
                           src={PlusImage}
                           alt="PlusImage"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <img
                     width={133}
                     height={112}
                     src={Sneakers2}
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
                           src={PlusImage}
                           alt="PlusImage"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <img
                     width={133}
                     height={112}
                     src={Sneakers3}
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
                           src={PlusImage}
                           alt="PlusImage"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <img
                     width={133}
                     height={112}
                     src={Sneakers4}
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
                           src={PlusImage}
                           alt="PlusImage"
                        />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
