export const linkRegExp =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

export const emailRegExp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const hexRegExp = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

export const telephoneNumberRegExp =
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

export const lettersNumbersRegExp = /^[a-zA-Z0-9\s_.-]*$/;

export const positiveNumbersRegExp = /^[0-9]*$/;

export const numbersDotsRegExp = /^[0-9]*\.?[0-9]*$/;

export const lettersRegExp = /^[a-zA-Z ]+$/;

export const modelsRegExp = /[^\W_]/;

export const positiveNumbersRegex = /^[0-9]*$/;
