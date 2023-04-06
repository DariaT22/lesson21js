"use strict"



const user1 = {
    id:'1',
    name:'Jack',
    email:'jack@mail.ru',
    address: 'Green Street 22',
    phone:'+375 29 333 55 88',
}
const user2 = {
    id:'2',
    name:'Mike',
    email:'mike@mail.ru',
    address: 'Grey Street 24',
    phone:'+375 29 444 55 66',
}


class User {
    constructor(user){
        this.data=user
        }
        editUser (newUser){
            this.data=newUser;
        }
        getUser (){
            return this.data;
        }
       
    }
const user=new User(user1);
console.log (user2);
console.log(user.getUser());




class Contacts {
    constructor() {
        this.data=[]
    }
    add(contact){
        const newUser =new User(contact)
        this.data=[...this.data, newUser.data ]
    }
    edit(id,data) {
        const contact= this.data.map (
            element=>{
                if (element.id===id) {
                    return {...element, ...data}
                }
                return element
            })
            contact.editData.call(this, contacts)
    }
    remove(id) {
        return this.data = this.data.filter(element => element.id !== id)
    }
    get() {
        return this.data
    }
}
const contacts=new Contacts();
console.log(contacts)
contacts.add(user1);
contacts.add(user2);
contacts.edit('1', { name: 'Bob' })
contacts.edit('2',{address: 'Beautiful Street'})
console.log(contacts)
contacts.remove('1')
console.log(contacts.get())




class ContactsApp extends Contacts {
	constructor() {
		super();
		this.render();
	}
	render() {
		const form = document.querySelector(".form");
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const { elements } = form;
			const contact = {};
			Array.from(elements)
				.filter((element) => element.name)
				.forEach((elem) => {
					const { name, value } = elem;
					contact[name] = value;
					elem.value = "";
				});
			this.createContact(contact);
		});
	
const contactsApp = new ContactsApp();