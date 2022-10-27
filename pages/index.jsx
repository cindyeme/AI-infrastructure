import Seo from '../components/seo/Seo'

export default function Home() {
  return (
    <div className="home">
      <Seo
        pageTitle="Polygon | Home"
        metaDescriptionContent="Polygon is a User-friendly Automated Machine Learning platform built for novice, researchers , data scientist and machine learning experts"
      />

      <div className="home__container">
        {/* Here section */}
      </div>
    </div>
  );
}
