import React, { useEffect, useState } from "react";

// Hacker News API URL
const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const STORY_URL = "https://hacker-news.firebaseio.com/v0/item/";

// 📰 News Item Component
const NewsItem = ({ title, url }) => (
  <li className="p-2 border-b">
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
      {title}
    </a>
  </li>
);

// 📰 News List Component
const NewsList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        // Fetch top story IDs
        const response = await fetch(TOP_STORIES_URL);
        const storyIds = await response.json();

        // Fetch first 10 story details
        const top10Stories = await Promise.all(
          storyIds.slice(0, 10).map(async (id) => {
            const res = await fetch(`${STORY_URL}${id}.json`);
            return res.json();
          })
        );

        setStories(top10Stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">📰 Hacker News Top Stories</h2>
      <ul>{stories.map((story) => story.url && <NewsItem key={story.id} title={story.title} url={story.url} />)}</ul>
    </div>
  );
};

// 🌟 Main Hacker_news Component
const Hacker_news = () => {
  return (
    <div className="p-6">
      <NewsList />
    </div>
  );
};

export default Hacker_news;
