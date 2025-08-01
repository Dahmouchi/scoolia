
import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";

export default async function AuthButton() {
const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/admin/dashboard");
  }
  return (
    <div
      className="flex h-screen w-full items-center relative justify-center bg-gray-900 bg-cover bg-no-repeat"
     style={{
            backgroundImage: `url("/Board.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
    >
      <div className="w-full h-full bg-black/20 absolute top-0"></div>
      <div className="rounded-xl bg-gray-100/20 border-2 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-xs max-sm:px-8">
        <div className="text-white">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
