import { Header } from "../../widgets/header-widgets";
import { Content } from "./content";
import { Footer } from "../../widgets/footer-widgets";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
};
