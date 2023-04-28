import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

function About() {
  let [id, setId] = useState<null | number>(null);
  let location = useLocation();
  useEffect(() => {
    console.log(location, location.hash);
  }, []);
  return <h1>About: {id}</h1>;
}

export {About};
