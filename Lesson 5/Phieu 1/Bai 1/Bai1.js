var selectDay = document.getElementById("day");
var selectMonth = document.getElementById("month");
var selectYear = document.getElementById("year");
// co the dung loop khac 

for (var i = 1; i <= 31; i++) {
    //tao them the option cho select 
    var option = document.createElement("option");
    //gia tri value cho the option tu 1 -> 31
    option.value = i;
    //hien thi option tu 1 -> 31
    option.textContent = i;
    //them option cho select r quay lai vong lap cho toi het
    selectDay.appendChild(option);
}

for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectMonth.appendChild(option);
}

for (var i = 1900; i <= 2022; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
}