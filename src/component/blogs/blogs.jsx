import styles from "./blogs.module.css";
import PropTypes from "prop-types";
import { GoPencil } from "react-icons/go";
import { FiTrendingUp } from "react-icons/fi";
import { LuFileSignature } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
function Blog({ blogPosts }) {
  console.log(blogPosts);
  return (
    <>
      <div className={styles.BlogContainer}>
        <p>Social Media</p>
        <div className={styles.CardList}>
          {blogPosts?.map((blog, index) => (
            <div className={styles.BlogCard} key={index}>
              <div className={styles.IconsTop}>
                <span className={styles.Pencil}>
                  {blog.title && blog.title.includes("Blog") ? (
                    <GoPencil />
                  ) : null ||
                    (blog.title && blog.title.includes("description")) ? (
                    <LuFileSignature style={{ color: "#00C48C" }} />
                  ) : null || (blog.title && blog.title.includes("Article")) ? (
                    <RiFileList2Line style={{ color: "#EA0022" }} />
                  ) : null}
                </span>
                <span className={styles.Trend}>
                  <FiTrendingUp />
                </span>
              </div>
              <div className={styles.CardText}>
                <h3>{blog?.title}</h3>
                <p>{blog?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Blog.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};
export default Blog;
