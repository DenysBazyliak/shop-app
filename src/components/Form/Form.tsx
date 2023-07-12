import { Formik, Field, Form } from "formik";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { postProduct, setForm } from "../../store/productsSlice.ts";
import { FormValidationSchema } from "../../utilities/validation/FormValidationSchema.ts";

import "./Form.css";
import { useAppDispatch } from "../../hooks/hooks.tsx";
import { productId } from "../../utilities/utilities.tsx";

const initialValues = {
  id: "",
  img: "",
  name: "",
  count: 0,
  weight: 0,
  width: 0,
  height: 0,
};

interface FormValues {
  id: string;
  img: string;
  name: string;
  count: number;
  weight: number;
  width: number;
  height: number;
}

export const FormComponent = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (values: FormValues) => {
    let obj = {
      id: productId(),
      imageUrl: values.img,
      name: values.name,
      count: values.count,
      weight: values.weight,
      size: {
        width: values.width,
        height: values.height,
      },
    };
    dispatch(setForm(false));
    return dispatch(postProduct(obj));
  };

  return (
    <Card
      sx={{
        position: "fixed",
        top: "50px",
        left: "200px",
        width: "800px",
        height: "400px",
        margin: "20px 30px 20px 50px",
        backgroundColor: "#0b2031",
        border: "solid 3px black",
      }}
    >
      <h5>Product Form</h5>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={FormValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={"formWrapper"}>
            <Field
              className={"image"}
              placeholder={"Image Here"}
              type="text"
              id="img"
              name="img"
            />
            <Field
              className={"name"}
              placeholder={"Name Here"}
              type="text"
              id="name"
              name="name"
            />
            <Field className={"count"} type="number" id="count" name="count" />

            <Field
              className={"productWeight"}
              type="number"
              id="weight"
              name="weight"
            />
            <Field
              className={"productWidth"}
              type="number"
              id="width"
              name="width"
            />

            <Field
              className={"productHeight"}
              type="number"
              id="height"
              name="height"
            />
            <div className={"buttons"}>
              {" "}
              <Button
                className={"submitButton"}
                variant={"contained"}
                type="submit"
              >
                Confirm
              </Button>
              <Button
                className={"cancelButton"}
                variant={"contained"}
                color={"error"}
                onClick={() => dispatch(setForm(false))}
              >
                Decline
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Card>
  );
};
