// ─────────────────────────────────────────────────────────────
//  All editable content for the portfolio lives here.
//  Anything marked  TODO  is a placeholder you should replace.
// ─────────────────────────────────────────────────────────────

export const GITHUB = 'https://github.com/mery-top';

export const site = {
  name: 'Meerthika SR',
  signature: 'Meerthika',
  role: 'AI Engineer',
  city: 'Madurai, Tamil Nadu',
  gmt: 'GMT +5:30',
  timeZone: 'Asia/Kolkata',
  title: 'Meerthika SR — AI Engineer · The AI Lab Notebook',
  description:
    'Meerthika SR is an AI engineer from Tamil Nadu who learns by rebuilding things from scratch — Transformers, Kafka, Git, compilers — and builds AI systems that feel human.',
};

export const links = {
  email: 'meerthikasuniverse@gmail.com',
  github: GITHUB,
  linkedin: 'https://www.linkedin.com/in/', // TODO: your LinkedIn URL
  medium: 'https://medium.com/', // TODO: your Medium profile URL
  youtube: 'https://www.youtube.com/', // TODO: your YouTube channel URL
  x: 'https://x.com/', // TODO: your X handle (or remove)
  book: 'https://www.amazon.com/', // TODO: Inside NGINX Amazon link
  paper: '#', // TODO: PingFixx paper link
};

export const beliefs = [
  {
    n: '01',
    text: 'Build it from scratch, then you truly understand it.',
    note: 'Kafka, Git, a shell, a compiler, a Transformer — I rebuild the tools I depend on.',
    doodle: 'blocks',
    tilt: -1.4,
  },
  {
    n: '02',
    text: 'Open source is how we learn out loud.',
    note: '200+ students later, the best way to grow is still a public pull request.',
    doodle: 'sprout',
    tilt: 1.1,
  },
  {
    n: '03',
    text: 'Efficient AI is kind AI.',
    note: 'Smaller, faster, pruned models reach more people on more devices.',
    doodle: 'battery',
    tilt: -0.7,
  },
];

export const about = {
  lead: 'I’m an AI engineer who learns by taking systems apart and rebuilding them by hand.',
  body: [
    'I graduated as the department Gold Medalist in Computer Science from Kamaraj College of Engineering & Technology, passed JLPT N4 in Japanese, and spent the last few years going deep on the layers most people skip — kernels, distributed logs, compilers — before climbing back up to neural networks.',
    'Today I build AI systems that are grounded, fast and trustworthy: RAG pipelines over live data, Transformers written from first principles, and lately, efficient models through pruning and sparsity (MIT 6.5940 is my current obsession). I founded RootSprout to make open source approachable, contribute to CNCF’s Flatcar Linux, and I’m an Aspire Leaders Program Fellow.',
  ],
  stats: [
    { n: '200+', label: 'students taught open source' },
    { n: '900+', label: 'YouTube learners' },
    { n: '5×', label: 'hackathon winner' },
    { n: '15+', label: 'tech communities' },
  ],
  skills: [
    'JLPT N4', 'PyTorch', 'Transformers', 'LLMs', 'RAG', 'Model Pruning', 'TinyML',
    'Blockchain Security', 'Python', 'Go', 'C', 'Java', 'Spring Boot', 'Kafka',
    'AWS', 'Kubernetes', 'LLVM', 'Elasticsearch',
  ],
  polaroids: [
    { image: '/images/debug_me.jpg', caption: 'me, mid-debug ☕', tilt: -6 },
    { image: '/images/women_in_tech_me.jpg', caption: 'speaking @ women in tech, TN', tilt: 4 },
    { image: '/images/gold_medal_me.jpg', caption: 'gold medal · rank 1', tilt: -2 },
  ],
};

