$(document).ready(
    function(){
        $('.add').click(
            function(){
                let toAdd = $('input[name=item]').val();

                if (!$('input').val()) {
                    alert('Please Add Item');
                  }
                  
                  else {
                    $('ul').append('<li>' + toAdd + '</li>' + '<button class="close">X</button>');
                  }
                    
            });
            
        $(document).on('dblclick','li', function(){
        $(this).toggleClass('checked').toggleClass('strike');
            
        });

        $('.add').click(function(){				 
                $('input[name=item]').val('');
        });
          
          $('ul').sortable(); 
      
    }
    
);






