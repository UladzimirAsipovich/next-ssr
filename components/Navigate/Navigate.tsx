import type { I_Navigate } from './Navigate.interface';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from '../NextLink/NextLink';
import { useRouter } from 'next/router';
import style from './Navigate.module.scss';

const Navigate: I_Navigate = () => {

  const { asPath } = useRouter();

  return (
    <Box component='nav' textAlign='center' className={style.navigate}>
      <NextLink href={'/'}>
        <Button variant={asPath === '/' ? 'contained' : 'text'}>Задание</Button>
      </NextLink>
      <NextLink href={'/user/all'}>
        <Button variant={asPath === '/user/all' ? 'contained' : 'text'}>Главная</Button>
      </NextLink>
      <NextLink href={'/user/add'}>
        <Button variant={asPath === '/user/add' ? 'contained' : 'text'}>Добавить пользователя</Button>
      </NextLink>
    </Box>
  );
};

export default Navigate;