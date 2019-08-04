const myArray = [1, 2, 3, 4];
              // 0, 1, 2, 3

// const weatherObject = {
//     chennai: [36, 34, 32, 36],
//     madurai: [36, 34, 32, 36],
// }

const marks = [72, 68, 35, 80, 90];

// add 5 to each element in the array
const newMarks = [];
for(let i = 0; i<marks.length; i++) {
    const score = marks[i] + 5;
    newMarks.push(score);
}

const mappedMarks = marks.map(
    (individualMark) => {
        return individualMark + 5;
    }
);

const mappedMarks = marks.map(individualMark => individualMark + 5);

const firstClassMarks = marks.filter(
    (individualMark) => {
        if(individualMark >= 80) {
            return true;
        } else {
            return false;
        }
    }
)

const firstClassMarks = marks.filter(individualMark => individualMark >= 80);

const lowestScore = marks.find(individualMark => individualMark < 40);

const sumOfMarks = marks.reduce(
    (accumulator, individualMark) => {
      return accumulator + individualMark;  
    },
    0,
)


const marks = [72, 68, 35, 80, 90];

const [first, second, ...otherMarks] = marks;

const newMarks = [...marks];
