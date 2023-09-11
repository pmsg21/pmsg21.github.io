import { contact } from '../../data/contact';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from '../../hooks/useTranslation';

export const ContactInfo = () => {
  const { translate } = useTranslation();
  const { contactMe } = contact;

  return (
    <div className="col-lg-4">
      <div className="info">
        <div className="email">
          <i>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
          <h4>Email:</h4>
          <p>pmsg21@gmail.com</p>
        </div>

        <div className="phone">
          <i>
            <FontAwesomeIcon icon={faPhone} />
          </i>
          <h4>{translate(contactMe)}:</h4>
          <p>+351 914 578 268</p>
        </div>
      </div>
    </div>
  );
};
