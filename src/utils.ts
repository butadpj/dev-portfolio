export function calculateReadingTime(text: string) {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}

export function formatDate(date: Date) {
  const options = { year: "numeric", month: "long", day: "numeric" };

  //@ts-ignore
  return date.toLocaleDateString("en-US", options);
}
