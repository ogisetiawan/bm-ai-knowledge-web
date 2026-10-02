# 🚧 Future Improvements

Potential library or feature for this projects:

* [ ] landingpage/Features Section 
    - 🔍 Smart Search	Cari produk berdasarkan nama, formula, ingredient, atau aplikasi
    - 📄 Document Summary	Ringkas TDS/SDS panjang jadi poin-poin penting
    - ⚖️ Product Comparison	Bandingkan 2 produk atau cari produk ekuivalen
    - 🌐 Translation	Terjemahkan dokumen teknis ke bahasa lain
    - 🧪 Regulatory Info	Cek regulasi & compliance per negara
    - 📋 Policy & SOP Search	Cari prosedur internal, kebijakan HR, SOP
* [ ] landingpage/Use Cases Sections Section 
    - Sales	"Produk apa yang cocok untuk aplikasi weight management?"
    - R&D	"Apa komposisi dan formula GANOCALM?"
    - Regulatory	"Apa syarat SDS untuk ekspor ke Thailand?"
    - HR	"Apa prosedur klaim perjalanan dinas?"
    - Customer Service	"Bagaimana cara menangani komplain customer?"
* [ ] landingpage/FAQ Section
    - Apakah data saya aman?	Ya, semua data diproses di server internal BM
    - Dokumen apa saja yang bisa dicari?	TDS, SDS, brosur, SOP, kebijakan perusahaan
    - Apakah AI bisa salah?	AI bisa keliru — selalu verifikasi dengan sumber asli
    - Bagaimana cara login?	Gunakan akun SSO Behn Meyer
    - Apakah bisa diakses dari mobile?	Ya, via browser (responsive)
    - Bagaimana jika AI tidak tahu jawabannya?	AI akan bilang "tidak ditemukan" — bukan mengarang
* [ ] landingpage/add footer
* [ ] landingpage/wireframe
┌─────────────────────────────────────────────────────────┐
│  LOGO   Home  Features  Use Cases  FAQ      [Sign In]  │ ← Header
├─────────────────────────────────────────────────────────┤
│                                                         │
│              BM Knowledge Assistant                     │ ← Hero
│      Cari informasi produk, SDS/TDS, dan SOP            │
│              dengan AI.                                 │
│                                                         │
│         [🔵 Sign In]   [⚪ Learn More]                  │
│                                                         │
│     ┌─────────────────────────────────────┐            │
│     │  Ask anything...              [↑]   │            │ ← Input
│     └─────────────────────────────────────┘            │
│     • Cari TDS produk X                                │
│     • Bandingkan produk A vs B                         │
│     • Apa SOP klaim perjalanan?                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                    ✨ Features                          │ ← Features
│  [🔍 Search] [📄 Summary] [⚖️ Compare] [🌐 Translate]  │
│  [🧪 Regulatory] [📋 Policy]                           │
├─────────────────────────────────────────────────────────┤
│                  🔄 How It Works                        │ ← Flow
│     1. Tanya  →  2. AI Cari  →  3. Jawaban + Sumber    │
├─────────────────────────────────────────────────────────┤
│                    💼 Use Cases                         │ ← Use Cases
│  [Sales] [R&D] [Regulatory] [HR] [Customer Service]    │
├─────────────────────────────────────────────────────────┤
│              🔒 Trust & Compliance                      │ ← Trust
│  Data di Server BM | RBAC | Sumber Terverifikasi        │
├─────────────────────────────────────────────────────────┤
│                       ❓ FAQ                            │ ← FAQ
│  Accordion 6 pertanyaan umum                           │
├─────────────────────────────────────────────────────────┤
│  Footer: Produk | Dukungan | Legal | Kontak            │ ← Footer
└─────────────────────────────────────────────────────────┘
* [x] components/ai-disclaimer ( AI responses may contain errors. Always verify with source documents. )
* [x] components/source-cititation.tsx ( Buat komponen citation clickable )
* [x] components/feedback-buttons.tsx ( https://www.prompt-kit.com/docs/feedback-bar )
* [x] components/regenerate answer ( from ai )
* [x] components/Copy answer button
* [x] components/Chain of Thought when ask
* [ ] components/edit ask ( from user )
* [ ] responsive container chat
* [ ] components/scroll button on history convertation detail
* [ ] page/404 notfound 
* [ ] Responsive Design (mobile-friendly)
* [ ] Web Native Desktop PWAs (service-worker)
* [ ] ingore SEO, update robot.txt
* [ ] library/Playwright
* [ ] library/vinext
