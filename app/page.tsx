"use client";

import Pick from "@/components/pick";
import { IPick } from "@/types/pick";
import { getEmoji, getRandomElements } from "@/utils/pick";
import { useEffect, useState } from "react";

function MainPage() {
  const [recommendedPickList, setRecommendedPickList] = useState<IPick[]>([]);
  const [allPickList, setAllPickList] = useState<IPick[]>([]);

  useEffect(() => {
    const fakePickList: IPick[] = [
      {
        id: 1,
        title: "여름을 향한 터널, 이별의 출구",
        thumbnail:
          "https://i.namu.wiki/i/t_dnY7vcewZiZjodEjLwc5PrVEIlTyBKgLxsMM3mQ9b4UtoxneVoEgoQTNqr3_PskTpC2vKYe6u5M3oaaEuCrIyRyMnpqpXQlccgAQVrF8UaU_6_hBGiWkQyVu_To00WkLBrPmwkOv5IyOqXUHcAKw.webp",
        content: "여름을 향한 터널, 이별의 출구",
        likes: 10,
        type: "ANIME",
      },
      {
        id: 2,
        title: "인간실격",
        thumbnail:
          "https://i.namu.wiki/i/wcWJ2iZKrFTWj-1Gc5f_sXdxwrAaMR8ZN1k3vts_TDyiaStrNbxEi2SbVAyCQ8Dd-pLQR1XMd0wRypaMRY6q83yXdp8ergg9rBXik2o_WgkzQRoKHbP5kFxXaqlGlORneF29zH_LoTUnGdbcmwjfGQ.webp",
        content: "인간실격",
        likes: 20,
        type: "BOOK",
      },
      {
        id: 3,
        title: "출근룩 13",
        thumbnail:
          "https://velog.velcdn.com/images/j1min/post/7b956c84-74e5-43a9-9f08-5b4a06328436/image.png",
        content: "출근룩 1",
        likes: 30,
        type: "FASHION",
      },
      {
        id: 4,
        title: "트루먼 쇼",
        thumbnail:
          "https://i.namu.wiki/i/J36nLuIbfXxZ5v8GH5lEli3EYQAddJgqaQvXl3msB-Gr1c68d_kBoo3zWGQE2zohZaMi0ezuvZpNknU5H7ldVuCYAnLOfCbDp84wNPc6OuWrbM9DQAP2_n4Uy8QRSgKVrvRCWCo9MlN8haWYLLZOwA.webp",
        content: "트루먼 쇼",
        likes: 40,
        type: "MOVIE",
      },
      {
        id: 5,
        title: "찬란",
        thumbnail:
          "https://image.bugsm.co.kr/album/images/200/205538/20553834.jpg?version=20231026070631.0",
        content: "찬란",
        likes: 50,
        type: "MUSIC",
      },
      {
        id: 6,
        title: "위석기",
        thumbnail:
          "https://img.gqkorea.co.kr/gq/2022/06/style_6299aaf269d81.jpg",
        content: "위석기",
        likes: 50,
        type: "ALCOHOL",
      },
      {
        id: 7,
        title: "스프카레",
        thumbnail: "https://img.siksinhot.com/article/1545813929249009.jpg",
        content: "스프카레",
        likes: 50,
        type: "FOOD",
      },
    ];

    const randomPickList = getRandomElements(fakePickList);
    setRecommendedPickList(randomPickList);
    setAllPickList(fakePickList);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container max-w-5xl mx-auto px-10">
        <div className="flex justify-between mb-8 border-b border-black pb-4">
          <h1 className="text-primary text-3xl font-semibold">하루로그</h1>
          <div>
            {getEmoji("ANIME")} | {getEmoji("FOOD")} | {getEmoji("ALCOHOL")} |{" "}
            {getEmoji("BOOK")} | {getEmoji("FASHION")} | {getEmoji("MOVIE")} |{" "}
            {getEmoji("MUSIC")}
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-8">오늘의 힙스터픽 추천</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedPickList.map((pick) => (
            <Pick pick={pick} key={pick.id} />
          ))}
        </div>

        <h1 className="text-2xl font-semibold mb-8 pt-12">
          모든 힙스터픽 보기
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allPickList.map((pick) => (
            <Pick pick={pick} key={pick.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
