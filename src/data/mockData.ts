export const articles = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Article Title ${index + 1}`,
  excerpt: `This is a short excerpt for article ${index + 1}.`,
  date: `2026-01-${String(index + 1).padStart(2, "0")}`,
  thumbnailUrl: `https://picsum.photos/300/200?random=${index + 1}`,
  author: {
    name: `Author ${index + 1}`,
    avatarUrl: `https://i.pravatar.cc/40?img=${index + 1}`,
  },
}));