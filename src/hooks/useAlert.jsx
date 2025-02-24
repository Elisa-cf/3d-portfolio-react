import { useState } from 'react';

const useAlert = () => {
  // State to manage the alert properties
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  // Function to show the alert with specified text and type
  const showAlert = ({ text, type = 'danger' }) =>
    setAlert({
      show: true,
      text,
      type,
    });

  // Function to hide the alert
  const hideAlert = ({}) =>
    setAlert({
      show: false,
      text: '',
      type: 'danger',
    });

  // Return the alert state and functions to show and hide the alert
  return { alert, showAlert, hideAlert };
};

export default useAlert;
