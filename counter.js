var counter = document.getElementsByTagName('button');
var current = document.getElementById('current');
var next = document.getElementById('next');

function getvalue(){

    // get the input value 
    var val = document.querySelector('input').value;


    // get the counter function 
    counter[0].addEventListener('click', function(){
        var value = val;
        var tick = setInterval(fn , 1000);


        // fn 
        function fn(){
            current.innerText = value;
            value--;
            if (value< 0){
                clearInterval(tick);
            }
        }


        // function  
        
    });
};

// count
// console.log(val);
// console.log('yes');
// function counting(){

// }