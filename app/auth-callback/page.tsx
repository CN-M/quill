import { useRouter, useSearchParams } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-5xl text-red-600">Auth Callback</h1>
    </div>
  );
}
