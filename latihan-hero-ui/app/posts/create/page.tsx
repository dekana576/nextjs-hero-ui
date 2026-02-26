"use client";

import CardList from "@/app/components/CardList";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, Input, Textarea } from "@heroui/react";
import { useState } from "react";

const base_url = "https://jsonplaceholder.typicode.com/posts";

const MyInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <Input
      {...field}
      {...props}
      label={label}
      labelPlacement="outside"
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error}
    />
  );
};

const MyTextarea = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <Textarea
      {...field}
      {...props}
      label={label}
      labelPlacement="outside"
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error}
    />
  );
};

export default function CreatePost() {
      const [error, setError] = useState<Error | null>(null);
    
      if (error) {
        throw error;
      }
  return (
    <div className="w-full max-w-md mx-auto justify-center items-center p-8">
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Create New Post</h1>
        <Formik
          initialValues={{
            title: "",
            body: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            body: Yup.string().required("Body is required"),
          })}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await axios.post(base_url, {
                ...values,
                userId: 1,
              });

              console.log("Post created:", response.data);
              alert("Post created successfully.");
              resetForm();
            } catch (err) {
               setError(err as Error);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-xs flex flex-col gap-4">
              <MyInput
                name="title"
                type="text"
                placeholder="Enter post title"
                label="Title"
              />

              <MyTextarea
                name="body"
                placeholder="Enter your description"
                label="Body"
              />

              <Button color="primary" type="submit" isLoading={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardList>
    </div>
  );
}
