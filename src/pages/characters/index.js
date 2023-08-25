import Head from "next/head";
import Link from "next/link";
import { getAllCharacters } from "@/services/services";

export const getStaticProps = async () => {
      const response = await getAllCharacters();
      console.log(response);
      if (!response) {
        return {
          notFound: true,
        }
      }
      
      return {
        props: {characters: response},
      }
}

const Contacts = ({characters}) => {
 
  return (
    <>
   <Head>
      <title>Characters</title>
    </Head>
  <ul>
    {characters && characters.map(({id, name}) => (
      <li key={id}>
        {name}
      </li>
    ))}
  </ul>
  </>
  )
};
    

export default Contacts