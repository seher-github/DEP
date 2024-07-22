import React from "react";
import Layout from "../../Components/layout/layout";
import AdminMenu from "../../Components/layout/AdminMenu";
const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 " style={{paddingTop:'100px'}}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;