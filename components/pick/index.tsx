import { ContentExcludedPick } from "@/types/pick";
import { getEmoji } from "@/utils/pick";

export default function Pick({ pick }: { pick: ContentExcludedPick }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 truncate">
        ({getEmoji(pick.type)}) {pick.title}
      </h2>
      <img
        src={pick.thumbnail}
        alt={pick.title}
        className="w-full h-72 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-600">
        <span className="text-primary">❤️</span> {pick.likes}
      </p>
    </div>
  );
}
