// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
	extends: cc.Component,

	properties: {
		fuck:{
			default: null,
			type:cc.Sprite
		},
		column:{
			default :null,
			type:cc.Node
		},
		label:{
			default :null,
			type:cc.Label
		},
		button:{
			default :null,
			type:cc.Button
		},
		label3:{
			default :null,
			type:cc.Node
		}
		// foo: {
		//     // ATTRIBUTES:
		//     default: null,        // The default value will be used only when the component attaching
		//                           // to a node for the first time
		//     type: cc.SpriteFrame, // optional, default is typeof default
		//     serializable: true,   // optional, default is true
		// },
		// bar: {
		//     get () {
		//         return this._bar;
		//     },
		//     set (value) {
		//         this._bar = value;
		//     }
		// }
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad(){
		var scene = cc.director.getScene();
		var nnode = new cc.Node('Node');
		nnode.name = 'nnode';
		nnode.parent = scene;
		this.node.on(cc.Node.EventType.TOUCH_START, this.fuckyou, this); 
		var manager = cc.director.getCollisionManager();
		manager.enabled = true;
this.button.node.active = false;

	},
	// update (dt) {},　
	fuckyou(){
		this.fuck.node.stopAllActions();
		var action = cc.jumpTo(0.8, this.fuck.node.x, this.fuck.node.y+13,237,1);
		// 执行动作
		this.fuck.node.runAction(action);
	},

	start () {
		this.time1 = 0.5;
		this.time2 = 1.0;

		this.cishu1 = 0;
		this.cishu2 = 0;

	},
	yiduizhuzi(){
		var random =	Math.random()*300;
		var height = 60;
		var scene = cc.director.getScene().getChildByName('nnode');
		var node2 = cc.instantiate(this.column);
		node2.parent = scene;
		node2.setPosition(500, height-random);
		setTimeout(function () {
			node2.destroy();
		}.bind(this), 10000);
		var node3 = cc.instantiate(this.column);
		node3.parent = scene;
		node3.setPosition(505, height +830-random);
		node3.angle = 180;
		setTimeout(function () {
			node3.destroy();
		}.bind(this), 10000);
		var node2_action = cc.moveBy(4,-1000,0);
		var node3_action = cc.moveBy(4,-1000,0);
		node3.runAction(node3_action);
		node2.runAction(node2_action);
	},
	reset(){
		cc.director.getScene().getChildByName('nnode').destroy();
		var scene = cc.director.getScene();
		var nnode = new cc.Node('Node');
		nnode.name = 'nnode';
		nnode.parent = scene;
		this.fuck.node.setPosition(85,150);
		cc.director.resume();
		this.time1 = 0.5;
		this.time2 = 1.0;
		this.cishu1 = 0;
		this.cishu2 = 0;
		this.label.string = 0;
		this.yiduizhuzi();
		this.button.node.active = false;

			},
	update(dt){this.fuck.node.y -=5;
		this.time1 += dt;
		this.time2 +=dt;
		if(this.time1 >=(this.cishu1+1)*1.5)
		{	
			this.label.string = this.cishu1;
			this.cishu1++;
		}
if(this.fuck.node.y >=1000||this.fuck.node.y<=-150)
		{
		
			cc.director.pause();
	   	 this.button.node.active = true;

		}
		if(this.time2 >=(this.cishu2+1)*1.5)
		{
			
			this.yiduizhuzi();
			this.cishu2++;
		}
	}

});
