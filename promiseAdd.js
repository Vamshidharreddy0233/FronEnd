let a=10;
let b=10;
promise(a,b);
var c;
function then(x,y,z)
{

z=x-y;
console.log(z);
}



function promise(a,b)
{
c=a+b;
console.log(c);

return then(a,b,c);
}