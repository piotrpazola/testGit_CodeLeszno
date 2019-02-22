/* testGit Code Leszno v. 0.12 */
let app = document.getElementById("app");
window.onload = () => {
  doSomethingOnWindow();
  doSomethingOnConsole();
}
const doSomethingOnWindow = () => {
  let div = document.createElement("div");
  div.innerHTML='Ładuje...';
  app.append(div);
  setTimeout(() => {
    div.innerHTML='Zajebisty napis z pozdrowieniami dla Code Leszno';
    console.info('Done. Pykło z kosmicznego API pozdrowienia.');
  },3000);
  if(_isPiatunio()) {
    _sendStringOnConsoleAndWindow('Dziś piąteczek!');
  }
}
const doSomethingOnConsole = () => {
  console.warn('Ostrzeżenie na konsolę, poczekaj 3 sekundy na zmianę w dokumencie ;-)');
}
const _sendStringOnConsoleAndWindow = (string) => {
  if(typeof string=="string") {
    let div = document.createElement("div");
    div.innerHTML=string;
    app.append(div);
    console.log(string);
  }
}
const _isPiatunio = () => {
  switch(new Date().getDay()) {
    case 5: return true; break;
    default: return false; break;
  }
}
