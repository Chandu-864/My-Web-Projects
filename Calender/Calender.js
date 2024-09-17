let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

gettingDate = () => {
    let currentDate = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let currentMonthIndex = currentDate.getMonth();
    month.innerHTML = months[currentMonthIndex];

    let date = document.getElementById("date");
    date.innerHTML = currentDate.getDate().toString().padStart(2,0);
    year.innerHTML = currentDate.getFullYear().toString();

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let dayIndex = currentDate.getDay();
    console.log(dayIndex);
    day.innerHTML = dayNames[dayIndex];
    console.log(day.innerHTML);
}

gettingDate();

/*------------------------------------New Page----------------------------------*/

createBlankPage = () => {
    let newWindow = window.open('about:blank', '_blank');

    newWindow.document.write (`
        <html>
        <head>
        <link rel="stylesheet" href="Calender2ndpage.css">
        </head>
        <body>
            <h1>Blank Page</h1>
        </body>
        </html>
    `);
}
