function createObject() {
    // created new object with variable name info
    var info = new Object();
    
    // object properties with same variable name info
    info.name = 'bala';
    info.height = 180;
    
    // method created is attached to object with variable name 'info'
    info.aboutYourSelf = function() {             
        return (`I am ${info.name}. I am ${info.height} cm height`)
    }
    return info;                //returns object properties
}
var me = createObject();            
console.log(me.aboutYourSelf());