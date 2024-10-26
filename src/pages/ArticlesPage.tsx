import React from 'react';

interface ArticleItem {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
}

interface ArticlesProps {
  articles: ArticleItem[];
}

const ArticlesPage: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <div className="articles">
      <div className="articles-header">
        <img src="https://fal.media/files/monkey/ZNCH1UpAmeOgRGyVjgxFp.png" alt="Articles Header" className="articles-header-image" />
      </div>
      <div className="articles-content">
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-text">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;