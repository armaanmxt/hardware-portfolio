// Edit this file to update the portfolio.
export const profile = {
  email: 'a65mathu@uwaterloo.ca',
  github: 'https://github.com/armaanmxt',
  linkedin: 'https://www.linkedin.com/in/armaan-mathur/',
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
    category: 'Computer architecture', title: 'L1 cache controller', status: 'In progress',
    summary: 'A 1 KB direct-mapped cache design exploring address decoding, tag comparison, and cache refills.',
    meta: 'SystemVerilog · Computer architecture',
    href: 'https://github.com/armaanmxt/L1-Cache-Controller-',
  },
  {
    category: 'Digital design', title: 'Parameterized synchronous FIFO', status: '',
    summary: 'Configurable data width and depth, circular pointers, occupancy tracking, and full/empty flags.',
    meta: 'SystemVerilog · cocotb',
    href: 'https://github.com/armaanmxt/parameterized-synchronous-fifo',
  },
  {
    category: 'Hardware interfaces', title: 'SPI-controlled PWM peripheral', status: '',
    summary: 'An SPI Mode 0 peripheral with memory-mapped control of 16 digital outputs and 16 PWM channels.',
    meta: 'SystemVerilog · cocotb · SPI / PWM',
    href: '',
  },
  {
    category: 'Verification & tooling', title: 'Python RTL regression tool', status: '',
    summary: 'JSON-configured RTL simulations with automated compilation and consolidated pass/fail reports.',
    meta: 'Python · Icarus Verilog',
    href: 'https://github.com/armaanmxt/python-rtl-regression-tool',
  },
];
