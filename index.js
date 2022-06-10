const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased () {

  //spliting the string to be word by word and into an Array
  return tutorials.map((line) => {
    let strng = line.split(" ");

    //capitalizing first letter in the Array
    let capsStrng = strng.map(
      (fstLetter) => fstLetter.charAt(0).toUpperCase() + fstLetter.slice(1)
    );

    //joining the Array back to a string
    let joinedstrng = capsStrng.join(" ");
    return joinedstrng;
  });
};
