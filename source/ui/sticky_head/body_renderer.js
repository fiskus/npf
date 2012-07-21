goog.provide('npf.ui.stickyHead.BodyRenderer');

goog.require('npf.ui.renderComponent.Renderer');


/**
 * @constructor
 * @extends {npf.ui.renderComponent.Renderer}
 */
npf.ui.stickyHead.BodyRenderer = function() {
	goog.base(this);
};
goog.inherits(npf.ui.stickyHead.BodyRenderer, npf.ui.renderComponent.Renderer);
goog.addSingletonGetter(npf.ui.stickyHead.BodyRenderer);


/**
 * @type {string}
 */
npf.ui.stickyHead.BodyRenderer.CSS_CLASS = goog.getCssName('stickyHead-body');


/** @inheritDoc */
npf.ui.stickyHead.BodyRenderer.prototype.getCssClass = function() {
	return npf.ui.stickyHead.BodyRenderer.CSS_CLASS;
};