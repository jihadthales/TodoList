
import DataProvider from './DataProvider'




import "./App.css";
const list = [
  {
    id: 1,
    text: "learn React",
    completed: false,
  },
  {
    id: 2,
    text: "pay Bills",
    completed: false,
  },
  {
    id: 3,
    text: "buy groceries",
    completed: false,
  },
];

function App() {
  return (
    <DataProvider
      items={list}
      render={({ data, handleOnChange, handleOnSubmit }) => {
        return (
          <>
            <form onSubmit={handleOnSubmit}>
              <input type="text" onChange={handleOnChange} />
              &nbsp;
              <button type="submit">add</button>
            </form>
            <ul>
              {data.todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>
          </>
        );
      }}
    />
  );
}
export default App;
