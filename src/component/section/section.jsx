import styles from "./section.module.css";
import Hero from "../hero/hero";
import Blog from "../blogs/blogs";

const blogPosts = [
  {
    title: "Blog writing",
    description:
      "Generate the best blog post to fit your audience with just few clicks of a button",
  },
  {
    title: "Product description",
    description: "Instantly generate engaging product descriptions that sell",
  },
  {
    title: "Article writer",
    description:
      "Automatically create unique factual articles at the touch of a button",
  },
  {
    title: "Blog writing",
    description:
      "Generate the best blog post to fit your audience with just few clicks of a button",
  },
];

function Section() {
  return (
    <>
      <section className={styles.Section}>
        <Hero />
        <div className={styles.MostPopular}>
          <h2>Most Popular Tools</h2>
          <p>Explore the trending tools to create your copies fast</p>
        </div>
        <Blog blogPosts={blogPosts} />
        <Blog blogPosts={blogPosts} />
      </section>
    </>
  );
}
export default Section;
