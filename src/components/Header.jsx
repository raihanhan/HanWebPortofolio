export default function Header({ theme, onToggle }) {
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#beranda" aria-label="Habib Aulia Raihan home">
          <svg className="logo" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="40" height="40" rx="12" stroke="currentColor" strokeWidth="3" />
            <path d="M15 32V16H19V22H29V16H33V32H29V25.5H19V32H15Z" fill="currentColor" />
          </svg>
          <span>Habib Aulia Raihan</span>
        </a>

        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#project">Project</a>
          <a href="#pendidikan">Pendidikan</a>
          <a href="#kontak">Kontak</a>
          <button className="theme-toggle" type="button" onClick={onToggle} aria-label="Ganti mode warna">
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
