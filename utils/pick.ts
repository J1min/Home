import { PickType } from "@/types/pick";

/**
 * 주어진 배열에서 랜덤으로 n개의 요소를 선택하는 함수
 * @param {T[]} arr - 요소를 선택할 배열
 * @param {number} n - 선택할 요소의 수
 * @returns {T[]} - 랜덤으로 선택된 n개의 요소로 이루어진 배열
 */
export function getRandomElements<T>(arr: T[], n: number = 3): T[] {
  const shuffled = arr.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, n);
}

export const getEmoji = (pickType: PickType) => {
  switch (pickType) {
    case "MOVIE": {
      return "🎬";
    }
    case "ANIME": {
      return "💕";
    }
    case "ALCOHOL": {
      return "🍹";
    }
    case "FOOD": {
      return "🍜";
    }
    case "BOOK": {
      return "📚";
    }
    case "FASHION": {
      return "👔";
    }
    case "MUSIC": {
      return "🎵";
    }
  }
};
