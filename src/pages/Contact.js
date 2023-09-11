import { contact } from '../data/contact';
import { ContactForm, ContactInfo } from '../components/contact';
import { SectionTitle } from '../components/shared';

export const Contact = () => {
  const { title } = contact;

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle section="contact" title={title} />
        <div className="row mt-1">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
