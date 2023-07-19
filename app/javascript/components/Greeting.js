import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greetings';
import { Link } from 'react-router-dom';

function Greeting() {
  const greeting = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <section>
      <h1>Random Greeting</h1>
      <h3>{greeting}</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;
