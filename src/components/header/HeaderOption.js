import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

export const HeaderOption = ({ href, iconName, id, text }) => {
  const { handleLanguageChange } = useLanguage();
  const { translate } = useTranslation();

  return (
    <li className={id === 1 ? 'active' : ''}>
      <a
        aria-label={`${id !== 7 ? 'go-to' : 'change'}-${href}`}
        href={`#${href}`}
        onClick={id === 7 ? handleLanguageChange : null}
      >
        <i className={`bx ${iconName}`}></i> <span>{translate(text)}</span>
      </a>
    </li>
  );
};