export const experience = [
  {
    when: 'Jul — Sep 2026',
    role: 'Aspire Leaders Program Fellow',
    org: 'Aspire Institute',
    kind: 'fellowship',
    points: ['Selected for a global leadership program for first-generation changemakers.'],
  },
  {
    when: 'Aug 2025 — Sep 2026',
    role: 'Founder & Open Source Developer',
    org: 'RootSprout',
    kind: 'founder',
    points: [
      'Built core systems from scratch — Kafka, Git, shell tools and an LLVM-based compiler.',
      'Led open-source sessions for <mark>200+ students</mark> with <mark>15+ communities</mark> (FOSS United, Cybrian, She Builds).',
      'Speaker at Tamil Nadu’s largest Women in Tech conference.',
    ],
  },
  {
    when: 'Jan — Apr 2026',
    role: 'Software Development Engineer Intern',
    org: 'ITJOBXS',
    kind: 'internship',
    points: [
      'Serverless Java on AWS Lambda + API Gateway, cutting idle server costs by <mark>~30%</mark>.',
      'EC2, ALB & Auto Scaling deployments with CloudWatch monitoring.',
    ],
  },
  {
    when: 'Sep 2025 — Jan 2026',
    role: 'Back End Developer',
    org: 'Helping Minds World',
    kind: 'internship · on-site',
    points: [
      'Spring Boot banking APIs; fixed N+1 queries for <mark>~60% fewer SQL calls</mark>.',
      'Improved API response times by <mark>30–40%</mark> with @Transactional integrity.',
    ],
  },
  {
    when: 'Aug — Dec 2025',
    role: 'Open Source Contributor',
    org: 'CNCF · Flatcar Container Linux',
    kind: 'part-time',
    points: [
      'QEMU installer acceleration script for arm64 Macs.',
      'Refactored containerd config for sysext-managed defaults & drop-in overrides.',
    ],
  },
  {
    when: 'Jul — Dec 2025',
    role: 'Software Engineering Intern',
    org: 'Paroscale Technologies',
    kind: 'internship',
    points: [
      'Raft-integrated, highly available KV store in Go.',
      'High-throughput client read/write APIs.',
    ],
  },
  {
    when: 'Jan — Dec 2025',
    role: 'Content Creator',
    org: 'YouTube',
    kind: 'freelance',
    points: ['Explaining low-level systems to <mark>900+ subscribers</mark>.'],
  },
  {
    when: 'Jul 2025',
    role: 'Developer',
    org: 'Vircsam',
    kind: 'product',
    points: ['Launched Season Cycle (productivity timer) and Studier (schedule app).'],
  },
  {
    when: 'Campus',
    role: 'Volunteer & Community Lead',
    org: 'FOSS United Madurai',
    kind: 'community',
    points: ['Organised 3 FOSS workshops and grew a 60+ member open-source community.'],
  },
];

export const projects = [
  {
    title: 'Konnichiwa Transformer',
    role: 'researcher',
    stack: 'PyTorch & Attention & Tokenization & From scratch',
    year: '2026',
    summary: '“Attention Is All You Need,” rebuilt piece by piece to translate Japanese → English.',
    image: '/images/transformer.jpg',
    alt: 'Konnichiwa Transformer interface showing Japanese input, an attention heatmap and English output',
    href: `${GITHUB}/Konnichiwa-Transformer`,
  },
  {
    title: 'FlashFeed AI',
    role: 'builder',
    stack: 'Kafka & RAG & Spring Boot & Elasticsearch & WebSockets',
    year: '2026',
    summary: 'A live news firehose you can actually talk to — streaming ingestion with RAG chat on top.',
    image: '/images/flashfeed.jpg',
    alt: 'FlashFeed dashboard with a live news feed, AI assistant chat and analytics charts',
    href: `${GITHUB}/flashfeed-ai`,
  },
  {
    title: 'Medy',
    role: 'lead',
    stack: 'Groq & Sarvam & 3D Avatar & n8n & AR/VR',
    year: '2025',
    summary: 'An AI companion for people on the autism spectrum. Runner-up, Codefrei AI Hackathon.',
    image: '/images/medy.jpg',
    alt: 'Medy app with a friendly 3D avatar, learning game tiles and a progress report',
    href: 'https://lnkd.in/gd76kmNa',
  },
  {
    title: 'PhishGuard',
    role: 'builder',
    stack: 'BERT & DNN & Random Forest & Gmail Pub/Sub & Flask',
    year: '2025',
    summary: 'A five-model ensemble that flags phishing emails the moment they land. Winner, TechDivathon.',
    image: '/images/phishing.jpg',
    alt: 'PhishGuard dashboard showing an email feed with phishing risk badges and model votes',
    href: GITHUB,
  },
  {
    title: 'SalonHub',
    role: 'architect',
    stack: 'Microservices & RabbitMQ & OpenCV & Ollama Gemma 2B',
    year: '2026',
    summary: 'Distributed salon platform with local-LLM hairstyle recommendations.',
    image: '/images/salonhub.jpg',
    alt: 'SalonHub interface with a booking calendar, AI hairstyle suggestions and service status',
    href: `${GITHUB}/salonhub-microservices`,
  },
];

