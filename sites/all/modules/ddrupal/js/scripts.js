(function($) {
  Drupal.behaviors.ddrupal = {
    attach: function (context, settings) {

      //Manages score allocation <select>s for character creation
      if (window.location.pathname === '/new_character/stats') {
        $('select').once('mutual-select').change(function() {
          let selected = [];

          $('select option:selected').each(function() {
            selected.push($(this).val());
          });

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
      //////////////////////////////

      //Form controls for character sheet view
      if (window.location.pathname.match(/^\/character\//)) {

        //Makes proficiency checkboxes update values
        $('input:checkbox').once('checkbox-value-update').change(function() {
          let proficiency = parseInt($("#proficiency div").text().match(/\d/));
          if ($(this).is(':checked')) {
            let val = parseInt($(this).next().text()) + proficiency;
            $(this).next().text(val);
          } else {
            let val = parseInt($(this).next().text()) - proficiency;
            $(this).next().text(val);
          }
        });


        $('#ra-select').once('handler-added').click(function() {
            console.log('click');
            var nid = window.location.pathname.match(/character\/(\d+)/);
            nid = nid[1];
            console.log(window.location);
            var basePath = window.location.match(/^(.*)\/character/);
            console.log(basePath);
            basePath = basePath[1];
            $.post(basePath + '/views/ajax', {view_name: 'ra_block', view_display_id: 'detail-pane', view_args: nid}, function(data) {
                console.log(data);
                // $('#detail-pane').html(data);
            });
        });
      }


    }
  };

})(jQuery);
