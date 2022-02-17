const acordar = () => "Acordando!!";

const cafe = () => "Bora tomar café!!";

const dormir = () => "Partiu dormir!!";

const hof = (func) => {
  const result = func();
  console.log(result);
};

hof(acordar);
hof(cafe);
hof(dormir);
