import { type Metadata } from 'next';
import React from 'react';
import { checkUserAgentForGooglebot } from '@/lib/next';

import CloakedContent from './_components/cloaked-content';
import Content from './_components/content';
import { siteConfig } from '@/configs/site';

export const metadata: Metadata = {
    title: `${siteConfig.name}: #1 End Of Lease Cleaning Service in Canberra, ACT`,
    description: `Best Bond Cleaning Service ✔️ 100% Bond Back Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <CloakedContent />;

    return <Content location="Canberra" />;
}
