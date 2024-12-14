import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
import FormDiskon from "../components/Fragments/FormDiskon";

const DiskonPage = () => {
  return (
    <AuthLayouts title="Diskon" type="register">
      <FormDiskon />
    </AuthLayouts>
  );
};

export default DiskonPage;
