function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

const cats = animals.filter(isCat);

console.log(
  animals.filter((animal) => {
    if (animal.type === "cat") {
      return true;
    } else {
      return false;
    }
  })
);
or;

console.log(animals.filter((animal) => (animal.type === "cat" ? true : false)));

const startsWithP = animals.filter(function (animal) {
  if (animal.name.charAT(0) === "P") {
    return true;
  } else {
    return false;
  }
});
