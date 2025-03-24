import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals.grid";
import { getMeals } from "../../lib/meals";
import { Suspense } from "react";

async function RenderMeals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const Meals = async () => {
  return (
    <header className={classes.header}>
      <h1>
        Delicious Meals, created
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favourite recipe and cook it yourself.It is easy and fun!
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share Your Favourite Recipe</Link>
      </p>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <RenderMeals />
        </Suspense>
      </main>
    </header>
  );
};

export default Meals;
