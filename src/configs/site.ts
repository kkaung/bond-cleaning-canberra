import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/company/',
    pinterest: 'https://www.pinterest.com.au/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://youtube.com',
    twitter: 'https://x.com/',

    googlemap: '',
};

export const siteConfig = {
    logo: 'Bond Cleaning Canberra',
    name: 'Bond Cleaning Canberra',
    title: 'Bond Cleaning Canberra',
    description:
        'Bond Cleaning Canberra is your premier provider of top-notch cleaning services, ensuring pristine homes and offices across Canberra with unmatched professionalism and care.',
    url: 'https://bondcleaningcanberra.net.au',
    ogImage: 'https://bondcleaningcanberra.net.au/opengraph-image.png',
    domain: 'bondcleaningcanberra.net.au',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Spring Cleaning',
                    href: '/spring-cleaning-canberra',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-canberra',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/bond-cleaning-pricing-canberra',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Spring Cleaning Canberra',
                    href: '/spring-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning Canberra',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning Canberra',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning Canberra',
                    href: '/carpet-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning Canberra',
                    href: '/',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/bond-cleaning-pricing-adelaide',
                },
                {
                    title: 'Products',
                    href: '/products',
                },
                { title: 'Checklist', href: '/bond-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about' },
                { title: 'Careers', href: '/careers' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@bondcleaningcanberra.net.au',
        phone: '+61 414076980',
        address: '16 Kendall Ln, Canberra ACT 2601',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 1027,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
