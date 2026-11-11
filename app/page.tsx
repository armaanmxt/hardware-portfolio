import { profile, experience, projects } from '../content/portfolio';
const Arrow = () => <span aria-hidden="true">↗</span>;
function BrandLink({ href, logo, children, wide = false }: { href: string; logo: string; children: React.ReactNode; wide?: boolean }) {
  return <a className="brand-link" href={href} target="_blank" rel="noopener noreferrer"><span>{children}</span><img className={wide ? 'inline-logo wide' : 'inline-logo'} src={logo} alt="" /></a>;
}
export default function Home() {
  return <>
    <a className="skip" href="#about">Skip to content</a>
    <div className="shell">
      <aside className="sidebar">
        <h1><a href="#about">Armaan Mathur</a></h1>
        <nav aria-label="Sections"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a></nav>
        <div className="socials"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow/></a><a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">Email <Arrow/></a><a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume <Arrow/></a></div>
      </aside>
      <main>
        <section id="about" className="intro">
          <p>I’m Armaan, a Nanotechnology Engineering student at the <BrandLink href="https://uwaterloo.ca/" logo="/logos/waterloo.png">University of Waterloo</BrandLink>.</p>
          <p>I’m interested in <mark className="interest-highlight">digital hardware, computer architecture, and verification</mark>.</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          {experience.map(job=><article className="experience-row" id={job.id} key={job.id}>
            <a className={`org-logo ${job.id}`} href={job.href} target="_blank" rel="noopener noreferrer" aria-label={job.company}><img src={job.logo} alt={job.company} /></a>
            <div className="experience-copy"><div className="row-top"><h3>{job.role}</h3><span className="date">{job.period}</span></div><a className="company" href={job.href} target="_blank" rel="noopener noreferrer">{job.company} <Arrow/></a><details className="experience-details"><summary>More about the work <span aria-hidden="true">+</span></summary><ul>{job.details.map(detail=><li key={detail}>{detail}</li>)}</ul></details></div>
          </article>)}
        </section>
        <section id="projects">
          <h2>Selected projects</h2>
          <div className="project-list">
          {projects.map((project,index)=>{ const Project = project.href ? 'a' : 'article'; return <Project className={`project ${index === 0 ? 'project-featured' : ''}`} key={project.title} {...(project.href ? {href: project.href, target: '_blank', rel: 'noopener noreferrer'} : {})}>
            <div className="project-index" aria-hidden="true">{String(index+1).padStart(2,'0')}</div>
            <div className="project-content">
              {project.status && <div className="project-eyebrow"><span className="project-status"><i aria-hidden="true"/>{project.status}</span></div>}
              <div className="project-heading"><h3>{project.title}</h3>{project.href && <svg className="project-github" aria-label="GitHub repository" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.63 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"/></svg>}</div>
              {index === 0 && <div className="architecture" aria-label="Conceptual cache read path: CPU, cache, and memory">
                <span className="architecture-node">CPU</span><span className="architecture-wire" aria-hidden="true"/><span className="architecture-node architecture-cache">L1 CACHE<small>tag / index / offset</small></span><span className="architecture-wire" aria-hidden="true"/><span className="architecture-node">MEMORY</span>
              </div>}
            </div>
          </Project>;})}
          </div>
        </section>
        <footer><a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow/></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow/></a><a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume <Arrow/></a></footer>
      </main>
    </div>
  </>;
}
