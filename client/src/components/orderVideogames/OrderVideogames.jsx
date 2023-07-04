/* import { useEffect, useState } from 'react';
import React from 'react';
import styles from './OrderVideogames.module.css';
import { useDispatch } from 'react-redux';
import { getVideogames, orderVideogamesAscDesc,  } from '../../redux/actions/actions';


const OrderVideogames = () => {

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  useEffect(()=> {
    dispatch(getVideogames())
  }, [dispatch])

  useEffect(()=> {
    dispatch(orderVideogamesAscDesc())
  }, [dispatch])


  const handleOrderAscDesc = (e) => {
    e.preventDefault();
    dispatch(orderVideogamesAscDesc(e.target.value))
    setAux(!aux);
  }
  
  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderAscDesc}>

        <select onChange={(e)=> handleOrderAscDesc(e)}>
          <option value="default">Select by order</option>
          <option value="asc" >Ascendent</option>
          <option value="desc">Descendent</option>
        </select>

      </div>
    </div>
  )
};

export default OrderVideogames;
 */