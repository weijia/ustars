import { Octokit } from 'octokit'
import fs from 'fs'
import path from 'path'

const GITHUB_TOKEN = process.env.GH_TOKEN;
const octokit = new Octokit({ auth: GITHUB_TOKEN })

export async function fetchStarProjects() {
  let page = 1
  const allStarredProjects = []
  
  while (true) {
    const response = await octokit.request('GET /user/starred', {
      per_page: 100,
      page: page,
    })
    
    console.log('fetching page', page)
    if (response.data.length === 0) {
      break
    }
    
    allStarredProjects.push(...response.data)
    page++

    await new Promise(resolve => setTimeout(resolve, 1_000))
  }
  
  return allStarredProjects
}

const allStars = await fetchStarProjects()
const copiedStars = allStars.map(star => ({
  stargazers_count: star.stargazers_count,
  language: star.language,
  description: star.description,
  full_name: star.full_name,
  name: star.name,
  topics: star.topics,
  user: {
    avatar: star.owner.avatar_url,
    login: star.owner.login,
  },
  html_url: star.html_url,
  created_at: star.created_at,
  updated_at: star.updated_at,  
}))

fs.writeFileSync(path.join(__dirname, 'server', 'api', 'all-stars.json'), JSON.stringify(copiedStars))
console.log('done')