

const PokemonInfo = ({pokemon}) => {
    console.log(pokemon);
    // const { name, email, address } = contact || {};
    // const { street, suite, city, zipcode } = address || {};

    // if(!contact) {
    //     return <Heading tag="h3" text="Contact is empty" />
    // }
    return (
        <>
        <h1>{pokemon.name}</h1>
        {/* <div>
            <strong>Email:</strong>
            {email}
        </div>
        <div>
            <strong>Address:</strong>
            {`${street}, ${suite}, ${city}, ${zipcode}`}
        </div> */}
        </>
    )
};

export default PokemonInfo;