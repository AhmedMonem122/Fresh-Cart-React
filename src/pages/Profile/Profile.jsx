import { Fragment } from "react";
import useAuth from "../../hooks/use-auth";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { userData } = useAuth();

  return (
    <Fragment>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className="p-5 marginTop">
        <h2 className="text-center">Welcome {userData?.name} </h2>
      </div>
    </Fragment>
  );
};

export default Profile;
