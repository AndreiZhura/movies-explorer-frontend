
const SCREEN_SIZE_1280 = 1280;
const SCREEN_SIZE_480 = 480;
const COUNTER_1 = 1;
const COUNTER_2 = 2;
const COUNTER_3 = 3;
const COUNTER_5 = 5;
const COUNTER_8 = 8;
const COUNTER_12 = 12;
const SHORTMOVIE = 40;
// регулярки
const emailValid = str => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(str);
const nameValidationLat = str => /^[A-Za-z -]+$/.test(str)
const nameValidationKir= str => /^[А-Яа-я -]+$/.test(str)

export {
    SCREEN_SIZE_1280,
    SCREEN_SIZE_480,
    COUNTER_1,
    COUNTER_2,
    COUNTER_3,
    COUNTER_5,
    COUNTER_8,
    COUNTER_12,
    SHORTMOVIE,
    emailValid,
    nameValidationLat,
    nameValidationKir,
}