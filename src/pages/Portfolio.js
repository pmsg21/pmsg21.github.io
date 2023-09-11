import { portfolio, portfolioItems } from '../data/portfolio';
import { SectionTitle } from '../components/shared';
import { PortfolioItem } from '../components/portfolio';
import { useTranslation } from '../hooks/useTranslation';

export const Portfolio = () => {
  const { translate } = useTranslation();
  const { paragraph, title } = portfolio;

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle paragraph={paragraph} section="portfolio" title={title} />

        <div className="row mt-30">
          {portfolioItems.map(
            ({
              id,
              imgName,
              projectCodeUrl,
              projectDescription,
              projectUrl,
              title,
            }) => (
              <PortfolioItem
                imgName={imgName}
                key={`portfolio_item_${id}`}
                projectCodeUrl={projectCodeUrl}
                projectDescription={translate(projectDescription)}
                projectUrl={projectUrl}
                title={translate(title)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
