const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === 'developer');
  console.log(developers);
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name');
  const age = parseInt(prompt('Enter age'));
  const profession = prompt('Enter profession');

  const newData = { name, age, profession };
  data.push(newData);
  console.log(data)
}

// 3. Remove Admins
function removeAdmin() {
  const removeddata = data.filter((person)=>person.profession!=='admin');
  console.log(removeddata);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: 'Sharaya', age: 22, profession: 'developer' },
    { name: 'Kavaya', age: 27, profession: 'Teacher' },
  ];

  const resultArray = data.concat(dummyArray);
  console.log('Concatenated Array:', resultArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / data.length;
  console.log('Average Age:', avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some(person => person.age > 25);
  console.log('Is there anyone above 25?', above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log('Sorted Array by Age:', data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(person => person.name.toLowerCase() === 'john');
  if (john) {
    john.profession = 'manager';
    console.log('John\'s profession updated to manager.');
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession === 'developer').length;
  const adminCount = data.filter(person => person.profession === 'admin').length;
  

  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
  
}
