# angular_image_base64

A very light weight (500~ Bytes) angular directive that helps you get any image's base64 data. it loads the image into the ngModel and sets the element validity as well. It watches the element changes and if a file gets uploaded it set the model validity to valid and to invalid if not.

# Usage

Include the directive file into your home page, add "ngImageBase64Directive" as a dependency to your angular app, and then add "ng-image-base64" to the form file input element.




#Example
`<input type="file" accept="image/*" data-ng-model="data.image" name="image" ng-image-base64 required>`

#jsfiddle snippet
https://jsfiddle.net/s55qp529/17/

#Note
Use `accept="image/*"` in your form file input element to restrict the uploading to image files only.

