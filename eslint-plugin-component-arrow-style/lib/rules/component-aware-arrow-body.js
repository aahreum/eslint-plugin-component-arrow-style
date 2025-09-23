export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "컴포넌트는 항상 중괄호 사용, 일반 함수는 간결하게 작성",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
    messages: {
      arrowFunctionLog:
        "간단한 화살표 함수에는 중괄호와 return을 사용하지 마세요",
      componentFunctionLog: "컴포넌트 함수에는 중괄호와 return을 사용하세요",
    },
  },

  create(context) {
    function isComponentFunction(node) {
      const parent = node.parent;
      if (parent.type === "VariableDeclarator" && parent.id && parent.id.name) {
        if (/^[A-Z]/.test(parent.id.name)) {
          return true;
        }
      }

      if (node.body.type === "JSXElement" || node.body.type === "JSXFragment") {
        return true;
      }

      if (node.body.type === "BlockStatement") {
        const returnStatements = node.body.body.filter(
          (statement) => statement.type === "ReturnStatement"
        );
        return returnStatements.some(
          (statement) =>
            statement.argument &&
            (statement.argument.type === "JSXElement" ||
              statement.argument.type === "JSXFragment")
        );
      }

      return false;
    }

    function isSingleReturn(node) {
      if (node.body.type !== "BlockStatement") {
        return true;
      }

      const [statement] = node.body.body;
      if (!statement || node.body.body.length !== 1) {
        return false;
      }

      return statement.type === "ReturnStatement" && statement.argument;
    }

    return {
      ArrowFunctionExpression(node) {
        const isComponent = isComponentFunction(node);
        const isOneLine = isSingleReturn(node);

        if (isComponent) {
          if (node.body.type !== "BlockStatement") {
            context.report({
              node,
              messageId: "componentFunctionLog",
              fix(fixer) {
                const sourceCode = context.getSourceCode();
                const body = sourceCode.getText(node.body);
                return fixer.replaceText(node.body, `{ return ${body}; }`);
              },
            });
          }
        } else if (isOneLine && node.body.type === "BlockStatement") {
          const statement = node.body.body[0];
          if (statement.type === "ReturnStatement") {
            context.report({
              node,
              messageId: "arrowFunctionLog",
              fix(fixer) {
                const sourceCode = context.getSourceCode();
                const argument = sourceCode.getText(statement.argument);
                return fixer.replaceText(node.body, argument);
              },
            });
          }
        }
      },
    };
  },
};
