class Contact{
    constructor(...parameters){
        this.firstName = parameters[0]
        this.lastName = parameters[1]
        this.address = parameters[2]
        this.city = parameters[3]
        this.state = parameters[4]
        this.zip = parameters[5]
        this.phoneNumber = parameters[6]
        this.emailId = parameters[7]
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "incorrect first name"
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw "incorrect last name"
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addressRegex = RegExp("^[a-zA-Z]{4,}$")
        if(addressRegex.test(address))
        this._address = address;
        else throw "incorrect address"
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp("^[a-zA-Z]{4,}$")
        if(cityRegex.test(city))
        this._city = city
        else throw "incorrect city"
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp("^[a-zA-Z]{4,}$")
        if(stateRegex.test(state))
        this._state = state;
        else throw "incorrect state"
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let zipRegex = RegExp("^[1-9]{1}[0-9]{5}$")
        if(zipRegex.test(zip))
        this._zip = zip
        else throw "incorrect zip"
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$")
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber
        else throw "incorrect phone Number"
    }
    get emailId(){
        return this._emailId;
    }
    set emailId(emailId){
        let emailIdRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$")
        if(emailIdRegex.test(emailId))
        this._emailId = emailId
        else throw "incorrect email Id"
    }
}
let contact1 = new Contact("Goku","Saiyan","GandhiNagar","Warangal","Telangana","506001","7207649566","goku.saiyan@gmail.com")
let contact2 = new Contact("Gohan","Saiyan","GandhiNagar","Warangal","Telangana","506001","9999999999","gohan.saiyan@gmail.com")
let addressBook = new Array();
addressBook.push(contact1)
addressBook.push(contact2)
console.log(addressBook)
function searchForContact(contact){
    return contact.firstName.includes("Goku")
}
addressBook.find(searchForContact).firstName = "Gokui"
console.log(addressBook)
addressBook.pop(addressBook.find(searchForContact))
console.log("Pop"+addressBook)