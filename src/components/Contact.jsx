export default function Contact({ profile }) {
  return (
    <section className="section" id="kontak">
      <div className="container">
        <div className="section-header reveal">
          <h2>Kontak</h2>
        </div>

        <div className="contact-grid">
          <article className="contact-card reveal">
            <h3>Hubungi saya</h3>
            <p>Recruiter atau tim hiring dapat menghubungi saya untuk peluang kerja entry-level, internship, atau project yang relevan dengan web/mobile development, data analysis, dan machine learning.</p>
            <div className="contact-list">
              <div className="contact-item"><span className="muted">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div className="contact-item"><span className="muted">LinkedIn</span><a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/habib-aulia-raihan/</a></div>
              <div className="contact-item"><span className="muted">GitHub</span><a href={profile.links.github} target="_blank" rel="noopener noreferrer">https://github.com/raihanhan</a></div>
              <div className="contact-item">
              <span className="muted">CV</span>
              <a href={profile.links.cv} download="CV-ATS-Han.pdf">
                Download CV
              </a>
            </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
