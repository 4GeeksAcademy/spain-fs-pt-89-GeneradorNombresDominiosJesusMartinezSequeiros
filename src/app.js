let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//entrega con los cambios en la legibilidad

for (let pronounItem of pronoun) {
  for (let adjItem of adj) {
    for (let nounItem of noun) {
      console.log(`${pronounItem}${adjItem}${nounItem}.com`);
    }
  }
}
