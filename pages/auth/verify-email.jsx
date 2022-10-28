import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";

import { Input } from "../../components/input";
import Seo from "../../components/seo/Seo";
import { PrimaryButton } from "../../components/buttons";
import { Waves } from "../../components/ui/animations";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
});

export default function VerifyEmail() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="auth">
      <Seo
        pageTitle="Polygon | Verify email"
        metaDescriptionContent="Polygon is a User-friendly Automated Machine Learning platform built for novice, researchers , data scientist and machine learning experts"
      />

      <div className="auth__container">
        <div className="auth--header">
          <div className="inner-header">
            <div className="pt-16 lg:pt-20 px-4">
              <div className="bg-white max-w-lg mx-auto rounded-md px-6 pt-6 pb-8">
                <div>
                  <Link href="/" className="text-sm text-left " title="Go Back">
                    <IoMdArrowRoundBack size={20} />
                  </Link>
                </div>
                <Link href="/" className="flex flex-col items-center mb-8">
                  <div className="w-20 h-10 bg-secondary/70" />
                </Link>
                <h1>Reset Password</h1>
                <form
                  className="flex flex-col space-y-6"
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                >
                  <div className="form--field">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={formik.errors.email}
                      onBlur={formik.handleBlur}
                      {...formik.getFieldProps("email")}
                    >
                      {formik.errors.email && formik.touched.email && (
                        <span className="form--error">
                          {formik.errors.email}
                        </span>
                      )}
                    </Input>
                  </div>
                  <PrimaryButton text="Reset password" type="submit" />
                </form>

                <p className="text-sm text-center mt-5">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/register" className="text-primary">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <Waves />
        </div>
      </div>
    </div>
  );
}
