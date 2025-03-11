import { Input } from "@/components/ui/input"
import { debounce, fetchGithubData, fetchMetaData } from "@/lib/utils"
import { ChangeEvent, useState } from "react"
import { useFormContext } from "react-hook-form"
import { GithubData, ProfileDataType } from "../types"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const Socialpage = () => {


  const [githubdata, setGithubdata] = useState<GithubData | null | undefined>(null)
  const [profiledata, setprofiledata] = useState<ProfileDataType | null | undefined>(null)


  const {
    register
  } = useFormContext()

  const debounceGithub = debounce(async (url: string) => {
    const data: GithubData | null | undefined = await fetchGithubData(url)
    setGithubdata(data)
  }, 2000)


  const debounceProfile = debounce(async (url: string) => {
    const data = await fetchMetaData(url)
    setprofiledata(data)
  }, 2000)

  const handleGithubsubmmit = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    debounceGithub(url)
  }

  const handelProfilesubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    debounceProfile(url)
  }


  return (
    <div className="flex flex-col gap-3 justify-start items-start ">
      <div className="font-bold text-5xl">
        Social Links
      </div>
      <div className="font-semibold text-xl">
        Enter Your Socail Links. It Helps Us To Know You More
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="flex flex-1 gap-3 flex-col justify-start">
          <h1>Github Profile</h1>
          <Input
            {...register("github")}
            placeholder="Github Url"
            onChange={handleGithubsubmmit}
          />
          {
            githubdata &&
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Github Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4">
                    <Avatar>
                      <AvatarImage src={githubdata?.avatar_url} />
                    </Avatar>
                    <div className="flex flex-col col-span-3 justify-center">
                      <h1>{githubdata.name}</h1>
                      <h1>{githubdata.bio}</h1>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        </div>
        <div className="flex flex-1 gap-3 flex-col justify-start">
          <h1>Portfolio Profile</h1>
          <Input
            {...register("portfolio")}
            placeholder="Portfolio Url"
            onChange={handelProfilesubmit}
          />
          {
            profiledata &&
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col justify-start items-center">
                  <AspectRatio ratio={16 / 9}>
                    {
                      profiledata.image &&
                      <img src={profiledata.image} />
                    }
                  </AspectRatio>
                </div>
                <h1>{profiledata.title}</h1>
                <h1>{profiledata.description}</h1>
              </CardContent>
            </Card>
          }
        </div>
      </div>






    </div>
  )
}

export default Socialpage 
