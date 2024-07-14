import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  const pattern = /^[0-9]{10}$/;

  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;

    if (!phoneNumber) {
      return null;
    }

    if (!pattern.test(phoneNumber)) {
      return { phoneNumber: { value: phoneNumber } };
    }

    return null;
  };
}