export const experiments = [
  {
    title: 'Kira-Kafka',
    role: 'tinkerer',
    stack: 'C & mmap & zero-copy & partitions',
    summary: 'A tiny, educational Kafka: topics, brokers, disk-backed logs and thread-to-core mapping.',
    cmd: './kira produce --topic lab',
    out: ['→ partition 2 · offset 4096', '✓ zero-copy sendfile()'],
    href: `${GITHUB}/Kira-Kafka`,
  },
  {
    title: 'Ge-Git',
    role: 'tinkerer',
    stack: 'C & SHA-1 & object store',
    summary: 'Git, from the inside — blobs, trees and commits in a content-addressed store.',
    cmd: 'gegit commit -m "hi"',
    out: ['[main 3f9a2c1] hi', ' 1 tree, 2 blobs written'],
    href: `${GITHUB}/Ge-Git`,
  },
  {
    title: 'Cow-Compiler',
    role: 'language nerd',
    stack: 'C & LLVM IR & parsing',
    summary: 'A compiler for CowLang — a minimalist language that moos its way into LLVM IR.',
    cmd: 'cowc hello.moo -o hello.ll',
    out: ['define i32 @main() {', '  ; moo.'],
    href: `${GITHUB}/Cow-Compiler`,
  },
  {
    title: 'Exsh',
    role: 'tinkerer',
    stack: 'C & fork() & execvp() & pipes',
    summary: 'A Unix-like shell with parsing, pipes, redirection and process management.',
    cmd: 'ls | grep .c > files.txt',
    out: ['exsh: 2 procs · exit 0'],
    href: `${GITHUB}/Exsh`,
  },
  {
    title: 'CTP',
    role: 'protocol pal',
    stack: 'termios & socat & CRC & ARQ',
    summary: 'A serial datalink transport protocol with framing, CRC checks and ACK-based retransmission.',
    cmd: 'ctp send /dev/ttys004',
    out: ['frame#12 crc ok · ACK', 'frame#13 crc ✗ · retry'],
    href: `${GITHUB}/CTP`,
  },
  {
    title: 'QueueBank',
    role: 'builder',
    stack: 'Spring Boot & JPA & Executors & locking',
    summary: 'A concurrent banking simulator: pessimistic locks, idempotency and worker queues.',
    cmd: 'curl -X POST /transfer',
    out: ['🔒 row lock acquired', '✓ idempotent · 201'],
    href: `${GITHUB}/queue-bank`,
  },
  {
    title: 'PingFix',
    role: 'author',
    stack: 'Go & Gin & community voting',
    summary: 'Report and resolve local issues together — also published as a research paper.',
    cmd: 'go run ./cmd/pingfix',
    out: ['[GIN] POST /issues 201', 'votes: 42 · verified ✓'],
    href: `${GITHUB}/pingfix`,
  },
];

export const wins = [
  {
    title: 'Gold Medal & First Rank',
    event: 'Kamaraj College of Engineering & Technology',
    note: 'Highest CGPA in the department — first class with distinction.',
    badge: 'medal',
    feature: true,
  },
  {
    title: 'Winner · Cybersecurity Hackathon',
    event: 'Blockchain Security',
    note: 'Built a decentralized security and vulnerability auditing platform.',
    badge: 'trophy',
  },
  {
    title: 'Winner · TechDivathon',
    event: 'Panimalar Engineering College',
    note: 'Real-time AI email phishing detector with a 5-model ensemble.',
    badge: 'trophy',
  },
  {
    title: 'Winner · Buildathon',
    event: 'Highway Accident Detection & Mitigation',
    note: 'Sensor-driven crash detection with automated emergency response.',
    badge: 'trophy',
    href: 'https://lnkd.in/gjsDm4mC',
  },
  {
    title: 'Winner · Ideation',
    event: 'CareerBuddy',
    note: 'Matching peers with shared career goals for mutual growth.',
    badge: 'bulb',
    href: 'https://youtu.be/KaZ3KeoiZhg',
  },
  {
    title: 'Runner-up · Codefrei AI Hackathon',
    event: 'St. Joseph’s College of Engineering',
    note: 'Medy — an AI companion and learning world for people with ASD.',
    badge: 'ribbon',
    href: 'https://lnkd.in/gd76kmNa',
  },
];

