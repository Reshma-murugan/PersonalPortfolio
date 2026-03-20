import { useInView } from 'react-intersection-observer'
import './sections.css'

const About = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 500
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      categoryIcon: (

        <img
          src="https://img.icons8.com/?size=100&id=sXm12ie1GUjg&format=png&color=000000"
          alt="Frontend Development" />


      ),
      skills: [
        {
          name: 'HTML5',
          icon: <svg viewBox="0 0 128 128" fill="currentColor"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" /><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" /><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" /><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" /></svg>
        },
        {
          name: 'CSS3',
          icon: <svg viewBox="0 0 128 128" fill="currentColor"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" /><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" /><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" /><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" /><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" /><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" /></svg>
        },
        {
          name: 'JavaScript',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=k0mhEXozIpG1&format=png"
              alt="JavaScript"
              width="150"
              height="150"
            />
          )
        },
        {
          name: 'React',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
              alt="React Icon"
              width="60"
              height="60"
            />
          )
        },
        {
          name: 'Responsive Design',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=KjPwn6Tz1iuz&format=png&color=000000"
              alt="Responsive Design"
              width="40"
              height="40"
            />
          )
        }
      ]
    },
    {
      title: 'Backend Development',
      categoryIcon: (
        <img
              src="https://img.icons8.com/?size=100&id=Ujhf0HU7XkM4&format=png&color=000000"
              alt="Backend Development"
              
            />
      ),
      skills: [
        {
          name: 'Java',
          icon: <svg viewBox="0 0 128 128" fill="currentColor"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" /><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" /><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" /><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" /><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" /></svg>
        },
        {
          name: 'Spring Boot',
          icon: <svg viewBox="0 0 128 128" fill="currentColor"><path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f" /></svg>
        },
        {
          name: 'REST APIs',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=121837&format=png&color=000000"
              alt="REST APIs"
              width="60"
              height="60"
            />
          )
        },
        {
          name: 'MySQL',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
              alt="MySQL"
              width="60"
              height="60"
            />
          )
        }
      ]
    },
    {
      title: 'Tools & Technologies',
      categoryIcon: (
        <img
          src="https://img.icons8.com/?size=100&id=42401&format=png&color=000000"
          alt="Tools & Technologies"
          width="60"
          height="60"
        />
      ),
      skills: [
        {
          name: 'Git',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
              alt="Git"
              width="60"
              height="60"
            />
          )
        },
        {
          name: 'GitHub',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
              alt="GitHub"
              width="60"
              height="60"
            />
          )
        },
        {
          name: 'Microsoft Word',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=117563&format=png&color=000000"
              alt="Microsoft Word"
              width="60"
              height="60"
            />)
        },
        {
          name: 'Microsoft Excel',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=13654&format=png&color=000000"
              alt="Microsoft Excel"
              width="60"
              height="60"
            />)
        },
        {
          name: 'PowerPoint',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=117557&format=png&color=000000"
              alt="PowerPoint"
              width="60"
              height="60"
            />)
        }
      ]
    }
  ]

  const education = {
    degree: "BE Computer Science and Engineering",
    institution: "PET Engineering College, Anna University",
    duration: "2021 - 2025",
    cgpa: "8.19/10"
  }

  const highlights = [
    { title: 'Design-Focused:', content: ' I enjoy crafting visually appealing and intuitive interfaces.' },
    { title: 'Technically Driven:', content: ' I write clean, efficient, and maintainable code.' },
    { title: 'User-Centered:', content: ' I always prioritize user needs to deliver meaningful experiences.' }
  ]

  return (
    <section id="about" className="about">
      <div ref={contentRef} className="container">
        <div className={`section-header ${contentInView ? 'animate-fadeIn' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Passionate software engineer with a focus on building robust and scalable applications.
          </p>
        </div>

        <div className={`about-content ${contentInView ? 'fade-in' : ''}`}>
          <div className="about-summary">
            <p className={`about-text ${contentInView ? 'animate-zoomEntrance' : ''}`} style={{ animationDelay: '300ms' }}>
              As a recent graduate and an enthusiastic full-stack developer, I’m eager to begin my career creating immersive and reliable web applications. I have a strong foundation in front-end technologies such as HTML, CSS, JavaScript, and React, along with back-end skills in Java and database management.
            </p>

            <div className="about-info-row">
              <div className={`about-highlights animate-fadeIn`} style={{ animationDelay: '400ms' }}>
                {highlights.map((item, index) => (
                  <div key={index} className="highlight-item animate-fadeIn" style={{ animationDelay: `${500 + (index * 100)}ms` }}>
                    <span className="highlight-title">{item.title}</span>
                    {item.content}
                  </div>
                ))}
              </div>

              <div className={`about-card animate-fadeIn`} style={{ animationDelay: '800ms' }}>
                <h3 className="about-card-title">Education</h3>
                <div className="about-details">
                  <p className="about-detail">
                    <span className="detail-label">Degree:</span> {education.degree}
                  </p>
                  <p className="about-detail">
                    <span className="detail-label">Institution:</span> {education.institution}
                  </p>
                  <p className="about-detail">
                    <span className="detail-label">Duration:</span> {education.duration}
                  </p>
                  <p className="about-detail">
                    <span className="detail-label">CGPA:</span> {education.cgpa}
                  </p>
                </div>
              </div>
            </div>

            <div className="about-actions animate-fadeIn" style={{ animationDelay: '1000ms' }}>
              <a href="#contact" className="button button-primary">
                Contact Me
              </a>
              <a href="/Reshma_CV.pdf" download className="button button-secondary">
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Technical Skills</h3>
          <div ref={skillsRef} className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`skill-category-card ${skillsInView ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    {category.categoryIcon}
                  </div>
                  <h4 className="category-title">{category.title}</h4>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill-list-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About