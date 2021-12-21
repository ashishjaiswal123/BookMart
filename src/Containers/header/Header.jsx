import React from "react";
import "./header.css";

const Header = () => (
  <div className="bookmart__header section__padding" id="home">
    <div className="bookmart__header-content">
      <h1 className="gradient__text">
        Buying books would be a good, if one could also buy the time to read
      </h1>
      <p>
        From a book shop, we can buy our text books, story books, novels,
        dictionaries, science fiction books etc. We can also get binding paper,
        color paper, graph paper, and hand notes on different publishers.
      </p>

      <div className="bookmart__header-content__people">
        <img
          src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_gpt3/main/src/assets/people.png"
          alt=""
        />
        <p>1,600 people visit in last 24 hours</p>
      </div>
    </div>

    <div className="bookmart__header-image">
      <img
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </div>
  </div>
);

export default Header;
