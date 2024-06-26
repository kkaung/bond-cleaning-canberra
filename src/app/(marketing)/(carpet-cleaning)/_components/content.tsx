import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import React from 'react';
import About from '@/components/about';
import Commitment from '@/components/commitment';

import Hero from './hero';
import FAQs from './faqs';
import Features from './features';
import Reviews from './reviews';

import LatestBlog from '../../_components/latest-blog';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Hero location={city} />
                <Reviews location={city} />
                <Features location={city} />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
