
    const form = document.querySelector("form");
    const innerBox = document.getElementById("innerBox");
    const oncompleteBox = document.getElementById("complete");
    const submitBtn = document.getElementById("submit");
    const inputName = document.getElementById("inputName");
    const cancelBtn = document.getElementById("cross");
    const passwordShow = document.getElementById("passwordShow");
    const passwordInput = document.getElementById("passwordInput");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const fullNameInput = document.getElementById("fullname");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (fullName === "" || email === "" || password === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        innerBox.classList.add("display-none");
        oncompleteBox.classList.remove("display-none");
        inputName.innerHTML = fullName; 

        document.getElementById("form").reset();
    });


    cancelBtn.addEventListener("click",()=>{
        innerBox.classList.remove("display-none");
        oncompleteBox.classList.add("display-none");
    })
  

