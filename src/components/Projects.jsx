export default function Projects({ projects }) {
  return (
    <section className="section" id="project">
      <div className="container">
        <div className="section-header reveal">
          <h2>Project unggulan</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-meta">
                <span className="tag">{project.type}</span>
                <span className="tag">{project.stack.join(' · ')}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo project</a>
                <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
