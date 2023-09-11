import { useState } from 'react';
import axios from 'axios';

export const useContactForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      ...values,
      invalidEmail: false,
      sending: true,
      error: false,
      success: false,
    });

    const { name, email, message } = values;
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(email)) {
      setValues({
        ...values,
        invalidEmail: true,
        sending: false,
        error: false,
        success: false,
      });
      return;
    }

    axios({
      url: 'https://formspree.io/f/mleadrwo',
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: { name, email, message },
    })
      .then(({ status, data }) => {
        if (status === 200) {
          if (data.ok) {
            setValues({
              ...values,
              invalidEmail: false,
              sending: false,
              success: true,
            });
            setTimeout(reset, 4000);
          } else handleFormError();
        } else handleFormError();
      })
      .catch((e) => {
        handleFormError();
      });
  };

  const handleFormError = () => {
    setValues({
      ...values,
      sending: false,
      error: true,
    });

    setTimeout(() => {
      setValues({
        ...values,
        error: false,
      });
    }, 4000);
  };

  return [values, handleInputChange, handleSubmit];
};
