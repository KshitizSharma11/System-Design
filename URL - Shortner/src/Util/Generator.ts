const charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
export function encode(id:number):string {
  if (id === 0) return charset[0];

  let code = "";
  while (id > 0) {
    let remainder = id % 62;
    code = charset[remainder] + code;
    id = Math.floor(id / 62);
  }
  return code;
}
