// src/components/ArticleGrid.tsx

import _ from "lodash";
import { articles } from "../data/mockData";
import ArticleCard from "./ArticleCard";

const ArticleGrid = () => {
  const sortedArticles = _.orderBy(
    articles,
    ["date"],
    ["desc"]
  );

  return (
    <div>
      {sortedArticles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};

export default ArticleGrid;