import test from 'ava'
import { transform } from "babel-core"
import preCalculateNumberPlugin from "../index"

test("add", t => {
  const before = `const result = 1 + 2;`
  console.log(`Before: ${before}`)

  const { code } = transform(before, {
    plugins: [preCalculateNumberPlugin]
  });

  console.log(`After: ${code}`)
  t.deepEqual(code, `const result = 3;`);
});