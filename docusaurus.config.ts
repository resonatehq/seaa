import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Systems Eningeering for Agentic Applications",
  tagline: "",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://seaa.resonatehq.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "resonatehq", // Usually your GitHub org/user name.
  projectName: "seaa", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es-ES",
        calendar: "gregory",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root (ref: https://docusaurus.io/docs/next/docs-introduction#home-page-docs)
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/resonatehq/seaa/tree/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          exclude: ["**/code/**"],
        },
        blog: false,
        theme: {
          customCss: [
            "./static/css/custom.css",
            "./static/css/boxicons.min.css",
          ],
        },
        gtag: {
          trackingID: "G-0660YY8LZF",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  scripts: [
    {
      src: "/scripts/fullstory.js",
      async: true,
    },
    {
      src: "/scripts/cookiebanner.js",
      async: true,
    },
  ],
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap",
      rel: "stylesheet",
    },
  ],

  themeConfig: {
    image: "img/echo.png", // used for link previews
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: "Systems Engineering for Agentic Applications",
      logo: {
        alt: "SEAA logo",
        src: "img/logo.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          href: "https://resonatehq.io/discord",
          html: '<i class="bx bx-md bxl-discord"></i>',
          position: "right",
        },
      ],
    },

    footer: {
      style: "light",
      links: [
        {
          html: `
            <a href="https://resonatehq.io/discord" target="_blank" rel="noopener noreferrer" aria-label="Resonate HQ Discord">
              <i class="bx bx-sm bxl-discord"></i>
            </a>
          `,
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ResonateHQ, Inc.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
