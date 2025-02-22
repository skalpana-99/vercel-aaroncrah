import Link from "next/link";
import HeaderV2 from "@/components/ui/HeaderV2";

export default function NotFound() {
  return (
    <>
      <HeaderV2 />
      <div className="flex min-h-screen flex-col items-center mt-[250px]">
        <h2 className="text-4xl font-bold">404</h2>
        <p className="mt-4">Page not found</p>
        <Link href="/" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Return Home
        </Link>
      </div>
    </>
  );
}
