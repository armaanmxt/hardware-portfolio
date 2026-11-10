// Update this file to change your content. Reorder projects to change display order.
export const profile = {
  email: 'a65mathu@uwaterloo.ca', github: 'https://github.com/armaanmxt',
  resume: '/resume.pdf', year: 2026,
  about: 'My interests sit between digital design, computer architecture, and verification: describing a system in RTL, understanding its trade-offs, and testing how it behaves at the edges.',
};
export const experience = [
  {
    id: 'opg', mark: 'OPG', company: 'Ontario Power Generation', period: '2026',
    role: 'Design Engineering Intern · Pickering, ON',
    summary: 'Electrical design reviews and engineering documentation for the Pickering refurbishment project.',
    details: [
      'Reviewed vendor schematics and engineering packages, identifying discrepancies and supporting design reviews.',
      'Contributed load calculations and VFD harmonics studies to design change packages for Units 5–8.',
      'Coordinated with vendors and cross-functional teams to resolve technical documentation issues.',
    ],
  },
  {
    id: 'uwasic', mark: 'μ', company: 'UWASIC', period: '2026',
    role: 'RTL Design & Verification Member · Student design team',
    summary: 'SystemVerilog development and self-checking verification for a modular 10 Gb/s Ethernet physical coding sublayer.',
    details: [
      'Developing a 64b/66b transmit encoder mapping 64-bit XGMII data and 8 control bits into 66-bit blocks.',
      'Working on datapath and control logic for data, idle, ordered-set, start, and terminate formats.',
      'Using directed, edge-case, and malformed-packet tests to inspect sync headers, bit ordering, and control-code mapping.',
      'Collaborating on interfaces with the scrambler, gearbox, decoder, and MAC.',
    ],
  },
];
export const projects = [
  {
    title: 'Asynchronous FIFO', category: 'DIGITAL DESIGN',
    summary: 'A dual-clock FIFO for transferring data between independent clock domains, targeting the Artix-7 FPGA.',
    tags: ['Verilog', 'Clock domain crossing', 'Vivado'],
    detail: 'Combines Gray-coded pointers, two-stage synchronizers, and full/empty flag logic. The repository documents behavioral simulation with a 100 MHz write clock and a 40 MHz read clock. This is simulation evidence, rather than a claim of exhaustive CDC verification or hardware qualification.',
    href: 'https://github.com/armaanmxt/Async-FIFO-Design',
  },
  {
    title: 'RTL regression runner', category: 'VERIFICATION',
    summary: 'A configuration-driven Python tool that compiles RTL, runs simulations, and turns testbench results into readable reports.',
    tags: ['Python', 'SystemVerilog', 'Icarus Verilog'],
    detail: 'Includes counter, ALU, and FIFO test cases, parameter overrides, and Markdown/JSON reports. The committed standard suite records 64/64 passing checks. The injected-defect suite detects 4/6 defects, exposing two gaps in the ALU test vectors—useful feedback on the tests themselves.',
    href: 'https://github.com/armaanmxt/python-rtl-regression-tool',
  },
  {
    title: 'SPI-controlled PWM peripheral', category: 'RTL & INTERFACES',
    summary: 'A synthesizable SPI Mode 0 peripheral with memory-mapped control of 16 digital outputs and 16 PWM channels.',
    tags: ['SystemVerilog', 'cocotb', 'SPI / PWM'],
    detail: 'Self-checking Python/cocotb tests cover register writes, PWM duty-cycle boundaries, reset behavior, invalid transactions, and clock-domain crossings between SPI and the system clock. Project details are documented in my resume; a dedicated repository link will be added when available.',
    href: '',
  },
];
export const current = {
  title: 'L1 cache controller', updated: 'NOV 2026',
  summary: 'Building a direct-mapped cache controller to explore address decoding, tag comparisons, and the control flow behind cache hits and refills.',
  done: 'CPU and memory interfaces, plus storage declarations for 64 cache lines with 16 bytes per line.',
  next: 'Implement hit detection and the refill state machine, then exercise them with a testbench and memory model.',
  href: 'https://github.com/armaanmxt/L1-Cache-Controller-',
};
