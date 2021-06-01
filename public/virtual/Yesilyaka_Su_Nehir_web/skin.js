// Garden Gnome Software - Skin
// Pano2VR 6.0 beta3/16902
// Filename: MULTILEVEL_FLOOR_PLAN_RESPONSIVE.ggsk
// Generated Cum Eki 26 10:40:31 2018

function pano2vrSkin(player,base) {
	player.addVariable('vis_info_popup', 2);
	player.setVariableValue('vis_info_popup', false);
	player.addVariable('ht_ani', 2);
	player.setVariableValue('ht_ani', false);
	player.addVariable('MyPageURL', 0);
	player.setVariableValue('MyPageURL', '');
	player.addVariable('MyNodeNumber', 0);
	player.setVariableValue('MyNodeNumber', '');
	var me=this;
	var flag=false;
	var hotspotTemplates=[];
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._initial_actions=document.createElement('div');
		this._initial_actions.ggId="Initial_Actions";
		this._initial_actions.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._initial_actions.ggVisible=false;
		this._initial_actions.className="ggskin ggskin_container ";
		this._initial_actions.ggType='container';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 506px;';
		hs+='position : absolute;';
		hs+='top : 371px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		this._initial_actions.setAttribute('style',hs);
		this._initial_actions.style[domTransform + 'Origin']='50% 50%';
		this._initial_actions.style[domTransform]=parameterToTransform(this._initial_actions.ggParameter);
		me._initial_actions.ggIsActive=function() {
			return false;
		}
		me._initial_actions.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._initial_actions.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._initial_actions);
		this._check_all_elements_status=document.createElement('div');
		this._check_all_elements_status.ggId="check_all_elements_status";
		this._check_all_elements_status.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._check_all_elements_status.ggVisible=true;
		this._check_all_elements_status.className="ggskin ggskin_container ";
		this._check_all_elements_status.ggType='container';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 79px;';
		hs+='position : absolute;';
		hs+='top : 715px;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:none;';
		this._check_all_elements_status.setAttribute('style',hs);
		this._check_all_elements_status.style[domTransform + 'Origin']='50% 50%';
		me._check_all_elements_status.ggIsActive=function() {
			return false;
		}
		me._check_all_elements_status.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._check_all_elements_status.onclick=function (e) {
			me._text_info_top.style[domTransition]='none';
			me._text_info_top.style.visibility='hidden';
			me._text_info_top.ggVisible=false;
			me._text_help_responsive.style[domTransition]='none';
			me._text_help_responsive.style.visibility='hidden';
			me._text_help_responsive.ggVisible=false;
			me._navigation_container.style[domTransition]='none';
			me._navigation_container.style.visibility='hidden';
			me._navigation_container.ggVisible=false;
			var list=me.findElements("btn_off_.*",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("btn_on_.*",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me._navigation_container.style[domTransition]='none';
			me._navigation_container.ggParameter.rx=-2000;me._navigation_container.ggParameter.ry=-2000;
			me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
		}
		this._check_all_elements_status.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._check_all_elements_status);
		this._top_right_corner_elements=document.createElement('div');
		this._top_right_corner_elements.ggId="top_right_corner_elements";
		this._top_right_corner_elements.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._top_right_corner_elements.ggVisible=true;
		this._top_right_corner_elements.className="ggskin ggskin_container ";
		this._top_right_corner_elements.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		this._top_right_corner_elements.setAttribute('style',hs);
		this._top_right_corner_elements.style[domTransform + 'Origin']='100% 0%';
		me._top_right_corner_elements.ggIsActive=function() {
			return false;
		}
		me._top_right_corner_elements.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._top_right_corner_elements.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 340) || 
				(me.player.getViewerSize().height < 340)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width >= 340) && 
				(me.player.getViewerSize().width < 640)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width >= 640) && 
				(me.player.getViewerSize().width < 960)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getViewerSize().width >= 960)
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._top_right_corner_elements.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._top_right_corner_elements.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._top_right_corner_elements.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._top_right_corner_elements.ggCurrentLogicStateScaling == 0) {
					me._top_right_corner_elements.ggParameter.sx = 0.7;
					me._top_right_corner_elements.ggParameter.sy = 0.7;
					me._top_right_corner_elements.style[domTransform]=parameterToTransform(me._top_right_corner_elements.ggParameter);
				}
				else if (me._top_right_corner_elements.ggCurrentLogicStateScaling == 1) {
					me._top_right_corner_elements.ggParameter.sx = 0.75;
					me._top_right_corner_elements.ggParameter.sy = 0.75;
					me._top_right_corner_elements.style[domTransform]=parameterToTransform(me._top_right_corner_elements.ggParameter);
				}
				else if (me._top_right_corner_elements.ggCurrentLogicStateScaling == 2) {
					me._top_right_corner_elements.ggParameter.sx = 0.85;
					me._top_right_corner_elements.ggParameter.sy = 0.85;
					me._top_right_corner_elements.style[domTransform]=parameterToTransform(me._top_right_corner_elements.ggParameter);
				}
				else if (me._top_right_corner_elements.ggCurrentLogicStateScaling == 3) {
					me._top_right_corner_elements.ggParameter.sx = 1;
					me._top_right_corner_elements.ggParameter.sy = 1;
					me._top_right_corner_elements.style[domTransform]=parameterToTransform(me._top_right_corner_elements.ggParameter);
				}
				else {
					me._top_right_corner_elements.ggParameter.sx = 1;
					me._top_right_corner_elements.ggParameter.sy = 1;
					me._top_right_corner_elements.style[domTransform]=parameterToTransform(me._top_right_corner_elements.ggParameter);
				}
			}
		}
		this._top_right_corner_elements.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._btn_off_navigationcontainer_arrow=document.createElement('div');
		this._btn_off_navigationcontainer_arrow.ggId="btn_off_navigationContainer_arrow";
		this._btn_off_navigationcontainer_arrow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_off_navigationcontainer_arrow.ggVisible=true;
		this._btn_off_navigationcontainer_arrow.className="ggskin ggskin_container ";
		this._btn_off_navigationcontainer_arrow.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		this._btn_off_navigationcontainer_arrow.setAttribute('style',hs);
		this._btn_off_navigationcontainer_arrow.style[domTransform + 'Origin']='100% 0%';
		me._btn_off_navigationcontainer_arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_off_navigationcontainer_arrow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_off_navigationcontainer_arrow.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._btn_off_navigationcontainer.onclick();
			me._btn_off_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_off_navigationcontainer_arrow.style.visibility='hidden';
			me._btn_off_navigationcontainer_arrow.ggVisible=false;
			me._btn_on_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_on_navigationcontainer_arrow.style.visibility=(Number(me._btn_on_navigationcontainer_arrow.style.opacity)>0||!me._btn_on_navigationcontainer_arrow.style.opacity)?'inherit':'hidden';
			me._btn_on_navigationcontainer_arrow.ggVisible=true;
		}
		this._btn_off_navigationcontainer_arrow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._svg_off_navigationcontainer_arrow=document.createElement('div');
		this._svg_off_navigationcontainer_arrow__img=document.createElement('img');
		this._svg_off_navigationcontainer_arrow__img.className='ggskin ggskin_svg';
		this._svg_off_navigationcontainer_arrow__img.setAttribute('src',basePath + 'images/svg_off_navigationcontainer_arrow.png');
		this._svg_off_navigationcontainer_arrow__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_off_navigationcontainer_arrow__img['ondragstart']=function() { return false; };
		this._svg_off_navigationcontainer_arrow.appendChild(this._svg_off_navigationcontainer_arrow__img);
		this._svg_off_navigationcontainer_arrow.ggId="svg_off_navigationContainer_arrow";
		this._svg_off_navigationcontainer_arrow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_off_navigationcontainer_arrow.ggVisible=true;
		this._svg_off_navigationcontainer_arrow.className="ggskin ggskin_svg ";
		this._svg_off_navigationcontainer_arrow.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_off_navigationcontainer_arrow.setAttribute('style',hs);
		this._svg_off_navigationcontainer_arrow.style[domTransform + 'Origin']='100% 0%';
		me._svg_off_navigationcontainer_arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_off_navigationcontainer_arrow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_off_navigationcontainer_arrow.ggUpdatePosition=function (useTransition) {
		}
		this._btn_off_navigationcontainer_arrow.appendChild(this._svg_off_navigationcontainer_arrow);
		this._top_right_corner_elements.appendChild(this._btn_off_navigationcontainer_arrow);
		this._btn_on_navigationcontainer_arrow=document.createElement('div');
		this._btn_on_navigationcontainer_arrow.ggId="btn_on_navigationContainer_arrow";
		this._btn_on_navigationcontainer_arrow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_on_navigationcontainer_arrow.ggVisible=false;
		this._btn_on_navigationcontainer_arrow.className="ggskin ggskin_container ";
		this._btn_on_navigationcontainer_arrow.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		this._btn_on_navigationcontainer_arrow.setAttribute('style',hs);
		this._btn_on_navigationcontainer_arrow.style[domTransform + 'Origin']='100% 0%';
		me._btn_on_navigationcontainer_arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_on_navigationcontainer_arrow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_on_navigationcontainer_arrow.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._btn_on_navigationcontainer.onclick();
			me._btn_on_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_on_navigationcontainer_arrow.style.visibility='hidden';
			me._btn_on_navigationcontainer_arrow.ggVisible=false;
			me._btn_off_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_off_navigationcontainer_arrow.style.visibility=(Number(me._btn_off_navigationcontainer_arrow.style.opacity)>0||!me._btn_off_navigationcontainer_arrow.style.opacity)?'inherit':'hidden';
			me._btn_off_navigationcontainer_arrow.ggVisible=true;
		}
		this._btn_on_navigationcontainer_arrow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._svg_on_navigationcontainer_arrow=document.createElement('div');
		this._svg_on_navigationcontainer_arrow__img=document.createElement('img');
		this._svg_on_navigationcontainer_arrow__img.className='ggskin ggskin_svg';
		this._svg_on_navigationcontainer_arrow__img.setAttribute('src',basePath + 'images/svg_on_navigationcontainer_arrow.png');
		this._svg_on_navigationcontainer_arrow__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_on_navigationcontainer_arrow__img['ondragstart']=function() { return false; };
		this._svg_on_navigationcontainer_arrow.appendChild(this._svg_on_navigationcontainer_arrow__img);
		this._svg_on_navigationcontainer_arrow.ggId="svg_on_navigationContainer_arrow";
		this._svg_on_navigationcontainer_arrow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_on_navigationcontainer_arrow.ggVisible=true;
		this._svg_on_navigationcontainer_arrow.className="ggskin ggskin_svg ";
		this._svg_on_navigationcontainer_arrow.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_on_navigationcontainer_arrow.setAttribute('style',hs);
		this._svg_on_navigationcontainer_arrow.style[domTransform + 'Origin']='100% 0%';
		me._svg_on_navigationcontainer_arrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_on_navigationcontainer_arrow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_on_navigationcontainer_arrow.ggUpdatePosition=function (useTransition) {
		}
		this._btn_on_navigationcontainer_arrow.appendChild(this._svg_on_navigationcontainer_arrow);
		this._top_right_corner_elements.appendChild(this._btn_on_navigationcontainer_arrow);
		this.divSkin.appendChild(this._top_right_corner_elements);
		this._rectangle_bottom=document.createElement('div');
		this._rectangle_bottom.ggId="rectangle_bottom";
		this._rectangle_bottom.ggDx=0;
		this._rectangle_bottom.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_bottom.ggVisible=true;
		this._rectangle_bottom.className="ggskin ggskin_rectangle ";
		this._rectangle_bottom.ggType='rectangle';
		hs ='';
		hs+='background : #333333;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 4000px;';
		hs+='pointer-events:auto;';
		this._rectangle_bottom.setAttribute('style',hs);
		this._rectangle_bottom.style[domTransform + 'Origin']='50% 100%';
		me._rectangle_bottom.ggIsActive=function() {
			return false;
		}
		me._rectangle_bottom.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._rectangle_bottom.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 340) || 
				(me.player.getViewerSize().height < 340)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width >= 340) && 
				(me.player.getViewerSize().width < 640)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width >= 640) && 
				(me.player.getViewerSize().width < 960)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getViewerSize().width >= 960)
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_bottom.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_bottom.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_bottom.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._rectangle_bottom.ggCurrentLogicStateScaling == 0) {
					me._rectangle_bottom.ggParameter.sx = 0.7;
					me._rectangle_bottom.ggParameter.sy = 0.7;
					me._rectangle_bottom.style[domTransform]=parameterToTransform(me._rectangle_bottom.ggParameter);
				}
				else if (me._rectangle_bottom.ggCurrentLogicStateScaling == 1) {
					me._rectangle_bottom.ggParameter.sx = 0.75;
					me._rectangle_bottom.ggParameter.sy = 0.75;
					me._rectangle_bottom.style[domTransform]=parameterToTransform(me._rectangle_bottom.ggParameter);
				}
				else if (me._rectangle_bottom.ggCurrentLogicStateScaling == 2) {
					me._rectangle_bottom.ggParameter.sx = 0.85;
					me._rectangle_bottom.ggParameter.sy = 0.85;
					me._rectangle_bottom.style[domTransform]=parameterToTransform(me._rectangle_bottom.ggParameter);
				}
				else if (me._rectangle_bottom.ggCurrentLogicStateScaling == 3) {
					me._rectangle_bottom.ggParameter.sx = 1;
					me._rectangle_bottom.ggParameter.sy = 1;
					me._rectangle_bottom.style[domTransform]=parameterToTransform(me._rectangle_bottom.ggParameter);
				}
				else {
					me._rectangle_bottom.ggParameter.sx = 1;
					me._rectangle_bottom.ggParameter.sy = 1;
					me._rectangle_bottom.style[domTransform]=parameterToTransform(me._rectangle_bottom.ggParameter);
				}
			}
		}
		this._rectangle_bottom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._btn_off_navigationcontainer=document.createElement('div');
		this._btn_off_navigationcontainer.ggId="btn_off_navigationContainer";
		this._btn_off_navigationcontainer.ggDx=102;
		this._btn_off_navigationcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_off_navigationcontainer.ggVisible=true;
		this._btn_off_navigationcontainer.className="ggskin ggskin_container ";
		this._btn_off_navigationcontainer.ggType='container';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._btn_off_navigationcontainer.setAttribute('style',hs);
		this._btn_off_navigationcontainer.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_navigationcontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_off_navigationcontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_off_navigationcontainer.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._navigation_container.style[domTransition]='none';
			me._navigation_container.ggParameter.rx=-2000;me._navigation_container.ggParameter.ry=-2000;
			me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
			me._btn_off_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_off_navigationcontainer_arrow.style.visibility='hidden';
			me._btn_off_navigationcontainer_arrow.ggVisible=false;
			me._btn_on_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_on_navigationcontainer_arrow.style.visibility=(Number(me._btn_on_navigationcontainer_arrow.style.opacity)>0||!me._btn_on_navigationcontainer_arrow.style.opacity)?'inherit':'hidden';
			me._btn_on_navigationcontainer_arrow.ggVisible=true;
			me._navigation_container.style[domTransition]='none';
			me._navigation_container.style.visibility='hidden';
			me._navigation_container.ggVisible=false;
		}
		this._btn_off_navigationcontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_off_navigationcontainer=document.createElement('div');
		this._svg_off_navigationcontainer__img=document.createElement('img');
		this._svg_off_navigationcontainer__img.className='ggskin ggskin_svg';
		this._svg_off_navigationcontainer__img.setAttribute('src',basePath + 'images/svg_off_navigationcontainer.png');
		this._svg_off_navigationcontainer__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_off_navigationcontainer__img['ondragstart']=function() { return false; };
		this._svg_off_navigationcontainer.appendChild(this._svg_off_navigationcontainer__img);
		this._svg_off_navigationcontainer.ggId="svg_off_navigationContainer";
		this._svg_off_navigationcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_off_navigationcontainer.ggVisible=true;
		this._svg_off_navigationcontainer.className="ggskin ggskin_svg ";
		this._svg_off_navigationcontainer.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_off_navigationcontainer.setAttribute('style',hs);
		this._svg_off_navigationcontainer.style[domTransform + 'Origin']='50% 50%';
		me._svg_off_navigationcontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_off_navigationcontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_off_navigationcontainer.ggUpdatePosition=function (useTransition) {
		}
		this._btn_off_navigationcontainer.appendChild(this._svg_off_navigationcontainer);
		this._rectangle_bottom.appendChild(this._btn_off_navigationcontainer);
		this._btn_on_navigationcontainer=document.createElement('div');
		this._btn_on_navigationcontainer.ggId="btn_on_navigationContainer";
		this._btn_on_navigationcontainer.ggDx=100;
		this._btn_on_navigationcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_on_navigationcontainer.ggVisible=false;
		this._btn_on_navigationcontainer.className="ggskin ggskin_container ";
		this._btn_on_navigationcontainer.ggType='container';
		hs ='';
		hs+='bottom : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._btn_on_navigationcontainer.setAttribute('style',hs);
		this._btn_on_navigationcontainer.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_navigationcontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_on_navigationcontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_on_navigationcontainer.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._navigation_container.style[domTransition]='none';
			me._navigation_container.ggParameter.rx=0;me._navigation_container.ggParameter.ry=0;
			me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
			me._navigation_container.style[domTransition]='none';
			me._navigation_container.style.visibility=(Number(me._navigation_container.style.opacity)>0||!me._navigation_container.style.opacity)?'inherit':'hidden';
			me._navigation_container.ggVisible=true;
			me._btn_on_navigationcontainer.style[domTransition]='none';
			me._btn_on_navigationcontainer.style.visibility='hidden';
			me._btn_on_navigationcontainer.ggVisible=false;
			me._btn_off_navigationcontainer.style[domTransition]='none';
			me._btn_off_navigationcontainer.style.visibility=(Number(me._btn_off_navigationcontainer.style.opacity)>0||!me._btn_off_navigationcontainer.style.opacity)?'inherit':'hidden';
			me._btn_off_navigationcontainer.ggVisible=true;
			me._btn_on_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_on_navigationcontainer_arrow.style.visibility='hidden';
			me._btn_on_navigationcontainer_arrow.ggVisible=false;
			me._btn_off_navigationcontainer_arrow.style[domTransition]='none';
			me._btn_off_navigationcontainer_arrow.style.visibility=(Number(me._btn_off_navigationcontainer_arrow.style.opacity)>0||!me._btn_off_navigationcontainer_arrow.style.opacity)?'inherit':'hidden';
			me._btn_off_navigationcontainer_arrow.ggVisible=true;
		}
		this._btn_on_navigationcontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_on_navigationcontainer=document.createElement('div');
		this._svg_on_navigationcontainer__img=document.createElement('img');
		this._svg_on_navigationcontainer__img.className='ggskin ggskin_svg';
		this._svg_on_navigationcontainer__img.setAttribute('src',basePath + 'images/svg_on_navigationcontainer.png');
		this._svg_on_navigationcontainer__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_on_navigationcontainer__img['ondragstart']=function() { return false; };
		this._svg_on_navigationcontainer.appendChild(this._svg_on_navigationcontainer__img);
		this._svg_on_navigationcontainer.ggId="svg_on_navigationContainer";
		this._svg_on_navigationcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_on_navigationcontainer.ggVisible=true;
		this._svg_on_navigationcontainer.className="ggskin ggskin_svg ";
		this._svg_on_navigationcontainer.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_on_navigationcontainer.setAttribute('style',hs);
		this._svg_on_navigationcontainer.style[domTransform + 'Origin']='50% 50%';
		me._svg_on_navigationcontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_on_navigationcontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_on_navigationcontainer.ggUpdatePosition=function (useTransition) {
		}
		this._btn_on_navigationcontainer.appendChild(this._svg_on_navigationcontainer);
		this._rectangle_bottom.appendChild(this._btn_on_navigationcontainer);
		this._toggler_fullscreen_off=document.createElement('div');
		this._toggler_fullscreen_off.ggId="toggler_fullscreen_off";
		this._toggler_fullscreen_off.ggDx=50;
		this._toggler_fullscreen_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggler_fullscreen_off.ggVisible=false;
		this._toggler_fullscreen_off.className="ggskin ggskin_container ";
		this._toggler_fullscreen_off.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._toggler_fullscreen_off.setAttribute('style',hs);
		this._toggler_fullscreen_off.style[domTransform + 'Origin']='50% 50%';
		me._toggler_fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._toggler_fullscreen_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._toggler_fullscreen_off.onclick=function (e) {
			me._toggler_fullscreen_off.style[domTransition]='none';
			me._toggler_fullscreen_off.style.visibility='hidden';
			me._toggler_fullscreen_off.ggVisible=false;
			me._toggler_fullscreen_on.style[domTransition]='none';
			me._toggler_fullscreen_on.style.visibility=(Number(me._toggler_fullscreen_on.style.opacity)>0||!me._toggler_fullscreen_on.style.opacity)?'inherit':'hidden';
			me._toggler_fullscreen_on.ggVisible=true;
			me.player.exitFullscreen();
		}
		this._toggler_fullscreen_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_off_screen_full=document.createElement('div');
		this._svg_off_screen_full__img=document.createElement('img');
		this._svg_off_screen_full__img.className='ggskin ggskin_svg';
		this._svg_off_screen_full__img.setAttribute('src',basePath + 'images/svg_off_screen_full.png');
		this._svg_off_screen_full__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_off_screen_full__img['ondragstart']=function() { return false; };
		this._svg_off_screen_full.appendChild(this._svg_off_screen_full__img);
		this._svg_off_screen_full.ggId="svg_off_screen_full";
		this._svg_off_screen_full.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_off_screen_full.ggVisible=true;
		this._svg_off_screen_full.className="ggskin ggskin_svg ";
		this._svg_off_screen_full.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_off_screen_full.setAttribute('style',hs);
		this._svg_off_screen_full.style[domTransform + 'Origin']='50% 50%';
		me._svg_off_screen_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_off_screen_full.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_off_screen_full.ggUpdatePosition=function (useTransition) {
		}
		this._toggler_fullscreen_off.appendChild(this._svg_off_screen_full);
		this._rectangle_bottom.appendChild(this._toggler_fullscreen_off);
		this._toggler_fullscreen_on=document.createElement('div');
		this._toggler_fullscreen_on.ggId="toggler_fullscreen_on";
		this._toggler_fullscreen_on.ggDx=50;
		this._toggler_fullscreen_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggler_fullscreen_on.ggVisible=true;
		this._toggler_fullscreen_on.className="ggskin ggskin_container ";
		this._toggler_fullscreen_on.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._toggler_fullscreen_on.setAttribute('style',hs);
		this._toggler_fullscreen_on.style[domTransform + 'Origin']='50% 50%';
		me._toggler_fullscreen_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._toggler_fullscreen_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._toggler_fullscreen_on.onclick=function (e) {
			me._toggler_fullscreen_on.style[domTransition]='none';
			me._toggler_fullscreen_on.style.visibility='hidden';
			me._toggler_fullscreen_on.ggVisible=false;
			me._toggler_fullscreen_off.style[domTransition]='none';
			me._toggler_fullscreen_off.style.visibility=(Number(me._toggler_fullscreen_off.style.opacity)>0||!me._toggler_fullscreen_off.style.opacity)?'inherit':'hidden';
			me._toggler_fullscreen_off.ggVisible=true;
			me.player.enterFullscreen();
		}
		this._toggler_fullscreen_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_on_screen_full=document.createElement('div');
		this._svg_on_screen_full__img=document.createElement('img');
		this._svg_on_screen_full__img.className='ggskin ggskin_svg';
		this._svg_on_screen_full__img.setAttribute('src',basePath + 'images/svg_on_screen_full.png');
		this._svg_on_screen_full__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_on_screen_full__img['ondragstart']=function() { return false; };
		this._svg_on_screen_full.appendChild(this._svg_on_screen_full__img);
		this._svg_on_screen_full.ggId="svg_on_screen_full";
		this._svg_on_screen_full.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_on_screen_full.ggVisible=true;
		this._svg_on_screen_full.className="ggskin ggskin_svg ";
		this._svg_on_screen_full.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_on_screen_full.setAttribute('style',hs);
		this._svg_on_screen_full.style[domTransform + 'Origin']='50% 50%';
		me._svg_on_screen_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_on_screen_full.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_on_screen_full.ggUpdatePosition=function (useTransition) {
		}
		this._toggler_fullscreen_on.appendChild(this._svg_on_screen_full);
		this._rectangle_bottom.appendChild(this._toggler_fullscreen_on);
		this._toggler_rotation_off=document.createElement('div');
		this._toggler_rotation_off.ggId="toggler_rotation_off";
		this._toggler_rotation_off.ggDx=0;
		this._toggler_rotation_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggler_rotation_off.ggVisible=true;
		this._toggler_rotation_off.className="ggskin ggskin_container ";
		this._toggler_rotation_off.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._toggler_rotation_off.setAttribute('style',hs);
		this._toggler_rotation_off.style[domTransform + 'Origin']='50% 50%';
		me._toggler_rotation_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._toggler_rotation_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._toggler_rotation_off.onclick=function (e) {
			me.player.stopAutorotate();
			me._toggler_rotation_off.style[domTransition]='none';
			me._toggler_rotation_off.style.visibility='hidden';
			me._toggler_rotation_off.ggVisible=false;
			me._toggler_rotation_on.style[domTransition]='none';
			me._toggler_rotation_on.style.visibility=(Number(me._toggler_rotation_on.style.opacity)>0||!me._toggler_rotation_on.style.opacity)?'inherit':'hidden';
			me._toggler_rotation_on.ggVisible=true;
		}
		this._toggler_rotation_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_off_rotation=document.createElement('div');
		this._svg_off_rotation__img=document.createElement('img');
		this._svg_off_rotation__img.className='ggskin ggskin_svg';
		this._svg_off_rotation__img.setAttribute('src',basePath + 'images/svg_off_rotation.png');
		this._svg_off_rotation__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_off_rotation__img['ondragstart']=function() { return false; };
		this._svg_off_rotation.appendChild(this._svg_off_rotation__img);
		this._svg_off_rotation.ggId="svg_off_rotation";
		this._svg_off_rotation.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_off_rotation.ggVisible=true;
		this._svg_off_rotation.className="ggskin ggskin_svg ";
		this._svg_off_rotation.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_off_rotation.setAttribute('style',hs);
		this._svg_off_rotation.style[domTransform + 'Origin']='50% 50%';
		me._svg_off_rotation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_off_rotation.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_off_rotation.ggUpdatePosition=function (useTransition) {
		}
		this._toggler_rotation_off.appendChild(this._svg_off_rotation);
		this._rectangle_bottom.appendChild(this._toggler_rotation_off);
		this._toggler_rotation_on=document.createElement('div');
		this._toggler_rotation_on.ggId="toggler_rotation_on";
		this._toggler_rotation_on.ggDx=0;
		this._toggler_rotation_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toggler_rotation_on.ggVisible=false;
		this._toggler_rotation_on.className="ggskin ggskin_container ";
		this._toggler_rotation_on.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._toggler_rotation_on.setAttribute('style',hs);
		this._toggler_rotation_on.style[domTransform + 'Origin']='50% 50%';
		me._toggler_rotation_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._toggler_rotation_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._toggler_rotation_on.onclick=function (e) {
			me.player.startAutorotate("0");
			me._toggler_rotation_on.style[domTransition]='none';
			me._toggler_rotation_on.style.visibility='hidden';
			me._toggler_rotation_on.ggVisible=false;
			me._toggler_rotation_off.style[domTransition]='none';
			me._toggler_rotation_off.style.visibility=(Number(me._toggler_rotation_off.style.opacity)>0||!me._toggler_rotation_off.style.opacity)?'inherit':'hidden';
			me._toggler_rotation_off.ggVisible=true;
		}
		this._toggler_rotation_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_on_rotation=document.createElement('div');
		this._svg_on_rotation__img=document.createElement('img');
		this._svg_on_rotation__img.className='ggskin ggskin_svg';
		this._svg_on_rotation__img.setAttribute('src',basePath + 'images/svg_on_rotation.png');
		this._svg_on_rotation__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_on_rotation__img['ondragstart']=function() { return false; };
		this._svg_on_rotation.appendChild(this._svg_on_rotation__img);
		this._svg_on_rotation.ggId="svg_on_rotation";
		this._svg_on_rotation.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_on_rotation.ggVisible=true;
		this._svg_on_rotation.className="ggskin ggskin_svg ";
		this._svg_on_rotation.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_on_rotation.setAttribute('style',hs);
		this._svg_on_rotation.style[domTransform + 'Origin']='50% 50%';
		me._svg_on_rotation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_on_rotation.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_on_rotation.ggUpdatePosition=function (useTransition) {
		}
		this._toggler_rotation_on.appendChild(this._svg_on_rotation);
		this._rectangle_bottom.appendChild(this._toggler_rotation_on);
		this._btn_off_info=document.createElement('div');
		this._btn_off_info.ggId="btn_off_info";
		this._btn_off_info.ggDx=-50;
		this._btn_off_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_off_info.ggVisible=false;
		this._btn_off_info.className="ggskin ggskin_container ";
		this._btn_off_info.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._btn_off_info.setAttribute('style',hs);
		this._btn_off_info.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_off_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_off_info.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._text_info_top.style[domTransition]='none';
			me._text_info_top.style.visibility='hidden';
			me._text_info_top.ggVisible=false;
			me._btn_off_info.style[domTransition]='none';
			me._btn_off_info.style.visibility='hidden';
			me._btn_off_info.ggVisible=false;
			me._btn_on_info.style[domTransition]='none';
			me._btn_on_info.style.visibility=(Number(me._btn_on_info.style.opacity)>0||!me._btn_on_info.style.opacity)?'inherit':'hidden';
			me._btn_on_info.ggVisible=true;
		}
		this._btn_off_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_on_info0=document.createElement('div');
		this._svg_on_info0__img=document.createElement('img');
		this._svg_on_info0__img.className='ggskin ggskin_svg';
		this._svg_on_info0__img.setAttribute('src',basePath + 'images/svg_on_info0.png');
		this._svg_on_info0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_on_info0__img['ondragstart']=function() { return false; };
		this._svg_on_info0.appendChild(this._svg_on_info0__img);
		this._svg_on_info0.ggId="svg_on_info";
		this._svg_on_info0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_on_info0.ggVisible=true;
		this._svg_on_info0.className="ggskin ggskin_svg ";
		this._svg_on_info0.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_on_info0.setAttribute('style',hs);
		this._svg_on_info0.style[domTransform + 'Origin']='50% 50%';
		me._svg_on_info0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_on_info0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_on_info0.ggUpdatePosition=function (useTransition) {
		}
		this._btn_off_info.appendChild(this._svg_on_info0);
		this._rectangle_bottom.appendChild(this._btn_off_info);
		this._btn_on_info=document.createElement('div');
		this._btn_on_info.ggId="btn_on_info";
		this._btn_on_info.ggDx=-50;
		this._btn_on_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_on_info.ggVisible=true;
		this._btn_on_info.className="ggskin ggskin_container ";
		this._btn_on_info.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._btn_on_info.setAttribute('style',hs);
		this._btn_on_info.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_on_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_on_info.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._text_info_top.style[domTransition]='none';
			me._text_info_top.style.visibility=(Number(me._text_info_top.style.opacity)>0||!me._text_info_top.style.opacity)?'inherit':'hidden';
			me._text_info_top.ggVisible=true;
			me._btn_on_info.style[domTransition]='none';
			me._btn_on_info.style.visibility='hidden';
			me._btn_on_info.ggVisible=false;
			me._btn_off_info.style[domTransition]='none';
			me._btn_off_info.style.visibility=(Number(me._btn_off_info.style.opacity)>0||!me._btn_off_info.style.opacity)?'inherit':'hidden';
			me._btn_off_info.ggVisible=true;
		}
		this._btn_on_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_on_info=document.createElement('div');
		this._svg_on_info__img=document.createElement('img');
		this._svg_on_info__img.className='ggskin ggskin_svg';
		this._svg_on_info__img.setAttribute('src',basePath + 'images/svg_on_info.png');
		this._svg_on_info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_on_info__img['ondragstart']=function() { return false; };
		this._svg_on_info.appendChild(this._svg_on_info__img);
		this._svg_on_info.ggId="svg_on_info";
		this._svg_on_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_on_info.ggVisible=true;
		this._svg_on_info.className="ggskin ggskin_svg ";
		this._svg_on_info.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_on_info.setAttribute('style',hs);
		this._svg_on_info.style[domTransform + 'Origin']='50% 50%';
		me._svg_on_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_on_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_on_info.ggUpdatePosition=function (useTransition) {
		}
		this._btn_on_info.appendChild(this._svg_on_info);
		this._rectangle_bottom.appendChild(this._btn_on_info);
		this._btn_off_help=document.createElement('div');
		this._btn_off_help.ggId="btn_off_help";
		this._btn_off_help.ggDx=-100;
		this._btn_off_help.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_off_help.ggVisible=false;
		this._btn_off_help.className="ggskin ggskin_container ";
		this._btn_off_help.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._btn_off_help.setAttribute('style',hs);
		this._btn_off_help.style[domTransform + 'Origin']='50% 50%';
		me._btn_off_help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_off_help.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_off_help.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._text_help_responsive.style[domTransition]='none';
			me._text_help_responsive.style.visibility='hidden';
			me._text_help_responsive.ggVisible=false;
			me._btn_off_help.style[domTransition]='none';
			me._btn_off_help.style.visibility='hidden';
			me._btn_off_help.ggVisible=false;
			me._btn_on_help.style[domTransition]='none';
			me._btn_on_help.style.visibility=(Number(me._btn_on_help.style.opacity)>0||!me._btn_on_help.style.opacity)?'inherit':'hidden';
			me._btn_on_help.ggVisible=true;
		}
		this._btn_off_help.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_off_help0=document.createElement('div');
		this._svg_off_help0__img=document.createElement('img');
		this._svg_off_help0__img.className='ggskin ggskin_svg';
		this._svg_off_help0__img.setAttribute('src',basePath + 'images/svg_off_help0.png');
		this._svg_off_help0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_off_help0__img['ondragstart']=function() { return false; };
		this._svg_off_help0.appendChild(this._svg_off_help0__img);
		this._svg_off_help0.ggId="svg_off_help";
		this._svg_off_help0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_off_help0.ggVisible=true;
		this._svg_off_help0.className="ggskin ggskin_svg ";
		this._svg_off_help0.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_off_help0.setAttribute('style',hs);
		this._svg_off_help0.style[domTransform + 'Origin']='50% 50%';
		me._svg_off_help0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_off_help0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_off_help0.ggUpdatePosition=function (useTransition) {
		}
		this._btn_off_help.appendChild(this._svg_off_help0);
		this._rectangle_bottom.appendChild(this._btn_off_help);
		this._btn_on_help=document.createElement('div');
		this._btn_on_help.ggId="btn_on_help";
		this._btn_on_help.ggDx=-100;
		this._btn_on_help.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_on_help.ggVisible=true;
		this._btn_on_help.className="ggskin ggskin_container ";
		this._btn_on_help.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		this._btn_on_help.setAttribute('style',hs);
		this._btn_on_help.style[domTransform + 'Origin']='50% 50%';
		me._btn_on_help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_on_help.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_on_help.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._text_help_responsive.style[domTransition]='none';
			me._text_help_responsive.style.visibility=(Number(me._text_help_responsive.style.opacity)>0||!me._text_help_responsive.style.opacity)?'inherit':'hidden';
			me._text_help_responsive.ggVisible=true;
			me._btn_on_help.style[domTransition]='none';
			me._btn_on_help.style.visibility='hidden';
			me._btn_on_help.ggVisible=false;
			me._btn_off_help.style[domTransition]='none';
			me._btn_off_help.style.visibility=(Number(me._btn_off_help.style.opacity)>0||!me._btn_off_help.style.opacity)?'inherit':'hidden';
			me._btn_off_help.ggVisible=true;
		}
		this._btn_on_help.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._svg_off_help=document.createElement('div');
		this._svg_off_help__img=document.createElement('img');
		this._svg_off_help__img.className='ggskin ggskin_svg';
		this._svg_off_help__img.setAttribute('src',basePath + 'images/svg_off_help.png');
		this._svg_off_help__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_off_help__img['ondragstart']=function() { return false; };
		this._svg_off_help.appendChild(this._svg_off_help__img);
		this._svg_off_help.ggId="svg_off_help";
		this._svg_off_help.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_off_help.ggVisible=true;
		this._svg_off_help.className="ggskin ggskin_svg ";
		this._svg_off_help.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_off_help.setAttribute('style',hs);
		this._svg_off_help.style[domTransform + 'Origin']='50% 50%';
		me._svg_off_help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_off_help.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_off_help.ggUpdatePosition=function (useTransition) {
		}
		this._btn_on_help.appendChild(this._svg_off_help);
		this._rectangle_bottom.appendChild(this._btn_on_help);
		this.divSkin.appendChild(this._rectangle_bottom);
		this._bottom_right_corner_elements=document.createElement('div');
		this._bottom_right_corner_elements.ggId="bottom_right_corner_elements";
		this._bottom_right_corner_elements.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bottom_right_corner_elements.ggVisible=true;
		this._bottom_right_corner_elements.className="ggskin ggskin_container ";
		this._bottom_right_corner_elements.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		this._bottom_right_corner_elements.setAttribute('style',hs);
		this._bottom_right_corner_elements.style[domTransform + 'Origin']='100% 100%';
		me._bottom_right_corner_elements.ggIsActive=function() {
			return false;
		}
		me._bottom_right_corner_elements.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._bottom_right_corner_elements.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 340) || 
				(me.player.getViewerSize().height < 340)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width >= 340) && 
				(me.player.getViewerSize().width < 640)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width >= 640) && 
				(me.player.getViewerSize().width < 960)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getViewerSize().width >= 960)
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._bottom_right_corner_elements.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._bottom_right_corner_elements.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._bottom_right_corner_elements.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._bottom_right_corner_elements.ggCurrentLogicStateScaling == 0) {
					me._bottom_right_corner_elements.ggParameter.sx = 0.7;
					me._bottom_right_corner_elements.ggParameter.sy = 0.7;
					me._bottom_right_corner_elements.style[domTransform]=parameterToTransform(me._bottom_right_corner_elements.ggParameter);
				}
				else if (me._bottom_right_corner_elements.ggCurrentLogicStateScaling == 1) {
					me._bottom_right_corner_elements.ggParameter.sx = 0.75;
					me._bottom_right_corner_elements.ggParameter.sy = 0.75;
					me._bottom_right_corner_elements.style[domTransform]=parameterToTransform(me._bottom_right_corner_elements.ggParameter);
				}
				else if (me._bottom_right_corner_elements.ggCurrentLogicStateScaling == 2) {
					me._bottom_right_corner_elements.ggParameter.sx = 0.85;
					me._bottom_right_corner_elements.ggParameter.sy = 0.85;
					me._bottom_right_corner_elements.style[domTransform]=parameterToTransform(me._bottom_right_corner_elements.ggParameter);
				}
				else if (me._bottom_right_corner_elements.ggCurrentLogicStateScaling == 3) {
					me._bottom_right_corner_elements.ggParameter.sx = 1;
					me._bottom_right_corner_elements.ggParameter.sy = 1;
					me._bottom_right_corner_elements.style[domTransform]=parameterToTransform(me._bottom_right_corner_elements.ggParameter);
				}
				else {
					me._bottom_right_corner_elements.ggParameter.sx = 1;
					me._bottom_right_corner_elements.ggParameter.sy = 1;
					me._bottom_right_corner_elements.style[domTransform]=parameterToTransform(me._bottom_right_corner_elements.ggParameter);
				}
			}
		}
		this._bottom_right_corner_elements.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._btn_menu_open=document.createElement('div');
		this._btn_menu_open.ggId="btn_menu_open";
		this._btn_menu_open.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_menu_open.ggVisible=false;
		this._btn_menu_open.className="ggskin ggskin_container ";
		this._btn_menu_open.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		this._btn_menu_open.setAttribute('style',hs);
		this._btn_menu_open.style[domTransform + 'Origin']='100% 100%';
		me._btn_menu_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_menu_open.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_menu_open.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._btn_menu_open.style[domTransition]='none';
			me._btn_menu_open.style.visibility='hidden';
			me._btn_menu_open.ggVisible=false;
			me._btn_menu_close.style[domTransition]='none';
			me._btn_menu_close.style.visibility=(Number(me._btn_menu_close.style.opacity)>0||!me._btn_menu_close.style.opacity)?'inherit':'hidden';
			me._btn_menu_close.ggVisible=true;
			me._rectangle_bottom.style[domTransition]='none';
			me._rectangle_bottom.style.visibility=(Number(me._rectangle_bottom.style.opacity)>0||!me._rectangle_bottom.style.opacity)?'inherit':'hidden';
			me._rectangle_bottom.ggVisible=true;
			me._btn_off_navigationcontainer.onclick();
		}
		this._btn_menu_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._svg_menu_open=document.createElement('div');
		this._svg_menu_open__img=document.createElement('img');
		this._svg_menu_open__img.className='ggskin ggskin_svg';
		this._svg_menu_open__img.setAttribute('src',basePath + 'images/svg_menu_open.png');
		this._svg_menu_open__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_menu_open__img['ondragstart']=function() { return false; };
		this._svg_menu_open.appendChild(this._svg_menu_open__img);
		this._svg_menu_open.ggId="svg_menu_open";
		this._svg_menu_open.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_menu_open.ggVisible=true;
		this._svg_menu_open.className="ggskin ggskin_svg ";
		this._svg_menu_open.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_menu_open.setAttribute('style',hs);
		this._svg_menu_open.style[domTransform + 'Origin']='100% 100%';
		me._svg_menu_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_menu_open.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_menu_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._btn_menu_open.appendChild(this._svg_menu_open);
		this._bottom_right_corner_elements.appendChild(this._btn_menu_open);
		this._btn_menu_close=document.createElement('div');
		this._btn_menu_close.ggId="btn_menu_close";
		this._btn_menu_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_menu_close.ggVisible=true;
		this._btn_menu_close.className="ggskin ggskin_container ";
		this._btn_menu_close.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		this._btn_menu_close.setAttribute('style',hs);
		this._btn_menu_close.style[domTransform + 'Origin']='100% 100%';
		me._btn_menu_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_menu_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_menu_close.onclick=function (e) {
			me._check_all_elements_status.onclick();
			me._rectangle_bottom.style[domTransition]='none';
			me._rectangle_bottom.style.visibility='hidden';
			me._rectangle_bottom.ggVisible=false;
			me._btn_menu_close.style[domTransition]='none';
			me._btn_menu_close.style.visibility='hidden';
			me._btn_menu_close.ggVisible=false;
			me._btn_menu_open.style[domTransition]='none';
			me._btn_menu_open.style.visibility=(Number(me._btn_menu_open.style.opacity)>0||!me._btn_menu_open.style.opacity)?'inherit':'hidden';
			me._btn_menu_open.ggVisible=true;
			me._btn_off_navigationcontainer.onclick();
		}
		this._btn_menu_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._svg_menu_close=document.createElement('div');
		this._svg_menu_close__img=document.createElement('img');
		this._svg_menu_close__img.className='ggskin ggskin_svg';
		this._svg_menu_close__img.setAttribute('src',basePath + 'images/svg_menu_close.png');
		this._svg_menu_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_menu_close__img['ondragstart']=function() { return false; };
		this._svg_menu_close.appendChild(this._svg_menu_close__img);
		this._svg_menu_close.ggId="svg_menu_close";
		this._svg_menu_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_menu_close.ggVisible=true;
		this._svg_menu_close.className="ggskin ggskin_svg ";
		this._svg_menu_close.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_menu_close.setAttribute('style',hs);
		this._svg_menu_close.style[domTransform + 'Origin']='100% 100%';
		me._svg_menu_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_menu_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_menu_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._btn_menu_close.appendChild(this._svg_menu_close);
		this._bottom_right_corner_elements.appendChild(this._btn_menu_close);
		this.divSkin.appendChild(this._bottom_right_corner_elements);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._information.ggVisible=false;
		this._information.className="ggskin ggskin_container ";
		this._information.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		this._information.style[domTransform]=parameterToTransform(this._information.ggParameter);
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		this._information.ggUpdatePosition=function (useTransition) {
		}
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggDx=-23;
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className="ggskin ggskin_text ";
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 105%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 103%;';
		hs+='pointer-events:auto;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body.ggUpdateText=function() {
			var hs="<iframe src=\""+me.player.getVariableValue('MyPageURL')+"\/index.html#"+me.player.getVariableValue('MyNodeNumber')+"\" width=\"100%\" height=\"100%\" frameborder= \"0\" scrolling=\"no\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" ><\/iframe>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._information.appendChild(this._info_text_body);
		this._info_popup_close=document.createElement('div');
		this._info_popup_close__img=document.createElement('img');
		this._info_popup_close__img.className='ggskin ggskin_svg';
		this._info_popup_close__img.setAttribute('src',basePath + 'images/info_popup_close.png');
		this._info_popup_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._info_popup_close__img['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__img);
		this._info_popup_close__imgo=document.createElement('img');
		this._info_popup_close__imgo.className='ggskin ggskin_svg';
		this._info_popup_close__imgo.setAttribute('src',basePath + 'images/info_popup_close__o.png');
		this._info_popup_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		this._info_popup_close__imgo['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__imgo);
		this._info_popup_close.ggId="info_popup_close";
		this._info_popup_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_popup_close.ggVisible=true;
		this._info_popup_close.className="ggskin ggskin_svg ";
		this._info_popup_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._info_popup_close.setAttribute('style',hs);
		this._info_popup_close.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_popup_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_popup_close.onclick=function (e) {
			me.player.setVariableValue('vis_info_popup', false);
			var flag=me._information.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._information.style[domTransition]='none';
			} else {
				me._information.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._information.ggParameter.sx=0;me._information.ggParameter.sy=0;
				me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
			} else {
				me._information.ggParameter.sx=0;me._information.ggParameter.sy=0;
				me._information.style[domTransform]=parameterToTransform(me._information.ggParameter);
			}
			me._information.ggScaleActive=!flag;
		}
		this._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		this._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		this._info_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._information.appendChild(this._info_popup_close);
		this.divSkin.appendChild(this._information);
		this._text_help_responsive=document.createElement('div');
		this._text_help_responsive__text=document.createElement('div');
		this._text_help_responsive.className='ggskin ggskin_textdiv';
		this._text_help_responsive.ggTextDiv=this._text_help_responsive__text;
		this._text_help_responsive.ggId="text_help_responsive";
		this._text_help_responsive.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_help_responsive.ggVisible=true;
		this._text_help_responsive.className="ggskin ggskin_text ";
		this._text_help_responsive.ggType='text';
		hs ='';
		hs+='height : 65%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		this._text_help_responsive.setAttribute('style',hs);
		this._text_help_responsive.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_help_responsive__text.setAttribute('style',hs);
		this._text_help_responsive__text.innerHTML="<div style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; border-bottom: 10px solid #333333; background:#333333; color:#ffffff; font-size:1.2em; word-wrap:break-word ;font-family:Century Gothic; margin-top:0px; margin-bottom:0px;\"><br\/><p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; font-size:1.5em; text-align: center; margin-top:0px; margin-bottom:0px;\">360\xb0 Sanal Tur ile ev gezmenin p\xfcf noktalar\u0131<\/p><br\/><p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">Her \u015feyden \xf6nce TAM EKRAN \xf6zelli\u011fine ge\xe7i\u015f yap\u0131n\u0131z ve \u015fu 2 konuya l\xfctfen dikkat ediniz :<br\/><br\/><li><strong>Mouse hakimiyeti<\/strong><\/li><br\/><li><strong>\u0130stedi\u011finiz a\xe7\u0131ya odaklanma<\/strong> <\/li><br\/><p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">Farenin sol tu\u015funa <strong>hafif\xe7e<\/strong> bas\u0131l\u0131 tutarak istedi\u011finiz y\xf6ne bakabilirsiniz. Bu i\u015flemi  hi\xe7 durmadan yapmak ba\u015f\u0131n\u0131z\u0131 d\xf6nd\xfcrebilir.O y\xfczden sadece bakmak istedi\u011finiz tarafa <strong>hafif\xe7e<\/strong> y\xf6neliniz. \u0130lgilendi\u011finiz objeyi zoom-in\/out yaparak inceleyebilirsiniz.<br>";
		this._text_help_responsive.appendChild(this._text_help_responsive__text);
		me._text_help_responsive.ggIsActive=function() {
			return false;
		}
		me._text_help_responsive.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._text_help_responsive.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(me.player.getViewerSize().width < 500) || 
				(me.player.getViewerSize().height < 500)
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_help_responsive.ggCurrentLogicStateText != newLogicStateText) {
				me._text_help_responsive.ggCurrentLogicStateText = newLogicStateText;
				me._text_help_responsive.style[domTransition]='';
				if (me._text_help_responsive.ggCurrentLogicStateText == 0) {
					me._text_help_responsive.ggText="<div style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; border-bottom: 10px solid #333333; background:#333333; color:#ffffff; font-size:1.0em; word-wrap:break-word ;font-family:Century Gothic; margin-top:0px; margin-bottom:0px;\">\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; font-size:1.2em; text-align: center; margin-top:0px; margin-bottom:0px;\">RESPONSIVE SKIN<\/p>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">This skin is \"responsive\". This means that some of its elements will change its size based on the size of the browser in use to show the panoramas. Also, you should note that the \"navigate\" button  (pin + street + flag) shows different alternatives depending on the browser width in use. If the browser width is less or equal 1024 pixels (typically smartphones and tablets), it will show the user with two navigation options:\n<ul>\n<li>to navigate using <strong>Waze<\/strong> &reg <\/li>\n<li>to navigate using <strong>Google Maps<\/strong> &reg <\/li>\n<\/ul>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">On the other hand, for browsers widths greather than 1024 pixels, just the <strong>Google Maps<\/strong> &reg alternative will be shown.<br>\n<hr style=\"background:#ffffff; border:0; height:1px\" \/>\n<b>Nullam mauris nisi<\/b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula quis magna rutrum efficitur. Nam vitae lacus egestas, posuere nisi faucibus, egestas turpis. Nulla arcu turpis, dignissim congue volutpat vel, ullamcorper a odio.<br><br>Morbi malesuada tellus eget eros laoreet, nec rutrum dui pellentesque. Duis in bibendum ipsum. Nam hendrerit blandit accumsan. Nam neque purus, sagittis eget pellentesque vel, maximus tempus risus. Donec molestie mollis odio at dignissim. Vestibulum at augue rutrum, varius magna id, dignissim metus.<br><br>In leo quam, aliquet porta libero vel, finibus aliquam lorem. Donec in sollicitudin orci. Donec congue nibh ut egestas semper. Fusce sollicitudin nunc placerat, suscipit tortor id, viverra ante. Vivamus accumsan ultricies diam a porta. In efficitur elit sit amet blandit rutrum. Ut mattis erat nec eros dapibus tempor.<br><br>Nulla nec sagittis lacus, at tincidunt nisl. Donec et convallis massa.<br><br>In non erat nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<\/p>\n<hr style=\"background:#ffffff; border:0; height:1px\" \/>";
					me._text_help_responsive__text.innerHTML=me._text_help_responsive.ggText;
					if (me._text_help_responsive.ggUpdateText) {
					me._text_help_responsive.ggUpdateText=function() {
						var hs="<div style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; border-bottom: 10px solid #333333; background:#333333; color:#ffffff; font-size:1.0em; word-wrap:break-word ;font-family:Century Gothic; margin-top:0px; margin-bottom:0px;\">\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; font-size:1.2em; text-align: center; margin-top:0px; margin-bottom:0px;\">RESPONSIVE SKIN<\/p>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">This skin is \"responsive\". This means that some of its elements will change its size based on the size of the browser in use to show the panoramas. Also, you should note that the \"navigate\" button  (pin + street + flag) shows different alternatives depending on the browser width in use. If the browser width is less or equal 1024 pixels (typically smartphones and tablets), it will show the user with two navigation options:\n<ul>\n<li>to navigate using <strong>Waze<\/strong> &reg <\/li>\n<li>to navigate using <strong>Google Maps<\/strong> &reg <\/li>\n<\/ul>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">On the other hand, for browsers widths greather than 1024 pixels, just the <strong>Google Maps<\/strong> &reg alternative will be shown.<br>\n<hr style=\"background:#ffffff; border:0; height:1px\" \/>\n<b>Nullam mauris nisi<\/b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula quis magna rutrum efficitur. Nam vitae lacus egestas, posuere nisi faucibus, egestas turpis. Nulla arcu turpis, dignissim congue volutpat vel, ullamcorper a odio.<br><br>Morbi malesuada tellus eget eros laoreet, nec rutrum dui pellentesque. Duis in bibendum ipsum. Nam hendrerit blandit accumsan. Nam neque purus, sagittis eget pellentesque vel, maximus tempus risus. Donec molestie mollis odio at dignissim. Vestibulum at augue rutrum, varius magna id, dignissim metus.<br><br>In leo quam, aliquet porta libero vel, finibus aliquam lorem. Donec in sollicitudin orci. Donec congue nibh ut egestas semper. Fusce sollicitudin nunc placerat, suscipit tortor id, viverra ante. Vivamus accumsan ultricies diam a porta. In efficitur elit sit amet blandit rutrum. Ut mattis erat nec eros dapibus tempor.<br><br>Nulla nec sagittis lacus, at tincidunt nisl. Donec et convallis massa.<br><br>In non erat nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<\/p>\n<hr style=\"background:#ffffff; border:0; height:1px\" \/>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._text_help_responsive.ggUpdatePosition) me._text_help_responsive.ggUpdatePosition();
					}
				}
				else {
					me._text_help_responsive.ggText="<div style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; border-bottom: 10px solid #333333; background:#333333; color:#ffffff; font-size:1.2em; word-wrap:break-word ;font-family:Century Gothic; margin-top:0px; margin-bottom:0px;\">\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; font-size:1.5em; text-align: center; margin-top:0px; margin-bottom:0px;\">360\xb0 Sanal Tur ile ev gezmenin p\xfcf noktalar\u0131<\/p>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">Her \u015feyden \xf6nce TAM EKRAN \xf6zelli\u011fine ge\xe7i\u015f yap\u0131n\u0131z ve \u015fu 2 konuya l\xfctfen dikkat ediniz :\n\n<li><strong>Mouse hakimiyeti<\/strong><\/li>\n<li><strong>\u0130stedi\u011finiz a\xe7\u0131ya odaklanma<\/strong> <\/li>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">Farenin sol tu\u015funa <strong>hafif\xe7e<\/strong> bas\u0131l\u0131 tutarak istedi\u011finiz y\xf6ne bakabilirsiniz. Bu i\u015flemi  hi\xe7 durmadan yapmak ba\u015f\u0131n\u0131z\u0131 d\xf6nd\xfcrebilir.O y\xfczden sadece bakmak istedi\u011finiz tarafa <strong>hafif\xe7e<\/strong> y\xf6neliniz. \u0130lgilendi\u011finiz objeyi zoom-in\/out yaparak inceleyebilirsiniz.<br>";
					me._text_help_responsive__text.innerHTML=me._text_help_responsive.ggText;
					if (me._text_help_responsive.ggUpdateText) {
					me._text_help_responsive.ggUpdateText=function() {
						var hs="<div style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; border-bottom: 10px solid #333333; background:#333333; color:#ffffff; font-size:1.2em; word-wrap:break-word ;font-family:Century Gothic; margin-top:0px; margin-bottom:0px;\">\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; font-size:1.5em; text-align: center; margin-top:0px; margin-bottom:0px;\">360\xb0 Sanal Tur ile ev gezmenin p\xfcf noktalar\u0131<\/p>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">Her \u015feyden \xf6nce TAM EKRAN \xf6zelli\u011fine ge\xe7i\u015f yap\u0131n\u0131z ve \u015fu 2 konuya l\xfctfen dikkat ediniz :\n\n<li><strong>Mouse hakimiyeti<\/strong><\/li>\n<li><strong>\u0130stedi\u011finiz a\xe7\u0131ya odaklanma<\/strong> <\/li>\n<p style=\"border-left: 10px solid #333333; border-right: 10px solid #333333; color:#ffffff; word-wrap:break-word; margin: 0px auto;\">Farenin sol tu\u015funa <strong>hafif\xe7e<\/strong> bas\u0131l\u0131 tutarak istedi\u011finiz y\xf6ne bakabilirsiniz. Bu i\u015flemi  hi\xe7 durmadan yapmak ba\u015f\u0131n\u0131z\u0131 d\xf6nd\xfcrebilir.O y\xfczden sadece bakmak istedi\u011finiz tarafa <strong>hafif\xe7e<\/strong> y\xf6neliniz. \u0130lgilendi\u011finiz objeyi zoom-in\/out yaparak inceleyebilirsiniz.<br>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._text_help_responsive.ggUpdatePosition) me._text_help_responsive.ggUpdatePosition();
					}
				}
			}
		}
		this._text_help_responsive.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._text_help_responsive);
		this._text_info_top=document.createElement('div');
		this._text_info_top__text=document.createElement('div');
		this._text_info_top.className='ggskin ggskin_textdiv';
		this._text_info_top.ggTextDiv=this._text_info_top__text;
		this._text_info_top.ggId="text_info_top";
		this._text_info_top.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_info_top.ggVisible=true;
		this._text_info_top.className="ggskin ggskin_text ";
		this._text_info_top.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._text_info_top.setAttribute('style',hs);
		this._text_info_top.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		this._text_info_top__text.setAttribute('style',hs);
		this._text_info_top__text.innerHTML="";
		this._text_info_top.appendChild(this._text_info_top__text);
		me._text_info_top.ggIsActive=function() {
			return false;
		}
		me._text_info_top.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._text_info_top.onclick=function (e) {
			me._btn_off_info.onclick();
		}
		this._text_info_top.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._text_info_top);
		this._navigation_container=document.createElement('div');
		this._navigation_container.ggId="Navigation_Container";
		this._navigation_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._navigation_container.ggVisible=true;
		this._navigation_container.className="ggskin ggskin_container ";
		this._navigation_container.ggType='container';
		hs ='';
		hs+='height : 606px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 680px;';
		hs+='pointer-events:none;';
		this._navigation_container.setAttribute('style',hs);
		this._navigation_container.style[domTransform + 'Origin']='100% 0%';
		me._navigation_container.ggIsActive=function() {
			return false;
		}
		me._navigation_container.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._navigation_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 320) || 
				(me.player.getViewerSize().height < 320)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width < 480) || 
				(me.player.getViewerSize().height < 480)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width < 640) || 
				(me.player.getViewerSize().height < 640)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getViewerSize().width < 840) || 
				(me.player.getViewerSize().height < 840)
			)
			{
				newLogicStateScaling = 3;
			}
			else if (
				(me.player.getViewerSize().width < 1024) || 
				(me.player.getViewerSize().height < 1024)
			)
			{
				newLogicStateScaling = 4;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._navigation_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._navigation_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._navigation_container.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._navigation_container.ggCurrentLogicStateScaling == 0) {
					me._navigation_container.ggParameter.sx = 0.27;
					me._navigation_container.ggParameter.sy = 0.27;
					me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
				}
				else if (me._navigation_container.ggCurrentLogicStateScaling == 1) {
					me._navigation_container.ggParameter.sx = 0.36;
					me._navigation_container.ggParameter.sy = 0.36;
					me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
				}
				else if (me._navigation_container.ggCurrentLogicStateScaling == 2) {
					me._navigation_container.ggParameter.sx = 0.6;
					me._navigation_container.ggParameter.sy = 0.6;
					me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
				}
				else if (me._navigation_container.ggCurrentLogicStateScaling == 3) {
					me._navigation_container.ggParameter.sx = 0.7;
					me._navigation_container.ggParameter.sy = 0.7;
					me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
				}
				else if (me._navigation_container.ggCurrentLogicStateScaling == 4) {
					me._navigation_container.ggParameter.sx = 0.85;
					me._navigation_container.ggParameter.sy = 0.85;
					me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
				}
				else {
					me._navigation_container.ggParameter.sx = 1;
					me._navigation_container.ggParameter.sy = 1;
					me._navigation_container.style[domTransform]=parameterToTransform(me._navigation_container.ggParameter);
				}
			}
		}
		this._navigation_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._container_floor_plan_level1=document.createElement('div');
		this._container_floor_plan_level1.ggId="Container Floor Plan Level1";
		this._container_floor_plan_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_floor_plan_level1.ggVisible=false;
		this._container_floor_plan_level1.className="ggskin ggskin_container ";
		this._container_floor_plan_level1.ggType='container';
		hs ='';
		hs+='height : 484px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 591px;';
		hs+='pointer-events:none;';
		this._container_floor_plan_level1.setAttribute('style',hs);
		this._container_floor_plan_level1.style[domTransform + 'Origin']='0% 0%';
		me._container_floor_plan_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._container_floor_plan_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._container_floor_plan_level1.onmouseover=function (e) {
			me._kat_1.style[domTransition]='none';
			me._kat_1.style.opacity='1';
			me._kat_1.style.visibility=me._kat_1.ggVisible?'inherit':'hidden';
		}
		this._container_floor_plan_level1.onmouseout=function (e) {
			me._kat_1.style[domTransition]='none';
			me._kat_1.style.opacity='0.8';
			me._kat_1.style.visibility=me._kat_1.ggVisible?'inherit':'hidden';
		}
		this._container_floor_plan_level1.ggUpdatePosition=function (useTransition) {
		}
		this._kat_1=document.createElement('div');
		this._kat_1__img=document.createElement('img');
		this._kat_1__img.className='ggskin ggskin_image';
		this._kat_1__img.setAttribute('src',basePath + 'images/kat_1.png');
		this._kat_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._kat_1__img.className='ggskin ggskin_image';
		this._kat_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._kat_1__img);
		this._kat_1.appendChild(this._kat_1__img);
		this._kat_1.ggId="Kat 1";
		this._kat_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._kat_1.ggVisible=true;
		this._kat_1.className="ggskin ggskin_image ";
		this._kat_1.ggType='image';
		hs ='';
		hs+='height : 484px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 591px;';
		hs+='pointer-events:auto;';
		this._kat_1.setAttribute('style',hs);
		this._kat_1.style[domTransform + 'Origin']='50% 50%';
		me._kat_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._kat_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._kat_1.ggUpdatePosition=function (useTransition) {
		}
		this._container_floor_plan_level1.appendChild(this._kat_1);
		this._container_spots_and_radar_beam_level1=document.createElement('div');
		this._container_spots_and_radar_beam_level1.ggId="Container spots and radar beam Level1";
		this._container_spots_and_radar_beam_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_spots_and_radar_beam_level1.ggVisible=true;
		this._container_spots_and_radar_beam_level1.className="ggskin ggskin_container ";
		this._container_spots_and_radar_beam_level1.ggType='container';
		hs ='';
		hs+='height : 484px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 591px;';
		hs+='pointer-events:none;';
		this._container_spots_and_radar_beam_level1.setAttribute('style',hs);
		this._container_spots_and_radar_beam_level1.style[domTransform + 'Origin']='50% 50%';
		me._container_spots_and_radar_beam_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._container_spots_and_radar_beam_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._container_spots_and_radar_beam_level1.ggUpdatePosition=function (useTransition) {
		}
		this._radar_level1=document.createElement('div');
		this._radar_level1__img=document.createElement('img');
		this._radar_level1__img.className='ggskin ggskin_image';
		this._radar_level1__img.setAttribute('src',basePath + 'images/radar_level1.png');
		this._radar_level1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._radar_level1__img.className='ggskin ggskin_image';
		this._radar_level1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_level1__img);
		this._radar_level1.appendChild(this._radar_level1__img);
		this._radar_level1.ggId="radar Level1";
		this._radar_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_level1.ggVisible=true;
		this._radar_level1.className="ggskin ggskin_image ";
		this._radar_level1.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._radar_level1.setAttribute('style',hs);
		this._radar_level1.style[domTransform + 'Origin']='50% 50%';
		me._radar_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._radar_level1);
		this._spot12_level1=document.createElement('div');
		this._spot12_level1.ggId="spot12 Level1";
		this._spot12_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot12_level1.ggVisible=true;
		this._spot12_level1.className="ggskin ggskin_rectangle ";
		this._spot12_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 155px;';
		hs+='position : absolute;';
		hs+='top : 171px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot12_level1.setAttribute('style',hs);
		this._spot12_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot12_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot12_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot12_level1.onclick=function (e) {
			me.player.openNext("{node32}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=155;me._radar_level1.ggParameter.ry=171;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot12_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot12_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot12_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot12_level1);
		this._spot11_level1=document.createElement('div');
		this._spot11_level1.ggId="spot11 Level1";
		this._spot11_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot11_level1.ggVisible=true;
		this._spot11_level1.className="ggskin ggskin_rectangle ";
		this._spot11_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 421px;';
		hs+='position : absolute;';
		hs+='top : 354px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot11_level1.setAttribute('style',hs);
		this._spot11_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot11_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot11_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot11_level1.onclick=function (e) {
			me.player.openNext("{node29}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=421;me._radar_level1.ggParameter.ry=354;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot11_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot11_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot11_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot11_level1);
		this._spot10_level1=document.createElement('div');
		this._spot10_level1.ggId="spot10 Level1";
		this._spot10_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot10_level1.ggVisible=true;
		this._spot10_level1.className="ggskin ggskin_rectangle ";
		this._spot10_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 356px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot10_level1.setAttribute('style',hs);
		this._spot10_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot10_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot10_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot10_level1.onclick=function (e) {
			me.player.openNext("{node22}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=356;me._radar_level1.ggParameter.ry=187;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot10_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot10_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot10_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot10_level1);
		this._spot9_level1=document.createElement('div');
		this._spot9_level1.ggId="spot9 Level1";
		this._spot9_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot9_level1.ggVisible=true;
		this._spot9_level1.className="ggskin ggskin_rectangle ";
		this._spot9_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 315px;';
		hs+='position : absolute;';
		hs+='top : 352px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot9_level1.setAttribute('style',hs);
		this._spot9_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot9_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot9_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot9_level1.onclick=function (e) {
			me.player.openNext("{node21}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=315;me._radar_level1.ggParameter.ry=352;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot9_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot9_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot9_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot9_level1);
		this._spot8_level1=document.createElement('div');
		this._spot8_level1.ggId="spot8 Level1";
		this._spot8_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot8_level1.ggVisible=true;
		this._spot8_level1.className="ggskin ggskin_rectangle ";
		this._spot8_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 416px;';
		hs+='position : absolute;';
		hs+='top : 246px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot8_level1.setAttribute('style',hs);
		this._spot8_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot8_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot8_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot8_level1.onclick=function (e) {
			me.player.openNext("{node20}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=416;me._radar_level1.ggParameter.ry=246;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot8_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot8_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot8_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot8_level1);
		this._spot7_level1=document.createElement('div');
		this._spot7_level1.ggId="spot7 Level1";
		this._spot7_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot7_level1.ggVisible=true;
		this._spot7_level1.className="ggskin ggskin_rectangle ";
		this._spot7_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 417px;';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot7_level1.setAttribute('style',hs);
		this._spot7_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot7_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot7_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot7_level1.onclick=function (e) {
			me.player.openNext("{node19}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=417;me._radar_level1.ggParameter.ry=271;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot7_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot7_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot7_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot7_level1);
		this._spot6_level1=document.createElement('div');
		this._spot6_level1.ggId="spot6 Level1";
		this._spot6_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot6_level1.ggVisible=true;
		this._spot6_level1.className="ggskin ggskin_rectangle ";
		this._spot6_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 316px;';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot6_level1.setAttribute('style',hs);
		this._spot6_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot6_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot6_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot6_level1.onclick=function (e) {
			me.player.openNext("{node18}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=316;me._radar_level1.ggParameter.ry=271;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot6_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot6_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot6_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot6_level1);
		this._spot5_level1=document.createElement('div');
		this._spot5_level1.ggId="spot5 Level1";
		this._spot5_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot5_level1.ggVisible=true;
		this._spot5_level1.className="ggskin ggskin_rectangle ";
		this._spot5_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 316px;';
		hs+='position : absolute;';
		hs+='top : 188px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot5_level1.setAttribute('style',hs);
		this._spot5_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot5_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot5_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot5_level1.onclick=function (e) {
			me.player.openNext("{node17}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=316;me._radar_level1.ggParameter.ry=188;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot5_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot5_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot5_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot5_level1);
		this._spot4_level1=document.createElement('div');
		this._spot4_level1.ggId="spot4 Level1";
		this._spot4_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot4_level1.ggVisible=true;
		this._spot4_level1.className="ggskin ggskin_rectangle ";
		this._spot4_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 171px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot4_level1.setAttribute('style',hs);
		this._spot4_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot4_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot4_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot4_level1.onclick=function (e) {
			me.player.openNext("{node16}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=183;me._radar_level1.ggParameter.ry=171;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot4_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot4_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot4_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot4_level1);
		this._spot3_level1=document.createElement('div');
		this._spot3_level1.ggId="spot3 Level1";
		this._spot3_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot3_level1.ggVisible=true;
		this._spot3_level1.className="ggskin ggskin_rectangle ";
		this._spot3_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : 354px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot3_level1.setAttribute('style',hs);
		this._spot3_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot3_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot3_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot3_level1.onclick=function (e) {
			me.player.openNext("{node15}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=196;me._radar_level1.ggParameter.ry=354;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot3_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot3_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot3_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot3_level1);
		this._spot2_level1=document.createElement('div');
		this._spot2_level1.ggId="spot2 Level1";
		this._spot2_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot2_level1.ggVisible=true;
		this._spot2_level1.className="ggskin ggskin_rectangle ";
		this._spot2_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 242px;';
		hs+='position : absolute;';
		hs+='top : 232px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot2_level1.setAttribute('style',hs);
		this._spot2_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot2_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot2_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot2_level1.onclick=function (e) {
			me.player.openNext("{node14}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=242;me._radar_level1.ggParameter.ry=232;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot2_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot2_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot2_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot2_level1);
		this._spot1_level1=document.createElement('div');
		this._spot1_level1.ggId="spot1 Level1";
		this._spot1_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot1_level1.ggVisible=true;
		this._spot1_level1.className="ggskin ggskin_rectangle ";
		this._spot1_level1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 272px;';
		hs+='position : absolute;';
		hs+='top : 169px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot1_level1.setAttribute('style',hs);
		this._spot1_level1.style[domTransform + 'Origin']='50% 50%';
		me._spot1_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot1_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot1_level1.onclick=function (e) {
			me.player.openNext("{node13}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=272;me._radar_level1.ggParameter.ry=169;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
		}
		this._spot1_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot1_level1.onmouseout=function (e) {
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._spot1_level1.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_level1.appendChild(this._spot1_level1);
		this._container_floor_plan_level1.appendChild(this._container_spots_and_radar_beam_level1);
		this._location_next_text_level1=document.createElement('div');
		this._location_next_text_level1__text=document.createElement('div');
		this._location_next_text_level1.className='ggskin ggskin_textdiv';
		this._location_next_text_level1.ggTextDiv=this._location_next_text_level1__text;
		this._location_next_text_level1.ggId="Location_next_text Level1";
		this._location_next_text_level1.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._location_next_text_level1.ggVisible=false;
		this._location_next_text_level1.className="ggskin ggskin_text ";
		this._location_next_text_level1.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._location_next_text_level1.setAttribute('style',hs);
		this._location_next_text_level1.style[domTransform + 'Origin']='0% 0%';
		this._location_next_text_level1.style[domTransform]=parameterToTransform(this._location_next_text_level1.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 5px 3px 5px;';
		hs+='overflow: hidden;';
		this._location_next_text_level1__text.setAttribute('style',hs);
		this._location_next_text_level1__text.innerHTML="";
		this._location_next_text_level1.appendChild(this._location_next_text_level1__text);
		me._location_next_text_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._location_next_text_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._location_next_text_level1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((18-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		this._container_floor_plan_level1.appendChild(this._location_next_text_level1);
		this._navigation_container.appendChild(this._container_floor_plan_level1);
		this._container_floor_plan_levelz=document.createElement('div');
		this._container_floor_plan_levelz.ggId="Container Floor Plan LevelZ";
		this._container_floor_plan_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_floor_plan_levelz.ggVisible=true;
		this._container_floor_plan_levelz.className="ggskin ggskin_container ";
		this._container_floor_plan_levelz.ggType='container';
		hs ='';
		hs+='height : 606px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 616px;';
		hs+='pointer-events:none;';
		this._container_floor_plan_levelz.setAttribute('style',hs);
		this._container_floor_plan_levelz.style[domTransform + 'Origin']='0% 0%';
		me._container_floor_plan_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._container_floor_plan_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._container_floor_plan_levelz.onmouseover=function (e) {
			me._zemin_kat.style[domTransition]='none';
			me._zemin_kat.style.opacity='1';
			me._zemin_kat.style.visibility=me._zemin_kat.ggVisible?'inherit':'hidden';
		}
		this._container_floor_plan_levelz.onmouseout=function (e) {
			me._zemin_kat.style[domTransition]='none';
			me._zemin_kat.style.opacity='0.8';
			me._zemin_kat.style.visibility=me._zemin_kat.ggVisible?'inherit':'hidden';
		}
		this._container_floor_plan_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._zemin_kat=document.createElement('div');
		this._zemin_kat__img=document.createElement('img');
		this._zemin_kat__img.className='ggskin ggskin_image';
		this._zemin_kat__img.setAttribute('src',basePath + 'images/zemin_kat.png');
		this._zemin_kat__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._zemin_kat__img.className='ggskin ggskin_image';
		this._zemin_kat__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zemin_kat__img);
		this._zemin_kat.appendChild(this._zemin_kat__img);
		this._zemin_kat.ggId="Zemin Kat";
		this._zemin_kat.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zemin_kat.ggVisible=true;
		this._zemin_kat.className="ggskin ggskin_image ";
		this._zemin_kat.ggType='image';
		hs ='';
		hs+='height : 606px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 616px;';
		hs+='pointer-events:auto;';
		this._zemin_kat.setAttribute('style',hs);
		this._zemin_kat.style[domTransform + 'Origin']='50% 50%';
		me._zemin_kat.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zemin_kat.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zemin_kat.ggUpdatePosition=function (useTransition) {
		}
		this._container_floor_plan_levelz.appendChild(this._zemin_kat);
		this._container_spots_and_radar_beam_levelz=document.createElement('div');
		this._container_spots_and_radar_beam_levelz.ggId="Container spots and radar beam LevelZ";
		this._container_spots_and_radar_beam_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_spots_and_radar_beam_levelz.ggVisible=true;
		this._container_spots_and_radar_beam_levelz.className="ggskin ggskin_container ";
		this._container_spots_and_radar_beam_levelz.ggType='container';
		hs ='';
		hs+='height : 606px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 616px;';
		hs+='pointer-events:none;';
		this._container_spots_and_radar_beam_levelz.setAttribute('style',hs);
		this._container_spots_and_radar_beam_levelz.style[domTransform + 'Origin']='50% 50%';
		me._container_spots_and_radar_beam_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._container_spots_and_radar_beam_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._container_spots_and_radar_beam_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._radar_levelz=document.createElement('div');
		this._radar_levelz__img=document.createElement('img');
		this._radar_levelz__img.className='ggskin ggskin_image';
		this._radar_levelz__img.setAttribute('src',basePath + 'images/radar_levelz.png');
		this._radar_levelz__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._radar_levelz__img.className='ggskin ggskin_image';
		this._radar_levelz__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radar_levelz__img);
		this._radar_levelz.appendChild(this._radar_levelz__img);
		this._radar_levelz.ggId="radar LevelZ";
		this._radar_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_levelz.ggVisible=true;
		this._radar_levelz.className="ggskin ggskin_image ";
		this._radar_levelz.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._radar_levelz.setAttribute('style',hs);
		this._radar_levelz.style[domTransform + 'Origin']='50% 50%';
		me._radar_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radar_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radar_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._radar_levelz);
		this._spot19_levelz=document.createElement('div');
		this._spot19_levelz.ggId="spot19 LevelZ";
		this._spot19_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot19_levelz.ggVisible=true;
		this._spot19_levelz.className="ggskin ggskin_rectangle ";
		this._spot19_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 89px;';
		hs+='position : absolute;';
		hs+='top : 181px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot19_levelz.setAttribute('style',hs);
		this._spot19_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot19_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot19_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot19_levelz.onclick=function (e) {
			me.player.openNext("{node31}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=89;me._radar_levelz.ggParameter.ry=181;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot19_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot19_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot19_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot19_levelz);
		this._spot18_levelz=document.createElement('div');
		this._spot18_levelz.ggId="spot18 LevelZ";
		this._spot18_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot18_levelz.ggVisible=true;
		this._spot18_levelz.className="ggskin ggskin_rectangle ";
		this._spot18_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot18_levelz.setAttribute('style',hs);
		this._spot18_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot18_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot18_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot18_levelz.onclick=function (e) {
			me.player.openNext("{node30}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=280;me._radar_levelz.ggParameter.ry=46;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot18_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot18_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot18_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot18_levelz);
		this._spot17_levelz=document.createElement('div');
		this._spot17_levelz.ggId="spot17 LevelZ";
		this._spot17_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot17_levelz.ggVisible=true;
		this._spot17_levelz.className="ggskin ggskin_rectangle ";
		this._spot17_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 423px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot17_levelz.setAttribute('style',hs);
		this._spot17_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot17_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot17_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot17_levelz.onclick=function (e) {
			me.player.openNext("{node27}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=41;me._radar_levelz.ggParameter.ry=423;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot17_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot17_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot17_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot17_levelz);
		this._spot16_levelz=document.createElement('div');
		this._spot16_levelz.ggId="spot16 LevelZ";
		this._spot16_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot16_levelz.ggVisible=true;
		this._spot16_levelz.className="ggskin ggskin_rectangle ";
		this._spot16_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 264px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot16_levelz.setAttribute('style',hs);
		this._spot16_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot16_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot16_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot16_levelz.onclick=function (e) {
			me.player.openNext("{node26}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=264;me._radar_levelz.ggParameter.ry=279;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot16_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot16_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot16_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot16_levelz);
		this._spot15_levelz=document.createElement('div');
		this._spot15_levelz.ggId="spot15 LevelZ";
		this._spot15_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot15_levelz.ggVisible=true;
		this._spot15_levelz.className="ggskin ggskin_rectangle ";
		this._spot15_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 213px;';
		hs+='position : absolute;';
		hs+='top : 436px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot15_levelz.setAttribute('style',hs);
		this._spot15_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot15_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot15_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot15_levelz.onclick=function (e) {
			me.player.openNext("{node25}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=213;me._radar_levelz.ggParameter.ry=436;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot15_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot15_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot15_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot15_levelz);
		this._spot14_levelz=document.createElement('div');
		this._spot14_levelz.ggId="spot14 LevelZ";
		this._spot14_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot14_levelz.ggVisible=true;
		this._spot14_levelz.className="ggskin ggskin_rectangle ";
		this._spot14_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='top : 355px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot14_levelz.setAttribute('style',hs);
		this._spot14_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot14_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot14_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot14_levelz.onclick=function (e) {
			me.player.openNext("{node24}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=185;me._radar_levelz.ggParameter.ry=355;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot14_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot14_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot14_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot14_levelz);
		this._spot13_levelz=document.createElement('div');
		this._spot13_levelz.ggId="spot13 LevelZ";
		this._spot13_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot13_levelz.ggVisible=true;
		this._spot13_levelz.className="ggskin ggskin_rectangle ";
		this._spot13_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 155px;';
		hs+='position : absolute;';
		hs+='top : 281px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot13_levelz.setAttribute('style',hs);
		this._spot13_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot13_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot13_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot13_levelz.onclick=function (e) {
			me.player.openNext("{node23}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=155;me._radar_levelz.ggParameter.ry=281;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot13_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot13_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot13_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot13_levelz);
		this._spot12_levelz=document.createElement('div');
		this._spot12_levelz.ggId="spot12 LevelZ";
		this._spot12_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot12_levelz.ggVisible=true;
		this._spot12_levelz.className="ggskin ggskin_rectangle ";
		this._spot12_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 114px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot12_levelz.setAttribute('style',hs);
		this._spot12_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot12_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot12_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot12_levelz.onclick=function (e) {
			me.player.openNext("{node12}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=282;me._radar_levelz.ggParameter.ry=114;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot12_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sol Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot12_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot12_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot12_levelz);
		this._spot11_levelz=document.createElement('div');
		this._spot11_levelz.ggId="spot11 LevelZ";
		this._spot11_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot11_levelz.ggVisible=true;
		this._spot11_levelz.className="ggskin ggskin_rectangle ";
		this._spot11_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot11_levelz.setAttribute('style',hs);
		this._spot11_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot11_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot11_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot11_levelz.onclick=function (e) {
			me.player.openNext("{node11}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=141;me._radar_levelz.ggParameter.ry=119;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot11_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Orta Alan&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Orta Alan&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot11_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot11_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot11_levelz);
		this._spot10_levelz=document.createElement('div');
		this._spot10_levelz.ggId="spot10 LevelZ";
		this._spot10_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot10_levelz.ggVisible=true;
		this._spot10_levelz.className="ggskin ggskin_rectangle ";
		this._spot10_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 144px;';
		hs+='position : absolute;';
		hs+='top : 181px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot10_levelz.setAttribute('style',hs);
		this._spot10_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot10_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot10_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot10_levelz.onclick=function (e) {
			me.player.openNext("{node10}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=144;me._radar_levelz.ggParameter.ry=181;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot10_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot10_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot10_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot10_levelz);
		this._spot9_levelz=document.createElement('div');
		this._spot9_levelz.ggId="spot9 LevelZ";
		this._spot9_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot9_levelz.ggVisible=true;
		this._spot9_levelz.className="ggskin ggskin_rectangle ";
		this._spot9_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 273px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot9_levelz.setAttribute('style',hs);
		this._spot9_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot9_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot9_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot9_levelz.onclick=function (e) {
			me.player.openNext("{node9}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=273;me._radar_levelz.ggParameter.ry=186;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot9_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot9_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot9_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot9_levelz);
		this._spot8_levelz=document.createElement('div');
		this._spot8_levelz.ggId="spot8 LevelZ";
		this._spot8_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot8_levelz.ggVisible=true;
		this._spot8_levelz.className="ggskin ggskin_rectangle ";
		this._spot8_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 364px;';
		hs+='position : absolute;';
		hs+='top : 312px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot8_levelz.setAttribute('style',hs);
		this._spot8_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot8_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot8_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot8_levelz.onclick=function (e) {
			me.player.openNext("{node8}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=364;me._radar_levelz.ggParameter.ry=312;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._spot8_levelz.style[domTransition]='none';
			me._spot8_levelz.ggParameter.rx=0;me._spot8_levelz.ggParameter.ry=0;
			me._spot8_levelz.style[domTransform]=parameterToTransform(me._spot8_levelz.ggParameter);
		}
		this._spot8_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Orta Sa\u011f Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Orta Sa\u011f Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot8_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot8_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot8_levelz);
		this._spot7_levelz=document.createElement('div');
		this._spot7_levelz.ggId="spot7 LevelZ";
		this._spot7_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot7_levelz.ggVisible=true;
		this._spot7_levelz.className="ggskin ggskin_rectangle ";
		this._spot7_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 362px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot7_levelz.setAttribute('style',hs);
		this._spot7_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot7_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot7_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot7_levelz.onclick=function (e) {
			me.player.openNext("{node7}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=362;me._radar_levelz.ggParameter.ry=260;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._spot7_levelz.style[domTransition]='none';
			me._spot7_levelz.ggParameter.rx=0;me._spot7_levelz.ggParameter.ry=0;
			me._spot7_levelz.style[domTransform]=parameterToTransform(me._spot7_levelz.ggParameter);
		}
		this._spot7_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot7_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot7_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot7_levelz);
		this._spot6_levelz=document.createElement('div');
		this._spot6_levelz.ggId="spot6 LevelZ";
		this._spot6_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot6_levelz.ggVisible=true;
		this._spot6_levelz.className="ggskin ggskin_rectangle ";
		this._spot6_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 359px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot6_levelz.setAttribute('style',hs);
		this._spot6_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot6_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot6_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot6_levelz.onclick=function (e) {
			me.player.openNext("{node6}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=359;me._radar_levelz.ggParameter.ry=187;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._spot6_levelz.style[domTransition]='none';
			me._spot6_levelz.ggParameter.rx=0;me._spot6_levelz.ggParameter.ry=0;
			me._spot6_levelz.style[domTransform]=parameterToTransform(me._spot6_levelz.ggParameter);
		}
		this._spot6_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Sa\u011f Taraf&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot6_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot6_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot6_levelz);
		this._spot5_levelz=document.createElement('div');
		this._spot5_levelz.ggId="spot5 LevelZ";
		this._spot5_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot5_levelz.ggVisible=true;
		this._spot5_levelz.className="ggskin ggskin_rectangle ";
		this._spot5_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 451px;';
		hs+='position : absolute;';
		hs+='top : 184px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot5_levelz.setAttribute('style',hs);
		this._spot5_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot5_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot5_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot5_levelz.onclick=function (e) {
			me.player.openNext("{node5}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=451;me._radar_levelz.ggParameter.ry=184;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._spot5_levelz.style[domTransition]='none';
			me._spot5_levelz.ggParameter.rx=0;me._spot5_levelz.ggParameter.ry=0;
			me._spot5_levelz.style[domTransform]=parameterToTransform(me._spot5_levelz.ggParameter);
		}
		this._spot5_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Yemek Salonu Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Yemek Salonu Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot5_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot5_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot5_levelz);
		this._spot4_levelz=document.createElement('div');
		this._spot4_levelz.ggId="spot4 LevelZ";
		this._spot4_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot4_levelz.ggVisible=true;
		this._spot4_levelz.className="ggskin ggskin_rectangle ";
		this._spot4_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 369px;';
		hs+='position : absolute;';
		hs+='top : 433px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot4_levelz.setAttribute('style',hs);
		this._spot4_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot4_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot4_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot4_levelz.onclick=function (e) {
			me.player.openNext("{node4}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=369;me._radar_levelz.ggParameter.ry=433;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._spot4_levelz.style[domTransition]='none';
			me._spot4_levelz.ggParameter.rx=0;me._spot4_levelz.ggParameter.ry=0;
			me._spot4_levelz.style[domTransform]=parameterToTransform(me._spot4_levelz.ggParameter);
		}
		this._spot4_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Giri\u015f Sa\u011f B\xf6l\xfcm&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Giri\u015f Sa\u011f B\xf6l\xfcm&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot4_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot4_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot4_levelz);
		this._spot3_levelz=document.createElement('div');
		this._spot3_levelz.ggId="spot3 LevelZ";
		this._spot3_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot3_levelz.ggVisible=true;
		this._spot3_levelz.className="ggskin ggskin_rectangle ";
		this._spot3_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 248px;';
		hs+='position : absolute;';
		hs+='top : 560px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot3_levelz.setAttribute('style',hs);
		this._spot3_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot3_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot3_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot3_levelz.onclick=function (e) {
			me.player.openNext("{node3}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=248;me._radar_levelz.ggParameter.ry=560;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._spot3_levelz.style[domTransition]='none';
			me._spot3_levelz.ggParameter.rx=0;me._spot3_levelz.ggParameter.ry=0;
			me._spot3_levelz.style[domTransform]=parameterToTransform(me._spot3_levelz.ggParameter);
		}
		this._spot3_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Giri\u015f Sol B\xf6l\xfcm&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Giri\u015f Sol B\xf6l\xfcm&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot3_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot3_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot3_levelz);
		this._spot2_levelz=document.createElement('div');
		this._spot2_levelz.ggId="spot2 LevelZ";
		this._spot2_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot2_levelz.ggVisible=true;
		this._spot2_levelz.className="ggskin ggskin_rectangle ";
		this._spot2_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 453px;';
		hs+='position : absolute;';
		hs+='top : 432px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot2_levelz.setAttribute('style',hs);
		this._spot2_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot2_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot2_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot2_levelz.onclick=function (e) {
			me.player.openNext("{node2}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=453;me._radar_levelz.ggParameter.ry=432;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot2_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbspGiri\u015f&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbspGiri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot2_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot2_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot2_levelz);
		this._spot1_levelz=document.createElement('div');
		this._spot1_levelz.ggId="spot1 LevelZ";
		this._spot1_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spot1_levelz.ggVisible=true;
		this._spot1_levelz.className="ggskin ggskin_rectangle ";
		this._spot1_levelz.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 8px;';
		hs+='border-radius : 8px;';
		hs+='background : #ff0000;';
		hs+='border : 1px solid rgba(255,0,0,0.501961);';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 455px;';
		hs+='position : absolute;';
		hs+='top : 581px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		this._spot1_levelz.setAttribute('style',hs);
		this._spot1_levelz.style[domTransform + 'Origin']='50% 50%';
		me._spot1_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spot1_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._spot1_levelz.onclick=function (e) {
			me.player.openNext("{node1}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=455;me._radar_levelz.ggParameter.ry=581;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
		}
		this._spot1_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot1_levelz.onmouseout=function (e) {
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._spot1_levelz.ggUpdatePosition=function (useTransition) {
		}
		this._container_spots_and_radar_beam_levelz.appendChild(this._spot1_levelz);
		this._container_floor_plan_levelz.appendChild(this._container_spots_and_radar_beam_levelz);
		this._location_next_text_levelz=document.createElement('div');
		this._location_next_text_levelz__text=document.createElement('div');
		this._location_next_text_levelz.className='ggskin ggskin_textdiv';
		this._location_next_text_levelz.ggTextDiv=this._location_next_text_levelz__text;
		this._location_next_text_levelz.ggId="Location_next_text LevelZ";
		this._location_next_text_levelz.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._location_next_text_levelz.ggVisible=false;
		this._location_next_text_levelz.className="ggskin ggskin_text ";
		this._location_next_text_levelz.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -109px;';
		hs+='position : absolute;';
		hs+='top : 265px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._location_next_text_levelz.setAttribute('style',hs);
		this._location_next_text_levelz.style[domTransform + 'Origin']='0% 0%';
		this._location_next_text_levelz.style[domTransform]=parameterToTransform(this._location_next_text_levelz.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 5px 3px 5px;';
		hs+='overflow: hidden;';
		this._location_next_text_levelz__text.setAttribute('style',hs);
		this._location_next_text_levelz__text.innerHTML="";
		this._location_next_text_levelz.appendChild(this._location_next_text_levelz__text);
		me._location_next_text_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._location_next_text_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._location_next_text_levelz.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((18-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		this._container_floor_plan_levelz.appendChild(this._location_next_text_levelz);
		this._navigation_container.appendChild(this._container_floor_plan_levelz);
		this._container_level_selector=document.createElement('div');
		this._container_level_selector.ggId="Container Level Selector";
		this._container_level_selector.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_level_selector.ggVisible=true;
		this._container_level_selector.className="ggskin ggskin_container ";
		this._container_level_selector.ggType='container';
		hs ='';
		hs+='height : 220px;';
		hs+='left : -70px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		this._container_level_selector.setAttribute('style',hs);
		this._container_level_selector.style[domTransform + 'Origin']='50% 50%';
		me._container_level_selector.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._container_level_selector.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._container_level_selector.ggUpdatePosition=function (useTransition) {
		}
		this._arrow_here_level=document.createElement('div');
		this._arrow_here_level__img=document.createElement('img');
		this._arrow_here_level__img.className='ggskin ggskin_svg';
		this._arrow_here_level__img.setAttribute('src',basePath + 'images/arrow_here_level.png');
		this._arrow_here_level__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._arrow_here_level__img['ondragstart']=function() { return false; };
		this._arrow_here_level.appendChild(this._arrow_here_level__img);
		this._arrow_here_level.ggId="arrow_here_level";
		this._arrow_here_level.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow_here_level.ggVisible=true;
		this._arrow_here_level.className="ggskin ggskin_svg ";
		this._arrow_here_level.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 108px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._arrow_here_level.setAttribute('style',hs);
		this._arrow_here_level.style[domTransform + 'Origin']='50% 50%';
		me._arrow_here_level.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._arrow_here_level.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._arrow_here_level.ggUpdatePosition=function (useTransition) {
		}
		this._container_level_selector.appendChild(this._arrow_here_level);
		this._btn_to_levelz=document.createElement('div');
		this._btn_to_levelz__text=document.createElement('div');
		this._btn_to_levelz.className='ggskin ggskin_textdiv';
		this._btn_to_levelz.ggTextDiv=this._btn_to_levelz__text;
		this._btn_to_levelz.ggId="btn_to_levelZ";
		this._btn_to_levelz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_to_levelz.ggVisible=true;
		this._btn_to_levelz.className="ggskin ggskin_text ";
		this._btn_to_levelz.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._btn_to_levelz.setAttribute('style',hs);
		this._btn_to_levelz.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 7px 5px 7px;';
		hs+='overflow: hidden;';
		this._btn_to_levelz__text.setAttribute('style',hs);
		this._btn_to_levelz__text.innerHTML="<pre style=\"font-size:1.7em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Zemin&nbsp;<\/pre>";
		this._btn_to_levelz.appendChild(this._btn_to_levelz__text);
		me._btn_to_levelz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_to_levelz.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_to_levelz.onclick=function (e) {
			me._container_floor_plan_levelz.style[domTransition]='none';
			me._container_floor_plan_levelz.style.visibility=(Number(me._container_floor_plan_levelz.style.opacity)>0||!me._container_floor_plan_levelz.style.opacity)?'inherit':'hidden';
			me._container_floor_plan_levelz.ggVisible=true;
			me._container_floor_plan_level1.style[domTransition]='none';
			me._container_floor_plan_level1.style.visibility='hidden';
			me._container_floor_plan_level1.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._arrow_here_level.style[domTransition]='none';
			} else {
				me._arrow_here_level.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._arrow_here_level.ggParameter.rx=0;me._arrow_here_level.ggParameter.ry=45;
			me._arrow_here_level.style[domTransform]=parameterToTransform(me._arrow_here_level.ggParameter);
			me.player.openNext("{node1}","");
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=455;me._radar_levelz.ggParameter.ry=581;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._btn_on_navigationcontainer.onclick();
		}
		this._btn_to_levelz.onmouseover=function (e) {
			me._location_next_text_levelz.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
			me._location_next_text_levelz.ggTextDiv.innerHTML=me._location_next_text_levelz.ggText;
			if (me._location_next_text_levelz.ggUpdateText) {
				me._location_next_text_levelz.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Ana Giri\u015f&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_levelz.ggUpdatePosition) {
				me._location_next_text_levelz.ggUpdatePosition();
			}
			me._location_next_text_levelz.ggTextDiv.scrollTop = 0;
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=1;me._location_next_text_levelz.ggParameter.sy=1;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._btn_to_levelz.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._btn_to_levelz__text)
					return;
				}
			}
			me._location_next_text_levelz.style[domTransition]='none';
			me._location_next_text_levelz.ggParameter.sx=0;me._location_next_text_levelz.ggParameter.sy=0;
			me._location_next_text_levelz.style[domTransform]=parameterToTransform(me._location_next_text_levelz.ggParameter);
		}
		this._btn_to_levelz.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		this._container_level_selector.appendChild(this._btn_to_levelz);
		this._btn_to_level1=document.createElement('div');
		this._btn_to_level1__text=document.createElement('div');
		this._btn_to_level1.className='ggskin ggskin_textdiv';
		this._btn_to_level1.ggTextDiv=this._btn_to_level1__text;
		this._btn_to_level1.ggId="btn_to_level1";
		this._btn_to_level1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._btn_to_level1.ggVisible=true;
		this._btn_to_level1.className="ggskin ggskin_text ";
		this._btn_to_level1.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._btn_to_level1.setAttribute('style',hs);
		this._btn_to_level1.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 7px 5px 7px;';
		hs+='overflow: hidden;';
		this._btn_to_level1__text.setAttribute('style',hs);
		this._btn_to_level1__text.innerHTML="<pre style=\"font-size:1.7em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Kat 1&nbsp;<\/pre>";
		this._btn_to_level1.appendChild(this._btn_to_level1__text);
		me._btn_to_level1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._btn_to_level1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._btn_to_level1.onclick=function (e) {
			me._container_floor_plan_level1.style[domTransition]='none';
			me._container_floor_plan_level1.style.visibility=(Number(me._container_floor_plan_level1.style.opacity)>0||!me._container_floor_plan_level1.style.opacity)?'inherit':'hidden';
			me._container_floor_plan_level1.ggVisible=true;
			me._container_floor_plan_levelz.style[domTransition]='none';
			me._container_floor_plan_levelz.style.visibility='hidden';
			me._container_floor_plan_levelz.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._arrow_here_level.style[domTransition]='none';
			} else {
				me._arrow_here_level.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._arrow_here_level.ggParameter.rx=0;me._arrow_here_level.ggParameter.ry=0;
			me._arrow_here_level.style[domTransform]=parameterToTransform(me._arrow_here_level.ggParameter);
			me.player.openNext("{node13}","");
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.rx=272;me._radar_level1.ggParameter.ry=169;
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._radar_level1.style[domTransition]='none';
			me._radar_level1.ggParameter.a="0.0000";
			me._radar_level1.style[domTransform]=parameterToTransform(me._radar_level1.ggParameter);
			me._btn_on_navigationcontainer.onclick();
		}
		this._btn_to_level1.onmouseover=function (e) {
			me._location_next_text_level1.ggText="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Family Room&nbsp;<\/pre>";
			me._location_next_text_level1.ggTextDiv.innerHTML=me._location_next_text_level1.ggText;
			if (me._location_next_text_level1.ggUpdateText) {
				me._location_next_text_level1.ggUpdateText=function() {
					var hs="<pre style=\"font-size:1.3em; margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Family Room&nbsp;<\/pre>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._location_next_text_level1.ggUpdatePosition) {
				me._location_next_text_level1.ggUpdatePosition();
			}
			me._location_next_text_level1.ggTextDiv.scrollTop = 0;
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=1;me._location_next_text_level1.ggParameter.sy=1;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._btn_to_level1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._btn_to_level1__text)
					return;
				}
			}
			me._location_next_text_level1.style[domTransition]='none';
			me._location_next_text_level1.ggParameter.sx=0;me._location_next_text_level1.ggParameter.sy=0;
			me._location_next_text_level1.style[domTransform]=parameterToTransform(me._location_next_text_level1.ggParameter);
		}
		this._btn_to_level1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		this._container_level_selector.appendChild(this._btn_to_level1);
		this._navigation_container.appendChild(this._container_level_selector);
		this.divSkin.appendChild(this._navigation_container);
		this._timer_1=document.createElement('div');
		this._timer_1.ggTimestamp=this.ggCurrentTime;
		this._timer_1.ggLastIsActive=true;
		this._timer_1.ggTimeout=250;
		this._timer_1.ggId="Timer 1";
		this._timer_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._timer_1.ggVisible=true;
		this._timer_1.className="ggskin ggskin_timer ";
		this._timer_1.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._timer_1.setAttribute('style',hs);
		this._timer_1.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		me._timer_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._timer_1.ggActivate=function () {
			me.player.setVariableValue('ht_ani', !me.player.getVariableValue('ht_ani'));
		}
		this._timer_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._timer_1);
		this.player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		this.player.addListener('configloaded', function() {
			me._check_all_elements_status.onclick();
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.rx=455;me._radar_levelz.ggParameter.ry=581;
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._radar_levelz.style[domTransition]='none';
			me._radar_levelz.ggParameter.a="0.0000";
			me._radar_levelz.style[domTransform]=parameterToTransform(me._radar_levelz.ggParameter);
			me._btn_menu_open.onclick();
			me._text_info_top.ggText="<div style=\"margin-top:5px; font-family:Century Gothic;\"><strong>Ye\u015filyaka Su Villalar\u0131<\/strong><p style=\"border: 10px solid #333333; color:#ffffff; font-size:1.0em; word-wrap:break-word; margin: 0 auto;\">Villa Nehir Sanal Turu<\/p><\/div>";
			me._text_info_top.ggTextDiv.innerHTML=me._text_info_top.ggText;
			if (me._text_info_top.ggUpdateText) {
				me._text_info_top.ggUpdateText=function() {
					var hs="<div style=\"margin-top:5px; font-family:Century Gothic;\"><strong>Ye\u015filyaka Su Villalar\u0131<\/strong><p style=\"border: 10px solid #333333; color:#ffffff; font-size:1.0em; word-wrap:break-word; margin: 0 auto;\">Villa Nehir Sanal Turu<\/p><\/div>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._text_info_top.ggUpdatePosition) {
				me._text_info_top.ggUpdatePosition();
			}
			me._text_info_top.ggTextDiv.scrollTop = 0;
			if (me.player.transitionsDisabled) {
				me._arrow_here_level.style[domTransition]='none';
			} else {
				me._arrow_here_level.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._arrow_here_level.ggParameter.rx=0;me._arrow_here_level.ggParameter.ry=45;
			me._arrow_here_level.style[domTransform]=parameterToTransform(me._arrow_here_level.ggParameter);
		});
		this.player.addListener('fullscreenenter', function() {
			me._toggler_fullscreen_on.onclick();
		});
		this.player.addListener('fullscreenexit', function() {
			me._toggler_fullscreen_off.onclick();
		});
	};
	this.hotspotProxyClick=function(id) {
		if (id=='32') {
			me._spot12_level1.onclick();
		}
		if (id=='29') {
			me._spot11_level1.onclick();
		}
		if (id=='22') {
			me._spot10_level1.onclick();
		}
		if (id=='21') {
			me._spot9_level1.onclick();
		}
		if (id=='20') {
			me._spot8_level1.onclick();
		}
		if (id=='19') {
			me._spot7_level1.onclick();
		}
		if (id=='18') {
			me._spot6_level1.onclick();
		}
		if (id=='17') {
			me._spot5_level1.onclick();
		}
		if (id=='16') {
			me._spot4_level1.onclick();
		}
		if (id=='15') {
			me._spot3_level1.onclick();
		}
		if (id=='14') {
			me._spot2_level1.onclick();
		}
		if (id=='13') {
			me._spot1_level1.onclick();
		}
		if (id=='31') {
			me._spot19_levelz.onclick();
		}
		if (id=='30') {
			me._spot18_levelz.onclick();
		}
		if (id=='27') {
			me._spot17_levelz.onclick();
		}
		if (id=='26') {
			me._spot16_levelz.onclick();
		}
		if (id=='25') {
			me._spot15_levelz.onclick();
		}
		if (id=='24') {
			me._spot14_levelz.onclick();
		}
		if (id=='23') {
			me._spot13_levelz.onclick();
		}
		if (id=='12') {
			me._spot12_levelz.onclick();
		}
		if (id=='11') {
			me._spot11_levelz.onclick();
		}
		if (id=='10') {
			me._spot10_levelz.onclick();
		}
		if (id=='9') {
			me._spot9_levelz.onclick();
		}
		if (id=='8') {
			me._spot8_levelz.onclick();
		}
		if (id=='7') {
			me._spot7_levelz.onclick();
		}
		if (id=='6') {
			me._spot6_levelz.onclick();
		}
		if (id=='5') {
			me._spot5_levelz.onclick();
		}
		if (id=='4') {
			me._spot4_levelz.onclick();
		}
		if (id=='3') {
			me._spot3_levelz.onclick();
		}
		if (id=='2') {
			me._spot2_levelz.onclick();
		}
		if (id=='1') {
			me._spot1_levelz.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
		if (id=='32') {
			me._spot12_level1.onmouseover();
		}
		if (id=='29') {
			me._spot11_level1.onmouseover();
		}
		if (id=='22') {
			me._spot10_level1.onmouseover();
		}
		if (id=='21') {
			me._spot9_level1.onmouseover();
		}
		if (id=='20') {
			me._spot8_level1.onmouseover();
		}
		if (id=='19') {
			me._spot7_level1.onmouseover();
		}
		if (id=='18') {
			me._spot6_level1.onmouseover();
		}
		if (id=='17') {
			me._spot5_level1.onmouseover();
		}
		if (id=='16') {
			me._spot4_level1.onmouseover();
		}
		if (id=='15') {
			me._spot3_level1.onmouseover();
		}
		if (id=='14') {
			me._spot2_level1.onmouseover();
		}
		if (id=='13') {
			me._spot1_level1.onmouseover();
		}
		if (id=='31') {
			me._spot19_levelz.onmouseover();
		}
		if (id=='30') {
			me._spot18_levelz.onmouseover();
		}
		if (id=='27') {
			me._spot17_levelz.onmouseover();
		}
		if (id=='26') {
			me._spot16_levelz.onmouseover();
		}
		if (id=='25') {
			me._spot15_levelz.onmouseover();
		}
		if (id=='24') {
			me._spot14_levelz.onmouseover();
		}
		if (id=='23') {
			me._spot13_levelz.onmouseover();
		}
		if (id=='12') {
			me._spot12_levelz.onmouseover();
		}
		if (id=='11') {
			me._spot11_levelz.onmouseover();
		}
		if (id=='10') {
			me._spot10_levelz.onmouseover();
		}
		if (id=='9') {
			me._spot9_levelz.onmouseover();
		}
		if (id=='8') {
			me._spot8_levelz.onmouseover();
		}
		if (id=='7') {
			me._spot7_levelz.onmouseover();
		}
		if (id=='6') {
			me._spot6_levelz.onmouseover();
		}
		if (id=='5') {
			me._spot5_levelz.onmouseover();
		}
		if (id=='4') {
			me._spot4_levelz.onmouseover();
		}
		if (id=='3') {
			me._spot3_levelz.onmouseover();
		}
		if (id=='2') {
			me._spot2_levelz.onmouseover();
		}
		if (id=='1') {
			me._spot1_levelz.onmouseover();
		}
	}
	this.hotspotProxyOut=function(id) {
		if (id=='32') {
			me._spot12_level1.onmouseout();
		}
		if (id=='29') {
			me._spot11_level1.onmouseout();
		}
		if (id=='22') {
			me._spot10_level1.onmouseout();
		}
		if (id=='21') {
			me._spot9_level1.onmouseout();
		}
		if (id=='20') {
			me._spot8_level1.onmouseout();
		}
		if (id=='19') {
			me._spot7_level1.onmouseout();
		}
		if (id=='18') {
			me._spot6_level1.onmouseout();
		}
		if (id=='17') {
			me._spot5_level1.onmouseout();
		}
		if (id=='16') {
			me._spot4_level1.onmouseout();
		}
		if (id=='15') {
			me._spot3_level1.onmouseout();
		}
		if (id=='14') {
			me._spot2_level1.onmouseout();
		}
		if (id=='13') {
			me._spot1_level1.onmouseout();
		}
		if (id=='31') {
			me._spot19_levelz.onmouseout();
		}
		if (id=='30') {
			me._spot18_levelz.onmouseout();
		}
		if (id=='27') {
			me._spot17_levelz.onmouseout();
		}
		if (id=='26') {
			me._spot16_levelz.onmouseout();
		}
		if (id=='25') {
			me._spot15_levelz.onmouseout();
		}
		if (id=='24') {
			me._spot14_levelz.onmouseout();
		}
		if (id=='23') {
			me._spot13_levelz.onmouseout();
		}
		if (id=='12') {
			me._spot12_levelz.onmouseout();
		}
		if (id=='11') {
			me._spot11_levelz.onmouseout();
		}
		if (id=='10') {
			me._spot10_levelz.onmouseout();
		}
		if (id=='9') {
			me._spot9_levelz.onmouseout();
		}
		if (id=='8') {
			me._spot8_levelz.onmouseout();
		}
		if (id=='7') {
			me._spot7_levelz.onmouseout();
		}
		if (id=='6') {
			me._spot6_levelz.onmouseout();
		}
		if (id=='5') {
			me._spot5_levelz.onmouseout();
		}
		if (id=='4') {
			me._spot4_levelz.onmouseout();
		}
		if (id=='3') {
			me._spot3_levelz.onmouseout();
		}
		if (id=='2') {
			me._spot2_levelz.onmouseout();
		}
		if (id=='1') {
			me._spot1_levelz.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs1_sizechanged = function(){
		if(hotspotTemplates['HS1']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS1'].length; i++) {
				if (hotspotTemplates['HS1'][i]._animated_hotspot0.logicBlock_scaling) {
					hotspotTemplates['HS1'][i]._animated_hotspot0.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hsz_sizechanged = function(){
		if(hotspotTemplates['HSZ']) {
			var i;
			for(i = 0; i < hotspotTemplates['HSZ'].length; i++) {
				if (hotspotTemplates['HSZ'][i]._animated_hotspot.logicBlock_scaling) {
					hotspotTemplates['HSZ'][i]._animated_hotspot.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_changenodeid = function(){
		if(hotspotTemplates['HS']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS'].length; i++) {
				if (hotspotTemplates['HS'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['HS'][i]._rectangle_10.logicBlock_scaling();
				}
				if (hotspotTemplates['HS'][i]._rectangle_10.logicBlock_alpha) {
					hotspotTemplates['HS'][i]._rectangle_10.logicBlock_alpha();
				}
				if (hotspotTemplates['HS'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['HS'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['HS'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['HS'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_varchanged_ht_ani = function(){
		if(hotspotTemplates['HS']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS'].length; i++) {
				if (hotspotTemplates['HS'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['HS'][i]._rectangle_10.logicBlock_scaling();
				}
				if (hotspotTemplates['HS'][i]._rectangle_10.logicBlock_alpha) {
					hotspotTemplates['HS'][i]._rectangle_10.logicBlock_alpha();
				}
				if (hotspotTemplates['HS'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['HS'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['HS'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['HS'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_beyaz_changenodeid = function(){
		if(hotspotTemplates['HS Beyaz']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS Beyaz'].length; i++) {
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hs_beyaz_varchanged_ht_ani = function(){
		if(hotspotTemplates['HS Beyaz']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS Beyaz'].length; i++) {
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['HS Beyaz'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	this.player.addListener('changenodeid', function() {
		me.ggUserdata=me.player.userdata;
	});
	this.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._info_text_body.ggUpdateText();
		var hs='';
		if (me._radar_level1.ggParameter) {
			hs+=parameterToTransform(me._radar_level1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._radar_level1.style[domTransform]=hs;
		var hs='';
		if (me._radar_levelz.ggParameter) {
			hs+=parameterToTransform(me._radar_levelz.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._radar_levelz.style[domTransform]=hs;
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.player.setVariableValue('ht_ani', !me.player.getVariableValue('ht_ani'));
			} else {
			}
		}
	};
	this.player.addListener('timer', this.skinTimerEvent);
	function SkinHotspotClass_ht_info(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_info=document.createElement('div');
		this._ht_info.ggId="ht_info";
		this._ht_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info.ggVisible=true;
		this._ht_info.className="ggskin ggskin_hotspot ";
		this._ht_info.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_info.setAttribute('style',hs);
		this._ht_info.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_info.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_info.onclick=function (e) {
			me.player.setVariableValue('vis_info_popup', true);
			var flag=me.skin._information.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me.skin._information.style[domTransition]='none';
			} else {
				me.skin._information.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me.skin._information.ggParameter.sx=0;me.skin._information.ggParameter.sy=0;
				me.skin._information.style[domTransform]=parameterToTransform(me.skin._information.ggParameter);
			} else {
				me.skin._information.ggParameter.sx=1;me.skin._information.ggParameter.sy=1;
				me.skin._information.style[domTransform]=parameterToTransform(me.skin._information.ggParameter);
			}
			me.skin._information.ggScaleActive=!flag;
			var list=me.findElements("tt_information",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.player.setVariableValue('MyNodeNumber', me.hotspot.target);
			me.player.setVariableValue('MyPageURL', me.hotspot.url);
			me.skin._navigation_container.style[domTransition]='none';
			me.skin._navigation_container.style.visibility='hidden';
			me.skin._navigation_container.ggVisible=false;
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_info.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_info.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_info.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		this._ht_info.ggUpdatePosition=function (useTransition) {
		}
		this._tt_information=document.createElement('div');
		this._tt_information__text=document.createElement('div');
		this._tt_information.className='ggskin ggskin_textdiv';
		this._tt_information.ggTextDiv=this._tt_information__text;
		this._tt_information.ggId="tt_information";
		this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_information.ggVisible=false;
		this._tt_information.className="ggskin ggskin_text ";
		this._tt_information.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._tt_information.setAttribute('style',hs);
		this._tt_information.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_information__text.setAttribute('style',hs);
		this._tt_information__text.innerHTML=me.hotspot.title;
		this._tt_information.appendChild(this._tt_information__text);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='21px';
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_info'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		this._tt_information.ggUpdatePosition=function (useTransition) {
		}
		this._ht_info.appendChild(this._tt_information);
		this._ht_node_image=document.createElement('div');
		this._ht_node_image__img=document.createElement('img');
		this._ht_node_image__img.className='ggskin ggskin_svg';
		this._ht_node_image__img.setAttribute('src',basePath + 'images/ht_node_image.png');
		this._ht_node_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._ht_node_image__img['ondragstart']=function() { return false; };
		this._ht_node_image.appendChild(this._ht_node_image__img);
		this._ht_node_image__imgo=document.createElement('img');
		this._ht_node_image__imgo.className='ggskin ggskin_svg';
		this._ht_node_image__imgo.setAttribute('src',basePath + 'images/ht_node_image__o.png');
		this._ht_node_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		this._ht_node_image__imgo['ondragstart']=function() { return false; };
		this._ht_node_image.appendChild(this._ht_node_image__imgo);
		this._ht_node_image.ggId="ht_node_image";
		this._ht_node_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_node_image.ggVisible=true;
		this._ht_node_image.className="ggskin ggskin_svg ";
		this._ht_node_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._ht_node_image.setAttribute('style',hs);
		this._ht_node_image.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_node_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_node_image.onmouseover=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
		}
		this._ht_node_image.onmouseout=function (e) {
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
		}
		this._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		this._ht_info.appendChild(this._ht_node_image);
		this.__div = this._ht_info;
	};
	function SkinHotspotClass_hs1(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._hs1=document.createElement('div');
		this._hs1.ggId="HS1";
		this._hs1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hs1.ggVisible=true;
		this._hs1.className="ggskin ggskin_hotspot ";
		this._hs1.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._hs1.setAttribute('style',hs);
		this._hs1.style[domTransform + 'Origin']='50% 50%';
		me._hs1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hs1.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._hs1.onclick=function (e) {
			me.skin._btn_to_level1.onclick();
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._hs1.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._hs1.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me._hs1_text.style[domTransition]='none';
			me._hs1_text.style.visibility=(Number(me._hs1_text.style.opacity)>0||!me._hs1_text.style.opacity)?'inherit':'hidden';
			me._hs1_text.ggVisible=true;
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._hs1.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me._hs1_text.style[domTransition]='none';
			me._hs1_text.style.visibility='hidden';
			me._hs1_text.ggVisible=false;
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._hs1.ggUpdatePosition=function (useTransition) {
		}
		this._hs1_text=document.createElement('div');
		this._hs1_text__text=document.createElement('div');
		this._hs1_text.className='ggskin ggskin_textdiv';
		this._hs1_text.ggTextDiv=this._hs1_text__text;
		this._hs1_text.ggId="HS1_text";
		this._hs1_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hs1_text.ggVisible=false;
		this._hs1_text.className="ggskin ggskin_text ";
		this._hs1_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._hs1_text.setAttribute('style',hs);
		this._hs1_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(51,51,51,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		this._hs1_text__text.setAttribute('style',hs);
		this._hs1_text__text.innerHTML="<pre style=\"margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;1.Kat a Git&nbsp;<\/pre>";
		this._hs1_text.appendChild(this._hs1_text__text);
		me._hs1_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hs1_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hs1_text.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((18-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._hs1.appendChild(this._hs1_text);
		this._animated_hotspot0=document.createElement('div');
		this._animated_hotspot0__img=document.createElement('img');
		this._animated_hotspot0__img.className='ggskin ggskin_svg';
		this._animated_hotspot0__img.setAttribute('src',basePath + 'images/animated_hotspot0.png');
		this._animated_hotspot0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._animated_hotspot0__img['ondragstart']=function() { return false; };
		this._animated_hotspot0.appendChild(this._animated_hotspot0__img);
		this._animated_hotspot0.ggId="animated_hotspot";
		this._animated_hotspot0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._animated_hotspot0.ggVisible=true;
		this._animated_hotspot0.className="ggskin ggskin_svg ";
		this._animated_hotspot0.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._animated_hotspot0.setAttribute('style',hs);
		this._animated_hotspot0.style[domTransform + 'Origin']='50% 50%';
		me._animated_hotspot0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._animated_hotspot0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._animated_hotspot0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 480)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width >= 481) && 
				(me.player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width >= 961)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._animated_hotspot0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._animated_hotspot0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._animated_hotspot0.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._animated_hotspot0.ggCurrentLogicStateScaling == 0) {
					me._animated_hotspot0.ggParameter.sx = 0.6;
					me._animated_hotspot0.ggParameter.sy = 0.6;
					me._animated_hotspot0.style[domTransform]=parameterToTransform(me._animated_hotspot0.ggParameter);
				}
				else if (me._animated_hotspot0.ggCurrentLogicStateScaling == 1) {
					me._animated_hotspot0.ggParameter.sx = 0.8;
					me._animated_hotspot0.ggParameter.sy = 0.8;
					me._animated_hotspot0.style[domTransform]=parameterToTransform(me._animated_hotspot0.ggParameter);
				}
				else if (me._animated_hotspot0.ggCurrentLogicStateScaling == 2) {
					me._animated_hotspot0.ggParameter.sx = 1;
					me._animated_hotspot0.ggParameter.sy = 1;
					me._animated_hotspot0.style[domTransform]=parameterToTransform(me._animated_hotspot0.ggParameter);
				}
				else {
					me._animated_hotspot0.ggParameter.sx = 1;
					me._animated_hotspot0.ggParameter.sy = 1;
					me._animated_hotspot0.style[domTransform]=parameterToTransform(me._animated_hotspot0.ggParameter);
				}
			}
		}
		this._animated_hotspot0.ggUpdatePosition=function (useTransition) {
		}
		this._hs1.appendChild(this._animated_hotspot0);
		this._hs_cover_container0=document.createElement('div');
		this._hs_cover_container0.ggId="HS_cover_container";
		this._hs_cover_container0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hs_cover_container0.ggVisible=true;
		this._hs_cover_container0.className="ggskin ggskin_container ";
		this._hs_cover_container0.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._hs_cover_container0.setAttribute('style',hs);
		this._hs_cover_container0.style[domTransform + 'Origin']='50% 50%';
		me._hs_cover_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hs_cover_container0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hs_cover_container0.ggUpdatePosition=function (useTransition) {
		}
		this._hs1.appendChild(this._hs_cover_container0);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._animated_hotspot0.ggParameter) {
					hs+=parameterToTransform(me._animated_hotspot0.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._animated_hotspot0.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		this.__div = this._hs1;
	};
	function SkinHotspotClass_hsz(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._hsz=document.createElement('div');
		this._hsz.ggId="HSZ";
		this._hsz.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hsz.ggVisible=true;
		this._hsz.className="ggskin ggskin_hotspot ";
		this._hsz.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._hsz.setAttribute('style',hs);
		this._hsz.style[domTransform + 'Origin']='50% 50%';
		me._hsz.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hsz.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._hsz.onclick=function (e) {
			me.skin._btn_to_levelz.onclick();
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._hsz.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._hsz.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me._hsz_text.style[domTransition]='none';
			me._hsz_text.style.visibility=(Number(me._hsz_text.style.opacity)>0||!me._hsz_text.style.opacity)?'inherit':'hidden';
			me._hsz_text.ggVisible=true;
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._hsz.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me._hsz_text.style[domTransition]='none';
			me._hsz_text.style.visibility='hidden';
			me._hsz_text.ggVisible=false;
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._hsz.ggUpdatePosition=function (useTransition) {
		}
		this._hsz_text=document.createElement('div');
		this._hsz_text__text=document.createElement('div');
		this._hsz_text.className='ggskin ggskin_textdiv';
		this._hsz_text.ggTextDiv=this._hsz_text__text;
		this._hsz_text.ggId="HSZ_text";
		this._hsz_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hsz_text.ggVisible=false;
		this._hsz_text.className="ggskin ggskin_text ";
		this._hsz_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._hsz_text.setAttribute('style',hs);
		this._hsz_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(51,51,51,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		this._hsz_text__text.setAttribute('style',hs);
		this._hsz_text__text.innerHTML="<pre style=\"margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;Zemin Kat'a Git&nbsp;<\/pre>";
		this._hsz_text.appendChild(this._hsz_text__text);
		me._hsz_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hsz_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hsz_text.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((18-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._hsz.appendChild(this._hsz_text);
		this._animated_hotspot=document.createElement('div');
		this._animated_hotspot__img=document.createElement('img');
		this._animated_hotspot__img.className='ggskin ggskin_svg';
		this._animated_hotspot__img.setAttribute('src',basePath + 'images/animated_hotspot.png');
		this._animated_hotspot__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._animated_hotspot__img['ondragstart']=function() { return false; };
		this._animated_hotspot.appendChild(this._animated_hotspot__img);
		this._animated_hotspot.ggId="animated_hotspot";
		this._animated_hotspot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._animated_hotspot.ggVisible=true;
		this._animated_hotspot.className="ggskin ggskin_svg ";
		this._animated_hotspot.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._animated_hotspot.setAttribute('style',hs);
		this._animated_hotspot.style[domTransform + 'Origin']='50% 50%';
		me._animated_hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._animated_hotspot.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._animated_hotspot.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 480)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width >= 481) && 
				(me.player.getViewerSize().width <= 960)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width >= 961)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._animated_hotspot.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._animated_hotspot.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._animated_hotspot.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._animated_hotspot.ggCurrentLogicStateScaling == 0) {
					me._animated_hotspot.ggParameter.sx = 0.6;
					me._animated_hotspot.ggParameter.sy = 0.6;
					me._animated_hotspot.style[domTransform]=parameterToTransform(me._animated_hotspot.ggParameter);
				}
				else if (me._animated_hotspot.ggCurrentLogicStateScaling == 1) {
					me._animated_hotspot.ggParameter.sx = 0.8;
					me._animated_hotspot.ggParameter.sy = 0.8;
					me._animated_hotspot.style[domTransform]=parameterToTransform(me._animated_hotspot.ggParameter);
				}
				else if (me._animated_hotspot.ggCurrentLogicStateScaling == 2) {
					me._animated_hotspot.ggParameter.sx = 1;
					me._animated_hotspot.ggParameter.sy = 1;
					me._animated_hotspot.style[domTransform]=parameterToTransform(me._animated_hotspot.ggParameter);
				}
				else {
					me._animated_hotspot.ggParameter.sx = 1;
					me._animated_hotspot.ggParameter.sy = 1;
					me._animated_hotspot.style[domTransform]=parameterToTransform(me._animated_hotspot.ggParameter);
				}
			}
		}
		this._animated_hotspot.ggUpdatePosition=function (useTransition) {
		}
		this._hsz.appendChild(this._animated_hotspot);
		this._hs_cover_container=document.createElement('div');
		this._hs_cover_container.ggId="HS_cover_container";
		this._hs_cover_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hs_cover_container.ggVisible=true;
		this._hs_cover_container.className="ggskin ggskin_container ";
		this._hs_cover_container.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._hs_cover_container.setAttribute('style',hs);
		this._hs_cover_container.style[domTransform + 'Origin']='50% 50%';
		me._hs_cover_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hs_cover_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hs_cover_container.ggUpdatePosition=function (useTransition) {
		}
		this._hsz.appendChild(this._hs_cover_container);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._animated_hotspot.ggParameter) {
					hs+=parameterToTransform(me._animated_hotspot.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._animated_hotspot.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		this.__div = this._hsz;
	};
	function SkinHotspotClass_hs(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._hs=document.createElement('div');
		this._hs.ggId="HS";
		this._hs.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		this._hs.ggVisible=true;
		this._hs.className="ggskin ggskin_hotspot ";
		this._hs.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._hs.setAttribute('style',hs);
		this._hs.style[domTransform + 'Origin']='50% 50%';
		this._hs.style[domTransform]=parameterToTransform(this._hs.ggParameter);
		me._hs.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hs.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._hs.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
			me.skin._hs.onclick();
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._hs.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._hs.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me._hs_text0.style[domTransition]='none';
			me._hs_text0.style.visibility=(Number(me._hs_text0.style.opacity)>0||!me._hs_text0.style.opacity)?'inherit':'hidden';
			me._hs_text0.ggVisible=true;
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._hs.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me._hs_text0.style[domTransition]='none';
			me._hs_text0.style.visibility='hidden';
			me._hs_text0.ggVisible=false;
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._hs.ggUpdatePosition=function (useTransition) {
		}
		this._ht_image0=document.createElement('div');
		this._ht_image0.ggId="ht_image";
		this._ht_image0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_image0.ggVisible=true;
		this._ht_image0.className="ggskin ggskin_container ";
		this._ht_image0.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -18px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._ht_image0.setAttribute('style',hs);
		this._ht_image0.style[domTransform + 'Origin']='50% 50%';
		me._ht_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_image0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_image0.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_10=document.createElement('div');
		this._rectangle_10.ggId="Rectangle 1";
		this._rectangle_10.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._rectangle_10.ggVisible=true;
		this._rectangle_10.className="ggskin ggskin_rectangle ";
		this._rectangle_10.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #aa0000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._rectangle_10.setAttribute('style',hs);
		this._rectangle_10.style[domTransform + 'Origin']='50% 50%';
		this._rectangle_10.style[domTransform]=parameterToTransform(this._rectangle_10.ggParameter);
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
					me._rectangle_10.ggParameter.sx = 1;
					me._rectangle_10.ggParameter.sy = 1;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
				else {
					me._rectangle_10.ggParameter.sx = 0.5;
					me._rectangle_10.ggParameter.sy = 0.5;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
			}
		}
		me._rectangle_10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_10.style.visibility="hidden";
					me._rectangle_10.style.opacity=0;
				}
				else {
					me._rectangle_10.style.visibility=me._rectangle_10.ggVisible?'inherit':'hidden';
					me._rectangle_10.style.opacity=1;
				}
			}
		}
		this._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		this._ht_image0.appendChild(this._rectangle_10);
		this._rectangle_20=document.createElement('div');
		this._rectangle_20.ggId="Rectangle 2";
		this._rectangle_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_20.ggVisible=true;
		this._rectangle_20.className="ggskin ggskin_rectangle ";
		this._rectangle_20.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ff0000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 3px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._rectangle_20.setAttribute('style',hs);
		this._rectangle_20.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_20.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
					me._rectangle_20.ggParameter.sx = 0.5;
					me._rectangle_20.ggParameter.sy = 0.5;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
				else {
					me._rectangle_20.ggParameter.sx = 1;
					me._rectangle_20.ggParameter.sy = 1;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
			}
		}
		me._rectangle_20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_20.style.visibility=me._rectangle_20.ggVisible?'inherit':'hidden';
					me._rectangle_20.style.opacity=1;
				}
				else {
					me._rectangle_20.style.visibility="hidden";
					me._rectangle_20.style.opacity=0;
				}
			}
		}
		this._rectangle_20.ggUpdatePosition=function (useTransition) {
		}
		this._ht_image0.appendChild(this._rectangle_20);
		this._hs_text0=document.createElement('div');
		this._hs_text0__text=document.createElement('div');
		this._hs_text0.className='ggskin ggskin_textdiv';
		this._hs_text0.ggTextDiv=this._hs_text0__text;
		this._hs_text0.ggId="HS_text";
		this._hs_text0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hs_text0.ggVisible=false;
		this._hs_text0.className="ggskin ggskin_text ";
		this._hs_text0.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._hs_text0.setAttribute('style',hs);
		this._hs_text0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(51,51,51,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._hs_text0__text.setAttribute('style',hs);
		this._hs_text0__text.innerHTML="<pre style=\"margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;"+me.hotspot.title+"&nbsp;<\/pre>";
		this._hs_text0.appendChild(this._hs_text0__text);
		me._hs_text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hs_text0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hs_text0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((18-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._ht_image0.appendChild(this._hs_text0);
		this._hs.appendChild(this._ht_image0);
		this.__div = this._hs;
	};
	function SkinHotspotClass_hs_beyaz(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._hs_beyaz=document.createElement('div');
		this._hs_beyaz.ggId="HS Beyaz";
		this._hs_beyaz.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		this._hs_beyaz.ggVisible=true;
		this._hs_beyaz.className="ggskin ggskin_hotspot ";
		this._hs_beyaz.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._hs_beyaz.setAttribute('style',hs);
		this._hs_beyaz.style[domTransform + 'Origin']='50% 50%';
		this._hs_beyaz.style[domTransform]=parameterToTransform(this._hs_beyaz.ggParameter);
		me._hs_beyaz.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hs_beyaz.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._hs_beyaz.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
			me.skin._hs_beyaz.onclick();
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._hs_beyaz.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._hs_beyaz.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me._hs_text.style[domTransition]='none';
			me._hs_text.style.visibility=(Number(me._hs_text.style.opacity)>0||!me._hs_text.style.opacity)?'inherit':'hidden';
			me._hs_text.ggVisible=true;
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._hs_beyaz.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me._hs_text.style[domTransition]='none';
			me._hs_text.style.visibility='hidden';
			me._hs_text.ggVisible=false;
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._hs_beyaz.ggUpdatePosition=function (useTransition) {
		}
		this._ht_image=document.createElement('div');
		this._ht_image.ggId="ht_image";
		this._ht_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_image.ggVisible=true;
		this._ht_image.className="ggskin ggskin_container ";
		this._ht_image.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._ht_image.setAttribute('style',hs);
		this._ht_image.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_image.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className="ggskin ggskin_rectangle ";
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		this._rectangle_1.style[domTransform]=parameterToTransform(this._rectangle_1.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.5;
					me._rectangle_1.ggParameter.sy = 0.5;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_1.style.visibility="hidden";
					me._rectangle_1.style.opacity=0;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._ht_image.appendChild(this._rectangle_1);
		this._hs_text=document.createElement('div');
		this._hs_text__text=document.createElement('div');
		this._hs_text.className='ggskin ggskin_textdiv';
		this._hs_text.ggTextDiv=this._hs_text__text;
		this._hs_text.ggId="HS_text";
		this._hs_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hs_text.ggVisible=false;
		this._hs_text.className="ggskin ggskin_text ";
		this._hs_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._hs_text.setAttribute('style',hs);
		this._hs_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(51,51,51,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._hs_text__text.setAttribute('style',hs);
		this._hs_text__text.innerHTML="<pre style=\"margin-top:0px; margin-bottom:0px; font-family:Century Gothic;\">&nbsp;"+me.hotspot.title+"&nbsp;<\/pre>";
		this._hs_text.appendChild(this._hs_text__text);
		me._hs_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hs_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hs_text.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((18-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._ht_image.appendChild(this._hs_text);
		this._rectangle_2=document.createElement('div');
		this._rectangle_2.ggId="Rectangle 2";
		this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2.ggVisible=true;
		this._rectangle_2.className="ggskin ggskin_rectangle ";
		this._rectangle_2.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._rectangle_2.setAttribute('style',hs);
		this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.5;
					me._rectangle_2.ggParameter.sy = 0.5;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
				else {
					me._rectangle_2.style.visibility="hidden";
					me._rectangle_2.style.opacity=0;
				}
			}
		}
		this._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		this._ht_image.appendChild(this._rectangle_2);
		this._hs_beyaz.appendChild(this._ht_image);
		this.__div = this._hs_beyaz;
	};
	this.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
		} else
		if (hotspot.skinid=='HS1') {
			hotspot.skinid = 'HS1';
			hsinst = new SkinHotspotClass_hs1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hs1_sizechanged();;
		} else
		if (hotspot.skinid=='HSZ') {
			hotspot.skinid = 'HSZ';
			hsinst = new SkinHotspotClass_hsz(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hsz_sizechanged();;
		} else
		if (hotspot.skinid=='HS') {
			hotspot.skinid = 'HS';
			hsinst = new SkinHotspotClass_hs(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hs_changenodeid();;
			me.callChildLogicBlocksHotspot_hs_varchanged_ht_ani();;
		} else
		{
			hotspot.skinid = 'HS Beyaz';
			hsinst = new SkinHotspotClass_hs_beyaz(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hs_beyaz_changenodeid();;
			me.callChildLogicBlocksHotspot_hs_beyaz_varchanged_ht_ani();;
		}
		return hsinst;
	}
	this.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['HS1']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS1'].length; i++) {
				hotspotTemplates['HS1'][i] = null;
			}
		}
		if(hotspotTemplates['HSZ']) {
			var i;
			for(i = 0; i < hotspotTemplates['HSZ'].length; i++) {
				hotspotTemplates['HSZ'][i] = null;
			}
		}
		if(hotspotTemplates['HS']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS'].length; i++) {
				hotspotTemplates['HS'][i] = null;
			}
		}
		if(hotspotTemplates['HS Beyaz']) {
			var i;
			for(i = 0; i < hotspotTemplates['HS Beyaz'].length; i++) {
				hotspotTemplates['HS Beyaz'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	this.addSkin();
	me._top_right_corner_elements.logicBlock_scaling();
	me._rectangle_bottom.logicBlock_scaling();
	me._bottom_right_corner_elements.logicBlock_scaling();
	me._text_help_responsive.logicBlock_text();
	me._navigation_container.logicBlock_scaling();
	me._information.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._top_right_corner_elements.logicBlock_scaling();me._rectangle_bottom.logicBlock_scaling();me._bottom_right_corner_elements.logicBlock_scaling();me._text_help_responsive.logicBlock_text();me._navigation_container.logicBlock_scaling(); });
	player.addListener('changenodeid', function(args) { me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._information.logicBlock_visible(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_hs1_sizechanged();me.callChildLogicBlocksHotspot_hsz_sizechanged(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_hs_changenodeid();me.callChildLogicBlocksHotspot_hs_beyaz_changenodeid(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_hs_varchanged_ht_ani();me.callChildLogicBlocksHotspot_hs_beyaz_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
};