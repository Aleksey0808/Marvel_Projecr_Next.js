import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { toast } from 'react-toastify';
import styles from "../styles/SearchPokemon.module.scss";
// import 'react-toastify/dist/ReactToastify.css'

const schema = yup.object().shape({
  query: yup.string().required('Search string is required'),
})

const SearchPokemon = ({ onSubmit }) => {
  const handleSubmit = async ({query}, {resetForm}) => {
    try {
      if (!query.trim()) {
        toast.error('Enter a request!', { autoClose: 1500 })
      } else {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${query}`,
        )
        const data = await response.json()
        onSubmit(data)
        resetForm()
        toast.success('Here your pokemon', { autoClose: 1500 })
      }
    } catch (e) {
      console.log(e)
      toast.error('Enter a request!', { autoClose: 1500 })
    }
  }

  const initialValues = {
    query: '',
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Search Your Pokemon</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={styles.form}>
          <label >
            <Field 
            type="text" 
            name="query" 
            placeholder="Enter Pokemon Name"
            className={styles.input} />
            <ErrorMessage name="query" component="div" className={styles.error} />
          </label>

          <button type="submit" className={styles.btn}>
            <RxMagnifyingGlass />
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchPokemon
