ooaApp.factory('sharedService', function() {
    var modelObject = {
        name: "modelObject",
        value: "valueInObject"
    }

    var modelObjectPrimitiveValue = "primValue";

    return {
        getModelObject: modelObject,
        getModelObjectPrimitiveValue: modelObjectPrimitiveValue,

        getModelObjectFunction: function() {
            console.log("Running getModelObjectFunction");
            return modelobject;
        },

        getModelObjectPrimitiveValueFunction: function() {
            console.log("Running getModelObjectPrimitiveValue");
            return modelObjectPrimitiveValue;
        }
    }

});
