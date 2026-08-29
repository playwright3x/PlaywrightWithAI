let n = 10;
let first_term =0;
let second_term =1;
for(let i=1; i<=n; i++)
{
     console.log(first_term);
        let next_term = first_term + second_term;
        
        first_term = second_term;
        second_term = next_term;
}