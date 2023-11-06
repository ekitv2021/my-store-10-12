import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//This function will return either null or ValidationError
//If it returns null, that means the name is valid
//If it returns ValidationErrors, that means the name is not valid
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{
    return(control: AbstractControl): ValidationErrors | null => {
        //assigning the value of the name textbox to the variable val
        let val = control.value 
        if (forbiddenName.test(val))
            return {forbidden: control.value}
        else
            return null
    }
}