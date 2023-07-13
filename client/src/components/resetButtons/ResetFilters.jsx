import React from 'react'
//import { useDispatch } from 'react-redux';
//import { resetGenres, resetOrder } from '../../redux/actions/actions';
import SecondaryButton from '../buttons/secondaryButton/SecondaryButton'


const ResetFilters = () => {
  //const dispatch = useDispatch()

  const handlerButton = ()=> {
    setTimeout(function() {
      window.location.reload()
    }, 500)
    
  }

  return (
    <div>
      <SecondaryButton onClick={handlerButton}>
        Reset filters
      </SecondaryButton>
    </div>
  )
}

export default ResetFilters