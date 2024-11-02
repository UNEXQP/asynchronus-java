//Task 01: Iterating with Async/Await
//This function takes an array of values and logs each value with a 1-second delay.


async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}


//Task 03: Handling Errors with Async/Await
//This function simulates an API call and gracefully handles errors if the API call fails.


async function awaitCall() {
    try {
        const data = await fakeApiCall(); // Simulated API call
        console.log("Data:", data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    }
}

// Simulated API function
function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Random success or failure
            success ? resolve({ message: "Fetched data successfully" }) : reject(new Error("API call failed"));
        }, 1000);
    });
}


//Task 04: Awaiting Concurrent Requests
//This function makes two concurrent API calls and logs the combined results when both requests are complete.


async function concurrentRequests() {
    const fetchData1 = new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000));
    const fetchData2 = new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 1000));

    try {
        const [data1, data2] = await Promise.all([fetchData1, fetchData2]);
        console.log("Combined Results:", { data1, data2 });
    } catch (error) {
        console.error("An error occurred during concurrent requests:", error.message);
    }
}

