import { useEffect, useState } from 'react'

function SkillBlock({ title, items }) {
  return (
    <article className="skill-block reveal">
      <h3>{title}</h3>
      <p>{items.join(', ')}</p>
    </article>
  )
}

function CertificationCard({ item, onOpen }) {
  return (
    <article className="skill-block certificate-card reveal">
      <button
        type="button"
        className="certificate-button"
        onClick={() => onOpen(item)}
        aria-label={`Lihat sertifikat ${item.title}`}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className="certificate-thumb"
        />
      </button>

      <h3>{item.title}</h3>
      <p>{item.issuer}</p>
    </article>
  )
}

function CertificateModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      className="certificate-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onClick={onClose}
    >
      <div
        className="certificate-modal-shell"
      >
        <div
          className="certificate-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="certificate-close"
            onClick={onClose}
            aria-label="Tutup preview sertifikat"
          >
            ×
          </button>

          <img
            src={item.thumbnail}
            alt={item.title}
            className="certificate-modal-image"
          />

          <div className="certificate-modal-meta">
            <h3 id="certificate-modal-title">{item.title}</h3>
            <p>{item.issuer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills({ profile }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <h2>Skill teknis</h2>
        </div>

        <div className="skill-columns">
          <SkillBlock title="Programming" items={profile.skills.programming} />
          <SkillBlock title="Framework & Tools" items={profile.skills.framework} />
          <SkillBlock title="Database" items={profile.skills.database} />
          <SkillBlock title="Machine Learning & Data" items={profile.skills.ml} />
        </div>

        <div className="divider" />

        <div className="section-header reveal">
          <h2>Sertifikasi</h2>
        </div>

        <div className="certification-grid">
          {profile.certifications.map((item) => (
            <CertificationCard
              key={item.title}
              item={item}
              onOpen={setSelectedCertificate}
            />
          ))}
        </div>

        <div className="divider" />

        <div className="skill-columns">
          <SkillBlock title="Soft Skills" items={profile.skills.soft} />
        </div>
      </div>

      <CertificateModal
        item={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  )
}