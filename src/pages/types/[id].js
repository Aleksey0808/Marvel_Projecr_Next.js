import Head from 'next/head'
import TypesInfo from '@/components/TypesInfo'

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { type: data },
  }
}

const Type = ({ type }) => {
  // console.log(type.pokemon)
  return (
    <>
      <Head>
        <title>Type</title>
      </Head>
      <TypesInfo type={type.pokemon} />
    </>
  )
}

export default Type
