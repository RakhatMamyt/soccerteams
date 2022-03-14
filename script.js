const barca = document.querySelector("#barca");
const juventus = document.querySelector("#juventus");
const united = document.querySelector("#united");
let voteCountBarca = document.querySelector("#span-barca");
let voteCountJuventus = document.querySelector("#span-juventus");
let voteCountUnited = document.querySelector("#span-united");
let countBarca = 0;
let countJuventus = 0;
let countUnited = 0;
const clearBtn = document.querySelector("#clear");

barca.addEventListener("click", function () {
  countBarca++;
  voteCountBarca.innerText = countBarca;
  //   console.log(countBarca);
});

juventus.addEventListener("click", function () {
  countJuventus++;
  voteCountJuventus.innerText = countJuventus;
  //   console.log(countJuventus);
});

united.addEventListener("click", function () {
  countUnited++;
  voteCountUnited.innerText = countUnited;

  //   console.log(countUnited);
});

clearBtn.addEventListener("click", function () {
  console.log("clear button");
  countBarca = 0;
  voteCountBarca.innerText = countBarca;
  countJuventus = 0;
  voteCountJuventus.innerText = countJuventus;
  countUnited = 0;
  voteCountUnited.innerText = countUnited;
});
