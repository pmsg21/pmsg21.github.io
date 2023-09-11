import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SkillTool = ({ dataTip, icon }) => {
  return (
    <div className="col-lg-2 col-4 mb-3 text-center">
      <FontAwesomeIcon data-tip={dataTip} icon={icon} />
    </div>
  );
};
