var menu_list_array = ["chicken pizza",
                            "veg pizza",
                            "Supreme Pizza",
                            "Deluxe Pizza"];

function show_menu() {
   
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();

    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata +'<li>' + menu_list_array[i] + '<li>'   
    }

    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;

}

function add_item () {
    var htmldata2;
    var item = document.getElementById("display").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata2 = "<section class = 'cards' >"
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata2 = htmldata2 +'<section class = "cards" >' + '<img class="pizza_icon" src = "pizza-clipart-veggie-8.png" />' + menu_list_array[i] + '</div>'   
    }

    htmldata2 = htmldata2 + "</section>"
    document.getElementById("display").innerHTML = htmldata2;
}