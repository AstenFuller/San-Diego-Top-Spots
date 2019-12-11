$(document).ready(function() {
    $.getJSON( "data.json", function(data){
        var items =[];
        var i = 0;
        $.each( data, function(name, description, location){
            var name = data[i].name;
            var description = data[i].description;
            var location = data[i].location;
            items.push([name, description, location]);
            i++
        });
        
        items.forEach(populateTable);

        function populateTable(item){
            var tableRow = document.createElement("tr");
            var tableD = document.createElement("td");
            tableD.className = "name";
            var tableD2 = document.createElement("td");
            tableD2.className = "description";
            var tableD3 = document.createElement("td");
            tableD3.className = "location";
            var name = item[0];
            var description = item[1];
            var location1 = item[2][0];
            var location2 = item[2][1];

            var a = document.createElement("a");
            var link = document.createTextNode("Open in Google Maps");
            a.appendChild(link);
            a.href = "https://www.google.com/maps?q=" + location1 + "," + location2;
            

            console.log(location);
            document.getElementById("locationTable").appendChild(tableRow).appendChild(tableD).innerHTML = name;
            tableRow.appendChild(tableD2).innerHTML = description;
            tableRow.appendChild(tableD3).appendChild(a);
            
        }
    });
});
