//  Finding a distance that gives speed and time
// How to calculate speed => Speed = Distance / Time
// How to calculate time => Time = Distance / Speed
// How to calculate distance => Distance = Speed x Time
const findDistance = (speed, time) => {
    let distance = speed * time;
    return distance;
  };
  console.log(findDistance(100, 4)); //400
  