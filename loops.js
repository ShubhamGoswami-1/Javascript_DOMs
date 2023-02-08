const users = ['Shubham' , 'Mukesh' , 'Keshav'];
 
for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name :'ShubhamG',
    age: 22,
    isAdmin : true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
} 

let isFinished = false;

while(!isFinished){
    isFinished = confirm('Do u want to quit ? ');
}
