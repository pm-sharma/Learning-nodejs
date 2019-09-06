module.exports.counter = function(arr){
    return "There are "+arr.length+"hey";

};


module.exports.adder = function(a,b){
    return `the sum of the two number is ${a+b}`;
};

module.exports.pi = 3.142;

// console.log(counter(["da","pa","adad"]));





                                    // OR
                            //  module.exports ={
                            //     counter: counter,
                            //     adder: adder,
                            //     pi: pi,
                            // }