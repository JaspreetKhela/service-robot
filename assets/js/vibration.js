vibrationButton = document.getElementById("vibration-button");

// var vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
    window.navigator.vibrate(duration);
}

// Stops vibration
// function stopVibrate() {
//     // Clear interval and stop persistent vibrating
//     if(vibrateInterval) clearInterval(vibrateInterval);
//     window.navigator.vibrate(0);
// }

// Start persistent vibration at given duration and interval
// Assumes a number value is given
// function startPersistentVibrate(duration, interval) {
//     vibrateInterval = setInterval(function() {
//         startVibrate(duration);
//     }, interval);
// }

// Vibrate the device for one second
vibrationButton.addEventListener("click", startVibrate(1000));