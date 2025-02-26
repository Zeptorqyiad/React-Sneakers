import React from 'react'

import { Card, Header, Drawer } from './components/index'

const arr = [
   {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: '12999',
      imageUrl: '/assets/sneakers/1.jpg',
   },
   {
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: '12999',
      imageUrl: '/assets/sneakers/2.jpg',
   },
   {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: '8499',
      imageUrl: '/assets/sneakers/3.jpg',
   },
   {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: '8999',
      imageUrl: '/assets/sneakers/4.jpg',
   },
   {
      title: 'Мужские Кроссовки Under Armour Curry 8',
      price: '15199',
      imageUrl: '/assets/sneakers/5.jpg',
   },
   {
      title: 'Мужские Кроссовки Nike Kyrie 7',
      price: '11299',
      imageUrl: '/assets/sneakers/6.jpg',
   },
   {
      title: 'Мужские Кроссовки Jordan Air Jordan 11',
      price: '10799',
      imageUrl: '/assets/sneakers/7.jpg',
   },
   {
      title: 'Мужские Кроссовки Nike LeBron XVIII',
      price: '16499',
      imageUrl: '/assets/sneakers/8.jpg',
   },
]

const App = () => {
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
               {arr.map((obj, index) => (
                  <Card
                     key={`${obj}_${index}`}
                     {...obj}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default App
