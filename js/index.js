$(document).ready(
    function(){
        let key = '13';
        $('.add').click(
            function(){
                let toAdd = $('input[name=item]').val();

                if (!$('input').val()) {
                    alert('Please Add Item');
                  }
                  
                  else {
                    $('ul').append('<li id="what">' + toAdd + '<button class="close">X</button>' + '</li>');
                  }
            });
            
        $(document).on('click','li', function(){
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
