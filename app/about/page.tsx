"use client";
import styles from "./page.module.css";
import Image from "next/image";
import BurgerIgm2 from "@/public/images/b2.png";
import { fetchPokemons } from "@/app/lib/graphqlClient";
import { useEffect, useState } from "react";

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
  pokemon_v2_encounters: Encounter[];
};

export default function AboutPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (error) {
        setError("Failed to fetch Pokémon data");
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  if (loading) return <div className="loader"></div>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className={styles.aboutpageTop}>
        <div className={styles.imgWrapper}>
          {/* <div className={styles.textBox}>
            <p className={styles.aboutHeader}>vår passion</p>
            <p className={styles.aboutHeader}>vårt liv</p>
            <p className={styles.aboutHeader}>vår framtid</p>
          </div> */}
          <div className={styles.verticalText}>OM OSS</div>
          <Image
            src={BurgerIgm2}
            alt="Hamburger about page"
            className={styles.burgerImg}
          />
        </div>
      </div>

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
                    <p>
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
                    </p>
                  </div>
                )}
                <img src={pokemon.image} alt="chef-pokemon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
