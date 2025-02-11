const password = "fuckingcont"
const hash = await Bun.password.hash(password)

console.log(hash);
 