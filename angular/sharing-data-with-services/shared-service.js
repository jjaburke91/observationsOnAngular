ooaApp.factory('sharedService', function() {
    var that = this;
    that.modelObject = {
        name: "modelObject",
        val: 0
    }

    that.modelObjectPrimitiveValue = 0;

    return {
        getModelObject: that.modelObject,

        getModelObjectPrimitiveValue: that.modelObjectPrimitiveValue,

        getModelObjectFunction: function() {
            console.log("sharedService: Running getModelObjectFunction");
            return that.modelObject;
        },

        getModelObjectPrimitiveValueFunction: function() {
            console.log("sharedService: Running getModelObjectPrimitiveValueFunction");
            return that.modelObjectPrimitiveValue;
        },

        incServiceValues: function() {
            console.log("sharedService: Incrementing service model values to " + (that.modelObject.val + 1) ) ;
            that.modelObject.val += 1;
            that.modelObjectPrimitiveValue += 1;
        }
    }
});
