import { Hero, Newest } from "./components";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center p-24">
    <Hero />
    <Newest />
  </main>
);

export default Home;
