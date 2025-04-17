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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
						// If you want to change that, you can use the `label` property.
						{ slug: 'reference/intro' },
						{ slug: 'reference/lexicon' },
						{ slug: 'reference/exicon' },
						{ slug: 'reference/appsicon' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'F3 Nation', link: 'https://f3nation.com' },
						{ label: 'Maps', link: 'https://maps.f3nation.com' },
						{ label: 'Workout Finder', link: 'https://f3near.me' },
						{ label: 'F3 Gear', link: 'https://f3gear.com' },
					]
				},
			],
		}),
	],
});
