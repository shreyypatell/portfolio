"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Download, ArrowUpRight, Send, MapPin, Award, ArrowUp, Menu, X, ChevronRight } from "lucide-react";

/* ── DATA ─────────────────────────────────────────────────────────────────── */
const SKILLS = [
  { id:"languages", label:"Languages", items:[
    {n:"JavaScript",v:85},{n:"Python",v:87},{n:"TypeScript",v:78},
    {n:"Java",v:75},{n:"C#",v:80},{n:"HTML5 / CSS3",v:90},
  ]},
  { id:"frontend", label:"Frontend", items:[
    {n:"React.js",v:88},{n:"Next.js",v:78},{n:"Tailwind CSS",v:90},
    {n:"Bootstrap",v:90},{n:"Angular",v:70},{n:"jQuery",v:75},
    {n:"CSS Animations",v:72},{n:"Monaco Editor",v:68},
  ]},
  { id:"backend", label:"Backend", items:[
    {n:"Node.js / Express",v:83},{n:"FastAPI",v:86},{n:"Flask",v:78},
    {n:"ASP.NET",v:70},{n:"REST API Design",v:85},{n:"JWT Auth",v:83},
    {n:"Pydantic / SQLAlchemy",v:76},
  ]},
  { id:"ai", label:"AI & Machine Learning", items:[
    {n:"scikit-learn",v:85},{n:"XGBoost",v:80},{n:"Pandas / NumPy",v:87},
    {n:"Joblib / ML Pipelines",v:78},{n:"Ollama (Local LLMs)",v:74},
    {n:"EDA & Feature Engineering",v:82},
  ]},
  { id:"databases", label:"Databases", items:[
    {n:"MongoDB",v:84},{n:"MySQL",v:78},{n:"SQLite / PostgreSQL",v:76},{n:"Supabase",v:68},
  ]},
  { id:"devops", label:"DevOps & Tools", items:[
    {n:"Docker / Docker Compose",v:72},{n:"GitHub Actions CI/CD",v:72},
    {n:"Git",v:88},{n:"Vite / Webpack",v:75},{n:"Netlify / Render / Vercel",v:80},
  ]},
  { id:"other", label:"Other", items:[
    {n:"DSA (Java / Python)",v:76},{n:"Game Dev (Unity / C#)",v:72},
    {n:"Recharts / Data Viz",v:75},{n:"Agile / Project Management",v:70},
  ]},
];

const PROJECTS = [
  { idx:"01", title:"InsightAI", cat:"ML ANALYTICS PLATFORM",
    desc:"Upload CSV or Excel datasets, run automated EDA, train and compare ML models (Random Forest, XGBoost), and receive plain-English insights. FastAPI + scikit-learn backend with Docker and GitHub Actions CI/CD.",
    stack:["React","FastAPI","scikit-learn","XGBoost","Python","Docker","SQLite","Tailwind CSS"],
    github:"https://github.com/shreyypatell/insightai", live:"https://insightai-ml.netlify.app/",
    color:"#4A3728" },
  { idx:"02", title:"LaunchPad", cat:"FULL-STACK PROJECT MANAGEMENT",
    desc:"MERN-stack project management platform for developers — Kanban boards, task timelines, and team collaboration tools with JWT-secured APIs and a responsive dashboard.",
    stack:["React","Node.js","Express","MongoDB","JWT","Tailwind CSS"],
    github:"https://github.com/shreyypatell/launchpad", live:"https://launchpad-mern.netlify.app/",
    color:"#2A3E4A" },
  { idx:"03", title:"FounderLens AI", cat:"STARTUP VALIDATION TOOL",
    desc:"AI-powered platform generating structured startup feasibility reports — market sizing, competitor landscape, go-to-market strategy, and investor-grade risk analysis from a single idea input.",
    stack:["React","Vite","Tailwind CSS","AI API","Framer Motion"],
    github:"https://github.com/shreyypatell/founderlens-ai", live:"https://founderlens.netlify.app/",
    color:"#2A4A35" },
  { idx:"04", title:"CodePilot", cat:"LOCAL AI CODING ASSISTANT",
    desc:"Fully local open-source coding assistant powered by Ollama LLMs. VS Code-style Monaco editor, chat interface, code generation, bug fixing, and architecture analysis — all on-device, zero data sent externally.",
    stack:["React","Vite","Flask","Python","Ollama","Monaco Editor"],
    github:"https://github.com/shreyypatell/CodePilot", live:null,
    color:"#3D3A28" },
];

