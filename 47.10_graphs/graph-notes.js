//create a node class
class Person{
    constructor(name,) {
        this.name = name;
        this.adjacent = [];
    }
}

const homer = new Person('homer')
const marge = new Person('marge')
//they are not connected yet
homer.adjacent.push(marge)
//connect the other way around
marge.adjacent.push(homer)
/**We can use an array but the order does not matter in a graph 
 * A drawback is that we might add duplicate values!
 * Instead store a set! ensures uniqueness 
*/



class Person{
    constructor(name, adjacent= new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

//connect the nodes!
const homer = new Person('homer')
const marge = new Person('marge')
const maggie = new Person('maggie')
const lisa = new Person('lisa')
const grandpa = new Person('grandpa')
homer.adjacent.add(marge);
marge.adjacent.add(homer);

maggie.adjacent.add(marge);
maggie.adjacent.add(homer);

//connect the other way around!
homer.adjacent.add(maggie)
marge.adjacent.add(maggie)




////////////Person node class and graph class//////////
class Person{
    constructor(name, adjacent= new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}


//create class to store a collection of actual nodes
//the Person node will store the actual relationship
class FriendGraph{
    constructor() {
        this.nodes = new Set();
    }
    //take a node and add it into this.nodes set
    //here is a node you should know about
    addPerson(person) {
        console.log(person)
        this.nodes.add(person);
    }
    //pass in list of multiple nodes, loops and calls addPerson on each node
    addPeople(people_list) {
        console.log(people_list)
        for (let person of people_list) {
            this.addPerson(person)
        }
    }
    //helper method to set a rrelationship between 2 different node
    setFriends(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
}

//connect the nodes!
const homer = new Person('homer')
const marge = new Person('marge')
const maggie = new Person('maggie')
const lisa = new Person('lisa')
const grandpa = new Person('grandpa')


const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grandpa]);

//Make edges(connections)
friends.setFriends(homer,marge)
friends.setFriends(homer, maggie)
friends.setFriends(homer, lisa)
friends.setFriends(marge, maggie)
friends.setFriends(maggie, lisa)
friends.setFriends(lisa, grampa)


/////////Breath first search /////////////
class Person{
    constructor(name, adjacent= new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

class FriendGraph{
    constructor() {
        this.nodes = new Set();
    }
    addPerson(person) {
        // console.log(person)
        this.nodes.add(person);
    }
    addPeople(people_list) {
        for (let person of people_list) {
            this.addPerson(person)
        }
    }
    setFriends(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }

/*BFS traverse
Passes in 2 nodes and returns true/false
*/
//create a queu structure to keep track of what to visit next/or in the future
areConnected(person1, person2) {
    //explore all connections from person 1
    let toVisitQueue = [person1]
    //make a set that will store what we have seen
    let seen = new Set(toVisitQueue)
    //loop while there is anything in visitQueue
    while (toVisitQueue.length) {
        let currPerson = toVisitQueue.shift();
        //is this the thing we're looking for?
        if (currPerson === person2) return true
        
        //if not go into adjacent of currPerons
        for (let neighbor of currPerson.adjacent) {
            //run code if you have not seen that neighbor
            if (!seen.has(neighbor)) {
                toVisitQueue.push(neighbor);
                //add to seen list as soon as we stored it in the queue
                seen.add(neighbor)                    
            }

        }
        
    }
    //return false if no connection after going down loop
    return false;
    }
    
    ///////////Depth first search ////////////

    //make a seen set with person 1 to start
    //recurse but keep track of what is seen
areConnectedRecursive(person1, person2, seen=new Set([person1])) {
    //loop
    for (let neighbor of person1.adjacent) {
        if (person1 === person2) return true;

        //if you have not seen this neighbor in 'seen'
        if (!seen.has(neighbor)) {
            //Since it has not been seen, it has now, add to seen
            seen.add(neighbor)
            //function calls new neighbor in place of 'person1' every time.
            //if it ever returns true, return true in entire function
            if (this.areConnectedRecursive(neighbor, person2, seen)) {
                return true;
            }
        }
    }
    //loop finishes and no true, return false;
    return false;
}
}

//connect the nodes!
const homer = new Person('homer')
const marge = new Person('marge')
const maggie = new Person('maggie')
const lisa = new Person('lisa')
const grandpa = new Person('grandpa')


const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grandpa]);

//Make edges(connections)
friends.setFriends(homer,marge)
friends.setFriends(homer, maggie)
friends.setFriends(homer, lisa)
friends.setFriends(marge, maggie)
friends.setFriends(maggie, lisa)
friends.setFriends(lisa, grandpa)

//cratee moe graph
const moe = new Person('moe')
const barney = new Person('barney')
const lenny = new Person('lenny')
friends.addPeople([moe, barney, lenny])

//create connections
friends.setFriends(moe,barney)
friends.setFriends(barney, lenny)

/*Starts at marge, 
add to seen set
take marge's adjacent (homer, maggie) add them to set and mark them as seen
go to homer popped off queue, since marge and maggie are seen , adds lisa to queue
shift to next queue(maggie)*/