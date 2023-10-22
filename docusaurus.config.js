// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'augustkang',
  tagline: "You don't have to be great to start, but you have to start to be great.",
  url: 'https://augustkang.com',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'augustkang',
  projectName: 'augustkang.github.io',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          sidebarCollapsed: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-KQH8MPENXW',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'augustkang, blog, devops, sre, cloud'
        },
      ],
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      image: 'img/august.png',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'augustkang',
        logo: {
          src: 'img/august.png',
        },
        items: [
          {
            href: 'https://github.com/augustkang.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://linkedin.com/in/augustkang',
            label: 'LinkedIn',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} augustkang`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
