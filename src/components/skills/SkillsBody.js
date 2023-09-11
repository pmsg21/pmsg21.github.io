import { skills, skillsLanguages, workflowItems } from '../../data/skills';
import { SkillsListItem } from './';
import { SkillTools } from './';
import { useAnimateLetters } from '../../hooks/useAnimateLetters';
import { useTranslation } from '../../hooks/useTranslation';

export const SkillsBody = () => {
  const { animateLettersHelper } = useAnimateLetters();
  const { developmentSubtitle, languagesSubtitle } = skills;
  const { translate } = useTranslation();

  return (
    <div className="skills-content row">
      <div className="col-lg-6 development-container">
        {animateLettersHelper(
          'development',
          translate(developmentSubtitle),
          'h4'
        )}
        <SkillTools />
      </div>
      <div className="col-lg-6 mt-lg-0 mt-4 mt-sm-4">
        <div className="row">
          <div className="col-lg-12 col-6">
            {animateLettersHelper('workflow', 'Workflow', 'h4')}
            <ul className="list-unstyled">
              {workflowItems.map(({ id, text }) => (
                <SkillsListItem key={`workflow_item_${id}`} text={text} />
              ))}
            </ul>
          </div>
          <div className="col-lg-12 col-6">
            {animateLettersHelper(
              'languages',
              translate(languagesSubtitle),
              'h4'
            )}
            <ul className="list-unstyled">
              {skillsLanguages.map(({ id, text }) => (
                <SkillsListItem key={`skills_language_${id}`} text={text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
