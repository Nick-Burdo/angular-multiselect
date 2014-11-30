#itMultiSelect the directive

The directive creates a group of HTML elements for multiple choice like &lt;SELECT multiple&gt;.

Elements of choice based on the checkboxes.

itMultiSelect template based by Bootstrap-3 styles.

itMultiSelect has four control:

* Button to toggle the drop-down list, the text of which is set attribute `placeholder`
* Input for open the list and search (filter) it
* Button for refresh search input
* Button marked by caret to toggle  the drop-down list

##Usage
```
<it-multi-select
    it-source="{{countries}}"
    it-placeholder="{{placeholder()}}"
    it-search-placeholder="Search..."
    it-model="imsResult">
</it-multi-select>
```

###Attributes

####`it-source`

Array to build the list. Must have the following structure:

```
$scope.countries = [
    {"id":19,"title":"Item 19 title"},
    {"id":20,"title":"Item 20 title"},
    ...
];
```

####`it-placeholder`

Text of first button. May vary in accordance with the selection results.

```
$scope.placeholder = function() {
    // text change rules
};
```

####`it-search-placeholder`

Search input placeholder

####`it-model`

Result model. Is an object containing the selected items: "id" as the key and the "title" as a value.

###Source

Directive code is located in the file `app/directives.js`

Directive template is located in the file `app/components/directives/it-multi-select.html`

Directive template CSS is located in the file `app/app.css`
