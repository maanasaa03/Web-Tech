document.getElementById('myForm').addEventListener('submit', function (event) { event.preventDefault();

    // Validate the name field
    const nameInput = document.getElementById('name'); if (nameInput.value.trim() === '') {
    alert('Please enter your name.'); nameInput.focus();
    return;
    }
    
    // Validate the gender field
    const genderInputs = document.getElementsByName('gender');
    let genderSelected = false;
    for (const genderInput of genderInputs) { if (genderInput.checked) {
    genderSelected = true; break;
    }
    }
    if (!genderSelected) {
    alert('Please select your gender.');
    return;
    }
    
    // Validate the interests field
    const degreeInputs = document.getElementsByName('degree');
    let degreeSelected = false;
    for (const degreeInput of degreeInputs) { if (degreeInput.checked) {
    degreeSelected = true; break;
    }
    }
    if (!degreeSelected) {
        alert('Please select at least one degree.');
        return;
        }
        
        // Validate the country field
        const countryInput = document.getElementById('country'); if (countryInput.value === '') {
        alert('Please select your country.'); countryInput.focus();
        return;
        }
        
        // If all validations pass, submit the form
        alert('Form submitted successfully!');
        
        });
