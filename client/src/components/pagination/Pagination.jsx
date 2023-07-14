import React from 'react'
import style from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions/actions';

const Pagination = ({gamesPerPage, allVideogames}) => {

  const numPage = useSelector((state) => state.numPage);

  const pages = [];
  // redondea el numero de pagina para arriba totales
  const totalPages = Math.ceil(allVideogames/ gamesPerPage);
  
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  const dispatch = useDispatch()

  const paginate = (pageNumber) => {
    dispatch(setPage(pageNumber));
  }

  return (
    <nav className={style.paginationContainer}>
      {
        pages && pages.map(page => (
          <button 
            key={page} 
            onClick={() => paginate(page)}
            className={`${style.pageButton} ${page === numPage ? style.active : ''}`}
          >{page}
          </button>
        ))
      }
    </nav>
  )
};

export default Pagination;