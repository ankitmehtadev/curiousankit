// Site wide settings. Edit the values here and the whole site follows.

export const SITE_TITLE = 'Curious Ankit';
export const TAGLINE = "Notes from a technologist who can't stop asking why";
export const SITE_DESCRIPTION =
  "Notes from a technologist who can't stop asking why. The story behind an everyday thing every week, and deeper dives into questions worth exploring.";

// The two kinds of post, with their list page address and one line description.
export const WHYS = {
  label: 'Everyday Whys',
  href: '/everyday-whys/',
  blurb: 'The story behind an everyday thing.',
};
export const DIVES = {
  label: 'Deep Dives',
  href: '/deep-dives/',
  blurb: "When one question leads to many more. Published when they're ready.",
  short: 'When one question leads to many more.',
};

// Home page opening line under the tagline.
export const HOME_INTRO =
  "I'm Ankit, based in Melbourne. Every week I share the story behind an everyday thing. Now and then I go deeper on a question I can't let go of.";

export const AUTHOR = {
  name: 'Ankit',
  city: 'Melbourne',
};

export const LINKS = {
  email: 'hello@curiousankit.com',
  github: 'https://github.com/ankitmehtadev',
  linkedin: 'https://www.linkedin.com/in/ankit-lead/',
};

// About page. Edit freely.
export const ABOUT = {
  heading: "I'm Ankit, a technologist based in Melbourne.",
  bio: "For over 12 years I've worked across digital transformation, enterprise procurement, SaaS delivery and AI experiments, mentoring people along the way. I'm the person who keeps reading past the first answer. This is where I share what I find.",
  // Leave empty ([]) to hide the "Currently" line.
  currently: ['An AI course', "Poor Charlie's Almanack"],
};

// Email sign up through Kit.
// While SUBSCRIBE_ACTION is empty, the subscribe box opens an email to you instead, so nobody is lost.
export const SUBSCRIBE_ACTION = 'https://app.kit.com/forms/10064935/subscriptions';
export const SUBSCRIBE_FIELD = 'email_address'; // Kit's field name
