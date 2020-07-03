axios
.get("https://jsonplaceholder.typicode.com/users")
.then((response) => { //callback - asincrone
    console.log(response.data);
    const users = response.data;
    let btn = "";