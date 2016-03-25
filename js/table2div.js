function table2div(t){
    // counts total number of td in a head so that we can can use it for label extraction
    var head_col_count =  $(t).find('thead td').size();
    // loop which replaces td
    if(head_col_count > 0){
        for ( i=0; i <= head_col_count; i++ )  {
            // head column label extraction
            var head_col_label = $(t).find('thead td:nth-child('+ i +')').text();
            // replaces td with <div class="column" data-label="label">
            $(t).find('tr td:nth-child('+ i +')').replaceWith(
                function(){
                    return $('<div class="table-col" data-label="'+ head_col_label +' :">').append($(this).contents());
                }
            );
        }
    }else{
        $(t).find('td').replaceWith(
            function(){
                return $('<div class="table-col">').append($(this).contents());
            }
        );
    }
    // replaces th with <div class="column">
    $(t).find('th').replaceWith(
        function(){
            return $('<div class="table-col">').append($(this).contents());
        }
    );
    // replaces thead with <div class="table-head">
    $(t).find('thead').replaceWith(
        function(){
            return $('<div class="table-head">').append($(this).contents());
        }
    );
    // replaces tr with <div class="table-row">
    $(t).find('tr').replaceWith(
        function(){
            return $('<div class="table-row">').append($(this).contents());
        }
    );
    // replaces tbody with <div class="tbody">
    $(t).find('tbody').replaceWith(
        function(){
            return $('<div class="table-body">').append($(this).contents());
        }
    );
    // replaces table with <div class="table">
    $(t).replaceWith(
        function(){
            return $('<div class="table">').append($(this).contents());
        }
    );
}
