import Link from "next/link";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { MdModelTraining, MdOutlineDeveloperBoard } from "react-icons/md";
import Layout from "../components/layout/Layout";
import Seo from "../components/seo/Seo";

export default function Home() {
  return (
    <Layout>
      <Seo
        pageTitle="Polygon | Home"
        metaDescriptionContent="Polygon is a User-friendly Automated Machine Learning platform built for novice, researchers , data scientist and machine learning experts"
      />
      <div className="home">
        <div className="home__container">
          <div className="section--pad">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h1 className="hero--title">
                  AI infrastructure for digital businesses
                </h1>
                <p className="hero--paragraph">
                  Build and Deploy production ready powerful AI models in
                  5minutes
                </p>
                <div className="flex items-center justify-center space-x-4 mt-12">
                  <Link href="/" className="btn btn--primary">
                    Request Demo
                  </Link>
                  <Link href="/" className="btn btn--white hover:!bg-white/70">
                    Take a Tour
                  </Link>
                </div>
              </div>
              <div className="mt-16 max-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="hero--box">
                    <div className="bg-white rounded-full p-3">
                      <MdModelTraining size={50} color="#872b97" />
                    </div>
                    <p className="__paragraph">
                      Ability to train a model and deploy it for production with
                      an API wrapped around it [sagemaker for production
                      deployment].
                    </p>
                  </div>
                  <div className="hero--box">
                    <div className="bg-white rounded-full p-3">
                      <AiOutlineDeploymentUnit size={50} color="#872b97" />
                    </div>
                    <p className="__paragraph">
                      Multiple integration libraries/SDK to consume our service
                      from anywhere (cli, python, php, js, flutter, android,
                      ios, API&apos;s).
                    </p>
                  </div>
                  <div className="hero--box">
                    <div className="bg-white rounded-full p-3">
                      <MdOutlineDeveloperBoard size={50} color="#872b97" />
                    </div>
                    <p className="__paragraph">
                      Faster way to develop models with well tuned hyper
                      parameters and support for tens of billions of features
                      and samples.
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
