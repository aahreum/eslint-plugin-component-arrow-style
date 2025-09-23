# eslint-plugin-component-arrow-style

ESLint 플러그인으로, React 컴포넌트와 일반 화살표 함수의 중괄호 사용 스타일을 자동으로 검사하고 수정합니다.

## 1. 설치

```bash
# npm
npm install --save-dev eslint-plugin-component-arrow-style
```

## 2. 사용 방법

eslint.config.js에 플러그인을 추가합니다.

```js
// eslint.config.js
import { defineConfig } from "eslint/config";
import componentArrowStyle from "eslint-plugin-component-arrow-style";

export default defineConfig([
  {
    extends: [componentArrowStyle.configs.recommended],
  },
]);
```

## 3. 규칙 설명

- **컴포넌트 함수**: 항상 중괄호와 `return`을 사용
- **일반 화살표 함수**: 한 줄로 작성이 가능하다면 중괄호와 `return`을 생략

```js
// ❌ 잘못된 예시
const MyComponent = () => <div>Hello</div>;
const sum = () => {
  return 1 + 2;
};

// ✅ 올바른 예시
const MyComponent = () => {
  return <div>Hello</div>;
};
const sum = () => 1 + 2;
```

## 4. 자동 수정

- ESLint `--fix` 옵션을 사용하면 중괄호 스타일을 자동으로 수정할 수 있습니다.

```bash
  npx eslint . --fix
```

## 5. 라이선스

[ISC](LICENSE)
