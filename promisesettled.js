const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 2 resolved"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 800)
);

const promisesArray = [promise1, promise2, promise3];

Promise.allSettled(promisesArray).then((results) => {
  console.log("All promises settled:", results);
});