import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios'
import { GithubData, ProfileDataType } from "@/Form/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


export function debounce(cb, wait) {
  let timer: NodeJS.Timeout | null = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      cb(...args)
    }, wait)
  }
}

export async function fetchGithubData(url: string) {
  try {
    const username = url.split('/').pop()
    if (!username) return null
    const data = await axios.get(`https://api.github.com/users/${username}`)
    const githubdata: GithubData = {
      bio: data.data.bio,
      name: data.data.name,
      avatar_url: data.data.avatar_url
    }
    return githubdata
  } catch (e) {
    console.log(e)
  }
}

export async function fetchMetaData(url: string) {
  try {
    const response = await fetch(url)
    const htmlText = await response.text()
    const docs = new DOMParser().parseFromString(htmlText, 'text/html')
    const title = docs.querySelector('title')?.textContent || "No title found"
    const description = docs.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'No description found';
    const image = docs.querySelector('meta[property="og:image"]')?.getAttribute('content') || "no image found"
    const profiledata: ProfileDataType = {
      image,
      title,
      description
    }
    return profiledata
  } catch (e) {
    console.log(e)
  }
}

