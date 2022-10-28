import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { MdModelTraining, MdOutlineDeveloperBoard } from "react-icons/md";

import Layout from "../components/layout/Layout";
import Seo from "../components/seo/Seo";
import { SingleOffer } from "../components/ui/ourOffers";
import { Offers } from "../constants";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

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

        <div className="section--pad home__our--offers">
          <div className="max-w-7xl mx-auto my-24">
            <div className="max-w-2xl mx-auto">
              <h2 className="section--title">
                Your Digital Transformation Starts Here
              </h2>
              <p className="section--subtitle">
                Build, scale, and adapt quickly using our comprehensive products
                and solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-6 xl:gap-x-16 mt-16">
              <div className="offer__left--content col-span-1">
                {Offers.map((offer, idx) => (
                  <SingleOffer
                    key={idx}
                    title={offer.title}
                    desc={offer.desc}
                    icon={offer.icon}
                    link={offer.link}
                    href={offer.href}
                    active={activeIndex}
                    id={idx}
                    handleToggle={handleToggle}
                  />
                ))}
              </div>

              <div className="col-span-1 mt-6 md:mt-0">
                <Image
                  src={Offers[activeIndex]?.image}
                  alt=""
                  width={533}
                  height={523}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
