import chalk from 'chalk'
import test from 'ava'
import { transform } from 'babel-core'
import calcPlugin from '../index'

test('mul', t => {
  const before = `const res = 2 * 2;`
  
  const { code } = transform(before, {
    plugins: [calcPlugin]
  })
  t.deepEqual(code, `const res = 4;`)

  console.log(chalk.green(`Mul: ${before} => ${code}`))
})