// ✅ 올바른 사용: 중괄호 + return
const Button1 = () => {
  return <button>버튼</button>;
};

// ❌ 잘못된 사용: 중괄호 없음
const Button2 = () => <button>버튼</button>;

// ✅ 올바른 사용: 한 줄이면 중괄호 생략
const sum = (a, b) => a + b;

// ❌ 잘못된 사용: 한 줄인데도 중괄호 있음
const sum2 = (a, b) => {
  return a + b;
};

// ✅ 여러 줄이면 중괄호 필요
const calc = (a, b) => {
  const result = a + b;
  return result;
};

// 화살표 함수 아님 → ESLint 규칙 적용 안됨
function sum3(a, b) {
  return a + b;
}
