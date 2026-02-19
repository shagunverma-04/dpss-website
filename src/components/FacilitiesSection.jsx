import React from 'react';
import './FacilitiesSection.css';

const FacilitiesSection = () => {
  const facilities = [
    {
      image: 'img/476831564_941790714744524_1521817662912512543_n.jpg',
      title: 'Sports Complex',
      description: 'One of the largest sports facilities with Cricket, Football, Hockey, Tennis courts, and Athletic tracks.'
    },
    {
      image: 'img/477798227_941798504743745_5546827519590064483_n.jpg',
      title: 'Smart Classrooms',
      description: 'Wi-Fi enabled campus with multimedia desktops and LCD monitors in every classroom.'
    },
    {
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&q=90',
      title: 'Modern Library',
      description: 'Extensive collection of books and digital resources to foster a love for reading and research.'
    },
    {
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop&q=90',
      title: 'Science Labs',
      description: 'Well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science.'
    }
  ];

  return (
    <section className="facilities-section">
      <div className="section-container">
        <div className="section-header-center">
          <div className="section-label">Our Facilities</div>
          <h2 className="section-title">World-Class Infrastructure</h2>
          <p className="section-description">
            We provide state-of-the-art facilities designed to nurture academic excellence, 
            physical development, and creative expression.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card">
              <div className="facility-image">
                <img src={facility.image} alt={facility.title} />
              </div>
              <div className="facility-content">
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
