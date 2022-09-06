/*
NOTES:
    0 to n-1 petrol pumps
    petrolPumps = [] of length n

    We know:
    - amount of petrol
    - distance from  next pump

    The truck:
    - moves 1 km per 1 l of petrol

    - To finish the tour we need to cover all km (sum of the second number in inner arrays)
    - We need at least that many petrolLiters
    - The sum of petroLiters must always be >= sum of distanceToNextPump

INPUT: Array of inner arrays with [petrolLiters, distanceToNextPump]
OUTPUT: int -- index of smallest index of petrol pump from which we can start and finish
*/
function truckTour(petrolpumps) {
  let initialPump = 0;
  let petrolLitersTotal = 0;
  let distanceFromStart = 0;
  let totalDistance = 0;
  petrolpumps.forEach(([petrolLiters, distanceToNextPump], index) => {
    totalDistance += distanceToNextPump;
    distanceFromStart += distanceToNextPump;
    petrolLitersTotal += petrolLiters;

    if (petrolLitersTotal < distanceToNextPump) {
      initialPump = index + 1;
      petrolLitersTotal = 0;
      distanceFromStart = 0;
    } else {
      petrolLitersTotal -= distanceToNextPump;
    }
  });

  if (petrolLitersTotal >= totalDistance) {
    return initialPump;
  }

  for (let i = 0; i < initialPump; i++) {
    const petrolLiters = petrolpumps[i][0];
    const distanceToNextPump = petrolpumps[i][1];
    distanceFromStart += distanceToNextPump;
    petrolLitersTotal += petrolLiters;
    if (petrolLitersTotal < distanceToNextPump) {
      initialPump = -1;
    }
  }
  return initialPump;
}

truckTour([
  [1, 5],
  [3, 3],
  [5, 4],
]);
