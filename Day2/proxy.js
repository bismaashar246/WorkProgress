let employee = {
    name: "Bisma",
    team: "Marvel",
    id: "12467"
}

const handler = {

    //get method
    get(obj , prop) {

        if (obj[prop])
        {
            console.log("Read Only");
        }

        //validation
        if(prop == "id")
           return 'Not allowed';
        else
           return obj[prop];     
    }  
}

let setDate = {
    set: function(obj , prop , value) {
        obj[prop] = value;
        return;
    }
};



const proxy = new Proxy(employee , handler);
console.log(proxy.name);
console.log(proxy.team);
console.log(proxy.id);
console.log(proxy.address); //undefined

employee.address = "mega tower";
console.log(proxy.address); //undefined

proxy.name = "Sam";