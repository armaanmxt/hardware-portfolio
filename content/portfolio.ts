// Edit this file to update the portfolio.
export const profile = {
  email: 'a65mathu@uwaterloo.ca',
  github: 'https://github.com/armaanmxt',
  resume: '/resume.pdf',
};
export const experience = [
  {
    id: 'uwasic', logo: '/logos/uwasic.png', company: 'UWASIC',
    href: 'https://www.linkedin.com/company/uwasic/',
    period: 'Apr 2026 – Present', role: 'RTL Design & Verification Member',
    summary: '10 Gb/s Ethernet PCS · 64b/66b encoding · RTL verification',
  },
  {
    id: 'opg', logo: '/logos/opg-green.png', company: 'Ontario Power Generation',
    href: 'https://www.opg.com/',
    period: 'May 2026 – Aug 2026', role: 'Design Engineering Intern',
    summary: 'Pickering refurbishment · Design reviews · Engineering change control',
  },
];
export const projects = [
  {
    title: 'Parameterized synchronous FIFO',
    summary: 'Configurable data width and depth, circular pointers, occupancy tracking, and full/empty flags.',
    meta: 'SystemVerilog · cocotb',
    href: 'https://github.com/armaanmxt/parameterized-synchronous-fifo',
  },
  {
    title: 'L1 cache controller',
    summary: 'A 1 KB direct-mapped cache design exploring address decoding, tag comparison, and cache refills.',
    meta: 'SystemVerilog · Computer architecture',
    href: 'https://github.com/armaanmxt/L1-Cache-Controller-',
  },
  {
    title: 'Python RTL regression tool',
    summary: 'JSON-configured RTL simulations with automated compilation and consolidated pass/fail reports.',
    meta: 'Python · Icarus Verilog',
    href: 'https://github.com/armaanmxt/python-rtl-regression-tool',
  },
];

