import { testimonialsSectionData } from '../../data/home';
import './TestimonialsSection.css';

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-section__container container">
        <h2 className="testimonials-section__title">
          {testimonialsSectionData.title}
        </h2>
        <div className="testimonials-section__grid">
          {testimonialsSectionData.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials-section__item">
              <p className="testimonials-section__text">"{testimonial.text}"</p>
              <div className="testimonials-section__author">
                <img 
                  src={testimonial.author.avatar} 
                  alt={testimonial.author.name}
                  className="testimonials-section__avatar"
                />
                <div className="testimonials-section__author-info">
                  <div className="testimonials-section__author-name">{testimonial.author.name}</div>
                  <div className="testimonials-section__author-position">{testimonial.author.position} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
