import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Carpet Cleaner ${location}:  #1 Carpet Cleaning Service in ${location}, ACT`,
        description: `Best Carpet Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
