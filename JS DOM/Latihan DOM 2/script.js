function getComp() {
  let comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getResult(comp, player) {
  if (player == comp) return "DRAW!";
  if (player == "gajah") return comp == "orang" ? "YOU WIN!" : "YOU LOSE!";
  if (player == "orang") return comp == "semut" ? "YOU WIN!" : "YOU LOSE!";
  if (player == "semut") return comp == "gajah" ? "YOU WIN!" : "YOU LOSE!";
}

function imgComp() {
  const imgComputer = document.querySelector(".img-komputer");
  const img = ["gajah", "semut", "orang"];
  let i = 0;
  const start = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

const getPlayer = document.querySelectorAll("li img");
getPlayer.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilihanComp = getComp();
    const pilihanPlayer = i.className;
    const hasil = getResult(pilihanComp, pilihanPlayer);
    imgComp();
    setTimeout(function () {
      document.querySelector(".img-komputer").setAttribute("src", "img/" + pilihanComp + ".png");
      document.querySelector(".info").innerHTML = hasil;
    }, 1000);
    // let score = 0;
    // if(hasil == "YOU WIN!") {
    //     document.querySelector('.score-player').innerHTML = score++;
    // } else if(hasil == "YOU LOSE!") {
    //     document.querySelector('.score-comp').innerHTML = score++;
    // } else {
    //     return;
    // }
  });
});

// const playerGajah = document.querySelector('.gajah');
// playerGajah.addEventListener('click', function() {
//     const pilihanComp = getComp();
//     const pilihanPlayer = playerGajah.className;
//     const hasil = getResult(pilihanComp, pilihanPlayer);
//     document.querySelector('.img-komputer').setAttribute('src', 'img/' + pilihanComp + '.png');
//     document.querySelector('.info').innerHTML = hasil;
// });

// const playerOrang = document.querySelector('.orang');
// playerOrang.addEventListener('click', function() {
//     const pilihanComp = getComp();
//     const pilihanPlayer = playerOrang.className;
//     const hasil = getResult(pilihanComp, pilihanPlayer);
//     document.querySelector('.img-komputer').setAttribute('src', 'img/' + pilihanComp + '.png');
//     document.querySelector('.info').innerHTML = hasil;
// });

// const playerSemut = document.querySelector('.semut');
// playerSemut.addEventListener('click', function() {
//     const pilihanComp = getComp();
//     const pilihanPlayer = playerSemut.className;
//     const hasil = getResult(pilihanComp, pilihanPlayer);
//     document.querySelector('.img-komputer').setAttribute('src', 'img/' + pilihanComp + '.png');
//     document.querySelector('.info').innerHTML = hasil;
// });
