import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";

import { Input, PasswordInput } from "../components/input";
import Seo from "../components/seo/Seo";
import { PrimaryButton } from "../components/buttons";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  username: Yup.string().min(2, "Too short!").required("Username is required!"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email!"),
  phone: Yup.number()
    .min(12, "Phone number should not be more than 12 digits")
    .required("Phone number is required!"),
  company_name: Yup.string().required("Company name is required!"),
  company_rc: Yup.string().required("Company registration number is required!"),
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
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: "",
      company_name: "",
      company_rc: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="register">
      <Seo
        pageTitle="Polygon | Register"
        metaDescriptionContent="Polygon is a User-friendly Automated Machine Learning platform built for novice, researchers , data scientist and machine learning experts"
      />

      <div className="register__container">
        <div className="register--header">
          <div className="inner-header">
            <div className="pt-16 lg:pt-20 px-4">
              <div className="bg-white max-w-xl mx-auto rounded-md px-6 pt-6 pb-8">
                <div>
                  <Link href="/" className="text-sm text-left " title="Go Back">
                    <IoMdArrowRoundBack size={20} />
                  </Link>
                </div>
                <Link href="/" className="flex flex-col items-center mb-8">
                  <div className="w-20 h-10 bg-secondary/70" />
                </Link>
                <h1>Sign up to Polygon</h1>
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* First name */}
                    <div className="form--field">
                      <Input
                        label="First name"
                        placeholder="Enter your first name"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        error={formik.errors.first_name}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("first_name")}
                      >
                        {formik.errors.first_name &&
                          formik.touched.first_name && (
                            <span className="form--error">
                              {formik.errors.first_name}
                            </span>
                          )}
                      </Input>
                    </div>
                    {/* Last name */}
                    <div className="form--field">
                      <Input
                        label="Last name"
                        placeholder="Enter your last name"
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        error={formik.errors.last_name}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("last_name")}
                      >
                        {formik.errors.last_name &&
                          formik.touched.last_name && (
                            <span className="form--error">
                              {formik.errors.last_name}
                            </span>
                          )}
                      </Input>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Username */}
                    <div className="form--field">
                      <Input
                        label="Username"
                        placeholder="Enter your username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        error={formik.errors.username}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("username")}
                      >
                        {formik.errors.username && formik.touched.username && (
                          <span className="form--error">
                            {formik.errors.username}
                          </span>
                        )}
                      </Input>
                    </div>
                    {/* Phone number */}
                    <div className="form--field">
                      <Input
                        type="number"
                        label="Phone number"
                        placeholder="Enter your phone number"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={formik.errors.phone}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("phone")}
                      >
                        {formik.errors.phone && formik.touched.phone && (
                          <span className="form--error">
                            {formik.errors.phone}
                          </span>
                        )}
                      </Input>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Company name */}
                    <div className="form--field">
                      <Input
                        label="Company name"
                        placeholder="Enter your company name"
                        onChange={formik.handleChange}
                        value={formik.values.company_name}
                        error={formik.errors.company_name}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("company_name")}
                      >
                        {formik.errors.company_name &&
                          formik.touched.company_name && (
                            <span className="form--error">
                              {formik.errors.company_name}
                            </span>
                          )}
                      </Input>
                    </div>
                    {/* Company Reg no. */}
                    <div className="form--field">
                      <Input
                        label="Company Reg. Number"
                        placeholder="Enter company registration code"
                        onChange={formik.handleChange}
                        value={formik.values.company_rc}
                        error={formik.errors.company_rc}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("company_rc")}
                      >
                        {formik.errors.company_rc &&
                          formik.touched.company_rc && (
                            <span className="form--error">
                              {formik.errors.company_rc}
                            </span>
                          )}
                      </Input>
                    </div>
                  </div>

                  {/* Email */}
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

                  {/* Password */}
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
                  <PrimaryButton text="Sign up" type="submit" />
                </form>

                <p className="text-sm text-center mt-5">
                  Already have an account?{" "}
                  <Link href="login" className="text-primary">
                    Log in
                  </Link>
                </p>
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
      </div>
    </div>
  );
}
