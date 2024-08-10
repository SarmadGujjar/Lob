import Export from "./components/Export";
import Label from "./components/Label";
import Main from "./components/Main";
import Second from "./components/Second";
import Last from "./components/Last";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Main />
      <Second />
      <Label />
      <Export />
      <Last />
      <Footer />
    </main>
  );
};

