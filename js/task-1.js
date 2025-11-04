const listElem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listElem.length}`);
listElem.forEach((elem) => {
  const category = elem.querySelector("h2");
  console.log(`Category: ${category.textContent}`);
  const elements = elem.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
