import GameSavingLoader from '../GameSavingLoader';
import { testData } from '../data/test-data';

describe('Класс GameSavingLoader', () => {
  it('Переданы данные для загрузки; возвращается JS-объект с данными сохранения', async () => {
    const data = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000
      },
    };

    return expect(GameSavingLoader.load(testData)).resolves.toEqual(data);
  });

  it('Не переданы данные для загрузки; вызывается исключение', () => {
    return expect(GameSavingLoader.load()).rejects.toThrow(Error);
  });
});
