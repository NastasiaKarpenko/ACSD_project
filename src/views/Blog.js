import ArticleList from "../components/ArticleList";

function Blog() {
  const style = {
    backgroundImage: `url('https://github.com/NastasiaKarpenko/my-eire-app/blob/main/src/images/events/IMG_2.jpeg?raw=true')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="blog">
      <ArticleList />
      <div className="blogImg" style={style}></div>
    </div>
  );
}

export default Blog;