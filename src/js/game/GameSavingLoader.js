import read from './tools/reader';
import json from './tools/parser';

/**
 * Загрузчик игровой сохранения
 * @static
 */
export default class GameSavingLoader {
  /**
   * Загружает игровое сохранение
   * 
   * @static
   * 
   * @param {string} data - данные игрового сохранения
   * 
   * @return {object} - объект игрового сохранения в формате 
   */
  static async load(data = '') {
    try {
      const file = await read(data);
      const jsonFile = await json(file);
      
      return JSON.parse(jsonFile);
    } catch (error) {
      throw new Error('Файл пуст');
    }
  }
}
