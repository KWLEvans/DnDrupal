<?php

?>
<div class='select-element'>
  <input type="radio" value="<?php print($fields['nid']->raw) ?>" hidden>
  <h2><?php print($fields['title']->content)?></h2>
  <div class="select-carousel">
    <?php print($fields['field_race_image']->content)?>
  </div>
  <div class="select-flavor-text">
    <?php print($fields['field_race_flavor_text']->content)?>
  </div>
</div>
