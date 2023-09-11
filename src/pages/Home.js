import Typed from 'react-typed';
import { home } from '../data/home';
import { SocialLinks } from '../components/shared';
import { useAnimateLetters } from '../hooks/useAnimateLetters';
import { useTranslation } from '../hooks/useTranslation';

export const Home = () => {
  const { animateLettersHelper } = useAnimateLetters();
  const { im, typedValues } = home;
  const { translate } = useTranslation();

  return (
    <section id="home" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        {animateLettersHelper('title', 'Pablo Sierra', 'h1', true)}
        <p>
          {translate(im)}
          <Typed
            strings={translate(typedValues)}
            typeSpeed={80}
            backSpeed={80}
            loop
          ></Typed>
        </p>
        <SocialLinks isTopLink={true} />
      </div>
    </section>
  );
};
