import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Legordulo from './components/Legordulo';
import KerdesKartya from './components/KerdesKartya';


function App() {
  const [questions, setQuestions] = useState([]);

const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/kategoria');
      setCategories(response.data);
    } catch (error) {
      setError('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestions = async (categoryId) => {
    setLoading(true);
    console.log(`http://127.0.0.1:8000/api/tesztek/kategoria/${categoryId}`);
    
      const response = await axios.get(`http://127.0.0.1:8000/api/tesztek/kategoria/${categoryId}`);
      //setQuestions(response.data);
      console.log(response.data);
      let list=[];
      list.push(response.data);
      setQuestions(list);
    
  };

  const handleCategoryChange = async (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    await fetchQuestions(categoryId);
  };

  return (
    <div className="App">
      <Legordulo categories={categories} onCategoryChange={handleCategoryChange} />
      {error && <p>{error}</p>}
      <div className="question-cards">
        {questions.map(question => (
          <KerdesKartya key={question.id} question={question} />
        ))}
        {!loading && questions.length === 0 && <p>Nincs elérhető kérdés</p>}
      </div>
    </div>
  );
}

export default App;
