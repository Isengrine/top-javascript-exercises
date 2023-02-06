const findTheOldest = function(people) {
    for (const person of people) {
        if (!("yearOfDeath" in person)) {
          person.yearOfDeath = 2023;
        }
    }
    let oldest = people.sort((a, b) => {
        let lastPerson = a.yearOfDeath - a.yearOfBirth;
        let nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    console.log(oldest);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
