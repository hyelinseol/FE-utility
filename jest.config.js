module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { useESM: true }], // ts-jest를 사용해 ES Modules 변환
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"], // ESM으로 처리할 확장자 지정
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // CSS 모듈 목업
  },
  testEnvironment: "jsdom", // 브라우저 환경 시뮬레이션
};
