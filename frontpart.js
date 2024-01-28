const button = document.getElementById("submitbutton");

button.addEventListener("click",(e) => {
        e.preventDefault();
        alert("Submit button worked");
        var checkedValue = document.getElementById("calc1");
        if(checkedValue.checked){
            alert("Calculus has been taken or is being taken");
        }
        else{
            alert("No calculus yet");
        }
        //Lines 4-12 took way too long ):
    }
    
);

/*
Things I've learned:
-Importing Axios breaks eventlistener for some reason
*/