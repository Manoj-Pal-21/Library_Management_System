import Cookies from 'js-cookie';

export const setCookie = (name, data, expires) => {
  return Cookies.set(name, data, { expires });
};

export const deleteCookie = (name) => {
  Cookies.remove(name);
};
