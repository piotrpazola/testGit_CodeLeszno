/* testGit Code Leszno v. 0.14 */
let app = document.getElementById("app");
window.onload = () => {
  doSomethingOnWindow();
  doSomethingOnConsole();
  doSomethingThroughGenerator();
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
const doSomethingThroughGenerator = async () => {
  const iterator = _someGeneratorFunctionExample();
  for await(let value of iterator) {
    let div = document.createElement("div");
    div.innerHTML=value;
    app.append(div);
  }
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
const _someGeneratorFunctionExample = async function* () {
  for(let i=0; i<10; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    yield 'To jest wiersz nr '+(i+1)+' z generatora';
  }
}
