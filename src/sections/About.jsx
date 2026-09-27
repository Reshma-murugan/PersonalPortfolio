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
          name: 'Python',
          icon: (
            <img
              src="https://img.icons8.com/?size=100&id=13441&format=png"
              alt="Python"
              width="24"
              height="24"
            />
          )
        },
        {
          name: 'Django',
          icon: (
            <img
              src="https://img.icons8.com/color/48/django.png"
              alt="Django"
              width="24"
              height="24"
            />
          )
        },
        {
          name: 'Java',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
              width="24"
              height="24"
            />
          )
        },
        {
          name: 'Spring Boot',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring Boot"
              width="24"
              height="24"
            />
          )
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
              As an Engineering graduate and an enthusiastic full-stack developer, I’m eager to begin my career creating immersive and reliable web applications. I have a strong foundation in front-end technologies such as HTML, CSS, JavaScript, and React, along with back-end skills in Java, Spring&nbsp;Boot, Python, and Django, as well as database management.
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