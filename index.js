// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
   const hqLocation = 42; // Scuber headquarters location on 42nd Street
   return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
   const blocks = distanceFromHqInBlocks(pickupLocation);
   const feetPerBlock = 264; // Each block in Manhattan is 264 feet long
   return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
   const feetPerBlock = 264; // Each block in Manhattan is 264 feet long
   const distanceInBlocks = Math.abs(endBlock - startBlock);
   return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
   const feetPerBlock = 264; // Each block in Manhattan is 264 feet long
   const distanceInFeet = Math.abs(endBlock - startBlock) * feetPerBlock;

   if (distanceInFeet <= 400) {
       return 0; // First 400 feet are free
   } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
       // Price for distance between 400 and 2000 feet (excluding 400)
       return (distanceInFeet - 400) * 0.02;
   } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
       // Flat fare for distance over 2000 feet and under 2500 feet
       return 25;
   } else {
       return 'cannot travel that far'; // Distance over 2500 feet is not allowed
   }
}