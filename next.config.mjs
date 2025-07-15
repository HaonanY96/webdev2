import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

export default withNextra({
  // Your Next.js configuration options can go here
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}); 