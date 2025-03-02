import React from 'react'

import styles from './Card.module.scss'

const Card = ({ title, price, imageUrl, onFavorite, onPlus }) => {
   const [isAdded, setIsAdded] = React.useState(false)
   const [isFavorite, setIsFavorite] = React.useState(false)

   const onClickPlus = () => {
      onPlus({ title, price, imageUrl })
      setIsAdded(!isAdded)
   }

   const onClickFavorite = () => {
      onFavorite()
      setIsFavorite(!isFavorite)
   }

   return (
      <div className={styles.card}>
         <div className={styles.favorite} onClick={onClickFavorite}>
            <img
               src={
                  isFavorite
                     ? '/assets/image/liked.svg'
                     : '/assets/image/unliked.svg'
               }
               alt="HeartUnlinked"
            />
         </div>
         <img width={133} height={112} src={imageUrl} alt="Sneakers" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <strong>{price} руб.</strong>
            </div>
            <img
               className={styles.plus}
               onClick={onClickPlus}
               src={
                  isAdded
                     ? '/assets/image/btn-checked.svg'
                     : '/assets/image/btn-plus.svg'
               }
               alt="PlusImage"
            />
         </div>
      </div>
   )
}

export default Card
