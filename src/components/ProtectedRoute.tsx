import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {

  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
