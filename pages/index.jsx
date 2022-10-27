import Seo from '../components/seo/Seo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo
        pageTitle="Polygon | Home"
        metaDescriptionContent="Polygon is a User-friendly Automated Machine Learning platform built for novice, researchers , data scientist and machine learning experts"
      />

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
