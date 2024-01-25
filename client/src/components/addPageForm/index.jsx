import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPageForm = () => {
  const navigate = useNavigate();

  async function createProduct(values) {
    try {
      const res = await axios.post("http://localhost:3000/api/product", values);
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <section className="py-20 min-h-screen bgColor">
        <div className="wrapper">
          <div className="flex justify-center items-center">
            <h1 className="w-8/12 text-center [font-size:_clamp(2em,2vw,10em)] font-bold">
              Add Page
            </h1>
          </div>

          <div className="py-10">
            <Formik
              initialValues={{
                name: "",
                image: "",
                price: "",
                category: "",
                description: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                category: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                description: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                image: Yup.string()
                  .max(2000, "Must be 2000 characters or less")
                  .required("Required"),
                price: Yup.number().required("Required").positive("menfi eded daxil etmek olmaz")
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  createProduct(values);
                }, 400);
              }}
            >
              <div className="flex justify-center items-center">
                <Form className=" max-w-[400px] border px-10 py-10 bg-white rounded-md  shadow-md">
                  <div className="py-2">
                    <div className="flex  gap-4 justify-between">
                      <label htmlFor="name">First Name</label>
                      <Field
                        name="name"
                        type="text"
                        className="border border-black outline-none"
                      />
                    </div>
                    <ErrorMessage name="name" />
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between">
                      <label htmlFor="name">Category</label>
                      <Field
                        name="category"
                        type="text"
                        className="border border-black outline-none"
                      />
                    </div>
                    <ErrorMessage name="category" />
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between">
                      <label htmlFor="name">Description</label>
                      <Field
                        name="description"
                        type="text"
                        className="border border-black outline-none"
                      />
                    </div>
                    <ErrorMessage name="description" />
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between">
                      <label htmlFor="image">Image</label>
                      <Field
                        name="image"
                        type="text"
                        className="border border-black outline-none"
                      />
                    </div>
                    <ErrorMessage name="image" />
                  </div>

                  <div className="py-2">
                    <div className="flex justify-between">
                      <label htmlFor="price">Price </label>
                      <Field
                        name="price"
                        type="number"
                        className="border border-black outline-none"
                      />
                    </div>
                    <ErrorMessage name="price" />
                  </div>

                  <div className="w-full pt-4">
                    <button
                      className="w-full bg-blue-800 text-white rounded-md  py-2 px-2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPageForm;
