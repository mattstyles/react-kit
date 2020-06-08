
Pre v1 and the API should be considered unstable. Breaking changes can occur
across minors, although they will be highlighted here with a :boom:.

#

* _update_ type styling matches text whereby smaller viewports get larger default text
* _fix_ simplify range to work via the native range input events, thereby removing the erroneous console error
* _add_ default value to select by updating to a controlled select component
* _fix_ scrollable listens to the correct scroll element now
* _update_ :boom: move utilities and theme utilities from basic-kit to ui-core
* _add_ add placeholder variants
* _update_ placeholder animation duration will pull from theme transition value
* _remove_ gloved pointer from button hover
* _add_ background styling function to common

# 0.17.0 - Layout Update

* _update_ :boom: button pill rounding renamed to circular for consistency
* _update_ :boom: button group API changes
* _add_ Center component
* _add_ Stack component
* _add_ space props to Divider
* _remove_ :boom: Pane is gone, use Flex and View instead
* _remove_ :boom: Box no longer has flex style functions
* _update_ :boom: rename kerning keys for consistency
* _remove_ :boom: theme line height multipliers
* _update_ use markdown-in-jsx for markdown-kit
