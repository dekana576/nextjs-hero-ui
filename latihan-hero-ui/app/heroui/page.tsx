import DateExample from "../components/heroui/DateExample";
import HeroUiButton from "../components/heroui/HeroUiButton";
import CardExample from "../components/heroui/CardExample";
import FormExample from "../components/heroui/FormExample";
import ImageExample from "../components/heroui/ImageExample";
import CheckBoxExample from "../components/heroui/CheckBoxExample";
import CardList from "../components/CardList";

export default function HeroUi() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">HeroUI Components</h1>

      <CardList>
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <HeroUiButton />
      </CardList>

      <CardList>
        <h2 className="text-2xl font-semibold">Card Examples</h2>
        <CardExample />
      </CardList>

      <CardList>
        <h2 className="text-2xl font-semibold">Form Example</h2>
        <FormExample />
      </CardList>

      <CardList>
        <h2 className="text-2xl font-semibold">Image Example</h2>
        <ImageExample />
      </CardList>

      <CardList>
        <h2 className="text-2xl font-semibold">Checkbox Example</h2>
        <CheckBoxExample />
      </CardList>

      <CardList>
        <h2 className="text-2xl font-semibold">Date Input Example</h2>
        <DateExample />
      </CardList>
    </div>
  );
}
