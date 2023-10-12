import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div data-theme="light">
      <main className="max-w-[1440px] mx-auto p-5 md:p-12 min-h-[100vh]">
        <Homepage />
      </main>
    </div>
  );
}

export default App;
