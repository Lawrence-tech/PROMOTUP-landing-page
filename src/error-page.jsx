import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="px-8 font-bold text-5xl">Oops!</h1>
     <br></br>
      <p className="px-8 font-semibold text-3xl">Sorry, an unexpected error has occurred.</p>
    
      <p className="text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}