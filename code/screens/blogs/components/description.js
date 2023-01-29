import React from "react";

const Description = ({ title, subTitle, description }) => {
  return (
    <div className="posts-description-blog">
      <h3>{"Eos nam atque maiores voluptatem pariatur enim."}</h3>
      <p>
        {
          "Aperiam amet dolor in corporis. Ut explicabo aperiam inventore quaerat optio dicta. Quibusdam voluptas consequatur quos. Quasi ea magni labore distinctio."
        }
      </p>

      <h4>{"Sequi ut et omnis deserunt ut."}</h4>
      <div className="posts-description-blog-comment">
        <div className="posts-description-blog-comment-image">
          <img src={"/assets/images/common/quotes.png"} />
        </div>
        <p>
          {
            "Placeat qui ea harum ut. Qui quam vel dolor voluptates minus vero eaque porro. Et facilis et quia. Est cupiditate blanditiis quis deleniti."
          }
        </p>
      </div>
      <p>
        {
          "Ut quo et veniam culpa. Nisi nostrum repellendus quidem animi nostrum. Iusto aliquid molestiae id aut cum quia sit sapiente et. Quis nihil optio fuga omnis. Et eos eos error dolorem illo. Modi ut consectetur temporibus numquam dolores doloremque cumque ut. Minima magni corrupti et et impedit. Occaecati tenetur nemo placeat sint sed molestias et. Magnam pariatur voluptas ea. Mollitia dolorem vitae."
        }
      </p>
    </div>
  );
};

export default Description;
