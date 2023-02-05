import type { NextPage } from 'next';
import type { I_User } from '../../components/App.interface';
import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';
import MetaHead from '../../components/MetaHead/MetaHead';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ONLY_RU_ENG_LETTERS_REGEXP } from '../../middleware/_VAR';

// ------------------------------------------------------

import { observer } from "mobx-react-lite";
import { MobxContext } from '../_app';


interface I_OtherFields {
  userName: HTMLInputElement
}

const AllUsers: NextPage = () => {

  const [error, setError] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [pre, setPre] = useState<string>('');

  const {
    addUser,
    viewAllUsers,
    totalUsers
  } = useContext(MobxContext);

  const onUserNameHandler: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    if (value.length) {
      const isOk = ONLY_RU_ENG_LETTERS_REGEXP().test(value);
      setError(!isOk);
      setDisable(!isOk);
    } else {
      setError(false);
      setDisable(true);
    }
  };

  const submitHandler: FormEventHandler<HTMLFormElement & I_OtherFields> = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDisable(true);

    try {

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ name: e.currentTarget.userName.value })
      });

      if (response.ok) {
        let data: I_User = await response.json();
        setPre(JSON.stringify(data, null, 2));
        (e.target as HTMLFormElement).reset();
        addUser(data);
        console.log('TotalUsers', totalUsers, viewAllUsers);
      } else {
        let someError = await response.json();
        (e.target as HTMLFormElement).reset();
        throw someError.textError;
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const resetHandler: FormEventHandler<HTMLFormElement> = () => {
    setDisable(true);
    setError(false);

    if (pre) setPre('');
  };

  return (
    <Container maxWidth='lg' component={'main'}>

      <MetaHead title={'ADD USER = UPSIDE-NEXT.js'} />

      <Box component='header'>
        <Typography component="h2" gutterBottom align='center'>
          <Typography variant="h2" component="span">
            Добавить
          </Typography>
        </Typography>
      </Box>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
        onReset={resetHandler}
      >
        <TextField
          required
          id="outlined-required"
          label="Имя пользователя"
          name='userName'
          sx={{ marginBottom: '1.25rem' }}
          onChange={onUserNameHandler}
          error={error}
        />
        <div>
          <Button variant="contained" type='submit' disabled={disable}>Добавить</Button>
          <Button variant="text" type='reset'>Очистить</Button>
        </div>
      </Box>

      {
        pre ? (
          <div>
            <p>Отлично! Вы добавили нового пользователя!</p>
            <pre>{pre}</pre>
          </div>
        ) : null
      }
    </Container>
  );
};

export default observer(AllUsers);
