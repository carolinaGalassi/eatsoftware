import { EatBodyContainer } from "./Body/Body";
import { Header } from "./Header/Header";

export const EatContainer = () => {
  return (
    <section className="flex flex-col h-full">
      <Header />
      <EatBodyContainer />
    </section>
  );
};
