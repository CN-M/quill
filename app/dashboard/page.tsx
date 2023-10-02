import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user || !user.id) redirect("/auth-callback?origin=/dashboard");

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    redirect("/auth-callback?origin=/dashboard");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-5xl text-blue-600">
        Welcome to your dashboard {user?.firstName} {user?.lastName}
        {/* Welcome to your dashboard */}
      </h1>
    </div>
  );
}
