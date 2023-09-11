import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from '../../hooks/useLanguage';

export const SkillsListItem = ({ text }) => {
  const { siteLanguage } = useLanguage();

  return (
    <li>
      <p className="mb-0 text-left">
        <FontAwesomeIcon icon={faCheck} />
        <span className="ml-3">
          {typeof text === 'object' ? text[siteLanguage] : text}
        </span>
      </p>
    </li>
  );
};