const CERTS = [
  { name:"AWS Machine Learning Specialty", sub:"Amazon Web Services — ML infrastructure and deployment" },
  { name:"AWS Cloud Computing Foundations", sub:"Amazon Web Services — Cloud architecture and services" },
  { name:"AWS Natural Language Processing", sub:"Amazon Web Services — NLP models and text pipelines" },
];

const MARQUEE_ITEMS = [
  "Software Engineer","Full Stack Development","Machine Learning","React & Node.js",
  "Python & FastAPI","Computer Science","Open to all CSE roles","Ahmedabad, India",
  "Software Engineer","Full Stack Development","Machine Learning","React & Node.js",
  "Python & FastAPI","Computer Science","Open to all CSE roles","Ahmedabad, India",
];



/* ── NAV ──────────────────────────────────────────────────────────────────── */
function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Projects", "Skills", "Education", "Contact"];
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <div className="nav-inner">
          <a href="#hero" className="logo">
            Shrey Patel
            <span className="logo-sub">Software Engineer</span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className={`nav-a${active === l.toLowerCase() ? " act" : ""}`}>{l}</a>
            ))}
            <a href="#contact" className="nav-cta">Get in touch</a>
          </div>
          <button className="mob-btn" onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`mob-drawer${open ? " open" : ""}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ── MARQUEE ──────────────────────────────────────────────────────────────── */
function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}<span className="marquee-dot"> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const fn = () => {
      const y = window.scrollY * 0.25;
      el.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section id="hero">
      <div className="wrap">
        <h1 className="hero-name" ref={nameRef}>
          <span className="name-mask"><span className="name-word w1">Shrey</span></span>
          <span className="name-mask"><span className="name-word w2">Patel.</span></span>
        </h1>
        <div className="hero-foot">
          <p className="hero-bio">
            Computer Science student targeting <strong>full-time roles in 2027</strong>.
            I build software across the stack — ML data pipelines, REST APIs,
            full-stack web apps, and developer tools that ship to production.
          </p>
          <div className="hero-right">
            <div className="hero-btns">
              <a href="#projects" className="btn btn-dk">View work <ArrowUpRight size={15} /></a>
              <a href="/resume.pdf" download className="btn btn-gh"><Download size={15} /> Resume</a>
            </div>
            <div className="hero-socials">
              {[
                { l: "GH", h: "https://github.com/shreyypatell" },
                { l: "LI", h: "https://www.linkedin.com/in/shreypatel2004/" },
                { l: "@", h: "mailto:shreyp574@gmail.com" },
              ].map(s => (
                <a key={s.l} href={s.h}
                  target={s.h.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" className="soc-a">{s.l}</a>
              ))}
            </div>
            <span className="hero-loc">
              <MapPin size={12} /> Ahmedabad, Gujarat, India
            </span>
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

/* ── SECTION HEADING with char reveal ────────────────────────────────────── */
function SectionHead({ num, title }: { num: string; title: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.classList.add("revealed");
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const chars = title.split("").map((ch, i) => (
    <span key={i} className="ch" style={{ transitionDelay: `${i * 35}ms` }}>
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));

  return (
    <div className="sec-head rv">
      <span className="sec-num">{num}</span>
      <span className="sec-h" ref={ref}>{chars}</span>
    </div>
  );
}

/* ── ABOUT ────────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead num="01" title="About" />
        <div className="about-g">
          <div className="ab rv d1">
            <p>I&apos;m a Computer Science student at <strong>Indus University</strong> with a Diploma from <strong>Conestoga College, Canada</strong>. I write code across the full stack — Python backends, React frontends, ML pipelines, and everything between.</p>
            <p>Over the last two years I&apos;ve shipped 20+ projects independently: web apps, a Python blockchain, game prototypes, an expense tracker, and four production-grade AI applications that are live today.</p>
            <p>I&apos;m actively looking for opportunities in <strong>full-stack development, backend engineering, ML engineering, data engineering</strong>, and any role that rewards strong programming fundamentals. Available 2027.</p>
          </div>
          <div className="rv d2">
            <div className="stat-g">
              {[["20+","Projects completed"],["4","AI/ML applications"],["2","Degrees earned"],["10+","Technologies"]].map(([n, l]) => (
                <div className="stat-c" key={l}>
                  <div className="stat-n">{n}</div>
                  <div className="stat-l">{l}</div>
                </div>
              ))}
            </div>
            <div className="cur-box">
              <div className="cur-hdr">Currently</div>
              {[
                "B.Tech CS @ Indus University, 2024–2027",
                "Building production AI applications",
                "Open to all CSE / SWE roles",
                "Ahmedabad — Remote / Relocate",
              ].map(t => (
                <div className="cur-row" key={t}><span className="c-dot" /><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROJECT PREVIEW FOLLOWER ─────────────────────────────────────────────── */
function ProjectPreview({ project, visible, x, y }: {
  project: typeof PROJECTS[0] | null;
  visible: boolean;
  x: number;
  y: number;
}) {
  return (
    <div
      className={`proj-preview${visible && project ? " visible" : ""}`}
      style={{
        left: x + 28,
        top: y - 70,
        background: project?.color || "#2A2A2A",
      }}
    >
      {project && (
        <div className="proj-preview-inner">
          <span className="proj-preview-title" style={{ color: "#F6F3EE" }}>{project.title}</span>
          <span className="proj-preview-cat" style={{ color: "rgba(246,243,238,0.6)" }}>{project.cat}</span>
        </div>
      )}
    </div>
  );
}

/* ── PROJECTS ─────────────────────────────────────────────────────────────── */
function Projects() {
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECTS[0] | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [previewVisible, setPreviewVisible] = useState(false);

  useEffect(() => {
    const fn = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHead num="02" title="Projects" />
        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <ProjRow
              key={p.title}
              project={p}
              delay={i * 70}
              onEnter={() => { setHoveredProject(p); setPreviewVisible(true); }}
              onLeave={() => { setPreviewVisible(false); setHoveredProject(null); }}
            />
          ))}
        </div>
      </div>
      <ProjectPreview
        project={hoveredProject}
        visible={previewVisible}
        x={cursorPos.x}
        y={cursorPos.y}
      />
    </section>
  );
}

function ProjRow({
  project, delay, onEnter, onLeave,
}: {
  project: typeof PROJECTS[0];
  delay: number;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => el.classList.add("in"), delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      className="proj-item rv"
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="proj-num">{project.idx}</div>
      <div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-cat">{project.cat}</div>
        <div className="proj-desc">{project.desc}</div>
        <div className="proj-tags">
          {project.stack.map(t => <span key={t} className="p-tag">{t}</span>)}
        </div>
      </div>
      <div className="proj-acts">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
          GitHub <ChevronRight size={12} />
        </a>
        {project.live
          ? <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link acc">Live ↗</a>
          : <span className="proj-link" style={{ opacity: 0.35, cursor: "default" }}>Local only</span>
        }
      </div>
    </div>
  );
}

/* ── SKILLS ───────────────────────────────────────────────────────────────── */
function Skills() {
  const [active, setActive] = useState("languages");
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const animateBars = useCallback(() => {
    const fills = panelRef.current?.querySelectorAll<HTMLElement>(".sk-fill");
    fills?.forEach(f => { f.style.transition = "none"; f.style.width = "0"; });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fills?.forEach(f => {
        f.style.transition = "width 1.15s cubic-bezier(.16,1,.3,1)";
        f.style.width = (f.dataset.v || "0") + "%";
      });
    }));
  }, []);

  useEffect(() => { animateBars(); }, [active, animateBars]);

  useEffect(() => {
    const el = containerRef.current; if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { setTimeout(animateBars, 200); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [animateBars]);

  const cat = SKILLS.find(s => s.id === active)!;

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead num="03" title="Skills" />
        <div className="rv d1" ref={containerRef}>

          {/* Category tabs — horizontal scrollable row */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "36px",
          }}>
            {SKILLS.map(s => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "100px",
                  border: active === s.id ? "1.5px solid #0A0907" : "1.5px solid rgba(10,9,7,0.15)",
                  background: active === s.id ? "#0A0907" : "transparent",
                  color: active === s.id ? "#F6F3EE" : "#44423E",
                  fontFamily: "var(--sans)",
                  fontSize: "13px",
                  fontWeight: active === s.id ? 500 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Skills panel — full width below tabs */}
          <div ref={panelRef}>
            <div style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#888480", marginBottom: "8px",
            }}>
              {cat.label} — {cat.items.length} skills
            </div>
            {cat.items.map(item => (
              <div key={item.n} style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(10,9,7,0.09)",
              }}>
                <span style={{
                  fontSize: "14px",
                  color: "#44423E",
                  fontWeight: 300,
                  width: "200px",
                  minWidth: "200px",
                  flexShrink: 0,
                }}>
                  {item.n}
                </span>
                <div style={{ flex: 1, height: "1.5px", background: "#E4DFD6", position: "relative", minWidth: 0 }}>
                  <div
                    className="sk-fill"
                    data-v={item.v}
                    style={{ position: "absolute", left: 0, top: 0, height: "100%", background: "#0A0907", width: 0 }}
                  />
                </div>
                <span style={{
                  fontSize: "12px", color: "#888480",
                  width: "36px", textAlign: "right", fontWeight: 500, flexShrink: 0,
                }}>
                  {item.v}%
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── EDUCATION ────────────────────────────────────────────────────────────── */
function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHead num="04" title="Education" />
        <div className="edu-g">
          <div className="edu-card rv d1">
            <div className="edu-per">2024 — 2027</div>
            <div className="edu-deg">B.Tech in Computer Science</div>
            <div className="edu-inst">Indus University</div>
            <div className="edu-place">
              <MapPin size={11} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
              Ahmedabad, Gujarat, India
            </div>
            <div className="edu-desc">Focusing on algorithms, data structures, AI, and software engineering. Building production projects independently throughout the degree.</div>
            <div className="edu-gpa">CGPA <span>8.5</span></div>
          </div>
          <div className="edu-card rv d2" style={{ paddingTop: 46 }}>
            <div className="edu-per">2023 — 2024</div>
            <div className="edu-deg">Diploma in Computer Programming</div>
            <div className="edu-inst">Conestoga College</div>
            <div className="edu-place">
              <MapPin size={11} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
              Ontario, Canada
            </div>
            <div className="edu-desc">Completed 20+ projects across web, mobile, and game development. Gained proficiency in multiple languages and development workflows.</div>
            <div className="edu-gpa">CGPA <span>8.2</span></div>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 36 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink4)", marginBottom: 14 }}>
            Certifications
          </div>
          <div className="certs-wrap">
            {CERTS.map((c, i) => (
              <div className={`cert-card rv d${i + 1}`} key={c.name}>
                <div className="cert-ico"><Award size={19} /></div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ──────────────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [st, setSt] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setSt("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/shreyp574@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Portfolio Contact: ${form.name}` }),
      });
      setSt(res.ok ? "sent" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch { setSt("error"); }
  }

  const rows = [
    { lbl: "Email", val: "shreyp574@gmail.com", href: "mailto:shreyp574@gmail.com", ico: "@" },
    { lbl: "GitHub", val: "github.com/shreyypatell", href: "https://github.com/shreyypatell", ico: "GH" },
    { lbl: "LinkedIn", val: "linkedin.com/in/shreypatel2004", href: "https://www.linkedin.com/in/shreypatel2004/", ico: "LI" },
    { lbl: "Location", val: "Ahmedabad, Gujarat, India", href: null, ico: "•" },
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHead num="05" title="Contact" />
        <div className="con-g">
          <div className="rv d1">
            <p className="con-blurb">
              Open to internships, graduate roles, and collaborations across <strong>all areas of software engineering</strong>.
            </p>
            {rows.map(row => {
              const inner = (
                <>
                  <div className="con-ico">{row.ico}</div>
                  <div><div className="con-lbl">{row.lbl}</div><div className="con-val">{row.val}</div></div>
                  {row.href && <span className="con-arr">↗</span>}
                </>
              );
              return row.href
                ? <a key={row.lbl} href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="con-row">{inner}</a>
                : <div key={row.lbl} className="con-row" style={{ cursor: "default" }}>{inner}</div>;
            })}
          </div>

          <div className="form-box rv d2">
            {st === "sent" ? (
              <div style={{ padding: "48px 0", textAlign: "center" }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", border: "1.5px solid var(--line2)", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 20, color: "var(--acc)" }}>✓</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--ink)", marginBottom: 8 }}>Message sent</div>
                <p style={{ fontSize: 14, color: "var(--ink3)" }}>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="f-row">
                  <div><label className="f-lbl">Name</label><input className="f-inp" type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required /></div>
                  <div><label className="f-lbl">Email</label><input className="f-inp" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required /></div>
                </div>
                <div className="f-mb">
                  <label className="f-lbl">Message</label>
                  <textarea className="f-inp" rows={5} placeholder="Tell me about the role or project..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required style={{ resize: "vertical" }} />
                </div>
                <button type="submit" disabled={st === "sending"} className="btn btn-dk" style={{ width: "100%", justifyContent: "center", borderRadius: 12 }}>
                  {st === "sending" ? "Sending..." : <><Send size={14} /> Send message</>}
                </button>
                {st === "error" && <p style={{ fontSize: 12, color: "#B83232", marginTop: 10, textAlign: "center" }}>Something went wrong — please email me directly.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ft">
          <span className="ft-name">Shrey Patel</span>
          <span className="ft-copy">Software Engineer · Ahmedabad, India</span>
          <div className="ft-links">
            {[
              { l: "GH", h: "https://github.com/shreyypatell" },
              { l: "LI", h: "https://www.linkedin.com/in/shreypatel2004/" },
              { l: "@", h: "mailto:shreyp574@gmail.com" },
            ].map(s => (
              <a key={s.l} href={s.h} target={s.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="ft-a">{s.l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── GLOBAL REVEAL HOOK ───────────────────────────────────────────────────── */
function useGlobalReveal() {
  useEffect(() => {
    const all = document.querySelectorAll<HTMLElement>(".rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    all.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── PAGE ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  const [active, setActive] = useState("hero");
  const [prog, setProg] = useState(0);
  const [showTop, setShowTop] = useState(false);
  useGlobalReveal();

  const onScroll = useCallback(() => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    setProg((window.scrollY / total) * 100);
    setShowTop(window.scrollY > 500);
    const ids = ["hero", "about", "projects", "skills", "education", "contact"];
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.getBoundingClientRect().top <= 130) { setActive(ids[i]); break; }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <div id="prog" style={{ width: `${prog}%` }} />
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <button id="st" className={showTop ? "on" : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        <ArrowUp size={17} />
      </button>
      <style>{`
        @media(max-width:680px){
          .hero-foot{grid-template-columns:1fr !important;gap:28px !important;padding-bottom:40px !important}
          .hero-right{align-items:flex-start !important}
        }
        @media(max-width:580px){
          .proj-acts{display:none !important}
          .proj-item{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  );
}
