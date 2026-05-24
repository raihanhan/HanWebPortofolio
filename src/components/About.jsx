export default function About({ profile }) {
  return (
    <section className="section" id="tentang">
      <div className="container">
        <div className="section-header reveal">
          <h2>Profil</h2>
        </div>

        <div className="intro-grid">
          <article className="section-card reveal">
            <span className="highlight-note">Tentang saya</span>
            <p className="spaced">{profile.summary}</p>
            <ul className="list" role="list">
              <li><strong>Posisi yang dicari:</strong> {profile.targets.join(', ')}.</li>
              <li><strong>Catatan penting:</strong> Belum memiliki pengalaman kerja formal,namun pengalaman saat ini didominasi oleh project akademik, personal, dan kolaboratif.</li>
              <li><strong>Kekuatan utama:</strong> Adaptif dengan lingkungan baru, mampu berkerja sama dalam tim, dan mau belajar hal baru.</li>
            </ul>
          </article>

          <aside className="section-card reveal">
            <h3>Nilai yang saya bawa</h3>
            <ul className="list" role="list">
              {profile.values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
