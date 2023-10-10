export function timeout() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("fakeApi");
    }, 1000);
  });
}
