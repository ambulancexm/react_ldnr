// src/MonFormulaire.js
import React from 'react';
import { TextField, Button, Container, Box  } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  nom: Yup.string().required('Le nom est requis'),
  email: Yup.string().email('Email invalide').required('L\'email est requis'),
  message: Yup.string().required('Le message est requis')
});

const MonFormulaire = () => {
  const handleSubmit = (values) => {
    // Logique pour soumettre les données du formulaire
    console.log(values);
  };

  return (
    <Container maxWidth="sm">
    <Formik
      initialValues={{ nom: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Field
              as={TextField}
              label="Nom"
              name="nom"
              error={touched.nom && !!errors.nom}
              helperText={touched.nom && errors.nom}
            />
            <Field
              as={TextField}
              label="Email"
              name="email"
              type="email"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              as={TextField}
              label="Message"
              name="message"
              multiline
              rows={4}
              error={touched.message && !!errors.message}
              helperText={touched.message && errors.message}
            />
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

export default MonFormulaire;
