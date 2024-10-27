import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";

const BookingForm = ({ camperId }) => {
  const [startDate, setStartDate] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required").nullable(),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    alert("Booking Successful!");
    console.log("Booking details:", {
      ...values,
      bookingDate: startDate,
      camperId,
    });
    resetForm();
  };

  return (
    <div className={styles.bookingForm}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.formGroup}>
              <Field name="name" placeholder="Name*" className={styles.input} />
              {errors.name && touched.name && (
                <div className={styles.error}>{errors.name}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <Field
                name="email"
                placeholder="Email*"
                className={styles.input}
              />
              {errors.email && touched.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Booking date*"
                className={styles.input}
                name="bookingDate"
                required
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={styles.textarea}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
