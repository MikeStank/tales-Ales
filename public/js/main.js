function bookSearch() {
    console.log("this function runs");

    var search = document.getElementById("search").value;
    document.getElementById("results").innerHTML = "";
    
    console.log(search);

    $.ajax({

        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,        
        dataType: "json",
        success: function(data) {

            for (var i = 0; i < 3; i++) {

                results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>";
                results.innerHTML += "<h3> By " + data.items[i].volumeInfo.authors + "</h3>";
                results.innerHTML += "<h3> Description </h3>" + data.items[i].volumeInfo.description + "<br>";
                results.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +">";
                results.innerHTML += data.items[i].volumeInfo.categories;
            }
            
        },
        type: "GET"
    });
}

document.getElementById("button").addEventListener("click", bookSearch, false);
   

// AIzaSyA70Eil2HN_JenQ29_DR9G2OprJ7hqbsNQ


// key: 4BcodGUNTcNv22tOHLgOtg
// secret: tnuxltzRMxfDfbPQRP1Hc1J1BiqcUW71Otn7RY9ySc