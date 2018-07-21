const babel = require('babel-core')
const t = require('babel-types')

function calcExpression(left, operator, right) {
  let res
  switch (operator) {
    case '+':
      res = left + right
      break;
    case '-':
      res = left - right
      break;
    case '*':
      res = left * right
      break;
    default:
      break;
  }
  return res
}

const visitor = {
  BinaryExpression(path) {
    const node = path.node
    let result
    if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
      result = calcExpression(node.left.value, node.operator, node.right.value)
    }

    if (result !== undefined) {
      path.replaceWith(t.numericLiteral(result));

      let parentPath = path.parentPath;

      // traverse parent node
      parentPath &&
        t.isBinaryExpression(parentPath.node) &&
        visitor.BinaryExpression.call(this, parentPath);
      parentPath &&
        t.isUnaryExpression(parentPath.node) &&
        visitor.UnaryExpression.call(this, parentPath)
    }
  },
  CallExpression(path) {},
  UnaryExpression(path) {}
}

module.exports = function(babel) {
  return {
    visitor
  }
}
