import { footer } from '../data/footer';
import { SocialLinks } from '../components/shared';
import { useAnimateLetters } from '../hooks/useAnimateLetters';
import { useTranslation } from '../hooks/useTranslation';

export const Footer = () => {
  const { animateLettersHelper } = useAnimateLetters();
  const { translate } = useTranslation();
  const { quote } = footer;

  return (
    <footer id="footer">
      <div className="container">
        {animateLettersHelper('footer', 'Pablo Sierra', 'h3')}
        <p>{translate(quote)}</p>
        <SocialLinks isTopLink={false} />
      </div>
    </footer>
  );
};
