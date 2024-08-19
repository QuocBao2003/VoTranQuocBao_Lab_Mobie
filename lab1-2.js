// Cau 1
function BMI(mass,height){
    return mass / (height * height);
}

function markHigherBMI(massMarks,heighMarks,massJohn,heightJohn){
    return BMI(massMarks,heighMarks) > BMI(massJohn,heightJohn)
}
console.log("Chi so BMI cua Marks",BMI(78,1.69));
console.log("Chi so BMI cua jOHN",BMI(92,1.95));
console.log(markHigherBMI(78,1.69,92,1.95));
console.log(markHigherBMI(95,1.88,85,1.76));

// Cau 2


let BMIMarks = BMI(78,1.69);
let BMIJohn = BMI(92,1.95);

if(BMIMarks>BMIJohn){
    console.log("Mark's  BMI{"+BMIMarks+"} is higher than John's{"+BMIJohn+"}");
}else{
    console.log("John's{"+BMIJohn+"} BMI is higher than Mark's{"+BMIMarks+"}");
}

// Cau 3
const [team1,team2,team3,team4,team5,team6]=[
    {name :'Dolphins',score1 : 96,score2 : 108,score3 : 89},
    {name :'Koalas',score1 : 88,score2 : 91,score3 : 110},
    {name :'Dolphins',score1 : 97,score2 : 112,score3 : 101},
    {name :'Koalas',score1 : 109,score2 : 95,score3 : 123},
    {name :'Dolphins',score1 : 97,score2 : 112,score3 : 101},
    {name :'Dolphins',score1 : 109,score2 : 95,score3 : 106},
]


function dtb(score1, score2, score3){
    return (score1 + score2 + score3)/3;
}

function compareTeams(team_A, team_B){
    var teamA = dtb(team_A);
    var teamB = dtb(team_B);
    if(teamA > teamB){
       return "team "+teamA.name+"thắng team"+teamB.name;
    }else if(teamA < teamB){
        return "team "+teamB.name+"thắng team "+teamA.name;
    }else{
        return "Hòa";
    }
}

console.log(compareTeams(team3,team5));