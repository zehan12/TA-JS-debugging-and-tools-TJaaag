//! get fullName function


function fullName( firstName , lastName ){
    return firstName + " " + lastName

}

let excepted = "Zehan Khan";

let test1 = fullName("john","snow");


if ( test1 !== excepted ){
    throw new ( `${test1} is not equal to ${excepted} ` )
}


let test2 = fullName("arya","stark");

if ( test2 !== excepted ){
    throw new ( `${test2} is not equal to ${excepted} ` )
}

//! amount