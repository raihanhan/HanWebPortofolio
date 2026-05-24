export default function Hero({ profile }) {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-grid">
        <div className="reveal">
          <span className="eyebrow">Fresh Graduate · Informatika</span>
          <h1>{profile.headline}</h1>
          <p>{profile.about}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#project">Lihat project unggulan</a>
            <a className="btn btn-secondary" href="#kontak">Hubungi saya</a>
          </div>
        </div>

        <aside className="hero-card reveal" aria-label="Ringkasan profil">
          <img
            className="profile-photo"
            src="/assets/foto-profile.png"
            alt="Foto profil Habib Aulia Raihan"
            width="720"
            height="900"
            loading="eager"
          />
          <div className="quick-facts">
            {profile.quickFacts.map((item) => (
              <div className="fact" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
