import { defineCollection } from 'astro:content'
import { githubDiscussionsBlogLoader } from 'github-discussions-blog-loader'
// @ts-ignore
const auth = process.env.PUBLIC_GITHUB_AUTH_TOKEN;

const blogPosts = defineCollection({
  loader: githubDiscussionsBlogLoader({
    //@ts-ignore
    auth: auth,
    repo: {
      name: 'personalWebsite',
      owner: 'nduartech',
    },
  }),
})

export const collections = { blogPosts }
