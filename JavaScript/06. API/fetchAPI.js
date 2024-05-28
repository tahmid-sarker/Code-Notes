// Fetch API
// This is a modern way to make HTTP requests in JavaScript.
// It returns a Promise that resolves to the Response object representing the response to the request.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Async/Await Fetch API
// This is a more modern way to handle asynchronous code in JavaScript.

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Fetch attempt finished");
  }
};

fetchUsers();

// Multiple fetches - Parallel (Approach 1)
// This will run the fetches in parallel, meaning they will start at the same time and finish when each one is done.

const fetchInParallel = () => {
  // First fetch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  // Second fetch

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

fetchInParallel();

// Multiple fetches - Sequential (Approach 2)
// This will run the fetches in sequence, meaning the second fetch will only start after the first one has completed.

const fetchSequentially = async () => {
  try {
    // First fetch
    const response1 = await fetch('https://jsonplaceholder.typicode.com/users');
    const data1 = await response1.json();
    console.log("usersData: ", data1);

    // Second fetch
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data2 = await response2.json();
    console.log("postsData: ", data2);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log("Perfectly fetched");
  }
};

fetchSequentially();

// Multiple fetches - Promise.all (Approach 3)
// This will run the fetches in parallel and wait for all of them to complete before proceeding.

const fetchAll = async () => {
  try {
    const urls = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts'
    ];

    const responses = await Promise.all(urls.map(url => fetch(url)));
    const [usersData, postsData] = await Promise.all(responses.map(res => res.json()));
    // const data = await Promise.all(responses.map(res => res.json()));
    // console.log(data[0]);
    // console.log(data[1]);
    console.log(usersData)
    console.log(postsData)
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log("Perfectly fetched");
  }
};

fetchAll();