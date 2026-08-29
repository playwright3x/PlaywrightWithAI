function findLargest(a,b,c)
{
    if(a > b && a > c)
    {
        return a +"is the Largest Number";
    }
    else if(b > a && b > c)
    {
        return b +"is the Largest Number";
    }
    else
    {
        return c +"is the Largest Number";
    }
}

console.log(findLargest(10,20,30));