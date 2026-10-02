export interface EventAgendaItem {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

export interface EventSpeaker {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  github?: string;
}

export interface EventFaq {
  question: string;
  answer: string;
}

export interface CommunityEvent {
  slug: string;
  id: string;
  title: string;
  trackTag: string;
  dateBadge: string;
  startDateIso: string;
  endDateIso: string;
  timeString: string;
  location: string;
  venueName: string;
  venueAddress: string;
  venueType: 'outdoor' | 'in-person' | 'hybrid' | 'virtual';
  image: string;
  description: string;
  fullOverview: string[];
  highlights: string[];
  agenda: EventAgendaItem[];
  prerequisites: string[];
  whatToBring: string[];
  speakers: EventSpeaker[];
  faqs: EventFaq[];
  isSuper?: boolean;
  superBadge?: string;
  theme: 'grass' | 'hacktoberfest' | 'linux' | 'git' | 'selfhost';
  calTitle: string;
  calStart: string;
  calEnd: string;
  calLocation: string;
  registrationUrl: string;
  capacity?: string;
  cost: string;
}

export const events: CommunityEvent[] = [
  {
    slug: 'touch-grass',
    id: 'event-touch-grass',
    title: 'Touch Grass: The Unplugged Linux Gathering & Nature Unconference',
    trackTag: 'SUPER EVENT • OUTDOOR HACKER PICNIC & KEY-SIGNING',
    dateBadge: '07 November 2026 • 13:30 BST',
    startDateIso: '2026-11-07T13:30:00+06:00',
    endDateIso: '2026-11-07T18:00:00+06:00',
    timeString: 'Saturday • 13:30 - 18:00 BST (Sunset)',
    location: 'Ramna Park Lake Amphitheatre & Banyan Green, Dhaka',
    venueName: 'Ramna Park Green Space (Near Lake Steps)',
    venueAddress: 'Moulana Bhashani Rd, Ramna, Dhaka 1000, Bangladesh',
    venueType: 'outdoor',
    image: '/images/meetups/meetup-touch-grass.svg',
    description: 'An unplugged, open-air super gathering! Step away from backlit screens, power down the daemons, and touch actual grass with fellow Linux and FOSS enthusiasts. Featuring solar-powered LoRa mesh radios, an open-air GPG key-signing party, an offline Kiwix knowledge mirror, acoustic lightning talks, frisbee, and lawn snacks.',
    fullOverview: [
      'In a world dominated by endless CI/CD runs, flickering terminal windows, and hyper-connected screens, we often forget the raw physical reality beneath our feet. "Touch Grass" is The Penguins Club\'s signature super unconference: a deliberate return to nature, fresh oxygen, and unplugged peer-to-peer connection.',
      'Leave your AC server rooms behind. Bring a picnic blanket, your portable solar packs, your favorite offline hardware projects, and your physical presence. We will gather under the historic trees of Ramna Park for an afternoon of peer-to-peer mesh networking, Web-of-Trust cryptographic signing, community tea, and real-world conversations with people who cherish software freedom.',
      'Zero Wi-Fi dependencies. Zero cloud servers. Just pure offline software freedom, decentralized mesh radios, and open-air solidarity.'
    ],
    highlights: [
      '🌿 100% Certified Grass-Touching: Reconnect with sunlight, trees, and your fellow humans without notifications.',
      '📡 Solar & Battery LoRa Mesh Lab: Deploying Meshtastic & Briar peer-to-peer off-grid communication nodes across the park perimeter.',
      '🔑 Sunlight GPG Key-Signing Protocol: Cross-sign public keys in person to strengthen our community Web of Trust (bring printed fingerprints!).',
      '🎒 Offline Digital Ark with Kiwix: Experience entire offline mirrors of Wikipedia, ArchWiki, and OpenStreetMap running on low-power Raspberry Pi single-board computers.',
      '⚡ Unplugged Lightning Talks: Zero projector slides! 5-minute talks with handheld mini-whiteboards, paper sketches, and genuine acoustic voice projection.',
      '🍉 Lawn Picnic & Frisbee Tournament: Fresh seasonal fruits, hot tea, samosas, and open-air games as the sun dips below Dhaka\'s skyline.'
    ],
    agenda: [
      {
        time: '13:30 - 14:00',
        title: 'Check-In, Picnic Mat Circle & Fingerprint Verification',
        speaker: 'TPC Welcome Crew',
        description: 'Find our circle under the giant banyan tree by the lake, lay out mats, grab your badge, and verify GPG fingerprint sheets.'
      },
      {
        time: '14:00 - 14:40',
        title: 'Opening Circle: "Digital Ecology & The Art of Disconnecting"',
        speaker: 'The Penguins Club Core',
        description: 'A grounded conversation on developer burnout, open-source sustainability, local resilience, and mindful computing.'
      },
      {
        time: '14:40 - 15:30',
        title: 'Hands-On Lab: Deploying Off-Grid LoRa & Meshtastic Networks',
        speaker: 'Hardware & Radio SIG',
        description: 'Live field test! Configuring handheld LoRa nodes, passing encrypted packets across the trees without internet or cell towers.'
      },
      {
        time: '15:30 - 16:15',
        title: 'Sunlight GPG Web-of-Trust Key-Signing Party',
        speaker: 'Cryptography Group',
        description: 'The classic FOSS tradition conducted in open air. Confirm IDs, exchange fingerprints, and build resilient cryptographic trust.'
      },
      {
        time: '16:15 - 17:15',
        title: 'The Unplugged Lightning Talks (Zero Slides!)',
        speaker: 'Community Volunteers',
        description: '6 rapid 5-minute talks using portable dry-erase boards and vocal cords. Topics range from home gardening to custom Linux kernels.'
      },
      {
        time: '17:15 - 18:00',
        title: 'Chai, Lawn Picnic & Sunset Frisbee Hack',
        speaker: 'Everyone',
        description: 'Enjoy snacks and tea while mingling, catching up on projects, and closing out an unforgettable afternoon outdoors.'
      }
    ],
    prerequisites: [
      'No technical prerequisites whatsoever — open to complete newcomers, seasoned sysadmins, designers, and students.',
      'Curiosity for decentralized technology, offline computing, or just enjoying good company in the park.'
    ],
    whatToBring: [
      'A picnic mat or blanket if you have one (we will also bring large ground tarps).',
      'Printed copies of your GPG key fingerprint + government ID (if participating in the key-signing party).',
      'Portable battery bank, Meshtastic/LoRa devices, or offline Raspberry Pi projects (optional).',
      'Reusable water bottle, walking shoes, and a light jacket for the sunset breeze.',
      'Snacks, biscuits, or fruits to share with fellow attendees!'
    ],
    speakers: [
      {
        name: 'The Penguins Club Collective',
        role: 'Community Stewards & FOSS Advocates',
        bio: 'Organizers and volunteers nurturing local open-source infrastructure and offline tech culture in Bangladesh since 2020.',
        avatar: '/favicon.svg',
        github: 'the-penguins-club'
      },
      {
        name: 'Hardware & Decentralized SIG',
        role: 'Mesh Networking Coordinators',
        bio: 'Enthusiasts building low-power radio communication tools, LoRa gateways, and community emergency networks.',
        avatar: '/favicon.svg'
      }
    ],
    faqs: [
      {
        question: 'Why "Touch Grass"? Is this a joke?',
        answer: 'It embraces the beloved internet meme with complete sincerity! Engineers and tech enthusiasts spend an unhealthy amount of time indoors glued to terminals. Stepping outside into nature with a community of friends turns a meme into a transformative, revitalizing gathering.'
      },
      {
        question: 'What if it rains?',
        answer: 'We monitor weather forecasts closely. In case of unexpected drizzle, we move directly to the covered pavilions and heritage colonnades adjacent to the lake. Any location adjustments will be broadcasted on Telegram.'
      },
      {
        question: 'Do I need a laptop?',
        answer: 'Laptops are completely optional! In fact, we encourage leaving heavy laptops in your bag or at home. If you bring one for the offline Kiwix demo, make sure the battery is charged, as there are no power outlets in the park.'
      },
      {
        question: 'Is there an entry fee?',
        answer: 'Never! Like all The Penguins Club events, Touch Grass is 100% free and community supported.'
      }
    ],
    isSuper: true,
    superBadge: 'SUPER EVENT 🌿',
    theme: 'grass',
    calTitle: 'The Penguins Club - Touch Grass Super Meetup',
    calStart: '20261107T073000Z',
    calEnd: '20261107T120000Z',
    calLocation: 'Ramna Park Lake Amphitheatre, Dhaka 1000',
    registrationUrl: 'https://t.me/penguinsclubnetwork',
    capacity: '150 Attendees (Open Space)',
    cost: 'Free Admission'
  },
  {
    slug: 'hacktoberfest-special',
    id: 'event-hacktoberfest-special',
    title: 'Hacktoberfest 2026: Open Source Contribution Marathon & PR Sprint',
    trackTag: 'GLOBAL CELEBRATION • FIRST PR TO UPSTREAM COLLABORATION',
    dateBadge: '24 October 2026 • 11:00 BST',
    startDateIso: '2026-10-24T11:00:00+06:00',
    endDateIso: '2026-10-24T18:00:00+06:00',
    timeString: 'Saturday • 11:00 - 18:00 BST',
    location: '26/18 Gulshan Badda Link Road, Dhaka 1212 & Global Virtual Discord/Telegram',
    venueName: 'The Penguins Club Hacker Space & Lab',
    venueAddress: '26/18 Gulshan Badda Link Road, Dhaka 1212, Bangladesh',
    venueType: 'hybrid',
    image: '/images/meetups/meetup-hacktoberfest.svg',
    description: 'Celebrate the world\'s largest open source festival with The Penguins Club! Join a high-energy, full-day sprint where mentors help you find beginner-friendly issues, master Git branching and conventional commits, submit meaningful Pull Requests to Linux and FOSS projects, and earn exclusive stickers, badges, and booklets.',
    fullOverview: [
      'October is Hacktoberfest — the month-long worldwide celebration of open-source software! Every year, hundreds of thousands of developers contribute to open codebases, documentation, and translation projects.',
      'The Penguins Club is hosting a dedicated, hands-on Contribution Marathon in Dhaka with full virtual streaming. Our goal: zero spam PRs, 100% genuine value. We believe your first open-source pull request should be an empowering milestone, not an intimidating hurdle.',
      'Whether you are fixing a typo in markdown manuals, writing tests in Python or Go, improving accessibility in web apps, or translating Linux documentation into Bengali, our experienced maintainers will pair with you from fork to merged commit.'
    ],
    highlights: [
      '🚀 Zero to Merged PR: Complete walkthrough of forking, branching, rebase workflows, and clean commit etiquette.',
      '🏷️ Curated "Good First Issue" Depot: Pre-screened issues across Bangladesh open source tooling, Linux mirrors, CLI helpers, and upstream software.',
      '🤝 1-on-1 Maintainer Mentorship: Get instant reviews and actionable feedback before you hit "Create Pull Request".',
      '🎁 Limited-Edition Swag & Stickers: Receive custom 2026 The Penguins Club x Hacktoberfest laptop stickers, pin badges, and Linux booklets.',
      '🏆 Live Contribution Leaderboard: Watch merged PRs roll in on our live projector dashboard throughout the sprint.',
      '🌐 Full Hybrid Experience: Participate either in our physical Dhaka lab or remotely through our Discord & Telegram sprint rooms.'
    ],
    agenda: [
      {
        time: '11:00 - 11:30',
        title: 'Opening Kickoff: What is Hacktoberfest & Open Source Etiquette',
        speaker: 'Maintainer Panel',
        description: 'Introduction to ethical contributing, avoiding spam, understanding repo contributing guidelines, and Code of Conduct.'
      },
      {
        time: '11:30 - 12:30',
        title: 'Workshop: Git Mastery, Conventional Commits & Clean Rebasing',
        speaker: 'Core Git Mentor',
        description: 'Interactive terminal walkthrough of git remote, feature branches, interactive rebase, squashing, and signing commits.'
      },
      {
        time: '12:30 - 13:30',
        title: 'Issue Triage: Picking Your Good First Issue',
        speaker: 'Project Mentors',
        description: 'Browse the issue board, match with project maintainers, claim tasks, and set up local dev containers/environments.'
      },
      {
        time: '13:30 - 16:30',
        title: 'The Great Contribution Sprint (Pair Programming & Coffee)',
        speaker: 'All Attendees & Mentors',
        description: 'Three hours of intense, collaborative coding, doc writing, translation, and live code reviews with mentors.'
      },
      {
        time: '16:30 - 17:30',
        title: 'Live Upstream Pull Request Submissions & Show-and-Tell',
        speaker: 'Sprint Participants',
        description: 'Cheering on participants as their PRs are pushed upstream! Brief presentations on interesting bugs discovered and solved.'
      },
      {
        time: '17:30 - 18:00',
        title: 'Swag Distribution, Leaderboard Awards & Group Photo',
        speaker: 'Community Team',
        description: 'Handing out Hacktoberfest sticker packs, booklets, and wrapping up with the community group photo.'
      }
    ],
    prerequisites: [
      'Basic familiarity with code or markdown, and a free GitHub or GitLab account.',
      'A desire to contribute to open-source software — all experience levels (beginner to veteran) welcome!'
    ],
    whatToBring: [
      'Your laptop and charger (Linux, macOS, or Windows with WSL).',
      'Git installed on your system (`git --version`).',
      'SSH key configured with your GitHub/GitLab account (mentors will assist if you need help).'
    ],
    speakers: [
      {
        name: 'Open Source Mentors Team',
        role: 'Maintainers & PR Reviewers',
        bio: 'Active contributors to Debian, Arch Linux AUR, Go libraries, Python packages, and web standards.',
        avatar: '/favicon.svg',
        github: 'the-penguins-club'
      }
    ],
    faqs: [
      {
        question: 'I am a beginner who has never used Git before. Can I attend?',
        answer: 'Absolutely yes! This event is specially crafted for you. The first morning session covers Git basics, and mentors sit with you to ensure your first contribution is smooth and stress-free.'
      },
      {
        question: 'Do non-code contributions count?',
        answer: 'Yes! High-quality documentation, fixing broken links, translating software interfaces into Bengali, and writing tutorials are all deeply valued open-source contributions.'
      },
      {
        question: 'Can I join virtually if I am outside Dhaka?',
        answer: 'Yes, this is a hybrid event. We host live pair-programming voice channels on Discord and Telegram, complete with virtual mentor desks.'
      },
      {
        question: 'How do I register?',
        answer: 'Join our Telegram channel @penguinsclubnetwork and confirm your attendance in the pinned event announcement.'
      }
    ],
    isSuper: false,
    theme: 'hacktoberfest',
    calTitle: 'The Penguins Club - Hacktoberfest 2026 Contribution Sprint',
    calStart: '20261024T050000Z',
    calEnd: '20261024T120000Z',
    calLocation: '26/18 Gulshan Badda Link Road, Dhaka 1212 & Virtual',
    registrationUrl: 'https://t.me/penguinsclubnetwork',
    capacity: '80 Seats In-Person + Unlimited Virtual',
    cost: 'Free Admission'
  },
  {
    slug: 'linux-command-line-internals',
    id: 'event-oct-linux',
    title: 'Linux Command Line, Shell Automation & System Internals',
    trackTag: 'SYSTEMS ARCHITECTURE & BASH WORKSHOP',
    dateBadge: '17 October 2026 • 15:00 BST',
    startDateIso: '2026-10-17T15:00:00+06:00',
    endDateIso: '2026-10-17T18:00:00+06:00',
    timeString: 'Third Saturday • 15:00 - 18:00 BST',
    location: '26/18 Gulshan Badda Link Road, Dhaka 1212 & Telegram Stream',
    venueName: 'The Penguins Club Classroom Lab',
    venueAddress: '26/18 Gulshan Badda Link Road, Dhaka 1212, Bangladesh',
    venueType: 'hybrid',
    image: '/images/meetups/meetup-linux-intro.svg',
    description: 'Hands-on lab walking through terminal navigation, automation pipelines with bash, systemd services, and Linux kernel fundamentals. Master process management, I/O redirection, and building resilient shell utilities.',
    fullOverview: [
      'The Linux terminal is not merely a tool for launching commands — it is an extraordinarily expressive programming environment built on decades of UNIX philosophy.',
      'In this practical, hands-on workshop, we demystify what happens underneath the hood when you type a command. From file descriptors and POSIX signals to systemd unit management and `/proc` virtual filesystem inspection, attendees will gain confidence in diagnosing system bottlenecks and automating complex tasks.',
      'All lessons are accompanied by live terminal sessions and printed cheat-sheet booklets distributed freely to all in-person attendees.'
    ],
    highlights: [
      '⚡ Mastering POSIX shell scripting, error trapping (`set -euo pipefail`), and argument parsing.',
      '🔍 Deep dive into `/proc`, `/sys`, and process lifecycle inspection using `strace` and `lsof`.',
      '⚙️ Creating, enabling, and managing custom background systemd service units.',
      '🛡️ UNIX permissions, POSIX ACLs, and practical security hygiene for multi-user servers.',
      '📖 Free printed Penguin Terminal Pocket Booklets for all classroom participants.'
    ],
    agenda: [
      {
        time: '15:00 - 15:30',
        title: 'Anatomy of the Shell: I/O Redirection, Pipes, and File Descriptors',
        speaker: 'Linux Systems SIG',
        description: 'Understanding stdin (0), stdout (1), stderr (2), named pipes, and subshells.'
      },
      {
        time: '15:30 - 16:30',
        title: 'Robust Bash Automation: Writing Scripts That Don\'t Fail Silently',
        speaker: 'DevOps & Systems Team',
        description: 'Variable expansion, conditionals, signals, traps, and defensive scripting patterns.'
      },
      {
        time: '16:30 - 17:15',
        title: 'Processes, Signals & systemd: From PID 1 to Daemon Management',
        speaker: 'Kernel & Architecture SIG',
        description: 'Writing custom .service unit files, analyzing journalctl logs, and cgroups resource limits.'
      },
      {
        time: '17:15 - 18:00',
        title: 'Interactive Debugging Challenge & Q&A',
        speaker: 'All Mentors',
        description: 'Solve real-world Linux troubleshooting riddles on live sandbox virtual machines.'
      }
    ],
    prerequisites: [
      'Basic familiarity with opening a terminal in Linux, macOS, or WSL.',
      'No advanced programming experience required.'
    ],
    whatToBring: [
      'Laptop with any modern Linux distribution or WSL2 enabled.',
      'Notebook and pen for architecture diagrams.'
    ],
    speakers: [
      {
        name: 'The Penguins Club Systems Team',
        role: 'Linux Sysadmins & Engineers',
        bio: 'Maintaining local mirrors, high-availability server racks, and teaching Linux systems administration.',
        avatar: '/favicon.svg',
        github: 'the-penguins-club'
      }
    ],
    faqs: [
      {
        question: 'Will there be a recording?',
        answer: 'Yes! The presentation portions are streamed and recorded on our Telegram group.'
      },
      {
        question: 'Can I attend if I am running Windows?',
        answer: 'Yes, provided you install WSL2 with Ubuntu or Debian prior to the session, or bring a live USB stick.'
      }
    ],
    isSuper: false,
    theme: 'linux',
    calTitle: 'The Penguins Club - Linux Command Line & System Internals',
    calStart: '20261017T090000Z',
    calEnd: '20261017T120000Z',
    calLocation: '26/18 Gulshan Badda Link Road, Dhaka 1212 & Telegram Stream',
    registrationUrl: 'https://t.me/penguinsclubnetwork',
    capacity: '40 In-Person Seats',
    cost: 'Free Admission'
  },
  {
    slug: 'contributing-open-source-git',
    id: 'event-nov-git',
    title: 'Contributing to Open Source Software & Git Best Practices',
    trackTag: 'UPSTREAM COLLABORATION & PR SPRINT',
    dateBadge: '21 November 2026 • 15:00 BST',
    startDateIso: '2026-11-21T15:00:00+06:00',
    endDateIso: '2026-11-21T18:00:00+06:00',
    timeString: 'Third Saturday • 15:00 - 18:00 BST',
    location: 'Campus Lab Space & Online Live Stream',
    venueName: 'Campus Lab Space & Media Center',
    venueAddress: 'Campus Computer Lab Space, Dhaka, Bangladesh',
    venueType: 'hybrid',
    image: '/images/meetups/meetup-git-foss.svg',
    description: 'Hands-on guidance through cloning repositories, fixing good first issues, writing tests, and opening upstream pull requests. Learn how to communicate effectively with maintainers and write clean atomic commits.',
    fullOverview: [
      'Contributing to open source software can seem intimidating from the outside. How do you find a repository? What is an atomic commit? How do you rebase without losing work? How do maintainers review pull requests?',
      'This meetup demystifies the entire workflow. Attendees will follow a practical case study, making changes on a real open source repository, writing clean documentation and tests, and creating a pull request that maintainers love to merge.',
      'We also address the interpersonal and community aspects of open source: writing constructive issue reports, handling code review feedback gracefully, and building an enduring presence in international FOSS communities.'
    ],
    highlights: [
      '🌿 Understanding Git internals: Trees, blobs, commits, and refs under `.git/`.',
      '🔀 Mastering git rebase -i, cherry-pick, bisect, and resolving tricky merge conflicts.',
      '✍️ Crafting meaningful commit messages using the Conventional Commits specification.',
      '🎯 Navigating GitHub, GitLab, and mailing-list patch workflows (git-send-email).',
      '🌟 Reviewing real upstream issues from community projects.'
    ],
    agenda: [
      {
        time: '15:00 - 15:45',
        title: 'Git Under the Hood: What is a Commit Really?',
        speaker: 'Core Developer SIG',
        description: 'Inspecting DAGs, refs, the index staging area, and SHA-256 hashes.'
      },
      {
        time: '15:45 - 16:30',
        title: 'Branching Strategies & Interactive Rebasing Without Fear',
        speaker: 'Maintainer Panel',
        description: 'Squashing commits, rewording history, and resolving conflicts with surgical precision.'
      },
      {
        time: '16:30 - 17:30',
        title: 'Live Upstream Pull Request Demo & Code Review Walkthrough',
        speaker: 'All Mentors',
        description: 'Watch a maintainer review and merge real community pull requests in real time.'
      },
      {
        time: '17:30 - 18:00',
        title: 'Q&A, Mentorship Matching & Open Floor',
        speaker: 'Community Collective',
        description: 'Get paired with senior mentors for ongoing contribution goals.'
      }
    ],
    prerequisites: [
      'Familiarity with basic terminal commands (`cd`, `ls`, `mkdir`).',
      'A GitHub or GitLab account.'
    ],
    whatToBring: [
      'Laptop with git installed and configured (`git config --global user.name ...`).'
    ],
    speakers: [
      {
        name: 'The Penguins Club Git Mentors',
        role: 'Open Source Maintainers',
        bio: 'Seasoned contributors helping students make their first 10 pull requests.',
        avatar: '/favicon.svg',
        github: 'the-penguins-club'
      }
    ],
    faqs: [
      {
        question: 'Will there be code examples in different languages?',
        answer: 'Yes, git workflows apply universally regardless of whether you write Python, JavaScript, Rust, C, or Markdown.'
      }
    ],
    isSuper: false,
    theme: 'git',
    calTitle: 'The Penguins Club - Contributing to Open Source & Git',
    calStart: '20261121T090000Z',
    calEnd: '20261121T120000Z',
    calLocation: 'Campus Lab Space & Online Live Stream, Dhaka',
    registrationUrl: 'https://t.me/penguinsclubnetwork',
    capacity: '50 Seats In-Person + Stream',
    cost: 'Free Admission'
  },
  {
    slug: 'self-hosting-digital-sovereignty',
    id: 'event-dec-selfhost',
    title: 'Self-Hosting, Local Privacy & Digital Sovereignty',
    trackTag: 'HOMELAB, CONTAINERIZATION & NEXTCLOUD',
    dateBadge: '19 December 2026 • 15:00 BST',
    startDateIso: '2026-12-19T15:00:00+06:00',
    endDateIso: '2026-12-19T18:00:00+06:00',
    timeString: 'Third Saturday • 15:00 - 18:00 BST',
    location: 'Hacker Space, Dhaka & Virtual Stream',
    venueName: 'The Penguins Club Dhaka Hacker Space',
    venueAddress: '26/18 Gulshan Badda Link Road, Dhaka 1212, Bangladesh',
    venueType: 'hybrid',
    image: '/images/meetups/meetup-self-hosting.svg',
    description: 'Learn how to take control of personal data by hosting your own open-source services on refurbished hardware or inexpensive home servers. Discover Docker, Podman, Nextcloud, Pi-hole, and Tailscale private overlays.',
    fullOverview: [
      'Every day, our digital lives are entrusted to proprietary cloud monopolies that collect personal telemetry, lock user data into walled gardens, and subject files to algorithmic surveillance.',
      'Self-hosting is the antidote. With modern open-source software and inexpensive consumer hardware — or even an old repurposed laptop or Raspberry Pi — you can easily run your own cloud storage, password manager, ad-blocking DNS, and home automation.',
      'In this workshop, we provide a step-by-step roadmap to building your own resilient home lab without spending a fortune, ensuring high uptime, secure backups, and seamless encrypted access from anywhere in the world.'
    ],
    highlights: [
      '🏠 Building a low-power home server using second-hand laptops or thin clients.',
      '🐳 Containerized service deployment with Podman and Docker Compose.',
      '☁️ Setting up Nextcloud for private file sync, calendar, and contacts.',
      '🛡️ Pi-hole & AdGuard Home network-wide ad & telemetry blocking.',
      '🔒 Secure remote access with Tailscale / WireGuard without exposing public ports.'
    ],
    agenda: [
      {
        time: '15:00 - 15:45',
        title: 'Digital Sovereignty: Why Self-Host in 2026?',
        speaker: 'Privacy & Freedom SIG',
        description: 'Threat modeling, cloud dependence, and the empowerment of owning your data.'
      },
      {
        time: '15:45 - 16:45',
        title: 'Hands-On Homelab: Deploying Nextcloud & Pi-hole via Docker Compose',
        speaker: 'Homelab Enthusiasts',
        description: 'Configuring persistent volumes, automated database backups, and reverse proxies.'
      },
      {
        time: '16:45 - 17:30',
        title: 'Zero Trust Networking: WireGuard, Tailscale & Encrypted Overlays',
        speaker: 'Networking SIG',
        description: 'Accessing your home cluster securely from anywhere without port forwarding.'
      },
      {
        time: '17:30 - 18:00',
        title: 'Show and Tell: Community Homelab Hardware Gallery',
        speaker: 'All Attendees',
        description: 'Attendees show off their mini PCs, SBC clusters, and custom NAS builds.'
      }
    ],
    prerequisites: [
      'Basic familiarity with Linux command line and networking concepts (IP addresses, ports).'
    ],
    whatToBring: [
      'Laptop to follow along with sandbox container exercises.',
      'Optional: Bring your old laptop or mini-PC if you want help installing Linux on it on-site!'
    ],
    speakers: [
      {
        name: 'The Penguins Club Homelab SIG',
        role: 'Self-Hosting & Privacy Advocates',
        bio: 'Passionate builders running decentralized servers, mirror nodes, and private cloud infrastructure.',
        avatar: '/favicon.svg',
        github: 'the-penguins-club'
      }
    ],
    faqs: [
      {
        question: 'Do I need expensive server hardware?',
        answer: 'Not at all! An old dual-core laptop or a $35 mini PC is more than enough to host personal cloud storage, DNS blocking, and notes.'
      }
    ],
    isSuper: false,
    theme: 'selfhost',
    calTitle: 'The Penguins Club - Self-Hosting & Digital Sovereignty',
    calStart: '20261219T090000Z',
    calEnd: '20261219T120000Z',
    calLocation: 'Hacker Space, Dhaka & Virtual Stream',
    registrationUrl: 'https://t.me/penguinsclubnetwork',
    capacity: '40 In-Person Seats',
    cost: 'Free Admission'
  }
];

export function getEventBySlug(slug: string): CommunityEvent | undefined {
  return events.find((evt) => evt.slug === slug);
}

export function getAllEvents(): CommunityEvent[] {
  return events;
}
