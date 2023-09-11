import { coursesAndCertifications, resume } from '../../data/resume';
import { useLanguage } from '../../hooks/useLanguage';
import { CoursesAndCertificationsItem } from './';

export const CoursesAndCertifications = () => {
  const { siteLanguage } = useLanguage();
  const { coursesAndCertificationsTitle } = resume;

  return (
    <>
      <h4>{coursesAndCertificationsTitle[siteLanguage]}</h4>
      <ul>
        {coursesAndCertifications
          .sort((a, b) => b.id - a.id)
          .map(({ id, name, institute, link }) => (
            <CoursesAndCertificationsItem
              key={`course_and_certification_${id}`}
              courseName={name[siteLanguage]}
              institute={institute}
              link={link}
            />
          ))}
      </ul>
    </>
  );
};
