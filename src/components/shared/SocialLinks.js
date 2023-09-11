import { socialLinks } from '../../data/shared';
import { SocialLink } from './';

export const SocialLinks = ({ isTopLink }) => {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink) => (
        <SocialLink
          key={`social_link_${socialLink.id}_${isTopLink ? 'top' : 'bottom'}`}
          isTopLink={isTopLink}
          socialLink={socialLink}
        />
      ))}
    </div>
  );
};
