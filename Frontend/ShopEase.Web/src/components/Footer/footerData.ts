export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  brand: {
    name: string;
    copyright: string;
    socialHeading: string;
    socialLinks: FooterLink[];
  };

  clientCare: {
    heading: string;
    links: FooterLink[];
  };

  theHouse: {
    heading: string;
    links: FooterLink[];
  };

  newsletter: {
    heading: string;
    description: string;
    label: string;
    placeholder: string;
    buttonLabel: string;
  };

  legal: {
    copyright: string;
    links: FooterLink[];
  };
}

export const footerData: FooterData = {
  brand: {
    name: 'ShopEase',
    copyright: '© 2026 ShopEase. All rights reserved.',
    socialHeading: 'Follow Us',

    socialLinks: [
      {
        label: 'Instagram',
        href: '#',
      },
      {
        label: 'Facebook',
        href: '#',
      },
      {
        label: 'TikTok',
        href: '#',
      },
      {
        label: 'YouTube',
        href: '#',
      },
    ],
  },

  clientCare: {
    heading: 'Client Care',

    links: [
      {
        label: 'FAQ',
        href: '#',
      },
      {
        label: 'Shipping & Returns',
        href: '#',
      },
      {
        label: 'Track Order',
        href: '#',
      },
      {
        label: 'Private Appointments',
        href: '#',
      },
    ],
  },

  theHouse: {
    heading: 'The House',

    links: [
      {
        label: 'Sustainability',
        href: '#',
      },
      {
        label: 'Careers',
        href: '#',
      },
      {
        label: 'Customer Reviews',
        href: '#',
      },
    ],
  },

  newsletter: {
    heading: 'Join the Inner Circle',
    description:
      'Receive private collection drops and updates from ShopEase.',
    label: 'Email Address',
    placeholder: 'Enter your email',
    buttonLabel: 'Subscribe',
  },

  legal: {
    copyright: '© 2026 ShopEase',

    links: [
      {
        label: 'Terms of Service',
        href: '#',
      },
      {
        label: 'Privacy Policy',
        href: '#',
      },
    ],
  },
};