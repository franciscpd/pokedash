import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';

import api from '@services/api';

import Header from './Header';
import PokeCard from './Card';

import '@styles/app.scss';

const App = () => {
  const [data, setData] = React.useState([]);

  const fetchPokemons = React.useCallback(async () => {
    const res = await api.get('/pokemon?limit=50').then((r) => r.data.results);

    const promises = res.map(async (p) => {
      const r = await api.get(`/pokemon/${p.name}`).then((rp) => rp.data);
      return r;
    });

    const newData = await Promise.all(promises);

    setData(newData);
  }, [setData]);

  React.useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <>
      <Header />
      <Container fluid="lg">
        <CardColumns>
          {data.map((d) => (
            <PokeCard data={d} />
          ))}
        </CardColumns>
      </Container>
    </>
  );
};

export default hot(App);
