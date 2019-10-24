$(document).ready(function () {
    $('#btn').click(function () { 
        
        let table1 = document.querySelector('table');
        
        var row = table1.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        let x = $('#title').val();
        let y =$('#Rating').val();
        let z = $('#author').val();
    
        $(cell1).html(x);
        $(cell2).html(z);
        $(cell3).html(y);
        $(cell4).html('<input type= "button" value= "Remove" class="del">');

        $('.del').click(function (e) { 
            $(this)
              .parents("tr")
              .remove();
        });

    });
});

