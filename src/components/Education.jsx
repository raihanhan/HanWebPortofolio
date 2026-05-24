export default function Education({ profile }) {
  return (
    <section className="section" id="pendidikan">
      <div className="container">
        <div className="section-header reveal">
          <h2>Pendidikan dan publikasi</h2>
        </div>

        <div className="education-grid">
          <div className="timeline reveal">
            {profile.education.map((item) => (
              <article className="timeline-card" key={item.school}>
                <div className="timeline-top">
                  <div>
                    <h3>{item.school}</h3>
                    <p className="small">{item.degree} · {item.detail}</p>
                  </div>
                  <span className="tag">{item.period}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="timeline reveal">
            <article className="timeline-card">
              <h3>Publikasi ilmiah</h3>
              <ul className="list" role="list">
                {profile.publications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
