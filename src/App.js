import React from 'react';
import * as Yup from 'yup';
import DynamicForm from './DynamicForm';

const fields = [
  { name: 'nom', label: 'Nom', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'message', label: 'Message', type: 'text', multiline: true, rows: 4 },
  { name: 'obs', label: 'Obs', type: 'text', multiline: true, rows: 5}
];

const validationSchema = Yup.object({
  nom: Yup.string().required('Le nom est requis'),
  email: Yup.string().email('Email invalide').required('L\'email est requis'),
  message: Yup.string().required('Le message est requis')
});

const initialValues = {
  nom: '',
  email: '',
  message: ''
};

const handleSubmit = (values) => {
  console.log(values);
};

const App = () => (
  <DynamicForm
    fields={fields}
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={handleSubmit}
  />
);

export default App;
