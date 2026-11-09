let url = "http://127.0.0.1:8000/";
function App() {
  async function handleOnClick() {
    // console.log("ok?");
    const response = await fetch(url);
    const data = await response.json();
  }
  return (
    <div>
      <h1>react+fastapi통신</h1>
      <button onClick={handleOnClick}>읽어오기</button>
    </div>
  );
}

export default App;
