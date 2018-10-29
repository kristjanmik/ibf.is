import React from "react";
import styles from "./RecentPosts.module.scss";
import PostCard, { FeaturedPostCard } from "../PostCard";
import { truncateText } from "../../utils/truncateText";

const RecentPosts = ({ posts: _posts, maxPosts = 5 }) => {
  if (!_posts || !Array.isArray(_posts)) {
    return null;
  }

  const posts = _posts.slice(0, maxPosts);

  return (
    <div className={styles.root}>
      <div className={styles.featured}>
        {posts
          .filter(post => post.isFeatured)
          .slice(0, 1)
          .map(post => (
            <FeaturedPostCard
              key={post.title}
              title={post.title}
              text={truncateText.apply(post.text)}
              imageUrl={post.image}
              date={post.date}
              isFeatured
            />
          ))}
      </div>
      <div className={styles.posts}>
        {posts.filter(post => !post.isFeatured).map(post => (
          <PostCard
            key={post.title}
            title={post.title}
            text={truncateText.apply(post.text)}
            date={post.date}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
