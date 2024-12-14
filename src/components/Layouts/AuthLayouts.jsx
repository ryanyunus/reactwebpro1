import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
        {" atau "}
        <Link to="/diskon" className="font-bold text-blue-600">
          Diskon
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
        {" atau "}
        <Link to="/diskon" className="font-bold text-blue-600">
          Diskon
        </Link>
      </p>
    );
  }
};

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthLayout;
