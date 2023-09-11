import { useLanguage } from '../../hooks/useLanguage';

export const SocialLink = ({ isTopLink, socialLink }) => {
  const { siteLanguage } = useLanguage();
  const { dataTip, href, name } = socialLink;

  return (
    <a
      aria-label={`go-to-${name}`}
      className={`${name} ${!isTopLink ? 'animate bottom-icon' : ''}`}
      data-tip={dataTip}
      href={typeof href === 'object' ? href[siteLanguage] : href}
      id={!isTopLink ? `${name}_link_bottom` : ''}
      rel="noreferrer"
      target="_blank"
    >
      <i
        className={`bx bxl-${name} ${isTopLink ? 'animate' : ''}`}
        id={`${isTopLink ? `${name}_link_top` : ''}`}
      ></i>
    </a>
  );
};
