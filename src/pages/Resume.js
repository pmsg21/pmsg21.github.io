import {
  CoursesAndCertifications,
  ResumeItem,
  ResumeItemContainer,
} from '../components/resume';
import { professionalExperience, resume } from '../data/resume';
import { SectionTitle } from '../components/shared';
import { useAnimateLetters } from '../hooks/useAnimateLetters';
import { useTranslation } from '../hooks/useTranslation';

export const Resume = () => {
  const { animateLettersHelper } = useAnimateLetters();
  const {
    cv: {
      link: { here, url },
      text,
    },
    education,
    educationSubtitle,
    paragraph,
    professionalExperienceSubtitle,
    title,
  } = resume;
  const { translate } = useTranslation();

  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          link={url}
          linkText={here}
          paragraph={paragraph}
          section="resume"
          text={text}
          title={title}
        />

        <div className="row">
          <div className="col-lg-6">
            {animateLettersHelper(
              'education',
              translate(educationSubtitle),
              'h3'
            )}
            <ResumeItemContainer className="mt-2">
              <h4>{translate(education)}</h4>
              <h5>2011 - 2017</h5>
              <p>
                <em>Universidad Bicentenaria de Aragua, Venezuela</em>
              </p>
            </ResumeItemContainer>
            <ResumeItemContainer>
              <CoursesAndCertifications />
            </ResumeItemContainer>
          </div>
          <div className="col-lg-6">
            {animateLettersHelper(
              'experience',
              translate(professionalExperienceSubtitle),
              'h3'
            )}
            {professionalExperience.map(
              ({
                company,
                description,
                id,
                position,
                skillsUsed,
                tasks,
                yearFrom,
                yearTo,
              }) => (
                <ResumeItemContainer
                  className={id === 1 ? 'mt-2' : ''}
                  key={`resume_item_container_${id}`}
                >
                  <ResumeItem
                    company={company}
                    description={description}
                    key={`resume_item_${id}`}
                    position={translate(position)}
                    skillsUsed={skillsUsed}
                    tasks={tasks}
                    yearFrom={yearFrom}
                    yearTo={translate(yearTo) ? translate(yearTo) : yearTo}
                  />
                </ResumeItemContainer>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
