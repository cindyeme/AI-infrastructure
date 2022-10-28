import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";

import { PasswordInput } from "../../components/input";
import Seo from "../../components/seo/Seo";
import { PrimaryButton } from "../../components/buttons";
import { Waves } from "../../components/ui/animations";

const Schema = Yup.object().shape({
  new_password: Yup.string()
    .required("Please enter new password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@(){}[\\//\?<>\]#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirm_password: Yup.string()
    .required("Please confirm password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@(){}[\\//\?<>\]#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export default function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="auth">
      <Seo
        pageTitle="Polygon | Reset password"
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
                <h1>Create new password</h1>
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                >
                  <div className="form--field">
                    <PasswordInput
                      label="New password"
                      type="password"
                      placeholder="**********"
                      onChange={formik.handleChange}
                      value={formik.values.new_password}
                      error={formik.errors.new_password}
                      onBlur={formik.handleBlur}
                      {...formik.getFieldProps("new_password")}
                    >
                      {formik.errors.new_password &&
                        formik.touched.new_password && (
                          <span className="form--error">
                            {formik.errors.new_password}
                          </span>
                        )}
                    </PasswordInput>
                  </div>
                  <div className="form--field">
                    <PasswordInput
                      label="Confirm password"
                      type="password"
                      placeholder="**********"
                      onChange={formik.handleChange}
                      value={formik.values.confirm_password}
                      error={formik.errors.confirm_password}
                      onBlur={formik.handleBlur}
                      {...formik.getFieldProps("confirm_password")}
                    >
                      {formik.errors.confirm_password &&
                        formik.touched.confirm_password && (
                          <span className="form--error">
                            {formik.errors.confirm_password}
                          </span>
                        )}
                    </PasswordInput>
                  </div>
                  <PrimaryButton text="Submit" type="submit" />
                </form>

                {/* <p className="text-sm text-center mt-5">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/register" className="text-primary">
                    Sign up
                  </Link>
                </p> */}
              </div>
            </div>
          </div>

          <Waves />
        </div>
      </div>
    </div>
  );
}
