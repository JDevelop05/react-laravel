import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </main>
  )
}
