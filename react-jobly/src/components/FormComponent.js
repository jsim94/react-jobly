import { Card, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import "./FormComponent.css";

export default function FormComponent({ formData }) {
  const { title, fields, validation, onSubmit } = formData;

  const fieldsList = Object.keys(fields);

  const initValues = {};
  fieldsList.forEach((field) => {
    initValues[field] = fields[field].initValue;
  });

  const handleSubmit = (vals, { setFieldError, setSubmitting }) => {
    onSubmit(vals, setFieldError).finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <Card
      className="FormComponent mx-auto "
      style={{ maxWidth: "700px" }}
    >
      <Card.Header className="bg-transparent text-center">
        <h1>{title}</h1>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={initValues}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {fieldsList.map((field) => {
                const fieldData = fields[field];
                return (
                  <Form.Group controlId={`form${field}`} key={field}>
                    <Form.Label>{fieldData.displayName}</Form.Label>
                    <Form.Control
                      className={
                        errors[field] && touched[field]
                          ? "is-invalid"
                          : ""
                      }
                      type={fieldData.type}
                      name={field}
                      placeholder={fieldData.displayName}
                      onChange={handleChange}
                      value={values[field]}
                    />
                    <div className="invalid-feedback">
                      {errors[field]}
                    </div>
                  </Form.Group>
                );
              })}
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}
