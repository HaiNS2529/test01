var m=12;
var n=10;
for (let i=1; i<=n; i++)
{
    let string ="";
    for (let j=1; j<=m; j++)
    {
        if ( (i+j) % 2 == 0 ) string=string+" ";
        else string =string +"#";
    }
    console.log(string);
}