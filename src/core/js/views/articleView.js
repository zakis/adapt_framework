/*
* ArticleView
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley
*/

define(function(require) {
    
    var AdaptView = require('coreViews/adaptView');
    var BlockView = require('coreViews/blockView');

    var ArticleView = AdaptView.extend({
        
        className: function() {
            return "article " 
            + this.model.get('_id')
            + " " + this.model.get('_classes')
            + " " + this.setVisibility() 
            + " nth-child-" 
            + this.options.nthChild;
        }
        
    }, {
        childContainer: '.block-container',
        childView: BlockView,
        template: 'article'
    });
    
    return ArticleView;
    
});