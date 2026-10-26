export type HiddenWoodsHome = {
  address: string;
  note: string;
  photos: { src: string; alt: string }[];
};

function photos(folder: string, address: string, count: number) {
  return Array.from({ length: count }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return {
      src: `/images/hidden-woods/${folder}/${n}.jpg`,
      alt: `${address} Timber Hill Court, Hidden Woods Village`,
    };
  });
}

export const hiddenWoodsHomes: HiddenWoodsHome[] = [
  {
    address: "211",
    note: "Ranch with a brick gable, cream board-and-batten, sage shutters, and a white garage.",
    photos: photos("221", "211", 26),
  },
  {
    address: "223",
    note: "Two-story home with a stone porch, white garage, and rear deck.",
    photos: photos("223", "223", 33),
  },
  {
    address: "224",
    note: "Stone and board-and-batten front, white garage, and a covered entry.",
    photos: photos("224", "224", 33),
  },
  {
    address: "229",
    note: "Two-story home on a wooded lot, gray siding, and a front porch.",
    photos: photos("229", "229", 33),
  },
];

export const hiddenWoodsVideos = [
  { id: "FgMYpoqruzM", label: "Hidden Woods Village" },
  { id: "U7tJgdIL9Cc", label: "211 Timber Hill" },
  { id: "lBWPL4KtCZI", label: "223 Timber Hill" },
  { id: "jduhQxQ5MgE", label: "224 Timber Hill" },
  { id: "adue2t-lyd0", label: "229 Timber Hill" },
] as const;

export const hiddenWoodsPlaylist =
  "https://www.youtube.com/playlist?list=PLBs8lq-RmHuU";
