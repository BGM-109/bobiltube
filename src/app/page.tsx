import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { athleteList, categoryList } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface VideoEntity {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

const channelId = "UC4514FwdRy5gI6CdC9GPb0w";

async function getHello() {
  const response = await fetch("http://localhost:3001/api/hello", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Hello API 호출 실패");
  }
  return response.json();
}
async function getVideos() {
  const response = await fetch(
    `http://localhost:3001/api/getVideos?channelId=${channelId}&filter=date`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("동영상을 가져오는데 실패했습니다");
  }

  return response.json();
}

export default async function Home() {
  // const videos = await getVideos();
  const tags = [
    "chest",
    "back",
    "shoulder",
    "biceps",
    "triceps",
    "abs",
    "legs",
  ];
  return (
    <div className="max-w-7xl mx-auto p-10">
      <Tabs defaultValue={categoryList[0]}>
        <TabsList className="w-full">
          {categoryList.map((tab) => (
            <TabsTrigger value={tab} key={tab} className="w-full">
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {categoryList.map((tab) => (
          <TabsContent value={tab} key={tab}>
            <ul className="flex flex-wrap gap-x-3 py-2">
              {athleteList
                .filter((athlete) => athlete.category === tab)
                .map((athlete, index) => (
                  <Link
                    href={`/?channelId=${athlete.youtubeChannelId}`}
                    key={index}
                    className="flex flex-col items-center gap-y-1 justify-center"
                  >
                    <Avatar>
                      <AvatarImage src={athlete.profile} />
                      <AvatarFallback> CN</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground ">
                      {athlete.name}
                    </p>
                  </Link>
                ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
      <ul>
        {tags.map((tag) => (
          //
          <Link href={`/?tag=${tag}`} key={tag}>
            {tag}
          </Link>
        ))}
      </ul>
    </div>
  );
}
