import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className="text-blue-400 hover:text-blue-700 hover:decoration-blue-700"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
