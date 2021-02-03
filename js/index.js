$(document).ready(
    function(){
        $('.add').click(
            function(){
                let toAdd = $('input[name=item]').val();
                 $('ol').append('<li>' + toAdd + '</li>' + '<button class="close">X</button>');
                 
                 if( !$(this).val() ) {
                    $(this).parents('').addClass('warning');
              }
                    
            });
            
        $(document).on('dblclick','li', function(){
        $(this).toggleClass('checked').toggleClass('strike').fadeout('slow');
            
        });
        $('input').click(function() {
            $(this).val('');
          });   
          
          $('ol').sortable(); 
      
    }
    
);






