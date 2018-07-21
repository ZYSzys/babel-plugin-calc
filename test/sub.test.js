import chalk from 'chalk'
import test from 'ava'
import { transform } from 'babel-core'
import calcPlugin from '../index'

test('sub', t => {
  const before = `const res = 2 - 1;`
  
  const { code } = transform(before, {
    plugins: [calcPlugin]
  })
  t.deepEqual(code, `const res = 1;`)

  console.log(chalk.green(`Sub: ${before} => ${code}`))
})