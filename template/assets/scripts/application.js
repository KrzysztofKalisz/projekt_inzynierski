'use strict';

const application = {
    LANG: 'pl',
    STORES: [],
    FLOORS: [],
    CURRENT_FLOOR: null,
    CATEGORIES: [],
    CATEGORY: null,
    DEFAULT_FlOOR: null,
    STORE: null,
    $body: null,
    $stores: null,
    $viewport: null,
    $promotions: null,
    $news: null,
    $screensavers: null,
    $amenities: null,
    $sketch_container: null,
    TIMEOUT_SCREENSAVERS: null,
    TIMEOUT_SCREENSAVERS_DELAY: null,
    TIMEOUT_DYNAMIC_CONTENT: null,
    COLORS: {},
    MODAL: null,
    floor_classes: [],
    DYNAMIC_CONTENT: null,
    ATM: null,
    TOILET: null,
    DRAWING_PATH: false,
    ALERT_SF: false,
    PROGRESSING: false,
    AMENITIES: [],
    init: function (){
        this.$body = $('body');
        if(typeof STAND !== "undefined"){
            this.STORES = STAND.stores;
            this.FLOORS = STAND.floors;
            this.CATEGORIES = STAND.categories;
            this.CURRENT_FLOOR = parseInt(STAND.default_floor_id);
            this.DEFAULT_FlOOR = parseInt(STAND.default_floor_id);
            this.COLORS = STAND.settings;
            this.$viewport = this.$body.find('#sketchContainer');
            this.$news = this.$body.find('[data-dynamic-content-container="news"] .list');
            this.$promotions = this.$body.find('[data-dynamic-content-container="promotions"] .list');
            this.$screensavers = this.$body.find('#screensavers');
            this.$sketch_container = this.$body.find('#sketchContainer');
            this.$amenities = this.$body.find('[data-amenities-container]')
            if(this.FLOORS.length > 0){
                for(let i = 0; i < this.FLOORS.length; i++){
                    this.floor_classes.push('active-floor-' + this.FLOORS[i].position);
                }
            }
            this.TOILET = STAND.toilet;
            this.ATM = STAND.atm;
        }
        if(typeof SCREENSAVERS_AFTER_MINUTES !== 'undefined'){
            this.TIMEOUT_SCREENSAVERS = 60 * SCREENSAVERS_AFTER_MINUTES;
        }
        if(typeof SCREENSAVERS_DELAY !== 'undefined'){
            this.TIMEOUT_SCREENSAVERS_DELAY = SCREENSAVERS_DELAY;
        }
        if(typeof DYNAMIC_CONTENT_UPDATE_EVERY_MINUTES !== 'undefined'){
            this.DYNAMIC_CONTENT_UPDATE_EVERY_MINUTES = 60 * DYNAMIC_CONTENT_UPDATE_EVERY_MINUTES;
        }
        if(typeof DYNAMIC_CONTENT !== "undefined"){
            this.DYNAMIC_CONTENT = DYNAMIC_CONTENT;
        }
        if(typeof AMENITIES !== "undefined"){
            this.AMENITIES = AMENITIES;
        }
        // this.eventsController();
        // this.listenersController();
        // this.keyboardComponent();
        // this.screensaversController();
        // this.getDynamicContent();
        // this.wayfindingComponent();
        // this.findCarController();
        // this.rebootController();
        // this.scrollbarController();
        this.simple();
    },

    simple: function (){
    
        $('body').find('[data-open-store]').on('click', function (e){
            e.preventDefault();
            $('body').find('[data-shop-details]').addClass('show');
            $('body').find('[data-store-logo]').css('display', 'block');
        });

        $('body').delegate('[data-store-close]', 'click', function (e){
            $('body').find('[data-shop-details]').removeClass('show');
            $('body').find('[data-store-logo]').css('display', 'none');
        });

        $('body').find('[data-switch-floor]').on('click', function (e){
            $('body').find('[data-switch-floor]').removeClass('current');
            $(this).addClass('current');
            if($(this).data('switch-floor') == 1){
                $('body').find('.map-box').removeClass('active-floor-2');
                $('body').find('.map-box').addClass('active-floor-1');
            } else{
                $('body').find('.map-box').removeClass('active-floor-1');
                $('body').find('.map-box').addClass('active-floor-2');

            }
        });


        $('body').find('[data-search-store] input').on('change paste keyup focus', function (e){
            e.preventDefault();
            $('body').find('#keyboard').slideDown();
        });

        this.$body.delegate('[data-close-keyboard]', 'click', function (e){
            $('body').find('#keyboard').slideUp();
        });
    },

    scrollbarController: function (){
        $(".mCustomScrollbar").mCustomScrollbar();
    },

    eventsController: function (){
        this.$body.find('[data-switch-floor]').on('click', function (e){
            e.preventDefault();
            $(document).trigger('APP__SWITCH_FLOOR', [parseInt($(this).data('switch-floor'))]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.delegate('.content a', 'click', function (e){
            e.preventDefault();
            e.stopPropagation();
        });

        this.$body.delegate('[data-close-keyboard]', 'click', function (e){
            e.preventDefault();
            $(document).trigger('APP__OPEN_STORE', [parseInt($(this).data('store-id'))]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.find('[data-switch-category]').on('click', function (e){
            e.preventDefault();
            $(document).trigger('APP__SWITCH_CATEGORY', [parseInt($(this).data('switch-category'))]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.find('[data-switch-lang]').on('click', function (e){
            e.preventDefault();
            $(document).trigger('APP__SWITCH_LANG', [$(this).data('switch-lang')]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.find('[data-open-store]').on('click', function (e){
            e.preventDefault();
            $(document).trigger('APP__OPEN_STORE', [parseInt($(this).data('open-store'))]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.delegate('[data-store-id]', 'click', function (e){
            e.preventDefault();
            $(document).trigger('APP__OPEN_STORE', [parseInt($(this).data('store-id'))]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.find('[data-find-route]').on('click', function (e){
            e.preventDefault();
            $(document).trigger('APP__FIND_ROUTE', [$(this).data('find-route')]);
            $(this).addClass('startRoute');
        });

        this.$body.find('[data-find-route-atm]').on('click', function (e){
            e.preventDefault();
            $(this).addClass('startRoute');
            $(document).trigger('APP__FIND_ROUTE_ATM');
        });

        this.$body.find('[data-find-route-toilet]').on('click', function (e){
            e.preventDefault();
            $(this).addClass('startRoute');
            $(document).trigger('APP__FIND_ROUTE_TOILET');
        });

        this.$body.find('[data-search-store] input').on('change paste keyup focus', function (e){
            e.preventDefault();
            $(document).trigger('APP__SEARCH_STORE', [$(this).val()]);
        });

        this.$body.find('[data-input-keyboard]').on('focus', function (e){
            e.preventDefault();
            $(document).trigger('APP__FOCUS_INPUT_TEXT', [$(this)]);
        });

        this.$body.on('click touch', function (e){
            // console.log(e);
            $(document).trigger('APP__TOUCH');
        });

        // this.$screensavers.on('click', function (e){
        //     $(document).trigger('APP__CLOSE_SCREENSAVER');
        //     $(document).trigger('APP__CLOSE_KEYBOARD');
        // });

        this.$body.find('[data-dynamic-content]').on('click', function (e){
            $(document).trigger('APP__OPEN_DYNAMIC_CONTENT', [$(this)]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.find('[data-close-dynamic-content]').on('click', function (e){
            $(document).trigger('APP__CLOSE_DYNAMIC_CONTENT');
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.delegate('[data-open-modal]', 'click', function (e){
            $(document).trigger('APP__OPEN_MODAL', [$(this).data('open-modal')]);
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.delegate('[data-close-modal]', 'click', function (e){
            $(document).trigger('APP__CLOSE_MODAL');
            $(document).trigger('APP__CLOSE_KEYBOARD');
        });

        this.$body.delegate('[data-article]', 'click', function (e){
            e.preventDefault();
            $(document).trigger('APP__READ_ARTICLE', [$(this).data('article')]);
        });

        this.$body.delegate('[data-promotion]', 'click', function (e){
            e.preventDefault();
            $(document).trigger('APP__READ_PROMOTION', [$(this).data('promotion')]);
        });

        this.$body.find('[data-amenities-open]').on('click', function (e){
            e.preventDefault();
            application.openAmenitiesAction();
        });

        this.$body.find('[data-amenities-close]').on('click', function (e){
            e.preventDefault();
            application.closeAmenitiesAction();
        });

        this.$body.delegate('[data-amenities-item]', 'click', function (e){
            e.preventDefault();
            application.readAmenitiesAction($(this).data('amenities-item'));
        })
    },
    listenersController: function (){
        const app = this;

        $(document).on('APP__SWITCH_FLOOR', function (e, floorId){
            if (app.PROGRESSING){
                return;
            }
            app.closeStoreAction();
            app.switchFloorAction(floorId);
            app.clearFilterCategory();
        });

        $(document).on('APP__SWITCH_CATEGORY', function (e, categoryId){
            if (app.PROGRESSING){
                return;
            }
            app.switchCategoryAction(categoryId);
        });

        $(document).on('APP__SWITCH_LANG', function (e, lang){
            app.switchLangAction(lang);
        });

        $(document).on('APP__OPEN_STORE', function (e, storeId){
            if (app.PROGRESSING){
                return;
            }
            app.openStoreAction(storeId);
        });

        $(document).on('APP__SEARCH_STORE', function (e, phrase){
            if (app.PROGRESSING){
                return;
            }
            if(app.MODAL !== null){
                return;
            }
            app.applyFilterPhrase(phrase);
        });

        $(document).on('APP__FOCUS_INPUT_TEXT', function (){
            app.$body.find('#keyboard').slideDown(300);
        });

        $(document).on('APP__CLOSE_KEYBOARD', function (){
            app.$body.find('#keyboard').slideUp(300);
        });

        $(document).on('APP__TOUCH', function (){
            if(typeof SCREENSAVERS_AFTER_MINUTES !== 'undefined'){
                application.TIMEOUT_SCREENSAVERS = 60 * SCREENSAVERS_AFTER_MINUTES;
            }
            if(typeof SCREENSAVERS_DELAY !== 'undefined'){
                application.TIMEOUT_SCREENSAVERS_DELAY = SCREENSAVERS_DELAY;
            }
        });

        $(document).on('APP__CLOSE_SCREENSAVER', function (){
            app.switchFloorAction(app.DEFAULT_FlOOR);
            app.switchLangAction('pl');
            app.$news.hide();
            app.$promotions.hide();
            app.$screensavers.fadeOut(300);
            app.closeDynamicContentAction();
            app.resetStand();
        });

        $(document).on('APP__OPEN_DYNAMIC_CONTENT', function (e, $element){
            if (app.PROGRESSING){
                return;
            }
            app.openDynamicContentAction($element);
        });

        $(document).on('APP__CLOSE_DYNAMIC_CONTENT', function (){
            if (app.PROGRESSING){
                return;
            }
            app.closeDynamicContentAction();
        });

        $(document).on('APP__FIND_ROUTE', function (e, type){
            if (app.PROGRESSING){
                return;
            }
            app.PROGRESSING = true;
            app.wayfindingAction(type);
        });

        $(document).on('APP__FIND_ROUTE_ATM', function (e){
            if (app.PROGRESSING){
                return;
            }
            app.PROGRESSING = true;
            app.wayfindingATMAction();
        });

        $(document).on('APP__FIND_ROUTE_TOILET', function (e){
            if (app.PROGRESSING){
                return;
            }
            app.PROGRESSING = true;
            app.wayfindingTOILETAction();
        });

        $(document).on('wayfinding:animationComplete', function (e){
            setTimeout(function (){
                //app.resetStand();
                app.$body.find('[data-reset-pan-zoom]').trigger('click');
                app.$sketch_container.find('path[class^=directionPath]').remove();
                app.DRAWING_PATH = false;
                app.PROGRESSING = false;
                app.ALERT_SF = false;
                app.$body.find('[data-find-route]').removeClass('startRoute');
                app.$body.find('[data-find-route-atm]').removeClass('startRoute');
                app.$body.find('[data-find-route-toilet]').removeClass('startRoute');
                app.$body.find(".reset").trigger('click');
            }, 6000);
        });

        $(document).on('APP__OPEN_MODAL', function (e, id){
            if (app.PROGRESSING){
                return;
            }
            e.preventDefault();
            app.openModalAction(id);
        });

        $(document).on('APP__CLOSE_MODAL', function (e){
            if (app.PROGRESSING){
                return;
            }
            e.preventDefault();
            app.closeModalAction();
        });

        app.$sketch_container.on('wayfinding:floorChanged', function (e, floor){
            if('floor' + app.DEFAULT_FlOOR == floor.mapId){
                app.DRAWING_PATH = true;
            }
            if('floor' + app.CURRENT_FLOOR !== floor.mapId){
                floor = parseInt(floor.mapId.replace('floor', ''));
                app.switchFloorAction(floor);
            }
        });

        $(document).on('wayfinding:routefloorChanged', function (e, floor){
            if('floor' + app.CURRENT_FLOOR !== floor){
                floor = parseInt(floor.replace('floor', ''));
                if(app.ALERT_SF && app.DRAWING_PATH){
                    app.alertSwitchFloor(app.CURRENT_FLOOR, floor);
                }
                app.ALERT_SF = true;
            }
        });

        $(document).on('wayfinding:ready', function (e){
            app.switchFloorAction(app.CURRENT_FLOOR);

            for(let i = 0; i < app.FLOORS.length; i++){
                app.$body.find('#floor' + app.FLOORS[i].id).addClass('floor-position-' + app.FLOORS[i].position);
                // if(app.FLOORS[i].icons){
                //     app.$body.find('#floor' + app.FLOORS[i].id).append('<img class="floor_icons" src="' + app.FLOORS[i].icons + '">');
                // }
            }

            app.$sketch_container.panzoom({
                $zoomIn: app.$body.find(".zoom-in"),
                $zoomOut: app.$body.find(".zoom-out"),
                // $zoomRange: app.$body.find(".zoom-range"),
                $reset: app.$body.find(".reset"),
                maxScale: 3,
                minScale: 1
            });

            $('#Rooms a').on('mousedown touchstart', function( e ) {
                //e.stopImmediatePropagation();
                let store_id = $(this).data('store-id');
                $(document).trigger('APP__TOUCH');
                if(store_id){
                    app.openStoreAction(parseInt(store_id));
                }
            });
        });

        $(document).on('APP__READ_ARTICLE', function (e, article_index){
            if (app.PROGRESSING){
                return;
            }
            $(document).trigger('APP__TOUCH');
            app.readArticleAction(article_index);
        });

        $(document).on('APP__READ_PROMOTION', function (e, promotion_index){
            if (app.PROGRESSING){
                return;
            }
            app.readPromotionAction(promotion_index);
        });

        app.$body.delegate('[data-open-store-and-find-route]', 'click', function (e){
            if (app.PROGRESSING){
                return;
            }
            app.PROGRESSING = true;
            app.closeModalAction();
            app.closeDynamicContentAction();
            setTimeout(function(){
                app.wayfindingAction(app.STORE.id);
                app.$body.find('[data-find-route]').addClass('startRoute');
            }, 1000);
        });

        app.$body.delegate('[data-store-close]', 'click', function (e){
            if (app.PROGRESSING){
                return;
            }
            app.closeStoreAction();
        });
    },
    switchFloorAction: function (floorId){
        let index = null;
        //this.closeStoreAction();
        this.CURRENT_FLOOR = floorId;
        this.$body.find('[data-switch-floor]').removeClass('current');
        this.$body.find('[data-switch-floor="' + floorId + '"]').addClass('current');
        for(let i = 0; i < this.FLOORS.length; i++){
            if(this.FLOORS[i].id === floorId){
                index = i;
                this.$body.find('[data-current-floor-label]').text(this.FLOORS[i].name);
            }
            this.$sketch_container.removeClass(this.floor_classes[i]);
        }
        this.$sketch_container.addClass(this.floor_classes[index]);
        this.$sketch_container.wayfinding('currentMap', 'floor' + floorId);
        this.$body.find('[data-reset-pan-zoom]').trigger('click');
    },
    switchCategoryAction: function (categoryId){
        this.clearFilterCategory();
        this.clearFilterPhrase(true);
        this.applyFilterCategory(categoryId)
    },
    switchLangAction: function(lang){
        this.LANG = lang;
        this.$body.find('[data-switch-lang]').removeClass('current');
        this.$body.find('[data-switch-lang="' + lang + '"]').addClass('current');
        if(this.LANG == 'ua'){
            this.$body.addClass('application-lang-ua');
        }else{
            this.$body.removeClass('application-lang-ua');
        }
        this.translateFragments(lang);
        this.translateCategory(lang);
        this.translateStore(lang);
        this.translationsDynamicContentAction(lang);
        this.translationAmenitiesAction(lang);
    },
    getCategoryById: function (id){
        if(this.CATEGORIES.length === 0){
            return null;
        }
        for(let i = 0; i < this.CATEGORIES.length; i++){
            if(this.CATEGORIES[i].id === parseInt(id)){
                return this.CATEGORIES[i];
            }
        }
        return null;
    },
    translateFragments: function (lang){
        this.$body.find('[data-trans-text]').each(function (index, element){
            $(element).text($(element).data('trans-text-' + lang + ""));
        });
        this.$body.find('[data-trans-placeholder]').each(function (index, element){
            $(element).attr('placeholder', $(element).data('trans-placeholder-' + lang + ""));
        });
    },
    translateStore: function (lang){
        if(!this.STORE){
            return;
        }
        let store = {
            name: this.STORE.name,
            category: this.STORE.category,
            description: this.STORE.description,
        };

        if(lang !== 'pl'){
            if(this.STORE.translations[lang]){
                if(this.STORE.translations[lang].name){
                    store.name = this.STORE.translations[lang].name;
                }
                if(this.STORE.translations[lang].description){
                    store.description = this.STORE.translations[lang].description;
                }
            }
            let category = this.getCategoryById(this.STORE.category_id);
            if(category && category.translations[lang] && category.translations[lang].name){
                store.category = category.translations[lang].name;
            }
        }

        this.$body.find('[data-shop-name]').text(store.name);
        this.$body.find('[data-shop-category]').text(store.category);
        this.$body.find('[data-shop-description]').html(store.description);

        console.log(store.name);

        if(store.name == 'Bafra Kebab' || store.name == 'Lodolandia' || store.name == 'InPost' || store.name == 'Allegro'){
            this.$body.find('[data-action-buttons]').addClass('hide');
        } else{
            this.$body.find('[data-action-buttons]').removeClass('hide');
        }
    },
    translateCategory: function (lang){
        const app = this;
        let category, content;
        this.$body.find('[data-bean-category]').each(function (index, element){
            category = app.getCategoryById($(element).data('bean-category'));
            if(category){
                if($(element).data('category-name') !== "undefined"){
                    content = category.name;
                    if(category.translations[lang] && category.translations[lang].name){
                        content = category.translations[lang].name
                    }
                    $(element).text(content);
                }
            }
        });
    },
    openStoreAction: function (storeId){
        this.STORE = null;
        for(let i = 0; i < this.STORES.length; i++){
            if(storeId === this.STORES[i].id){
                this.STORE = this.STORES[i];
                if(this.STORE.floor_id !== this.CURRENT_FLOOR){
                    this.switchFloorAction(parseInt(this.STORE.floor_id));
                }
                let store = {
                    name: this.STORE.name,
                    category: this.STORE.category,
                    description: this.STORE.description,
                    icon: this.STORE.icon
                }
                
                this.translateStore(this.LANG);
                this.clearFilterCategory();
                let qr = this.$body.find('[data-shop-qr]');
                if(this.STORE.qr){
                    qr.find('img').attr('src', this.STORE.qr);
                    qr.show();
                }else{
                    qr.find('img').attr('src', '');
                    qr.hide();
                }
                if(store.icon){
                    this.renderLogoStore(store.icon);
                }
                this.$sketch_container.find('[data-store-id] > path')
                    .attr('fill', this.COLORS.SKETCH_COLORS__NO_ACTIVE_STORE)
                    .attr('stroke', 'rgb(179, 179, 179)')
                    .attr('stroke-width', '1px')
                if(this.CATEGORY){
                    this.applyFilterCategory(this.CATEGORY.id);
                }
                this.$sketch_container.find('[data-store-id="' + this.STORE.id + '"] > path')
                    .attr('fill', this.COLORS.SKETCH_COLORS__ACTIVE_STORE)
                    .attr('stroke', this.COLORS.SKETCH_COLORS__ROUTE)
                    .attr('stroke-width', '12px')
                this.$body.find('[data-shop-details]').addClass('show');

            }
        }
    },
    renderLogoStore: function (url){
        this.$viewport.parent('.map').find('[data-store-logo]').remove();
        this.$viewport.parent('.map').append('<div data-store-logo class="shop-logo">\n' +
            '<img src="' + url + '" alt="">\n' +
            '</div>');

    },
    clearFilterCategory: function (){
        this.CATEGORY = null;
        this.$body.find('[data-switch-category]').removeClass('current');
        this.$sketch_container.find('[data-store-id] > path').attr('fill', this.COLORS.SKETCH_COLORS__NO_ACTIVE_STORE);
        this.$body.find('[data-list-stores] li').removeClass('hide-item');
    },
    applyFilterCategory: function (categoryId){
        if(categoryId === 0){
            this.clearFilterCategory();
            this.$body.find('[data-switch-category="' + categoryId + '"]').addClass('current');
            return;
        }
        if(!this.CATEGORY || this.CATEGORY.id !== categoryId){
            this.CATEGORY = null;
            this.$sketch_container.find('[data-store-id] > path').attr('fill', this.COLORS.SKETCH_COLORS__NO_ACTIVE_STORE);
            this.$body.find('[data-switch-category="' + categoryId + '"]').addClass('current');
            for(let i = 0; i < this.CATEGORIES.length; i++){
                if(this.CATEGORIES[i].id === parseInt(categoryId)){
                    this.CATEGORY = this.CATEGORIES[i];
                }
            }
        }
        if(this.CATEGORY){
            this.applyFilterPhrase(this.$body.find('[data-search-store] input').val());
            for(let i = 0; i < this.STORES.length; i++){
                if(this.STORES[i].category_id === parseInt(categoryId)){
                    if(this.CATEGORY.marker_color){
                        this.$sketch_container.find('[data-store-id="' + this.STORES[i].id + '"] > path').attr('fill', this.CATEGORY.marker_color);
                    }
                }
            }
        }
    },
    clearFilterPhrase: function (clearInput = false){
        this.$body.find('[data-list-stores] li').removeClass('hide-item');
        if(clearInput){
            this.$body.find('[data-search-store] input').val('');
        }
    },
    applyFilterPhrase: function (phrase){
        this.closeStoreAction();
        if(phrase === '' && !this.CATEGORY){
            this.clearFilterPhrase();
            return;
        }
        this.$body.find('[data-list-stores] li').addClass('hide-item');
        let visible = false;
        for(let i = 0; i < this.STORES.length; i++){
            visible = false;
            if(this.STORES[i].name.toLowerCase().indexOf(phrase.toLowerCase()) !== -1){
                if(!this.CATEGORY){
                    visible = true;
                }else{
                    if(this.STORES[i].category_id === this.CATEGORY.id){
                        visible = true;
                    }
                }
                if(visible){
                    this.$body.find('[data-open-store="' + this.STORES[i].id + '"]').parent().removeClass('hide-item');
                }
            }
        }
    },
    closeStoreAction: function (){
        this.$viewport.parent('.map').find('[data-store-logo]').remove();
        this.$body.find('[data-shop-details]').removeClass('show');
        this.$sketch_container.find('[data-store-id] > path').attr('fill', this.COLORS.SKETCH_COLORS__NO_ACTIVE_STORE)
            .attr('stroke', 'rgb(179, 179, 179)')
            .attr('stroke-width', '1px')
    },
    keyboardComponent: function (){
        if(this.$body.find('#keyboard').length > 0){
            this.$body.find('#keyboard').jkeyboard({
                input: this.$body.find('[data-input-keyboard]'),
                layout: 'english',
            });

            this.$body.find('#keyboard').append('<button data-close-keyboard class="close"></button>');
        }
    },
    screensaversController: function (){
        const app = this,
              $screensavers = app.$body.find('[data-item-screensaver]');
        let index = 1;
        if(app.TIMEOUT_SCREENSAVERS !== null && $screensavers.length == 1){
            setInterval(function (){
                if(app.TIMEOUT_SCREENSAVERS === 0){
                    app.closeModalAction();
                    $(document).trigger('APP__CLOSE_KEYBOARD');
                    app.$screensavers.fadeIn(300);
                    return;
                }
                app.TIMEOUT_SCREENSAVERS--;
            }, 1000);
        }
        if(app.TIMEOUT_SCREENSAVERS_DELAY !== null && $screensavers.length > 1){
            setInterval(function (){
                if(app.TIMEOUT_SCREENSAVERS_DELAY === 0){
                    if(index > $screensavers.length){
                        index = 1;
                    }
                    app.$screensavers.show();
                    $screensavers.hide();
                    app.closeModalAction();
                    $(document).trigger('APP__CLOSE_KEYBOARD');
                    app.$body.find('[data-item-screensaver="' + index + '"]').show();
                    index++;
                    app.TIMEOUT_SCREENSAVERS_DELAY = SCREENSAVERS_DELAY;
                }

                app.TIMEOUT_SCREENSAVERS_DELAY--;
                // console.log(app.TIMEOUT_SCREENSAVERS_DELAY);
            }, 1000);
        }
    },
    dynamicContentController: function (){
        const app = this;
        if(app.TIMEOUT_DYNAMIC_CONTENT !== null){
            setInterval(function (){
                if(app.TIMEOUT_DYNAMIC_CONTENT === 0){
                    app.getDynamicContent();
                    app.TIMEOUT_DYNAMIC_CONTENT = DYNAMIC_CONTENT_UPDATE_EVERY_MINUTES;
                    return
                }
                app.TIMEOUT_DYNAMIC_CONTENT--;
            }, 1000);
        }
    },
    getDynamicContent: function (){
        const app = this;
        $.ajax({
            url: location.href + '/get-dynamic-content',
            method: 'GET',
            dataType: 'JSON',
            success: function (response){
                if(response.data){
                    app.DYNAMIC_CONTENT.data = response.data;
                    app.translationsDynamicContentAction(app.LANG);
                }
            }
        })
    },
    resetModalFindCar: function (){
        this.$body.find('#formFindCar').show();
        this.$body.find('#formFindCar input').val('');
        this.$body.find('#findCarResults').hide();
        this.$body.find('#findCarLoader').hide();
        this.$body.find('#findCarData').hide();
        this.$body.find('#findCarNotFound').hide();
        this.$body.find('[data-find-car-place]').text('');
        this.$body.find('[data-find-car-floor]').text('');
    },
    findCarController: function (){
        const app = this,
              $form = app.$body.find('#formFindCar'),
              $input = $form.find('input'),
              $loader = app.$body.find('#findCarLoader'),
              $content = app.$body.find('#findCarData'),
              $notFound = app.$body.find('#findCarNotFound')

        let loading = false;

        const search = () => {
            if(loading){
                return
            }
            loading = true;
            app.$body.find('#findCarResults').show();
            $loader.show();
            $content.hide();
            $form.hide();
            $notFound.hide();
            let plate = $input.val();
            $(document).trigger('APP__CLOSE_KEYBOARD');
            $.ajax({
                url: location.href + '/find-car',
                method: 'GET',
                data: {
                    register_number: plate
                },
                dataType: 'JSON',
                success: function (response) {
                    $loader.hide();
                    loading = false;
                    if(!response.data){
                        $notFound.show();
                        return;
                    }
                    $content.find('[data-find-car-place]').text(response.data.parking_place);
                    $content.find('[data-find-car-floor]').text(response.data.floor_name);
                    $content.show();
                }
            });
        };

        $form.on('submit', function (e){
            e.preventDefault();
            search();
        });

        app.$body.find('[data-reset-find-car-modal]').on('click', function (e){
            e.preventDefault()
            app.resetModalFindCar();
        });
    },
    resetStand: function (){
        this.closeStoreAction();
        this.STORE = null;
        this.CURRENT_FLOOR = this.DEFAULT_FlOOR;
        this.switchFloorAction(this.CURRENT_FLOOR);
        this.$body.find('[data-reset-pan-zoom]').trigger('click');
        this.$sketch_container.find('path[class^=directionPath]').remove();
    },
    wayfindingAction(type){
        if(type === 'normal'){
            this.$sketch_container.wayfinding('accessibleRoute', false);
        }else{
            this.$sketch_container.wayfinding('accessibleRoute', true);
        }
        if(!this.STORE){
            return
        }
        if(this.STORE.wayfinding_by){
            if(this.STORE.wayfinding_by === 'NORMAL'){
                this.$sketch_container.wayfinding('accessibleRoute', false);
            }else{
                this.$sketch_container.wayfinding('accessibleRoute', true);
            }
        }
        this.$sketch_container.trigger('wayfinding:roomClicked', [ { roomId: 'store' + this.STORE.id } ] );
        this.$sketch_container.wayfinding('routeTo', 'store' + this.STORE.id);
    },
    wayfindingATMAction(){
        this.$sketch_container.wayfinding('routeTo', 'atm' + this.ATM);
    },
    wayfindingTOILETAction(){
        this.$sketch_container.wayfinding('routeTo', 'toilet' + this.TOILET);
    },
    wayfindingComponent: function (){
        if(this.$sketch_container.length === 0 || this.FLOORS.length === 0){
            return;
        }
        let maps = [];
        for(let i = 0; i < this.FLOORS.length; i++){
            if(this.FLOORS[i].sketch){
                maps.push({
                    path: this.FLOORS[i].sketch,
                    id: 'floor' + this.FLOORS[i].id
                })
            }
        }
        this.$sketch_container.wayfinding({
            maps: maps,
            startpoint: 'stand.' + STAND.stand_id,
            accessibleRoute: false,
            defaultMap: 'floor' + this.DEFAULT_FlOOR,
            zoomToRoute: false,
            showLocation: true,
            path: {
                color: this.COLORS.SKETCH_COLORS__ROUTE,
                radius: 10,
                speed: 3,
                width: 10
            },
            loadMessage: '',
            floorChangeAnimationDelay: 4000
        });
    },
    openModalAction: function (id){
        this.resetModalFindCar();
        this.$body.find('[data-input-keyboard]').val('');
        this.$body.find('[data-modal]').hide();
        this.$body.find('#popupScreen').fadeIn(300);
        this.MODAL = this.$body.find(id);
        this.MODAL.fadeIn(300);
    },
    closeModalAction(){
        if(!this.MODAL){
            return;
        }
        this.$body.find('[data-input-keyboard]').val('');
        this.$body.find('#popupScreen').fadeOut(300);
        this.MODAL.fadeOut(300);
        this.MODAL = null;
    },
    openDynamicContentAction: function ($element){
        this.$body.find('[data-amenities-container]').hide();
        this.$body.find('[data-dynamic-content-container]').hide();
        this.$body.find('[data-dynamic-content-container="' + $element.data('dynamic-content') + '"]').show();
        this.$body.find('[data-dynamic-content-container="' + $element.data('dynamic-content') + '"] .list').css('display', 'flex');
        this.$body.find('[data-main-activity]').addClass('news-window');
        this.$body.find('[data-lef-label-nav]').hide();
        this.$body.find('[data-lef-label-nav="' + $element.data('dynamic-content') + '"]').show();

    },
    closeDynamicContentAction: function (){
        this.$body.find('[data-main-activity]').removeClass('news-window');
        this.$body.find('[data-lef-label-nav]').hide();
        this.$body.find('[data-lef-label-nav="floor"]').show();
    },
    rebootController: function (){
        const app = this;
        setInterval(function (){
            $.ajax({
                url: location.href + '/reboot',
                method: 'GET',
                dataType: 'JSON',
                success: function (response){
                    if(typeof response.data.reboot !== "undefined" && response.data.reboot){
                        app.$body.fadeOut(500);
                        window.location.reload();
                    }
                }
            })

        }, 15000);
    },
    readArticleAction: function (article_index){
        let article = null;
        if(this.DYNAMIC_CONTENT){
            try{
                article = this.DYNAMIC_CONTENT.data.news[this.LANG][article_index];
                if(article){
                    this.$body.find('[data-article-thumb]').attr('src', article.thumb);
                    this.$body.find('[data-article-title]').text(article.title);
                    this.$body.find('[data-article-description]').html(article.description);
                    this.openModalAction('#articleModal');
                }
            }catch (error){}
        }
    },
    readPromotionAction: function (promotion_index){
        let promotion = null;
        this.closeStoreAction();
        if(this.DYNAMIC_CONTENT){
            try{
                promotion = this.DYNAMIC_CONTENT.data.promotions[this.LANG][promotion_index];
                if(promotion){
                    this.$body.find('[data-article-thumb]').attr('src', promotion.thumb);
                    this.$body.find('[data-article-title]').text(promotion.title);
                    this.$body.find('[data-article-description]').html(promotion.description);
                    this.$body.find(".reset").trigger('click touch');
                    if(promotion.store_id){
                        this.openStoreAction(parseInt(promotion.store_id));
                        this.$body.find('[data-open-store-and-find-route]').show();
                    }else{
                        this.$body.find('[data-open-store-and-find-route]').hide();
                    }
                    this.openModalAction('#promotionModal');
                }
            }catch (error){
                // console.log(error);
            }
        }
    },
    translationsDynamicContentAction: function (lang){
        if(this.DYNAMIC_CONTENT){
            try{
                let news = this.DYNAMIC_CONTENT.view.news.pl;
                let promotions = this.DYNAMIC_CONTENT.view.promotions.pl;
                if(this.DYNAMIC_CONTENT.view.news[lang]){
                    news = this.DYNAMIC_CONTENT.view.news[lang];
                }
                if(this.DYNAMIC_CONTENT.view.promotions[lang]){
                    promotions = this.DYNAMIC_CONTENT.view.promotions[lang];
                }
                this.$news.html(news);
                this.$promotions.html(promotions);
            }catch (error){}
        }
    },
    alertSwitchFloor: function (currentFloorId, newFloorId){
        if(currentFloorId == newFloorId){
            return;
        }
        const getFloor = (floorId) => {
            for(let i = 0; i < this.FLOORS.length; i++){
                if(this.FLOORS[i].id == floorId){
                    return this.FLOORS[i];
                }
            }
        };

        const alertBox = this.$body.find('[data-switch-floor-info]');
        alertBox.removeClass('floor-down');
        alertBox.removeClass('floor-up');

        let currentFloor = getFloor(currentFloorId);
        let newFloor = getFloor(newFloorId);

        let cssClass = 'floor-down';
        try{
            if(parseInt(currentFloor.position) > parseInt(newFloor.position)){
                cssClass = 'floor-up';
            }
            alertBox.addClass(cssClass);
            setTimeout(function (){
                alertBox.removeClass(cssClass);
            }, 2000);
        }catch (error){
        }
    },
    translationAmenitiesAction: function (lang){
        if(this.AMENITIES){
            try{
                let amenities = this.AMENITIES.pl;
                if(this.AMENITIES[lang]){
                    amenities = this.AMENITIES[lang]
                }
                this.$amenities.find('.list').html(amenities);
            }catch (error){}
        }
    },
    readAmenitiesAction: function (item){
        this.closeStoreAction();
        this.$body.find('[data-amenities--thumb]').attr('src', item.thumb);
        this.$body.find('[data-amenities--name]').text(item.name);
        this.$body.find('[data-amenities--description]').html(item.description);
        this.openModalAction('#amenitiesModal');
    },
    closeAmenitiesAction: function (){
        this.$body.find('[data-main-activity]').removeClass('news-window');
        this.$body.find('[data-lef-label-nav]').hide();
        this.$body.find('[data-lef-label-nav="floor"]').show();
    },
    openAmenitiesAction: function (){
        this.$body.find('[data-amenities-container]').show();
        this.$body.find('[data-dynamic-content-container]').hide();
        this.$body.find('[data-main-activity]').addClass('news-window');
        this.$body.find('[data-lef-label-nav]').hide();
        this.$body.find('[data-lef-label-nav="amenities"]').show();
    },
};

$(document).ready(function (){
    application.init();
});
