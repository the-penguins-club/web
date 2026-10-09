// schema.org description of the club, shared by the homepage (as the subject),
// event pages (as organizer) and blog posts (as publisher) so all three agree.
const SITE = 'https://thepenguins.club';

export const organization = {
  '@type': 'NGO',
  '@id': `${SITE}/#organization`,
  name: 'The Penguins Club',
  url: `${SITE}/`,
  logo: `${SITE}/favicon.svg`,
  image: `${SITE}/images/og/default.png`,
  description:
    'A volunteer-run Linux and open source charity in Bangladesh, going since 2020. Free monthly workshops, local package mirrors, and printed booklets we give away.',
  foundingDate: '2020',
  email: 'admin@thepenguins.club',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '26/18 Gulshan Badda Link Road',
    addressLocality: 'Dhaka',
    postalCode: '1212',
    addressCountry: 'BD'
  },
  sameAs: [
    'https://t.me/penguinsclubnetwork',
    'https://github.com/the-penguins-club',
    'https://discord.gg/BRPWt6fXRH'
  ]
};
