import type { NextPage } from 'next';
import MetaHead from '../components/MetaHead/MetaHead';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

const Index: NextPage = () => {

  return (
    <Box component={'div'} sx={{ position: 'relative' }}>
      <Container maxWidth='lg' component={'main'}>



        <MetaHead title={'Vladimir Osipovich - UPSIDE-NEXT.js'} />

        <Box component='header' position={'relative'} className='indexHeader'>
          <div className='likeBackground imgCover'>
            <picture>
              <source
                media="(max-width: 767px)"
                sizes="(max-width: 767px) 100vw, 767px"
                srcSet="
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_1_1,c_fill,g_auto__c_scale,w_320.jpg 320w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_1_1,c_fill,g_auto__c_scale,w_637.jpg 637w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_1_1,c_fill,g_auto__c_scale,w_730.jpg 730w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
              />
              <source
                media="(min-width: 768px) and (max-width: 991px)"
                sizes="(max-width: 991px) 70vw, 694px"
                srcSet="
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w"
              />
              <source
                media="(min-width: 992px) and (max-width: 1199px)"
                sizes="(max-width: 1200px) 60vw, 720px"
                srcSet="
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg 720w"
              />
              <img
                sizes="(max-width: 3200px) 40vw, 1280px"
                srcSet="
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_480.jpg 480w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_770.jpg 770w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_1003.jpg 1003w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_1211.jpg 1211w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_1276.jpg 1276w,
                 ./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_1280.jpg 1280w"
                src="./img/eberhard-grossgasteiger-y2azHvupCVo-unsplash_lqko1i_c_scale,w_1280.jpg"
                alt=""
              />
            </picture>
          </div>
          <Typography component="h2" gutterBottom align='center' padding={'3rem'} marginBottom={'3rem'} color={'#ececec'}>
            <Typography variant="h2" component="span">
              UPSIDE&thinsp;
            </Typography>
            <Typography variant="h2" component="span" fontStyle='italic' fontWeight={400}>
              by&thinsp;
            </Typography>
            <Typography variant="h2" component="span" fontWeight={600}>
              NEXT.js
            </Typography>
          </Typography>
        </Box>

        <Container maxWidth='md'>
          <Box>
            <Typography variant="body1" gutterBottom component='header'>
              Используя <Link href="https://nextjs.org/" target='_blank'>https://nextjs.org/</Link> необходимо сделать несколько страниц:
            </Typography>
            <List>
              {
                [
                  'a. Главная – вывод всех пользователей (SSR);',
                  'b.	Страница пользователя (SSR);',
                  'c.	Добавление пользователя.',
                ].map((el: string, ind: number) => (
                  <ListItem key={'task-' + ind}>
                    <ListItemText primary={el} />
                  </ListItem>
                ))
              }
            </List>
          </Box>
          <Box>
            {
              [
                'Обязательно использовать TypeScript и Mobx.',
                'С помощью Mobx необходимо реализовать стор, данные в сторе на ваше усмотрение, главное, чтобы была реализация использования.',
                'Желательно использовать функциональные компоненты вместо классовых.',
                'Обязательно использование scss, дизайн по желанию. Адаптивная верстка под две ширины 375px и 1366px остальные по желанию.',
                'Для UI можно использовать библиотеку https://mui.com/'
              ].map((el: string, ind: number) => (
                <Typography variant="body2" component="p" gutterBottom key={'task-description-' + ind}>
                  {el}
                </Typography>
              ))
            }
          </Box>
        </Container>

      </Container>
    </Box>

  );
};

export default Index;
