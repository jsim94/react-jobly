import { useContext } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";

import { JoblyApi } from "../api";
import { FormComponent } from "../components";
import { UserContext } from "../context";

export default function Profile({ changeToken }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const fields = {
    firstName: {
      initValue: user.firstName,
      displayName: "First Name",
      type: "text",
    },
    lastName: {
      initValue: user.lastName,
      displayName: "Last Name",
      type: "text",
    },
    email: {
      initValue: user.email,
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
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string(),
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

    const submission = JoblyApi.updateUser(user.username, values)
      .then(async (res) => {
        navigate("/");
      })
      .catch((errors) => {
        console.log(errors);
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
        title: "Profile Edit",
        fields,
        validation,
        onSubmit,
      }}
    />
  );
}
