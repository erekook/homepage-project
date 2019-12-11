/* eslint-disable */
export function isEmail(email) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email))
}