// Site wide settings. Edit the values here and the whole site follows.

export const SITE_TITLE = 'Curious Ankit';
export const SITE_DESCRIPTION =
  'Notes from an endlessly curious mind. My hands on journey with AI, and every rabbit hole I fall into along the way.';

export const NAV = [
  { label: 'AI Journey', href: '/ai-journey/' },
  { label: 'Rabbit Holes', href: '/rabbit-holes/' },
  { label: 'Shelf', href: '/shelf/' },
  { label: 'Archive', href: '/archive/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

// Short lines shown beside each item in the phone menu.
export const NAV_HINTS: Record<string, string> = {
  Shelf: 'Books + screen',
  Archive: 'Every note',
  About: "Hi, I'm Ankit",
  Contact: 'Ask me anything',
};

export const AUTHOR = {
  name: 'Ankit',
  city: 'Melbourne',
};

export const LINKS = {
  home: 'https://ank1t.com',
  email: 'hello@curiousankit.com',
  github: 'https://github.com/ankitmehtadev',
  // Paste your LinkedIn profile address to show it in the footer, menu and About page.
  linkedin: '',
};

// The red ticker on the home page. Replace the bracketed lines with what you are into right now.
export const CURRENTLY_CURIOUS = [
  '[Topic you are digging into]',
  '[Book on the desk]',
  '[AI tool being tested]',
  "[A question that won't leave you alone]",
];

// Email sign up. Paste the form address from your newsletter service (Buttondown, Kit, etc.).
// While this is empty, the subscribe box opens an email to you instead, so nobody is lost.
export const SUBSCRIBE_ACTION = '';
// The name of the email field your newsletter service expects.
export const SUBSCRIBE_FIELD = 'email';

// The five Rabbit Hole topics, in the order they are shown.
export const RABBIT_TOPICS = ['Mind', 'History', 'Money', 'Productivity', 'Wildcard'] as const;

export const RABBIT_TOPIC_BLURBS: Record<string, string> = {
  Mind: 'Psychology, habits and why we do what we do.',
  History: 'Events, people and the stories behind them.',
  Money: 'Personal finance and how money really works.',
  Productivity: 'Focus, systems and getting things done.',
  Wildcard: 'Anything else that caught my eye.',
};
