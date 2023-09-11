import { about } from '../data/about';
import { AboutBody } from '../components/about';
import { SectionTitle } from '../components/shared';

export const About = () => {
  const { firstParagraph, title } = about;

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          paragraph={firstParagraph}
          section="about"
          title={title}
        />
        <AboutBody />
      </div>
    </section>
  );
};
