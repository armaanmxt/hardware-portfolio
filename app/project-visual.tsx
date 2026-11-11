const spiByte = [1, 0, 1, 1, 0, 0, 1, 0];
const spiSignals = [
  { name: 'CS#', levels: [1, ...spiByte.flatMap(() => [0, 0]), 1] },
  { name: 'SCLK', levels: [0, ...spiByte.flatMap(() => [0, 1]), 0] },
  { name: 'MOSI', levels: [0, ...spiByte.flatMap(bit => [bit, bit]), 0] },
];

export function ProjectVisual({ kind }: { kind: 'cache' | 'fifo' | 'spi' | 'regression' }) {
  switch (kind) {
    case 'cache':
      return (
        <div className="architecture" role="img" aria-label="Cache read path: CPU, L1 cache, and memory">
          <span className="architecture-node">CPU</span>
          <span className="architecture-wire" aria-hidden="true"/>
          <span className="architecture-node architecture-core">L1 CACHE<small>tag / index / offset</small></span>
          <span className="architecture-wire" aria-hidden="true"/>
          <span className="architecture-node">MEMORY</span>
        </div>
      );
    case 'fifo':
      return (
        <figure className="project-visual">
          <div className="fifo-slots" role="img" aria-label="Eight-slot FIFO example. Slots 6, 7, 0, and 1 are occupied. Read next at slot 6 and write next at slot 2.">
            {Array.from({ length: 8 }, (_, slot) => (
              <div className="fifo-slot" key={slot}>
                <span className={slot < 2 || slot >= 6 ? 'fifo-cell occupied' : 'fifo-cell'}>{slot}</span>
                {slot === 2 && <span className="fifo-pointer">↑<br/>Write</span>}
                {slot === 6 && <span className="fifo-pointer">↑<br/>Read</span>}
              </div>
            ))}
          </div>
          <figcaption>Example queue · 4 of 8 slots used, with data wrapping from slot 7 to 0.</figcaption>
        </figure>
      );
    case 'spi':
      return (
        <figure className="project-visual">
          <div className="spi-timing" role="img" aria-label="Example SPI Mode 0 timing. Chip select is active low, the clock idles low, and MOSI is sampled on each rising clock edge.">
            {spiSignals.map(({ name, levels }) => (
              <div className="signal-row" key={name}>
                <span>{name}</span>
                <div className="signal-wave" aria-hidden="true">
                  {levels.map((level, index) => (
                    <i className={`signal-step ${level ? 'high' : 'low'}${index > 0 && level !== levels[index - 1] ? ' edge' : ''}`} key={index}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <figcaption>Example SPI Mode 0 transfer · MOSI is sampled on SCLK’s rising edges.</figcaption>
        </figure>
      );
    case 'regression':
      return (
        <figure className="project-visual">
          <dl className="regression-results">
            <div>
              <dt>Standard regression</dt>
              <dd><strong>64/64</strong> checks passed</dd>
              <dd><meter aria-label="Standard checks passed" min={0} max={64} value={64}/></dd>
            </div>
            <div>
              <dt>Injected defects</dt>
              <dd><strong>4/6</strong> detected</dd>
              <dd><meter aria-label="Injected defects detected" min={0} max={6} value={4}/></dd>
            </div>
          </dl>
          <figcaption>Recorded results from the project’s test reports.</figcaption>
        </figure>
      );
  }
}
