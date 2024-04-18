
import { Link } from 'react-router-dom';
import data from '../components/data'; 

function Blog() {
  return (
    <div>
      {data.map((article, index) => (
        <div key={index}>
          <img src={article.img} alt="Article" style={{ width: "100px", height: "100px" }} />
          <h3>{article.header}</h3>
          <p>{article.date}</p>
          <p>{article.short}</p>
          <Link to={`/blog/${article.id}`} className="buttons">Read More</Link> 
        </div>
      ))}
    </div>
  );
}

export default Blog;
