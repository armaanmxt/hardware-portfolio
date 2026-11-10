import { profile, experience, projects } from '../content/portfolio';
const Arrow = () => <span aria-hidden="true">↗</span>;
function BrandLink({ href, logo, children, wide = false }: { href: string; logo: string; children: React.ReactNode; wide?: boolean }) {
  return <a className="brand-link" href={href}><span>{children}</span><img className={wide ? 'inline-logo wide' : 'inline-logo'} src={logo} alt="" /></a>;
}
export default function Home() {
  return <>
    <a className="skip" href="#about">Skip to content</a>
    <div className="shell">
      <aside className="sidebar">
        <h1><a href="#about">Armaan Mathur</a></h1>
        <nav aria-label="Sections"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a></nav>
        <div className="socials"><a href={profile.github}>GitHub <Arrow/></a><a href={`mailto:${profile.email}`}>Email <Arrow/></a><a href={profile.resume} target="_blank" rel="noreferrer">Resume <Arrow/></a></div>
      </aside>
      <main>
        <section id="about" className="intro">
          <p>I’m Armaan, a Nanotechnology Engineering student at the <BrandLink href="https://uwaterloo.ca/" logo="/logos/waterloo.png">University of Waterloo</BrandLink>.</p>
          <p>I’m interested in digital hardware, computer architecture, and verification.</p>
          <p>I’ve worked on electrical design at <a className="opg-inline-link" href="https://www.opg.com/" aria-label="Ontario Power Generation"><img src="/logos/opg-green.png" alt="OPG" /></a> and RTL design and verification with <BrandLink href="https://www.linkedin.com/company/uwasic/" logo="/logos/uwasic.png">UWASIC</BrandLink>.</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          {experience.map(job=><article className="experience-row" id={job.id} key={job.id}>
            <a className={`org-logo ${job.id}`} href={job.href} aria-label={job.company}><img src={job.logo} alt={job.company} /></a>
            <div className="experience-copy"><div className="row-top"><h3>{job.role}</h3><span className="date">{job.period}</span></div><a className="company" href={job.href}>{job.company} <Arrow/></a><p>{job.summary}</p></div>
          </article>)}
        </section>
        <section id="projects">
          <h2>Selected projects</h2>
          {projects.map(project=><a className="project" key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">
            <div><h3>{project.title}</h3><p>{project.summary}</p><span className="project-meta">{project.meta}</span></div><span className="project-arrow" aria-hidden="true">↗</span>
          </a>)}
        </section>
        <footer><a href={`mailto:${profile.email}`}>Email <Arrow/></a><a href={profile.github}>GitHub <Arrow/></a><a href={profile.resume} target="_blank" rel="noreferrer">Resume <Arrow/></a></footer>
      </main>
    </div>
  </>;
}

