import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../Components/layout/layout";
import { FaTag } from "react-icons/fa";


const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container categories-container">
        <h1 className="categories-heading">All Categories</h1>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn categories-btn">
                <FaTag className="categories-icon" /> {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
