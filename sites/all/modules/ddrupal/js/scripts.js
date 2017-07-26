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

      //Select controls for race select page
      if (window.location.pathname === '/new_character/race') {
        $('.race-wrapper').once('race-select-click').click(function() {
          console.log($(this).children('input')[0].prop('checked'));
        });
      }

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

        //AJAX call for Racial Abilities
        $('#ra-select').once('handler-added').click(function() {
            var nid = window.location.pathname.match(/character\/(\d+)/);
            nid = nid[1];
            $.get(window.location.origin + '/racial_abilities/' + nid, function(response) {
                $('#detail-pane').html(response);
                $('#detail-pane .views-field-title-1').once('handler-added').click(function() {
                    if ($(this).next().is(':visible')) {
                        $('#detail-pane .views-field-body:visible').slideUp();
                    } else {
                        $('#detail-pane .views-field-body:visible').slideUp();
                        $(this).next().slideDown();
                    }
                });
            });
        });

        //AJAX call for Class Abilities
        $('#ca-select').once('handler-added').click(function() {
            var nid = window.location.pathname.match(/character\/(\d+)/);
            nid = nid[1];
            $.get(window.location.origin + '/class_abilities/' + nid, function(response) {
                $('#detail-pane').html(response);
                $('#detail-pane .views-field-title').once('handler-added').click(function() {
                    if ($(this).next().is(':visible')) {
                        $('#detail-pane .views-field-body:visible').slideUp();
                    } else {
                        $('#detail-pane .views-field-body:visible').slideUp();
                        $(this).next().slideDown();
                    }
                });
            });
        });


      }


    }
  };

})(jQuery);
