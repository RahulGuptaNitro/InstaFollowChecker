document.addEventListener('DOMContentLoaded', function () {
    execute();
});

document.addEventListener('DOMContentLoaded', function() {
    var tablinks = document.getElementsByClassName("tablinks");
    
    document.getElementById("followers").style.display = "block";
    tablinks[0].classList.add("active");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener('click', function() {
            var cityName = this.id;

            var tabcontents = document.getElementsByClassName("tabcontent");
            
            for (var j = 0; j < tabcontents.length; j++) {
                tabcontents[j].style.display = "none";
                tablinks[j].classList.remove("active");
                
                if (tabcontents[j].id+"Tab" === cityName) {
                    tabcontents[j].style.display = "block";
                    this.classList.add("active");
                }
            }
        });
    }
});

function execute() {
    const jsonData=window.localStorage.getItem("data");
    var tableBody1 = document.getElementById('followerTable').getElementsByTagName('tbody')[0];
    var tableBody2 = document.getElementById('followingTable').getElementsByTagName('tbody')[0];
    var tableBody3 = document.getElementById('followMeBackTable').getElementsByTagName('tbody')[0];
    var tableBody4 = document.getElementById('iFollowBackTable').getElementsByTagName('tbody')[0];

    fillTable(JSON.parse(jsonData).followers,tableBody1);
    fillTable(JSON.parse(jsonData).followings,tableBody2);
    fillTable(JSON.parse(jsonData).dontFollowMeBack,tableBody3);
    fillTable(JSON.parse(jsonData).iDontFollowBack,tableBody4);
    
}

function fillTable(data,table) {
    data.forEach(function(user, i) {
        var row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell0.innerHTML = i + 1;
        cell1.innerHTML = "@" + user.username;
        cell2.innerHTML = user.full_name;
    });
}