cc.Class({
    extends: cc.Component,

    properties: {
	    button :{
		    default: null,
		    type: cc.Button
	    }
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
    },

    onCollisionEnter: function (other) {
        cc.director.pause();
	    this.button.node.active = true;

    }
}

    // called every frame, uncomment this function to activate update callback
    // update: function (dt)
);
