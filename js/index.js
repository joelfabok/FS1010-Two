$(document).ready(
    function(){

        // ***********************************//
        // This Will Add Item To List On Enter//
        // ***********************************//
        
        $('input').keydown(function(e) {
            if (e.which === 13) {
                if (!$('input').val()) {                
                    alert('Please Add Item');           
                  }                                     
                  
                  else {
                    $("ul").prepend("<li>" + this.value + '<button class="close">X</button>' + "</li>");
                  }
                this.value = "";
            }
        });

        // **********************************************//
        // This Will Add Item To List When Add Is Clicked//
        // **********************************************//
        $('.add').click(
            function(){
                let toAdd = $('input[name=item]').val();
                if (!$('input').val()) {
                    alert('Please Add Item');
                  }
                  
                  else {
                    $('ul').prepend('<li>' + toAdd + '<button class="close">X</button>' + '</li>');
                  }
                toAdd = "";
        
            });
            
        $(document).on('click','li', function(){
            let last = $(".list li").last();
            let first = $(".list li").first();
        $(this).toggleClass('checked').toggleClass('strike');

        });

        $('.add').click(function(){				 
                $('input[name=item]').val('');
        });
        
        $('ul').on("click", ".close", function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });

        
    }
);


