document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("userForm");

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const gender1 = document.getElementById("male");
    const gender2 = document.getElementById("female");
    const gender3 = document.getElementById("other");

    const dob = document.getElementById("dob");
    const phone = document.getElementById("phone");
    const country = document.getElementById("country");

    // Get the preview div
    const preview = document.getElementById("preview");


    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = fullname.value.trim();
        const mobileNo = phone.value.trim();


        // Clear previous messages
        preview.innerHTML = "";


        // Check name
        if (name === "") {

            const err = document.createElement("p");

            err.textContent = "Name cannot be empty";

            err.classList.add("err");

            preview.appendChild(err);

        } else {

            const welcome = document.createElement("h2");

            welcome.textContent = `Hello ${name}`;

            preview.appendChild(welcome);


            // Check phone number
            if (mobileNo !== "") {

                const msg = document.createElement("p");

                msg.textContent = `Your mobile number is ${mobileNo}`;

                preview.appendChild(msg);
            }

        }

        // Reset form
        form.reset();

    });

});