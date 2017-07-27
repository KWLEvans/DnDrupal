<?php

?>
<div class='select-element'>
  <input type="radio" value="<?php print($fields['nid']->raw) ?>" hidden>
  <div class="select-carousel">
    <?php print($fields['field_class_image']->content)?>
  </div>
  <h2><?php print($fields['title']->content)?></h2>
  <div class="select-flavor-text">
    <?php print($fields['field_class_flavor_text']->content)?>
  </div>
</div>
