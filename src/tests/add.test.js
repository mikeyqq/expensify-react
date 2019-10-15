const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("adds two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("generates greeting with name passed through", () => {
  const result = generateGreeting("mikey");
  expect(result).toBe("Hello mikey!");
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
