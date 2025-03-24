import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slider";

const Home = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste and share Food from all over the world !</p>
          </div>

          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore the Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it Works</h2>
          <p>NEadfhio adojfh aodfoa dfaohd oajshf oasfojan faldkf </p>
          <p>lhadsf aoidjf iadf</p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food ?</h2>
          <p>asdasdasdasfadfnb ajisdf iuoahf ashf </p>
        </section>
      </main>
    </>
  );
};

export default Home;
