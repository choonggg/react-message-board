module.exports = {
  setupFiles: ["<rootDir>tests/setup.js"],
  verbose: true,
  testURL: "http://localhost/",
  moduleNameMapper: {
    "^@[/](.+)": "<rootDir>/src/$1",
    "^@t[/](.+)": "<rootDir>/tests/$1"
  }
}
