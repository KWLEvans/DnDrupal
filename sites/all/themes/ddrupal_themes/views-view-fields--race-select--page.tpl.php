<?php

?>
<div class='race-wrapper'>
  <input type="radio" value="<?php print($fields['nid']->raw) ?>" hidden>
  <h2><?php print($fields['title']->content)?></h2>
  <?php print($fields['field_race_image']->content)?>
  <div class="race-flavor-text">
    <?php print($fields['field_race_flavor_text']->content)?>
  </div>
</div>