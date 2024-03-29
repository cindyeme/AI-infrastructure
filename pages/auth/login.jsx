import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";

import { Input, PasswordInput } from "../../components/input";
import Seo from "../../components/seo/Seo";
import { PrimaryButton } from "../../components/buttons";
import { Waves } from "../../components/ui/animations";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@(){}[\\//\?<>\]#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="auth">
      <Seo
        pageTitle="Polygon | Log in"
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
                <h1>Welcome Back!</h1>
                <form
                  className="flex flex-col space-y-4"
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
                  <div className="form--field">
                    <PasswordInput
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      error={formik.errors.password}
                      onBlur={formik.handleBlur}
                      {...formik.getFieldProps("password")}
                    >
                      {formik.errors.password && formik.touched.password && (
                        <span className="form--error">
                          {formik.errors.password}
                        </span>
                      )}
                    </PasswordInput>
                  </div>
                  <Link href="/auth/verify-email" className="text-right text-xs">Forgot password?</Link>
                  <PrimaryButton text="Log in" type="submit" />
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
