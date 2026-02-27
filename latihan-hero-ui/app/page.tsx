import CardList from "./components/CardList";
import Link from "next/link";
import LinkButtonSecondary from "./components/LinkButtonSecondary";
import LinkButtonSuccess from "./components/LinkButtonSuccess";
import LinkButtonPrimary from "./components/LinkButtonPrimary";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-8">
      <CardList>
        <h1 className="text-4xl font-bold mb-8 text-center">Link</h1>
        <Link href="/heroui">
          <LinkButtonSecondary className="w-full">Explore HeroUI Components</LinkButtonSecondary>
        </Link>
        <Link href="/posts">
          <LinkButtonSuccess className="w-full">Explore Posts</LinkButtonSuccess>
        </Link>
        <Link href="/comments">
          <LinkButtonSuccess className="w-full">Explore Comments</LinkButtonSuccess>
        </Link>
        <Link href="/users">
          <LinkButtonSuccess className="w-full">Explore Users</LinkButtonSuccess>
        </Link>
        <Link href="/albums">
          <LinkButtonSuccess className="w-full">Explore Albums</LinkButtonSuccess>
        </Link>
        <Link href="/login">
          <LinkButtonPrimary className="w-full">Login</LinkButtonPrimary>
        </Link>
      </CardList>
    </div>
  );
}
