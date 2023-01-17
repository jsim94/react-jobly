import { useNavigate } from "react-router";
import * as Yup from "yup";

import { JoblyApi } from "../api";
import { FormComponent } from "../components";

export default function Signup({ changeToken }) {
  const navigate = useNavigate();

  const fields = {
    username: {
      initValue: "",
      displayName: "Username",
      type: "text",
    },
    firstName: {
      initValue: "",
      displayName: "First Name",
      type: "text",
    },
    lastName: {
      initValue: "",
      displayName: "Last Name",
      type: "text",
    },
    email: {
      initValue: "",
      displayName: "Email",
      type: "email",
    },
    password: {
      initValue: "",
      displayName: "Password",
      type: "password",
    },
    confirmPassword: {
      initValue: "",
      displayName: "Confirm Password",
      type: "password",
    },
  };

  const validation = Yup.object().shape({
    username: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords don't match"
    ),
  });

  const onSubmit = (data, setFieldError) => {
    if (data.password !== data.confirmPassword)
      throw new Error("Passwords do not match");

    const values = { ...data };
    delete values.confirmPassword;

    const submission = JoblyApi.registerUser(values)
      .then(async (res) => {
        changeToken(res.token);
        navigate("/");
      })
      .catch((errors) => {
        errors.forEach((error) => {
          if (error.includes("Duplicate username"))
            setFieldError("username", "Username already taken");
          if (error.includes("Duplicate email"))
            setFieldError("email", "Email already taken");
        });
      });

    return submission;
  };

  return (
    <FormComponent
      formData={{
        title: "Signup",
        fields,
        validation,
        onSubmit,
      }}
    />
  );
}
