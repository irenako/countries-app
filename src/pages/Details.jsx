import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/styled/Button.styled';
import { Info } from '../components/Info';

export default function Details() {
  let { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
    console.log(searchByCountry(name))
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate('/')}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={navigate} {...country} />}
    </div>
  );
}
