import Link from "next/link";
export default function navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="https://npru-cs66.vercel.app/">NPRU-CS66</Link>
      </div>
    </nav>
  );
}
