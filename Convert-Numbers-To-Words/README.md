# Kenzie Academy Challenge: Convert Numbers to Words

Follow the instructions provided on `kenzie.instructure` for this challenge. The `script.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

# Build a function to convert a number to its word representation

    - Define arrays for units, teens, and tens to represent the words 
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    - Check if the number is zero
    if number is 0:
        return 'zero'

    - Initialize an empty string to catch the words
    words = ''

    - For handling hundreds:
    if the number is greater than or equal to 100:
        words += units[floor(number / 100)] + ' hundred '
        number %= 100 // find what number is left after removing 100 

    - For handling tens and units
    if number left over is greater than or equal to 20:
        words += tens[floor(number / 10)]
        number %= 10
        if number > 0:
            words += '-'
    else if the number leftover is greater than or equal to 11:
        words += teens[number - 10]
        number = 0

    - Handle units
    words += units[number]

    - Return the final word representation and remove any extra spaces
    return words.trim()


# Grab the element where I want the words to be displayed: 
numberWordsElement = get element by ID 'numberWords'

# Loop through numbers 1-100
for each index from 1 to 100:
    - Convert the current index to words using the function
    wordForm = numberToWords(i)

    - Append the word to the HTML element
    numberWordsElement.innerHTML += wordForm + ', '


## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

This actually turned out to be my first approach. After looking at the example in the challenge I knew that I would need an array of words for each possible part of the number. Using conditionals felt like the most straight forward way to go with this project. I was able to break down each number through the conditionals and match each index to the corresponding word in the arrays. 

## Reflection for 1 - 1,000,000

For this part of the project, I really didn't have to change much. I added in the equation for counting up to 1000000 and kept everything else pretty much the same. For the users input, I just used the function I already created for converting the numbers to words, and added an input field for the user to enter their number. 


## Resources: 

## Buttons: 
- https://cssbuttons.app/