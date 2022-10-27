import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, PasswordInput } from "../components/input";
import Seo from "../components/seo/Seo";
import { InputContents } from "../constants";
import { PrimaryButton } from "../components/buttons";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required!"),
  password: yup
    .string()
    .required("Please enter password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export default function Login() {
  return (
    <div className="login">
      <Seo
        pageTitle="Polygon | Log in"
        metaDescriptionContent="Polygon is a User-friendly Automated Machine Learning platform built for novice, researchers , data scientist and machine learning experts"
      />

      <div className="login__container">
        <div className="login--header">
          <div className="inner-header">
            <div className="pt-24 px-4">
              <div className="bg-white max-w-lg mx-auto rounded-md px-6 py-8">
                <Link href="/" className="flex flex-col items-center mb-10">
                  <div className="w-20 h-10 bg-secondary/70" />
                </Link>
                <h1>Log in to Polygon</h1>
                <form className="flex flex-col space-y-8">
                  <div className="form--field">
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form--field">
                    <PasswordInput
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <PrimaryButton text="Log in" type="submit" />
                </form>
              </div>
            </div>
          </div>

          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div className="section--pad"></div>
      </div>
    </div>
  );
}
