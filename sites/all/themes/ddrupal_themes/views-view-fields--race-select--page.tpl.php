<?php

?>
<div class='race-wrapper'>
  <input type="hidden" value="<?php print($fields['nid']->raw) ?>">
  <h2><?php print($fields['title']->content)?></h2>
  <?php print($fields['field_race_image']->content)?>
  <div class="race-flavor-text">
    <?php print($fields['field_race_flavor_text']->content)?>
  </div>
</div>
