/* test v. 0.1 */
window.onload = () => {
  doSomethingOnWindow();
  doSomethingOnConsole();
}
const doSomethingOnWindow = () => {
  let div = document.createElement("div");
  div.innerHTML='Ładuje...';
  let app = document.getElementById("app");
  app.append(div);
  setTimeout(() => {
    div.innerHTML='Zajebisty napis z pozdrowieniami dla Code Leszno';
    console.info('Done.');
  },3000);
}
const doSomethingOnConsole = () => {
  console.warn('Ostrzeżenie na konsolę, poczekaj 3 sekundy na zmianę w dokumencie ;-)');
}
