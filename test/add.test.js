import chalk from 'chalk'
import test from 'ava'
import { transform } from 'babel-core'
import calcPlugin from '../index'

test('add', t => {
  const before = `const res = 1 + 2;`

  const { code } = transform(before, {
    plugins: [calcPlugin]
  });
  t.deepEqual(code, `const res = 3;`);

  console.log(chalk.green(`Add: ${before} => ${code}`))
});