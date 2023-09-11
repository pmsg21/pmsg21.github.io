import { skillTools } from '../../data/skills';
import { SkillTool } from './';

export const SkillTools = () => {
  return (
    <div className="row mt-lg-2 mt-4 mt-sm-4">
      {skillTools.map((skillTool) => (
        <SkillTool key={`skill_tool_${skillTool.id}`} {...skillTool} />
      ))}
    </div>
  );
};
