import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormDiskon = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button classname="bg-blue-600 w-full">Diskon</Button>
    </form>
  );
};

export default FormDiskon;
