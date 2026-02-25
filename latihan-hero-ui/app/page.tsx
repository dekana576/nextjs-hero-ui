import CardList from "./components/heroui/CardList";
import LinkButton from "./components/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-8">
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Link</h1>
        <Link href="/heroui">
          <LinkButton>Explore HeroUI Components</LinkButton>
        </Link>
        <Link href="/axios">
          <LinkButton>Explore Axios Example</LinkButton>
        </Link>
      </CardList>
    </div>
  );
}
