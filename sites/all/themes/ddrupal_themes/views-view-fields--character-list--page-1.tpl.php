<?php dpm($fields) ?>

<?php

  //array of strings in format 'field_deception'
  $skill_proficiency = array();
  //array of strings in format 'field_strength_saving_throw'
  $saving_throw_proficiency = array();

  $stat_fields_to_match = array('strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma');

  $skill_fields_to_match = array('acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival');

  $skills_array = $row->field_field_skills_1;
  foreach($skills_array as $skill) {
    $skill_proficiency[] = $skill['raw']['value'];
  }

  $throws_array = $row->field_field_saving_throws;
  foreach ($throws_array as $throw) {
    $saving_throw_proficiency[] = $throw['raw']['value'];
  }

?>

<div id='wrapper'>
  <div id="stat-block">
    <?php foreach ($stat_fields_to_match as $stat_field): ?>
      <div class="stat-field">
        <h4><?php print $fields['field_'.$stat_field]->label?></h4>
        <div class="stat-modifier">
          <?php print $fields['field_'.$stat_field.'_modifier']->content ?>
        </div>
        <div class="stat-score">
          <?php print $fields['field_'.$stat_field]->content ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
  <div id="skill-throw-block">
    <div id="proficiency">
      <?php print $fields['field_proficiency_bonus']->content ?>
      <?php print $fields['field_proficiency_bonus']->label ?>
    </div>
    <div id="saving-throws">
      <h3>Saving Throws</h3>
      <?php foreach($stat_fields_to_match as $stat_field): ?>
        <div class="saving-throw">
          <input type="checkbox" <?php if(in_array('field_'.$stat_field.'_save', $saving_throw_proficiency)): ?>checked="checked"<?php endif; ?>>
          <?php print $fields['field_'.$stat_field.'_save']->content ?>
          <?php print ucfirst($stat_field) ?>
        </div>
      <?php endforeach; ?>
    </div>
    <div id="skill-block">
      <h3>Skills</h3>
      <?php foreach($skill_fields_to_match as $skill_field): ?>
        <div class="skill">
          <input type="checkbox" <?php if(in_array('field_'.$skill_field, $skill_proficiency)): ?>checked="checked"<?php endif; ?>>
          <?php print $fields['field_'.$skill_field]->content?>
          <?php print $fields['field_'.$skill_field]->label?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>