export const publications = [
  {
    kind: 'book',
    title: 'Inside NGINX',
    subtitle: 'High-Performance Web Server Through Source Code',
    where: 'Published on Amazon',
    note: 'A tour of NGINX’s event-driven core: connection handling, HTTP phases, reverse proxying and non-blocking I/O, straight from the source.',
    href: links.book,
  },
  {
    kind: 'paper',
    title: 'An Integrated Platform for Reporting and Resolving Local Issues',
    where: 'Intl. Journal of Advances in Electronics & Computer Science',
    note: 'PingFixx — structured, accountable community issue tracking.',
    href: links.paper,
  },
];

export const posts = [
  { series: 'MIT 6.5940 · L4', title: 'Pruning Algorithms to Sparse Hardware', date: 'Oct 2026' },
  { series: 'MIT 6.5940 · L3', title: 'Neural Network Pruning', date: 'Oct 2026' },
  { series: 'MIT 6.5940 · L2', title: 'Demystifying Neural Network Efficiency', date: 'Sep 2026' },
  { series: 'MIT 6.5940 · L1', title: 'TinyML and Efficient AI Computing', date: 'Sep 2026' },
  { series: 'From scratch', title: 'Building the “Attention Is All You Need” Transformer — every piece of math', date: 'Aug 2026' },
  { series: 'Kernel series 1.2', title: 'Hard Links, Symbolic Links & How Linux Stores Filesystems', date: 'Aug 2026' },
  { series: 'Kernel series 1.1', title: 'Files, Inodes and Directory Internals', date: 'Jul 2026' },
  { series: 'Security', title: 'Copy Fail: a 4-Byte Page Cache Write via AEAD Misuse', date: 'May 2026' },
  { series: 'Databases', title: 'UUID Versions, Trade-offs & How PostgreSQL Stores Them', date: 'May 2026' },
];

export const books = [
  { title: 'Red Rising', author: 'Pierce Brown', rating: 5, note: 'Amazing. Must read.', tone: 'ink', h: 92 },
  { title: 'Golden Son', author: 'Pierce Brown', rating: 5, note: 'Couldn’t stop — straight into Morning Star.', tone: 'sage', h: 96 },
  { title: 'Morning Star', author: 'Pierce Brown', rating: 5, note: 'Gorydamn! A space Game of Thrones.', tone: 'lime', h: 100 },
  { title: 'Iron Gold', author: 'Pierce Brown', rating: 3, note: 'Slower, but the world keeps growing.', tone: 'paper', h: 90 },
  { title: 'Dark Age', author: 'Pierce Brown', rating: 5, note: 'Brutal and brilliant.', tone: 'cobalt', h: 98 },
  { title: 'Fourth Wing', author: 'Rebecca Yarros', rating: 5, note: 'Dragons. Enough said.', tone: 'ink', h: 88 },
  { title: 'Assassin’s Apprentice', author: 'Robin Hobb', rating: 5, note: 'Farseer begins — quietly devastating.', tone: 'sage', h: 94 },
  { title: 'Royal Assassin', author: 'Robin Hobb', rating: 5, note: 'Fitz deserves better.', tone: 'paper', h: 97 },
  { title: 'Assassin’s Quest', author: 'Robin Hobb', rating: 5, note: 'A perfect, aching finale.', tone: 'ink', h: 93 },
  { title: 'Our Mathematical Universe', author: 'Max Tegmark', rating: 5, note: 'What if reality is just math?', tone: 'lime', h: 86 },
  { title: 'Something Deeply Hidden', author: 'Sean Carroll', rating: 5, note: 'Many-worlds, made friendly.', tone: 'cobalt', h: 91 },
  { title: 'A Brief History of Time', author: 'Stephen Hawking', rating: 5, note: 'Where the curiosity started.', tone: 'paper', h: 84 },
  { title: 'The Richest Man in Babylon', author: 'George S. Clason', rating: 5, note: 'Opportunity is a haughty goddess.', tone: 'sage', h: 82 },
  { title: 'The Art of Persuasion', author: 'Bob Burg', rating: 5, note: 'Make your enemy your friend.', tone: 'ink', h: 87 },
];
