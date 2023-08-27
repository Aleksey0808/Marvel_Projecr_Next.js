import Image from "next/image";

const PokemonInfo = ({pokemon}) => {
    console.log(pokemon.sprites.back_default);
    const src = pokemon.sprites.back_default;
    // const { name, email, address } = contact || {};
    // const { street, suite, city, zipcode } = address || {};

    // if(!contact) {
    //     return <Heading tag="h3" text="Contact is empty" />
    // }
    return (
        <>
        <h1>{pokemon.name}</h1>
        <Image
        loader={() => src} src={src} width={500} height={500} alt={pokemon.name}
        ></Image>
       
        </>
    )
};

export default PokemonInfo;