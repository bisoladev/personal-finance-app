import { cn } from "@/lib/utils";
import Logo from "../assets/logo-small.svg";

const Login = () => {
  return (
    <div className="bg-beige100 flex items-center h-screen pl-5">
      <div
        className={cn(
          "bg-cover bg-auth w-[500px] h-[calc(100vh-40px)] rounded-[12px] hidden lg:flex flex-col justify-between p-8"
        )}
      >
        <img src={Logo} alt="Finance" className="w-fit" />
        <div className="text-white">
          <p className="text-preset-1 mb-5">
            Keep track of your money and save for your future
          </p>
          <p className="text-preset-4">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="bg-white mx-auto">
        <h4 className="text-preset-1">Login</h4>
      </div>
    </div>
  );
};

export default Login;
