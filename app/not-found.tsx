import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
