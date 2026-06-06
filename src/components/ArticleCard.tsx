// src/components/ArticleCard.tsx

type Props = {
  article: any;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <div>
      <img
        src={article.thumbnailUrl}
        alt={article.title}
      />

      <h3>{article.title}</h3>

      <p>{article.excerpt}</p>

      <div>
        <img
          src={article.author.avatarUrl}
          alt={article.author.name}
        />

        <span>{article.author.name}</span>
      </div>
    </div>
  );
};

export default ArticleCard;