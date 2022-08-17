const receivesAFunction = spy => (spy ('is a callback function'));

function returnsANamedFunction(){
    return function beforeall(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){}
}