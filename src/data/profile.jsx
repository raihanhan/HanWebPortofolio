export const profile = {
  name: 'Habib Aulia Raihan',
  title: 'Fresh Graduate Informatika',
  headline: 'Full-stack developer | Data Analyst | Machine Learning Engineer',
  email: 'habibauliaraihan@gmail.com',
  about:
    'Saya Habib Aulia Raihan, lulusan Teknik Informatika yang membangun aplikasi web, mobile, dan eksperimen machine learning berbasis teks. Saya belum memiliki pengalaman kerja formal, tetapi saya aktif mengerjakan berbagai project personal, team project, serta publikasi ilmiah yang relevan untuk menunjukkan kemampuan teknis dan cara berpikir saya.',
  summary:
    'Lulusan baru Teknik Informatika dengan minat pada pengembangan aplikasi, analisis data, dan machine learning, khususnya pada problem berbasis data teks. Terbiasa bekerja secara sistematis dari tahap perancangan, pengembangan fitur, pengelolaan database, hingga eksperimen model untuk kebutuhan klasifikasi emosi dan sentiment analysis.',
  targets: [
    'Junior Full Stack Developer',
    'Data Analyst',
    'Entry-level Machine Learning role',
  ],
  quickFacts: [
    { label: 'Lokasi Penempatan', value: 'Yogyakarta, DKI Jakarta, Tangerang' },
    { label: 'Fokus', value: 'Web/Mobile, Data Analysis & Machine Learning' },
    { label: 'Pendidikan', value: 'S2 Informatika' },
    { label: 'Status', value: 'Open to Work' },
  ],
  values: [
    'Fokus pada solusi yang bisa dikerjakan dan diuji, bukan hanya konsep.',
    'Pernah terlibat dalam team project front-end maupun backend.',
    'Memiliki pengalaman publikasi dan implementasi sederhana dari hasil riset.',
    'Berminat untuk mempelajari stack baru sesuai kebutuhan project.',
  ],
  education: [
    {
      school: 'Universitas Ahmad Dahlan Yogyakarta',
      degree: 'S2 Informatika',
      period: '2024 — 2026',
      detail: 'IPK 3,95 · Konsentrasi Machine Learning',
      description:
        'Fokus pada machine learning dan riset klasifikasi emosi berbasis teks serta sentiment analysis.',
    },
    {
      school: 'STMIK El Rahma Yogyakarta',
      degree: 'S1 Informatika',
      period: '2020 — 2024',
      detail: 'IPK 3,61 · Data Mining, Web Service, Web Developer & Basis Data',
      description:
        'Fokus pada pengembangan aplikasi, basis data, serta pengolahan data untuk kebutuhan akademik dan project.',
    },
  ],
  publications: [
    'Model Klasifikasi Emosi Berbasis Teks — https://publikasiilmiah.unwahas.ac.id/JINRPL/article/view/12727',
    'Sentiment Analysis Model for VTuber Live Stream Chat — https://ejournal.pnc.ac.id/index.php/jinita/article/view/2872',
    'Peningkatan Literasi Keamanan dan Etika Berinternet — https://journal.upgripnk.ac.id/index.php/gervasi/article/view/9280',
  ],
  certifications: [
    {
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    thumbnail: '/certificates/mtcna.jpg',
    type: 'image',
  },
  {
    title: 'SIB X Kampus Merdeka Batch 4 Dicoding',
    issuer: 'Dicoding',
    thumbnail: '/certificates/msib.jpg',
    type: 'image',
  },
  ],
  skills: {
    programming: ['Python', 'JavaScript', 'PHP', 'Dart'],
    framework: ['Laravel', 'Node.js', 'React', 'Flutter', 'Gradio'],
    database: ['MySQL', 'PostgreSQL', 'Firebase'],
    ml: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'TF-IDF', 'SVM', 'Decision Tree', 'Orange'],
    soft: ['Adaptabilitas', 'Kerja sama tim', 'Kolaboratif', 'Suka belajar hal baru'],
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/habib-aulia-raihan/',
    github: 'https://github.com/raihanhan',
    cv: '/CV-ATS-Han.pdf',
  },
}

export const projects = [
  {
    title: 'E-commerce Alat Pertanian',
    type: 'Team Project',
    stack: ['JavaScript', 'HTML', 'CSS'],
    description:
      'Project kolaboratif untuk pengembangan aplikasi e-commerce alat pertanian. Ganti bagian ini dengan fitur utama, peran spesifik, dan hasil yang Anda capai.',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Sistem Peminjaman Barang dan Ruang',
    type: 'Team Project',
    stack: ['Laravel', 'MySQL'],
    description:
      'Contoh deskripsi untuk sistem peminjaman barang dan ruang. Tambahkan penjelasan fitur, arsitektur database, dan kontribusi backend Anda.',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Deteksi Emosi dan Sentimen Live Chat',
    type: 'Personal Project',
    stack: ['Python', 'Gradio'],
    description:
      'Project machine learning berbasis teks untuk klasifikasi emosi dan sentimen dari live chat. Tambahkan model, dataset, evaluasi, dan hasil implementasi.',
    demoUrl: '#',
    repoUrl: 'https://github.com/raihanhan/Live-Emotion-and-Sentimen-Detection',
  },
]
