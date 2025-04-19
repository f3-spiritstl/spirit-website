// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'F3 Spirit of St. Louis',
			logo: {
				light: './src/assets/icon.svg',
				dark: './src/assets/icon-dark.svg',
				replacesTitle: true,
			},
			lastUpdated: true,
			social: [
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://instagram.com/f3spiritstl'
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/f3-spiritstl'
				}
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ slug: 'start-here/welcome' },
						{ slug: 'start-here/faq' },
					],
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					items: [
						// Items here will use the page title as the label.
						// If you want to change that, you can use the `label` property here.
						{ slug: 'reference/intro' },
						{ slug: 'reference/locations' },
						{ slug: 'reference/lexicon' },
						{ slug: 'reference/exicon' },
						{ slug: 'reference/appsicon' },
					],
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
		}),
	],
});
