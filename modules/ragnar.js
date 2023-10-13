let user = {
  name: "krish",
  sayHi() {
    console.log(this.name);
  },
};
let fileName = "ragnar";
export default user;
export { fileName };
