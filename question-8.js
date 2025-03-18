// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
function getUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
}
const handleResponse = (response) => {
    return response.json();
  };
  function getOnlyUsers(user){
    return user.name
  }
function onSuccess(data){
    let newUsers = data.map(getOnlyUsers)
    console.log(newUsers)    
}

getUsers().then(handleResponse).then(onSuccess)