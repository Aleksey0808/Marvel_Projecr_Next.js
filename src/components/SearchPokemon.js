import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { RxMagnifyingGlass } from 'react-icons/rx';
import { MagnifyingGlass } from 'react-loader-spinner'
import { useState } from 'react'

const schema = yup.object().shape({
  query: yup.string().required('Search string is required'),
})

const SearchPokemon = ({ onSubmit }) => {
  // const [pokemon, setPokemon] = useState()

  const handleSubmit = async ({ resetForm, query }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    const data = await response.json()
    // setPokemon(data)
    onSubmit(data);
    resetForm()
  }
  // console.log(pokemon)
  

  const initialValues = {
    query: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          <Field type="text" name="query" />
          <ErrorMessage name="query" component="div" />
        </label>

        <button type="submit">
          <RxMagnifyingGlass />
          {/* <p>Search</p> */}
          {/* <MagnifyingGlass
            visible={true}
            height="45"
            width="45"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          /> */}
        </button>
      </Form>
    </Formik>
  )
}

export default SearchPokemon
