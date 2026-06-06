type Props = {
  article: any;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <div>
      <img
        src={article.thumbnailUrl}
        alt={article.title}
        width={300}
        height={200}
      />

      <h3>{article.title}</h3>

      <p>{article.excerpt}</p>

      <div>
        <img
          src={article.author.avatarUrl}
          alt={article.author.name}
          width={40}
          height={40}
        />

        <span>{article.author.name}</span>
      </div>
    </div>
  );
};

export default ArticleCard;