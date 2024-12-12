import styles from "./page.module.css";
import Image from "next/image";
import BurgerIgm2 from "@/public/images/b2.png";
import { fetchPokemons } from "@/app/lib/graphqlClient";
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

export default async function AboutPage() {
  let pokemons: Pokemon[] = [];
  let error: string | null = null;

  try {
    pokemons = await fetchPokemons();
  } catch (e) {
    error = "Failed to fetch Pokémon data";
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className={styles.aboutpageTop}>
        <div className={styles.imgWrapper}>
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
