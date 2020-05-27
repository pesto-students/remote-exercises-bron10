const sortByName = (animals) => {
  animals.forEach((currentAnimal, index) => {
    const nextAnimal = animals[index + 1] || {};
    const tempObject = {};
    if (currentAnimal.numberOfLegs === nextAnimal.numberOfLegs) {
      tempObject[currentAnimal.name] = currentAnimal;
      tempObject[nextAnimal.name] = nextAnimal;
      const sortWithNextAnimal = [currentAnimal.name, nextAnimal.name].sort();
      animals[index + 1] = tempObject[sortWithNextAnimal[1]];
      animals[index] = tempObject[sortWithNextAnimal[0]];
    }
  });
  return animals;
};

const animalSort = (animals) => {
  const sortedbyLegs = animals
    .sort((currentAnimal, nextAnimal) => currentAnimal.numberOfLegs - nextAnimal.numberOfLegs);
  return sortByName(sortedbyLegs);
};
export { animalSort };
