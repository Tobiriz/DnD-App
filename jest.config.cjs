module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', {targets: {node: 'current'}}],
          '@babel/preset-typescript',
        ],
      },
    ],
  },
};