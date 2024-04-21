import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../components/data';

function FullArticle() {
  let { articleId } = useParams();
  const article = data.find(article => article.id === articleId); // Змінено на пошук за індексом

  return (
    article ? (
      <div className="fullArticle">
        <img className="articleImage" src={article.img} alt={article.header} />
        <h2>{article.header}</h2>
        <p class="articleDate">{article.date}</p>
        <div dangerouslySetInnerHTML={{ __html: article.long }}></div>
        <Link to="/blog" className="buttons">Back to Blog</Link>
      </div>
    ) : <p>Article not found.</p>
  );
}

export default FullArticle;
