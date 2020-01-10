
_Note:_

JS allows keyed properties on an array. This is not valid JSON. However, using numeric keys on an object is. So scales that were previously an array will now be an object with numeric keys, which should work fine with most systems (like styled-system) that are expecting arrays.

_Note:_

Uses rem everywhere for type and spacing. Global style clamps the html at 62.5% so that rem scale is off of a base10 which makes life much easier for anyone working with the library.
However, there is some potential interoperability issues with some other systems that also use rems but might not expect the manipulation of sizes. To fix this we use rem everywhere, this means the base scale is up to you, however, if you _don't_ put 62.5% on the html/body then things from this lib might appear too large (1.6x too large). The answer is to use different base scales, which means we need a way to generate it.
Actually we won't muck with the default font sizing, its a pain to work with but for better interoperability we should default to 100%, not 62.5%.
