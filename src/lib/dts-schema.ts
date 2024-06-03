import { siteConfig } from '@/configs/site';
import type {
    Graph,
    LocalBusiness,
    Organization,
    Product,
    WebSite,
} from 'schema-dts';
import { absoluteUrl } from './utils';

const isBrowser = typeof window !== 'undefined';

export const OrganizationSchema: Organization = {
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    logo: absoluteUrl('/images/logo.png'),
    ...(isBrowser && { url: absoluteUrl(window.location.pathname) }),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '151 George St Brisbane City',
        postalCode: '4000',
        addressLocality: 'Brisbane City',
        addressCountry: 'Australia',
    },
    sameAs: [
        siteConfig.links.facebook,
        siteConfig.links.linkedin,
        siteConfig.links.pinterest,
        siteConfig.links.youtube,
        siteConfig.links.instagram,
    ],
};

export const ProductSchema: Product = {
    '@type': 'Product',
    name: siteConfig.name,
    description: siteConfig.description,
    image: absoluteUrl('/images/logo.png'),
    brand: {
        '@type': 'Brand',
        name: siteConfig.name,
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        bestRating: '5',
        worstRating: '1',
        ratingValue: siteConfig.rating.ratingValue,
        ratingCount: siteConfig.rating.ratingCount,
    },
};

export const WebSiteSchema: WebSite = {
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'en-GB',
};

export const LocalBusinessSchema: LocalBusiness = {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: absoluteUrl('/images/logo.png'),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '151 George St Brisbane City',
        postalCode: '4000',
        addressLocality: 'Brisbane City',
        addressCountry: 'Australia',
    },
};

export const graphSchemas: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        OrganizationSchema,
        WebSiteSchema,
        ProductSchema,
        LocalBusinessSchema,
    ],
};
