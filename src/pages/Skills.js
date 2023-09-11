import { SectionTitle } from '../components/shared';
import { skills } from '../data/skills';
import { SkillsBody } from '../components/skills';

export const Skills = () => {
  const { paragraph, title } = skills;

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle paragraph={paragraph} section="skills" title={title} />
        <SkillsBody />
      </div>
    </section>
  );
};
