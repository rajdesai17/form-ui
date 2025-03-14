import Navbar from './Navbar';
import APIForm from './components/APIForm';

function App() {
  const handleFormSubmit = (formData: any) => {
    console.log('API Created:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-200 pt-20">
        <APIForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default App;