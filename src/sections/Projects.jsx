import { useInView } from 'react-intersection-observer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  })



  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div
          ref={ref}
          className={`grid-responsive ${inView ? 'animate-fadeIn' : ''}`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-item delay-${index * 100}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects