import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, EventEmitter, Input, NgModule, Output, Pipe, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); ɵngcc0.ɵɵnextContext(3); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.previous()); })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); ɵngcc0.ɵɵnextContext(3); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.previous()); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.previousLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.previousLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("disabled", _r0.isFirstPage());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", 1 < _r0.getCurrent());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.isFirstPage());
} }
function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var page_r10 = ɵngcc0.ɵɵnextContext().$implicit; ɵngcc0.ɵɵnextContext(2); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.setCurrent(page_r10.value)); })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var page_r10 = ɵngcc0.ɵɵnextContext().$implicit; ɵngcc0.ɵɵnextContext(2); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.setCurrent(page_r10.value)); });
    ɵngcc0.ɵɵelementStart(1, "span", 12);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵpipe(5, "number");
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var page_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r11.screenReaderPageLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(page_r10.label === "..." ? page_r10.label : ɵngcc0.ɵɵpipeBind2(5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 12);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵpipe(5, "number");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var page_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r12.screenReaderCurrentLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(page_r10.label === "..." ? page_r10.label : ɵngcc0.ɵɵpipeBind2(5, 2, page_r10.label, ""));
} }
function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r10 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.getCurrent() !== page_r10.value);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.getCurrent() === page_r10.value);
} }
function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r23); ɵngcc0.ɵɵnextContext(3); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.next()); })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r23); ɵngcc0.ɵɵnextContext(3); var _r0 = ɵngcc0.ɵɵreference(1); return ɵngcc0.ɵɵresetView(_r0.next()); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r20 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r20.nextLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r20.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "span", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd()();
} if (rf & 2) {
    var ctx_r21 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r21.nextLabel, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r21.screenReaderPageLabel);
} }
function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 13);
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);
    ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("disabled", _r0.isLastPage());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !_r0.isLastPage());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", _r0.isLastPage());
} }
function PaginationControlsComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 3);
    ɵngcc0.ɵɵtemplate(1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);
    ɵngcc0.ɵɵelementStart(2, "li", 5);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);
    ɵngcc0.ɵɵtemplate(5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵclassProp("responsive", ctx_r1.responsive);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1.screenReaderPaginationLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.directionLinks);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2(" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", _r0.pages)("ngForTrackBy", ctx_r1.trackByIndex);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.directionLinks);
} }
var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new EventEmitter();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    /**
     * Register a PaginationInstance with this service. Returns a
     * boolean value signifying whether the instance is new or
     * updated (true = new or updated, false = unchanged).
     */
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            return true;
        }
        else {
            return this.updateInstance(instance);
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(); };
PaginationService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: PaginationService, factory: function (t) { return PaginationService.ɵfac(t); } });

    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        else {
            if (emitChange) {
                this.service.change.emit(id);
            }
            // save the state for server-side collection to avoid null
            // flash as new data loads.
            this.saveState(id, collection, collection, start, end);
            return collection;
        }
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([ __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(ɵngcc0.ɵɵdirectiveInject(PaginationService, 16)); };
PaginatePipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "paginate", type: PaginatePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginatePipe, [{
        type: Pipe,
        args: [{
                name: 'paginate',
                pure: false
            }]
    }], function () { return [{ type: PaginationService }]; }, null); })();
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\"\n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages; trackBy: trackByIndex\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new EventEmitter();
        this.pageBoundsCorrection = new EventEmitter();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.prototype.trackByIndex = function (index) {
        return index;
    };
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Input(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Input(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Output(),
        __metadata$1("design:type", EventEmitter)
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    __decorate$2([
        Output(),
        __metadata$1("design:type", EventEmitter)
    ], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);
PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) { return new (t || PaginationControlsComponent)(); };
PaginationControlsComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: PaginationControlsComponent, selectors: [["pagination-controls"]], inputs: { maxSize: "maxSize", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel", directionLinks: "directionLinks", autoHide: "autoHide", responsive: "responsive", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, decls: 3, vars: 3, consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]], template: function PaginationControlsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "pagination-template", 0, 1);
        ɵngcc0.ɵɵlistener("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) { return ctx.pageChange.emit($event); })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) { return ctx.pageBoundsCorrection.emit($event); });
        ɵngcc0.ɵɵtemplate(2, PaginationControlsComponent_ul_2_Template, 6, 9, "ul", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("maxSize", ctx.maxSize);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    } }, dependencies: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgIf, PaginationControlsDirective, ɵngcc1.DecimalPipe]; }, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginationControlsComponent, [{
        type: Component,
        args: [{ selector: 'pagination-controls', template: DEFAULT_TEMPLATE, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "] }]
    }], function () { return []; }, { maxSize: [{
            type: Input
        }], previousLabel: [{
            type: Input
        }], nextLabel: [{
            type: Input
        }], screenReaderPaginationLabel: [{
            type: Input
        }], screenReaderPageLabel: [{
            type: Input
        }], screenReaderCurrentLabel: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], pageBoundsCorrection: [{
            type: Output
        }], directionLinks: [{
            type: Input
        }], autoHide: [{
            type: Input
        }], responsive: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new EventEmitter();
        this.pageBoundsCorrection = new EventEmitter();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.pageBoundsCorrection.emit(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        // Return 1 as default page number
        // Make sense to show 1 instead of empty when there are no items
        var totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Input(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Input(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Output(),
        __metadata$2("design:type", EventEmitter)
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    __decorate$3([
        Output(),
        __metadata$2("design:type", EventEmitter)
    ], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);
    PaginationControlsDirective = __decorate$3([ __metadata$2("design:paramtypes", [PaginationService,
            ChangeDetectorRef])
    ], PaginationControlsDirective);
PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) { return new (t || PaginationControlsDirective)(ɵngcc0.ɵɵdirectiveInject(PaginationService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PaginationControlsDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: PaginationControlsDirective, selectors: [["pagination-template"], ["", "pagination-template", ""]], inputs: { maxSize: "maxSize", id: "id" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, exportAs: ["paginationApi"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PaginationControlsDirective, [{
        type: Directive,
        args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            }]
    }], function () { return [{ type: PaginationService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { maxSize: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], pageBoundsCorrection: [{
            type: Output
        }], id: [{
            type: Input
        }] }); })();
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(t) { return new (t || NgxPaginationModule)(); };
NgxPaginationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxPaginationModule });
NgxPaginationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [PaginationService], imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxPaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxPaginationModule, { declarations: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]; } }); })();
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_STYLES as ɵb, DEFAULT_TEMPLATE as ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBS087QUFDUDs7Ozs7Ozs7OzJFQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBU29DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUtPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7dVlBWTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ01vZHVsZSwgT3V0cHV0LCBQaXBlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxudmFyIFBhZ2luYXRpb25TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvblNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSB7fTtcclxuICAgICAgICB0aGlzLkRFRkFVTFRfSUQgPSAnREVGQVVMVF9QQUdJTkFUSU9OX0lEJztcclxuICAgIH1cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5kZWZhdWx0SWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLkRFRkFVTFRfSUQ7IH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgUGFnaW5hdGlvbkluc3RhbmNlIHdpdGggdGhpcyBzZXJ2aWNlLiBSZXR1cm5zIGFcclxuICAgICAqIGJvb2xlYW4gdmFsdWUgc2lnbmlmeWluZyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBpcyBuZXcgb3JcclxuICAgICAqIHVwZGF0ZWQgKHRydWUgPSBuZXcgb3IgdXBkYXRlZCwgZmFsc2UgPSB1bmNoYW5nZWQpLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5pZCA9IHRoaXMuREVGQVVMVF9JRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGVhY2ggcHJvcGVydHkgb2YgdGhlIGluc3RhbmNlIGFuZCB1cGRhdGUgYW55IHRoYXQgaGF2ZSBjaGFuZ2VkLiBSZXR1cm5cclxuICAgICAqIHRydWUgaWYgYW55IGNoYW5nZXMgd2VyZSBtYWRlLCBlbHNlIHJldHVybiBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSkge1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJvcF0gIT09IHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXVtwcm9wXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdW3Byb3BdID0gaW5zdGFuY2VbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2lkXS5jdXJyZW50UGFnZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoaWQsIHBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2lkXTtcclxuICAgICAgICAgICAgdmFyIG1heFBhZ2UgPSBNYXRoLmNlaWwoaW5zdGFuY2UudG90YWxJdGVtcyAvIGluc3RhbmNlLml0ZW1zUGVyUGFnZSk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlIDw9IG1heFBhZ2UgJiYgMSA8PSBwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1tpZF0uY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBpbnN0YW5jZS50b3RhbEl0ZW1zXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKGlkLCB0b3RhbEl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSAmJiAwIDw9IHRvdGFsSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLnRvdGFsSXRlbXMgPSB0b3RhbEl0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBpbnN0YW5jZS5pdGVtc1BlclBhZ2UuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5zZXRJdGVtc1BlclBhZ2UgPSBmdW5jdGlvbiAoaWQsIGl0ZW1zUGVyUGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoZSBwYWdpbmF0aW9uIGluc3RhbmNlIG9iamVjdCBtYXRjaGluZyB0aGUgaWQuIElmIG5vXHJcbiAgICAgKiBpZCBzcGVjaWZpZWQsIHJldHVybnMgdGhlIGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRlZmF1bHQgaWQuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKSB7IGlkID0gdGhpcy5ERUZBVUxUX0lEOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSh0aGlzLmluc3RhbmNlc1tpZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgc2hhbGxvdyBjbG9uZSBvZiBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25TZXJ2aWNlO1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBMQVJHRV9OVU1CRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxudmFyIFBhZ2luYXRlUGlwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRlUGlwZShzZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICAvLyBzdG9yZSB0aGUgdmFsdWVzIGZyb20gdGhlIGxhc3QgdGltZSB0aGUgcGlwZSB3YXMgaW52b2tlZFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGFyZ3MpIHtcclxuICAgICAgICAvLyBXaGVuIGFuIG9ic2VydmFibGUgaXMgcGFzc2VkIHRocm91Z2ggdGhlIEFzeW5jUGlwZSwgaXQgd2lsbCBvdXRwdXRcclxuICAgICAgICAvLyBgbnVsbGAgdW50aWwgdGhlIHN1YnNjcmlwdGlvbiByZXNvbHZlcy4gSW4gdGhpcyBjYXNlLCB3ZSB3YW50IHRvXHJcbiAgICAgICAgLy8gdXNlIHRoZSBjYWNoZWQgZGF0YSBmcm9tIHRoZSBgc3RhdGVgIG9iamVjdCB0byBwcmV2ZW50IHRoZSBOZ0ZvclxyXG4gICAgICAgIC8vIGZyb20gZmxhc2hpbmcgZW1wdHkgdW50aWwgdGhlIHJlYWwgdmFsdWVzIGFycml2ZS5cclxuICAgICAgICBpZiAoIShjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHZhciBfaWQgPSBhcmdzLmlkIHx8IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbX2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbX2lkXS5zbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXJ2ZXJTaWRlTW9kZSA9IGFyZ3MudG90YWxJdGVtcyAmJiBhcmdzLnRvdGFsSXRlbXMgIT09IGNvbGxlY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2UoY29sbGVjdGlvbiwgYXJncyk7XHJcbiAgICAgICAgdmFyIGlkID0gaW5zdGFuY2UuaWQ7XHJcbiAgICAgICAgdmFyIHN0YXJ0LCBlbmQ7XHJcbiAgICAgICAgdmFyIHBlclBhZ2UgPSBpbnN0YW5jZS5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdmFyIGVtaXRDaGFuZ2UgPSB0aGlzLnNlcnZpY2UucmVnaXN0ZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIGlmICghc2VydmVyU2lkZU1vZGUgJiYgY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHBlclBhZ2UgPSArcGVyUGFnZSB8fCBMQVJHRV9OVU1CRVI7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gKGluc3RhbmNlLmN1cnJlbnRQYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIHBlclBhZ2U7XHJcbiAgICAgICAgICAgIHZhciBpc0lkZW50aWNhbCA9IHRoaXMuc3RhdGVJc0lkZW50aWNhbChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIGlmIChpc0lkZW50aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVbaWRdLnNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWNlID0gY29sbGVjdGlvbi5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNsaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZW1pdENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBzdGF0ZSBmb3Igc2VydmVyLXNpZGUgY29sbGVjdGlvbiB0byBhdm9pZCBudWxsXHJcbiAgICAgICAgICAgIC8vIGZsYXNoIGFzIG5ldyBkYXRhIGxvYWRzLlxyXG4gICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBQYWdpbmF0aW9uSW5zdGFuY2Ugb2JqZWN0LCB1c2luZyBkZWZhdWx0cyBmb3IgYW55IG9wdGlvbmFsIHByb3BlcnRpZXMgbm90IHN1cHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb25maWcoY29uZmlnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY29uZmlnLmlkICE9IG51bGwgPyBjb25maWcuaWQgOiB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCksXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogK2NvbmZpZy5pdGVtc1BlclBhZ2UgfHwgMCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6ICtjb25maWcuY3VycmVudFBhZ2UgfHwgMSxcclxuICAgICAgICAgICAgdG90YWxJdGVtczogK2NvbmZpZy50b3RhbEl0ZW1zIHx8IGNvbGxlY3Rpb24ubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBmaWx0ZXIgY29udGFpbnMgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuY2hlY2tDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHJlcXVpcmVkID0gWydpdGVtc1BlclBhZ2UnLCAnY3VycmVudFBhZ2UnXTtcclxuICAgICAgICB2YXIgbWlzc2luZyA9IHJlcXVpcmVkLmZpbHRlcihmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gIShwcm9wIGluIGNvbmZpZyk7IH0pO1xyXG4gICAgICAgIGlmICgwIDwgbWlzc2luZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFnaW5hdGVQaXBlOiBBcmd1bWVudCBpcyBtaXNzaW5nIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgcHJvcGVydGllczogXCIgKyBtaXNzaW5nLmpvaW4oJywgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRvIGF2b2lkIHJldHVybmluZyBhIGJyYW5kIG5ldyBhcnJheSBlYWNoIHRpbWUgdGhlIHBpcGUgaXMgcnVuLCB3ZSBzdG9yZSB0aGUgc3RhdGUgb2YgdGhlIHNsaWNlZFxyXG4gICAgICogYXJyYXkgZm9yIGEgZ2l2ZW4gaWQuIFRoaXMgbWVhbnMgdGhhdCB0aGUgbmV4dCB0aW1lIHRoZSBwaXBlIGlzIHJ1biBvbiB0aGlzIGNvbGxlY3Rpb24gJiBpZCwgd2UganVzdFxyXG4gICAgICogbmVlZCB0byBjaGVjayB0aGF0IHRoZSBjb2xsZWN0aW9uLCBzdGFydCBhbmQgZW5kIHBvaW50cyBhcmUgYWxsIGlkZW50aWNhbCwgYW5kIGlmIHNvLCByZXR1cm4gdGhlXHJcbiAgICAgKiBsYXN0IHNsaWNlZCBhcnJheS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoaWQsIGNvbGxlY3Rpb24sIHNsaWNlLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVtpZF0gPSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXHJcbiAgICAgICAgICAgIHNpemU6IGNvbGxlY3Rpb24ubGVuZ3RoLFxyXG4gICAgICAgICAgICBzbGljZTogc2xpY2UsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgZW5kOiBlbmRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRm9yIGEgZ2l2ZW4gaWQsIHJldHVybnMgdHJ1ZSBpZiB0aGUgY29sbGVjdGlvbiwgc2l6ZSwgc3RhcnQgYW5kIGVuZCB2YWx1ZXMgYXJlIGlkZW50aWNhbC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5zdGF0ZUlzSWRlbnRpY2FsID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZVtpZF07XHJcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc01ldGFEYXRhSWRlbnRpY2FsID0gc3RhdGUuc2l6ZSA9PT0gY29sbGVjdGlvbi5sZW5ndGggJiZcclxuICAgICAgICAgICAgc3RhdGUuc3RhcnQgPT09IHN0YXJ0ICYmXHJcbiAgICAgICAgICAgIHN0YXRlLmVuZCA9PT0gZW5kO1xyXG4gICAgICAgIGlmICghaXNNZXRhRGF0YUlkZW50aWNhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zbGljZS5ldmVyeShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHsgcmV0dXJuIGVsZW1lbnQgPT09IGNvbGxlY3Rpb25bc3RhcnQgKyBpbmRleF07IH0pO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRlUGlwZSA9IF9fZGVjb3JhdGUkMShbXHJcbiAgICAgICAgUGlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0ZScsXHJcbiAgICAgICAgICAgIHB1cmU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZV0pXHJcbiAgICBdLCBQYWdpbmF0ZVBpcGUpO1xyXG4gICAgcmV0dXJuIFBhZ2luYXRlUGlwZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIGFuZCBzdHlsZXMgZm9yIHRoZSBwYWdpbmF0aW9uIGxpbmtzIGFyZSBib3Jyb3dlZCBkaXJlY3RseVxyXG4gKiBmcm9tIFp1cmIgRm91bmRhdGlvbiA2OiBodHRwOi8vZm91bmRhdGlvbi56dXJiLmNvbS9zaXRlcy9kb2NzL3BhZ2luYXRpb24uaHRtbFxyXG4gKi9cclxudmFyIERFRkFVTFRfVEVNUExBVEUgPSBcIlxcbiAgICA8cGFnaW5hdGlvbi10ZW1wbGF0ZSAgI3A9XFxcInBhZ2luYXRpb25BcGlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XFxcImlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4U2l6ZV09XFxcIm1heFNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlQ2hhbmdlKT1cXFwicGFnZUNoYW5nZS5lbWl0KCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlQm91bmRzQ29ycmVjdGlvbik9XFxcInBhZ2VCb3VuZHNDb3JyZWN0aW9uLmVtaXQoJGV2ZW50KVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmd4LXBhZ2luYXRpb25cXFwiXFxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cXFwic2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsXFxcIiBcXG4gICAgICAgIFtjbGFzcy5yZXNwb25zaXZlXT1cXFwicmVzcG9uc2l2ZVxcXCJcXG4gICAgICAgICpuZ0lmPVxcXCIhKGF1dG9IaWRlICYmIHAucGFnZXMubGVuZ3RoIDw9IDEpXFxcIj5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCIgW2NsYXNzLmRpc2FibGVkXT1cXFwicC5pc0ZpcnN0UGFnZSgpXFxcIiAqbmdJZj1cXFwiZGlyZWN0aW9uTGlua3NcXFwiPiBcXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIjEgPCBwLmdldEN1cnJlbnQoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5wcmV2aW91cygpXFxcIiAoY2xpY2spPVxcXCJwLnByZXZpb3VzKClcXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJwcmV2aW91c0xhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9saT4gXFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInNtYWxsLXNjcmVlblxcXCI+XFxuICAgICAgICAgICAge3sgcC5nZXRDdXJyZW50KCkgfX0gLyB7eyBwLmdldExhc3RQYWdlKCkgfX1cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgICAgICA8bGkgW2NsYXNzLmN1cnJlbnRdPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCIgXFxuICAgICAgICAgICAgW2NsYXNzLmVsbGlwc2lzXT1cXFwicGFnZS5sYWJlbCA9PT0gJy4uLidcXFwiXFxuICAgICAgICAgICAgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwLnBhZ2VzOyB0cmFja0J5OiB0cmFja0J5SW5kZXhcXFwiPlxcbiAgICAgICAgICAgIDxhIHRhYmluZGV4PVxcXCIwXFxcIiAoa2V5dXAuZW50ZXIpPVxcXCJwLnNldEN1cnJlbnQocGFnZS52YWx1ZSlcXFwiIChjbGljayk9XFxcInAuc2V0Q3VycmVudChwYWdlLnZhbHVlKVxcXCIgKm5nSWY9XFxcInAuZ2V0Q3VycmVudCgpICE9PSBwYWdlLnZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX0gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyAocGFnZS5sYWJlbCA9PT0gJy4uLicpID8gcGFnZS5sYWJlbCA6IChwYWdlLmxhYmVsIHwgbnVtYmVyOicnKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cXFwicC5nZXRDdXJyZW50KCkgPT09IHBhZ2UudmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlckN1cnJlbnRMYWJlbCB9fSA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwYWdlLmxhYmVsID09PSAnLi4uJykgPyBwYWdlLmxhYmVsIDogKHBhZ2UubGFiZWwgfCBudW1iZXI6JycpIH19PC9zcGFuPiBcXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInBhZ2luYXRpb24tbmV4dFxcXCIgW2NsYXNzLmRpc2FibGVkXT1cXFwicC5pc0xhc3RQYWdlKClcXFwiICpuZ0lmPVxcXCJkaXJlY3Rpb25MaW5rc1xcXCI+XFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiICpuZ0lmPVxcXCIhcC5pc0xhc3RQYWdlKClcXFwiIChrZXl1cC5lbnRlcik9XFxcInAubmV4dCgpXFxcIiAoY2xpY2spPVxcXCJwLm5leHQoKVxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm5leHRMYWJlbCArICcgJyArIHNjcmVlblJlYWRlclBhZ2VMYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgICB7eyBuZXh0TGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwLmlzTGFzdFBhZ2UoKVxcXCI+XFxuICAgICAgICAgICAgICAgICB7eyBuZXh0TGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgPC91bD5cXG4gICAgPC9wYWdpbmF0aW9uLXRlbXBsYXRlPlxcbiAgICBcIjtcclxudmFyIERFRkFVTFRfU1RZTEVTID0gXCJcXG4ubmd4LXBhZ2luYXRpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAubmd4LXBhZ2luYXRpb246OmJlZm9yZSwgLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgZGlzcGxheTogdGFibGU7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbjo6YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGxpIHtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMDYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAubmd4LXBhZ2luYXRpb24gYSxcXG4gIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xcbiAgICBjb2xvcjogIzBhMGEwYTsgXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIsXFxuICAgIC5uZ3gtcGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYmFja2dyb3VuZDogIzIxOTllODtcXG4gICAgY29sb3I6ICNmZWZlZmU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5kaXNhYmxlZCB7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgY29sb3I6ICNjYWNhY2E7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgfSBcXG4gICAgLm5neC1wYWdpbmF0aW9uIC5kaXNhYmxlZDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6OmJlZm9yZSxcXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7IFxcbiAgY29udGVudDogJ1xcdTAwQUInO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcdTAwQkInO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAuc2hvdy1mb3Itc3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTsgfVxcbi5uZ3gtcGFnaW5hdGlvbiAuc21hbGwtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDFweCkge1xcbiAgLm5neC1wYWdpbmF0aW9uLnJlc3BvbnNpdmUgLnNtYWxsLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSBcXG4gIC5uZ3gtcGFnaW5hdGlvbi5yZXNwb25zaXZlIGxpOm5vdCguc21hbGwtc2NyZWVuKTpub3QoLnBhZ2luYXRpb24tcHJldmlvdXMpOm5vdCgucGFnaW5hdGlvbi1uZXh0KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG59XFxuICBcIjtcblxudmFyIF9fZGVjb3JhdGUkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbmZ1bmN0aW9uIGNvZXJjZVRvQm9vbGVhbihpbnB1dCkge1xyXG4gICAgcmV0dXJuICEhaW5wdXQgJiYgaW5wdXQgIT09ICdmYWxzZSc7XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gY29udHJvbHMgY29tcG9uZW50LiBBY3R1YWxseSBqdXN0IGEgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBhIGN1c3RvbSB0ZW1wbGF0ZS5cclxuICovXHJcbnZhciBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gNztcclxuICAgICAgICB0aGlzLnByZXZpb3VzTGFiZWwgPSAnUHJldmlvdXMnO1xyXG4gICAgICAgIHRoaXMubmV4dExhYmVsID0gJ05leHQnO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsID0gJ1BhZ2luYXRpb24nO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmVhZGVyUGFnZUxhYmVsID0gJ3BhZ2UnO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsID0gXCJZb3UncmUgb24gcGFnZVwiO1xyXG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VCb3VuZHNDb3JyZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbkxpbmtzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9hdXRvSGlkZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Jlc3BvbnNpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImRpcmVjdGlvbkxpbmtzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbkxpbmtzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uTGlua3MgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0hpZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXV0b0hpZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRvSGlkZSA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJyZXNwb25zaXZlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNpdmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNwb25zaXZlID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUudHJhY2tCeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImlkXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJtYXhTaXplXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXJlY3Rpb25MaW5rc1wiLCBudWxsKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImF1dG9IaWRlXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicmVzcG9uc2l2ZVwiLCBudWxsKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInByZXZpb3VzTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcIm5leHRMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJQYWdlTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlckN1cnJlbnRMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInBhZ2VDaGFuZ2VcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJwYWdlQm91bmRzQ29ycmVjdGlvblwiLCB2b2lkIDApO1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50ID0gX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBDb21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tY29udHJvbHMnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogREVGQVVMVF9URU1QTEFURSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbREVGQVVMVF9TVFlMRVNdLFxyXG4gICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgICAgICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG4gICAgICAgIH0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudDtcclxufSgpKTtcblxudmFyIF9fZGVjb3JhdGUkMyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEkMiA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyB3aGF0IHBvd2VycyBhbGwgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnRzLCBpbmNsdWRpbmcgdGhlIGRlZmF1bHQgb25lLlxyXG4gKiBJdCBleHBvc2VzIGFuIEFQSSB3aGljaCBpcyBob29rZWQgdXAgdG8gdGhlIFBhZ2luYXRpb25TZXJ2aWNlIHRvIGtlZXAgdGhlIFBhZ2luYXRlUGlwZSBpbiBzeW5jXHJcbiAqIHdpdGggdGhlIHBhZ2luYXRpb24gY29udHJvbHMuXHJcbiAqL1xyXG52YXIgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlKHNlcnZpY2UsIGNoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgPSBjaGFuZ2VEZXRlY3RvclJlZjtcclxuICAgICAgICB0aGlzLm1heFNpemUgPSA3O1xyXG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2VCb3VuZHNDb3JyZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNoYW5nZVN1YiA9IHRoaXMuc2VydmljZS5jaGFuZ2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUGFnZUxpbmtzKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZUxpbmtzKCk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHbyB0byB0aGUgcHJldmlvdXMgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZElkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZ2V0Q3VycmVudCgpIC0gMSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHbyB0byB0aGUgbmV4dCBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrVmFsaWRJZCgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmdldEN1cnJlbnQoKSArIDEpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGN1cnJlbnQgcGFnZSBpcyBmaXJzdCBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuaXNGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudCgpID09PSAxO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGN1cnJlbnQgcGFnZSBpcyBsYXN0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5pc0xhc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldExhc3RQYWdlKCkgPT09IHRoaXMuZ2V0Q3VycmVudCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLnNldEN1cnJlbnQgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldEN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRDdXJyZW50UGFnZSh0aGlzLmlkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgcGFnZSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRMYXN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5zdCA9IHRoaXMuc2VydmljZS5nZXRJbnN0YW5jZSh0aGlzLmlkKTtcclxuICAgICAgICBpZiAoaW5zdC50b3RhbEl0ZW1zIDwgMSkge1xyXG4gICAgICAgICAgICAvLyB3aGVuIHRoZXJlIGFyZSAwIG9yIGZld2VyIChhbiBlcnJvciBjYXNlKSBpdGVtcywgdGhlcmUgYXJlIG5vIFwicGFnZXNcIiBhcyBzdWNoLFxyXG4gICAgICAgICAgICAvLyBidXQgaXQgbWFrZXMgc2Vuc2UgdG8gY29uc2lkZXIgYSBzaW5nbGUsIGVtcHR5IHBhZ2UgYXMgdGhlIGxhc3QgcGFnZS5cclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoaW5zdC50b3RhbEl0ZW1zIC8gaW5zdC5pdGVtc1BlclBhZ2UpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpLnRvdGFsSXRlbXM7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jaGVja1ZhbGlkSWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5nZXRJbnN0YW5jZSh0aGlzLmlkKS5pZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZTogdGhlIHNwZWNpZmllZCBpZCBcXFwiXCIgKyB0aGlzLmlkICsgXCJcXFwiIGRvZXMgbm90IG1hdGNoIGFueSByZWdpc3RlcmVkIFBhZ2luYXRpb25JbnN0YW5jZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBwYWdlIGxpbmtzIGFuZCBjaGVja3MgdGhhdCB0aGUgY3VycmVudCBwYWdlIGlzIHZhbGlkLiBTaG91bGQgcnVuIHdoZW5ldmVyIHRoZVxyXG4gICAgICogUGFnaW5hdGlvblNlcnZpY2UuY2hhbmdlIHN0cmVhbSBlbWl0cyBhIHZhbHVlIG1hdGNoaW5nIHRoZSBjdXJyZW50IElELCBvciB3aGVuIGFueSBvZiB0aGVcclxuICAgICAqIGlucHV0IHZhbHVlcyBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLnVwZGF0ZVBhZ2VMaW5rcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpO1xyXG4gICAgICAgIHZhciBjb3JyZWN0ZWRDdXJyZW50UGFnZSA9IHRoaXMub3V0T2ZCb3VuZENvcnJlY3Rpb24oaW5zdCk7XHJcbiAgICAgICAgaWYgKGNvcnJlY3RlZEN1cnJlbnRQYWdlICE9PSBpbnN0LmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24uZW1pdChjb3JyZWN0ZWRDdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlcyA9IF90aGlzLmNyZWF0ZVBhZ2VBcnJheShpbnN0LmN1cnJlbnRQYWdlLCBpbnN0Lml0ZW1zUGVyUGFnZSwgaW5zdC50b3RhbEl0ZW1zLCBfdGhpcy5tYXhTaXplKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzID0gdGhpcy5jcmVhdGVQYWdlQXJyYXkoaW5zdC5jdXJyZW50UGFnZSwgaW5zdC5pdGVtc1BlclBhZ2UsIGluc3QudG90YWxJdGVtcywgdGhpcy5tYXhTaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgdGhhdCB0aGUgaW5zdGFuY2UuY3VycmVudFBhZ2UgcHJvcGVydHkgaXMgd2l0aGluIGJvdW5kcyBmb3IgdGhlIGN1cnJlbnQgcGFnZSByYW5nZS5cclxuICAgICAqIElmIG5vdCwgcmV0dXJuIGEgY29ycmVjdCB2YWx1ZSBmb3IgY3VycmVudFBhZ2UsIG9yIHRoZSBjdXJyZW50IHZhbHVlIGlmIE9LLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm91dE9mQm91bmRDb3JyZWN0aW9uID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoaW5zdGFuY2UudG90YWxJdGVtcyAvIGluc3RhbmNlLml0ZW1zUGVyUGFnZSk7XHJcbiAgICAgICAgaWYgKHRvdGFsUGFnZXMgPCBpbnN0YW5jZS5jdXJyZW50UGFnZSAmJiAwIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQYWdlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5zdGFuY2UuY3VycmVudFBhZ2UgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuY3VycmVudFBhZ2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIFBhZ2Ugb2JqZWN0cyB0byB1c2UgaW4gdGhlIHBhZ2luYXRpb24gY29udHJvbHMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuY3JlYXRlUGFnZUFycmF5ID0gZnVuY3Rpb24gKGN1cnJlbnRQYWdlLCBpdGVtc1BlclBhZ2UsIHRvdGFsSXRlbXMsIHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgIC8vIHBhZ2luYXRpb25SYW5nZSBjb3VsZCBiZSBhIHN0cmluZyBpZiBwYXNzZWQgZnJvbSBhdHRyaWJ1dGUsIHNvIGNhc3QgdG8gbnVtYmVyLlxyXG4gICAgICAgIHBhZ2luYXRpb25SYW5nZSA9ICtwYWdpbmF0aW9uUmFuZ2U7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gW107XHJcbiAgICAgICAgLy8gUmV0dXJuIDEgYXMgZGVmYXVsdCBwYWdlIG51bWJlclxyXG4gICAgICAgIC8vIE1ha2Ugc2Vuc2UgdG8gc2hvdyAxIGluc3RlYWQgb2YgZW1wdHkgd2hlbiB0aGVyZSBhcmUgbm8gaXRlbXNcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGgubWF4KE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKSwgMSk7XHJcbiAgICAgICAgdmFyIGhhbGZXYXkgPSBNYXRoLmNlaWwocGFnaW5hdGlvblJhbmdlIC8gMik7XHJcbiAgICAgICAgdmFyIGlzU3RhcnQgPSBjdXJyZW50UGFnZSA8PSBoYWxmV2F5O1xyXG4gICAgICAgIHZhciBpc0VuZCA9IHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2U7XHJcbiAgICAgICAgdmFyIGlzTWlkZGxlID0gIWlzU3RhcnQgJiYgIWlzRW5kO1xyXG4gICAgICAgIHZhciBlbGxpcHNlc05lZWRlZCA9IHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHdoaWxlIChpIDw9IHRvdGFsUGFnZXMgJiYgaSA8PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gdm9pZCAwO1xyXG4gICAgICAgICAgICB2YXIgcGFnZU51bWJlciA9IHRoaXMuY2FsY3VsYXRlUGFnZU51bWJlcihpLCBjdXJyZW50UGFnZSwgcGFnaW5hdGlvblJhbmdlLCB0b3RhbFBhZ2VzKTtcclxuICAgICAgICAgICAgdmFyIG9wZW5pbmdFbGxpcHNlc05lZWRlZCA9IChpID09PSAyICYmIChpc01pZGRsZSB8fCBpc0VuZCkpO1xyXG4gICAgICAgICAgICB2YXIgY2xvc2luZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IHBhZ2luYXRpb25SYW5nZSAtIDEgJiYgKGlzTWlkZGxlIHx8IGlzU3RhcnQpKTtcclxuICAgICAgICAgICAgaWYgKGVsbGlwc2VzTmVlZGVkICYmIChvcGVuaW5nRWxsaXBzZXNOZWVkZWQgfHwgY2xvc2luZ0VsbGlwc2VzTmVlZGVkKSkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSAnLi4uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gcGFnZU51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYWdlTnVtYmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYWdlcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIHRoZSBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2Ugb2YgcGFnaW5hdGlvbiBsaW5rcyBbaV0sXHJcbiAgICAgKiBmaWd1cmUgb3V0IHdoYXQgcGFnZSBudW1iZXIgY29ycmVzcG9uZHMgdG8gdGhhdCBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jYWxjdWxhdGVQYWdlTnVtYmVyID0gZnVuY3Rpb24gKGksIGN1cnJlbnRQYWdlLCBwYWdpbmF0aW9uUmFuZ2UsIHRvdGFsUGFnZXMpIHtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICBpZiAoaSA9PT0gcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYWdpbmF0aW9uUmFuZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gaGFsZldheSA8IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWxQYWdlcyAtIHBhZ2luYXRpb25SYW5nZSArIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaGFsZldheSA8IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBhZ2UgLSBoYWxmV2F5ICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcIm1heFNpemVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYWdlQ2hhbmdlXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwicGFnZUJvdW5kc0NvcnJlY3Rpb25cIiwgdm9pZCAwKTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZSA9IF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgRGlyZWN0aXZlKHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwYWdpbmF0aW9uLXRlbXBsYXRlLFtwYWdpbmF0aW9uLXRlbXBsYXRlXScsXHJcbiAgICAgICAgICAgIGV4cG9ydEFzOiAncGFnaW5hdGlvbkFwaSdcclxuICAgICAgICB9KSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbUGFnaW5hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgIENoYW5nZURldGVjdG9yUmVmXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZSk7XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlO1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIE5neFBhZ2luYXRpb25Nb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZ3hQYWdpbmF0aW9uTW9kdWxlKCkge1xyXG4gICAgfVxyXG4gICAgTmd4UGFnaW5hdGlvbk1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIE5nTW9kdWxlKHtcclxuICAgICAgICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgUGFnaW5hdGVQaXBlLFxyXG4gICAgICAgICAgICAgICAgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1BhZ2luYXRpb25TZXJ2aWNlXSxcclxuICAgICAgICAgICAgZXhwb3J0czogW1BhZ2luYXRlUGlwZSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmVdXHJcbiAgICAgICAgfSlcclxuICAgIF0sIE5neFBhZ2luYXRpb25Nb2R1bGUpO1xyXG4gICAgcmV0dXJuIE5neFBhZ2luYXRpb25Nb2R1bGU7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cclxuICovXG5cbmV4cG9ydCB7IERFRkFVTFRfU1RZTEVTIGFzIMm1YiwgREVGQVVMVF9URU1QTEFURSBhcyDJtWEsIE5neFBhZ2luYXRpb25Nb2R1bGUsIFBhZ2luYXRpb25TZXJ2aWNlLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZSwgUGFnaW5hdGVQaXBlIH07XG4iXX0=