import React from 'react';
import './PrincipalSection.css';

const PrincipalSection = () => {
  return (
    <section className="principal-section">
      <div className="section-container">
        <div className="principal-grid">
          <div className="principal-image-container">
            <img 
              src="img/director.jpg" 
              alt="Principal" 
              className="principal-image"
            />
            <div className="principal-info">
              <h3>Principal's Desk</h3>
              <p>Academic Leadership</p>
            </div>
          </div>

          <div className="principal-content">
            <h2>From The Principal</h2>
            <div className="principal-message">
              <p>Dear Students and Parents,</p>
              <p>
                As we step into this new academic year, filled with hope and dreams of scaling new heights, 
                I wish to reiterate the importance of few things that we have to keep in mind. Parents should 
                remember that children should not be forced, but should be guided to achieve whatever goals 
                they may have in their minds in an easy and pleasing manner, so that we may be able to discover 
                the particular touch of genius in each one of them.
              </p>
              <p>
                The purpose of education is to teach our children to think and develop a capacity to reason out facts. 
                Students should keep in mind the importance of planning and prioritizing their time and the effective 
                use of it which are essential to achieve success.
              </p>
              <p>
                Students should always think and review – discover the cause and effect of every event, in which 
                they are involved. Do not surrender or become a slave to youthful fancies and indulgences. Be steady 
                in your studies. Learn to enjoy hard work – particularly your studies. Think wisely, think systematically. 
                Always prepare yourself for next day's lesson. Be very serious and attentive in class.
              </p>
              <p>
                Together, we will continue to build a community of learners who are not only academically excellent 
                but also compassionate, responsible, and prepared for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
