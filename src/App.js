import './App.css';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="bg-purple-200 min-h-[100vh] w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">Tasks</h1>
      <Tasks />
    </div>
  );
}

export default App;
