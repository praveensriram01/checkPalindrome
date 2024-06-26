const input = document.getElementById("input")

function reverseTxt(str) {
    return str.split("").reverse().join("")
}

function checkPalindrome() {
    const value = input.value
    const reverse = reverseTxt(value)

    if (value === reverse) {
        alert("WhoOO It's Palindrome")
    } else {
        alert("It's Not a Palindrome")
    }
    input.value="";
}