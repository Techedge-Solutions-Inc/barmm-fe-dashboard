import * as Yup from 'yup';
import moment from 'moment';
import PasswordValidator from 'password-validator';

const validatePassword = new PasswordValidator()
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase(1)
  .has()
  .lowercase(1)
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

const numberRegExp = /^[0-9]+$/;
const mobileRegExp = /^[0][1-9]+$/;
const mobile = /^(639)\d{9}$/;
const nameRegExp = /^([a-zA-Z,Ñ,ñ]|-|\s)+$/;
const webUrlRegExp =
  /^((https?|http|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*/;
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const isValidDeliveryDate = (value) => {
  const momentValue = value ? (value.date ? value.date : value.time) : null;
  return momentValue ? momentValue.isSameOrAfter(moment(), 'day') : false;
};

const isValidDeliveryTime = (value) => {
  const momentValue = value ? (value.date ? value.date : value.time) : null;
  return momentValue ? momentValue.isAfter(moment().add(1, 'hour')) : false;
};

const isValidImage = async (fileObj) => {
  let valid = true;
  if (fileObj instanceof Array && fileObj.length) {
    for (const file of fileObj) {
      if (!valid) break;
      valid = isValidFileSize(file);
      valid = isValidFileType(file);
      if (file.type.includes('image'))
        valid = await isValidFileResolution(file);
    }
  } else if (!(fileObj instanceof Array) && fileObj) {
    valid = isValidFileSize(fileObj);
    valid = isValidFileType(fileObj);
    if (fileObj.type.includes('image'))
      valid = await isValidFileResolution(fileObj);
  }
  return valid;
};

const isValidFileResolution = async (file) => {
  return new Promise((resolve) => {
    const img = new Image();
    let fr = new FileReader();
    fr.onload = () => {
      if (fr !== null && typeof fr.result == 'string') {
        img.src = fr.result;
      }
    };
    fr.readAsDataURL(file);

    img.onload = () => {
      resolve(img.width >= 250 && img.height >= 250);
    };
  });
};
const isValidFileSize = (file) => {
  return file.size <= 2500000;
};

const isValidFileType = (file) => {
  return [
    'image/png',
    'image/jpg',
    'image/jpeg',
    // 'application/pdf'
  ].includes(file.type);
};

const isRequiredImage = (fileObj) => {
  return (
    (fileObj instanceof Array && fileObj.length) ||
    (!(fileObj instanceof Array) && fileObj)
  );
};

export const STRING_VALIDATOR = Yup.string().required('Required*');

export const WEB_URL_VALIDATOR = Yup.string()
  .required('Required*')
  .matches(webUrlRegExp, 'Invalid Web Url');

export const MOBILE_VALIDATOR = Yup.string()
  .required('Required*')
  .matches(/^(639)\d{9}$/, 'Invalid Phone Number.')
  .max(12, 'Phone number must be exactly 12 digits')

// Yup.string()
//   .matches(/^(09|\+639)\d{9}$/, 'Invalid phone number')
//   .required('Phone number is required'),

export const REQUIRED_VALIDATOR = Yup.string().nullable().required('Required*');



export const REQUIRED_VALIDATOR_BOOL_REQUIRED = Yup.bool()
  .nullable()
  .required('Required*');

export const REQUIRED_VALIDATOR_STRING_NOT_REQUIRED =
  Yup.string().notRequired();
export const REQUIRED_VALIDATOR_BOOL_NOT_REQUIRED = Yup.bool().nullable();

export const REQUIRED_OBJECT_VALIDATOR_NOT_REQUIRED = Yup.object().nullable();

const PH_MOBILE_VALIDATOR = Yup.object().shape({
  phoneNumber: Yup.string()
    .test('is-valid-phone', 'Invalid phone number', value => {
      if (!value) {
        return true; // Allow empty value
      }

      const startsWith09 = value.startsWith('09');
      const startsWithPlus639 = value.startsWith('+639');
      const startsWithPlus63WithParentheses = value.startsWith('+63 (9');
      const startsWithPlus63WithoutParentheses = value.startsWith('+63');

      return startsWith09 || startsWithPlus639 || startsWithPlus63WithParentheses || startsWithPlus63WithoutParentheses;
    })
    .required('Phone number is required'),
});

export const REQUIRED_VALIDATOR_AGE_15 = Yup.date()
  .nullable()
  .test(
    'dob',
    'must be at least 15 years old and above.',
    function (value, ctx) {
      const dob = new Date(value);
      const validDate = new Date();
      const valid = validDate.getFullYear() - dob.getFullYear() >= 14;
      return !valid ? ctx.createError() : valid;
    }
  )
  .required('Required');
export const NOT_REQUIRED = Yup.object()
export const REQUIRED_OBJECT_VALIDATOR = Yup.object()
  .nullable()
  .required('Required*');

export const REQUIRED_LIST_VALIDATOR = Yup.array()
  .nullable()
  .required('Required*');

export const REQUIRED_MIXED_VALIDATOR = Yup.mixed()
  .nullable()
  .required('Required*');

export const PASSWORD_VALIDATOR = Yup.string()
  .required('Required*')
  .test(
    'password',
    'Password must be atleast 8 alphanumeric characters with 1 upper case and no space.',
    (value) => validatePassword.validate(value)
  );

export const PASSWORD_VALIDATOR_WITH_VALIDATION = Yup.string().test(
  'password',
  'Password must be atleast 8 alphanumeric characters with 1 upper case and no space.',
  function (value) {
    if (this.parent.password && this.parent.password.length > 0) {
      return validatePassword.validate(value);
    }
    return true;
  }
);

export const EMAIL_VALIDATOR = Yup.string()
  .required('Required*')
  .email('Invalid Email');

export const NUMBER_VALIDATOR = Yup.string()
  .required('Required*')
  .matches(numberRegExp, 'Invalid Number');

export const NAME_VALIDATOR = Yup.string()
  .required('Required*')
  .matches(nameRegExp, 'Invalid Name');

export const confirmPasswordValidator = (passwordRefID) =>
  Yup.string()
    .required('Required*')
    .oneOf([Yup.ref(passwordRefID), null], 'Passwords must be matched');

export const DELIVERY_DATE_VALIDATOR = Yup.object()
  .nullable()
  .required('Required*')
  .test('valid-date', 'Schedule not available', (value) =>
    isValidDeliveryDate(value)
  );

export const DELIVERY_TIME_VALIDATOR = Yup.object()
  .nullable()
  .required('Required*')
  .test('valid-time', 'Schedule not available', (value) =>
    isValidDeliveryTime(value)
  );

export const FILE_VALIDATOR = Yup.mixed()
  .nullable()
  .test('required-file', 'Required*', (value) => isRequiredImage(value))
  .test('valid-file', 'Invalid File', (value) =>
    isValidImage(value).then((value) => value)
  );

export const REQUIRED_MIN_MAX_NUMBER = Yup.string().min(7, 'The minimum is 7 characters').max(11, 'The maximum is 11 characters').required('Required*');
export const CONTACT_NUMBER_VALIDATOR = Yup.string()
  .required('Required*')
  .matches(phoneRegExp, 'Contact Number is not valid');

export const DYNAMIC_QUESTION_VALIDATOR = Yup.array().of(
  Yup.object({
    applicantAnswer: Yup.lazy((val) =>
      Array.isArray(val)
        ? Yup.array()
          .of(Yup.string())
          .min(1, 'At least 1')
          .required('Required*')
        : Yup.string().required('Required*')
    ),
  })
);

export const TERMS_AND_CONDITIONS_VALIDATOR = Yup.bool().oneOf(
  [true],
  'Terms & Conditions must be read.'
);

export const SKILLS_VALIDATOR = Yup.array()
  .of(
    Yup.object().shape({
      status: Yup.string().oneOf(['removed'], 'Required*'),
    })
  )
  .required('Required*');

export const RESUME_VALIDATOR = Yup.object()
  .shape({
    status: Yup.string().oneOf(['removed'], 'Required*'),
  })
  .required('Required*');

export const WORK_SCHEDULES_VALIDATOR = Yup.array()
  .of(
    Yup.object({
      engagementType: REQUIRED_VALIDATOR,
      engagementTime: Yup.object({
        from: Yup.string()
          .required('Required*')
          .test('is-less', "'From' needs to be less", function (from) {
            const { to } = this.parent;
            return moment(from, 'hh:mm A').isBefore(moment(to, 'hh:mm A'));
          }),
        to: Yup.string()
          .required('Required*')
          .test('is-greater', "'To' needs to be greater", function (to) {
            const { from } = this.parent;
            return moment(to, 'hh:mm A').isAfter(moment(from, 'hh:mm A'));
          }),
      }),
    })
  )
  .min(1, 'At least 1')
  .required('Required*');

export const RECRUITER_RESPONSE_APP_VALIDATOR = Yup.object({
  from: Yup.string()
    .required('Required*')
    .test('is-less', "'From' needs to be less", function (from) {
      const { to } = this.parent;
      return moment(from, 'hh:mm A').isBefore(moment(to, 'hh:mm A'));
    }),
  to: Yup.string()
    .required('Required*')
    .test('is-greater', "'To' needs to be greater", function (to) {
      const { from } = this.parent;
      return moment(to, 'hh:mm A').isAfter(moment(from, 'hh:mm A'));
    }),
});

export const SALARY_RANGE_VALIDATOR = Yup.object({
  min: Yup.number().required('Required*').positive('Must be greater than 0'),
  max: Yup.number()
    .required('Required*')
    .positive('Must be greater than 0')
    .test('is-greater', 'Max should be greater', function (max) {
      const { min } = this.parent;
      return max > min;
    }),
});

export const SALARY_PERIOD_VALIDATOR = Yup.string().required('Required*');

export const ETHNICITY_VALIDATOR = Yup.array()
  .of(Yup.string())
  .min(1, 'At least 1')
  .required('Required*');

export const TENTATIVE_DATE_START_VALIDATOR = Yup.array()
  .of(Yup.string())
  .min(2, 'Must have start and end date')
  .required('Required*');

export const NUM_PER_HIRED_VALIDATOR = Yup.number()
  .positive('Must be greater than 0')
  .required('Required*');

export const DYNAMIC_QUESTIONS_VALIDATOR = Yup.array().of(
  Yup.object({
    question: Yup.string().max(100, 'Max 100 characters'),
    answer: Yup.object({
      typeOfAnswer: Yup.string(),
      value: Yup.array().of(Yup.string().max(100, 'Max 100 characters')),
    }),
  })
);

export const WORK_EXPERIENCE_DURATION_VALIDATOR = Yup.object({
  current: Yup.bool().oneOf([true, false], 'Required*'),
  from: Yup.string().required('Required*'),
  to: Yup.string().required('Required*'),
});

export const MIDDLE_NAME_VALIDATOR = Yup.string()
  .nullable()
  .matches(nameRegExp, 'Invalid Name');

export const BIRTHDAY_VALIDATOR = Yup.date()
  .required('Required*')
  .max(moment(), 'Invalid date');
  
  

export const regexEmailValidation = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const isValidURL = (string) => {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};

export const ZIP_CODE_VALIDATOR = Yup.string()
  .required('Required*')
  .matches(/^[0-9]+$/, 'Must be only digits')
  .min(5, 'Must be exactly 5 digits')
  .max(5, 'Must be exactly 5 digits');
