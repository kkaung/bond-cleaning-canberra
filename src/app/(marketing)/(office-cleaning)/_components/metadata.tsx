import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Office Cleaning ${location}: #1 Office Cleaning Service in Canberra, ACT`,
        description: `Best Office Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
