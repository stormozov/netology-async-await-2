import GameSavingLoader from './game/GameSavingLoader.js';
import { testData } from './game/data/test-data.js';

(async () => {
  const data = await GameSavingLoader.load(testData);
  console.log(data);
})();
