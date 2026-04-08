import React from 'react';
import './StudentLifePage.css';

const StudentLifePage = () => {
  const activities = [
    {
      icon: '🏹',
      title: 'Archery',
      text: 'Our dedicated archery range gives students a rare opportunity to develop focus, discipline, and precision — skills that serve them far beyond the range.'
    },
    {
      icon: '🎯',
      title: 'Shooting',
      text: 'One of our signature programmes, shooting teaches students composure, concentration, and the quiet confidence that comes from mastering a demanding sport.'
    },
    {
      icon: '🏊',
      title: 'Swimming',
      text: 'Our swimming programme ensures that every student graduates with a life skill that builds fitness, confidence, and safety awareness in and around water.'
    },
    {
      icon: '🤖',
      title: 'Robotics',
      text: 'In our robotics lab, students design, build, and programme their own machines — sparking creativity and a love for engineering and technology.'
    },
    {
      icon: '🎤',
      title: 'Public Speaking',
      text: 'Through structured debate, declamation, and presentation sessions, students find their voice, build confidence, and learn to communicate with clarity and conviction.'
    },
    {
      icon: '🎨',
      title: 'Art & Clay Modelling',
      text: 'Visual and performing arts are woven into everyday school life. From clay modelling to painting, students express creativity and develop fine motor skills.'
    },
    {
      icon: '⚽',
      title: 'Sports & Athletics',
      text: 'A full sports complex supports football, cricket, kabaddi, and athletics. Regular inter-house and inter-school competitions build team spirit and sportsmanship.'
    },
    {
      icon: '🎵',
      title: 'Music & Performing Arts',
      text: 'Students participate in school productions, music performances, and cultural events that celebrate Indian traditions while exploring global artistic forms.'
    }
  ];

  const houses = [
    { name: 'Ganga House', color: '#1565C0', bg: '#E3F2FD', icon: '🔵', values: 'Courage · Honour · Service' },
    { name: 'Yamuna House', color: '#2E7D32', bg: '#E8F5E9', icon: '🟢', values: 'Integrity · Discipline · Growth' },
    { name: 'Saraswati House', color: '#F9A825', bg: '#FFFDE7', icon: '🟡', values: 'Wisdom · Creativity · Knowledge' },
    { name: 'Himalaya House', color: '#C62828', bg: '#FFEBEE', icon: '🔴', values: 'Excellence · Resilience · Pride' }
  ];

  const values = [
    { num: '01', title: 'Respect for All', text: 'We teach students to treat every person — teacher, peer, or staff — with courtesy, empathy, and genuine respect.' },
    { num: '02', title: 'Responsibility', text: 'Students are encouraged to own their actions, complete their commitments, and contribute meaningfully to their community.' },
    { num: '03', title: 'Creativity', text: 'We celebrate original thinking. Students are encouraged to question, imagine, and express themselves through academics and the arts.' },
    { num: '04', title: 'Resilience', text: 'Life presents challenges. We help students develop the grit, adaptability, and positivity to overcome obstacles and keep growing.' }
  ];

  const events = [
    { icon: '🇮🇳', title: 'Independence Day & Republic Day', text: 'Grand flag-hoisting ceremonies, cultural performances, and patriotic presentations mark our national celebrations with pride.' },
    { icon: '🎄', title: 'Annual Day', text: 'Our most anticipated event of the year — a full-day celebration of student talent, with performances across dance, drama, music, and more.' },
    { icon: '🏅', title: 'Sports Day', text: 'Inter-house competitions across track events, field games, and team sports, culminating in a prize ceremony that celebrates effort and achievement.' },
    { icon: '📚', title: 'Science & Quiz Fest', text: 'Students showcase projects, compete in quizzes, and demonstrate experiments — nurturing scientific temper and intellectual curiosity.' },
    { icon: '🎊', title: 'Diwali & Cultural Festivals', text: 'India\'s festivals are celebrated with great enthusiasm — from Diwali rangoli competitions to Holi and Eid, every celebration brings the school community together.' },
    { icon: '🏫', title: 'Parent-Teacher Meets', text: 'Regular structured PTMs ensure open dialogue between families and teachers — a cornerstone of our collaborative approach to education.' }
  ];

  return (
    <div className="student-life-page">

      {/* Hero */}
      <div className="sl-hero">
        <img
          src="img/476831564_941790714744524_1521817662912512543_n.jpg"
          alt="Students at DPS Robertsganj"
          className="sl-hero-bg-img"
        />
        <div className="sl-hero-overlay" />
        <div className="section-container sl-hero-content">
          <div className="section-label">Student Life</div>
          <h1 className="sl-hero-title">Beyond the Classroom</h1>
          <p className="sl-hero-sub">
            At DPS Robertsganj, school life is about far more than lessons and exams. It is
            where friendships are formed, passions are discovered, and the character that will
            define a lifetime is quietly, steadily built.
          </p>
        </div>
      </div>

      {/* Section 1: Intro split */}
      <section className="sl-section bg-white">
        <div className="section-container">
          <div className="sl-intro-grid">
            <div className="sl-intro-image-col">
              <img
                src="img/475532388_934694108787518_3459762227827062139_n.jpg"
                alt="Young students learning"
                className="sl-intro-photo"
              />
            </div>
            <div className="sl-intro-text-col">
              <div className="section-label">Holistic Development</div>
              <h2 className="section-title">Where Every Child<br />Finds Their Calling</h2>
              <p className="section-description">
                We believe that a child's true potential is revealed not only in the classroom,
                but on the sports field, the stage, and in every moment of creative exploration.
                Our co-curricular programme is as carefully designed as our academic one.
              </p>
              <p className="sl-intro-extra">
                From specialist life skills like archery and robotics, to cultural celebrations
                and house competitions — every programme is crafted to help students discover
                what they love and grow into who they are meant to be.
              </p>
              <div className="sl-intro-tags">
                <span className="sl-tag">Sports</span>
                <span className="sl-tag">Arts</span>
                <span className="sl-tag">Technology</span>
                <span className="sl-tag">Leadership</span>
                <span className="sl-tag">Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Activities Grid */}
      <section className="sl-section bg-light">
        <div className="section-container">
          <div className="section-header-center">
            <div className="section-label">Life Skills & Co-Curricular</div>
            <h2 className="section-title">Activities & Programmes</h2>
            <p className="section-description">
              Our diverse programme of activities ensures that every student finds something
              they love — building skills, friendships, and memories along the way.
            </p>
          </div>

          <div className="sl-activities-grid">
            {activities.map((act, i) => (
              <div key={i} className="sl-activity-card">
                <div className="sl-activity-icon">{act.icon}</div>
                <h3 className="sl-activity-title">{act.title}</h3>
                <p className="sl-activity-text">{act.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: House System */}
      <section className="sl-section bg-dots">
        <div className="section-container">
          <div className="section-header-center">
            <div className="section-label">School Houses</div>
            <h2 className="section-title">The House System</h2>
            <p className="section-description">
              Every student belongs to one of our four school houses. Houses compete across
              academics, sports, and cultural events — building team spirit, leadership, and
              a sense of belonging from the very first day.
            </p>
          </div>

          <div className="sl-houses-grid">
            {houses.map((house, i) => (
              <div key={i} className="sl-house-card" style={{ '--house-color': house.color, '--house-bg': house.bg }}>
                <div className="sl-house-icon">{house.icon}</div>
                <h3 className="sl-house-name" style={{ color: house.color }}>{house.name}</h3>
                <p className="sl-house-values">{house.values}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Events & Celebrations */}
      <section className="sl-section bg-white">
        <div className="section-container">
          <div className="section-header-left">
            <div className="section-label">School Calendar</div>
            <h2 className="section-title">Events & Celebrations</h2>
            <p className="section-description">
              Life at DPS Robertsganj is rich with events that celebrate learning, culture,
              and the spirit of togetherness. Every occasion is an opportunity to create
              memories that last a lifetime.
            </p>
          </div>

          <div className="sl-events-grid">
            {events.map((ev, i) => (
              <div key={i} className="sl-event-card">
                <div className="sl-event-icon">{ev.icon}</div>
                <div>
                  <h3 className="sl-event-title">{ev.title}</h3>
                  <p className="sl-event-text">{ev.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Values */}
      <section className="sl-section bg-green-tint">
        <div className="section-container">
          <div className="section-header-center">
            <div className="section-label">Character Education</div>
            <h2 className="section-title">Values We Build Together</h2>
            <p className="section-description">
              Academic skills open doors, but character determines what a person does once
              they walk through them. These are the values we nurture in every student,
              every day.
            </p>
          </div>

          <div className="sl-values-grid">
            {values.map((v, i) => (
              <div key={i} className="sl-value-card">
                <div className="sl-value-num">{v.num}</div>
                <h3 className="sl-value-title">{v.title}</h3>
                <p className="sl-value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default StudentLifePage;
