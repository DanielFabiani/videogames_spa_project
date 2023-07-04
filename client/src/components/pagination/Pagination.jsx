import React from 'react'

const Pagination = (currentPage, gamesPerPage, allVideogames, paginate) => {

  const pages = [1,2];
  // redondea el numero de pagina para arriba totales
  const totalPages = Math.ceil(allVideogames/ gamesPerPage);
  
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  console.log(pages);

  return (
    <nav>
      {
        pages && pages.map(page => (
          <button key={page} onClick={() => paginate(page)}>{page}
          </button>
        ))
      }
    </nav>
  )
};

export default Pagination;