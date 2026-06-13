const rideForm = document.getElementById("rideForm");

if (rideForm) {

    rideForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const pickup = document.getElementById("pickup").value;
        const destination = document.getElementById("destination").value;

        alert(
            "Ride Created Successfully!\n\n" +
            "Driver: " + name +
            "\nFrom: " + pickup +
            "\nTo: " + destination
        );

        rideForm.reset();
    });

}