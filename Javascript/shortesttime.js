function shorterestTime(n, m, speeds) {
    let [elevatorSpeed, openDoorTime, closeDoorTime, walkSpeed] = speeds;

    // Calculate the time to walk all the way down
    let walkTime = n * walkSpeed;

    // Calculate the time to take the elevator from current floor
    let elevatorWaitTime = Math.abs(m - n) * elevatorSpeed;
    let elevatorRideTime = n * elevatorSpeed;
    let elevatorTime = elevatorWaitTime + openDoorTime + closeDoorTime + elevatorRideTime + openDoorTime;

    // Calculate the time to walk to another floor to get the elevator
    let walkOneFloorDown = n > 0 ? walkSpeed + Math.abs(m - (n - 1)) * elevatorSpeed + openDoorTime + closeDoorTime + (n - 1) * elevatorSpeed + openDoorTime : Infinity;
    let walkOneFloorUp = m < n ? walkSpeed + Math.abs(m - (n + 1)) * elevatorSpeed + openDoorTime + closeDoorTime + n * elevatorSpeed + openDoorTime : Infinity;
    let walkToAnotherFloorTime = Math.min(walkOneFloorDown, walkOneFloorUp);

    return Math.min(walkTime, elevatorTime, walkToAnotherFloorTime);
}