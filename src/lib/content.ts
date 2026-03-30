export type NavItem = {
  href: string;
  label: string;
};

export type MediaItem = {
  title: string;
  image: string;
};

export type NewsItem = MediaItem & {
  date: string;
  tag: string;
  excerpt: string;
};

export type EventItem = MediaItem & {
  date: string;
  place: string;
};

export type ReplayItem = MediaItem & {
  duration: string;
  published: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Dashboard" },
  { href: "/news", label: "News" },
  { href: "/live", label: "Live" },
  { href: "/replay", label: "Replay" },
  { href: "/events", label: "Events" },
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export const dashboardStats = [
  { label: "Events This Week", value: "07" },
  { label: "Live Sets / Week", value: "11" },
  { label: "Replay Library", value: "48" },
  { label: "Creative Partners", value: "17" },
];

export const liveNow = {
  title: "After Seven: Bandung Night Signal",
  host: "Nara x Bima",
  start: "Started at 20:55 WIB",
  viewers: "1.9K watching",
  platform: "Web + Instagram + YouTube",
  image: "https://picsum.photos/seed/pelana-live-now/1200/900",
  summary:
    "Tonight's live session covers fresh local releases, updates from the Bandung scene, and a studio conversation with a guest producer.",
};

export const recentLive = [
  {
    title: "City Frequencies",
    time: "Today, 23:00 WIB",
    note: "Guest DJ set with live call-ins from the Bandung community.",
    image: "https://picsum.photos/seed/pelana-recent-1/800/500",
  },
  {
    title: "Sunday Slow Cuts",
    time: "Sunday, 18:30 WIB",
    note: "A downtempo selection for a slower weekend close.",
    image: "https://picsum.photos/seed/pelana-recent-2/800/500",
  },
  {
    title: "Noise Journal: After Hours",
    time: "Last Friday, 21:00 WIB",
    note: "An audio-visual story capturing city textures after dark.",
    image: "https://picsum.photos/seed/pelana-recent-3/800/500",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Pelana Tujuh Opens Submission For Showcase Vol. 01",
    date: "30 Mar 2026",
    tag: "Announcement",
    excerpt:
      "Submission is now open for independent musicians, visual artists, and creative collectives based in Bandung.",
    image: "https://picsum.photos/seed/pelana-news-1/1200/750",
  },
  {
    title: "How After Seven Builds Its Late-Night Identity",
    date: "28 Mar 2026",
    tag: "Editorial",
    excerpt:
      "Inside the curation process: sequencing, pacing, and maintaining a consistent mood across each live block.",
    image: "https://picsum.photos/seed/pelana-news-2/1200/750",
  },
  {
    title: "Noise Journal Pop-Up Session Recap",
    date: "26 Mar 2026",
    tag: "Recap",
    excerpt:
      "Highlights from the latest pop-up session featuring visual installation, ambient performances, and open discussion.",
    image: "https://picsum.photos/seed/pelana-news-3/1200/750",
  },
  {
    title: "Local Label Collaboration Program Enters Phase Two",
    date: "24 Mar 2026",
    tag: "Feature",
    excerpt:
      "Pelana Tujuh expands collaboration with local labels for live recordings, short documentaries, and weekly radio sessions.",
    image: "https://picsum.photos/seed/pelana-news-4/1200/750",
  },
];

export const eventItems: EventItem[] = [
  {
    title: "Open Deck Community Night",
    date: "05 Apr 2026",
    place: "Bandung",
    image: "https://picsum.photos/seed/pelana-event-1/1200/675",
  },
  {
    title: "Visual Jam and Live Projection",
    date: "12 Apr 2026",
    place: "Bandung",
    image: "https://picsum.photos/seed/pelana-event-2/1200/675",
  },
  {
    title: "Radio Residency Showcase",
    date: "18 Apr 2026",
    place: "Bandung",
    image: "https://picsum.photos/seed/pelana-event-3/1200/675",
  },
  {
    title: "Night Market x Sound Installation",
    date: "26 Apr 2026",
    place: "Bandung",
    image: "https://picsum.photos/seed/pelana-event-4/1200/675",
  },
];

export const replayVideos: ReplayItem[] = [
  {
    title: "After Seven Ep. 04: Midnight Process",
    duration: "54:22",
    published: "25 Mar 2026",
    image: "https://picsum.photos/seed/pelana-replay-1/800/500",
  },
  {
    title: "Sonic Dispatch w/ RDK Collective",
    duration: "41:08",
    published: "22 Mar 2026",
    image: "https://picsum.photos/seed/pelana-replay-2/800/500",
  },
  {
    title: "Scene Radar: Underground Picks",
    duration: "32:45",
    published: "19 Mar 2026",
    image: "https://picsum.photos/seed/pelana-replay-3/800/500",
  },
  {
    title: "Slow Cuts: Dawn Session",
    duration: "47:33",
    published: "16 Mar 2026",
    image: "https://picsum.photos/seed/pelana-replay-4/800/500",
  },
];

export const programs = [
  {
    title: "Sonic Dispatch",
    detail: "Weekly curation of new and underground releases every Friday night.",
  },
  {
    title: "Noise Journal",
    detail: "Short-form stories exploring sound culture, community spaces, and city textures.",
  },
  {
    title: "After Seven",
    detail: "Late-night talk program with musicians, producers, and cultural workers.",
  },
  {
    title: "Scene Radar",
    detail: "A weekly digest of gigs, exhibitions, and independent releases in Bandung.",
  },
];

export const schedule = [
  "MON 19:00 - New Drops",
  "TUE 20:30 - Label Picks",
  "WED 20:00 - Scene Radar",
  "FRI 21:00 - Live Session",
  "SAT 23:00 - City Frequencies",
  "SUN 18:30 - Slow Cuts",
];

export const contactCards = [
  {
    title: "General Inquiry",
    detail: "hello@pelanatujuh.com",
  },
  {
    title: "Partnerships",
    detail: "partnership@pelanatujuh.com",
  },
  {
    title: "Booking and Events",
    detail: "booking@pelanatujuh.com",
  },
];
