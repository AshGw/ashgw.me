import { ESLint } from 'eslint';

test('eslint should pass ', async () => {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(['**/*.ts', '**/*.tsx']);

  const errorCount = results.reduce(
    (accumulator: number, result) => accumulator + result.errorCount,
    0
  );
  expect(errorCount).toBe(0);
});
