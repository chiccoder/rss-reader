import Parser from "rss-parser";

export default async function getFeed() {
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  let parser = new Parser();

  let feed = await parser.parseURL(
    CORS_PROXY + "https://rss.art19.com/apology-line"
  );
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
  return feed;
}
