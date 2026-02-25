import CardList from "./components/CardList";
import LinkButton from "./components/LinkButtonPrimary";
import Link from "next/link";
import LinkButtonSecondary from "./components/LinkButtonSecondary";
import LinkButtonSuccess from "./components/LinkButtonSuccess";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-8">
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Link</h1>
        <Link href="/heroui">
          <LinkButtonSecondary>Explore HeroUI Components</LinkButtonSecondary>
        </Link>
        <Link href="/posts">
          <LinkButtonSuccess>Explore Posts</LinkButtonSuccess>
        </Link>
        <Link href="/comments">
          <LinkButtonSuccess>Explore Comments</LinkButtonSuccess>
        </Link>
      </CardList>
    </div>
  );
}
