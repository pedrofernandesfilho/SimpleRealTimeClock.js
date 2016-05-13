/* SimpleRealTimeClock.js
 * 
 * By Pedro Fernandes Filho
 * License: MIT
 *
 * http://github.com/pedrofernandesfilho/SimpleRealTimeClock.js
 */

;(function(doc) {
    // ctor
    this.SimpleRealTimeClock = function(options) {
        // Public Properties
        this.options = null;
        this.clockElement = null;

        try {
            // Validate parameter options
            if (typeof options != "object") throw "Parameter options must be object.";

            // Options
            this.options = extend({
                clockElementId: null,
                culture: null
            }, options);

            this.clockElement = doc.getElementById(this.options.clockElementId);

            // Validate clockElement
            if (!this.clockElement) throw "Element '" + this.options.clockElementId + "' not found.";

            // Init
            init.call(this);
        } catch (ex) {
            errorHandler(ex);
        }

    } // ctor

    // Private methods
    function init() {
        try {
            showClock.call(this, this.clockElement, this.options.culture);
            setInterval(showClock.bind(this), 1000, this.clockElement, this.options.culture);
        } catch (ex) {
            throw ex;
        }
    }

    function showClock(elementClock, culture) {
        try {
            var currentDateTime = getCurrentDateTime.call(this, culture);
            elementClock.innerHTML = currentDateTime;
        } catch (ex) {
            throw ex;
        }
    }

    function getCurrentDateTime(culture) {
        try {
            if (culture)
                return (new Date()).toLocaleString(culture);
            else
                return (new Date()).toLocaleString();
        } catch (ex) {
            throw ex;
        }
    }

    function errorHandler(message) {
        message = "Simple Real Time Clock\r\n" + message;
        alert(message);
    }

    // Useful private methods
    function extend(target, source) {
        if ((source) && (typeof source === "object"))
            for (var property in source)
                if (source.hasOwnProperty(property))
                    target[property] = source[property];

        return target;
    }
}(document));
