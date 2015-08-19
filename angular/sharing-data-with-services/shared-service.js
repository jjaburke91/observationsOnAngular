ooaApp.factory('sharedService', function() {
    var modelObject = {
        name: "modelObject",
        value: 0
    }

    var modelObjectPrimitiveValue = 0;

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
        },

        incServiceValues: function() {
            console.log("Incrementing service model values");
            modelObject.value += 1;
            modelObjectPrimitiveValue += 1;
        }
    }
});
