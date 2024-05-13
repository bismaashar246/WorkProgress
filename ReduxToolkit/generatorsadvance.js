function* infinityAndBeyond() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

function* take(n, iterable) {
    for (let item of iterable) {
        if (n <= 0)
            return;

        n--;
        yield item;
    }
}

token = [...take(5, infinityAndBeyond())];

function* map(iterable, mapFn) {
    for (let item of iterable) {
        yield mapFn(item);
    }
}

squares = [...take(9, map(infinityAndBeyond(), (x) => x * x))];

console.log(token + '\n');
console.log(squares + '\n');


//tracking the messages

function* listener() {
    console.log("I am listening");

    while(true) {
        let msg = yield;
        console.log('heard you say:' , msg);

    }
}

let l = listener()
l.next('Are you there?')
l.next('Can you hear me?')
l.next('You are amazing\n')

//tracking the count

function* donutCount(){
    let count =0;

    while(count >= 0) {
        count += yield count;
        console.log("Yayyy cake count is: " + count)
    }
    console.log("Oops cake count is: " + count)
}

let mycakes = donutCount();
mycakes.next(6)
mycakes.next(20)
mycakes.next(-8)
mycakes.next(-30)
console.log('\n')
//replacing recursion with yield

/*function* ping(){
    let n; 

    while(true){
        n = yield;
        console.log('ping' , n)
        send('pong' , ++n)
    }
}

function* pong(){
    let n; 

    while(true){
        n = yield;
        console.log('pong' , n)
        send('ping' , ++n)
    }
}

players.ping = ping()
send('ping' , 'getready')
players.ping = ping()
send('ping' , 'getready')
send('ping' , 0)
run();*/

//syncronously holding a function conversation
//coroutine : actor model

let players = {};
let queue = [];

function send(name , msg){
    console.log(msg)
    queue.push([name , msg])
}

function run(){
    while(queue.length){
        let [name , msg] = queue.shift();
        players[name].next(msg)
    }
}

function* player1(){
    
    send('player2' , 'hello! Up for a game?')

    let response = yield;

    if (response != 'Yes!')
        return;

    send('player2' , 'Perfect! see you in the battle field')
}

function* player2(){

    let question = yield;


    if (question != 'hello! Up for a game?')
        return;
    
    send('player1' , 'Yes!')
}

players.player1 = player1();
players.player2 = player2();
send('player2' , 'come online player 2');
send('player1' , 'come online player 1');
run();
