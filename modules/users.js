class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const alertMsg = msg => console.log(msg)
export { alertMsg, User as default }
