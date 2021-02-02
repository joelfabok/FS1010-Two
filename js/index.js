$(document).ready(
    function(){
        $('.add').click(
            function(){
                var toAdd = $('input[name=item]').val();
                 $('ol').append('<li class="checked">' + toAdd + '</li>');
            });
            
        
      
      $(document).on('click','li', function(){
        $(this).toggleClass('checked').toggleClass('strike');
        
      });
      
      $('input').click(function() {
        $(this).val('');
      });
      
      $('ol').sortable(); 
      
    }
);

