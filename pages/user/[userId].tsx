import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { I_User } from '../../components/App.interface';
import MetaHead from '../../components/MetaHead/MetaHead';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const User: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {

  const [currentUser, setCurrentUser] = useState<I_User | null>(() => {
    if (user) return user;
    return null;
  });

  useEffect(() => {

  }, [currentUser]);

  return (
    <Container maxWidth='lg' component={'main'}>

      <MetaHead title={'Vladimir Osipovich - UPSIDE-NEXT.js'} />

      <Box component='header'>
        {
          user ? (
            <>
              <Typography variant="h1" component="h2" gutterBottom align='center'>
                Пользователь&thinsp;
                <Typography variant="h1" component="strong" fontWeight={600}>
                  {user.name}
                </Typography>
              </Typography>

              <List>
                {
                  Object.keys(user).map((prop, ind) => {
                    if (prop === 'name') return null;

                    return (
                      <ListItem key={user.id + ind}>
                        <ListItemText primary={`${prop}: ${user[prop as keyof I_User]}`} />
                      </ListItem>
                    );
                  })
                }
              </List>
            </>
          ) : (
            <Typography variant="h6" component="h4" gutterBottom align='center'>
              Пользователь не найден
            </Typography>
          )
        }
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<{ user: I_User }> = async (context) => {

  /**
   * Здесь имеется ввиду -> db.users.find({id: context.context.query.userId});
   * 
   * Где:
   *  - db - объект соединения с ДБ;
   *  - users - коллекция; 
   *  - find(...) - метод аналогичный SQL-запросу 'SELECT * FROM users WHERE id=...';
   */
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.userId}`);

  if (response.ok) {
    let user: I_User = await response.json();

    return {
      props: {
        user
      }
    };

  } else {
    return { notFound: true };
  }
};

export default User;
