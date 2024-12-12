import styles from "../page.module.css";

interface LocationArea {
  name: string;
}

interface Encounter {
  pokemon_v2_locationarea: LocationArea;
}

type Pokemon = {
  id: string;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  image: string;
  pokemon_v2_encounters?: Encounter[];
};

interface StaffProps {
  pokemons: Pokemon[]; // Accept Pokémon data as a prop
}

export default function Staff({ pokemons }: StaffProps) {
  return (
    <div className={styles.aboutChefs}>
      <h1>Våra kockar och deras expertis</h1>
      <div className={styles.boxes}>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <div className={styles.chefWrapper}>
              <div className={styles.chefInfo}>
                <h3>{pokemon.name}</h3>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Base experience: {pokemon.base_experience}</p>
              </div>

              {/* Show location if it exists */}
              {pokemon.pokemon_v2_encounters?.some(
                (encounter) => encounter.pokemon_v2_locationarea?.name
              ) && (
                <div>
                  <h4>Locations:</h4>
                  <div>
                    {pokemon.pokemon_v2_encounters
                      .slice(0, 3)
                      .map((encounter, index) =>
                        encounter.pokemon_v2_locationarea &&
                        encounter.pokemon_v2_locationarea.name ? (
                          <li key={index}>
                            {encounter.pokemon_v2_locationarea.name}
                          </li>
                        ) : null
                      )}
                  </div>
                </div>
              )}
              <img src={pokemon.image} alt="chef-pokemon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
