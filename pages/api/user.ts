import type { NextApiHandler } from 'next';
import { I_User } from '../../components/App.interface';
import { ONLY_RU_ENG_LETTERS_REGEXP } from '../../middleware/_VAR';


// Принудительно 
const FakeData: any = {
  "id": 11,
  "name": "Vladimir Osipovich",
  "username": "UladzimirAsipovich",
  "email": "osipovich.vova@gmail.com",
  "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Lebsackbury",
    "zipcode": "31428-2261",
    "geo": {
      "lat": "-38.2386",
      "lng": "57.2232"
    }
  },
  "phone": "375257870116",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC",
    "catchPhrase": "Centralized empowering task-force",
    "bs": "target end-to-end models"
  }
};

const UserHandler: NextApiHandler<I_User | { textError: string }> = async (req, res) => {

  switch (req.method?.toLowerCase()) {
    case 'post': {
      try {
        const { name } = req.body;

        if (name && typeof name === 'string' && ONLY_RU_ENG_LETTERS_REGEXP().test(name)) {

          /**
           * FakeData имеется ввиду -> db.users.insertOne(FakeData as I_User);
           * 
           * Где:
           *  - db - объект соединения с ДБ;
           *  - users - коллекция; 
           *  - insertOne() - метод аналогичный SQL-запросу "INSERT INTO users (id, name, ..., ) VALUES ('11', 'Vladimir Osipovich', '...', )";
           * 
           *  _id - генерируется автоматически, но его можно установить и мануально.
           *  Функция возвращает сгенерированный ObjectId();
           *  Далее по этому же _id можно отыскать вновь добавленного пользователя и отправить как результат
           *  для последующего вывода данных на клиенте.
           */
          return res.status(200).json(FakeData as I_User);

        }
      } catch (error) {
        return res.status(500).json({ textError: error as string });
      }
    }
  }
};

export default UserHandler;
