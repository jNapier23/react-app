import Alert from "./components/Alert";

function App() {
  let items = ["London", "New York", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
