
Pre v1 and the API should be considered unstable. Breaking changes can occur
across minors, although they will be highlighted here with a :boom:.

# 0.20.0

* _add_ sx to icon wrapper element
* _update_ :boom: image props for passed components now accept the component (not a function)

## Update guide

### Image

Supply the component, no need for the extra function call now.

```js
// Previously
<Image
  size='80px'
  loadingComponent={() => <Placeholder size='full' />}
/>

// 0.20
<Image
  size='80px'
  loadingComponent={<Placeholder size='full' />}
/>
```

# 0.19.0 - The Big Split

The emphasis for this version is an internal refactor to make full use of the monorepo. Components are now part of a taxonomy, this largely means that each package contains a single component (or very tightly grouped) whilst combining packages at higher taxonomic layers are also included.

This change allows consumers to install only what they need whilst encouraging contributors to make isolated changes to the codebase.

Part of the biggest sell is to enable interop with other design systems that share a common theme structure. If you want to use typographical elements from this library, alongside form elements from another, then _fill yer boots_.

* _update_ :boom: rename GlobalStyle to Reset
* _update_ :boom: Checkbox no longer accepts children, to change the icon use the `icon` prop
* _update_ there are some breaking API changes across `core` and `system` modules, mostly aggregating some utility functions. Their readmes explain their new, more stable, API surface. This builds on changes in the previous version.
* _add_ @raid/kit combined package (includes all component packages, @raid-ui/theme, @raid-ui/system, and @raid-ui/markdown are excluded)
* _prep_ :house: test and size-limit checks pre-push

## Update guide

### Reset

This is a naming change, update all references to `<GlobalStyle />` with `<Reset />`. Functionality remains unchanged.

### Checkbox

No longer accepts children to use as an icon, instead an icon property is exposed on the component. Changing icon is an edge-case, but this change opens up the possibility to use a text node as child which can act as a label for the checkbox and save the consumer some overhead.

```js
// Previously
<Checkbox>
  <Icon icon='heart' />
</Checkbox>

// v0.19
<Checkbox icon={Heart} />
```

# 0.18.0 - Theme update

* _remove_ extra variants
* _add_ clearOnSubmit prop to input
* _update_ type styling matches text whereby smaller viewports get larger default text
* _fix_ simplify range to work via the native range input events, thereby removing the erroneous console error
* _add_ default value to select by updating to a controlled select component
* _fix_ scrollable listens to the correct scroll element now
* _update_ :boom: move utilities and theme utilities from basic-kit to ui-core
* _add_ add placeholder variants
* _update_ placeholder animation duration will pull from theme transition value
* _remove_ gloved pointer from button hover
* _add_ background styling function to common

## Update guide

### Utilities move

If you relied on using utilities then these have been removed from `@raid/basic-kit` and moved to `@raid/ui-core`. Upgrading will involve changing import paths, mostly the functions have the same functionality.

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
