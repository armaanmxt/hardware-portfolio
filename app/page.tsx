import { profile, experience, projects, current } from '../content/portfolio';
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return <>
    <a className="skip" href="#about">Skip to content</a>
    <div className="shell">
      <aside className="sidebar">
        <a href="#about" className="name">Armaan<span className="name-break"> </span>Mathur<span className="period">.</span></a>
        <p className="sidebar-note">Engineering student.<br/>Curious about what’s underneath.</p>
        <nav aria-label="Sections">
          <a href="#about"><span>01</span> About</a>
          <a href="#experience"><span>02</span> Experience</a>
          <a href="#projects"><span>03</span> Selected work</a>
          <a href="#now"><span>04</span> On the workbench</a>
        </nav>
        <div className="socials">
          <a href={profile.github}>GitHub <Arrow/></a>
          <a href={`mailto:${profile.email}`}>Email <Arrow/></a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Resume <Arrow/></a>
        </div>
        <p className="location"><span className="dot"/> Waterloo, Canada</p>
      </aside>
      <main>
        <section id="about" className="intro">
          <div className="eyebrow">HARDWARE / SYSTEMS / CURIOSITY</div>
          <h1>Big curiosity.<br/><em>Small circuits.</em></h1>
          <p className="lead">I’m Armaan, a Nanotechnology Engineering student at the <a href="https://uwaterloo.ca/">University of Waterloo</a>, interested in the logic that makes hardware work.</p>
          <p>{profile.about}</p>
          <p>I’ve worked on electrical design at <a href="#experience">Ontario Power Generation</a> and RTL design and verification with <a href="#uwasic">UWASIC</a>.</p>
          <a className="inline-link" href={profile.resume} target="_blank" rel="noreferrer">Read my resume <Arrow/></a>
          <div className="interest-line"><span>Drawn to</span> Digital design <i>·</i> Computer architecture <i>·</i> Verification</div>
        </section>
        <section id="experience">
          <div className="section-heading"><h2>Experience</h2><span>01 / WHERE I’VE CONTRIBUTED</span></div>
          {experience.map(job=><article className="experience-row" id={job.id} key={job.id}>
            <div className={`org-mark ${job.id}`} aria-hidden="true">{job.mark}</div>
            <div className="experience-copy"><div className="row-top"><h3>{job.company}</h3><span className="date">{job.period}</span></div>
              <p className="role">{job.role}</p><p>{job.summary}</p>
              <details><summary>More about the work <span aria-hidden="true">+</span></summary><ul>{job.details.map(detail=><li key={detail}>{detail}</li>)}</ul></details>
            </div>
          </article>)}
        </section>
        <section id="projects">
          <div className="section-heading"><h2>Selected work</h2><span>02 / A FEW THINGS I’VE BUILT</span></div>
          <p className="section-note">A small selection of digital design and verification projects.</p>
          {projects.map((project,index)=><article className="project" key={project.title}>
            <div className="project-number">0{index+1}</div><div className="project-body">
              <div className="row-top"><h3>{project.title}</h3><span className="category">{project.category}</span></div>
              <p>{project.summary}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              <details><summary>Design notes <span aria-hidden="true">+</span></summary><div className="notes"><p>{project.detail}</p>{project.href && <a className="inline-link" href={project.href}>Explore the repository <Arrow/></a>}</div></details>
            </div>
          </article>)}
        </section>
        <section id="now">
          <div className="section-heading"><h2>On the workbench</h2><span>03 / LEARNING IN PUBLIC</span></div>
          <article className="current-card">
            <div className="current-top"><span className="status"><span className="dot"/> In progress</span><span className="mono">{current.updated}</span></div>
            <h3>{current.title}</h3><p>{current.summary}</p>
            <div className="cache-diagram" role="img" aria-label="Conceptual read path: CPU request to L1 cache; a cache miss requests main memory.">
              <div className="diagram-node">CPU<span>request</span></div><div className="connector">→</div><div className="diagram-node cache-node">L1<span>tag · valid · data</span></div><div className="connector">⇄</div><div className="diagram-node">Memory<span>refill</span></div>
            </div>
            <p className="diagram-caption">Conceptual read path · architecture in development</p>
            <div className="current-progress"><div><span className="small-label">DEFINED SO FAR</span><p>{current.done}</p></div><div><span className="small-label">UP NEXT</span><p>{current.next}</p></div></div>
            <a className="inline-link" href={current.href}>Follow the build on GitHub <Arrow/></a>
          </article>
        </section>
        <section className="contact" id="contact"><span className="eyebrow">ALWAYS CURIOUS</span><h2>Let’s compare notes.</h2><p>If you’re working on digital hardware, computer architecture, or an interesting engineering problem, I’d love to hear about it.</p><a href={`mailto:${profile.email}`} className="inline-link">{profile.email} <Arrow/></a></section>
        <footer><span>Armaan Mathur © {profile.year}</span><a href="#about">Back to top ↑</a></footer>
      </main>
    </div>
  </>;
}
