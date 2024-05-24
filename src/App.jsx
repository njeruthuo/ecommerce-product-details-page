import { Home, Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-white lg:w-4/5 mx-auto border min-h-screen relative">
      <Navbar />
      <Home />
    </div>
  );
};
export default App;
