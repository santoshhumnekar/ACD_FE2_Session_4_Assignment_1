let Greeter = (function() {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function() {
        console.log("Message:" + this.message);
    };
    return Greeter;
}());
let g = new Greeter("Hello Welcome");
g.greet();