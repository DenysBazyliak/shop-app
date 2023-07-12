import * as Yup from "yup";

export const FormValidationSchema = Yup.object().shape({
  img: Yup.string().required("Image is required"),
  name: Yup.string().required("Name is required"),
  count: Yup.number().required("Count is required"),
  weight: Yup.number().required("Weight is required"),
  width: Yup.number().required("Width is required"),
  height: Yup.number().required("Height is required"),
});
