import React, { useEffect, useState } from 'react'
import styles from './Form.module.css'
import { useDispatch } from 'react-redux';

const Form = () => {

  const [form, setForm] = useState({
    name: '',
    image: {},
    description: '',
    released: '',
    rating: '',
    genres: [],
  })

  // errores en el formularios
  const [errors, setErrors] = useState({
    name: true,
    image: true,
    description: true,
    released: true,
    rating: true,
    genres: true,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(action(form))
  }

  const clickHandler= (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setErrors({

    })
  }, [form])

  return (
    <div className={styles.formContainer}>
      <form>

        <label htmlFor="name">Name: </label>
        <input type="text"
          name="name"
          
        />
        <label htmlFor="image">Image: </label>
        <input type=""
          name="image"
          
        />
        <label htmlFor="description">Description: </label>
        <input type="text"
          name="description"
          
        />
        <label htmlFor="released">Released: </label>
        <input type="date"
          name="released"
          
        />
        <label htmlFor="rating">Rating: </label>
        <input type="number"
          name="rating"
          
        />

        <button type="submit">Create </button>

      </form>
    </div>
  )
}

export default Form