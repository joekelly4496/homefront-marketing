import { absoluteUrl } from '@/lib/site';
import { brand, pricing, type Faq } from '@/lib/content';

/** Stable @id values so the graph nodes can reference each other. */
export const organizationId = `${absoluteUrl('/')}#organization`;
export const softwareId = `${absoluteUrl('/')}#software`;
export const websiteId = `${absoluteUrl('/')}#website`;

/**
 * Organization — the entity node. Answer engines use this to resolve
 * "Afterkey" to a company rather than a common noun.
 *
 * NOTE: `sameAs` is intentionally omitted. Afterkey has no public social
 * profiles yet; listing empty or speculative ones is worse than omitting
 * the property. Add the array here once the profiles exist.
 */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: brand.name,
    legalName: brand.legalName,
    url: absoluteUrl('/'),
    description: brand.definition,
    email: brand.email,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/opengraph-image'),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: brand.email,
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: brand.name,
    url: absoluteUrl('/'),
    description: brand.definition,
    publisher: { '@id': organizationId },
    inLanguage: 'en-US',
  };
}

/**
 * SoftwareApplication with the full price breakdown as Offers. The base and
 * per-home charges are separate offers because they are separate line items —
 * flattening them into one number would misstate the price.
 */
export function softwareApplicationSchema() {
  return {
    '@type': 'SoftwareApplication',
    '@id': softwareId,
    name: brand.name,
    url: absoluteUrl('/'),
    description: brand.definition,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Construction Management Software',
    operatingSystem: 'Web browser',
    publisher: { '@id': organizationId },
    audience: {
      '@type': 'Audience',
      audienceType: 'Residential home builders',
    },
    featureList: [
      'Warranty and service request management with SLA tracking',
      'Subcontractor dispatch, ratings, and cost intelligence',
      'Subcontractor compliance document tracking with dispatch gating',
      'AI-built home maintenance schedules with cited sources',
      'Homeowner portal with request submission and status tracking',
      'Homeowner maintenance memberships and recurring billing',
      'Photo documentation and complete service history',
      'Dedicated SMS and voice business line',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: pricing.base,
      offerCount: 4,
      offers: [
        {
          '@type': 'Offer',
          name: 'Platform base',
          description:
            'Base subscription including unlimited team members and unlimited subcontractors.',
          price: pricing.base,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: pricing.base,
            priceCurrency: 'USD',
            unitText: 'MONTH',
            billingDuration: 1,
            billingIncrement: 1,
          },
        },
        {
          '@type': 'Offer',
          name: 'Per active home',
          description:
            'Charged per home while it is under warranty or on an active service plan. Dormant homes are not billed.',
          price: pricing.perHome,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: pricing.perHome,
            priceCurrency: 'USD',
            unitText: 'MONTH',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: 1,
              unitText: 'active home',
            },
          },
        },
        {
          '@type': 'Offer',
          name: 'AI add-on',
          description: `Optional AI add-on including ${pricing.ai.actionsPerHome} AI actions per home per month, pooled across all homes. Additional actions are $${pricing.ai.overagePerAction} each.`,
          price: pricing.ai.price,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: pricing.ai.price,
            priceCurrency: 'USD',
            unitText: 'MONTH',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: 1,
              unitText: 'active home',
            },
          },
        },
        {
          '@type': 'Offer',
          name: 'SMS add-on',
          description: `Optional dedicated business number including ${pricing.sms.includedSegments.toLocaleString()} segments per month. Additional segments are $${pricing.sms.overagePer1000} per 1,000.`,
          price: pricing.sms.price,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: pricing.sms.price,
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
        },
      ],
    },
  };
}

/** FAQPage — only emit on pages that actually render the same Q&A visibly. */
export function faqPageSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

/** BreadcrumbList. Pass the trail without the home crumb — it's prepended. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** A WebPage node that ties a page to the site and organization graph. */
export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': websiteId },
    about: { '@id': softwareId },
    publisher: { '@id': organizationId },
    inLanguage: 'en-US',
  };
}

/** Wraps nodes into a single @graph document. */
export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
