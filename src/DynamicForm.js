import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Box, TextField, Button } from '@mui/material';

const DynamicForm = ({ fields, validationSchema, onSubmit, initialValues }) => {
  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {fields.map(({ name, label, type, multiline, rows }) => (
                <Field
                  key={name}
                  as={TextField}
                  label={label}
                  name={name}
                  type={type}
                  multiline={multiline}
                  rows={rows}
                  error={touched[name] && !!errors[name]}
                  helperText={touched[name] && errors[name]}
                />
              ))}
              <Button type="submit" variant="contained" color="primary">
                Envoyer
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default DynamicForm;
