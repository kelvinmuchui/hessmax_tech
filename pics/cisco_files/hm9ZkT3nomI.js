/*!CK:3066121375!*//*1458859419,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4\/U8p"]); }

__d('ReactComposerActorSelectorContainer.react',['cx','ReactComposerContextMixin','ComposerXActorSelector.react','ActorURI','AsyncRequest','React','XReactComposerActorChangeController'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'ReactComposerActorSelectorContainer',mixins:[c('ReactComposerContextMixin')],getInitialState:function(){return {showSpinner:false};},render:function(){var j=babelHelpers['extends']({},this.props,{composerID:this.context.composerID});return (c('React').createElement(c('ComposerXActorSelector.react'),babelHelpers['extends']({},j,{className:"_4w4v",loading:this.state.showSpinner,onChange:this._onActorChange})));},_onActorChange:function(j){this.setState({showSpinner:true});var k=c('ActorURI').create(c('XReactComposerActorChangeController').getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setString('target_id',this.context.targetID).getURI(),j);new (c('AsyncRequest'))().setURI(k).send();}});f.exports=i;},null);