import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user: User | null = await currentUser();

  if (!user || !user.id) redirect("/auth-callback?origin=/dashboard");

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-5xl text-red-600"></h1>
    </div>
  );
}
