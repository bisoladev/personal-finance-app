import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <h4 className="font-bold text-3xl lg:text-9xl text-[#201F24]">404</h4>
        <p className="mt-6 mb-12 text-[#201F24]">
          Ooops! We can&apos;t seem to find the page you&apos;re looking for
        </p>
        <Link to="/" className="bg-[#277C78] py-2 px-5 text-white rounded-sm">
          Back to Home
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <p className="text-2xl text-gray-800">Ooops! Something went wrong</p>
    </div>
  );
};

export default Error;
