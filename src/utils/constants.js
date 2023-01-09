
import Images from "../../Images/Images";

export default Weekdays = ['M','T','W','Th','F','S','Su'];

export {
    menuItems,
    timer,
    calculators
}
const menuItems = [
    {
        title : 'Circuits',
        targetScreen : '',
        image : `${Images.circuits}`
    },
    {
        title : 'Progress',
        targetScreen : '',
        image : `${Images.progress}`
    },
    {
        title : 'Calculators',
        targetScreen : '',
        image : `${Images.fit_calc}`
    },
]

const timer = [
    {
        title : "10 sec",
        time : 10
    },
    {
        title : "15 sec",
        time : 15
    },
    {
        title : "30 sec",
        time : 30
    },
    {
        title : "45 sec",
        time : 45
    },
    {
        title : "60 sec",
        time : 60
    },
    {
        title : "90 sec",
        time : 90
    },
    {
        title : "120 sec",
        time : 120
    },
    {
        title : "150 sec",
        time : 150
    },
]

const calculators = [
    {
        name : "BMI calculator",
        description : "Body mass index calculator",
        id : 1,
    },
    {
       name : "BMR calculator",
       description : "Basal metabolic rate calculator ",
       id : 2,
   },
   {
       name : "Ideal weight calculator",
       description : "Ideal Weight Calculator computes ideal body weight (IBW) ",
       id : 3,
   },
   {
       name : "Base calorie calculator",
       description : "Calculate base calorie requirements for the day",
       id : 4,
   },
];