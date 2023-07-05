import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import styles from './Form.module.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AllGenres } from '../../redux/actions/actions';

const validate = (form) =>{
  let errors = {}
  if (!form.name) {
    errors.name = 'Insert a validate name'
  }
  if (!form.description) {
    errors.description = 'Insert a validate description'
  }
  if (!form.platforms) {
    errors.image = 'Insert a validate image'
  }
  if (!form.image) {
    errors.image = 'Insert a validate image'
  }
  if (!form.released) {
    errors.released = 'Insert a validate released'
  }
  if (!form.rating) {
    errors.rating = 'Insert a validate rating'
  }
  if (!form.genre) {
    errors.genres = 'Insert a validate genres'
  }
  return errors;
}

const Form = () => {

  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms:'',
    image: '',
    released: '',
    rating: '',
    genres: [],
  })

  // errores en el formularios
  const [errors, setErrors] = useState({
    name: true,
    description: true,
    platforms: true,
    image: true,
    released: true,
    rating: true,
    genres: true,
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/videogames',form)
      .then(res=>alert('Game created successfully'))
      .catch(err=>alert('Please fill in all the fields'));
  }

  
  const handlerInputChange= (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...form, 
      [e.target.name]: e.target.value,
    }))
  }
  
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)

  useEffect(()=>{
    dispatch(AllGenres())
  }, [dispatch])

  const handlerGenres = (event)=> {
    if (!form.genres.includes(event.target.value)) {
      setForm({
        ...form,
        genres: [...form.genres, event.target.value]
      })
      setErrors(validate({
        ...form, 
        genres: [...form.genres, event.target.value],
      }))
    } 
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <section>
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handlerInputChange}
          />
            {
              errors.name && (<span>{errors.name}</span>)
            }
        </section>

        <section>
          <label htmlFor="description">Description: </label>
          <input 
            type="text"
            name="description"
            onChange={handlerInputChange}
            value={form.description}
          />
            {
              errors.description && (<span>{errors.description}</span>)
            }
        </section>

        <section>
          <label htmlFor="platforms">Platforms: </label>
          <input 
            type="text"
            name="platforms"
            onChange={handlerInputChange}
            value={form.platforms}
          />
            {
              errors.platforms && (<span>{errors.platforms}</span>)
            }
        </section>

        <section>
          <label htmlFor="image">Image link: </label>
          <input 
            type="url"
            name="image"
            onChange={handlerInputChange}
            value={form.image}
          />
            {
              errors.image && (<span>{errors.image}</span>)
            }
        </section>
        
        <section>
          <label htmlFor="released">Released: </label>
          <input 
            type="date"
            name="released"
            onChange={handlerInputChange}
            value={form.released}
          />
            {
              errors.released && (<span>{errors.released}</span>)
            }
        </section>

        <section>
          <label htmlFor="rating">Rating: </label>
          <input 
            type="number"
            name="rating"
            onChange={handlerInputChange}
            value={form.rating}
          />
            {
              errors.rating && (<span>{errors.rating}</span>)
            }
        </section>

        <section>
          <label htmlFor="genres">Genres: </label>
          <select onChange={(e)=> handlerGenres(e)} defaultValue='default'>
            <option value="default" disabled >Select Genre</option>
            {
              genres?.map((genre, index) => (
                <option key={index} value={genre.name}>
                  {genre.name}
                </option>
              ))
            }
          errors.genres && (<span>{errors.genres}</span>)
          </select>
        </section>
        <button type="submit">Create Videogame</button>
      </form>
    </div>
  )
}

export default Form