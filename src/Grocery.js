import React from 'react'
import classnames from 'classnames'
import './Grocery.css'

const Grocery = ({ name, quatity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred }, { purchased })}>
      <h3>{name}</h3>
    </article>
  )
}

export default Grocery
