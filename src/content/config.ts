import { defineCollection } from 'astro:content'
import { githubDiscussionsBlogLoader } from 'github-discussions-blog-loader'
import * as process from 'process'
const auth = process.env.GITHUB_AUTH_TOKEN
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
