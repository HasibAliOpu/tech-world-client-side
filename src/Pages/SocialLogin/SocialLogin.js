import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast(error.message);
  }

  const handleSignupWithGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <div className="flex items-center gap-2 my-3">
        <div style={{ height: "1px" }} className="bg-blue-400 w-1/2"></div>
        <p>or</p>
        <div style={{ height: "1px" }} className="bg-blue-400 w-1/2"></div>
      </div>
      <button
        onClick={handleSignupWithGoogle}
        className="flex items-center justify-center w-full gap-2  border border-blue-600 px-9 py-1 rounded-full hover:bg-blue-700 hover:text-white"
      >
        Sign up With Google{" "}
        <span>
          <img src="https://i.ibb.co/SrwFy83/google.png" alt="" />
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
