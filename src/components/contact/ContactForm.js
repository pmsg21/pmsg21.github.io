import { contact } from '../../data/contact';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContactForm } from '../../hooks/useContactForm';
import { useTranslation } from '../../hooks/useTranslation';

export const ContactForm = () => {
  const [formValues, handleInputChange, handleSubmit] = useContactForm({
    email: '',
    error: false,
    invalidEmail: false,
    message: '',
    name: '',
    sending: false,
    success: false,
  });
  const { translate } = useTranslation();
  const { email, error, invalidEmail, message, sending, success, name } =
    formValues;
  const {
    buttonText: { normalText, sendingText },
    emailPlaceholder,
    formMessage: { successMessage, errorMessage },
    invalidEmailMessage,
    messagePlaceholder,
    namePlaceholder,
  } = contact;

  return (
    <div className="col-lg-8 mt-5 mt-lg-0">
      <form noValidate="noValidate" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-lg-6 form-group">
            <input
              id="name"
              type="text"
              name="name"
              placeholder={translate(namePlaceholder)}
              className="form-control"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
              disabled={sending}
              minLength={3}
            />
          </div>
          <div className="col-lg-6 form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder={translate(emailPlaceholder)}
              className="form-control"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
              disabled={sending}
              minLength={5}
            />
            {invalidEmail ? (
              <span style={{ color: 'red' }}>
                {translate(invalidEmailMessage)}
              </span>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder={translate(messagePlaceholder)}
            className="form-control"
            rows="5"
            autoComplete="off"
            value={message}
            onChange={handleInputChange}
            disabled={sending}
            minLength={5}
          />
        </div>
        {(error || success) && (
          <div
            className={`alert alert-${
              success ? 'success' : 'danger'
            } text-center`}
          >
            {success ? translate(successMessage) : translate(errorMessage)}
          </div>
        )}
        <div className="text-center">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={sending || !name || !email || !message}
          >
            {sending ? translate(sendingText) : translate(normalText)}
            {sending && (
              <FontAwesomeIcon
                className="fa-spin text-white ml-3"
                icon={faSpinner}
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
