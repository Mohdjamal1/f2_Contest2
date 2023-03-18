function OpeningCeremony(score) {
    console.log("Let the games begin!");
    setTimeout(() => {
        Race100M(score);
    }, 1000);
  }
  
  function Race100M(score) {
    console.log("Initial scores: ", score);
    console.log("Race100M started!");
    setTimeout(() => {
      let times = {red: getRandomInt(10, 15), blue: getRandomInt(10, 15), green: getRandomInt(10, 15), yellow: getRandomInt(10, 15)};
    //   console.log("Race100M times: ", times);
      let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
      let firstColor = sortedTimes[0][0];
      let secondColor = sortedTimes[1][0];
      console.log("Previous scores: ", score);
      score[firstColor] += 50;
      score[secondColor] += 25;
      console.log("Race100M scores: ", score);
      console.log(firstColor,"Won the Race100M!");
      LongJump(score);
    }, 3000);
  }
  
  function LongJump(score) {
    console.log("LongJump started!");
    setTimeout(() => {
      let color = getRandomColor();
      console.log("Previous scores: ", score);
      score[color] += 150;
      console.log("LongJump scores: ", score);
      console.log(`LongJump winner: ${color}`);
      HighJump(score);
    }, 2000);
  }
  
  function HighJump(score) {
    console.log("HighJump started!");
    let color = prompt("What colour secured the highest jump?");
    console.log("Previous scores: ", score);
    if (color === null || color === "") {
      console.log("Event was cancelled");
      AwardCeremony(score);
    } else if (Object.keys(score).includes(color)) {
      score[color] += 100;
      console.log("HighJump scores: ", score);
      console.log(`HighJump winner: ${color}`);
      AwardCeremony(score);
    } else {
      console.log("Invalid color entered!");
      AwardCeremony(score);
    }
  }
  
  function AwardCeremony(score) {
    console.log("Award Ceremony started!");
    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`);
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomColor() {
    let colors = ["red", "yellow", "blue", "green"];
    return colors[getRandomInt(0, 3)];
  }
  
  // Starting the SportsDay
  let score = {red: 0, blue: 0, green: 0, yellow: 0};
  OpeningCeremony(score);