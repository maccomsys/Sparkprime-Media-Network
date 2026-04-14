export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

const defaultContent = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<h2>The Evolution of the Industry</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<ul>
  <li>First key point about this topic that everyone should know.</li>
  <li>Second important aspect that changes the perspective.</li>
  <li>Third crucial detail that completes the picture.</li>
</ul>

<h3>Looking Towards the Future</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
`;

export const allPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-chips-are-redefining-the-future-of-computing',
    title: 'AI Chips Are Redefining the Future of Computing',
    excerpt: 'How the latest generation of specialized hardware is accelerating artificial intelligence research and deployment.',
    category: 'TECHNOLOGY',
    image: 'https://picsum.photos/seed/microchip/800/600',
    date: '2026-04-09',
    author: 'Sarah Chen',
    content: defaultContent
  },
  {
    id: '2',
    slug: '5g-networks-are-transforming-how-we-connect',
    title: '5G Networks Are Transforming How We Connect',
    excerpt: 'The rollout of 5G is enabling new technologies from autonomous vehicles to remote surgery.',
    category: 'TECHNOLOGY',
    image: 'https://picsum.photos/seed/5g-network/800/600',
    date: '2026-04-05',
    author: 'David Kim',
    content: defaultContent
  },
  {
    id: '3',
    slug: 'the-rise-of-quantum-computing-what-you-need-to-know',
    title: 'The Rise of Quantum Computing: What You Need to Know',
    excerpt: 'Quantum computers are moving out of the lab and into commercial applications. Here is what it means for the future.',
    category: 'TECHNOLOGY',
    image: 'https://picsum.photos/seed/quantum-computer/800/600',
    date: '2026-04-01',
    author: 'Elena Rodriguez',
    content: defaultContent
  },
  {
    id: '4',
    slug: 'cybersecurity-in-2025-protecting-the-digital-world',
    title: 'Cybersecurity in 2025: Protecting the Digital World',
    excerpt: 'As threats evolve, so do the tools and strategies needed to keep our data safe.',
    category: 'TECHNOLOGY',
    image: 'https://picsum.photos/seed/cybersecurity/800/600',
    date: '2026-03-28',
    author: 'Marcus Johnson',
    content: defaultContent
  },
  {
    id: '5',
    slug: 'the-creator-economy-is-now-worth-over-250-billion',
    title: 'The Creator Economy Is Now Worth Over $250 Billion',
    excerpt: 'Bloggers, podcasters, and influencers are turning passion projects into full-scale media businesses.',
    category: 'BUSINESS',
    image: 'https://picsum.photos/seed/creator-economy/800/600',
    date: '2026-01-27',
    author: 'David Kim',
    content: defaultContent
  },
  {
    id: '6',
    slug: 'e-commerce-growth-in-west-africa-opportunities-and-challenges',
    title: 'E-Commerce Growth in West Africa: Opportunities and Challenges',
    excerpt: 'Mobile-first consumers across West Africa are fueling a retail revolution that global brands cannot afford to ignore.',
    category: 'BUSINESS',
    image: 'https://picsum.photos/seed/ecommerce-africa/800/600',
    date: '2026-01-23',
    author: 'Amara Osei',
    content: defaultContent
  },
  {
    id: '7',
    slug: 'the-science-behind-a-good-nights-sleep-and-why-it-matters',
    title: 'The Science Behind a Good Night\'s Sleep and Why It Matters',
    excerpt: 'New research confirms that quality sleep is the single most powerful tool for physical and mental recovery.',
    category: 'HEALTH',
    image: 'https://picsum.photos/seed/sleep-science/800/600',
    date: '2026-01-19',
    author: 'Kwame Asante',
    content: defaultContent
  },
  {
    id: '8',
    slug: 'nba-finals-preview-breaking-down-the-favourites',
    title: 'NBA Finals Preview: Breaking Down the Favourites',
    excerpt: 'An in-depth look at the teams vying for the championship this season.',
    category: 'SPORTS',
    image: 'https://picsum.photos/seed/nba-basketball/800/600',
    date: '2026-03-08',
    author: 'Sarah Chen',
    content: defaultContent
  },
  {
    id: '9',
    slug: 'athletics-world-championships-records-set-to-fall',
    title: 'Athletics World Championships: Records Set to Fall',
    excerpt: 'Previewing the highly anticipated track and field events where history could be made.',
    category: 'SPORTS',
    image: 'https://picsum.photos/seed/athletics-track/800/600',
    date: '2026-03-04',
    author: 'Marcus Johnson',
    content: defaultContent
  },
  {
    id: '10',
    slug: 'sustainable-fashion-how-the-industry-is-going-green',
    title: 'Sustainable Fashion: How the Industry Is Going Green',
    excerpt: 'From recycled materials to ethical labor practices, the fashion industry is undergoing a major transformation.',
    category: 'FASHION',
    image: 'https://picsum.photos/seed/sustainable-fashion/800/600',
    date: '2026-02-15',
    author: 'Elena Rodriguez',
    content: defaultContent
  },
  {
    id: '11',
    slug: '10-hidden-beaches-you-need-to-visit-before-they-are-famous',
    title: '10 Hidden Beaches You Need to Visit Before They Are Famous',
    excerpt: 'Escape the crowds and discover these pristine coastal gems around the world.',
    category: 'TRAVEL',
    image: 'https://picsum.photos/seed/hidden-beaches/800/600',
    date: '2026-02-10',
    author: 'Amara Osei',
    content: defaultContent
  },
  {
    id: '12',
    slug: 'how-remote-work-is-reshaping-the-global-economy',
    title: 'How Remote Work Is Reshaping the Global Economy',
    excerpt: 'The shift to distributed teams is changing everything from real estate to corporate taxation.',
    category: 'BUSINESS',
    image: 'https://picsum.photos/seed/remote-work/800/600',
    date: '2026-02-08',
    author: 'David Kim',
    content: defaultContent
  },
  {
    id: '13',
    slug: 'womens-sport-is-booming-heres-the-data-to-prove-it',
    title: 'Women\'s Sport Is Booming — Here\'s the Data to Prove It',
    excerpt: 'Viewership, investment, and participation in women\'s sports are hitting all-time highs.',
    category: 'SPORTS',
    image: 'https://picsum.photos/seed/womens-sports/800/600',
    date: '2026-02-24',
    author: 'Sarah Chen',
    content: defaultContent
  },
  {
    id: '14',
    slug: 'africas-startup-ecosystem-just-raised-a-record-5-billion',
    title: 'Africa\'s Startup Ecosystem Just Raised a Record $5 Billion',
    excerpt: 'Venture capital is flowing into the continent at unprecedented rates, fueling innovation in fintech and beyond.',
    category: 'BUSINESS',
    image: 'https://picsum.photos/seed/africa-startup/800/600',
    date: '2026-02-12',
    author: 'Kwame Asante',
    content: defaultContent
  },
  {
    id: '15',
    slug: 'the-renaissance-of-contemporary-african-art',
    title: 'The Renaissance of Contemporary African Art',
    excerpt: 'Galleries worldwide are showcasing a new wave of talent from across the continent.',
    category: 'CULTURE',
    image: 'https://picsum.photos/seed/art-gallery/800/600',
    date: '2026-01-30',
    author: 'Amara Osei',
    content: defaultContent
  }
];
