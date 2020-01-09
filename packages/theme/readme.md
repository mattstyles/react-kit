
_Note:_

JS allows keyed properties on an array. This is not valid JSON. However, using numeric keys on an object is. So scales that were previously an array will now be an object with numeric keys, which should work fine with most systems (like styled-system) that are expecting arrays.
