let myString = "This is sid";

let name = "Sid";

let details = "This is sid \n working as a app developer";

let userNameInput = "<div>\
<input type=\"text\" value=\""+ name +"\"></input>\
</div>"

let userNameInput = `
<div>
    <input type="text" value="${name}"/>
</div>
`

const sum = (a, b) => a+b;

const marks = [72, 68, 35, 80, 90];

const sumString = `The sum of 1 and 2 is ${sum(1,2)}`

const sumOfTheMarks = `The total sum of the class is ${marks.reduce(
    (accumulator, individualMark) => {
      return accumulator + individualMark;  
    },
    0,
)}`;

const lowestScore = `This lowest score is ${marks.find(individualMark => individualMark < 40)}`;

