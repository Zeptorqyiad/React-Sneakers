import React from 'react'
import axios from 'axios'

import { Card, Header, Drawer } from './components/index'

const App = () => {
   const [items, setItems] = React.useState([])

   React.useEffect(() => {
      try {
         axios
            .get(`https://67c0b0e9b9d02a9f224aaa4e.mockapi.io/items`)
            .then((response) => {
               setItems(response.data)
            })
      } catch (error) {
         return console.log(error)
      }
   }, [])

   return (
      <div className="wrapper clear">
         <Drawer />
         <Header />
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex align-center">
                  <img src="/assets/image/search.svg" alt="SearchSvg" />
                  <input type="text" placeholder="Поиск..." />
               </div>
            </div>
            <div className="d-flex" style={{ flexWrap: 'wrap' }}>
               {items.map((obj, index) => (
                  <Card
                     key={`${obj}_${index}`}
                     onClickFavorite={() => console.log('Добавили в закладки')}
                     onClickPlus={() => console.log('Нажали на плюс')}
                     {...obj}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default App
