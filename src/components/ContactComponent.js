import React from 'react';
import PropTypes from 'prop-types';
import { faSpinner, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import animateLettersHelper from '../helpers/animateLettersHelper';
import { contactComponent } from '../data/sectionsContentTranslation';
import { useContactForm } from "../hooks/useContactForm";

const ContactComponent = ({ currentLanguage }) => {

    const [ formValues, handleInputChange, handleSubmit ] = useContactForm({
        name: '',
        email: '',
        message: '',
        invalidEmail: false,
        sending: false,
        error: false,
        success: false
    });
    const { name, email, message, invalidEmail, sending, error, success } = formValues;
    const {
        title,
        contactMe,
        namePlaceholder,
        emailPlaceholder,
        messagePlaceholder,
        invalidEmailMessage,
        buttonText: { normalText, sendingText },
        formMessage: { successMessage, errorMessage }
    } = contactComponent;

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    {
                        animateLettersHelper('contact', title[currentLanguage], 'h2')
                    }
                </div>

                <div className="row mt-1">

                    <div className="col-lg-4">
                        <div className="info">

                            <div className="email">
                                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                                <h4>Email:</h4>
                                <p>pmsg21@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i><FontAwesomeIcon icon={faPhone} /></i>
                                <h4>{ contactMe[currentLanguage] }:</h4>
                                <p>+58 412 9641228</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form noValidate="noValidate" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="col-lg-6 form-group">
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder={ namePlaceholder[currentLanguage] }
                                        className="form-control"
                                        autoComplete='off'
                                        value={ name }
                                        onChange={ handleInputChange }
                                        disabled={sending}
                                        minLength={3}
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder={ emailPlaceholder[currentLanguage] }
                                        className="form-control"
                                        autoComplete='off'
                                        value={ email }
                                        onChange={ handleInputChange }
                                        disabled={sending}
                                        minLength={5}
                                    />
                                    { invalidEmail ?  <span style={{color: "red"}}>{ invalidEmailMessage[currentLanguage] }</span> : null}
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={ messagePlaceholder[currentLanguage] }
                                    className="form-control"
                                    rows="5"
                                    autoComplete='off'
                                    value={ message }
                                    onChange={ handleInputChange }
                                    disabled={sending}
                                    minLength={5}
                                />
                            </div>
                            { (error || success) && <div className={`alert alert-${ success ? 'success' : 'danger' } text-center`}>{ success ? successMessage[currentLanguage] : errorMessage[currentLanguage] }</div> }
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit" disabled={sending || !name || !email || !message}>
                                    { sending ? sendingText[currentLanguage] : normalText[currentLanguage] }
                                    { sending && <FontAwesomeIcon className="fa-spin text-white ml-3" icon={faSpinner} />}
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

ContactComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default ContactComponent;
