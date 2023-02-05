import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { I_User } from '../../components/App.interface';
import MetaHead from '../../components/MetaHead/MetaHead';
import NextLink from '../../components/NextLink/NextLink';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// ------------------------------------------------------

import { observer } from "mobx-react-lite";


const AddUser: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {

  return (
    <Container maxWidth='lg' component={'main'}>

      <MetaHead title={'ALL USERS = UPSIDE-NEXT.js'} />

      <Box component='header'>
        <Typography component="h2" gutterBottom align='center'>
          <Typography variant="h2" component="span">
            Все
          </Typography>
        </Typography>
      </Box>

      <Box>
        <List>
          {
            data.length ? data.map(user => (
              <ListItem key={user.id}>
                <NextLink href={`/user/${user.id}`} passHref legacyBehavior>
                  <Button variant="text"><small>Пользователь:&thinsp;</small> <strong>{user.name}</strong> </Button>
                </NextLink>
              </ListItem>
            )) : (
              <Typography variant="h6" component="h4" gutterBottom align='center'>
                Пользователи не найдены
              </Typography>
            )
          }
        </List>
      </Box>
    </Container>
  );
};


export const getServerSideProps: GetServerSideProps<{ data: I_User[] }> = async () => {

  /**
   * Здесь имеется ввиду -> db.users.find().limit(10);
   * 
   * Где:
   *  - db - объект соединения с ДБ;
   *  - users - коллекция; 
   *  - find() - метод аналогичный SQL-запросу 'SELECT * FROM users';
   *  - limit(10) - метод, ограничивающий количество выборки запроса, в данном случае предел 10 найденных пользователей;
   */
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (response.ok) {
    let data: I_User[] = await response.json();

    return {
      props: {
        data,
        initialState: {
          usersStore: {
            users: data
          }
        }
      }
    };

  } else {
    return { notFound: true };
  }
};

export default observer(AddUser);
