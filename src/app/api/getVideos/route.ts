import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;

interface Filter {
  [key: string]: string[];
}

const filterMap: Filter = {
  chest: ["chest"],
  back: ["back"],
  shoulders: ["shoulders"],
  triceps: ["triceps"],
  biceps: ["biceps"],
  arms: ["arms"],
  legs: ["leg", "glutes", "hamstrings", "calves"],
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const channelId = searchParams.get("channelId");
  const tag = searchParams.get("tag");

  if (!channelId) {
    return NextResponse.json(
      { error: "채널 ID가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=20&type=video`
    );

    if (!response.ok) {
      const msg = await response.text();
      throw new Error(`YouTube API 요청 실패 >>> ${msg}`);
    }

    const data = await response.json();
    // console .log videos
    console.log(data.items);
    const videos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
      publishedAt: item.snippet.publishedAt,
    }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error("에러:", error);
    return NextResponse.json(
      { error: "비디오를 가져오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
