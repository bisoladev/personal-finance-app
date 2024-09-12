import { cn } from "@/lib/utils";
import Logo from "../assets/logo-small.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/zodSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import EyeOff from "../assets/icon-hide-password.svg?react";
import EyeOn from "../assets/icon-show-password.svg?react";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevS) => !prevS);
  };

  return (
    <div className="bg-beige100 flex lg:items-center h-screen lg:pl-5">
      <div
        className={cn(
          "bg-cover bg-auth w-[500px] h-[calc(100vh-40px)] rounded-[12px] hidden lg:flex flex-col justify-between p-7"
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

      <div className="w-full">
        <div className="bg-grey900 w-full p-6 lg:hidden">
          <img src={Logo} alt="Finance" className="w-fit mx-auto" />
        </div>
        <div className="flex h-[calc(100vh-80px)] items-center p-4">
          <div className="bg-white mx-auto max-w-[560px] min-h-[422px] w-full p-8 rounded-xl">
            <h4 className="text-preset-1 text-grey900 mb-8">Login</h4>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 text-grey500"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} error={fieldState.error} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex relative items-center">
                          <Input
                            {...field}
                            error={fieldState.error}
                            type={isPasswordVisible ? "text" : "password"}
                            autoComplete="off"
                          />
                          <button
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 cursor-pointer"
                          >
                            {isPasswordVisible ? <EyeOn /> : <EyeOff />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="!my-8">
                  <Button className="w-full" type="submit">
                    Login
                  </Button>
                </div>
                <p className="text-center">
                  Need to create an account?{" "}
                  <span>
                    <Link
                      to="/register"
                      className="underline text-grey900 text-preset-4-bold"
                    >
                      Sign up
                    </Link>
                  </span>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
