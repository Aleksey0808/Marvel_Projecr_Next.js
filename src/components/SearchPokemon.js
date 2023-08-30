import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { RxMagnifyingGlass } from 'react-icons/rx';
import { MagnifyingGlass } from 'react-loader-spinner'
import { useState } from 'react'

const schema = yup.object().shape({
  query: yup.string().required('Search string is required'),
})

const SearchPokemon = () => {
  const [searchPokemon, setSearchPokemon] = useState('')
  const handleSubmit = async (query, { resetForm }) => {
    console.log(searchPokemon)
    console.log(query.query)

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${query.query}`,
    )
    const data = await response.json()
    setSearchPokemon(data.results)
    console.log(data)
    resetForm()
  }

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
          {/* <RxMagnifyingGlass />
          <Text>Search</Text> */}
          <MagnifyingGlass
            visible={true}
            height="45"
            width="45"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </button>
      </Form>
    </Formik>
  )
}

export default SearchPokemon
