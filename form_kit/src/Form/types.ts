import Addresspage from "./pages/address.page"
import Personalpage from "./pages/personal.page"
import Resumepage from "./pages/resume.page"
import Socialpage from "./pages/social.page"
import Workpage from "./pages/work.page"



export interface CountriesDataType {
  [key: string]: {
    name: string,
    code: string,
    states: {
      name: string,
      cities: string[]
    }[]
  }
}


export interface GithubData {
  name: string,
  bio: string,
  avatar_url: string
}


export interface ProfileDataType {
  image: string,
  title: string,
  description: string
}


export enum Headings {
  PERSONAL = 'Personal Information',
  ADDRESS = 'Address',
  WORK = "Work Experience",
  SOCIAL = 'Social Link',
  RESUME = 'Resume'
}


export type PageType = {
  id: string,
  title: string,
  desc: string,
  component: () => React.JSX.Element
}


export const pages: PageType[] = [
  {
    id: Headings.PERSONAL,
    title: Headings.PERSONAL,
    desc: "",
    component: Personalpage
  },
  {
    id: Headings.ADDRESS,
    title: Headings.ADDRESS,
    desc: "",
    component: Addresspage
  },
  {
    id: Headings.WORK,
    title: Headings.WORK,
    desc: "",
    component: Workpage
  },
  {
    id: Headings.SOCIAL,
    title: Headings.SOCIAL,
    desc: "",
    component: Socialpage
  },
  {
    id: Headings.RESUME,
    title: Headings.RESUME,
    desc: "",
    component: Resumepage
  }
]





