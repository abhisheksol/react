import React, { useState, useEffect } from "react";
import axios from "axios";

const RedditFetcher = ({ subreddit }: { subreddit: string }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(""); // Reset error state
      try {
        const response = await axios.get(
          `https://www.reddit.com/r/${subreddit}.json`
        );
        setPosts(response.data.data.children);
      } catch (err) {
        setError("⚠️ Failed to fetch posts. The subreddit may not exist.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [subreddit]);

  return (
    <div className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">🔗 Reddit Posts: r/{subreddit}</h2>

      {/* Show loading state */}
      {loading && <p className="text-blue-500 font-semibold">Loading...</p>}

      {/* Show error if request fails */}
      {error && <p className="text-red-500 font-semibold">{error}</p>}

      {/* Show posts only if there are no errors */}
      {!loading && !error && posts.length > 0 && (
        <ul className="list-disc text-left mx-auto w-3/4">
          {posts.map((post: any, index: number) => (
            <li key={index} className="mb-2">
              <a
                href={`https://reddit.com${post.data.permalink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Handle empty subreddit (but valid) */}
      {!loading && !error && posts.length === 0 && (
        <p className="text-gray-500">No posts found.</p>
      )}
    </div>
  );
};

export default RedditFetcher;
