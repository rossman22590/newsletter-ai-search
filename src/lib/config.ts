export const environment = process.env.NODE_ENV || 'development'
export const isDev = environment === 'development'
export const isServer = typeof window === 'undefined'
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = "Ben's Bites Links"
export const description =
  "Your daily dose of what's going on in AI. In 5 minutes or less, with a touch of humour. Read by over 50,000 others from Google, a16z, Sequoia, Amazon, Meta and more."

export const domain = 'bensbites.vercel.app'

export const author = 'Travis Fischer'
export const twitter = 'transitive_bs'
export const twitterUrl = `https://twitter.com/${twitter}`
export const discordUrl = 'https://discord.gg/ben-s-bites-1039224571376701510'
export const newsletterUrl = 'https://www.bensbites.co/'
export const githubRepoUrl =
  'https://github.com/transitive-bullshit/bens-bites-ai-search'
export const githubSponsorsUrl =
  'https://github.com/sponsors/transitive-bullshit'
export const copyright = `Copyright 2023 ${author}`
export const madeWithLove = 'Made with ❤️ in Brooklyn, NY'

export const port = process.env.PORT || '3000'
export const prodUrl = `https://${domain}`
export const url = isDev ? `http://localhost:${port}` : prodUrl

export const apiBaseUrl =
  isDev || !process.env.VERCEL_URL ? url : `https://${process.env.VERCEL_URL}`

// these must all be absolute urls
export const socialImageUrl = `${url}/social.jpg`
