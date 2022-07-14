import $ from 'jquery';
import * as help from './helpers';

class TouchLoader {
    constructor(parent, child) {
        this.$els = $(parent);
        this.parent = document.querySelectorAll(parent);
        this.child = child;
        this.touched = false;
        this.touchActive = false;
        this.touchCount = 0;

        this.events();
    }

    events() {
        const that = this;

        Array.from(that.parent).forEach(link => {
            link.addEventListener('touchstart', function() {
                that.showHover(this, that.child);
            }, {passive: true});
	        
            link.addEventListener('touchend', function() {
                that.removeHover(this, that.child);
            }, {passive: true});
        });
    }

    showHover(parent, child) {
        const that = this,
              innerChild = parent.children;

        this.touchCount = this.touchCount + 1;
        this.touched = true;

        if (child !== null) {
            help.addClass(innerChild, 'touch-active');
            help.addClass(parent, 'touch-hover');
        } else {
            help.addClass(parent, 'touch-active');
        }
    }

    removeHover(parent, child) {
        const that = this,
              innerChild = parent.children;

        if (help.hasClass(parent, 'touch-hover') || help.hasClass(parent, 'touch-active')) {
            if (child !== null) {
                help.removeClass(innerChild, 'touch-active');
                help.removeClass(parent, 'touch-hover');
            } else {
                help.removeClass(parent, 'touch-active');
            }

            that.touched = false;
        }
    }
}

export default TouchLoader;
