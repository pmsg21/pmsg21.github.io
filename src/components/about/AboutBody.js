import { about } from '../../data/about';
import { useAnimateLetters } from '../../hooks/useAnimateLetters';
import { useTranslation } from '../../hooks/useTranslation';

export const AboutBody = () => {
  const {
    age: { text: ageText, value: ageValue },
    birthday: { text: birthdayText, value: birthdayValue },
    country: { text: countryText, value: countryValue },
    degree: { text: degreeText, value: degreeValue },
    position,
    quote,
    secondParagraph,
    thirdParagraph,
  } = about;
  const { animateLettersHelper } = useAnimateLetters();
  const { translate } = useTranslation();

  return (
    <div className="row">
      <div className="col-lg-4">
        <img
          src="/assets/img/profile-img.jpg"
          className="img-fluid w-75 d-block m-auto profile-img"
          alt="profile-img"
        />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        {animateLettersHelper('position', translate(position), 'h3')}
        <p className="font-italic">{translate(quote)}</p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="icofont-rounded-right"></i>
                <b>{translate(birthdayText)}:</b> {translate(birthdayValue)}
              </li>
              <li>
                <i className="icofont-rounded-right"></i>
                <b>{translate(countryText)}:</b> {countryValue}
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="icofont-rounded-right"></i>
                <b>{translate(ageText)}:</b> {ageValue}
              </li>
              <li>
                <i className="icofont-rounded-right"></i>
                <b>{translate(degreeText)}:</b> {translate(degreeValue)}
              </li>
            </ul>
          </div>
        </div>
        <p className="text-justify">{translate(secondParagraph)}</p>
        <p className="text-justify">{translate(thirdParagraph)}</p>
      </div>
    </div>
  );
};
