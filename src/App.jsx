import React from 'react'
import axios from 'axios'

import { Card, Header, Drawer } from './components/index'

const App = () => {
   const [items, setItems] = React.useState([])
   const [cartItems, setCartItems] = React.useState([])
   const [searchValue, setSearchValue] = React.useState('')
   const [cardOpened, setCardOpened] = React.useState(false)

   React.useEffect(() => {
      try {
         axios
            .get(`https://67c0b0e9b9d02a9f224aaa4e.mockapi.io/items`)
            .then((res) => {
               setItems(res.data)
            })
      } catch (error) {
         return console.log(error)
      }
   }, [])

   const onAddToCart = (obj) => {
      setCartItems((prevState) => [...prevState, obj])
   }

   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
   }

   return (
      <div className="wrapper clear">
         {cardOpened && (
            <Drawer items={cartItems} onClose={() => setCardOpened(false)} />
         )}
         <Header onClickCart={() => setCardOpened(true)} />
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex align-center">
                  <img src="/assets/image/search.svg" alt="SearchSvg" />
                  {searchValue && (
                     <img
                        onClick={() => setSearchValue('')}
                        className="clearInput cu-p"
                        src="/assets/image/btn-remove.svg"
                        alt="Clear"
                     />
                  )}
                  <input
                     value={searchValue}
                     onChange={onChangeSearchInput}
                     type="text"
                     placeholder="Поиск..."
                  />
               </div>
            </div>
            <div className="d-flex" style={{ flexWrap: 'wrap' }}>
               {items
                  .filter((item) =>
                     item.title
                        .toLowerCase()
                        .trim()
                        .includes(searchValue.toLocaleLowerCase().trim())
                  )
                  .map((item, index) => (
                     <Card
                        key={`${item}_${index}`}
                        onFavorite={() => console.log('Добавили в закладки')}
                        onPlus={onAddToCart}
                        {...item}
                     />
                  ))}
            </div>
         </div>
      </div>
   )
}

export default App
