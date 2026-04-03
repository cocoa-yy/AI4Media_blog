// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI4Media Blog',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/cocoa-yy' }],
			sidebar: [
				{
					label: '前沿专栏',
					autogenerate: { directory: 'FroColumn' },
				},
				{
					label: '技术分享会',
					autogenerate: { directory: 'TechShare' },
				},
			],
			locales: {
				root: {
				  label: '中文', // 语言显示名称
				  lang: 'zh-CN', // 语言代码
				},
			  },
			tableOfContents: {
			minHeadingLevel: 2,
			maxHeadingLevel: 3, // 限制目录为 <h2> 和 <h3>
			},
			head: [
				{
				  tag: 'link',
				  attrs: {
					rel: 'stylesheet',
					href: '/katex/katex.min.css', // 本地 KaTeX CSS
				  },
				},
			  ],
			  expressiveCode: false, // 禁用 Expressive Code 避免冲突
		}),
		
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
		  [rehypeKatex, { throwOnError: false }]
		],
	  },
});
