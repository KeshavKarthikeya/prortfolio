# Keshav Karthikeya — Personal Portfolio

## About

Personal portfolio website for **Andamdas Keshav Karthikeya**, a second-year B.Tech Computer Science & Engineering (Cyber Security) student at Geethanjali College of Engineering and Technology, Hyderabad (2024–2028).

Built with pure HTML5, CSS3 and JavaScript — no frameworks, no dependencies.

---

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Name, role, location and call-to-action buttons |
| **About** | Professional summary, college details, strength badges |
| **Technical Skills** | HTML5, CSS3, JavaScript, Python, Java, Git & GitHub |
| **Projects** | Sentinel AI, Smart Bluetooth Pendrive, QR Attendance System |
| **Experience & Achievements** | Internship, hackathon win, Kaggle certification |
| **Contact** | Phone, email, location and contact form |

---

## Projects Showcased

### Sentinel AI
Mobile Security & Privacy Engine (Android / Kotlin / Google ML Kit)
- Real-time QR-based malicious URL detection using on-device ML Kit inference
- Dynamic Risk Evaluation Engine for continuous security monitoring and scoring

### Smart Bluetooth Pendrive
Wireless file transfer device (ESP32-CAM / WiFi / Web Server / C)
- Won **1st Prize** at ROBOGEN 5-Day Hackathon — IEEE Club, Geethanjali College
- ESP32-CAM hosts its own WiFi network; no app or USB required

### Quick Attend — QR Attendance System
Smart attendance management (QR Code / JavaScript / SQLite / Face Recognition)
- Faculty generate unique session QR codes; students scan and verify identity
- Real-time database updates, automated reporting, prevents proxy attendance

---

## Features

- ✅ Fully responsive — Mobile, Tablet and Desktop
- ✅ Smooth mobile navigation with burger menu
- ✅ Sticky frosted-glass navbar on scroll
- ✅ Professional dark hero with parallax background
- ✅ Vertical timeline for Experience & Achievements
- ✅ Animated project cards with hover zoom
- ✅ Contact form with native browser validation
- ✅ Semantic HTML5 and accessibility-friendly markup
- ✅ CSS custom properties (design tokens via `variables.css`)
- ✅ Smooth scroll and micro-animations

---

## Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Grid, Custom Properties)
- JavaScript (vanilla)
- Google Fonts — Inter
- Git & GitHub

---

## Folder Structure

```
week1-portfolio/
├── index.html            ← Main page (all sections)
├── css/
│   ├── variables.css     ← Design tokens (colors, fonts, spacing)
│   ├── style.css         ← Base styles and component styles
│   └── responsive.css    ← Breakpoints: 992px, 768px, 480px
├── js/
│   └── navigation.js     ← Mobile menu toggle + scroll-aware header
├── images/
│   ├── profile.png       ← Profile photo
│   ├── hero-bg.png       ← Hero section background
│   ├── project1.jpeg     ← Sentinel AI thumbnail
│   ├── project2.jpeg     ← Smart Bluetooth Pendrive thumbnail
│   ├── project3.jpeg     ← QR Attendance System thumbnail
│   └── icons/            ← Skill icons (html5, css3, javascript, python, java, github)
└── README.md
```

---

## Setup — Run Locally

**Prerequisites:** A modern browser (Chrome, Firefox, Edge, Safari)

**Option 1 — Open directly:**
```bash
open index.html
# or just double-click index.html
```

**Option 2 — Python simple server (recommended):**
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

**Option 3 — Node http-server:**
```bash
npx http-server -p 8000
# Open http://localhost:8000
```

**Option 4 — VS Code Live Server:**
Right-click `index.html` → *Open with Live Server*

---

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `max-width: 992px` | Tablet |
| `max-width: 768px` | Mobile phones |
| `max-width: 480px` | Small phones (375px and below) |

Key mobile behaviours:
- Burger menu replaces horizontal nav links
- Hero uses `min-height: 100svh` for notched phones
- About image and text stack vertically
- Skills grid switches to 2 columns
- Project cards go single column
- Timeline shrinks gracefully
- Contact info and form stack vertically
- Long email address wraps with `word-break: break-word`

---

## Browser Testing

| Browser | Status |
|---|---|
| Chrome (latest) | ✅ PASS |
| Firefox (latest) | ✅ PASS |
| Edge (latest) | ✅ PASS |
| Safari (macOS) | ✅ PASS |
| Mobile Chrome (Android) | ✅ PASS |
| Mobile Safari (iOS) | ✅ PASS |

Viewport sizes tested:
- 375 × 812 — iPhone SE / 14 (mobile)
- 768 × 1024 — iPad (tablet)
- 1280 × 800 — Standard laptop
- 1920 × 1080 — Full HD desktop

---

## Author

**Andamdas Keshav Karthikeya**
B.Tech CSE (Cyber Security) — Geethanjali College of Engineering and Technology, Hyderabad
📞 +91 8790523785 | ✉ andamdaskeshavkarthikeya@gmail.com# prortfolio
