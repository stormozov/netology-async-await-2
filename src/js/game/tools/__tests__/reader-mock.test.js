import read from '../reader';

jest.mock('../reader');

describe('Функция read', () => {
  const outputData = [ 'resolved data', 'rejected error' ];

  it('Вызван "mockResolvedValue"; должен вернуть данные', async () => {
    read.mockResolvedValue(outputData[0]);
    const result = await read();
    expect(result).toBe(outputData[0]);
  });

  it('Вызван "mockRejectedValue"; должен вернуть ошибку', async () => {
    read.mockRejectedValue(new Error(outputData[1]));
    await expect(read()).rejects.toThrow(outputData[1]);
  });
});
