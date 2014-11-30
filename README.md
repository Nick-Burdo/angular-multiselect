#itMultiSelect the directive

The directive creates a group of HTML elements for multiple choice like <SELECT multiple>
Elements of choice based on the checkboxes

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

Text of firs button. May vary in accordance with the selection results.

```
$scope.placeholder = function() {
    // text change rules
};
```

####`it-search-placeholder`

Search input placeholder

####`it-model`

Result model. Is an object containing the selected items: "id" as the key and the "title" as a value.

*Note! The result may contain items whose value is false. This happens when the item is selected, and then selected.
Therefore, the result requires filtering.*
