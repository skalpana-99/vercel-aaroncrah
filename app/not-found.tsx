import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mt-4">Page not found</p>
      <Link href="/" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Return Home
      </Link>
    </div>
  );
}
