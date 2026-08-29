function isPalindrome (str)
{
    palindrome = true;
    let left = 0;
    let right = str.length - 1;
    while (left <right)
    {
        if(str[left] !== str[right])
        {
            palindrome = false;
            break;
        }
        left++;
        right--;
    }
    return palindrome;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("shashank"));
