// Manually creating a promise that fetches Pokemon details
function getPokemonDetails(pokemonName) {
  return new Promise((resolve, reject) => {
    // Define URL for the Pokemon API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // Make an HTTP GET request using fetch
    fetch(url)
      .then((response) => {
        // Check if the response status is okay
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // convert the response body as JSON
        return response.json();
      })
      .then((pokemonData) => {
        // Extract relevant information from the Pokemon data
        const name = pokemonData.name;
        const weight = pokemonData.weight;
        const abilities = pokemonData.abilities.map(
          (ability) => ability.ability.name
        );

        // Resolve the promise with the Pokemon details
        resolve({
          name,
          weight,
          abilities,
        });
      })
      .catch((error) => {
        // Reject the promise with the error
        reject(error);
      });
  });
}

// Get details for desired Pokemon
getPokemonDetails("pikachu") //enter Pokemon name
  .then((details) => {
    // Print the Pokemon details
    console.log(`Name: ${details.name}`);
    console.log(`Weight: ${details.weight} hectograms`);
    console.log(`Abilities: ${details.abilities.join(", ")}`);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error fetching Pokemon data:", error.message);
  });

// let pokemon = []; // empty array

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu/") //linked is "fetched" and returns a promise
//   .then((res) => res.json()) // it is then named "res" and then convert/parse fetched link into json object

//   .then((result) => {
//     // call back used to convert/parse data
//     pokemon = result; // move that data into the pokemon array

//     console.log(pokemon.name); // display name of pokemon
//     console.log(pokemon.weight); // display weight of pokemon

// pokemon.abilities.forEach((ability) => {
//       // for each loop will cycle through all data in array
//       console.log({
//         // display pokemon data
//         ability: {
//           // display all abilities
//           abilityName: ability.ability.name, // display name of ability
//           abilityURL: ability.ability.url, // display url of ability
//         }, //if
//         isHiddden: ability.isHiddden,
//         slot: ability.slot,
//       });
//   });

// async function fetchPokemon() {
//   // creates async functions
//   try {
//     //try allows you to test a piece of code for errors while it is being executed.
//     let responses = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`); //await will make code wait for code to excecute before running
//     if (!responses.ok) {
//       // if "responses" is not okay error code will run
//       throw new Error(`http error: status = ${responses.status} `); // will display the status of error if there is an error
//     }
//     let pokemon = await responses.json();
//     console.log(pokemon); //displays all info on pokemon

//     console.log(`${pokemon.name}`); //display name of pokemon
//     console.log(`${pokemon.weight}`); // display weight of pokemon

//     pokemon.abilities.forEach((ability) => {
//       //display abilities of pokemon
//       // for each loop will cycle through all data in array
//       console.log({
//         // display pokemon data
//         ability: {
//           // display all abilities
//           abilityName: ability.ability.name, // display name of ability
//           abilityURL: ability.ability.url, // display url of ability
//         }, //if
//         isHiddden: ability.isHiddden,
//         slot: ability.slot,
//       });
//     });
//   } catch (error) {
//     // cathces errors
//     console.error(`Could not fetch data ${error.message} `); // display message of errors
//   }
// }

// fetchPokemon(); // call function
