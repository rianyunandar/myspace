import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'Green Initiatives for a Sustainable Future',
    slug: 'green-initiatives-sustainable-future',
    content:
      'Exploring eco-friendly practices and sustainable solutions to protect our environment and create a better future for all.',
  },
  {
    title: 'Reducing Carbon Footprints: How You Can Make a Difference',
    slug: 'reducing-carbon-footprints-make-a-difference',
    content:
      'Learn about the impact of carbon emissions and discover actionable steps to reduce your carbon footprint and combat climate change.',
  },
  {
    title: 'Biodiversity Conservation: Preserving Nature’s Wonders',
    slug: 'biodiversity-conservation-preserving-natures-wonders',
    content:
      'Explore the importance of biodiversity and the role we play in conserving the diverse ecosystems that make up our planet.',
  },
  {
    title: 'Renewable Energy: Powering a Greener Tomorrow',
    slug: 'renewable-energy-powering-greener-tomorrow',
    content:
      'Discover the potential of renewable energy sources like solar and wind power in transitioning to a sustainable and environmentally friendly energy future.',
  },
  {
    title: 'Sustainable Living: Small Changes, Big Impact',
    slug: 'sustainable-living-small-changes-big-impact',
    content:
      'Find out how adopting sustainable living practices in your daily life can contribute to a healthier planet and a greener environment.',
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
