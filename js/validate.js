function validate_reg_form(){
    const nameinp = document.getElementsByName('name')[0];
    const emailinp = document.getElementsByName('email')[0];
    const addressinp = document.getElementsByName('address')[0];
    const gender = document.getElementsByName('gender')[0];
    const dateinp = document.getElementsByName('date')[0];

    const name = nameinp.value.trim();
    const email = emailinp.value.trim();
    const address = addressinp.value.trim();
    const date = dateinp.value.trim();

    if (name === "") {
        alert("Name is required.");
        nameinp.focus(); 
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        emailinp.focus();
        return false;
    }
    if (address === "") {
        alert("Address is required.");
        addressinp.focus();
        return false;
    }
    if (gender.value === "") {
        alert("Please select a gender.");
        gender.focus();
        return false;
    }
    if (date === "") {
        alert("Date of birth is required.");
        dateinp.focus();
        return false;
    }
    const dateTemp = new Date(date);
    const currDate = new Date();
    if (dateTemp > currDate) {
        alert("Date of birth cannot be later than current date.");
        dateinp.focus();
        return false;
    }
    return true;
}