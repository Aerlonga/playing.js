// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
//                    0       1          2        3
const animals = [
    {name: "girafa", url: "https://super.abril.com.br/wp-content/uploads/2016/09/super_imggirafa.jpg?quality=90&strip=info&w=1024&resize=1200,800"},
    {name: "elefante", url: "https://www.infoescola.com/wp-content/uploads/2016/12/elefante-asiatico-198685685.jpg"},
    {name: "leão", url: "https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg"},
    {name: "urso", url: "https://conteudo.imguol.com.br/c/entretenimento/f6/2021/09/13/urso-em-paisagem-florestal-1631562919397_v2_4x3.jpg"}
];
const btn = document.getElementById("btn");
const animalElement = document.querySelector(".animal");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundImage = `url('${animals[randomNumber].url}')`;
    document.body.style.backgroundSize = "cover";
    animalElement.textContent = animals[randomNumber].name;
});

function getRandomNumber(){
    return Math.floor(Math.random() * animals.length);
};