const TEXT_FIELD_MAX_LENGTH = 100;
const TEXT_AREA_MAX_LENGTH = 2000;
const HTML_MAX_LENGTH = 120000;

const PHONE_NUMBER_MIN_LENGTH = 8;
const PHONE_NUMBER_MAX_LENGTH = 15;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/;

const form = {
  textField: (name: string, value: string, errors: string[]) => {
    const isInvalid = !textIsValid(value, TEXT_FIELD_MAX_LENGTH);
    validateError(name, isInvalid, errors);
  },
  textArea: (name: string, value: string, errors: string[]) => {
    const isInvalid = (!textIsValid(value, TEXT_AREA_MAX_LENGTH));
    validateError(name, isInvalid, errors);
  },
  textHTML: (name: string, value: string, errors: string[]) => {
    const isInvalid = (!textIsValid(value, HTML_MAX_LENGTH));
    validateError(name, isInvalid, errors);
  },
  number: (name: string, value: any, errors: string[]) => {
    const isInvalid = Number.isNaN(Number.parseInt(value, 10));
    validateError(name, isInvalid, errors);
  },
  email: (name: string, value: string, errors: string[]) => {
    const isInvalid = !EMAIL_REGEX.test(value);
    validateError(name, isInvalid, errors);
  },
  phoneNumber: (name: string, value: string, errors: string[]) => {
    const length = value.length;
    const phoneNumber = Number.parseInt(value, 10);
    const isInvalid =
      !(!Number.isNaN(phoneNumber) &&
        length >= PHONE_NUMBER_MIN_LENGTH &&
        length <= PHONE_NUMBER_MAX_LENGTH);
    validateError(name, isInvalid, errors);
  },
  array: {
    hasLength: (name: string, array: any[], errors: string[]) => {
      const isInvalid = !array.length;
      validateError(name, isInvalid, errors);
    }
  },
};

const textIsValid = (text: string, maxLength: number) => {
  try {
    const length = text.trim().length;
    return length > 0 && length <= maxLength;
  } catch (error) {
    return false;
  }
}

const validateError = (name: string, isInvalid: boolean, errors: string[]) => {
  if (isInvalid) {
    errors.push(`${name} no es un valor válido`);
  }
}

export default { form, validateError }
