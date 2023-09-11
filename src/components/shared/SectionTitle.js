import { useAnimateLetters } from '../../hooks/useAnimateLetters';
import { useTranslation } from '../../hooks/useTranslation';

export const SectionTitle = ({
  link = '',
  linkText = '',
  paragraph = '',
  section,
  text = '',
  title,
}) => {
  const { animateLettersHelper } = useAnimateLetters();
  const { translate } = useTranslation();

  return (
    <div className="section-title">
      {animateLettersHelper(section, translate(title), 'h2')}
      {paragraph && <p>{translate(paragraph)}</p>}
      {link && (
        <p className="mt-3">
          {translate(text)}
          <a href={translate(link)} target="_blank" rel="noreferrer">
            {translate(linkText)}
          </a>
        </p>
      )}
    </div>
  );
};
