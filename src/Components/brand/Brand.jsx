import React from "react";
import "./brand.css";
import { Link } from "react-router-dom";

const Brand = () => (
  <div>
    <div className="text">
      <br/>
      <h2 className="c">Buy your books!</h2>
    </div>
  <div className="category" style={styles.categoryStyle}>
    {/*<Link to="/books" className="  col-2 btn btn-primary ">
      All Books
    </Link>*/}
    <Link to="/fiction" style={styles.categoryBtn} className="   category-btn btn  ">
      Fiction
    </Link>
    <Link to="/non-fiction" style={styles.categoryBtn} className="  category-btn btn">
      Nonfiction
    </Link>
  </div>
  </div>
);

const styles = {
  categoryBtn : {
    backgroundColor : "#807336"
  },
  categoryStyle : {
    marginLeft : "15%"
  }
}
export default Brand;
