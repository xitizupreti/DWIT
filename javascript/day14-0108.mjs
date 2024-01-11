// Function simulating an asynchronous operation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulating success or failure
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Using async/await and try/catch
async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Using then and catch
function fetchDataWithThenCatch() {
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Testing the examples
console.log("Using async/await:");
fetchDataAsync();

console.log("\nUsing then/catch:");
fetchDataWithThenCatch();
