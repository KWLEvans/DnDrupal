(function($) {
  Drupal.behaviors.ddrupal = {
    attach: function (context, settings) {

      if (window.location.pathname === '/new_character/stats') {
        $('select').once('mutual-select').change(function() {
          let selected = [];

          $('select option:selected').each(function() {
            selected.push($(this).val());
          });

          console.log(selected);

          $('select').each(function() {

            let localSelected = [];
            selected.forEach(function(select) {
              localSelected.push(select);
            });

            $(this).children().each(function() {
              var found = false;
              if (!$(this).is(':selected') && $(this).val() != '')
              {
                var shouldDisable = false;
                for (var i = 0; i < localSelected.length; i++)
                {
                  if (localSelected[i] == $(this).val() && !found) {
                    shouldDisable = true;
                    localSelected[i] = 0;
                    found = true;
                  }
                }

                $(this).show();
                $(this).removeAttr('disabled', 'disabled');
                if (shouldDisable)
                {
                  $(this).hide();
                  $(this).attr('disabled', 'disabled');
                }
              }
            });
          });
        });
      }



    }
  };
})(jQuery);
