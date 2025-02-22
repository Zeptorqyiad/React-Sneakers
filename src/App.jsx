// import HeartLiked from './assets/image/liked.svg'

const App = () => {
   return (
      <div className="wrapper clear">
         <div className="overlay">
            <div className="drawerBlock"></div>
         </div>
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
               <li className="mr-30">
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
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex align-center">
                  <img src="/assets/image/search.svg" alt="SearchSvg" />
                  <input type="text" placeholder="Поиск..." />
               </div>
            </div>
            <div className="d-flex">
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
               <div className="card">
                  <div className="favorite">
                     <img src="/assets/image/unliked.svg" alt="HeartUnlinked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/assets/sneakers/2.jpg"
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
                           src="/assets/image/btn-plus.svg"
                           alt="PlusImage"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="favorite">
                     <img src="/assets/image/unliked.svg" alt="HeartUnlinked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/assets/sneakers/3.jpg"
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
                           src="/assets/image/btn-plus.svg"
                           alt="PlusImage"
                        />
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="favorite">
                     <img src="/assets/image/unliked.svg" alt="HeartUnlinked" />
                  </div>
                  <img
                     width={133}
                     height={112}
                     src="/assets/sneakers/4.jpg"
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
                           src="/assets/image/btn-plus.svg"
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
