// Site wide settings. Edit the values here and the whole site follows.

export const SITE_TITLE = 'Curious Ankit';
export const SITE_DESCRIPTION =
  "A notebook on learning AI, one experiment at a time.";

export const NAV = [
  { label: 'Notes', href: '/notes' },
  { label: 'Experiments', href: '/experiments' },
  { label: 'Learning', href: '/learning' },
  { label: 'About', href: '/about' },
];

export const AUTHOR = {
  name: 'Ankit',
  bio: 'Learning AI in public, from Melbourne.',
  // Put a photo in the public folder and set the path, for example '/ankit.jpg'.
  // While this is empty, a plain monogram is shown instead.
  photo: '',
};

export const LINKS = {
  home: 'https://ank1t.com',
  email: 'hello@curiousankit.com',
  // Paste your LinkedIn profile address to show it in the footer and on the About page.
  linkedin: '',
};

// The "Get new notes by email" block appears on the home page once this is set.
// Use the form address given by your email newsletter service.
export const SUBSCRIBE_ACTION = '';

// Shown in the "Currently studying" list on the home page. Leave empty to hide it.
// Example: { title: 'Course name', meta: 'Provider · in progress' }
export const CURRENTLY_STUDYING: { title: string; meta: string }[] = [];
