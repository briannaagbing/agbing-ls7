/**
 * Bulk Component Styler
 * 
 * This script helps identify components that still need styling.
 * Run: node scripts/bulkStyler.js
 */

const fs = require('fs');
const path = require('path');

// Define all component categories and their paths
const categories = {
  inputs: {
    checkbox: ['label', 'size', 'color', 'icon', 'controlled', 'indeterminate', 'formGroup', 'labelPlacement'],
    floatingActionButton: ['circular', 'extended', 'size'],
    radioGroup: ['rowRadioButtonsGroup', 'controlledRadioButtonsGroup', 'radioButtonsGroup', 'formControlLabelPlacement', 'useRadioGroup', 'colorRadioButtons', 'sizeRadioButtons'],
    rating: ['basicRating', 'ratingSize', 'ratingPrecision', 'hoverFeedback', 'halfRating', 'customizedRating'],
    select: ['basicSelect', 'selectVariants', 'selectLabels', 'selectAutoWidth', 'selectOtherProps'],
    slider: ['continuousSlider', 'sliderSizes', 'discreteSlider', 'smallSteps', 'customMarks', 'restrictedValues', 'alwaysVisible', 'rangeSlider', 'minimumDistance', 'sliderWithInputField', 'color', 'customizedSlider', 'verticalSlider', 'track'],
    switch: ['basicSwitches', 'label', 'size', 'color', 'controlled', 'customizedSwitches'],
    textField: ['basicTextFields', 'formProps', 'validation', 'multiline', 'select', 'icons', 'inputWithIcon', 'inputAdornments', 'sizes', 'layoutBasicTextFields', 'fullWidth'],
    transferList: ['transferList', 'enhancedTransferList'],
    toggleButton: ['exclusiveSelection', 'multipleSelection', 'size', 'color', 'vertical', 'enforceValue', 'standalone', 'customized']
  },
  dataDisplays: {
    avatar: ['letterAvatars', 'sizesAvatars', 'iconAvatars', 'variantAvatars', 'fallbacks', 'grouped', 'totalAvatars', 'withBadge', 'badgeOverlap'],
    badge: ['colorBadge', 'customizedBadges', 'badgeVisibility', 'maximumValue', 'dotBadge'],
    chip: ['basicChips', 'clickableChips', 'deletableChips', 'clickableAndDeletableChips', 'clickableLinkChips', 'customDeleteIconChips', 'adornedChips', 'iconChips', 'colorChips', 'sizesChips'],
    divider: ['listDividers', 'insetDividers', 'substringDividers', 'dividerText', 'verticalDividers', 'verticalWithText', 'middleDividers'],
    table: ['denseTable', 'enhancedTable', 'customPaginationActionsTable'],
    tooltip: ['basicTooltip', 'positionedTooltips', 'customizedTooltips', 'arrow', 'variable', 'transitions', 'controlled', 'variableWidth', 'interactive', 'disabled'],
    typography: ['typography']
  }
};

// Check which components are already styled
function checkStyledComponents() {
  const basePath = path.join(__dirname, '..');
  const results = {
    styled: [],
    unstyled: []
  };

  // Check inputs
  Object.entries(categories.inputs).forEach(([category, components]) => {
    const categoryPath = path.join(basePath, 'inputs', category);
    
    components.forEach((component) => {
      const componentPath = path.join(categoryPath, `${component}.jsx`);
      
      if (fs.existsSync(componentPath)) {
        const content = fs.readFileSync(componentPath, 'utf-8');
        
        if (content.includes('ComponentWrapper')) {
          results.styled.push(`inputs/${category}/${component}`);
        } else {
          results.unstyled.push(`inputs/${category}/${component}`);
        }
      }
    });
  });

  // Check dataDisplays
  Object.entries(categories.dataDisplays).forEach(([category, components]) => {
    const categoryPath = path.join(basePath, 'dataDisplays', category);
    
    components.forEach((component) => {
      const componentPath = path.join(categoryPath, `${component}.jsx`);
      
      if (fs.existsSync(componentPath)) {
        const content = fs.readFileSync(componentPath, 'utf-8');
        
        if (content.includes('ComponentWrapper')) {
          results.styled.push(`dataDisplays/${category}/${component}`);
        } else {
          results.unstyled.push(`dataDisplays/${category}/${component}`);
        }
      }
    });
  });

  return results;
}

// Main execution
const results = checkStyledComponents();

console.log('\n=== STYLING PROGRESS ===\n');
console.log(`✅ Styled: ${results.styled.length} components`);
console.log(`❌ Unstyled: ${results.unstyled.length} components`);
console.log(`📊 Total: ${results.styled.length + results.unstyled.length} components`);
console.log(`📈 Progress: ${((results.styled.length / (results.styled.length + results.unstyled.length)) * 100).toFixed(1)}%\n`);

console.log('\n=== STYLED COMPONENTS ===');
results.styled.forEach(comp => console.log(`  ✅ ${comp}`));

console.log('\n=== UNSTYLED COMPONENTS ===');
results.unstyled.forEach(comp => console.log(`  ❌ ${comp}`));

console.log('\n');
