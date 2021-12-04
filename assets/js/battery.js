batteryCharging = document.getElementById("battery-charging");
batteryLevel = document.getElementById("battery-level");
batteryChargingTime = document.getElementById("battery-charging-time");
batteryDischargingTime = document.getElementById("battery-discharging-time");

navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });
    function updateChargeInfo(){
        console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
        batteryCharging.innerHTML = "Battery charging? " + (battery.charging ? "Yes" : "No");
    }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      console.log("Battery level: " + battery.level * 100 + "%");
      batteryLevel.innerHTML = "Battery level: " + battery.level * 100 + "%";
    }
  
    battery.addEventListener('chargingtimechange', function(){
      updateChargingInfo();
    });
    function updateChargingInfo(){
      console.log("Battery charging time: " + battery.chargingTime + " seconds");
      batteryChargingTime.innerHTML = "Battery charging time: " + battery.chargingTime + " seconds";
    }
  
    battery.addEventListener('dischargingtimechange', function(){
      updateDischargingInfo();
    });
    function updateDischargingInfo(){
      console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
      batteryDischargingTime.innerHTML = "Battery discharging time: " + battery.dischargingTime + " seconds";
    }  
});