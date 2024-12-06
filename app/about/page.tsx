"use client";
import styles from "./page.module.css";
import Image from "next/image";
import BurgerIgm2 from "@/public/images/b2.png";
import { fetchPokemons } from "@/app/lib/graphqlClient";
import { useEffect, useState } from "react";
import Staff from "./components/Staff";

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

      <Staff pokemons={pokemons} />
    </div>
  );
}
