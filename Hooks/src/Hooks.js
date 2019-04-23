import { useState, useEffect } from 'react';

const useFetch = url => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTodos(json);
    setLoading(false);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return [todos, setTodos, loading];
};

export { useFetch };
