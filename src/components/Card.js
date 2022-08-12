import React from 'react'
import './../styles/_card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';




const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    

    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
  
]
export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))


const Card = (movies) => {
  return (
    <div className="wrapper">
      <div className="card">
        <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>  Delete</button>
        <div className="card__body">
          <h2 className="card__title">{movies.title}</h2>
          <p className="card__description">{movies.category}</p>
          <button className='faUp'><FontAwesomeIcon icon={faThumbsUp}>{movies.likes}</FontAwesomeIcon>{movies.likes}</button>
          <button className='faDown'><FontAwesomeIcon icon={faThumbsDown}>{movies.dislikes}</FontAwesomeIcon>{movies.dislikes}</button>       
        </div>
      </div>
    </div>
    
  )
}
export default Card




