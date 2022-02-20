(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("jquery"));
	else
		root["Survey"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_41__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 103);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __decorate; });
var __assign = Object["assign"] || function (target) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                target[p] = s[p];
    }
    return target;
};
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() { this.constructor = thisClass; }
    thisClass.prototype = baseClass === null ? Object.create(baseClass) : (__.prototype = baseClass.prototype, new __());
}
;
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return surveyLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });
var surveyLocalization = {
    currentLocale: "",
    defaultLocale: "en",
    locales: {},
    supportedLocales: [],
    getString: function (strName) {
        var loc = this.currentLocale ? this.locales[this.currentLocale] : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        return loc[strName];
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = {
    pagePrevText: "Previous",
    pageNextText: "Next",
    completeText: "Complete",
    otherItemText: "Other (describe)",
    progressText: "Page {0} of {1}",
    emptySurvey: "There is no visible page or question in the survey.",
    completingSurvey: "Thank you for completing the survey!",
    completingSurveyBefore: "Our records show that you have already completed this survey.",
    loadingSurvey: "Survey is loading...",
    optionsCaption: "Choose...",
    value: "value",
    requiredError: "Please answer the question.",
    requiredInAllRowsError: "Please answer questions in all rows.",
    numericError: "The value should be numeric.",
    textMinLength: "Please enter at least {0} characters.",
    textMaxLength: "Please enter less than {0} characters.",
    textMinMaxLength: "Please enter more than {0} and less than {1} characters.",
    minRowCountError: "Please fill in at least {0} rows.",
    minSelectError: "Please select at least {0} variants.",
    maxSelectError: "Please select no more than {0} variants.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "The '{0}' should be equal or more than {1}",
    numericMax: "The '{0}' should be equal or less than {1}",
    invalidEmail: "Please enter a valid e-mail address.",
    urlRequestError: "The request returned error '{0}'. {1}",
    urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
    exceedMaxSize: "The file size should not exceed {0}.",
    otherRequiredError: "Please enter the other value.",
    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
    confirmDelete: "Do you want to delete the record?",
    keyDuplicationError: "This value should be unique.",
    addRow: "Add row",
    removeRow: "Remove",
    addPanel: "Add new",
    removePanel: "Remove",
    choices_Item: "item",
    matrix_column: "Column",
    matrix_row: "Row",
    savingData: "The results are saving on the server...",
    savingDataError: "An error occurred and we could not save the results.",
    savingDataSuccess: "The results were saved successfully!",
    saveAgainButton: "Try again"
};
surveyLocalization.locales["en"] = surveyStrings;
if (!String.prototype["format"]) {
    String.prototype["format"] = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return JsonObjectProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomPropertiesCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JsonMetadataClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return JsonMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JsonError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return JsonUnknownPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return JsonMissingTypeErrorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return JsonMissingTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JsonIncorrectTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return JsonRequiredPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonObject; });


var JsonObjectProperty = (function () {
    function JsonObjectProperty(name, isRequired) {
        if (isRequired === void 0) { isRequired = false; }
        this.name = name;
        this.typeValue = null;
        this.choicesValue = null;
        this.isRequiredValue = false;
        this.readOnlyValue = null;
        this.visibleValue = null;
        this.isLocalizableValue = null;
        this.choicesfunc = null;
        this.className = null;
        this.alternativeName = null;
        this.classNamePart = null;
        this.baseClassName = null;
        this.defaultValue = null;
        this.serializationProperty = null;
        this.onGetValue = null;
        this.onSetValue = null;
        this.isRequiredValue = isRequired;
    }
    Object.defineProperty(JsonObjectProperty.prototype, "type", {
        get: function () { return this.typeValue ? this.typeValue : "string"; },
        set: function (value) { this.typeValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "isRequired", {
        get: function () { return this.isRequiredValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
        get: function () { return this.onGetValue || this.serializationProperty; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.isDefaultValue = function (value) {
        return (!__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].isValueEmpty(this.defaultValue)) ? (this.defaultValue == value) : !(value);
    };
    JsonObjectProperty.prototype.getValue = function (obj) {
        if (this.onGetValue)
            return this.onGetValue(obj);
        if (this.serializationProperty)
            return obj[this.serializationProperty].getJson();
        return obj[this.name];
    };
    JsonObjectProperty.prototype.getPropertyValue = function (obj) {
        if (this.isLocalizable)
            return obj[this.serializationProperty].text;
        return this.getValue(obj);
    };
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
        get: function () { return this.onSetValue || this.serializationProperty; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
        if (this.onSetValue) {
            this.onSetValue(obj, value, jsonConv);
        }
        else {
            if (this.serializationProperty)
                obj[this.serializationProperty].setJson(value);
            else {
                if (value && typeof value === "string") {
                    if (this.type == "number") {
                        value = parseInt(value);
                    }
                    if (this.type == "boolean") {
                        value = value.toLowerCase() === "true";
                    }
                }
                obj[this.name] = value;
            }
        }
    };
    JsonObjectProperty.prototype.getObjType = function (objType) {
        if (!this.classNamePart)
            return objType;
        return objType.replace(this.classNamePart, "");
    };
    JsonObjectProperty.prototype.getClassName = function (className) {
        return (this.classNamePart && className.indexOf(this.classNamePart) < 0) ? className + this.classNamePart : className;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
        get: function () {
            if (this.choicesValue != null)
                return this.choicesValue;
            if (this.choicesfunc != null)
                return this.choicesfunc();
            return null;
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
        this.choicesValue = value;
        this.choicesfunc = valueFunc;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "readOnly", {
        get: function () { return this.readOnlyValue != null ? this.readOnlyValue : false; },
        set: function (val) { this.readOnlyValue = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "visible", {
        get: function () { return this.visibleValue != null ? this.visibleValue : true; },
        set: function (val) { this.visibleValue = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "isLocalizable", {
        get: function () { return this.isLocalizableValue != null ? this.isLocalizableValue : false; },
        set: function (val) { this.isLocalizableValue = val; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.mergeWith = function (prop) {
        var valuesNames = JsonObjectProperty.mergableValues;
        for (var i = 0; i < valuesNames.length; i++) {
            this.mergeValue(prop, valuesNames[i]);
        }
    };
    JsonObjectProperty.prototype.mergeValue = function (prop, valueName) {
        if (this[valueName] == null && prop[valueName] != null) {
            this[valueName] = prop[valueName];
        }
    };
    return JsonObjectProperty;
}());

JsonObjectProperty.mergableValues = ["typeValue", "choicesValue", "readOnlyValue", "visibleValue", "isLocalizableValue", "className",
    "alternativeName", "classNamePart", "baseClassName", "defaultValue", "serializationProperty", "onGetValue", "onSetValue"];
var CustomPropertiesCollection = (function () {
    function CustomPropertiesCollection() {
    }
    CustomPropertiesCollection.addProperty = function (className, property) {
        var props = CustomPropertiesCollection.properties;
        if (!props[className]) {
            props[className] = [];
        }
        props[className].push(property);
    };
    CustomPropertiesCollection.removeProperty = function (className, propertyName) {
        var props = CustomPropertiesCollection.properties;
        if (!props[className])
            return;
        var properties = props[className];
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propertyName) {
                props[className].splice(i, 1);
                break;
            }
        }
    };
    CustomPropertiesCollection.addClass = function (className, parentClassName) {
        CustomPropertiesCollection.parentClasses[className] = parentClassName;
    };
    CustomPropertiesCollection.getProperties = function (className) {
        var res = [];
        var props = CustomPropertiesCollection.properties;
        while (className) {
            var properties = props[className];
            if (properties) {
                for (var i = 0; i < properties.length; i++) {
                    res.push(properties[i]);
                }
            }
            className = CustomPropertiesCollection.parentClasses[className];
        }
        return res;
    };
    CustomPropertiesCollection.createProperties = function (obj) {
        if (!obj || !obj.getType)
            return;
        CustomPropertiesCollection.createPropertiesCore(obj, obj.getType());
    };
    CustomPropertiesCollection.createPropertiesCore = function (obj, className) {
        var props = CustomPropertiesCollection.properties;
        if (props[className]) {
            CustomPropertiesCollection.createPropertiesInObj(obj, props[className]);
        }
        var parentClass = CustomPropertiesCollection.parentClasses[className];
        if (parentClass) {
            CustomPropertiesCollection.createPropertiesCore(obj, parentClass);
        }
    };
    CustomPropertiesCollection.createPropertiesInObj = function (obj, properties) {
        for (var i = 0; i < properties.length; i++) {
            CustomPropertiesCollection.createPropertyInObj(obj, properties[i]);
        }
    };
    CustomPropertiesCollection.createPropertyInObj = function (obj, prop) {
        if (obj[prop.name] || obj.hasOwnProperty(prop.name))
            return;
        var desc = {
            get: function () { return obj.getPropertyValue(prop.name, prop.defaultValue); },
            set: function (v) { obj.setPropertyValue(prop.name, v); }
        };
        Object.defineProperty(obj, prop.name, desc);
    };
    return CustomPropertiesCollection;
}());

CustomPropertiesCollection.properties = {};
CustomPropertiesCollection.parentClasses = {};
var JsonMetadataClass = (function () {
    function JsonMetadataClass(name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        this.name = name;
        this.creator = creator;
        this.parentName = parentName;
        this.properties = null;
        this.requiredProperties = null;
        if (parentName) {
            CustomPropertiesCollection.addClass(name, parentName);
        }
        this.properties = new Array();
        for (var i = 0; i < properties.length; i++) {
            var prop = this.createProperty(properties[i]);
            if (prop) {
                this.properties.push(prop);
            }
        }
    }
    JsonMetadataClass.prototype.find = function (name) {
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == name)
                return this.properties[i];
        }
        return null;
    };
    JsonMetadataClass.prototype.createProperty = function (propInfo) {
        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
        if (!propertyName)
            return;
        var propertyType = null;
        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
        if (typeIndex > -1) {
            propertyType = propertyName.substring(typeIndex + 1);
            propertyName = propertyName.substring(0, typeIndex);
        }
        var isRequired = this.getIsPropertyNameRequired(propertyName);
        propertyName = this.getPropertyName(propertyName);
        var prop = new JsonObjectProperty(propertyName, isRequired);
        if (propertyType) {
            prop.type = propertyType;
        }
        if (typeof propInfo === "object") {
            if (propInfo.type) {
                prop.type = propInfo.type;
            }
            if (!__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].isValueEmpty(propInfo.default)) {
                prop.defaultValue = propInfo.default;
            }
            if (propInfo.visible === false) {
                prop.visible = false;
            }
            if (propInfo.isRequired) {
                this.makePropertyRequired(prop.name);
            }
            if (propInfo.choices) {
                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
                prop.setChoices(choicesValue, choicesFunc);
            }
            if (propInfo.onGetValue) {
                prop.onGetValue = propInfo.onGetValue;
            }
            if (propInfo.onSetValue) {
                prop.onSetValue = propInfo.onSetValue;
            }
            if (propInfo.serializationProperty) {
                prop.serializationProperty = propInfo.serializationProperty;
                var s;
                if (prop.serializationProperty && prop.serializationProperty.indexOf("loc") == 0) {
                    prop.isLocalizable = true;
                }
            }
            if (propInfo.isLocalizable) {
                prop.isLocalizable = propInfo.isLocalizable;
            }
            if (propInfo.className) {
                prop.className = propInfo.className;
            }
            if (propInfo.baseClassName) {
                prop.baseClassName = propInfo.baseClassName;
            }
            if (propInfo.classNamePart) {
                prop.classNamePart = propInfo.classNamePart;
            }
            if (propInfo.alternativeName) {
                prop.alternativeName = propInfo.alternativeName;
            }
        }
        return prop;
    };
    JsonMetadataClass.prototype.getIsPropertyNameRequired = function (propertyName) {
        return propertyName.length > 0 && propertyName[0] == JsonMetadataClass.requiredSymbol;
    };
    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
        if (!this.getIsPropertyNameRequired(propertyName))
            return propertyName;
        propertyName = propertyName.slice(1);
        this.makePropertyRequired(propertyName);
        return propertyName;
    };
    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
        if (!this.requiredProperties) {
            this.requiredProperties = new Array();
        }
        this.requiredProperties.push(propertyName);
    };
    return JsonMetadataClass;
}());

JsonMetadataClass.requiredSymbol = '!';
JsonMetadataClass.typeSymbol = ':';
var JsonMetadata = (function () {
    function JsonMetadata() {
        this.classes = {};
        this.childrenClasses = {};
        this.classProperties = {};
        this.classRequiredProperties = {};
    }
    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
        this.classes[name] = metaDataClass;
        if (parentName) {
            var children = this.childrenClasses[parentName];
            if (!children) {
                this.childrenClasses[parentName] = [];
            }
            this.childrenClasses[parentName].push(metaDataClass);
        }
        return metaDataClass;
    };
    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
        var metaDataClass = this.findClass(name);
        if (metaDataClass) {
            metaDataClass.creator = creator;
        }
    };
    JsonMetadata.prototype.getProperties = function (className) {
        var properties = this.classProperties[className];
        if (!properties) {
            properties = new Array();
            this.fillProperties(className, properties);
            this.classProperties[className] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.findProperty = function (className, propertyName) {
        var properties = this.getProperties(className);
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propertyName)
                return properties[i];
        }
        return null;
    };
    JsonMetadata.prototype.createClass = function (name) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return null;
        if (metaDataClass.creator)
            return metaDataClass.creator();
        var parentName = metaDataClass.parentName;
        while (parentName) {
            metaDataClass = this.findClass(parentName);
            if (!metaDataClass)
                return null;
            parentName = metaDataClass.parentName;
            if (metaDataClass.creator)
                return this.createCustomType(name, metaDataClass.creator);
        }
        return null;
    };
    JsonMetadata.prototype.createCustomType = function (name, creator) {
        var res = creator();
        res.customTypeName = name;
        res.customTemplateName = res.getTemplate ? res.getTemplate() : res.getType();
        res.getType = function () { return res.customTypeName; };
        res.getTemplate = function () { return res.customTemplateName; };
        CustomPropertiesCollection.createProperties(res);
        return res;
    };
    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
        if (canBeCreated === void 0) { canBeCreated = false; }
        var result = [];
        this.fillChildrenClasses(name, canBeCreated, result);
        return result;
    };
    JsonMetadata.prototype.getRequiredProperties = function (name) {
        var properties = this.classRequiredProperties[name];
        if (!properties) {
            properties = new Array();
            this.fillRequiredProperties(name, properties);
            this.classRequiredProperties[name] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.addProperties = function (className, propertiesInfos) {
        var metaDataClass = this.findClass(className);
        for (var i = 0; i < propertiesInfos.length; i++) {
            this.addCustomPropertyCore(metaDataClass, propertiesInfos[i]);
        }
    };
    JsonMetadata.prototype.addProperty = function (className, propertyInfo) {
        this.addCustomPropertyCore(this.findClass(className), propertyInfo);
    };
    JsonMetadata.prototype.addCustomPropertyCore = function (metaDataClass, propertyInfo) {
        if (!metaDataClass)
            return;
        var property = metaDataClass.createProperty(propertyInfo);
        if (property) {
            this.addPropertyToClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
            CustomPropertiesCollection.addProperty(metaDataClass.name, property);
        }
    };
    JsonMetadata.prototype.removeProperty = function (className, propertyName) {
        var metaDataClass = this.findClass(className);
        if (!metaDataClass)
            return false;
        var property = metaDataClass.find(propertyName);
        if (property) {
            this.removePropertyFromClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
            CustomPropertiesCollection.removeProperty(className, propertyName);
        }
    };
    JsonMetadata.prototype.addPropertyToClass = function (metaDataClass, property) {
        if (metaDataClass.find(property.name) != null)
            return;
        metaDataClass.properties.push(property);
    };
    JsonMetadata.prototype.removePropertyFromClass = function (metaDataClass, property) {
        var index = metaDataClass.properties.indexOf(property);
        if (index < 0)
            return;
        metaDataClass.properties.splice(index, 1);
        if (metaDataClass.requiredProperties) {
            index = metaDataClass.requiredProperties.indexOf(property.name);
            if (index >= 0) {
                metaDataClass.requiredProperties.splice(index, 1);
            }
        }
    };
    JsonMetadata.prototype.emptyClassPropertiesHash = function (metaDataClass) {
        this.classProperties[metaDataClass.name] = null;
        var childClasses = this.getChildrenClasses(metaDataClass.name);
        for (var i = 0; i < childClasses.length; i++) {
            this.classProperties[childClasses[i].name] = null;
        }
    };
    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
        var children = this.childrenClasses[name];
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            if (!canBeCreated || children[i].creator) {
                result.push(children[i]);
            }
            this.fillChildrenClasses(children[i].name, canBeCreated, result);
        }
    };
    JsonMetadata.prototype.findClass = function (name) {
        return this.classes[name];
    };
    JsonMetadata.prototype.fillProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.parentName) {
            this.fillProperties(metaDataClass.parentName, list);
        }
        for (var i = 0; i < metaDataClass.properties.length; i++) {
            this.addPropertyCore(metaDataClass.properties[i], list, list.length);
        }
    };
    JsonMetadata.prototype.addPropertyCore = function (property, list, endIndex) {
        var index = -1;
        for (var i = 0; i < endIndex; i++) {
            if (list[i].name == property.name) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            list.push(property);
        }
        else {
            property.mergeWith(list[index]);
            list[index] = property;
        }
    };
    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.requiredProperties) {
            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
        }
        if (metaDataClass.parentName) {
            this.fillRequiredProperties(metaDataClass.parentName, list);
        }
    };
    return JsonMetadata;
}());

var JsonError = (function () {
    function JsonError(type, message) {
        this.type = type;
        this.message = message;
        this.description = "";
        this.at = -1;
    }
    JsonError.prototype.getFullDescription = function () {
        return this.message + (this.description ? "\n" + this.description : "");
    };
    return JsonError;
}());

var JsonUnknownPropertyError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonUnknownPropertyError, _super);
    function JsonUnknownPropertyError(propertyName, className) {
        var _this = _super.call(this, "unknownproperty", "The property '" + propertyName + "' in class '" + className + "' is unknown.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        var properties = JsonObject.metaData.getProperties(className);
        if (properties) {
            _this.description = "The list of available properties are: ";
            for (var i = 0; i < properties.length; i++) {
                if (i > 0)
                    _this.description += ", ";
                _this.description += properties[i].name;
            }
            _this.description += '.';
        }
        return _this;
    }
    return JsonUnknownPropertyError;
}(JsonError));

var JsonMissingTypeErrorBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeErrorBase, _super);
    function JsonMissingTypeErrorBase(baseClassName, type, message) {
        var _this = _super.call(this, type, message) || this;
        _this.baseClassName = baseClassName;
        _this.type = type;
        _this.message = message;
        _this.description = "The following types are available: ";
        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
        for (var i = 0; i < types.length; i++) {
            if (i > 0)
                _this.description += ", ";
            _this.description += "'" + types[i].name + "'";
        }
        _this.description += ".";
        return _this;
    }
    return JsonMissingTypeErrorBase;
}(JsonError));

var JsonMissingTypeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeError, _super);
    function JsonMissingTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + propertyName + "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonMissingTypeError;
}(JsonMissingTypeErrorBase));

var JsonIncorrectTypeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonIncorrectTypeError, _super);
    function JsonIncorrectTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + propertyName + "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonIncorrectTypeError;
}(JsonMissingTypeErrorBase));

var JsonRequiredPropertyError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonRequiredPropertyError, _super);
    function JsonRequiredPropertyError(propertyName, className) {
        var _this = _super.call(this, "requiredproperty", "The property '" + propertyName + "' is required in class '" + className + "'.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        return _this;
    }
    return JsonRequiredPropertyError;
}(JsonError));

var JsonObject = (function () {
    function JsonObject() {
        this.errors = new Array();
    }
    Object.defineProperty(JsonObject, "metaData", {
        get: function () { return JsonObject.metaDataValue; },
        enumerable: true,
        configurable: true
    });
    JsonObject.prototype.toJsonObject = function (obj) {
        return this.toJsonObjectCore(obj, null);
    };
    JsonObject.prototype.toObject = function (jsonObj, obj) {
        if (!jsonObj)
            return;
        var properties = null;
        if (obj.getType) {
            properties = JsonObject.metaData.getProperties(obj.getType());
        }
        if (!properties)
            return;
        if (obj.startLoadingFromJson) {
            obj.startLoadingFromJson();
        }
        for (var key in jsonObj) {
            if (key == JsonObject.typePropertyName)
                continue;
            if (key == JsonObject.positionPropertyName) {
                obj[key] = jsonObj[key];
                continue;
            }
            var property = this.findProperty(properties, key);
            if (!property) {
                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
                continue;
            }
            this.valueToObj(jsonObj[key], obj, key, property);
        }
        if (obj.endLoadingFromJson) {
            obj.endLoadingFromJson();
        }
    };
    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
        if (!obj.getType)
            return obj;
        var result = {};
        if (property != null && (!property.className)) {
            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
        }
        var properties = JsonObject.metaData.getProperties(obj.getType());
        for (var i = 0; i < properties.length; i++) {
            this.valueToJson(obj, result, properties[i]);
        }
        return result;
    };
    JsonObject.prototype.valueToJson = function (obj, result, property) {
        var value = property.getValue(obj);
        if (value === undefined || value === null)
            return;
        if (property.isDefaultValue(value))
            return;
        if (this.isValueArray(value)) {
            var arrValue = [];
            for (var i = 0; i < value.length; i++) {
                arrValue.push(this.toJsonObjectCore(value[i], property));
            }
            value = arrValue.length > 0 ? arrValue : null;
        }
        else {
            value = this.toJsonObjectCore(value, property);
        }
        if (!property.isDefaultValue(value)) {
            result[property.name] = value;
        }
    };
    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
        if (value == null)
            return;
        if (property != null && property.hasToUseSetValue) {
            property.setValue(obj, value, this);
            return;
        }
        if (this.isValueArray(value)) {
            this.valueToArray(value, obj, property.name, property);
            return;
        }
        var newObj = this.createNewObj(value, property);
        if (newObj.newObj) {
            this.toObject(value, newObj.newObj);
            value = newObj.newObj;
        }
        if (!newObj.error) {
            if (property != null) {
                property.setValue(obj, value, this);
            }
            else {
                obj[property.name] = value;
            }
        }
    };
    JsonObject.prototype.isValueArray = function (value) { return value && Array.isArray(value); };
    JsonObject.prototype.createNewObj = function (value, property) {
        var result = { newObj: null, error: null };
        var className = value[JsonObject.typePropertyName];
        if (!className && property != null && property.className) {
            className = property.className;
        }
        className = property.getClassName(className);
        result.newObj = (className) ? JsonObject.metaData.createClass(className) : null;
        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
        return result;
    };
    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
        var error = null;
        if (newObj) {
            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
            if (requiredProperties) {
                for (var i = 0; i < requiredProperties.length; i++) {
                    if (!value[requiredProperties[i]]) {
                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
                        break;
                    }
                }
            }
        }
        else {
            if (property.baseClassName) {
                if (!className) {
                    error = new JsonMissingTypeError(property.name, property.baseClassName);
                }
                else {
                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
                }
            }
        }
        if (error) {
            this.addNewError(error, value);
        }
        return error;
    };
    JsonObject.prototype.addNewError = function (error, jsonObj) {
        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
            error.at = jsonObj[JsonObject.positionPropertyName].start;
        }
        this.errors.push(error);
    };
    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
        if (obj[key] && value.length > 0)
            obj[key].splice(0, obj[key].length);
        if (!obj[key])
            obj[key] = [];
        for (var i = 0; i < value.length; i++) {
            var newValue = this.createNewObj(value[i], property);
            if (newValue.newObj) {
                obj[key].push(newValue.newObj);
                this.toObject(value[i], newValue.newObj);
            }
            else {
                if (!newValue.error) {
                    obj[key].push(value[i]);
                }
            }
        }
    };
    JsonObject.prototype.findProperty = function (properties, key) {
        if (!properties)
            return null;
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            if (prop.name == key || prop.alternativeName == key)
                return prop;
        }
        return null;
    };
    return JsonObject;
}());

JsonObject.typePropertyName = "type";
JsonObject.positionPropertyName = "pos";
JsonObject.metaDataValue = new JsonMetadata();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.unstable_renderSubtreeIntoContainer = exports.PureComponent = exports.Component = exports.unmountComponentAtNode = exports.findDOMNode = exports.isValidElement = exports.cloneElement = exports.createElement = exports.createFactory = exports.createClass = exports.render = exports.Children = exports.PropTypes = exports.DOM = exports.version = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _proptypes = __webpack_require__(45);

var _proptypes2 = _interopRequireDefault(_proptypes);

var _preact = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process === 'undefined' || !process.env || process.env.NODE_ENV !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = (0, _preact.h)('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},

	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},

	configurable: true
});

var oldEventHook = _preact.options.event;
_preact.options.event = function (e) {
	if (oldEventHook) e = oldEventHook(e);
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = _preact.options.vnode;
_preact.options.vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes;

		if (!attrs) attrs = vnode.attributes = {};

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && !vnode.children.length) vnode.children = undefined;
				if (vnode.children) attrs.children = vnode.children;

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && !vnode.children.length) vnode.children = undefined;
			if (vnode.children) attrs.children = vnode.children;

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) oldVnodeHook(vnode);
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) extend(vnode.attributes, tag.defaultProps);
	if (a) extend(vnode.attributes, a);
}

function handleElementVNode(vnode, a) {
	var shouldSanitize = void 0,
	    attrs = void 0,
	    i = void 0;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) break;
		}if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) prev = null;

	// default to first Element child
	if (!prev) prev = parent.children[0];

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = (0, _preact.render)(vnode, parent, prev);
	if (parent) parent._preactCompatRendered = out;
	if (typeof callback === 'function') callback();
	return out && out._component || out.base;
}

var ContextProvider = function () {
	function ContextProvider() {
		_classCallCheck(this, ContextProvider);
	}

	_createClass(ContextProvider, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render(props) {
			return props.children[0];
		}
	}]);

	return ContextProvider;
}();

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = (0, _preact.h)(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render(wrap, container);
	if (callback) callback(c);
	return c;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered;
	if (existing && existing.parentNode === container) {
		(0, _preact.render)((0, _preact.h)(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) return null;
		children = Children.toArray(children);
		if (ctx && ctx !== children) fn = fn.bind(ctx);
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) return null;
		children = Children.toArray(children);
		if (ctx && ctx !== children) fn = fn.bind(ctx);
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) throw new Error('Children.only() expects only one child.');
		return children[0];
	},
	toArray: function toArray(children) {
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent = void 0;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var _i = offset || 0; _i < arr.length; _i++) {
		var obj = arr[_i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[_i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) return Wrapped === true ? Ctor : Wrapped;

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	upgradeToVNodes(args, 2);
	return normalizeVNode(_preact.h.apply(undefined, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && (typeof ref === 'undefined' ? 'undefined' : _typeof(ref));
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement(element, props) {
	if (!isValidElement(element)) return element;
	var elementProps = element.attributes || element.props;
	var node = (0, _preact.h)(element.nodeName || element.type, elementProps, element.children || elementProps && elementProps.children);

	for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		children[_key2 - 2] = arguments[_key2];
	}

	return normalizeVNode(_preact.cloneElement.apply(undefined, [node, props].concat(children)));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(_ref) {
	var nodeName = _ref.nodeName,
	    attributes = _ref.attributes;

	if (!attributes || typeof nodeName !== 'string') return;
	var props = {};
	for (var _i2 in attributes) {
		props[_i2.toLowerCase()] = _i2;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(_ref2) {
	var attributes = _ref2.attributes;

	if (!attributes) return;
	var cl = attributes.className || attributes.class;
	if (cl) attributes.className = cl;
}

function extend(base, props) {
	for (var key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var _i3 in a) {
		if (!(_i3 in b)) return true;
	}for (var _i4 in b) {
		if (a[_i4] !== b[_i4]) return true;
	}return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var _i5 = 0; _i5 < mixins.length; _i5++) {
		var mixin = mixins[_i5];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var _i6 in ctx) {
		var v = ctx[_i6];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(_i6)) {
			(ctx[_i6] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var ret = void 0;
		for (var _i7 = 0; _i7 < hooks.length; _i7++) {
			var r = callMethod(this, hooks[_i7], arguments);

			if (skipDuplicates && r != null) {
				if (!ret) ret = {};
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') ret = r;
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) return;

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && _typeof(props.children) === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		if (propTypes) {
			for (var prop in propTypes) {
				if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop] === 'function') {
					var displayName = this.displayName || ctor.name;
					var err = propTypes[prop](props, prop, displayName, 'prop');
					if (err) console.error(new Error(err.message || err));
				}
			}
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component(props, context, opts) {
	_preact.Component.call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component.prototype = new _preact.Component(), {
	constructor: Component,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		this.setState(state, callback);
		for (var _i8 in this.state) {
			if (!(_i8 in state)) {
				delete this.state[_i8];
			}
		}
	},
	getDOMNode: function getDOMNode() {
		return this.base;
	},
	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component.call(this, props, context);
}
F.prototype = Component.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

exports.version = version;
exports.DOM = DOM;
exports.PropTypes = _proptypes2.default;
exports.Children = Children;
exports.render = render;
exports.createClass = createClass;
exports.createFactory = createFactory;
exports.createElement = createElement;
exports.cloneElement = cloneElement;
exports.isValidElement = isValidElement;
exports.findDOMNode = findDOMNode;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
exports.default = {
	version: version,
	DOM: DOM,
	PropTypes: _proptypes2.default,
	Children: Children,
	render: render,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyElementBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReactSurveyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionElementBase; });


var SurveyElementBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyElementBase, _super);
    function SurveyElementBase(props) {
        var _this = _super.call(this, props) || this;
        _this.isDisplayMode = props.isDisplayMode || false;
        return _this;
    }
    SurveyElementBase.renderLocString = function (locStr, style) {
        if (style === void 0) { style = null; }
        if (locStr.hasHtml) {
            var htmlValue = { __html: locStr.renderedHtml };
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { style: style, dangerouslySetInnerHTML: htmlValue });
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { style: style }, locStr.renderedHtml);
    };
    SurveyElementBase.prototype.componentWillReceiveProps = function (nextProps) {
        this.isDisplayMode = nextProps.isDisplayMode || false;
    };
    SurveyElementBase.prototype.renderLocString = function (locStr, style) {
        if (style === void 0) { style = null; }
        return SurveyElementBase.renderLocString(locStr, style);
    };
    return SurveyElementBase;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var ReactSurveyElement = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ReactSurveyElement, _super);
    function ReactSurveyElement(props) {
        var _this = _super.call(this, props) || this;
        _this.cssClasses = props.cssClasses;
        return _this;
    }
    ReactSurveyElement.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.cssClasses = nextProps.cssClasses;
    };
    return ReactSurveyElement;
}(SurveyElementBase));

var SurveyQuestionElementBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionElementBase, _super);
    function SurveyQuestionElementBase(props) {
        var _this = _super.call(this, props) || this;
        _this.questionBase = props.question;
        _this.creator = props.creator;
        return _this;
    }
    SurveyQuestionElementBase.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.questionBase = nextProps.question;
        this.creator = nextProps.creator;
    };
    SurveyQuestionElementBase.prototype.shouldComponentUpdate = function () {
        return !this.questionBase.customWidget
            || !!this.questionBase.customWidgetData.isNeedRender
            || !!this.questionBase.customWidget.widgetJson.render;
    };
    return SurveyQuestionElementBase;
}(SurveyElementBase));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ElementFactory; });

//TODO replace completely with ElementFactory
var QuestionFactory = (function () {
    function QuestionFactory() {
        this.creatorHash = {};
    }
    Object.defineProperty(QuestionFactory, "DefaultChoices", {
        get: function () {
            return [__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("choices_Item") + "1", __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("choices_Item") + "2", __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("choices_Item") + "3"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFactory, "DefaultColums", {
        get: function () {
            var colName = __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("matrix_column") + " ";
            return [colName + "1", colName + "2", colName + "3"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFactory, "DefaultRows", {
        get: function () {
            var rowName = __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("matrix_row") + " ";
            return [rowName + "1", rowName + "2"];
        },
        enumerable: true,
        configurable: true
    });
    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    QuestionFactory.prototype.clear = function () {
        this.creatorHash = {};
    };
    QuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    QuestionFactory.prototype.createQuestion = function (questionType, name) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(name);
    };
    return QuestionFactory;
}());

QuestionFactory.Instance = new QuestionFactory();
var ElementFactory = (function () {
    function ElementFactory() {
        this.creatorHash = {};
    }
    ElementFactory.prototype.registerElement = function (elementType, elementCreator) {
        this.creatorHash[elementType] = elementCreator;
    };
    ElementFactory.prototype.clear = function () {
        this.creatorHash = {};
    };
    ElementFactory.prototype.getAllTypes = function () {
        var result = QuestionFactory.Instance.getAllTypes();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ElementFactory.prototype.createElement = function (elementType, name) {
        var creator = this.creatorHash[elementType];
        if (creator == null)
            return QuestionFactory.Instance.createQuestion(elementType, name);
        return creator(name);
    };
    return ElementFactory;
}());

ElementFactory.Instance = new ElementFactory();


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactQuestionFactory; });
var ReactQuestionFactory = (function () {
    function ReactQuestionFactory() {
        this.creatorHash = {};
    }
    ReactQuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    ReactQuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ReactQuestionFactory.prototype.createQuestion = function (questionType, params) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(params);
    };
    return ReactQuestionFactory;
}());

ReactQuestionFactory.Instance = new ReactQuestionFactory();


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localizablestring__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Event; });





/**
 * The base class for SurveyJS objects.
 */
var Base = (function () {
    function Base() {
        this.propertyHash = {};
        this.localizableStrings = {};
        this.arraysInfo = {};
        this.onPropChangeFunctions = [];
        this.isLoadingFromJsonValue = false;
        this.onPropertyChanged = new Event();
        __WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* CustomPropertiesCollection */].createProperties(this);
    }
    /**
     * A static methods that returns true if a value underfined, null, empty string or empty array.
     * @param value
     */
    Base.prototype.isValueEmpty = function (value) {
        return __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].isValueEmpty(value);
    };
    Base.prototype.IsPropertyEmpty = function (value) {
        return value !== "" && this.isValueEmpty(value);
    };
    /**
     * Returns the type of the object as a string as it represents in the json.
     */
    Base.prototype.getType = function () { return "base"; };
    /**
     * Returns the element template name without prefix. Typically it equals to getType()
     * @see getType
     */
    Base.prototype.getTemplate = function () { return this.getType(); };
    Object.defineProperty(Base.prototype, "isLoadingFromJson", {
        /**
         * Returns true if the object is loading from Json at the current moment.
         */
        get: function () { return this.isLoadingFromJsonValue; },
        enumerable: true,
        configurable: true
    });
    Base.prototype.startLoadingFromJson = function () {
        this.isLoadingFromJsonValue = true;
    };
    Base.prototype.endLoadingFromJson = function () {
        this.isLoadingFromJsonValue = false;
    };
    Base.prototype.onLocaleChanged = function () {
        for (var key in this.arraysInfo) {
            var item = this.arraysInfo[key];
            if (item && item.isItemValues) {
                var arr = this.getPropertyValue(key);
                if (arr)
                    __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].NotifyArrayOnLocaleChanged(arr);
            }
        }
        for (var key in this.localizableStrings) {
            var item = this.getLocalizableString(key);
            if (item)
                item.onChanged();
        }
    };
    /**
     * Returns the property value by name
     * @param name property name
     */
    Base.prototype.getPropertyValue = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var res = this.propertyHash[name];
        if (this.IsPropertyEmpty(res) && defaultValue != null)
            return defaultValue;
        return res;
    };
    Base.prototype.setPropertyValueCore = function (propertiesHash, name, val) {
        if (this.setPropertyValueCoreHandler)
            this.setPropertyValueCoreHandler(propertiesHash, name, val);
        else
            propertiesHash[name] = val;
    };
    /**
     * set property value
     * @param name property name
     * @param val new property value
     */
    Base.prototype.setPropertyValue = function (name, val) {
        var oldValue = this.propertyHash[name];
        if (oldValue && Array.isArray(oldValue)) {
            if (this.isTwoValueEquals(oldValue, val))
                return;
            var arrayInfo = this.arraysInfo[name];
            this.setArray(oldValue, val, arrayInfo ? arrayInfo.isItemValues : false, arrayInfo ? arrayInfo.onPush : null);
            this.propertyValueChanged(name, oldValue, oldValue);
        }
        else {
            this.setPropertyValueCore(this.propertyHash, name, val);
            if (!this.isTwoValueEquals(oldValue, val)) {
                this.propertyValueChanged(name, oldValue, val);
            }
        }
    };
    Base.prototype.propertyValueChanged = function (name, oldValue, newValue) {
        if (this.isLoadingFromJson)
            return;
        this.onPropertyChanged.fire(this, { name: name, oldValue: oldValue, newValue: newValue });
        for (var i = 0; i < this.onPropChangeFunctions.length; i++) {
            if (this.onPropChangeFunctions[i].name == name)
                this.onPropChangeFunctions[i].func();
        }
    };
    /**
     * Register a function that will be called on a property value changed.
     * @param name the property name
     * @param func the function with no parameters that will be called on property changed.
     * @param key an optional parameter. If there is already a registered function for this property witht the same key, it will be overwritten.
     */
    Base.prototype.registerFunctionOnPropertyValueChanged = function (name, func, key) {
        if (key === void 0) { key = null; }
        if (key) {
            for (var i = 0; i < this.onPropChangeFunctions.length; i++) {
                var item = this.onPropChangeFunctions[i];
                if (item.name == name && item.key == key) {
                    item.func = func;
                    return;
                }
            }
        }
        this.onPropChangeFunctions.push({ name: name, func: func, key: key });
    };
    /**
     * Register a function that will be called on a property value changed from the names list.
     * @param names the list of properties names
     * @param func the function with no parameters that will be called on property changed.
     * @param key an optional parameter. If there is already a registered function for this property witht the same key, it will be overwritten.
     */
    Base.prototype.registerFunctionOnPropertiesValueChanged = function (names, func, key) {
        if (key === void 0) { key = null; }
        for (var i = 0; i < names.length; i++) {
            this.registerFunctionOnPropertyValueChanged(names[i], func, key);
        }
    };
    /**
     * Unregister notification on property value changed
     * @param name the property name
     * @param key the key with which you have registered the notification for this property. It can be null.
     */
    Base.prototype.unRegisterFunctionOnPropertyValueChanged = function (name, key) {
        if (key === void 0) { key = null; }
        for (var i = 0; i < this.onPropChangeFunctions.length; i++) {
            var item = this.onPropChangeFunctions[i];
            if (item.name == name && item.key == key) {
                this.onPropChangeFunctions.splice(i, 1);
                return;
            }
        }
    };
    /**
     * Unregister notification on property value changed for all properties in the names list.
     * @param names the list of properties names
     * @param key the key with which you have registered the notification for this property. It can be null.
     */
    Base.prototype.unRegisterFunctionOnPropertiesValueChanged = function (names, key) {
        if (key === void 0) { key = null; }
        for (var i = 0; i < names.length; i++) {
            this.unRegisterFunctionOnPropertyValueChanged(names[i], key);
        }
    };
    Base.prototype.createLocalizableString = function (name, owner, useMarkDown) {
        if (useMarkDown === void 0) { useMarkDown = false; }
        var locStr = new __WEBPACK_IMPORTED_MODULE_1__localizablestring__["a" /* LocalizableString */](owner, useMarkDown);
        this.localizableStrings[name] = locStr;
        return locStr;
    };
    Base.prototype.getLocalizableString = function (name) {
        return this.localizableStrings[name];
    };
    Base.prototype.getLocalizableStringText = function (name, defaultStr) {
        if (defaultStr === void 0) { defaultStr = ""; }
        var locStr = this.getLocalizableString(name);
        if (!locStr)
            return "";
        var res = locStr.text;
        return res ? res : defaultStr;
    };
    Base.prototype.setLocalizableStringText = function (name, value) {
        var locStr = this.getLocalizableString(name);
        if (!locStr)
            return;
        var oldValue = locStr.text;
        if (oldValue === value)
            return;
        locStr.text = value;
        this.propertyValueChanged(name, oldValue, value);
    };
    Base.prototype.createItemValues = function (name) {
        var self = this;
        var result = this.createNewArray(name, function (item) { item.locOwner = self; });
        this.arraysInfo[name].isItemValues = true;
        return result;
    };
    Base.prototype.createNewArray = function (name, onPush, onRemove) {
        if (onPush === void 0) { onPush = null; }
        if (onRemove === void 0) { onRemove = null; }
        var newArray = new Array();
        this.setPropertyValueCore(this.propertyHash, name, newArray);
        this.arraysInfo[name] = { onPush: onPush, isItemValues: false };
        var self = this;
        newArray.push = function (value) {
            var result = Array.prototype.push.call(newArray, value);
            if (onPush)
                onPush(value);
            self.propertyValueChanged(name, newArray, newArray);
            return result;
        };
        newArray.pop = function () {
            var result = Array.prototype.pop.call(newArray);
            if (onRemove)
                onRemove(result);
            self.propertyValueChanged(name, newArray, newArray);
            return result;
        };
        newArray.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            if (!start)
                start = 0;
            if (!deleteCount)
                deleteCount = 0;
            var result = (_a = Array.prototype.splice).call.apply(_a, [newArray, start, deleteCount].concat(items));
            if (!items)
                items = [];
            if (onRemove && result) {
                for (var i = 0; i < result.length; i++) {
                    onRemove(result[i]);
                }
            }
            if (onPush) {
                for (var i = 0; i < items.length; i++) {
                    onPush(items[i], start + i);
                }
            }
            self.propertyValueChanged(name, newArray, newArray);
            return result;
            var _a;
        };
        return newArray;
    };
    Base.prototype.setArray = function (src, dest, isItemValues, onPush) {
        src.length = 0;
        if (!dest)
            return;
        for (var i = 0; i < dest.length; i++) {
            if (isItemValues) {
                var item = dest[i];
                item = new __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */](null);
                item.setData(dest[i]);
                Array.prototype.push.call(src, item);
            }
            else {
                Array.prototype.push.call(src, dest[i]);
            }
            if (onPush)
                onPush(src[i]);
        }
    };
    Base.prototype.isTwoValueEquals = function (x, y) {
        if (x === y)
            return true;
        if (!(x instanceof Object) || !(y instanceof Object))
            return false;
        for (var p in x) {
            if (!x.hasOwnProperty(p))
                continue;
            if (!y.hasOwnProperty(p))
                return false;
            if (x[p] === y[p])
                continue;
            if (typeof (x[p]) !== "object")
                return false;
            if (!this.isTwoValueEquals(x[p], y[p]))
                return false;
        }
        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
                return false;
        }
        return true;
    };
    return Base;
}());

Base.commentPrefix = "-Comment";
var SurveyError = (function () {
    function SurveyError() {
    }
    SurveyError.prototype.getText = function () {
        throw new Error('This method is abstract');
    };
    return SurveyError;
}());

var SurveyElement = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyElement, _super);
    function SurveyElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedElementInDesignValue = _this;
        return _this;
    }
    SurveyElement.ScrollElementToTop = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (!el || !el.scrollIntoView)
            return false;
        var elemTop = el.getBoundingClientRect().top;
        if (elemTop < 0)
            el.scrollIntoView();
        return elemTop < 0;
    };
    SurveyElement.GetFirstNonTextElement = function (elements) {
        if (!elements || !elements.length)
            return;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
                return elements[i];
        }
        return null;
    };
    SurveyElement.FocusElement = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (el) {
            el.focus();
            return true;
        }
        return false;
    };
    SurveyElement.prototype.setSurveyImpl = function (value) {
        this.surveyImplValue = value;
        if (!this.surveyImplValue)
            return;
        this.surveyDataValue = this.surveyImplValue.geSurveyData();
        this.surveyValue = this.surveyImplValue.getSurvey();
        this.textProcessorValue = this.surveyImplValue.getTextProcessor();
        this.onSetData();
    };
    SurveyElement.setVisibleIndex = function (questions, index, showIndex) {
        var startIndex = index;
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            if (!showIndex || !q.visible || !q.hasTitle) {
                q.setVisibleIndex(-1);
            }
            else {
                index += q.setVisibleIndex(index);
            }
        }
        return index - startIndex;
    };
    Object.defineProperty(SurveyElement.prototype, "surveyImpl", {
        get: function () { return this.surveyImplValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "data", {
        get: function () { return this.surveyDataValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "survey", {
        /**
         * Returns the survey object.
         */
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "isLoadingFromJson", {
        get: function () {
            if (this.survey)
                return this.survey.isLoadingFromJson;
            return this.isLoadingFromJsonValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyElement.prototype.getElementsInDesign = function (includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        return [];
    };
    Object.defineProperty(SurveyElement.prototype, "selectedElementInDesign", {
        get: function () { return this.selectedElementInDesignValue; },
        set: function (val) { this.selectedElementInDesignValue = val; },
        enumerable: true,
        configurable: true
    });
    SurveyElement.prototype.updateCustomWidgets = function () { };
    SurveyElement.prototype.onSurveyLoad = function () { };
    SurveyElement.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        if (!this.survey) {
            this.onSurveyLoad();
        }
    };
    Object.defineProperty(SurveyElement.prototype, "textProcessor", {
        get: function () { return this.textProcessorValue; },
        enumerable: true,
        configurable: true
    });
    SurveyElement.prototype.onSetData = function () { };
    return SurveyElement;
}(Base));

var Event = (function () {
    function Event() {
    }
    Object.defineProperty(Event.prototype, "isEmpty", {
        get: function () { return this.callbacks == null || this.callbacks.length == 0; },
        enumerable: true,
        configurable: true
    });
    Event.prototype.fire = function (sender, options) {
        if (this.callbacks == null)
            return;
        for (var i = 0; i < this.callbacks.length; i++) {
            var callResult = this.callbacks[i](sender, options);
        }
    };
    Event.prototype.add = function (func) {
        if (this.callbacks == null) {
            this.callbacks = new Array();
        }
        this.callbacks.push(func);
    };
    Event.prototype.remove = function (func) {
        if (this.callbacks == null)
            return;
        var index = this.callbacks.indexOf(func, 0);
        if (index != undefined) {
            this.callbacks.splice(index, 1);
        }
    };
    return Event;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionbase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conditions__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });









/**
 * Extends question base class with title, value, errors and other functionality
 */
var Question = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Question, _super);
    function Question(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.errorsValue = [];
        _this.validatorsValue = _this.createNewArray("validators");
        _this.isvalueChangedCallbackFiring = false;
        _this.isValueChangedInSurvey = false;
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) { return self.fullTitle; };
        var locDescriptionValue = _this.createLocalizableString("description", _this, true);
        locDescriptionValue.onGetTextCallback = function (html) { return self.getProcessedHtml(html); };
        _this.createLocalizableString("commentText", _this, true);
        _this.createLocalizableString("requiredErrorText", _this);
        return _this;
    }
    Question.prototype.getType = function () { return "question"; };
    Object.defineProperty(Question.prototype, "hasTitle", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasDescription", {
        get: function () { return this.description != ""; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "titleLocation", {
        get: function () { return this.survey ? this.survey.questionTitleLocation : "top"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "errorLocation", {
        get: function () { return this.survey ? this.survey.questionErrorLocation : "top"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasInput", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "inputId", {
        get: function () { return this.id + "i"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        /**
         * Question title. Use survey questionTitleTemplate property to change the title question is rendered. If it is empty, then question name property is used.
         * @see SurveyModel.questionTitleTemplate
        */
        get: function () {
            return this.getLocalizableStringText("title", this.name);
        },
        set: function (val) {
            this.setLocalizableStringText("title", val);
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locTitle", {
        get: function () { return this.getLocalizableString("title"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "description", {
        /**
         * Question description. It renders under question title by using smaller font. Unlike the title, description can be empty.
         * @see title
         */
        get: function () { return this.getLocalizableStringText("description"); },
        set: function (val) { this.setLocalizableStringText("description", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locDescription", {
        get: function () { return this.getLocalizableString("description"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "requiredErrorText", {
        /**
         * The custom text that will be shown on required error. Use this property, if you do not want to show the default text.
         */
        get: function () { return this.getLocalizableStringText("requiredErrorText"); },
        set: function (val) { this.setLocalizableStringText("requiredErrorText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locRequiredErrorText", {
        get: function () { return this.getLocalizableString("requiredErrorText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "commentText", {
        /**
         * Use it to get or set the comment value.
         */
        get: function () { return this.getLocalizableStringText("commentText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText")); },
        set: function (val) { this.setLocalizableStringText("commentText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locCommentText", {
        get: function () { return this.getLocalizableString("commentText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locTitleHtml", {
        get: function () {
            var res = this.locTitle.textOrHtml;
            return res ? res : this.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a copy of question errors survey. For some questions like matrix and panel dynamic it includes the errors of nested questions.
     */
    Question.prototype.getAllErrors = function () { return this.errors.slice(); };
    Question.prototype.getProcessedHtml = function (html) {
        if (!html || !this.textProcessor)
            return html;
        return this.textProcessor.processText(html, true);
    };
    Object.defineProperty(Question.prototype, "processedTitle", {
        /**
         * Returns the rendred question title.
         */
        get: function () { return this.getProcessedHtml(this.locTitleHtml); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "fullTitle", {
        /**
         * Returns the title after processing the question template.
         * @see SurveyModel.questionTitleTemplate
         */
        get: function () {
            if (this.survey && this.survey.getQuestionTitleTemplate()) {
                if (!this.textPreProcessor) {
                    var self = this;
                    this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__["a" /* TextPreProcessor */]();
                    this.textPreProcessor.onHasValue = function (name) { return self.canProcessedTextValues(name.toLowerCase()); };
                    this.textPreProcessor.onProcess = function (name) { return self.getProcessedTextValue(name); };
                }
                return this.textPreProcessor.process(this.survey.getQuestionTitleTemplate());
            }
            var requireText = this.requiredText;
            if (requireText)
                requireText += " ";
            var no = this.no;
            if (no)
                no += ". ";
            return no + requireText + this.processedTitle;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
        __WEBPACK_IMPORTED_MODULE_3__base__["a" /* SurveyElement */].ScrollElementToTop(this.id);
        var id = !onError ? this.getFirstInputElementId() : this.getFirstErrorInputElementId();
        if (__WEBPACK_IMPORTED_MODULE_3__base__["a" /* SurveyElement */].FocusElement(id)) {
            this.fireCallback(this.focusCallback);
        }
    };
    Question.prototype.updateCssClasses = function (res, surveyCss) {
        _super.prototype.updateCssClasses.call(this, res, surveyCss);
        if (this.isRequired) {
            if (surveyCss.question.required) {
                res.root += " " + surveyCss.question.required;
            }
            if (surveyCss.question.titleRequired) {
                res.title += " " + surveyCss.question.titleRequired;
            }
        }
    };
    Question.prototype.getFirstInputElementId = function () {
        return this.inputId;
    };
    Question.prototype.getFirstErrorInputElementId = function () {
        return this.getFirstInputElementId();
    };
    Question.prototype.canProcessedTextValues = function (name) {
        return name == "no" || name == "title" || name == "require";
    };
    Question.prototype.getProcessedTextValue = function (name) {
        if (name == "no")
            return this.no;
        if (name == "title")
            return this.processedTitle;
        if (name == "require")
            return this.requiredText;
        return null;
    };
    Question.prototype.supportComment = function () { return false; };
    Question.prototype.supportOther = function () { return false; };
    Object.defineProperty(Question.prototype, "isRequired", {
        /**
         * Set this property to true, to make the question a required. If a user doesn't answer the question then a validation error will be generated.
         */
        get: function () { return this.getPropertyValue("isRequired", false); },
        set: function (val) {
            if (this.isRequired == val)
                return;
            this.setPropertyValue("isRequired", val);
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasComment", {
        get: function () { return this.getPropertyValue("hasComment", false); },
        set: function (val) {
            if (!this.supportComment())
                return;
            this.setPropertyValue("hasComment", val);
            if (this.hasComment)
                this.hasOther = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasOther", {
        get: function () { return this.getPropertyValue("hasOther", false); },
        set: function (val) {
            if (!this.supportOther() || this.hasOther == val)
                return;
            this.setPropertyValue("hasOther", val);
            if (this.hasOther)
                this.hasComment = false;
            this.hasOtherChanged();
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.hasOtherChanged = function () { };
    Object.defineProperty(Question.prototype, "isReadOnly", {
        /**
         * Retuns true if readOnly property is true or survey is in display mode.
         * @see SurveyModel.model
         * @see readOnly
         */
        get: function () { return this.readOnly || (this.survey != null && this.survey.isDisplayMode); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "readOnly", {
        /**
         * Set it to true to make a question readonly.
         */
        /**
         * Set it to true to make the question readonly.
         */
        get: function () { return this.getPropertyValue("readOnly", false); },
        set: function (val) {
            if (this.readOnly == val)
                return;
            this.setPropertyValue("readOnly", val);
            this.onReadOnlyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "enableIf", {
        /**
         * An expression that returns true or false. If it returns false the Question becomes read only and an end-user will not able to answer on the qustion. The library runs the expression on survey start and on changing a question value. If the property is empty then readOnly property is used.
         * @see readOnly
         * @see isReadOnly
         */
        get: function () { return this.getPropertyValue("enableIf", ""); },
        set: function (val) { this.setPropertyValue("enableIf", val); },
        enumerable: true,
        configurable: true
    });
    Question.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        if (!this.enableIf)
            return;
        if (!this.conditionEnabelRunner)
            this.conditionEnabelRunner = new __WEBPACK_IMPORTED_MODULE_8__conditions__["a" /* ConditionRunner */](this.enableIf);
        this.conditionEnabelRunner.expression = this.enableIf;
        this.readOnly = !this.conditionEnabelRunner.run(values);
    };
    Question.prototype.onReadOnlyChanged = function () {
        this.setPropertyValue("isReadOnly", this.isReadOnly);
    };
    Question.prototype.onAnyValueChanged = function (name) {
        if (!name)
            return;
        var titleValue = this.locTitle.text;
        if (!titleValue)
            return;
        if (titleValue.toLocaleLowerCase().indexOf('{' + name.toLowerCase()) > -1) {
            this.fireCallback(this.titleChangedCallback);
        }
    };
    Object.defineProperty(Question.prototype, "no", {
        get: function () {
            if (this.visibleIndex < 0)
                return "";
            var startIndex = 1;
            var isNumeric = true;
            var str = "";
            if (this.survey && this.survey.questionStartIndex) {
                str = this.survey.questionStartIndex;
                if (parseInt(str))
                    startIndex = parseInt(str);
                else if (str.length == 1)
                    isNumeric = false;
            }
            if (isNumeric)
                return (this.visibleIndex + startIndex).toString();
            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        if (this.defaultValue) {
            this.updateValueWithDefaults();
        }
    };
    Question.prototype.onSetData = function () {
        _super.prototype.onSetData.call(this);
        this.onSurveyValueChanged(this.value);
        if (this.defaultValue) {
            this.updateValueWithDefaults();
        }
    };
    Object.defineProperty(Question.prototype, "value", {
        /**
         * Get/Set the question value.
         * @see SurveyMode.setValue
         * @see SurveyMode.getValue
         */
        get: function () {
            return this.valueFromData(this.getValueCore());
        },
        set: function (newValue) {
            this.setNewValue(newValue);
            if (this.isvalueChangedCallbackFiring)
                return;
            this.isvalueChangedCallbackFiring = true;
            this.fireCallback(this.valueChangedCallback);
            this.isvalueChangedCallbackFiring = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "displayValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "defaultValue", {
        /**
         * Set the default value to the question. It will be assign to the question on loading the survey from JSON or adding a question to the survey or on setting this property of the value is empty.
         */
        get: function () { return this.getPropertyValue("defaultValue"); },
        set: function (val) {
            this.setPropertyValue("defaultValue", val);
            this.updateValueWithDefaults();
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.updateValueWithDefaults = function () {
        if (this.isLoadingFromJson || (!this.isDesignMode && this.isValueEmpty(this.defaultValue)))
            return;
        if (!this.isDesignMode && !this.isEmpty())
            return;
        this.setDefaultValue();
    };
    Question.prototype.setDefaultValue = function () {
        this.value = this.defaultValue;
    };
    Object.defineProperty(Question.prototype, "comment", {
        /**
         * The question comment value.
         */
        get: function () { return this.getComment(); },
        set: function (newValue) {
            if (this.comment == newValue)
                return;
            this.setComment(newValue);
            this.fireCallback(this.commentChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.getComment = function () { return this.data != null ? this.data.getComment(this.name) : this.questionComment; };
    Question.prototype.setComment = function (newValue) {
        this.setNewComment(newValue);
    };
    /**
     * Returns true if the question value is empty
     */
    Question.prototype.isEmpty = function () { return this.isValueEmpty(this.value); };
    Object.defineProperty(Question.prototype, "validators", {
        /**
         * The list of question validators.
         */
        get: function () { return this.validatorsValue; },
        set: function (val) { this.setPropertyValue("validators", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "errors", {
        /**
         * The list of errors. It is created by callig hasErrors functions
         * @see hasErrors
         */
        get: function () { return this.errorsValue; },
        set: function (val) { this.errorsValue = val; },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if threre is a validation error(s) in the question.
     * @param fireCallback set it to true to show an error in UI.
     */
    Question.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        this.checkForErrors(fireCallback);
        return this.errors.length > 0;
    };
    Object.defineProperty(Question.prototype, "currentErrorCount", {
        /**
         * Returns the validation errors count.
         */
        get: function () { return this.errors.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "requiredText", {
        /**
         * Returns the char/string for a required question.
         * @see SurveyModel.requiredText
         */
        get: function () { return this.survey != null && this.isRequired ? this.survey.requiredText : ""; },
        enumerable: true,
        configurable: true
    });
    /**
     * Add error into the question error list.
     * @param error
     */
    Question.prototype.addError = function (error) {
        this.errors.push(error);
        this.fireCallback(this.errorsChangedCallback);
    };
    Question.prototype.checkForErrors = function (fireCallback) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        this.onCheckForErrors(this.errors);
        if (this.errors.length == 0 && !this.isEmpty()) {
            var error = this.runValidators();
            if (error) {
                //validators may change the question value.
                this.errors = [];
                this.errors.push(error);
            }
        }
        if (this.survey && this.errors.length == 0) {
            var error = this.fireSurveyValidation();
            if (error) {
                this.errors.push(error);
            }
        }
        if (fireCallback && (errorLength != this.errors.length || errorLength > 0)) {
            this.fireCallback(this.errorsChangedCallback);
        }
    };
    Question.prototype.fireSurveyValidation = function () {
        if (this.validateValueCallback)
            return this.validateValueCallback();
        return this.survey ? this.survey.validateQuestion(this.name) : null;
    };
    Question.prototype.onCheckForErrors = function (errors) {
        if (this.hasRequiredError()) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* AnswerRequiredError */](this.requiredErrorText));
        }
    };
    Question.prototype.hasRequiredError = function () {
        return this.isRequired && this.isEmpty();
    };
    Question.prototype.runValidators = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__validator__["a" /* ValidatorRunner */]().run(this);
    };
    Question.prototype.setNewValue = function (newValue) {
        this.setNewValueInData(newValue);
        this.onValueChanged();
    };
    Question.prototype.setNewValueInData = function (newValue) {
        if (!this.isValueChangedInSurvey) {
            newValue = this.valueToData(newValue);
            this.setValueCore(newValue);
        }
    };
    Question.prototype.getValueCore = function () {
        return this.data != null ? this.data.getValue(this.name) : this.questionValue;
    };
    Question.prototype.setValueCore = function (newValue) {
        if (this.data != null) {
            this.data.setValue(this.name, newValue);
        }
        else {
            this.questionValue = newValue;
        }
    };
    Question.prototype.valueFromData = function (val) { return val; };
    Question.prototype.valueToData = function (val) { return val; };
    Question.prototype.onValueChanged = function () { };
    Question.prototype.setNewComment = function (newValue) {
        if (this.data != null) {
            this.data.setComment(this.name, newValue);
        }
        else
            this.questionComment = newValue;
    };
    //IQuestion
    Question.prototype.onSurveyValueChanged = function (newValue) {
        this.isValueChangedInSurvey = true;
        this.value = this.valueFromData(newValue);
        this.fireCallback(this.commentChangedCallback);
        this.isValueChangedInSurvey = false;
    };
    //IValidatorOwner
    Question.prototype.getValidatorTitle = function () { return null; };
    Object.defineProperty(Question.prototype, "validatedValue", {
        get: function () { return this.value; },
        set: function (val) { this.value = val; },
        enumerable: true,
        configurable: true
    });
    return Question;
}(__WEBPACK_IMPORTED_MODULE_2__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("question", [{ name: "title:text", serializationProperty: "locTitle" },
    { name: "description:text", serializationProperty: "locDescription" },
    { name: "commentText", serializationProperty: "locCommentText" }, "enableIf:expression", "defaultValue:value",
    "isRequired:boolean", { name: "requiredErrorText:text", serializationProperty: "locRequiredErrorText" },
    "readOnly:boolean", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], null, "questionbase");


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RequreNumericError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ExceedSizeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CustomError; });



var AnswerRequiredError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerRequiredError, _super);
    function AnswerRequiredError(customErrorText) {
        if (customErrorText === void 0) { customErrorText = null; }
        var _this = _super.call(this) || this;
        _this.customErrorText = customErrorText;
        return _this;
    }
    AnswerRequiredError.prototype.getText = function () {
        return this.customErrorText ? this.customErrorText : __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("requiredError");
    };
    return AnswerRequiredError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var RequreNumericError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RequreNumericError, _super);
    function RequreNumericError() {
        return _super.call(this) || this;
    }
    RequreNumericError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("numericError");
    };
    return RequreNumericError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var ExceedSizeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ExceedSizeError, _super);
    function ExceedSizeError(maxSize) {
        var _this = _super.call(this) || this;
        _this.maxSize = maxSize;
        return _this;
    }
    ExceedSizeError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("exceedMaxSize")["format"](this.getTextSize());
    };
    ExceedSizeError.prototype.getTextSize = function () {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        var fixed = [0, 0, 2, 3, 3];
        if (this.maxSize == 0)
            return '0 Byte';
        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
        var value = this.maxSize / Math.pow(1024, i);
        return value.toFixed(fixed[i]) + ' ' + sizes[i];
    };
    return ExceedSizeError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var CustomError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](CustomError, _super);
    function CustomError(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    CustomError.prototype.getText = function () {
        return this.text;
    };
    return CustomError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizablestring__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemValue; });


/**
 * Array of ItemValue is used in checkox, dropdown and radiogroup choices, matrix columns and rows.
 * It has two main properties: value and text. If text is empty, value is used for displaying.
 * The text property is localizable and support markdown.
 */
var ItemValue = (function () {
    function ItemValue(value, text) {
        if (text === void 0) { text = null; }
        this.locTextValue = new __WEBPACK_IMPORTED_MODULE_0__localizablestring__["a" /* LocalizableString */](null, true);
        var self = this;
        this.locTextValue.onGetTextCallback = function (text) { return text ? text : (!self.isValueEmpty ? self.value.toString() : null); };
        if (text)
            this.locText.text = text;
        this.value = value;
    }
    ItemValue.createArray = function (locOwner) {
        var items = [];
        ItemValue.setupArray(items, locOwner);
        return items;
    };
    ItemValue.setupArray = function (items, locOwner) {
        items.push = function (value) {
            var result = Array.prototype.push.call(this, value);
            value.locOwner = locOwner;
            return result;
        };
        items.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            var result = (_a = Array.prototype.splice).call.apply(_a, [this, start, deleteCount].concat(items));
            if (!items)
                items = [];
            for (var i = 0; i < items.length; i++) {
                items[i].locOwner = locOwner;
            }
            return result;
            var _a;
        };
    };
    ItemValue.setData = function (items, values) {
        items.length = 0;
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            var item = new ItemValue(null);
            item.setData(value);
            items.push(item);
        }
    };
    ItemValue.getData = function (items) {
        var result = new Array();
        for (var i = 0; i < items.length; i++) {
            result.push(items[i].getData());
        }
        return result;
    };
    ItemValue.getItemByValue = function (items, val) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return items[i];
        }
        return null;
    };
    ItemValue.getTextOrHtmlByValue = function (items, val) {
        var item = ItemValue.getItemByValue(items, val);
        return item !== null ? item.locText.textOrHtml : "";
    };
    ItemValue.NotifyArrayOnLocaleChanged = function (items) {
        for (var i = 0; i < items.length; i++) {
            items[i].locText.onChanged();
        }
    };
    ItemValue.prototype.getType = function () { return "itemvalue"; };
    Object.defineProperty(ItemValue.prototype, "locText", {
        get: function () { return this.locTextValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "locOwner", {
        get: function () { return this.locText.owner; },
        set: function (value) { this.locText.owner = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "value", {
        get: function () { return this.itemValue; },
        set: function (newValue) {
            this.itemValue = newValue;
            if (!this.itemValue)
                return;
            var str = this.itemValue.toString();
            var index = str.indexOf(ItemValue.Separator);
            if (index > -1) {
                this.itemValue = str.slice(0, index);
                this.text = str.slice(index + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "hasText", {
        get: function () { return this.locText.pureText ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "text", {
        get: function () { return this.locText.text; },
        set: function (newText) {
            this.locText.text = newText;
        },
        enumerable: true,
        configurable: true
    });
    ItemValue.prototype.getData = function () {
        var customAttributes = this.getCustomAttributes();
        var textJson = this.locText.getJson();
        if (!customAttributes && !textJson)
            return this.value;
        var result = { value: this.value };
        if (textJson)
            result["text"] = textJson;
        if (customAttributes) {
            for (var key in customAttributes) {
                result[key] = customAttributes[key];
            }
        }
        return result;
    };
    ItemValue.prototype.setData = function (value) {
        if (typeof (value.value) !== 'undefined') {
            var exception = null;
            if (this.isObjItemValue(value)) {
                value.itemValue = value.itemValue;
                this.locText.setJson(value.locText.getJson());
                exception = ItemValue.itemValueProp;
            }
            this.copyAttributes(value, exception);
        }
        else {
            this.value = value;
        }
    };
    Object.defineProperty(ItemValue.prototype, "isValueEmpty", {
        get: function () { return !this.itemValue && this.itemValue !== 0 && this.itemValue !== false; },
        enumerable: true,
        configurable: true
    });
    ItemValue.prototype.isObjItemValue = function (obj) { return typeof (obj.getType) !== 'undefined' && obj.getType() == 'itemvalue'; };
    ItemValue.prototype.copyAttributes = function (src, exceptons) {
        for (var key in src) {
            if ((typeof src[key] == 'function'))
                continue;
            if (exceptons && exceptons.indexOf(key) > -1)
                continue;
            if (key == "text") {
                this.locText.setJson(src[key]);
            }
            else {
                this[key] = src[key];
            }
        }
    };
    ItemValue.prototype.getCustomAttributes = function () {
        var result = null;
        for (var key in this) {
            if ((typeof this[key] == 'function') || ItemValue.itemValueProp.indexOf(key) > -1 || key == "itemValue")
                continue;
            if (result == null)
                result = {};
            result[key] = this[key];
        }
        return result;
    };
    return ItemValue;
}());

ItemValue.Separator = '|';
ItemValue.itemValueProp = ["text", "value", "hasText", "locOwner", "locText", "isValueEmpty", "locTextValue", "pos"];
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("itemvalue", ["!value", { name: "text", onGetValue: function (obj) { return obj.locText.pureText; } }]);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultStandardCss; });
var surveyCss = {
    currentType: "",
    getCss: function () {
        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
        if (!loc)
            loc = defaultStandardCss;
        return loc;
    },
};
var defaultStandardCss = {
    root: "sv_main",
    header: "",
    body: "sv_body",
    footer: "sv_nav",
    navigationButton: "", navigation: { complete: "sv_complete_btn", prev: "sv_prev_btn", next: "sv_next_btn" },
    progress: "sv_progress", progressBar: "",
    pageTitle: "sv_p_title",
    row: "sv_row",
    question: { mainRoot: "sv_q sv_qstn", title: "sv_q_title", description: "sv_q_description", comment: "", required: "", titleRequired: "", indent: 20 },
    panel: { title: "sv_p_title", container: "sv_p_container" },
    error: { root: "sv_q_erbox", icon: "", item: "" },
    boolean: { root: "sv_qcbc sv_qbln", item: "sv_q_checkbox" },
    checkbox: { root: "sv_qcbc sv_qcbx", item: "sv_q_checkbox", other: "sv_q_other" },
    comment: "",
    dropdown: { root: "", control: "", other: "sv_q_other" },
    matrix: { root: "sv_q_matrix", label: "sv_q_m_label" },
    matrixdropdown: { root: "sv_q_matrix" },
    matrixdynamic: { root: "table", button: "" },
    paneldynamic: { root: "", button: "" },
    multipletext: { root: "", itemTitle: "", row: "", itemValue: "sv_q_mt_item_value" },
    radiogroup: { root: "sv_qcbc", item: "sv_q_radiogroup", label: "", other: "sv_q_other" },
    rating: { root: "sv_q_rating", item: "sv_q_rating_item", selected: "active" },
    text: "",
    saveData: { root: "", saving: "", error: "", success: "", saveAgainButton: "" },
    window: {
        root: "sv_window", body: "sv_window_content",
        header: {
            root: "sv_window_title", title: "", button: "", buttonExpanded: "", buttonCollapsed: ""
        }
    }
};
surveyCss["standard"] = defaultStandardCss;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
var Helpers = (function () {
    function Helpers() {
    }
    /**
     * A static methods that returns true if a value underfined, null, empty string or empty array.
     * @param value
     */
    Helpers.isValueEmpty = function (value) {
        if (Array.isArray(value) && value.length === 0)
            return true;
        if (value && (typeof value === 'string' || value instanceof String)) {
            value = value.trim();
        }
        return !value && value !== 0 && value !== false;
    };
    return Helpers;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactquestionelement__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactquestionfactory__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionCommentItem; });




var SurveyQuestionComment = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionComment, _super);
    function SurveyQuestionComment(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.getStateValue() };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnBlur = _this.handleOnBlur.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionComment.prototype, "question", {
        get: function () { return this.questionBase; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionComment.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.setState({ value: this.getStateValue() });
    };
    SurveyQuestionComment.prototype.handleOnChange = function (event) {
        this.setState({ value: event.target.value });
    };
    SurveyQuestionComment.prototype.handleOnBlur = function (event) {
        this.question.value = event.target.value;
        this.setState({ value: this.getStateValue() });
    };
    SurveyQuestionComment.prototype.render = function () {
        if (!this.question)
            return null;
        var cssClasses = this.question.cssClasses;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("textarea", { id: this.question.inputId, className: cssClasses.root, type: "text", readOnly: this.isDisplayMode, value: this.state.value, placeholder: this.question.placeHolder, onBlur: this.handleOnBlur, onChange: this.handleOnChange, cols: this.question.cols, rows: this.question.rows, "aria-label": this.question.locTitle.renderedHtml }));
    };
    SurveyQuestionComment.prototype.getStateValue = function () { return !this.question.isEmpty() ? this.question.value : ''; };
    return SurveyQuestionComment;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["b" /* SurveyQuestionElementBase */]));

var SurveyQuestionCommentItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionCommentItem, _super);
    function SurveyQuestionCommentItem(props) {
        var _this = _super.call(this, props) || this;
        _this.question = props.question;
        _this.comment = _this.question.comment;
        _this.otherCss = props.otherCss;
        _this.state = { value: _this.comment };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnBlur = _this.handleOnBlur.bind(_this);
        return _this;
    }
    SurveyQuestionCommentItem.prototype.handleOnChange = function (event) {
        this.comment = event.target.value;
        this.setState({ value: this.comment });
    };
    SurveyQuestionCommentItem.prototype.handleOnBlur = function (event) {
        this.question.comment = this.comment;
    };
    SurveyQuestionCommentItem.prototype.componentWillReceiveProps = function (nextProps) {
        this.question = nextProps.question;
    };
    SurveyQuestionCommentItem.prototype.render = function () {
        if (!this.question)
            return null;
        if (this.isDisplayMode)
            return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.cssClasses.comment }, this.comment));
        var className = this.otherCss ? this.otherCss : this.cssClasses.comment;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "text", className: className, value: this.state.value, onChange: this.handleOnChange, onBlur: this.handleOnBlur, "aria-label": this.question.locTitle.renderedHtml }));
    };
    return SurveyQuestionCommentItem;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["c" /* ReactSurveyElement */]));

__WEBPACK_IMPORTED_MODULE_3__reactquestionfactory__["a" /* ReactQuestionFactory */].Instance.registerQuestion("comment", function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyQuestionComment, props);
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessValue; });
var ProcessValue = (function () {
    function ProcessValue() {
        this.values = null;
    }
    ProcessValue.prototype.getFirstName = function (text) {
        if (!text)
            return text;
        var res = "";
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            if (ch == '.' || ch == '[')
                break;
            res += ch;
        }
        return res;
    };
    ProcessValue.prototype.hasValue = function (text, values) {
        if (values === void 0) { values = null; }
        if (!values)
            values = this.values;
        var res = this.getValueCore(text, values);
        return res.hasValue;
    };
    ProcessValue.prototype.getValue = function (text, values) {
        if (values === void 0) { values = null; }
        if (!values)
            values = this.values;
        var res = this.getValueCore(text, values);
        return res.value;
    };
    ProcessValue.prototype.getValueCore = function (text, values) {
        var res = { hasValue: false, value: null };
        var curValue = values;
        if (!curValue)
            return res;
        var isFirst = true;
        while (text && text.length > 0) {
            var isArray = !isFirst && text[0] == '[';
            if (!isArray) {
                if (!isFirst)
                    text = text.substr(1);
                var curName = this.getFirstName(text);
                if (!curName)
                    return res;
                if (!curValue[curName])
                    return res;
                curValue = curValue[curName];
                text = text.substr(curName.length);
            }
            else {
                if (!Array.isArray(curValue))
                    return res;
                var index = 1;
                var str = "";
                while (index < text.length && text[index] != ']') {
                    str += text[index];
                    index++;
                }
                text = index < text.length ? text.substr(index + 1) : "";
                index = this.getIntValue(str);
                if (index < 0 || index >= curValue.length)
                    return res;
                curValue = curValue[index];
            }
            isFirst = false;
        }
        res.value = curValue;
        res.hasValue = true;
        return res;
    };
    ProcessValue.prototype.getIntValue = function (str) {
        if (str == "0" || ((str | 0) > 0 && str % 1 == 0))
            return Number(str);
        return -1;
    };
    return ProcessValue;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conditionsParser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functionsfactory__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditionProcessValue__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Operand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FunctionOperand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ConditionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionRunner; });




var Operand = (function () {
    function Operand(origionalValue) {
        this.origionalValue = origionalValue;
    }
    Operand.prototype.getValue = function (processValue) {
        var res = this.getSimpleValue(this.origionalValue);
        if (res.isSimple)
            return res.value;
        var val = this.removeQuotes(this.origionalValue);
        if (processValue) {
            var name = this.getValueName(val);
            if (name) {
                if (!processValue.hasValue(name))
                    return null;
                val = processValue.getValue(name);
                return this.getSimpleValue(val).value;
            }
        }
        return val;
    };
    Operand.prototype.operandToString = function () {
        var val = this.origionalValue;
        if (val && (!this.isNumeric(val) && !this.isBoolean(val)))
            val = "'" + val + "'";
        return val;
    };
    Operand.prototype.removeQuotes = function (val) {
        if (val.length > 0 && (val[0] == "'" || val[0] == '"'))
            val = val.substr(1);
        var len = val.length;
        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"'))
            val = val.substr(0, len - 1);
        return val;
    };
    Operand.prototype.getValueName = function (val) {
        if (val.length < 3 || val[0] != '{' || val[val.length - 1] != '}')
            return null;
        return val.substr(1, val.length - 2);
    };
    Operand.prototype.isBoolean = function (value) {
        return value && (value.toLowerCase() === "true" || value.toLowerCase() === "false");
    };
    Operand.prototype.isNumeric = function (value) {
        var val = parseFloat(value);
        if (isNaN(val))
            return false;
        return isFinite(val);
    };
    Operand.prototype.getSimpleValue = function (val) {
        var res = { isSimple: false, value: val };
        if (val === undefined || val === 'undefined') {
            res.value = null;
            res.isSimple = true;
            return res;
        }
        if (!val || (typeof val != "string")) {
            res.isSimple = true;
            return res;
        }
        if (this.isNumeric(val)) {
            res.isSimple = true;
            res.value = parseFloat(val);
            return res;
        }
        if (this.isBoolean(val)) {
            res.value = val.toLowerCase() == "true";
            res.isSimple = true;
            return res;
        }
        return res;
    };
    return Operand;
}());

var FunctionOperand = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](FunctionOperand, _super);
    function FunctionOperand(origionalValue) {
        var _this = _super.call(this, origionalValue) || this;
        _this.origionalValue = origionalValue;
        _this.parameters = new Array();
        return _this;
    }
    FunctionOperand.prototype.getValue = function (processValue) {
        var paramValues = [];
        for (var i = 0; i < this.parameters.length; i++) {
            paramValues.push(this.parameters[i].getValue(processValue));
        }
        return __WEBPACK_IMPORTED_MODULE_2__functionsfactory__["a" /* FunctionFactory */].Instance.run(this.origionalValue, paramValues);
    };
    FunctionOperand.prototype.operandToString = function () {
        var res = this.origionalValue + "(";
        for (var i = 0; i < this.parameters.length; i++) {
            if (i > 0)
                res += ", ";
            res += this.parameters[i].operandToString();
        }
        return res;
    };
    return FunctionOperand;
}(Operand));

var Condition = (function () {
    function Condition() {
        this.opValue = "equal";
        this.leftValue = null;
        this.rightValue = null;
    }
    Object.defineProperty(Condition, "operators", {
        get: function () {
            if (Condition.operatorsValue != null)
                return Condition.operatorsValue;
            Condition.operatorsValue = {
                empty: function (left, right) {
                    if (left == null)
                        return true;
                    return !left;
                },
                notempty: function (left, right) {
                    if (left == null)
                        return false;
                    return !(!left);
                },
                equal: function (left, right) {
                    if (left == null && right != null || left != null && right == null)
                        return false;
                    if (left == null && right == null)
                        return true;
                    return left == right;
                },
                notequal: function (left, right) {
                    if (left == null && right != null || left != null && right == null)
                        return true;
                    if (left == null && right == null)
                        return false;
                    return left != right;
                },
                contains: function (left, right) { return (left != null) && left["indexOf"] && left.indexOf(right) > -1; },
                notcontains: function (left, right) { return (left == null) || !left["indexOf"] || left.indexOf(right) == -1; },
                greater: function (left, right) {
                    if (left == null)
                        return false;
                    if (right == null)
                        return true;
                    return left > right;
                },
                less: function (left, right) {
                    if (right == null)
                        return false;
                    if (left == null)
                        return true;
                    return left < right;
                },
                greaterorequal: function (left, right) {
                    if (left == null && right != null)
                        return false;
                    if (right == null)
                        return true;
                    return left >= right;
                },
                lessorequal: function (left, right) {
                    if (left != null && right == null)
                        return false;
                    if (left == null)
                        return true;
                    return left <= right;
                }
            };
            return Condition.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Condition.getOperator = function (opName) {
        return Condition.operators[opName];
    };
    Condition.setOperator = function (opName, func) {
        Condition.operators[opName] = func;
    };
    Object.defineProperty(Condition.prototype, "left", {
        get: function () { return this.leftValue; },
        set: function (val) { this.leftValue = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Condition.prototype, "right", {
        get: function () { return this.rightValue; },
        set: function (val) { this.rightValue = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Condition.prototype, "operator", {
        get: function () { return this.opValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Condition.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Condition.prototype.perform = function (left, right, processValue) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        if (processValue === void 0) { processValue = null; }
        if (!left)
            left = this.left;
        if (!right)
            right = this.right;
        return this.performExplicit(left, right, processValue);
    };
    Condition.prototype.performExplicit = function (left, right, processValue) {
        var leftValue = left ? left.getValue(processValue) : null;
        if (!right && (leftValue === true || leftValue === false))
            return leftValue;
        var rightValue = right ? right.getValue(processValue) : null;
        return Condition.operators[this.operator](leftValue, rightValue);
    };
    return Condition;
}());

Condition.operatorsValue = null;
var ConditionNode = (function () {
    function ConditionNode() {
        this.connectiveValue = "and";
        this.children = [];
    }
    Object.defineProperty(ConditionNode.prototype, "connective", {
        get: function () { return this.connectiveValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (value == "&" || value == "&&")
                value = "and";
            if (value == "|" || value == "||")
                value = "or";
            if (value != "and" && value != "or")
                return;
            this.connectiveValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
        get: function () { return this.children.length == 0; },
        enumerable: true,
        configurable: true
    });
    ConditionNode.prototype.clear = function () {
        this.children = [];
        this.connective = "and";
    };
    return ConditionNode;
}());

var ConditionRunner = (function () {
    function ConditionRunner(expression) {
        this.root = new ConditionNode();
        this.expression = expression;
        this.processValue = new __WEBPACK_IMPORTED_MODULE_3__conditionProcessValue__["a" /* ProcessValue */]();
    }
    Object.defineProperty(ConditionRunner.prototype, "expression", {
        get: function () { return this.expressionValue; },
        set: function (value) {
            if (this.expression == value)
                return;
            this.expressionValue = value;
            new __WEBPACK_IMPORTED_MODULE_1__conditionsParser__["a" /* ConditionsParser */]().parse(this.expressionValue, this.root);
        },
        enumerable: true,
        configurable: true
    });
    ConditionRunner.prototype.run = function (values) {
        this.processValue.values = values;
        return this.runNode(this.root);
    };
    ConditionRunner.prototype.runNode = function (node) {
        var onFirstFail = node.connective == "and";
        for (var i = 0; i < node.children.length; i++) {
            var res = this.runNodeCondition(node.children[i]);
            if (!res && onFirstFail)
                return false;
            if (res && !onFirstFail)
                return true;
        }
        return onFirstFail;
    };
    ConditionRunner.prototype.runNodeCondition = function (value) {
        if (value["children"])
            return this.runNode(value);
        if (value["left"])
            return this.runCondition(value);
        return false;
    };
    ConditionRunner.prototype.runCondition = function (condition) {
        return condition.performExplicit(condition.left, condition.right, this.processValue);
    };
    return ConditionRunner;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxBase; });







/**
 * It is a base class for checkbox, dropdown and radiogroup questions.
 */
var QuestionSelectBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionSelectBase, _super);
    function QuestionSelectBase(name) {
        var _this = _super.call(this, name) || this;
        _this.visibleChoicesCache = null;
        _this.otherItemValue = new __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */]("other", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"));
        _this.choicesFromUrl = null;
        _this.cachedValueForUrlRequests = null;
        _this.isSettingComment = false;
        var self = _this;
        _this.choicesValues = _this.createItemValues("choices");
        _this.choicesByUrl = _this.createRestfull();
        _this.choicesByUrl.owner = _this;
        _this.createLocalizableString("otherText", _this, true);
        _this.createLocalizableString("otherErrorText", _this, true);
        _this.otherItemValue.locOwner = _this;
        _this.choicesByUrl.getResultCallback = function (items) { self.onLoadChoicesFromUrl(items); };
        return _this;
    }
    Object.defineProperty(QuestionSelectBase.prototype, "otherItem", {
        /**
         * Returns the other item. By using this property, you may change programmatically it's value and text.
         */
        get: function () {
            this.otherItemValue.text = this.otherText ? this.otherText : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText");
            return this.otherItemValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
        /**
         * Returns true if a user select the 'other' item.
         */
        get: function () {
            return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.getHasOther = function (val) {
        return val == this.otherItem.value;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "validatedValue", {
        get: function () { return this.valueToDataCore(this.value); },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.createRestfull = function () { return new __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__["a" /* ChoicesRestfull */](); };
    QuestionSelectBase.prototype.getComment = function () {
        if (this.getStoreOthersAsComment())
            return _super.prototype.getComment.call(this);
        return this.commentValue;
    };
    QuestionSelectBase.prototype.setComment = function (newValue) {
        if (this.getStoreOthersAsComment())
            _super.prototype.setComment.call(this, newValue);
        else {
            if (!this.isSettingComment && newValue != this.commentValue) {
                this.isSettingComment = true;
                this.commentValue = newValue;
                if (this.isOtherSelected) {
                    this.setNewValueInData(this.cachedValue);
                }
                this.isSettingComment = false;
            }
        }
    };
    QuestionSelectBase.prototype.setNewValue = function (newValue) {
        this.cachedValueForUrlRequests = newValue;
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionSelectBase.prototype.valueFromData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueFromData.call(this, val);
        this.cachedValue = this.valueFromDataCore(val);
        return this.cachedValue;
    };
    QuestionSelectBase.prototype.valueToData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueToData.call(this, val);
        this.cachedValue = val;
        return this.valueToDataCore(val);
    };
    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
        if (!this.hasUnknownValue(val))
            return val;
        if (val == this.otherItem.value)
            return val;
        this.comment = val;
        return this.otherItem.value;
    };
    QuestionSelectBase.prototype.valueToDataCore = function (val) {
        if (val == this.otherItem.value && this.getComment()) {
            val = this.getComment();
        }
        return val;
    };
    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
        if (!val)
            return false;
        var items = this.activeChoices;
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
        /**
         * The list of items. Every item has value and text. If text is empty, the value is rendered. The item text supports markdown.
         * @see choicesByUrl
         */
        get: function () { return this.choicesValues; },
        set: function (newValue) {
            this.setPropertyValue("choices", newValue);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "storeOthersAsComment", {
        /**
         * By default the entered text in the others input in the checkbox/radiogroup/dropdown are stored as "question name " + "-Comment". The value itself is "question name": "others". Set this property to false, to store the entered text directly in the "question name" key.
         * @see SurveyModel.storeOthersAsComment
         */
        get: function () { return this.getPropertyValue("storeOthersAsComment", true); },
        set: function (val) { this.setPropertyValue("storeOthersAsComment", val); },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.hasOtherChanged = function () {
        this.onVisibleChoicesChanged();
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
        /**
         * Use this property to render items in a specific order.
         */
        get: function () { return this.getPropertyValue("choicesOrder", "none"); },
        set: function (val) {
            val = val.toLowerCase();
            if (val == this.choicesOrder)
                return;
            this.setPropertyValue("choicesOrder", val);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
        /**
         * Use this property to set the different text for other item.
         */
        get: function () { return this.getLocalizableStringText("otherText"); },
        set: function (val) {
            this.setLocalizableStringText("otherText", val);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "locOtherText", {
        get: function () { return this.getLocalizableString("otherText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "otherErrorText", {
        /**
         * The text that shows when the other item is choosed by the other input is empty.
         */
        get: function () { return this.getLocalizableStringText("otherErrorText"); },
        set: function (val) { this.setLocalizableStringText("otherErrorText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "locOtherErrorText", {
        get: function () { return this.getLocalizableString("otherErrorText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
        /**
         * The list of items as they will be rendered. If needed items are sorted and the other item is added.
         * @see hasOther
         * @see choicesOrder
         */
        get: function () {
            if (!this.hasOther && this.choicesOrder == "none")
                return this.activeChoices;
            if (!this.visibleChoicesCache) {
                this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice());
                if (this.hasOther) {
                    this.visibleChoicesCache.push(this.otherItem);
                }
            }
            return this.visibleChoicesCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "displayValue", {
        /**
         * Returns the text for the current value. If the value is null then returns empty string. If 'other' is selected then returns the text for other value.
         */
        get: function () {
            if (this.isEmpty())
                return "";
            return this.getDisplayValue(this.visibleChoices, this.value);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.getDisplayValue = function (items, val) {
        if (val == this.otherItemValue.value)
            return this.comment ? this.comment : "";
        var str = __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].getTextOrHtmlByValue(items, val);
        return (str == "" && val) ? val : str;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
        get: function () { return this.choicesFromUrl ? this.choicesFromUrl : this.choices; },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.supportComment = function () { return true; };
    QuestionSelectBase.prototype.supportOther = function () { return true; };
    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (!this.isOtherSelected || this.comment)
            return;
        var text = this.otherErrorText;
        if (!text) {
            text = __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherRequiredError");
        }
        errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* CustomError */](text));
    };
    QuestionSelectBase.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        this.onVisibleChoicesChanged();
    };
    QuestionSelectBase.prototype.getStoreOthersAsComment = function () { return this.storeOthersAsComment && (this.survey != null ? this.survey.storeOthersAsComment : true); };
    QuestionSelectBase.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.runChoicesByUrl();
        this.onVisibleChoicesChanged();
    };
    QuestionSelectBase.prototype.onAnyValueChanged = function (name) {
        _super.prototype.onAnyValueChanged.call(this, name);
        this.runChoicesByUrl();
    };
    QuestionSelectBase.prototype.runChoicesByUrl = function () {
        if (this.choicesByUrl) {
            var processor = this.surveyImpl ? this.surveyImpl.getTextProcessor() : this.survey;
            this.choicesByUrl.run(processor);
        }
    };
    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
        var errorCount = this.errors.length;
        this.errors = [];
        if (this.choicesByUrl && this.choicesByUrl.error) {
            this.errors.push(this.choicesByUrl.error);
        }
        if (errorCount > 0 || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        var newChoices = null;
        var cachedValues = this.createCachedValueForUrlRequests(this.cachedValueForUrlRequests);
        if (array && array.length > 0) {
            newChoices = new Array();
            __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].setData(newChoices, array);
        }
        this.choicesFromUrl = newChoices;
        if (newChoices) {
            var newValue = this.updateCachedValueForUrlRequests(cachedValues);
            if (newValue) {
                this.value = newValue.value;
            }
        }
        this.onVisibleChoicesChanged();
    };
    QuestionSelectBase.prototype.createCachedValueForUrlRequests = function (val) {
        if (this.isValueEmpty(val))
            return null;
        if (Array.isArray(val)) {
            var res = [];
            for (var i = 0; i < val.length; i++) {
                res.push(this.createCachedValueForUrlRequests(val[i]));
            }
            return res;
        }
        return { value: val, isExists: !this.hasUnknownValue(val) };
    };
    QuestionSelectBase.prototype.updateCachedValueForUrlRequests = function (val) {
        if (this.isValueEmpty(val))
            return null;
        if (Array.isArray(val)) {
            var res = [];
            for (var i = 0; i < val.length; i++) {
                var updatedValue = this.updateCachedValueForUrlRequests(val[i]);
                if (updatedValue && !this.isValueEmpty(updatedValue.value)) {
                    res.push(updatedValue.value);
                }
            }
            return { value: res };
        }
        var value = val.isExists && this.hasUnknownValue(val.value) ? null : val.value;
        return { value: value };
    };
    QuestionSelectBase.prototype.onVisibleChoicesChanged = function () {
        if (this.isLoadingFromJson)
            return;
        this.visibleChoicesCache = null;
        this.fireCallback(this.choicesChangedCallback);
    };
    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
        var order = this.choicesOrder.toLowerCase();
        if (order == "asc")
            return this.sortArray(array, 1);
        if (order == "desc")
            return this.sortArray(array, -1);
        if (order == "random")
            return this.randomizeArray(array);
        return array;
    };
    QuestionSelectBase.prototype.sortArray = function (array, mult) {
        return array.sort(function (a, b) {
            if (a.text < b.text)
                return -1 * mult;
            if (a.text > b.text)
                return 1 * mult;
            return 0;
        });
    };
    QuestionSelectBase.prototype.randomizeArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    QuestionSelectBase.prototype.clearUnusedValues = function () {
        _super.prototype.clearUnusedValues.call(this);
        if (!this.isOtherSelected && !this.hasComment) {
            this.comment = null;
        }
    };
    return QuestionSelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

/**
 * A base class for checkbox and radiogroup questions. It introduced a colCount property.
 */
var QuestionCheckboxBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxBase, _super);
    function QuestionCheckboxBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.colCountValue = 1;
        return _this;
    }
    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
        /**
         * The number of columns for radiogroup and checkbox questions. Items are rendred in one line if the value is 0.
         */
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.colCountValue = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    return QuestionCheckboxBase;
}(QuestionSelectBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean",
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] },
    { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function (obj) { return obj.choicesByUrl.getData(); }, onSetValue: function (obj, value) { obj.choicesByUrl.setData(value); } },
    { name: "otherText", serializationProperty: "locOtherText" }, { name: "otherErrorText", serializationProperty: "locOtherErrorText" },
    { name: "storeOthersAsComment:boolean", default: true }], null, "question");
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4] }], null, "selectbase");


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextPreProcessorItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPreProcessor; });
var TextPreProcessorItem = (function () {
    function TextPreProcessorItem() {
    }
    return TextPreProcessorItem;
}());

var TextPreProcessor = (function () {
    function TextPreProcessor() {
        this.hasAllValuesOnLastRunValue = false;
    }
    TextPreProcessor.prototype.process = function (text, returnDisplayValue) {
        if (returnDisplayValue === void 0) { returnDisplayValue = false; }
        this.hasAllValuesOnLastRunValue = true;
        if (!text)
            return text;
        if (!this.onProcess)
            return text;
        var items = this.getItems(text);
        for (var i = items.length - 1; i >= 0; i--) {
            var item = items[i];
            var name = this.getName(text.substring(item.start + 1, item.end));
            if (!this.canProcessName(name))
                continue;
            if (this.onHasValue && !this.onHasValue(name)) {
                this.hasAllValuesOnLastRunValue = false;
                continue;
            }
            var value = this.onProcess(name, returnDisplayValue);
            if (value == null) {
                value = "";
                this.hasAllValuesOnLastRunValue = false;
            }
            text = text.substr(0, item.start) + value + text.substr(item.end + 1);
        }
        return text;
    };
    Object.defineProperty(TextPreProcessor.prototype, "hasAllValuesOnLastRun", {
        get: function () { return this.hasAllValuesOnLastRunValue; },
        enumerable: true,
        configurable: true
    });
    TextPreProcessor.prototype.getItems = function (text) {
        var items = [];
        var length = text.length;
        var start = -1;
        var ch = '';
        for (var i = 0; i < length; i++) {
            ch = text[i];
            if (ch == '{')
                start = i;
            if (ch == '}') {
                if (start > -1) {
                    var item = new TextPreProcessorItem();
                    item.start = start;
                    item.end = i;
                    items.push(item);
                }
                start = -1;
            }
        }
        return items;
    };
    TextPreProcessor.prototype.getName = function (name) {
        if (!name)
            return;
        return name.trim();
    };
    TextPreProcessor.prototype.canProcessName = function (name) {
        if (!name)
            return false;
        for (var i = 0; i < name.length; i++) {
            var ch = name[i];
            if (ch == ' ' || ch == '-' || ch == '&')
                return false;
        }
        return true;
    };
    return TextPreProcessor;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stylesmanager__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyModel; });










/**
 * Survey object contains information about the survey. Pages, Questions, flow logic and etc.
 */
var SurveyModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyModel, _super);
    function SurveyModel(jsonObj) {
        if (jsonObj === void 0) { jsonObj = null; }
        var _this = _super.call(this) || this;
        _this.currentPageValue = null;
        _this.valuesHash = {};
        _this.variablesHash = {};
        _this.localeValue = "";
        _this.isCompleted = false;
        _this.isCompletedBefore = false;
        _this.isLoading = false;
        _this.processedTextValues = {};
        _this.completedStateValue = "";
        _this.completedStateTextValue = "";
        /**
         * The event is fired after a user click on 'Complete' button and finished the survey. You may use it to send the data to your web server.
         * <br/> sender the survey object that fires the event
         * <br/> options.showDataSaving(text) call this method to show that the survey is saving the data on your server. The text is an optional parameter to show your message instead of default.
         * <br/> options.showDataSavingError(text) call this method to show that there is an error on saving the data on your server. If you want to show a custom error, use an optional text parameter.
         * <br/> options.showDataSavingSuccess(text) call this method to show that the data were successful saved on the server.
         * <br/> options.showDataSavingClear call this method to hide the text about the saving progress.
         * @see data
         * @see clearInvisibleValues
         * @see completeLastPage
         * @see surveyPostId
         */
        _this.onComplete = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on clicking 'Next' page if sendResultOnPageNext is set to true. You may use it to save the intermidiate results, for example, if your survey is large enough.
         * <br/> sender the survey object that fires the event
         * @see sendResultOnPageNext
         */
        _this.onPartialSend = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when another page becomes the current. Typically it happens when a user click on 'Next' or 'Prev' buttons.
         * <br/> sender the survey object that fires the event
         * <br/> option.oldCurrentPage the previous current/active page
         * <br/> option.newCurrentPage a new current/active page
         * @see currentPage
         * @see currentPageNo
         * @see nextPage
         * @see prevPage
         * @see completeLastPage
         */
        _this.onCurrentPageChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when the question value is changed. It can be done via UI by a user or programmatically on calling setValue method.
         * <br/> sender the survey object that fires the event
         * <br/> options.name the value name that has been changed
         * <br/> options.question a question which question.name equals to the value name. If there are several questions with the same name, the first question is taken. If there is no such questions, the options.question is null.
         * <br/> options.value a new value
         * @see setValue
         */
        _this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on changing a question visibility.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question which visibility has been changed
         * <br/> options.name a question name
         * <br/> options.visible a question visible boolean value
         * @see QuestionBase.visibile
         * @see QuestionBase.visibileIf
         */
        _this.onVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on changing a page visibility.
         * <br/> sender the survey object that fires the event
         * <br/> options.page a page  which visibility has been changed
         * <br/> options.visible a page visible boolean value
         * @see PageModel.visibile
         * @see PageModel.visibileIf
         */
        _this.onPageVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on changing a panel visibility.
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a panel which visibility has been changed
         * <br/> options.visible a panel visible boolean value
         * @see PanelModel.visibile
         * @see PanelModel.visibileIf
         */
        _this.onPanelVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a new question into survey.
         * 'question': question, 'name': question.name, 'index': index, 'parentPanel': parentPanel, 'rootPanel': rootPanel
         * <br/> sender the survey object that fires the event
         * <br/> options.question a newly added question object.
         * <br/> options.name a question name
         * <br/> options.index a index of the question in the container (page or panel)
         * <br/> options.parentPanel a container where question is located. It can be page or panel.
         * <br/> options.rootPanel typically it is a page.
         * @see QuestionBase
         */
        _this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on removing a question from survey
         * <br/> sender the survey object that fires the event
         * <br/> options.question a removed question object.
         * <br/> options.name a question name
         * @see QuestionBase
         */
        _this.onQuestionRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a panel into survey
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a newly added panel object.
         * <br/> options.name a panel name
         * <br/> options.index a index of the panel in the container (page or panel)
         * <br/> options.parentPanel a container where question is located. It can be page or panel.
         * <br/> options.rootPanel typically it is a page.
         * @see PanelModel
         */
        _this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on removing a panel from survey
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a removed panel object.
         * <br/> options.name a panel name
         * @see PanelModel
         */
        _this.onPanelRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on validating value in a question. Set your error to options.error and survey will show the error for the question and block completing the survey or going to the next page.
         * <br/> sender the survey object that fires the event
         * <br/> options.name a question name
         * <br/> options.value the current question value
         * <br/> options.error an error string. It is empty by default.
         * @see onServerValidateQuestions
         */
        _this.onValidateQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use this event to modify the html before rendering, for example html on 'Thank you' page. Options has one parameter: options.html.
         * <br/> sender the survey object that fires the event
         * <br/> options.html an html that you may change before text processing and then rendering.
         * @see completedHtml
         * @see loadingHtml
         * @see QuestionHtmlModel.html
         */
        _this.onProcessHtml = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use this event to process the markdown text.
         * <br/> sender the survey object that fires the event
         * <br/> options.text a text that is going to be rendered
         * <br/> options.html a html. It is null by default. Set it and survey will use it instead of options.text
         */
        _this.onTextMarkdown = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event fires when it get response from the [dxsurvey.com](http://www.dxsurvey.com) service on saving survey results. Use it to find out if the results have been saved successful.
         * <br/> sender the survey object that fires the event
         * <br/> options.success it is true if the results were sent to the service successful
         * <br/> options.response a response from the service
         */
        _this.onSendResult = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use it to get results after calling the getResult method. It returns a simple analytic from [dxsurvey.com](http://www.dxsurvey.com) service.
         * <br/> sender the survey object that fires the event
         * <br/> options.success it is true if the results were got from the service successful
         * <br/> options.data the object {AnswersCount, QuestionResult : {} }. AnswersCount is the number of posted survey results. QuestionResult is an object with all possible unique answers to the question and number of these answers.
         * <br/> options.dataList an array of objects {name, value}, where 'name' is an unique value/answer to the question and value is a number/count of such answers.
         * <br/> options.response the server response
         * @see getResult
         */
        _this.onGetResult = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on uploading the file in QuestionFile. You may use it to change the file name or tells the library do not accept the file. There are three properties in options: options.name, options.file and options.accept.
         * <br/> sender the survey object that fires the event
         * name: name, file: file, accept: accept
         * <br/> name the file name
         * <br/> file the Javascript File object
         * <br/> accept a boolean value, true by default. Set it to false to deny this file to upload
         * @see uploadFile
         */
        _this.onUploadFile = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired before rendering a question. Use it to override the default question css classes.
         * There are two parameters in options: options.question and options.cssClasses
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question for which you may change the css classes
         * <br/> options.cssClasses an object with css classes. For example {root: "table", button: "button"}. You may change them to your own css classes.
         */
        _this.onUpdateQuestionCssClasses = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after survey is rendered in DOM. options.htmlElement is the root element.
         * <br/> sender the survey object that fires the event
         * <br/> options.htmlElement a root html element binded with the survey object
         */
        _this.onAfterRenderSurvey = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after a page is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.currentPage, options.htmlElement
         * <br/> sender the survey object that fires the event
         * <br/> options.page a page object for which the event is fired. Typically the current/active page.
         * <br/> options.htmlElement an html element binded with the page object
         */
        _this.onAfterRenderPage = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after a question is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.question, options.htmlElement
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question object for which the event is fired
         * <br/> options.htmlElement an html element binded with the question object
         */
        _this.onAfterRenderQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after a panel is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.panel, options.htmlElement
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a panel object for which the event is fired
         * <br/> options.htmlElement an html element binded with the panel object
         */
        _this.onAfterRenderPanel = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a new row in Matrix Dynamic quesiton.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a matrix question.
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDynamicModel.visibleRows
         */
        _this.onMatrixRowAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a new row in Matrix Dynamic quesiton.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a matrix question.
         * <br/> options.rowIndex a removed row index.
         * <br/> options.row a removed row object.
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDynamicModel.visibleRows
         */
        _this.onMatrixRowRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired for every cell created in Matrix Dymic and Matrix Dropdown questions.
         * <br/> options.question - the matrix question
         * <br/> options.cell - the matrix cell
         * <br/> options.cellQuestion - the question/editor in the cell. You may customize it, change it's properties, like choices or visible.
         * <br/> options.rowValue - the value of the current row. To access the value of paticular column use: options.rowValue["columnValue"]
         * <br/> options.column - the matrix column object
         * <br/> options.columName - the matrix column name
         * <br/> options.row - the matrix row object
         * @see onMatrixRowAdded
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixCellCreated = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired for every cell after is has been rendered in DOM.
         * <br/> options.question - the matrix question
         * <br/> options.cell - the matrix cell
         * <br/> options.cellQuestion - the question/editor in the cell.
         * <br/> options.htmlElement a html element binded with the cellQuestion object
         * <br/> options.column - the matrix column object
         * <br/> options.row - the matrix row object
         * @see onMatrixCellCreated
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixAfterCellRender = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when cell value is changed in Matrix Dymic and Matrix Dropdown questions.
         * <br/> options.question - the matrix question
         * <br/> options.columName - the matrix column name
         * <br/> options.value - a new value
         * <br/> options.row - the matrix row object
         * <br/> options.getCellQuestion(columnName) - the function that returns the cell question by column name.
         * @see onMatrixRowAdded
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixCellValueChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when Matrix Dymic and Matrix Dropdown questions validate the cell value.
         * <br/> options.question - the matrix question
         * <br/> options.columName - the matrix column name
         * <br/> options.value - a cell value
         * <br/> options.row - the matrix row object
         * <br/> options.getCellQuestion(columnName) - the function that returns the cell question by column name.
         * @see onMatrixRowAdded
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixCellValidate = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The list of errors on loading survey json. If the list is empty after loading a json then the json is correct and there is no errors in it.
         * @see JsonError
         */
        _this.jsonErrors = null;
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) { return self.processedTitle; };
        _this.createLocalizableString("completedHtml", _this);
        _this.createLocalizableString("completedBeforeHtml", _this);
        _this.createLocalizableString("loadingHtml", _this);
        _this.createLocalizableString("pagePrev", _this);
        _this.createLocalizableString("pageNext", _this);
        _this.createLocalizableString("complete", _this);
        _this.createLocalizableString("questionTitleTemplate", _this, true);
        _this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__["a" /* TextPreProcessor */]();
        _this.textPreProcessor.onHasValue = function (name) { return self.hasProcessedTextValue(name); };
        _this.textPreProcessor.onProcess = function (name, returnDisplayValue) { return self.getProcessedTextValue(name, returnDisplayValue); };
        _this.pagesValue = _this.createNewArray("pages", function (value) { self.onPageAdded(value); });
        _this.triggersValue = _this.createNewArray("triggers", function (value) { value.setOwner(self); });
        _this.updateProcessedTextValues();
        _this.onBeforeCreating();
        if (jsonObj) {
            if (typeof jsonObj === 'string' || jsonObj instanceof String) {
                jsonObj = JSON.parse(jsonObj);
            }
            if (jsonObj && jsonObj.clientId) {
                _this.clientId = jsonObj.clientId;
            }
            _this.setJsonObject(jsonObj);
            if (_this.surveyId) {
                _this.loadSurveyFromService(_this.surveyId, _this.clientId);
            }
        }
        _this.onCreating();
        return _this;
    }
    Object.defineProperty(SurveyModel.prototype, "platformName", {
        get: function () { return SurveyModel.platform; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "commentPrefix", {
        /**
         * You may show comments input for the most of questions. The entered text in the comment input will be saved as 'question name' + 'commentPrefix'.
         * @see data
         */
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__base__["c" /* Base */].commentPrefix; },
        set: function (val) { __WEBPACK_IMPORTED_MODULE_2__base__["c" /* Base */].commentPrefix = val; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getType = function () { return "survey"; };
    Object.defineProperty(SurveyModel.prototype, "pages", {
        /**
         * The list of all pages in the survey, including invisible.
         * @see PageModel
         * @see visiblePages
         */
        get: function () { return this.pagesValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "triggers", {
        /**
         * The list of triggers in the survey.
         * @see SurveyTrigger
         */
        get: function () { return this.triggersValue; },
        set: function (val) { this.setPropertyValue("triggers", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "surveyId", {
        /**
         * Set this property to automatically load survey Json from [dxsurvey.com](http://www.dxsurvey.com) service.
         * @see loadSurveyFromService
         */
        get: function () { return this.getPropertyValue("surveyId", ""); },
        set: function (val) { this.setPropertyValue("surveyId", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "surveyPostId", {
        /**
         * Set this property to automatically save the data into the [dxsurvey.com](http://www.dxsurvey.com) service.
         * @see onComplete
         * @see surveyShowDataSaving
         */
        get: function () { return this.getPropertyValue("surveyPostId", ""); },
        set: function (val) { this.setPropertyValue("surveyPostId", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "clientId", {
        /**
         * Use this property as indentificator for a user, for example e-mail or unique customer id in your web application. If you are loading survey or posting survey results  from/to [dxsurvey.com](http://www.dxsurvey.com) service, then the library do not allow to run the same survey the second time. On the second run, the user will see the 'Thank you' page.
         */
        get: function () { return this.getPropertyValue("clientId", ""); },
        set: function (val) { this.setPropertyValue("clientId", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "cookieName", {
        /**
         * If the property is not empty, before starting to run the survey, the library checkes if the cookie with this name exists. If it is true, the survey goes to complete mode and an user sees the 'Thank you' page. On completing the survey the cookie with this name is created.
         */
        get: function () { return this.getPropertyValue("cookieName", ""); },
        set: function (val) { this.setPropertyValue("cookieName", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "sendResultOnPageNext", {
        /**
         * Set it to true, to save results on completing every page. onPartialSend event is fired.
         * @see onPartialSend
         * @see clientId
         */
        get: function () { return this.getPropertyValue("sendResultOnPageNext", false); },
        set: function (val) { this.setPropertyValue("sendResultOnPageNext", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "surveyShowDataSaving", {
        /**
         * Set this property to true, to show the progress on saving/sending data into the [dxsurvey.com](http://www.dxsurvey.com) service.
         * @see surveyPostId
         */
        get: function () { return this.getPropertyValue("surveyShowDataSaving", false); },
        set: function (val) { this.setPropertyValue("surveyShowDataSaving", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "focusFirstQuestionAutomatic", {
        /**
         * On showing the next or previous page, a first input is focused, if the property set to true.
         */
        get: function () { return this.getPropertyValue("focusFirstQuestionAutomatic", true); },
        set: function (val) { this.setPropertyValue("focusFirstQuestionAutomatic", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showNavigationButtons", {
        /**
         * Set it to false to hide 'Prev', 'Next' and 'Complete' buttons. It makes sense if you are going to create a custom navigation or have just one page or on setting goNextPageAutomatic property.
         * @see goNextPageAutomatic
         */
        get: function () { return this.getPropertyValue("showNavigationButtons", true); },
        set: function (val) { this.setPropertyValue("showNavigationButtons", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showTitle", {
        /**
         * Set it to false hide survey title.
         * @see title
         */
        get: function () { return this.getPropertyValue("showTitle", true); },
        set: function (val) { this.setPropertyValue("showTitle", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPageTitles", {
        /**
         * Set it to false to hide page titles.
         * @see PageModel.title
         */
        get: function () { return this.getPropertyValue("showPageTitles", true); },
        set: function (val) { this.setPropertyValue("showPageTitles", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showCompletedPage", {
        /**
         * On finishing the survey the 'Thank you', page on complete, is shown. Set the property to false, to hide the 'Thank you' page.
         * @see data
         * @see onComplete
         */
        get: function () { return this.getPropertyValue("showCompletedPage", true); },
        set: function (val) { this.setPropertyValue("showCompletedPage", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "requiredText", {
        /**
         * A char/string that will be rendered in the title required questions.
         * @see QuestionBase.title
         */
        get: function () { return this.getPropertyValue("requiredText", "*"); },
        set: function (val) { this.setPropertyValue("requiredText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionStartIndex", {
        /**
         * By default the first question index is 1. You may start it from 100 or from 'A', by setting 100 or 'A' to this property.
         * @see QuestionBase.title
         * @see requiredText
         */
        get: function () { return this.getPropertyValue("questionStartIndex", ""); },
        set: function (val) { this.setPropertyValue("questionStartIndex", val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SurveyModel.prototype, "storeOthersAsComment", {
        /**
         * By default the entered text in the others input in the checkbox/radiogroup/dropdown are stored as "question name " + "-Comment". The value itself is "question name": "others". Set this property to false, to store the entered text directly in the "question name" key.
         * @see commentPrefix
         */
        get: function () { return this.getPropertyValue("storeOthersAsComment", true); },
        set: function (val) { this.setPropertyValue("storeOthersAsComment", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "goNextPageAutomatic", {
        /**
         * Set it true if you want to go to the next page without pressing 'Next' button when all questions are anwered.
        * @see showNavigationButtons
         */
        get: function () { return this.getPropertyValue("goNextPageAutomatic", false); },
        set: function (val) { this.setPropertyValue("goNextPageAutomatic", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "clearInvisibleValues", {
        /**
         * Set it to 'onComplete', to remove from data property values of invisible questions on survey complete. In this case, the invisible questions will not be stored on the server.
         * </br> Set it to 'onHidden' to clear the question value when it becomes invisible.
         * </br> The default value is 'none'.
         * @see QuestionBase.visible
         * @see onComplete
         */
        get: function () { return this.getPropertyValue("clearInvisibleValues", "none"); },
        set: function (val) {
            if (val === true)
                val = "onComplete";
            if (val === false)
                val = "none";
            this.setPropertyValue("clearInvisibleValues", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locale", {
        /**
         * Use it to change the survey locale. By default it is empty, 'en'. You may set it to 'de' - german, 'fr' - french and so on. The library has built-in localization for several languages. The library has a multi-language support as well.
         */
        get: function () { return this.localeValue; },
        set: function (value) {
            this.localeValue = value;
            this.setPropertyValue("locale", value);
            __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].currentLocale = value;
            for (var i = 0; i < this.pages.length; i++) {
                this.pages[i].onLocaleChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    //ILocalizableOwner
    SurveyModel.prototype.getLocale = function () { return this.locale; };
    SurveyModel.prototype.getMarkdownHtml = function (text) {
        var options = { text: text, html: null };
        this.onTextMarkdown.fire(this, options);
        return options.html;
    };
    SurveyModel.prototype.getLocString = function (str) { return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getString(str); };
    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
        /**
         * Returns the text that renders when there is no any visible page and question.
         */
        get: function () { return this.getLocString("emptySurvey"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "title", {
        /**
         * Survey title.
         */
        get: function () { return this.getLocalizableStringText("title"); },
        set: function (value) { this.setLocalizableStringText("title", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locTitle", {
        get: function () { return this.getLocalizableString("title"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedHtml", {
        /**
         * The html that shows on completed ('Thank you') page. Set it to change the default text.
         * @see showCompletedPage
         * @see locale
         */
        get: function () { return this.getLocalizableStringText("completedHtml"); },
        set: function (value) { this.setLocalizableStringText("completedHtml", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locCompletedHtml", {
        get: function () { return this.getLocalizableString("completedHtml"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedBeforeHtml", {
        /**
         * The html that shows if the end user has already completed the survey.
         * @see clientId
         * @see locale
         */
        get: function () { return this.getLocalizableStringText("completedBeforeHtml"); },
        set: function (value) { this.setLocalizableStringText("completedBeforeHtml", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locCompletedBeforeHtml", {
        get: function () { return this.getLocalizableString("completedBeforeHtml"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "loadingHtml", {
        /**
         * The html that shows on loading survey Json from the dxsurvey.com service.
         * @see surveyId
         * @see locale
         */
        get: function () { return this.getLocalizableStringText("loadingHtml"); },
        set: function (value) { this.setLocalizableStringText("loadingHtml", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locLoadingHtml", {
        get: function () { return this.getLocalizableString("loadingHtml"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
        /**
         * A text that renders on the 'Prev' button. Set it to change the default text.
         * @see locale
         */
        get: function () { return this.getLocalizableStringText("pagePrev", this.getLocString("pagePrevText")); },
        set: function (newValue) { this.setLocalizableStringText("pagePrev", newValue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locPagePrevText", {
        get: function () { return this.getLocalizableString("pagePrev"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
        /**
         * A text that renders on the 'Next' button. Set it to change the default text.
         * @see locale
         */
        get: function () { return this.getLocalizableStringText("pageNext", this.getLocString("pageNextText")); },
        set: function (newValue) { this.setLocalizableStringText("pageNext", newValue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locPageNextText", {
        get: function () { return this.getLocalizableString("pageNext"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completeText", {
        /**
         * A text that renders on the 'Complete' button. Set it to change the default text.
         * @see locale
         */
        get: function () { return this.getLocalizableStringText("complete", this.getLocString("completeText")); },
        set: function (newValue) { this.setLocalizableStringText("complete", newValue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locCompleteText", {
        get: function () { return this.getLocalizableString("complete"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionTitleTemplate", {
        /**
         * A template for a question title.
         * @see QuestionModel.title
         */
        get: function () { return this.getLocalizableStringText("questionTitleTemplate"); },
        set: function (value) { this.setLocalizableStringText("questionTitleTemplate", value); },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the question title template
     * @see questionTitleTemplate
     * @see QuestionModel.title
     */
    SurveyModel.prototype.getQuestionTitleTemplate = function () { return this.locQuestionTitleTemplate.textOrHtml; };
    Object.defineProperty(SurveyModel.prototype, "locQuestionTitleTemplate", {
        get: function () { return this.getLocalizableString("questionTitleTemplate"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
        /**
         * Set this property to false to turn off the numbering on pages titles.
         */
        get: function () { return this.getPropertyValue("showPageNumbers", false); },
        set: function (value) {
            if (value === this.showPageNumbers)
                return;
            this.setPropertyValue("showPageNumbers", value);
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
        /**
         * Set this property to "off" to turn off the numbering on questions titles or "onpage" to start numbering on every page. The default value is "on".
         */
        get: function () { return this.getPropertyValue("showQuestionNumbers", "on"); },
        set: function (value) {
            value = value.toLowerCase();
            value = (value === "onpage") ? "onPage" : value;
            if (value === this.showQuestionNumbers)
                return;
            this.setPropertyValue("showQuestionNumbers", value);
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "showProgressBar", {
        /**
         * Set this property to "top" to show the progress bar on the bottom or to "bottom" to show it on the bottom.
         */
        get: function () { return this.getPropertyValue("showProgressBar", "off"); },
        set: function (newValue) {
            this.setPropertyValue("showProgressBar", newValue.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedTitle", {
        /**
         * Returns the text/html that renders as survey title.
         */
        get: function () { return this.processText(this.locTitle.textOrHtml, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
        /**
         * Set this property to 'bottom' to show question title under the question.
         */
        get: function () { return this.getPropertyValue("questionTitleLocation", "top"); },
        set: function (value) {
            this.setPropertyValue("questionTitleLocation", value.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "questionErrorLocation", {
        /**
         * Set this property to 'bottom' to show question error(s) under the question.
         */
        get: function () { return this.getPropertyValue("questionErrorLocation", "top"); },
        set: function (value) {
            this.setPropertyValue("questionErrorLocation", value.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "mode", {
        /**
         * Set this mode to 'display' to make the survey read-only. The default value is 'edit'.
         */
        get: function () { return this.getPropertyValue("mode", "edit"); },
        set: function (value) {
            value = value.toLowerCase();
            if (value == this.mode)
                return;
            if (value != "edit" && value != "display")
                return;
            this.setPropertyValue("mode", value);
            var questions = this.getAllQuestions();
            for (var i = 0; i < questions.length; i++) {
                questions[i].onReadOnlyChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "data", {
        /**
         * An object that stores the survey results/data. You may set it directly as { 'question name': questionValue, ... }
         * @see setValue
         * @see getValue
         */
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                result[key] = this.valuesHash[key];
            }
            return result;
        },
        set: function (data) {
            this.valuesHash = {};
            if (data) {
                for (var key in data) {
                    this.setDataValueCore(this.valuesHash, key, data[key]);
                    this.checkTriggers(key, data[key], false);
                    if (!this.processedTextValues[key.toLowerCase()]) {
                        this.processedTextValues[key.toLowerCase()] = "value";
                    }
                }
            }
            this.notifyAllQuestionsOnValueChanged();
            this.runConditions();
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getAllValues = function () { return this.data; };
    SurveyModel.prototype.setDataValueCore = function (valuesHash, key, value) {
        valuesHash[key] = value;
    };
    Object.defineProperty(SurveyModel.prototype, "comments", {
        /**
         * Returns all comments from the data.
         * @see data
         */
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                if (key.indexOf(this.commentPrefix) > 0) {
                    result[key] = this.valuesHash[key];
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
        /**
         * Returns the list of visible pages. If all pages are visible then it is the same as pages property.
         * @see pages
         * @see PageModel.visible
         * @see PageModel.visibleIf
         */
        get: function () {
            if (this.isDesignMode)
                return this.pages;
            var result = new Array();
            for (var i = 0; i < this.pages.length; i++) {
                if (this.pages[i].isVisible) {
                    result.push(this.pages[i]);
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
        /**
         * Returns true if there is no any page in the survey. The survey is empty.
         */
        get: function () { return this.pages.length == 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "PageCount", {
        /**
         * depricated, misspelling, use pageCount property
         */
        get: function () { return this.pageCount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pageCount", {
        /**
         * Returns the survey pages count.
         * @see visiblePageCount
         * @see pages
         */
        get: function () {
            return this.pages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
        /**
         * Returns the survey visible pages count
         * @see pageCount
         * @see visiblePages
         */
        get: function () {
            return this.visiblePages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPage", {
        /**
         * Returns the current survey page. If survey is rendred then it is a page that a user can see/edit.
         */
        get: function () {
            var vPages = this.visiblePages;
            if (this.currentPageValue != null) {
                if (vPages.indexOf(this.currentPageValue) < 0) {
                    this.currentPage = null;
                }
            }
            if (this.currentPageValue == null && vPages.length > 0) {
                this.currentPage = vPages[0];
            }
            return this.currentPageValue;
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value != null && vPages.indexOf(value) < 0)
                return;
            if (value == this.currentPageValue)
                return;
            var oldValue = this.currentPageValue;
            this.currentPageValue = value;
            if (value)
                value.updateCustomWidgets();
            this.currentPageChanged(value, oldValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPageNo", {
        /**
         * The index of the current page in the visible pages array. It starts from 0.
         */
        get: function () {
            return this.visiblePages.indexOf(this.currentPage);
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value < 0 || value >= this.visiblePages.length)
                return;
            this.currentPage = this.visiblePages[value];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the input focuse to the first question with the input.
     */
    SurveyModel.prototype.focusFirstQuestion = function () {
        if (this.currentPageValue) {
            this.currentPageValue.scrollToTop();
            this.currentPageValue.focusFirstQuestion();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "state", {
        /**
         * Returns the current survey state: 'loading' - loading from the json, 'completed' - a user has completed the survey, 'running' - a user answers a questions right now, 'empty' - there is nothing to show in the current survey.
         */
        get: function () {
            if (this.isLoading)
                return "loading";
            if (this.isCompleted)
                return "completed";
            if (this.isCompletedBefore)
                return "completedbefore";
            return (this.currentPage) ? "running" : "empty";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedState", {
        get: function () { return this.completedStateValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedStateText", {
        get: function () { return this.completedStateTextValue; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setCompletedState = function (value, text) {
        this.completedStateValue = value;
        if (!text) {
            if (value == "saving")
                text = this.getLocString("savingData");
            if (value == "error")
                text = this.getLocString("savingDataError");
            if (value == "success")
                text = this.getLocString("savingDataSuccess");
        }
        this.completedStateTextValue = text;
    };
    /**
     * Clear the survey data and state. If the survey has a 'completed' state, it will have a 'running' state.
     * @param clearData clear the data
     * @param gotoFirstPage make the first page as a current page.
     * @see data
     * @see state
     * @see currentPage
     */
    SurveyModel.prototype.clear = function (clearData, gotoFirstPage) {
        if (clearData === void 0) { clearData = true; }
        if (gotoFirstPage === void 0) { gotoFirstPage = true; }
        if (clearData) {
            this.data = null;
            this.variablesHash = {};
        }
        this.isCompleted = false;
        this.isCompletedBefore = false;
        this.isLoading = false;
        if (gotoFirstPage && this.visiblePageCount > 0) {
            this.currentPage = this.visiblePages[0];
        }
    };
    SurveyModel.prototype.mergeValues = function (src, dest) {
        if (!dest || !src)
            return;
        for (var key in src) {
            var value = src[key];
            if (value && typeof value === 'object') {
                if (!dest[key])
                    dest[key] = {};
                this.mergeValues(value, dest[key]);
            }
            else {
                dest[key] = value;
            }
        }
    };
    SurveyModel.prototype.updateCustomWidgets = function (page) {
        if (!page)
            return;
        page.updateCustomWidgets();
    };
    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
        this.onCurrentPageChanged.fire(this, { 'oldCurrentPage': oldValue, 'newCurrentPage': newValue });
    };
    /**
     * Returns the progress that a user made by answering on the survey.
     */
    SurveyModel.prototype.getProgress = function () {
        if (this.currentPage == null)
            return 0;
        var index = this.visiblePages.indexOf(this.currentPage) + 1;
        return Math.ceil((index * 100 / this.visiblePageCount));
    };
    Object.defineProperty(SurveyModel.prototype, "isNavigationButtonsShowing", {
        /**
         * Returns true if navigation buttons: 'Prev', 'Next' or 'Complete' are shown.
         */
        get: function () {
            if (this.isDesignMode)
                return false;
            var page = this.currentPage;
            if (!page)
                return false;
            return page.navigationButtonsVisibility == "show" ||
                (page.navigationButtonsVisibility != "hide" && this.showNavigationButtons);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEditMode", {
        /**
         * Returns true if the survey in the edit mode.
         * @see mode
         */
        get: function () { return this.mode == "edit"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDisplayMode", {
        /**
         * Returns true if the survey in the display mode.
         * @see mode
         */
        get: function () { return this.mode == "display"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
        /**
         * Returns true if the survey in the design mode. It is used by SurveyJS Editor
         * @see setDesignMode
         */
        get: function () { return this.getPropertyValue("isDesignMode", false); },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to set the survey into the design mode.
     * @param value use true to set the survey into the design mode.
     */
    SurveyModel.prototype.setDesignMode = function (value) {
        this.setPropertyValue("isDesignMode", value);
    };
    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
        /**
         * Returns true, if a user has already completed the survey on this browser and there is a cookie about it. Survey goes to 'completed' state if the function returns true.
         * @see cookieName
         * @see setCookie
         * @see deleteCookie
         * @see state
         */
        get: function () {
            if (!this.cookieName)
                return false;
            var cookies = document.cookie;
            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the cookie with cookieName in the browser. It is done automatically on survey complete if cookieName is not empty.
     * @see cookieName
     * @see hasCookie
     * @see deleteCookie
     */
    SurveyModel.prototype.setCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
    };
    /**
     * Delete the cookie with cookieName in the browser.
     * @see cookieName
     * @see hasCookie
     * @see setCookie
     */
    SurveyModel.prototype.deleteCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=;";
    };
    /**
     * Call it to go to the next page. It returns false, if it is the last page. If there is an error, for example required question is empty, the function returns false as well.
     * @see isCurrentPageHasErrors
     * @see prevPage
     * @see completeLastPage
     */
    SurveyModel.prototype.nextPage = function () {
        if (this.isLastPage)
            return false;
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doNextPage();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
        /**
         * Returns true, if there is any error on the current page. For example, the required question is empty or a question validation is failed.
         * @see nextPage
         */
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.currentPage.hasErrors(true, true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to go to the previous page. It returns false if the current page is the first page already. It doesn't perform any checks, required questions can be empty.
     * @see isFirstPage
     */
    SurveyModel.prototype.prevPage = function () {
        if (this.isFirstPage)
            return false;
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index - 1];
    };
    /**
     * Call it to complete the survey, if the current page is the last one. It returns false if there is an error on the page. If there is no errors on the page, it calls doComplete and returns true.
     * @see isCurrentPageHasErrors
     * @see nextPage
     * @see doComplete
     */
    SurveyModel.prototype.completeLastPage = function () {
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doComplete();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
        /**
         * Returns true if the current page is the first one.
         */
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.visiblePages.indexOf(this.currentPage) == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
        /**
         * Returns true if the current page is the last one.
         */
        get: function () {
            if (this.currentPage == null)
                return true;
            var vPages = this.visiblePages;
            return vPages.indexOf(this.currentPage) == vPages.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to complete the survey. It writes cookie if cookieName property is not empty, set the survey into 'completed' state, fire onComplete event and sendResult into [dxsurvey.com](http://www.dxsurvey.com) service if surveyPostId property is not empty. It doesn't perform any validation, unlike completeLastPage function.
     * @see cookieName
     * @see state
     * @see onComplete
     * @see surveyPostId
     * @see completeLastPage
     */
    SurveyModel.prototype.doComplete = function () {
        var previousCookie = this.hasCookie;
        this.clearUnusedValues();
        this.setCookie();
        this.setCompleted();
        var self = this;
        var onCompleteOptions = {
            showDataSaving: function (text) { self.setCompletedState("saving", text); },
            showDataSavingError: function (text) { self.setCompletedState("error", text); },
            showDataSavingSuccess: function (text) { self.setCompletedState("success", text); },
            showDataSavingClear: function (text) { self.setCompletedState("", ""); }
        };
        this.onComplete.fire(this, onCompleteOptions);
        if (!previousCookie && this.surveyPostId) {
            this.sendResult();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "isValidatingOnServer", {
        /**
         * Returns true, if at the current moment the question values on the current page are validating on the server.
         * @see onServerValidateQuestions
         */
        get: function () { return this.getPropertyValue("isValidatingOnServer", false); },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setIsValidatingOnServer = function (val) {
        if (val == this.isValidatingOnServer)
            return;
        this.setPropertyValue("isValidatingOnServer", val);
        this.onIsValidatingOnServerChanged();
    };
    SurveyModel.prototype.onIsValidatingOnServerChanged = function () { };
    SurveyModel.prototype.doServerValidation = function () {
        if (!this.onServerValidateQuestions)
            return false;
        var self = this;
        var options = { data: {}, errors: {}, survey: this, complete: function () { self.completeServerValidation(options); } };
        for (var i = 0; i < this.currentPage.questions.length; i++) {
            var question = this.currentPage.questions[i];
            if (!question.visible)
                continue;
            var value = this.getValue(question.name);
            if (!this.isValueEmpty(value))
                options.data[question.name] = value;
        }
        this.setIsValidatingOnServer(true);
        this.onServerValidateQuestions(this, options);
        return true;
    };
    SurveyModel.prototype.completeServerValidation = function (options) {
        this.setIsValidatingOnServer(false);
        if (!options && !options.survey)
            return;
        var self = options.survey;
        var hasErrors = false;
        if (options.errors) {
            for (var name in options.errors) {
                var question = self.getQuestionByName(name);
                if (question && question["errors"]) {
                    hasErrors = true;
                    question["addError"](new __WEBPACK_IMPORTED_MODULE_8__error__["c" /* CustomError */](options.errors[name]));
                }
            }
        }
        if (!hasErrors) {
            if (self.isLastPage)
                self.doComplete();
            else
                self.doNextPage();
        }
    };
    SurveyModel.prototype.doNextPage = function () {
        this.checkOnPageTriggers();
        if (this.sendResultOnPageNext) {
            this.sendResult(this.surveyPostId, this.clientId, true);
        }
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index + 1];
    };
    SurveyModel.prototype.setCompleted = function () {
        this.isCompleted = true;
    };
    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
        /**
         * Returns the html for completed 'Thank you' page.
         * @see completedHtml
         */
        get: function () {
            if (this.completedHtml) {
                return this.processHtml(this.completedHtml);
            }
            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedCompletedBeforeHtml", {
        /**
         * Returns the html showing that the user has already completed the survey
         * @see completedHtml
         */
        get: function () {
            if (this.completedBeforeHtml) {
                return this.processHtml(this.completedBeforeHtml);
            }
            return "<h3>" + this.getLocString("completingSurveyBefore") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
        /**
         * Returns the html that shows on loading the json.
         */
        get: function () {
            if (this.loadingHtml) {
                return this.processHtml(this.loadingHtml);
            }
            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "progressText", {
        /**
         * Returns the text for the current progress.
         */
        get: function () {
            if (this.currentPage == null)
                return "";
            var vPages = this.visiblePages;
            var index = vPages.indexOf(this.currentPage) + 1;
            return this.getLocString("progressText")["format"](index, vPages.length);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.afterRenderSurvey = function (htmlElement) {
        this.onAfterRenderSurvey.fire(this, { survey: this, htmlElement: htmlElement });
    };
    SurveyModel.prototype.updateQuestionCssClasses = function (question, cssClasses) {
        this.onUpdateQuestionCssClasses.fire(this, { question: question, cssClasses: cssClasses });
    };
    SurveyModel.prototype.afterRenderPage = function (htmlElement) {
        if (this.onAfterRenderPage.isEmpty)
            return;
        this.onAfterRenderPage.fire(this, { page: this.currentPage, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderQuestion = function (question, htmlElement) {
        this.onAfterRenderQuestion.fire(this, { question: question, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderPanel = function (panel, htmlElement) {
        this.onAfterRenderPanel.fire(this, { panel: panel, htmlElement: htmlElement });
    };
    SurveyModel.prototype.matrixRowAdded = function (question) {
        this.onMatrixRowAdded.fire(this, { question: question });
    };
    SurveyModel.prototype.matrixRowRemoved = function (question, rowIndex, row) {
        this.onMatrixRowRemoved.fire(this, { question: question, rowIndex: rowIndex, row: row });
    };
    SurveyModel.prototype.matrixCellCreated = function (question, options) {
        options.question = question;
        this.onMatrixCellCreated.fire(this, options);
    };
    SurveyModel.prototype.matrixAfterCellRender = function (question, options) {
        options.question = question;
        this.onMatrixAfterCellRender.fire(this, options);
    };
    SurveyModel.prototype.matrixCellValueChanged = function (question, options) {
        options.question = question;
        this.onMatrixCellValueChanged.fire(this, options);
    };
    SurveyModel.prototype.matrixCellValidate = function (question, options) {
        options.question = question;
        this.onMatrixCellValidate.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["c" /* CustomError */](options.error) : null;
    };
    /**
     * Upload the file into servey
     * @param name question name
     * @param file uploading file
     * @param storeDataAsText set it to true to encode file content into the survey results
     * @param uploadingCallback a call back function to get the status on uploading the file
     */
    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
        var accept = true;
        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
        if (!accept)
            return false;
        if (!storeDataAsText && this.surveyPostId) {
            this.uploadFileCore(name, file, uploadingCallback);
        }
        return true;
    };
    SurveyModel.prototype.createSurveyService = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]();
    };
    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
        var self = this;
        if (uploadingCallback)
            uploadingCallback("uploading");
        this.createSurveyService().sendFile(this.surveyPostId, file, function (success, response) {
            if (uploadingCallback)
                uploadingCallback(success ? "success" : "error");
            if (success) {
                self.setValue(name, response);
            }
        });
    };
    SurveyModel.prototype.getPage = function (index) {
        return this.pages[index];
    };
    /**
     * Add a page into the survey
     * @param page
     * @see addNewPage
     */
    SurveyModel.prototype.addPage = function (page) {
        if (page == null)
            return;
        this.pages.push(page);
        this.updateVisibleIndexes();
    };
    /**
     * Creates a new page and adds it into the survey. Genarates a new name if the name parameter is not set.
     * @param name a page name
     * @see addPage
     */
    SurveyModel.prototype.addNewPage = function (name) {
        if (name === void 0) { name = null; }
        var page = this.createNewPage(name);
        this.addPage(page);
        return page;
    };
    /**
     * Remove the page from the survey
     * @param page
     */
    SurveyModel.prototype.removePage = function (page) {
        var index = this.pages.indexOf(page);
        if (index < 0)
            return;
        this.pages.splice(index, 1);
        if (this.currentPageValue == page) {
            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
        }
        this.updateVisibleIndexes();
    };
    /**
     * Returns a question by its name
     * @param name a question name
     * @param caseInsensitive
     */
    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var questions = this.getAllQuestions();
        if (caseInsensitive)
            name = name.toLowerCase();
        for (var i = 0; i < questions.length; i++) {
            var questionName = questions[i].name;
            if (caseInsensitive)
                questionName = questionName.toLowerCase();
            if (questionName == name)
                return questions[i];
        }
        return null;
    };
    /**
     * Get a list of questions by their names
     * @param names the array of names
     * @param caseInsensitive
     */
    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var question = this.getQuestionByName(names[i], caseInsensitive);
            if (question)
                result.push(question);
        }
        return result;
    };
    /**
     * Returns a page on which an element (question or panel) is placed.
     * @param element Question or Panel
     */
    SurveyModel.prototype.getPageByElement = function (element) {
        for (var i = 0; i < this.pages.length; i++) {
            var page = this.pages[i];
            if (page.containsElement(element))
                return page;
        }
        return null;
    };
    /**
     * Returns a page on which a question is located
     * @param question
     */
    SurveyModel.prototype.getPageByQuestion = function (question) {
        return this.getPageByElement(question);
    };
    /**
     * Returns a page by it's name.
     * @param name
     */
    SurveyModel.prototype.getPageByName = function (name) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].name == name)
                return this.pages[i];
        }
        return null;
    };
    /**
     * Rertuns a list of pages by their names
     * @param names a list of pages names
     */
    SurveyModel.prototype.getPagesByNames = function (names) {
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var page = this.getPageByName(names[i]);
            if (page)
                result.push(page);
        }
        return result;
    };
    /**
     * Returns the list of all questions in the survey
     * @param visibleOnly set it true, if you want to get only visible questions
     */
    SurveyModel.prototype.getAllQuestions = function (visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        var result = new Array();
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].addQuestionsToList(result, visibleOnly, includingDesignTime);
        }
        return result;
    };
    /**
     * Returns the list of all panels in the survey
     */
    SurveyModel.prototype.getAllPanels = function (visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        var result = new Array();
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].addPanelsIntoList(result, visibleOnly, includingDesignTime);
        }
        return result;
    };
    SurveyModel.prototype.createNewPage = function (name) { return new __WEBPACK_IMPORTED_MODULE_3__page__["a" /* PageModel */](name); };
    SurveyModel.prototype.notifyQuestionOnValueChanged = function (name, newValue) {
        var questions = this.getAllQuestions();
        var question = null;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].name != name)
                continue;
            question = questions[i];
            this.doSurveyValueChanged(question, newValue);
            this.onValueChanged.fire(this, { 'name': name, 'question': question, 'value': newValue });
        }
        if (!question) {
            this.onValueChanged.fire(this, { 'name': name, 'question': null, 'value': newValue });
        }
        this.notifyElementsOnAnyValueOrVariableChanged(name);
    };
    SurveyModel.prototype.notifyElementsOnAnyValueOrVariableChanged = function (name) {
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].onAnyValueChanged(name);
        }
    };
    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].name));
        }
    };
    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
        question.onSurveyValueChanged(newValue);
    };
    SurveyModel.prototype.checkOnPageTriggers = function () {
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var value = this.getValue(question.name);
            this.checkTriggers(question.name, value, true);
        }
    };
    SurveyModel.prototype.getCurrentPageQuestions = function () {
        var result = [];
        var page = this.currentPage;
        if (!page)
            return result;
        for (var i = 0; i < page.questions.length; i++) {
            var question = page.questions[i];
            if (!question.visible || !question.name)
                continue;
            result.push(question);
        }
        return result;
    };
    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
        for (var i = 0; i < this.triggers.length; i++) {
            var trigger = this.triggers[i];
            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
                trigger.check(newValue);
            }
        }
    };
    SurveyModel.prototype.doElementsOnLoad = function () {
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].onSurveyLoad();
        }
    };
    SurveyModel.prototype.runConditions = function () {
        var pages = this.pages;
        for (var i = 0; i < pages.length; i++) {
            pages[i].runCondition(this.valuesHash);
        }
    };
    /**
     * Send the survey result into [dxsurvey.com](http://www.dxsurvey.com) service.
     * @param postId [dxsurvey.com](http://www.dxsurvey.com) service postId
     * @param clientId Typically a customer e-mail or an identificator
     * @param isPartialCompleted Set it to true if the survey is not completed yet and it is an intermediate results
     * @see surveyPostId
     * @see clientId
     */
    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
        if (postId === void 0) { postId = null; }
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        if (!this.isEditMode)
            return;
        if (isPartialCompleted && this.onPartialSend) {
            this.onPartialSend.fire(this, null);
        }
        if (!postId && this.surveyPostId) {
            postId = this.surveyPostId;
        }
        if (!postId)
            return;
        if (clientId) {
            this.clientId = clientId;
        }
        if (isPartialCompleted && !this.clientId)
            return;
        var self = this;
        if (this.surveyShowDataSaving) {
            this.setCompletedState("saving", "");
        }
        this.createSurveyService().sendResult(postId, this.data, function (success, response) {
            if (self.surveyShowDataSaving) {
                if (success) {
                    self.setCompletedState("success", "");
                }
                else {
                    self.setCompletedState("error", "");
                }
            }
            self.onSendResult.fire(self, { success: success, response: response });
        }, this.clientId, isPartialCompleted);
    };
    /**
     * It calls the [dxsurvey.com](http://www.dxsurvey.com) service and on callback fires onGetResult event with all answers that your users made for a question.
     * @param resultId [dxsurvey.com](http://www.dxsurvey.com) service resultId
     * @param name The question name
     * @see onGetResult
     */
    SurveyModel.prototype.getResult = function (resultId, name) {
        var self = this;
        this.createSurveyService().getResult(resultId, name, function (success, data, dataList, response) {
            self.onGetResult.fire(self, { success: success, data: data, dataList: dataList, response: response });
        });
    };
    /**
     * Loads the survey Json from the [dxsurvey.com](http://www.dxsurvey.com) service. If clientId is not null and user has already completed the survey, the survey will go into "completedbefore" state.
     * @param surveyId [dxsurvey.com](http://www.dxsurvey.com) service surveyId
     * @param clientId indentificator for a user, for example e-mail or unique customer id in your web application.
     * @see state
     */
    SurveyModel.prototype.loadSurveyFromService = function (surveyId, cliendId) {
        if (surveyId === void 0) { surveyId = null; }
        if (cliendId === void 0) { cliendId = null; }
        if (surveyId) {
            this.surveyId = surveyId;
        }
        if (cliendId) {
            this.clientId = cliendId;
        }
        var self = this;
        this.isLoading = true;
        this.onLoadingSurveyFromService();
        if (cliendId) {
            this.createSurveyService().getSurveyJsonAndIsCompleted(this.surveyId, this.clientId, function (success, json, isCompleted, response) {
                self.isLoading = false;
                if (success) {
                    self.isCompletedBefore = isCompleted == "completed";
                    self.loadSurveyFromServiceJson(json);
                }
            });
        }
        else {
            this.createSurveyService().loadSurvey(this.surveyId, function (success, result, response) {
                self.isLoading = false;
                if (success) {
                    self.loadSurveyFromServiceJson(result);
                }
            });
        }
    };
    SurveyModel.prototype.loadSurveyFromServiceJson = function (json) {
        if (!json)
            return;
        this.setJsonObject(json);
        this.notifyAllQuestionsOnValueChanged();
        this.onLoadSurveyFromService();
    };
    SurveyModel.prototype.onLoadingSurveyFromService = function () {
    };
    SurveyModel.prototype.onLoadSurveyFromService = function () {
    };
    SurveyModel.prototype.checkPageVisibility = function (question, oldQuestionVisible) {
        var page = this.getPageByQuestion(question);
        if (!page)
            return;
        var newValue = page.isVisible;
        if (newValue != page.getIsPageVisible(question) || oldQuestionVisible) {
            this.pageVisibilityChanged(page, newValue);
        }
    };
    SurveyModel.prototype.updateVisibleIndexes = function () {
        this.updatePageVisibleIndexes(this.showPageNumbers);
        if (this.showQuestionNumbers == "onPage") {
            var visPages = this.visiblePages;
            for (var i = 0; i < visPages.length; i++) {
                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
            }
        }
        else {
            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
        }
    };
    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
        var index = 0;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].visibleIndex = this.pages[i].visible ? (index++) : -1;
            this.pages[i].num = showIndex && this.pages[i].visible ? this.pages[i].visibleIndex + 1 : -1;
        }
    };
    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
        __WEBPACK_IMPORTED_MODULE_2__base__["a" /* SurveyElement */].setVisibleIndex(questions, 0, showIndex);
    };
    SurveyModel.prototype.setJsonObject = function (jsonObj) {
        if (!jsonObj)
            return;
        this.jsonErrors = null;
        var jsonConverter = new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */]();
        jsonConverter.toObject(jsonObj, this);
        if (jsonConverter.errors.length > 0) {
            this.jsonErrors = jsonConverter.errors;
        }
    };
    SurveyModel.prototype.endLoadingFromJson = function () {
        this.runConditions();
        this.updateVisibleIndexes();
        this.updateProcessedTextValues();
        _super.prototype.endLoadingFromJson.call(this);
        if (this.hasCookie) {
            this.doComplete();
        }
        this.doElementsOnLoad();
    };
    SurveyModel.prototype.onBeforeCreating = function () { };
    SurveyModel.prototype.onCreating = function () { };
    SurveyModel.prototype.updateProcessedTextValues = function () {
        this.processedTextValues = {};
        var self = this;
        this.processedTextValues["pageno"] = function (name) { return self.currentPage != null ? self.visiblePages.indexOf(self.currentPage) + 1 : 0; };
        this.processedTextValues["pagecount"] = function (name) { return self.visiblePageCount; };
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.addQuestionToProcessedTextValues(questions[i]);
        }
    };
    SurveyModel.prototype.addQuestionToProcessedTextValues = function (question) {
        this.processedTextValues[question.name.toLowerCase()] = "question";
    };
    SurveyModel.prototype.hasProcessedTextValue = function (name) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        return this.processedTextValues[firstName.toLowerCase()];
    };
    SurveyModel.prototype.getProcessedTextValue = function (name, returnDisplayValue) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        var val = this.processedTextValues[firstName.toLowerCase()];
        if (!val)
            return null;
        if (val == "variable") {
            return this.getVariable(name.toLowerCase());
        }
        if (val == "question") {
            var question = this.getQuestionByName(firstName, true);
            if (!question)
                return null;
            name = question.name + name.substr(firstName.length);
            var values = {};
            values[firstName] = returnDisplayValue ? question.displayValue : this.getValue(firstName);
            return new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, values);
        }
        if (val == "value") {
            return new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, this.valuesHash);
        }
        return val(name);
    };
    SurveyModel.prototype.clearUnusedValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            questions[i].clearUnusedValues();
        }
        if (this.clearInvisibleValues == "onComplete") {
            this.clearInvisibleQuestionValues();
        }
    };
    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].visible)
                continue;
            this.clearValue(questions[i].name);
        }
    };
    /**
     * Returns a variable value. Variable, unlike values, are not stored in the survey results.
     * @param name A variable name
     * @see SetVariable
     */
    SurveyModel.prototype.getVariable = function (name) {
        if (!name)
            return null;
        return this.variablesHash[name];
    };
    /**
     * Sets a variable value. Variable, unlike values, are not stored in the survey results.
     * @param name A variable name
     * @param newValue
     * @see GetVariable
     */
    SurveyModel.prototype.setVariable = function (name, newValue) {
        if (!name)
            return;
        this.variablesHash[name] = newValue;
        this.processedTextValues[name.toLowerCase()] = "variable";
        this.notifyElementsOnAnyValueOrVariableChanged(name);
    };
    //ISurvey data
    SurveyModel.prototype.getUnbindValue = function (value) {
        if (value && value instanceof Object) {
            //do not return the same object instance!!!
            return JSON.parse(JSON.stringify(value));
        }
        return value;
    };
    /**
     * Returns a question value
     * @param name A question name
     * @see data
     * @see setValue
     */
    SurveyModel.prototype.getValue = function (name) {
        if (!name || name.length == 0)
            return null;
        var value = this.valuesHash[name];
        return this.getUnbindValue(value);
    };
    /**
     * Sets a question value. It runs all triggers and conditions (visibleIf properties). Goes to the next page if goNextPageAutomatic is true and all questions on the current page are answered correctly.
     * @param name A question name
     * @param newValue
     * @see data
     * @see getValue
     * @see PageModel.visibleIf
     * @see QuestionBase.visibleIf
     * @see goNextPageAutomatic
     */
    SurveyModel.prototype.setValue = function (name, newValue) {
        if (this.isValueEqual(name, newValue))
            return;
        if (this.isValueEmpty(newValue)) {
            delete this.valuesHash[name];
        }
        else {
            newValue = this.getUnbindValue(newValue);
            this.setDataValueCore(this.valuesHash, name, newValue);
            var processedVar = this.processedTextValues[name.toLowerCase()];
            if (!processedVar) {
                this.processedTextValues[name.toLowerCase()] = "value";
            }
        }
        this.notifyQuestionOnValueChanged(name, newValue);
        this.checkTriggers(name, newValue, false);
        this.runConditions();
        this.tryGoNextPageAutomatic(name);
    };
    SurveyModel.prototype.isValueEqual = function (name, newValue) {
        if (newValue == "")
            newValue = null;
        var oldValue = this.getValue(name);
        if (newValue === null || oldValue === null)
            return newValue === oldValue;
        return this.isTwoValueEquals(newValue, oldValue);
    };
    SurveyModel.prototype.onPageAdded = function (page) {
        page.setSurveyImpl(this);
        if (!page.name)
            page.name = this.generateNewName(this.pages, "page");
    };
    SurveyModel.prototype.generateNewName = function (elements, baseName) {
        var keys = {};
        for (var i = 0; i < elements.length; i++)
            keys[elements[i]["name"]] = true;
        var index = 1;
        while (keys[baseName + index])
            index++;
        return baseName + index;
    };
    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
        if (!this.goNextPageAutomatic || !this.currentPage)
            return;
        var question = this.getQuestionByName(name);
        if (question && (!question.visible || !question.supportGoNextPageAutomatic()))
            return;
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            var value = this.getValue(questions[i].name);
            if (questions[i].hasInput && this.isValueEmpty(value))
                return;
        }
        if (!this.currentPage.hasErrors(true, false)) {
            if (!this.isLastPage) {
                this.nextPage();
            }
            else {
                this.completeLastPage();
            }
        }
    };
    /**
     * Returns the comment value
     * @param name
     * @see setComment
     */
    SurveyModel.prototype.getComment = function (name) {
        var result = this.data[name + this.commentPrefix];
        if (result == null)
            result = "";
        return result;
    };
    /**
     * Set the comment value
     * @param name
     * @param newValue
     * @see getComment
     */
    SurveyModel.prototype.setComment = function (name, newValue) {
        var commentName = name + this.commentPrefix;
        if (newValue === "" || newValue === null) {
            delete this.valuesHash[commentName];
        }
        else {
            this.setDataValueCore(this.valuesHash, commentName, newValue);
            this.tryGoNextPageAutomatic(name);
        }
        var question = this.getQuestionByName(name);
        if (question) {
            this.onValueChanged.fire(this, { 'name': commentName, 'question': question, 'value': newValue });
        }
    };
    /**
     * Remove the value from the survey result.
     * @param {string} name The name of the value. Typically it is a question name
     */
    SurveyModel.prototype.clearValue = function (name) {
        this.setValue(name, null);
        this.setComment(name, null);
    };
    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
        this.updateVisibleIndexes();
        this.onVisibleChanged.fire(this, { 'question': question, 'name': question.name, 'visible': newValue });
        this.checkPageVisibility(question, !newValue);
        if (question && !question.visible && this.clearInvisibleValues == "onHidden") {
            this.clearValue(question.name);
        }
    };
    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
        this.updateVisibleIndexes();
        this.onPageVisibleChanged.fire(this, { 'page': page, 'visible': newValue });
    };
    SurveyModel.prototype.panelVisibilityChanged = function (panel, newValue) {
        this.updateVisibleIndexes();
        this.onPanelVisibleChanged.fire(this, { 'panel': panel, 'visible': newValue });
    };
    SurveyModel.prototype.questionAdded = function (question, index, parentPanel, rootPanel) {
        if (!question.name)
            question.name = this.generateNewName(this.getAllQuestions(false, true), "question");
        this.updateVisibleIndexes();
        this.addQuestionToProcessedTextValues(question);
        this.onQuestionAdded.fire(this, { 'question': question, 'name': question.name, 'index': index, 'parentPanel': parentPanel, 'rootPanel': rootPanel });
    };
    SurveyModel.prototype.questionRemoved = function (question) {
        this.updateVisibleIndexes();
        this.onQuestionRemoved.fire(this, { 'question': question, 'name': question.name });
    };
    SurveyModel.prototype.panelAdded = function (panel, index, parentPanel, rootPanel) {
        if (!panel.name)
            panel.name = this.generateNewName(this.getAllPanels(false, true), "panel");
        this.updateVisibleIndexes();
        this.onPanelAdded.fire(this, { 'panel': panel, 'name': panel.name, 'index': index, 'parentPanel': parentPanel, 'rootPanel': rootPanel });
    };
    SurveyModel.prototype.panelRemoved = function (panel) {
        this.updateVisibleIndexes();
        this.onPanelRemoved.fire(this, { 'panel': panel, 'name': panel.name });
    };
    SurveyModel.prototype.validateQuestion = function (name) {
        if (this.onValidateQuestion.isEmpty)
            return null;
        var options = { name: name, value: this.getValue(name), error: null };
        this.onValidateQuestion.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["c" /* CustomError */](options.error) : null;
    };
    SurveyModel.prototype.processHtml = function (html) {
        var options = { html: html };
        this.onProcessHtml.fire(this, options);
        return this.processText(options.html, true);
    };
    SurveyModel.prototype.processText = function (text, returnDisplayValue) {
        return this.textPreProcessor.process(text, returnDisplayValue);
    };
    SurveyModel.prototype.processTextEx = function (text) {
        var res = { text: this.textPreProcessor.process(text), hasAllValuesOnLastRun: true };
        res.hasAllValuesOnLastRun = this.textPreProcessor.hasAllValuesOnLastRun;
        return res;
    };
    //ISurveyImplementor
    SurveyModel.prototype.geSurveyData = function () { return this; };
    SurveyModel.prototype.getSurvey = function () { return this; };
    SurveyModel.prototype.getTextProcessor = function () { return this; };
    //ISurveyTriggerOwner
    SurveyModel.prototype.getObjects = function (pages, questions) {
        var result = [];
        Array.prototype.push.apply(result, this.getPagesByNames(pages));
        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
        return result;
    };
    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
        if (!name)
            return;
        if (isVariable) {
            this.setVariable(name, value);
        }
        else {
            this.setValue(name, value);
        }
    };
    return SurveyModel;
}(__WEBPACK_IMPORTED_MODULE_2__base__["c" /* Base */]));

SurveyModel.stylesManager = new __WEBPACK_IMPORTED_MODULE_9__stylesmanager__["a" /* StylesManager */]();
SurveyModel.platform = "unknown";
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("survey", [{ name: "locale", choices: function () { return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getLocales(); } },
    { name: "title:text", serializationProperty: "locTitle" }, { name: "focusFirstQuestionAutomatic:boolean", default: true },
    { name: "completedHtml:html", serializationProperty: "locCompletedHtml" }, { name: "completedBeforeHtml:html", serializationProperty: "locCompletedBeforeHtml" },
    { name: "loadingHtml:html", serializationProperty: "locLoadingHtml" }, { name: "pages", className: "page", visible: false },
    { name: "questions", alternativeName: "elements", baseClassName: "question", visible: false, onGetValue: function (obj) { return null; }, onSetValue: function (obj, value, jsonConverter) { var page = obj.addNewPage(""); jsonConverter.toObject({ questions: value }, page); } },
    { name: "triggers:triggers", baseClassName: "surveytrigger", classNamePart: "trigger" },
    { name: "surveyId", visible: false }, { name: "surveyPostId", visible: false }, { name: "surveyShowDataSaving", visible: false }, "cookieName", "sendResultOnPageNext:boolean",
    { name: "showNavigationButtons:boolean", default: true }, { name: "showTitle:boolean", default: true },
    { name: "showPageTitles:boolean", default: true }, { name: "showCompletedPage:boolean", default: true },
    "showPageNumbers:boolean", { name: "showQuestionNumbers", default: "on", choices: ["on", "onPage", "off"] },
    { name: "questionTitleLocation", default: "top", choices: ["top", "bottom"] },
    { name: "questionErrorLocation", default: "top", choices: ["top", "bottom"] },
    { name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] },
    { name: "mode", default: "edit", choices: ["edit", "display"] },
    { name: "storeOthersAsComment:boolean", default: true }, "goNextPageAutomatic:boolean",
    { name: "clearInvisibleValues", default: "none", choices: ["none", "onComplete", "onHidden"] },
    { name: "pagePrevText", serializationProperty: "locPagePrevText" },
    { name: "pageNextText", serializationProperty: "locPageNextText" },
    { name: "completeText", serializationProperty: "locCompleteText" },
    { name: "requiredText", default: "*" }, "questionStartIndex", { name: "questionTitleTemplate", serializationProperty: "locQuestionTitleTemplate" }]);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactsurveymodel__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactpage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reactSurveyNavigation__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reactquestionfactory__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reactSurveyProgress__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reactquestionelement__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Survey; });









var Survey = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Survey, _super);
    function Survey(props) {
        var _this = _super.call(this, props) || this;
        _this.isCurrentPageChanged = false;
        _this.handleTryAgainClick = _this.handleTryAgainClick.bind(_this);
        _this.state = _this.getState();
        _this.updateSurvey(props);
        return _this;
    }
    Object.defineProperty(Survey, "cssType", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_6__defaultCss_cssstandard__["b" /* surveyCss */].currentType; },
        set: function (value) { __WEBPACK_IMPORTED_MODULE_6__defaultCss_cssstandard__["b" /* surveyCss */].currentType = value; },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this.getState());
        this.updateSurvey(nextProps);
    };
    Survey.prototype.componentDidUpdate = function () {
        if (this.isCurrentPageChanged) {
            this.isCurrentPageChanged = false;
            if (this.survey.focusFirstQuestionAutomatic) {
                this.survey.focusFirstQuestion();
            }
        }
    };
    Survey.prototype.componentDidMount = function () {
        var el = this.refs["root"];
        if (el && this.survey)
            this.survey.doAfterRenderSurvey(el);
    };
    Survey.prototype.render = function () {
        if (this.survey.state == "completed")
            return this.renderCompleted();
        if (this.survey.state == "completedbefore")
            return this.renderCompletedBefore();
        if (this.survey.state == "loading")
            return this.renderLoading();
        return this.renderSurvey();
    };
    Object.defineProperty(Survey.prototype, "css", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_6__defaultCss_cssstandard__["b" /* surveyCss */].getCss(); },
        set: function (value) {
            this.survey.mergeCss(value, this.css);
        },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.handleTryAgainClick = function (event) {
        this.survey.doComplete();
    };
    Survey.prototype.renderCompleted = function () {
        if (!this.survey.showCompletedPage)
            return null;
        var completedState = null;
        if (this.survey.completedState) {
            var tryAgainButton = null;
            if (this.survey.completedState == "error") {
                var btnText = this.survey.getLocString('saveAgainButton');
                tryAgainButton = (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { type: "button", value: btnText, className: this.css.saveData.saveAgainButton, onClick: this.handleTryAgainClick }));
            }
            var css = this.css.saveData[this.survey.completedState];
            completedState = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.saveData.root },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, this.survey.completedStateText),
                    tryAgainButton));
        }
        var htmlValue = { __html: this.survey.processedCompletedHtml };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { dangerouslySetInnerHTML: htmlValue }),
            completedState));
    };
    Survey.prototype.renderCompletedBefore = function () {
        var htmlValue = { __html: this.survey.processedCompletedBeforeHtml };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { dangerouslySetInnerHTML: htmlValue }));
    };
    Survey.prototype.renderLoading = function () {
        var htmlValue = { __html: this.survey.processedLoadingHtml };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { dangerouslySetInnerHTML: htmlValue }));
    };
    Survey.prototype.renderSurvey = function () {
        var title = this.survey.title && this.survey.showTitle ? this.renderTitle() : null;
        var currentPage = this.survey.currentPage ? this.renderPage() : null;
        var pageId = this.survey.currentPage ? this.survey.currentPage.id : "";
        var topProgress = this.survey.showProgressBar == "top" ? this.renderProgress(true) : null;
        var bottomProgress = this.survey.showProgressBar == "bottom" ? this.renderProgress(false) : null;
        var buttons = (currentPage && this.survey.isNavigationButtonsShowing) ? this.renderNavigation() : null;
        if (!currentPage) {
            currentPage = this.renderEmptySurvey();
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: "root", className: this.css.root },
            title,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { id: pageId, className: this.css.body },
                topProgress,
                currentPage,
                bottomProgress),
            buttons));
    };
    Survey.prototype.renderTitle = function () {
        var title = __WEBPACK_IMPORTED_MODULE_8__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.survey.locTitle);
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.header },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h3", null, title));
    };
    Survey.prototype.renderPage = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__reactpage__["a" /* SurveyPage */], { survey: this.survey, page: this.survey.currentPage, css: this.css, creator: this });
    };
    Survey.prototype.renderProgress = function (isTop) {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__reactSurveyProgress__["a" /* SurveyProgress */], { survey: this.survey, css: this.css, isTop: isTop });
    };
    Survey.prototype.renderNavigation = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__reactSurveyNavigation__["a" /* SurveyNavigation */], { survey: this.survey, css: this.css });
    };
    Survey.prototype.renderEmptySurvey = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, this.survey.emptySurveyText));
    };
    Survey.prototype.updateSurvey = function (newProps) {
        if (newProps) {
            if (newProps.model) {
                this.survey = newProps.model;
            }
            else {
                if (newProps.json) {
                    this.survey = new __WEBPACK_IMPORTED_MODULE_2__reactsurveymodel__["a" /* ReactSurveyModel */](newProps.json);
                }
            }
        }
        else {
            this.survey = new __WEBPACK_IMPORTED_MODULE_2__reactsurveymodel__["a" /* ReactSurveyModel */]();
        }
        if (newProps) {
            if (newProps.clientId)
                this.survey.clientId = newProps.clientId;
            if (newProps.data)
                this.survey.data = newProps.data;
            if (newProps.css)
                this.survey.mergeCss(newProps.css, this.css);
        }
        //set the first page
        var dummy = this.survey.currentPage;
        this.setSurveyEvents(newProps);
    };
    Survey.prototype.getState = function () { return { pageIndexChange: 0, isCompleted: false, modelChanged: 0 }; };
    Survey.prototype.setSurveyEvents = function (newProps) {
        var self = this;
        this.survey.renderCallback = function () {
            self.state.modelChanged = self.state.modelChanged + 1;
            self.setState(self.state);
        };
        this.survey.onComplete.add(function (sender) { self.state.isCompleted = true; self.setState(self.state); });
        this.survey.onPartialSend.add(function (sender) { self.setState(self.state); });
        this.survey.onCurrentPageChanged.add(function (sender, options) {
            self.isCurrentPageChanged = true;
            self.state.pageIndexChange = self.state.pageIndexChange + 1;
            self.setState(self.state);
            if (newProps && newProps.onCurrentPageChanged)
                newProps.onCurrentPageChanged(sender, options);
        });
        this.survey.onVisibleChanged.add(function (sender, options) {
            if (options.question && options.question.react) {
                var state = options.question.react.state;
                state.visible = options.question.visible;
                options.question.react.setState(state);
            }
        });
        this.survey.onValueChanged.add(function (sender, options) {
            if (options.question && options.question.react) {
                var state = options.question.react.state;
                state.value = options.value;
                options.question.react.setState(state);
            }
        });
        if (!newProps)
            return;
        this.survey.onValueChanged.add(function (sender, options) {
            if (newProps.data)
                newProps.data[options.name] = options.value;
            if (newProps.onValueChanged)
                newProps.onValueChanged(sender, options);
        });
        if (newProps.onVisibleChanged) {
            this.survey.onVisibleChanged.add(function (sender, options) { newProps.onVisibleChanged(sender, options); });
        }
        if (newProps.onComplete) {
            this.survey.onComplete.add(function (sender, options) { newProps.onComplete(sender, options); });
        }
        if (newProps.onPartialSend) {
            this.survey.onPartialSend.add(function (sender) { newProps.onPartialSend(sender); });
        }
        if (newProps.onPageVisibleChanged) {
            this.survey.onPageVisibleChanged.add(function (sender, options) { newProps.onPageVisibleChanged(sender, options); });
        }
        if (newProps.onPanelVisibleChanged) {
            this.survey.onPanelVisibleChanged.add(function (sender, options) { newProps.onPanelVisibleChanged(sender, options); });
        }
        if (newProps.onServerValidateQuestions) {
            this.survey.onServerValidateQuestions = newProps.onServerValidateQuestions;
        }
        if (newProps.onQuestionAdded) {
            this.survey.onQuestionAdded.add(function (sender, options) { newProps.onQuestionAdded(sender, options); });
        }
        if (newProps.onQuestionRemoved) {
            this.survey.onQuestionRemoved.add(function (sender, options) { newProps.onQuestionRemoved(sender, options); });
        }
        if (newProps.onValidateQuestion) {
            this.survey.onValidateQuestion.add(function (sender, options) { newProps.onValidateQuestion(sender, options); });
        }
        if (newProps.onSendResult) {
            this.survey.onSendResult.add(function (sender, options) { newProps.onSendResult(sender, options); });
        }
        if (newProps.onGetResult) {
            this.survey.onGetResult.add(function (sender, options) { newProps.onGetResult(sender, options); });
        }
        if (newProps.onProcessHtml) {
            this.survey.onProcessHtml.add(function (sender, options) { newProps.onProcessHtml(sender, options); });
        }
        if (newProps.onAfterRenderSurvey) {
            this.survey.onAfterRenderSurvey.add(function (sender, options) { newProps.onAfterRenderSurvey(sender, options); });
        }
        if (newProps.onAfterRenderPage) {
            this.survey.onAfterRenderPage.add(function (sender, options) { newProps.onAfterRenderPage(sender, options); });
        }
        if (newProps.onAfterRenderQuestion) {
            this.survey.onAfterRenderQuestion.add(function (sender, options) { newProps.onAfterRenderQuestion(sender, options); });
        }
        if (newProps.onAfterRenderPanel) {
            this.survey.onAfterRenderPanel.add(function (sender, options) { newProps.onAfterRenderPanel(sender, options); });
        }
        if (newProps.onTextMarkdown) {
            this.survey.onTextMarkdown.add(function (sender, options) { newProps.onTextMarkdown(sender, options); });
        }
        if (newProps.onMatrixRowAdded) {
            this.survey.onMatrixRowAdded.add(function (sender, options) { newProps.onMatrixRowAdded(sender, options); });
        }
        if (newProps.onMatrixCellCreated) {
            this.survey.onMatrixCellCreated.add(function (sender, options) { newProps.onMatrixCellCreated(sender, options); });
        }
        if (newProps.onMatrixAfterCellRender) {
            this.survey.onMatrixAfterCellRender.add(function (sender, options) { newProps.onMatrixAfterCellRender(sender, options); });
        }
        if (newProps.onMatrixCellValueChanged) {
            this.survey.onMatrixCellValueChanged.add(function (sender, options) { newProps.onMatrixCellValueChanged(sender, options); });
        }
    };
    //ISurveyCreator
    Survey.prototype.createQuestionElement = function (question) {
        return __WEBPACK_IMPORTED_MODULE_5__reactquestionfactory__["a" /* ReactQuestionFactory */].Instance.createQuestion(question.getTemplate(), {
            question: question, isDisplayMode: question.isReadOnly, creator: this
        });
    };
    Survey.prototype.renderError = function (key, errorText, cssClasses) {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { key: key, className: cssClasses.error.item }, errorText);
    };
    Survey.prototype.questionTitleLocation = function () { return this.survey.questionTitleLocation; };
    Survey.prototype.questionErrorLocation = function () { return this.survey.questionErrorLocation; };
    return Survey;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicesRestfull; });






/**
 * A definition for filling choices for checkbox, dropdown and radiogroup questions from resfull services.
 * The run method call a restfull service and results can be get on getREsultCallback.
 */
var ChoicesRestfull = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ChoicesRestfull, _super);
    function ChoicesRestfull() {
        var _this = _super.call(this) || this;
        _this.lastObjHash = "";
        _this.processedUrl = "";
        _this.processedPath = "";
        _this.error = null;
        return _this;
    }
    ChoicesRestfull.getCachedItemsResult = function (obj) {
        var hash = obj.objHash;
        var res = ChoicesRestfull.itemsResult[hash];
        if (!res)
            return false;
        if (obj.getResultCallback) {
            obj.getResultCallback(res);
        }
        return true;
    };
    ChoicesRestfull.prototype.run = function (textProcessor) {
        if (textProcessor === void 0) { textProcessor = null; }
        if (!this.url || !this.getResultCallback)
            return;
        this.processedText(textProcessor);
        if (!this.processedUrl) {
            this.getResultCallback([]);
            return;
        }
        if (this.lastObjHash == this.objHash)
            return;
        this.lastObjHash = this.objHash;
        if (this.useChangedItemsResults())
            return;
        this.error = null;
        this.sendRequest();
    };
    ChoicesRestfull.prototype.useChangedItemsResults = function () {
        return ChoicesRestfull.getCachedItemsResult(this);
    };
    ChoicesRestfull.prototype.processedText = function (textProcessor) {
        if (textProcessor) {
            var pUrl = textProcessor.processTextEx(this.url);
            var pPath = textProcessor.processTextEx(this.path);
            if (!pUrl.hasAllValuesOnLastRun || !pPath.hasAllValuesOnLastRun) {
                this.processedUrl = "";
                this.processedPath = "";
            }
            else {
                this.processedUrl = pUrl.text;
                this.processedPath = pPath.text;
            }
        }
        else {
            this.processedUrl = this.url;
            this.processedPath = this.path;
        }
    };
    ChoicesRestfull.prototype.sendRequest = function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.processedUrl);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            if (xhr.status == 200) {
                self.onLoad(JSON.parse(xhr.response));
            }
            else {
                self.onError(xhr.statusText, xhr.responseText);
            }
        };
        xhr.send();
    };
    ChoicesRestfull.prototype.getType = function () { return "choicesByUrl"; };
    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
        get: function () {
            return !this.url && !this.path && !this.valueName && !this.titleName;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.prototype.getCustomPropertiesNames = function () {
        var properties = this.getCustomProperties();
        var res = new Array();
        for (var i = 0; i < properties.length; i++) {
            res.push(this.getCustomPropertyName(properties[i].name));
        }
        return res;
    };
    ChoicesRestfull.prototype.getCustomPropertyName = function (propertyName) { return propertyName + "Name"; };
    ChoicesRestfull.prototype.getCustomProperties = function () {
        var properties = __WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.getProperties(this.itemValueType);
        var res = [];
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == "value" || properties[i].name == "text")
                continue;
            res.push(properties[i]);
        }
        return res;
    };
    ChoicesRestfull.prototype.setData = function (json) {
        this.clear();
        if (json.url)
            this.url = json.url;
        if (json.path)
            this.path = json.path;
        if (json.valueName)
            this.valueName = json.valueName;
        if (json.titleName)
            this.titleName = json.titleName;
        var properties = this.getCustomPropertiesNames();
        for (var i = 0; i < properties.length; i++) {
            if (json[properties[i]])
                this[properties[i]] = json[properties[i]];
        }
    };
    ChoicesRestfull.prototype.getData = function () {
        if (this.isEmpty)
            return null;
        var res = {};
        if (this.url)
            res["url"] = this.url;
        if (this.path)
            res["path"] = this.path;
        if (this.valueName)
            res["valueName"] = this.valueName;
        if (this.titleName)
            res["titleName"] = this.titleName;
        var properties = this.getCustomPropertiesNames();
        for (var i = 0; i < properties.length; i++) {
            if (this[properties[i]])
                res[properties[i]] = this[properties[i]];
        }
        return res;
    };
    Object.defineProperty(ChoicesRestfull.prototype, "url", {
        get: function () { return this.getPropertyValue("url", ""); },
        set: function (val) { this.setPropertyValue("url", val); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ChoicesRestfull.prototype, "path", {
        get: function () { return this.getPropertyValue("path", ""); },
        set: function (val) { this.setPropertyValue("path", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChoicesRestfull.prototype, "valueName", {
        get: function () { return this.getPropertyValue("valueName", ""); },
        set: function (val) { this.setPropertyValue("valueName", val); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ChoicesRestfull.prototype, "titleName", {
        get: function () { return this.getPropertyValue("titleName", ""); },
        set: function (val) { this.setPropertyValue("titleName", val); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ChoicesRestfull.prototype, "itemValueType", {
        get: function () {
            if (!this.owner)
                return "itemvalue";
            var prop = __WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.findProperty(this.owner.getType(), "choices");
            if (!prop)
                return "itemvalue";
            if (prop.type == "itemvalues")
                return "itemvalue";
            return prop.type;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.prototype.clear = function () {
        this.url = "";
        this.path = "";
        this.valueName = "";
        this.titleName = "";
        var properties = this.getCustomPropertiesNames();
        for (var i = 0; i < properties.length; i++) {
            if (this[properties[i]])
                this[properties[i]] = "";
        }
    };
    ChoicesRestfull.prototype.onLoad = function (result) {
        var items = [];
        result = this.getResultAfterPath(result);
        if (result && result["length"]) {
            for (var i = 0; i < result.length; i++) {
                var itemValue = result[i];
                if (!itemValue)
                    continue;
                var value = this.getValue(itemValue);
                var title = this.getTitle(itemValue);
                var item = new __WEBPACK_IMPORTED_MODULE_2__itemvalue__["a" /* ItemValue */](value, title);
                this.setCustomProperties(item, itemValue);
                items.push(item);
            }
        }
        else {
            this.error = new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("urlGetChoicesError"));
        }
        ChoicesRestfull.itemsResult[this.objHash] = items;
        this.getResultCallback(items);
    };
    ChoicesRestfull.prototype.setCustomProperties = function (item, itemValue) {
        var properties = this.getCustomProperties();
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            var val = this.getValueCore(itemValue, this.getPropertyBinding(prop.name));
            if (!this.isValueEmpty(val)) {
                item[prop.name] = val;
            }
        }
    };
    ChoicesRestfull.prototype.getPropertyBinding = function (propertyName) {
        if (this[this.getCustomPropertyName(propertyName)])
            return this[this.getCustomPropertyName(propertyName)];
        if (this[propertyName])
            return this[propertyName];
        return propertyName;
    };
    ChoicesRestfull.prototype.onError = function (status, response) {
        this.error = new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("urlRequestError")["format"](status, response));
        this.getResultCallback([]);
    };
    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
        if (!result)
            return result;
        if (!this.processedPath)
            return result;
        var pathes = this.getPathes();
        for (var i = 0; i < pathes.length; i++) {
            result = result[pathes[i]];
            if (!result)
                return null;
        }
        return result;
    };
    ChoicesRestfull.prototype.getPathes = function () {
        var pathes = [];
        if (this.processedPath.indexOf(';') > -1) {
            pathes = this.path.split(';');
        }
        else {
            pathes = this.processedPath.split(',');
        }
        if (pathes.length == 0)
            pathes.push(this.processedPath);
        return pathes;
    };
    ChoicesRestfull.prototype.getValue = function (item) {
        if (!item)
            return null;
        if (this.valueName)
            return this.getValueCore(item, this.valueName);
        if (!(item instanceof Object))
            return item;
        var len = Object.keys(item).length;
        if (len < 1)
            return null;
        return item[Object.keys(item)[0]];
    };
    ChoicesRestfull.prototype.getTitle = function (item) {
        var title = this.titleName ? this.titleName : "title";
        return this.getValueCore(item, title);
    };
    ChoicesRestfull.prototype.getValueCore = function (item, property) {
        if (!item)
            return null;
        if (property.indexOf('.') < 0)
            return item[property];
        var properties = property.split('.');
        for (var i = 0; i < properties.length; i++) {
            item = item[properties[i]];
            if (!item)
                return null;
        }
        return item;
    };
    Object.defineProperty(ChoicesRestfull.prototype, "objHash", {
        get: function () { return this.processedUrl + ";" + this.processedPath + ";" + this.valueName + ";" + this.titleName; },
        enumerable: true,
        configurable: true
    });
    return ChoicesRestfull;
}(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* Base */]));

ChoicesRestfull.itemsResult = {};
__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () { return new ChoicesRestfull(); });


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizableString; });
/**
 * The class represents the string that supports multi-languages and markdown.
 * It uses in all objects where support for multi-languages and markdown is required.
 */
var LocalizableString = (function () {
    function LocalizableString(owner, useMarkdown) {
        if (useMarkdown === void 0) { useMarkdown = false; }
        this.owner = owner;
        this.useMarkdown = useMarkdown;
        this.values = {};
        this.htmlValues = {};
        this.onGetTextCallback = null;
        this.onCreating();
    }
    Object.defineProperty(LocalizableString.prototype, "locale", {
        get: function () { return this.owner ? this.owner.getLocale() : ""; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "text", {
        get: function () {
            var res = this.pureText;
            if (this.onGetTextCallback)
                res = this.onGetTextCallback(res);
            return res;
        },
        set: function (value) {
            this.setLocaleText(this.locale, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "pureText", {
        get: function () {
            var loc = this.locale;
            if (!loc)
                loc = LocalizableString.defaultLocale;
            var res = this.values[loc];
            if (!res && loc !== LocalizableString.defaultLocale) {
                res = this.values[LocalizableString.defaultLocale];
            }
            if (!res)
                res = "";
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "hasHtml", {
        get: function () {
            return this.hasHtmlValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "html", {
        get: function () {
            if (!this.hasHtml)
                return "";
            return this.getHtmlValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "textOrHtml", {
        get: function () {
            return this.hasHtml ? this.getHtmlValue() : this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "renderedHtml", {
        get: function () {
            var res = this.textOrHtml;
            return this.onRenderedHtmlCallback ? this.onRenderedHtmlCallback(res) : res;
        },
        enumerable: true,
        configurable: true
    });
    LocalizableString.prototype.getLocaleText = function (loc) {
        if (!loc)
            loc = LocalizableString.defaultLocale;
        var res = this.values[loc];
        return res ? res : "";
    };
    LocalizableString.prototype.setLocaleText = function (loc, value) {
        if (value == this.getLocaleText(loc))
            return;
        if (!loc)
            loc = LocalizableString.defaultLocale;
        delete this.htmlValues[loc];
        if (!value) {
            if (this.values[loc])
                delete this.values[loc];
        }
        else {
            if (typeof value === 'string') {
                if (loc != LocalizableString.defaultLocale && value == this.getLocaleText(LocalizableString.defaultLocale)) {
                    this.setLocaleText(loc, null);
                }
                else {
                    this.values[loc] = value;
                    if (loc == LocalizableString.defaultLocale) {
                        this.deleteValuesEqualsToDefault(value);
                    }
                }
            }
        }
        this.onChanged();
    };
    LocalizableString.prototype.getJson = function () {
        var keys = Object.keys(this.values);
        if (keys.length == 0)
            return null;
        if (keys.length == 1 && keys[0] == LocalizableString.defaultLocale)
            return this.values[keys[0]];
        return this.values;
    };
    LocalizableString.prototype.setJson = function (value) {
        this.values = {};
        this.htmlValues = {};
        if (!value)
            return;
        if (typeof value === 'string') {
            this.setLocaleText(null, value);
        }
        else {
            for (var key in value) {
                this.setLocaleText(key, value[key]);
            }
        }
        this.onChanged();
    };
    LocalizableString.prototype.onChanged = function () { };
    LocalizableString.prototype.onCreating = function () { };
    LocalizableString.prototype.hasHtmlValue = function () {
        if (!this.owner || !this.useMarkdown)
            return false;
        var text = this.text;
        if (!text)
            return false;
        var loc = this.locale;
        if (!loc)
            loc = LocalizableString.defaultLocale;
        if (!(loc in this.htmlValues)) {
            this.htmlValues[loc] = this.owner.getMarkdownHtml(text);
        }
        return this.htmlValues[loc] ? true : false;
    };
    LocalizableString.prototype.getHtmlValue = function () {
        var loc = this.locale;
        if (!loc)
            loc = LocalizableString.defaultLocale;
        return this.htmlValues[loc];
    };
    LocalizableString.prototype.deleteValuesEqualsToDefault = function (defaultValue) {
        var keys = Object.keys(this.values);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == LocalizableString.defaultLocale)
                continue;
            if (this.values[keys[i]] == defaultValue)
                delete this.values[keys[i]];
        }
    };
    return LocalizableString;
}());

LocalizableString.defaultLocale = "default";


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PanelModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelModel; });






var QuestionRowModel = (function () {
    function QuestionRowModel(panel) {
        this.panel = panel;
        this.elements = [];
        this.visibleValue = panel.survey && panel.survey.isDesignMode;
    }
    Object.defineProperty(QuestionRowModel.prototype, "questions", {
        //TODO remove after updating react and vue
        get: function () { return this.elements; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRowModel.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (val) {
            if (val == this.visible)
                return;
            this.visibleValue = val;
            this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    QuestionRowModel.prototype.updateVisible = function () {
        this.visible = this.calcVisible();
        this.setWidth();
    };
    QuestionRowModel.prototype.addElement = function (q) {
        this.elements.push(q);
        this.updateVisible();
    };
    QuestionRowModel.prototype.onVisibleChanged = function () {
        if (this.visibilityChangedCallback)
            this.visibilityChangedCallback();
    };
    QuestionRowModel.prototype.setWidth = function () {
        var visCount = this.getVisibleCount();
        if (visCount == 0)
            return;
        var counter = 0;
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].isVisible) {
                var q = this.elements[i];
                q.renderWidth = q.width ? q.width : Math.floor(100 / visCount) + '%';
                q.rightIndent = counter < visCount - 1 ? 1 : 0;
                counter++;
            }
            else {
                this.elements[i].renderWidth = "";
            }
        }
    };
    QuestionRowModel.prototype.getVisibleCount = function () {
        var res = 0;
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].isVisible)
                res++;
        }
        return res;
    };
    QuestionRowModel.prototype.calcVisible = function () { return this.getVisibleCount() > 0; };
    return QuestionRowModel;
}());

/**
 * A base class for a Panel and Page objects.
 */
var PanelModelBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PanelModelBase, _super);
    function PanelModelBase(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.rowValues = null;
        _this.conditionRunner = null;
        _this.isQuestionsReady = false;
        _this.questionsValue = new Array();
        _this.elementsValue = _this.createNewArray("elements", function (item) { self.onAddElement(item, self.elementsValue.length); }, function (item) { self.onRemoveElement(item); });
        _this.registerFunctionOnPropertyValueChanged("elements", function () { self.markQuestionListDirty(); self.onRowsChanged(); });
        _this.id = PanelModelBase.getPanelId();
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) { return self.getRenderedTitle(text); };
        return _this;
    }
    PanelModelBase.getPanelId = function () {
        return "sp_" + PanelModelBase.panelCounter++;
    };
    PanelModelBase.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        if (this.survey && this.survey.isDesignMode)
            this.onVisibleChanged();
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].setSurveyImpl(value);
        }
    };
    PanelModelBase.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        this.markQuestionListDirty();
        this.onRowsChanged();
    };
    Object.defineProperty(PanelModelBase.prototype, "title", {
        /**
         * PanelModel or PageModel title property.
         */
        get: function () { return this.getLocalizableStringText("title"); },
        set: function (val) { this.setLocalizableStringText("title", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "locTitle", {
        get: function () { return this.getLocalizableString("title"); },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getLocale = function () { return this.survey ? this.survey.getLocale() : ""; };
    PanelModelBase.prototype.getMarkdownHtml = function (text) { return this.survey ? this.survey.getMarkdownHtml(text) : null; };
    Object.defineProperty(PanelModelBase.prototype, "parent", {
        /**
         * A parent element. It is always null for the Page object and always not null for the Panel object. Panel object may contain Questions and other Panels.
         */
        get: function () { return this.getPropertyValue("parent", null); },
        set: function (val) { this.setPropertyValue("parent", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "visibleIf", {
        /**
         * An expression that returns true or false. If it returns true the Panel becomes visible and if it returns false the Panel becomes invisible. The library runs the expression on survey start and on changing a question value. If the property is empty then visible property is used.
         * @see visible
         */
        get: function () { return this.getPropertyValue("visibleIf", ""); },
        set: function (val) { this.setPropertyValue("visibleIf", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "cssClasses", {
        get: function () {
            return this.css;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "css", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].getCss(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "id", {
        /**
         * A unique element identificator. It is generated automatically.
         */
        get: function () { return this.getPropertyValue("id"); },
        set: function (val) { this.setPropertyValue("id", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "isPanel", {
        /**
         * Returns true if the current object is Panel. Returns false if the current object is Page (a root Panel).
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "questions", {
        /**
         * Returns the list of all questions located in the Panel/Page, including in the nested Panels.
         * @see QuestionBase
         * @see elements
         */
        get: function () {
            if (!this.isQuestionsReady) {
                this.questionsValue = [];
                for (var i = 0; i < this.elements.length; i++) {
                    var el = this.elements[i];
                    if (el.isPanel) {
                        var qs = el.questions;
                        for (var j = 0; j < qs.length; j++) {
                            this.questionsValue.push(qs[j]);
                        }
                    }
                    else {
                        this.questionsValue.push(el);
                    }
                }
                this.isQuestionsReady = true;
            }
            return this.questionsValue;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getQuestionByName = function (name) {
        var questions = this.questions;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].name == name)
                return questions[i];
        }
        return null;
    };
    PanelModelBase.prototype.markQuestionListDirty = function () {
        this.isQuestionsReady = false;
        if (this.parent)
            this.parent.markQuestionListDirty();
    };
    Object.defineProperty(PanelModelBase.prototype, "elements", {
        /**
         * Returns the list of the elements in the object, Panel/Page. Elements can be questions or panels. The function doesn't return elements in the nested Panels.
         */
        get: function () { return this.elementsValue; },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getElementsInDesign = function (includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        return this.elements;
    };
    /**
     * Returns true if the current element belongs to the Panel/Page. It looks in nestede Panels as well.
     * @param element
     * @see PanelModel
     */
    PanelModelBase.prototype.containsElement = function (element) {
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements[i];
            if (el == element)
                return true;
            if (el.isPanel) {
                if (el.containsElement(element))
                    return true;
            }
        }
        return false;
    };
    /**
     * Returns true, if there is an error on this Page or inside the current Panel
     * @param fireCallback set it to true, to show errors in UI
     * @param focuseOnFirstError set it to true to focuse on the first question that doesn't pass the validation
     */
    PanelModelBase.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
        if (fireCallback === void 0) { fireCallback = true; }
        if (focuseOnFirstError === void 0) { focuseOnFirstError = false; }
        var result = false;
        var firstErrorQuestion = null;
        var visibleQuestions = [];
        this.addQuestionsToList(visibleQuestions, true);
        for (var i = 0; i < visibleQuestions.length; i++) {
            var question = visibleQuestions[i];
            if (question.isReadOnly)
                continue;
            if (question.hasErrors(fireCallback)) {
                if (focuseOnFirstError && firstErrorQuestion == null) {
                    firstErrorQuestion = question;
                }
                result = true;
            }
        }
        if (firstErrorQuestion)
            firstErrorQuestion.focus(true);
        return result;
    };
    /**
     * Fill list array with the questions.
     * @param list
     * @param visibleOnly set it to true to get visible questions only
     */
    PanelModelBase.prototype.addQuestionsToList = function (list, visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        this.addElementsToList(list, visibleOnly, includingDesignTime, false);
    };
    /**
     * Fill list array with the panels.
     * @param list
     */
    PanelModelBase.prototype.addPanelsIntoList = function (list, visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        this.addElementsToList(list, visibleOnly, includingDesignTime, true);
    };
    PanelModelBase.prototype.addElementsToList = function (list, visibleOnly, includingDesignTime, isPanel) {
        if (visibleOnly && !this.visible)
            return;
        this.addElementsToListCore(list, this.elements, visibleOnly, includingDesignTime, isPanel);
    };
    PanelModelBase.prototype.addElementsToListCore = function (list, elements, visibleOnly, includingDesignTime, isPanel) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (visibleOnly && !el.visible)
                continue;
            if (isPanel && el.isPanel || !isPanel && !el.isPanel) {
                list.push(el);
            }
            if (el.isPanel) {
                el.addElementsToListCore(list, el.elements, visibleOnly, includingDesignTime, isPanel);
            }
            else {
                if (includingDesignTime) {
                    this.addElementsToListCore(list, el.getElementsInDesign(false), visibleOnly, includingDesignTime, isPanel);
                }
            }
        }
    };
    Object.defineProperty(PanelModelBase.prototype, "rows", {
        get: function () {
            if (!this.rowValues) {
                this.rowValues = this.buildRows();
            }
            return this.rowValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "isActive", {
        /**
         * Returns true if the current object is Page and it is the current page.
         */
        get: function () { return (!this.survey) || this.survey.currentPage == this.root; },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.updateCustomWidgets = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].updateCustomWidgets();
        }
    };
    Object.defineProperty(PanelModelBase.prototype, "root", {
        get: function () {
            var res = this;
            while (res.parent)
                res = res.parent;
            return res;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.createRow = function () { return new QuestionRowModel(this); };
    PanelModelBase.prototype.onSurveyLoad = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onSurveyLoad();
        }
        if (this.rowsChangedCallback)
            this.rowsChangedCallback();
    };
    PanelModelBase.prototype.onRowsChanged = function () {
        this.rowValues = null;
        if (this.rowsChangedCallback && !this.isLoadingFromJson)
            this.rowsChangedCallback();
    };
    Object.defineProperty(PanelModelBase.prototype, "isDesignMode", {
        get: function () { return this.survey && this.survey.isDesignMode; },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.onAddElement = function (element, index) {
        element.setSurveyImpl(this.surveyImpl);
        if (element.isPanel) {
            var p = element;
            p.parent = this;
            if (this.survey) {
                this.survey.panelAdded(p, index, this, this.root);
            }
        }
        else {
            if (this.survey) {
                var q = element;
                this.survey.questionAdded(q, index, this, this.root);
            }
        }
        var self = this;
        element.registerFunctionOnPropertiesValueChanged(["visible", "isVisible"], function () { self.onElementVisibilityChanged(element); }, this.id);
        element.registerFunctionOnPropertyValueChanged("startWithNewLine", function () { self.onElementStartWithNewLineChanged(element); }, this.id);
    };
    PanelModelBase.prototype.onRemoveElement = function (element) {
        element.unRegisterFunctionOnPropertiesValueChanged(["visible", "isVisible", "startWithNewLine"], this.id);
        if (!element.isPanel) {
            if (this.survey)
                this.survey.questionRemoved(element);
        }
        else {
            if (this.survey)
                this.survey.panelRemoved(element);
        }
    };
    PanelModelBase.prototype.onElementVisibilityChanged = function (element) {
        if (this.rowValues) {
            this.updateRowsVisibility(element);
        }
        if (this.parent) {
            this.parent.onElementVisibilityChanged(this);
        }
    };
    PanelModelBase.prototype.onElementStartWithNewLineChanged = function (element) {
        this.onRowsChanged();
    };
    PanelModelBase.prototype.updateRowsVisibility = function (element) {
        for (var i = 0; i < this.rowValues.length; i++) {
            var row = this.rowValues[i];
            if (row.elements.indexOf(element) > -1) {
                row.updateVisible();
                break;
            }
        }
    };
    PanelModelBase.prototype.buildRows = function () {
        var result = new Array();
        var lastRowVisibleIndex = -1;
        var self = this;
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements[i];
            var isNewRow = i == 0 || el.startWithNewLine;
            var row = isNewRow ? this.createRow() : result[result.length - 1];
            if (isNewRow)
                result.push(row);
            row.addElement(el);
        }
        for (var i = 0; i < result.length; i++) {
            result[i].updateVisible();
        }
        return result;
    };
    Object.defineProperty(PanelModelBase.prototype, "processedTitle", {
        /**
         * Returns rendered title text or html.
         */
        get: function () {
            return this.getRenderedTitle(this.locTitle.textOrHtml);
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getRenderedTitle = function (str) {
        if (!str && this.isPanel && this.isDesignMode)
            return "[" + this.name + "]";
        return this.textProcessor != null ? this.textProcessor.processText(str, true) : str;
    };
    Object.defineProperty(PanelModelBase.prototype, "visible", {
        /**
         * Use it to get/set the object visibility.
         * @see visibleIf
         */
        get: function () { return this.getPropertyValue("visible", true); },
        set: function (value) {
            if (value === this.visible)
                return;
            this.setPropertyValue("visible", value);
            this.setPropertyValue("isVisible", this.isVisible);
            if (!this.isLoadingFromJson)
                this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.onVisibleChanged = function () {
        this.setPropertyValue("isVisible", this.isVisible);
    };
    Object.defineProperty(PanelModelBase.prototype, "isVisible", {
        /**
         * Returns true if object is visible or survey is in design mode right now.
         */
        get: function () { return (this.survey && this.survey.isDesignMode) || this.getIsPageVisible(null); },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getIsPageVisible = function (exceptionQuestion) {
        if (!this.visible)
            return false;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i] == exceptionQuestion)
                continue;
            if (this.questions[i].visible)
                return true;
        }
        return false;
    };
    /**
     * Add an elememnt into Panel or Page.
     * @param element
     * @param index element index in the elements array
     */
    PanelModelBase.prototype.addElement = function (element, index) {
        if (index === void 0) { index = -1; }
        if (element == null)
            return;
        if (index < 0 || index >= this.elements.length) {
            this.elements.push(element);
        }
        else {
            this.elements.splice(index, 0, element);
        }
    };
    /**
     * Add a question into Panel or Page.
     * @param question
     * @param index element index in the elements array
     */
    PanelModelBase.prototype.addQuestion = function (question, index) {
        if (index === void 0) { index = -1; }
        this.addElement(question, index);
    };
    /**
     * Add a panel into Panel or Page.
     * @param panel
     * @param index element index in the elements array
     */
    PanelModelBase.prototype.addPanel = function (panel, index) {
        if (index === void 0) { index = -1; }
        this.addElement(panel, index);
    };
    /**
     * Creates a new question and adds it into the end of the elements list.
     * @param questionType the possible values are: "text", "checkbox", "dropdown", "matrix", "html", "matrixdynamic", "matrixdropdown" and so on.
     * @param name a question name
     */
    PanelModelBase.prototype.addNewQuestion = function (questionType, name) {
        if (name === void 0) { name = null; }
        var question = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
        this.addQuestion(question);
        return question;
    };
    /**
     * Creates a new panel and adds it into the end of the elements list.
     * @param name a panel name
     */
    PanelModelBase.prototype.addNewPanel = function (name) {
        if (name === void 0) { name = null; }
        var panel = this.createNewPanel(name);
        this.addPanel(panel);
        return panel;
    };
    PanelModelBase.prototype.createNewPanel = function (name) {
        return new PanelModel(name);
    };
    /**
     * Remove an element (Panel or Question) from the elements list.
     * @param element
     * @see elements
     */
    PanelModelBase.prototype.removeElement = function (element) {
        var index = this.elements.indexOf(element);
        if (index < 0) {
            for (var i = 0; i < this.elements.length; i++) {
                var el = this.elements[i];
                if (el.isPanel && el.removeElement(element))
                    return true;
            }
            return false;
        }
        this.elements.splice(index, 1);
        return true;
    };
    /**
     * Remove question  from the elements list.
     * @param question
     * @see elements
     * @see removeElement
     */
    PanelModelBase.prototype.removeQuestion = function (question) {
        this.removeElement(question);
    };
    PanelModelBase.prototype.runCondition = function (values) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].runCondition(values);
        }
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    PanelModelBase.prototype.onLocaleChanged = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onLocaleChanged();
        }
        this.locTitle.onChanged();
    };
    PanelModelBase.prototype.onAnyValueChanged = function (name) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onAnyValueChanged(name);
        }
        var titleValue = this.locTitle.text;
        if (!titleValue)
            return;
        if (titleValue.toLocaleLowerCase().indexOf('{' + name.toLowerCase()) > -1) {
            this.locTitle.onChanged();
        }
    };
    return PanelModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* SurveyElement */]));

PanelModelBase.panelCounter = 100;
/**
 * A container element, similar to the Page objects. However, unlike the Page, Panel can't be a root.
 * It may contain questions and other panels.
 */
var PanelModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PanelModel, _super);
    function PanelModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    PanelModel.prototype.getType = function () { return "panel"; };
    Object.defineProperty(PanelModel.prototype, "isPanel", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "width", {
        /**
         * The Panel width.
         */
        get: function () { return this.getPropertyValue("width"); },
        set: function (val) { this.setPropertyValue("width", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "innerIndent", {
        /**
         * The inner indent. Set this property to increase the panel content margin.
         */
        get: function () { return this.getPropertyValue("innerIndent", 0); },
        set: function (val) { this.setPropertyValue("innerIndent", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "renderWidth", {
        get: function () { return this.getPropertyValue("renderWidth"); },
        set: function (val) { this.setPropertyValue("renderWidth", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "startWithNewLine", {
        /**
         * The Panel renders on the new line if the property is true. If the property is false, the panel tries to render on the same line/row with a previous question/panel.
         */
        get: function () { return this.getPropertyValue("startWithNewLine", true); },
        set: function (value) { this.setPropertyValue("startWithNewLine", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "rightIndent", {
        /**
         * The right indent of the Panel.
         */
        get: function () { return this.getPropertyValue("rightIndent", 0); },
        set: function (val) { this.setPropertyValue("rightIndent", val); },
        enumerable: true,
        configurable: true
    });
    PanelModel.prototype.onVisibleChanged = function () {
        _super.prototype.onVisibleChanged.call(this);
        this.setPropertyValue("isVisible", this.isVisible);
        if (this.survey != null) {
            this.survey.panelVisibilityChanged(this, this.visible);
        }
    };
    return PanelModel;
}(PanelModelBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("panel", ["name", { name: "elements", alternativeName: "questions", baseClassName: "question", visible: false },
    { name: "startWithNewLine:boolean", default: true }, { name: "visible:boolean", default: true }, "visibleIf:expression",
    { name: "title:text", serializationProperty: "locTitle" }, { name: "innerIndent:number", default: 0, choices: [0, 1, 2, 3] }], function () { return new PanelModel(); });


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textPreProcessor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_baseselect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__choicesRestfull__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__questionfactory__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDropdownColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDropdownCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatrixDropdownRowModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QuestionMatrixDropdownModelBase; });












var MatrixDropdownColumn = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownColumn, _super);
    function MatrixDropdownColumn(name, title) {
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.colOwner = null;
        _this.validators = new Array();
        _this.name = name;
        _this.choicesValue = _this.createItemValues("choices");
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) { return self.getFullTitle(text); };
        _this.createLocalizableString("optionsCaption", _this);
        _this.createLocalizableString("placeHolder", _this);
        _this.choicesByUrl = new __WEBPACK_IMPORTED_MODULE_10__choicesRestfull__["a" /* ChoicesRestfull */]();
        if (title)
            _this.title = title;
        return _this;
    }
    MatrixDropdownColumn.prototype.getType = function () { return "matrixdropdowncolumn"; };
    Object.defineProperty(MatrixDropdownColumn.prototype, "name", {
        get: function () { return this.getPropertyValue("name"); },
        set: function (val) { this.setPropertyValue("name", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "choicesOrder", {
        get: function () { return this.getPropertyValue("choicesOrder", "none"); },
        set: function (val) {
            val = val.toLocaleLowerCase();
            this.setPropertyValue("choicesOrder", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "inputType", {
        get: function () { return this.getPropertyValue("inputType", "text"); },
        set: function (val) {
            val = val.toLocaleLowerCase();
            this.setPropertyValue("inputType", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "cellType", {
        get: function () { return this.getPropertyValue("cellType", "default"); },
        set: function (val) {
            val = val.toLocaleLowerCase();
            this.setPropertyValue("cellType", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
        get: function () { return this.getLocalizableStringText("title", this.name); },
        set: function (val) { this.setLocalizableStringText("title", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "locTitle", {
        get: function () { return this.getLocalizableString("title"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "fullTitle", {
        get: function () { return this.getFullTitle(this.locTitle.textOrHtml); },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownColumn.prototype.getFullTitle = function (str) {
        if (!str)
            str = this.name;
        if (this.isRequired) {
            var requireText = this.colOwner ? this.colOwner.getRequiredText() : "";
            if (requireText)
                requireText += " ";
            str = requireText + str;
        }
        return str;
    };
    Object.defineProperty(MatrixDropdownColumn.prototype, "optionsCaption", {
        get: function () { return this.getLocalizableStringText("optionsCaption"); },
        set: function (val) { this.setLocalizableStringText("optionsCaption", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "locOptionsCaption", {
        get: function () { return this.getLocalizableString("optionsCaption"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "placeHolder", {
        get: function () { return this.getLocalizableStringText("placeHolder"); },
        set: function (val) { this.setLocalizableStringText("placeHolder", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "locPlaceHolder", {
        get: function () { return this.getLocalizableString("placeHolder"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "choices", {
        get: function () { return this.choicesValue; },
        set: function (newValue) { this.setPropertyValue("choices", newValue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
        get: function () { return this.getPropertyValue("colCount", -1); },
        set: function (val) {
            if (val < -1 || val > 4)
                return;
            this.setPropertyValue("colCount", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "isRequired", {
        get: function () { return this.getPropertyValue("isRequired", false); },
        set: function (val) { this.setPropertyValue("isRequired", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "hasOther", {
        get: function () { return this.getPropertyValue("hasOther", false); },
        set: function (val) { this.setPropertyValue("hasOther", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "minWidth", {
        get: function () { return this.getPropertyValue("minWidth", ""); },
        set: function (val) { this.setPropertyValue("minWidth", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "visibleIf", {
        get: function () { return this.getPropertyValue("visibleIf", ""); },
        set: function (val) { this.setPropertyValue("visibleIf", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "booleanDefaultValue", {
        get: function () { return this.getPropertyValue("booleanDefaultValue", "indeterminate"); },
        set: function (val) {
            this.setPropertyValue("booleanDefaultValue", val);
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownColumn.prototype.getLocale = function () { return this.colOwner ? this.colOwner.getLocale() : ""; };
    MatrixDropdownColumn.prototype.getMarkdownHtml = function (text) { return this.colOwner ? this.colOwner.getMarkdownHtml(text) : null; };
    MatrixDropdownColumn.prototype.propertyValueChanged = function (name, oldValue, newValue) {
        _super.prototype.propertyValueChanged.call(this, name, oldValue, newValue);
        if (this.colOwner != null && !this.isLoadingFromJson) {
            this.colOwner.onColumnPropertiesChanged(this);
        }
    };
    return MatrixDropdownColumn;
}(__WEBPACK_IMPORTED_MODULE_4__base__["c" /* Base */]));

var MatrixDropdownCell = (function () {
    function MatrixDropdownCell(column, row, data) {
        var _this = this;
        this.column = column;
        this.row = row;
        this.data = data;
        this.questionValue = data.createQuestion(this.row, this.column);
        this.questionValue.validateValueCallback = function () { return data.validateCell(row, column.name, row.value); };
        __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* CustomPropertiesCollection */].getProperties(column.getType()).forEach(function (property) {
            var propertyName = property.name;
            if (column[propertyName] !== undefined && _this.questionValue.getPropertyValue(propertyName, null) == null) {
                _this.questionValue[propertyName] = column[propertyName];
            }
        });
        Object.keys(column).forEach(function (key) {
        });
        this.questionValue.updateCustomWidget();
    }
    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
        get: function () { return this.questionValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
        get: function () { return this.question.value; },
        set: function (value) {
            this.question.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownCell.prototype.runCondition = function (values) {
        this.question.runCondition(values);
    };
    return MatrixDropdownCell;
}());

var MatrixDropdownRowModelBase = (function () {
    function MatrixDropdownRowModelBase(data, value) {
        this.rowValues = {};
        this.isSettingValue = false;
        this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_5__textPreProcessor__["a" /* TextPreProcessor */]();
        this.cells = [];
        this.data = data;
        this.value = value;
        this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_5__textPreProcessor__["a" /* TextPreProcessor */]();
        var self = this;
        this.textPreProcessor.onHasValue = function (name) { return self.hasProcessedTextValue(name); };
        this.textPreProcessor.onProcess = function (name, returnDisplayValue) { return self.getProcessedTextValue(name, returnDisplayValue); };
        for (var i = 0; i < this.data.columns.length; i++) {
            if (this.rowValues[this.data.columns[i].name] === undefined) {
                this.rowValues[this.data.columns[i].name] = null;
            }
        }
        this.idValue = MatrixDropdownRowModelBase.getId();
    }
    MatrixDropdownRowModelBase.getId = function () { return "srow_" + MatrixDropdownRowModelBase.idCounter++; };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
        get: function () { return this.rowValues; },
        set: function (value) {
            this.isSettingValue = true;
            this.rowValues = {};
            if (value != null) {
                for (var key in value) {
                    this.rowValues[key] = value[key];
                }
            }
            for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
            }
            this.isSettingValue = false;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.getAllValues = function () { return this.value; };
    MatrixDropdownRowModelBase.prototype.onAnyValueChanged = function (name) {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].question.onAnyValueChanged(name);
        }
    };
    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
        return this.rowValues[name];
    };
    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
        if (this.isSettingValue)
            return;
        if (newValue === "")
            newValue = null;
        if (newValue != null) {
            this.rowValues[name] = newValue;
        }
        else {
            delete this.rowValues[name];
        }
        this.data.onRowChanged(this, name, this.value);
        this.onAnyValueChanged("row");
    };
    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
        var result = this.getValue(name + __WEBPACK_IMPORTED_MODULE_4__base__["c" /* Base */].commentPrefix);
        return result ? result : "";
    };
    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
        this.setValue(name + __WEBPACK_IMPORTED_MODULE_4__base__["c" /* Base */].commentPrefix, newValue);
    };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
        get: function () {
            var val = this.value;
            if (__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].isValueEmpty(val))
                return true;
            for (var key in val) {
                if (val[key] !== undefined && val[key] !== null)
                    return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.getQuestionByColumn = function (column) {
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].column == column)
                return this.cells[i].question;
        }
        return null;
    };
    MatrixDropdownRowModelBase.prototype.getLocale = function () { return this.data ? this.data.getLocale() : ""; };
    MatrixDropdownRowModelBase.prototype.getMarkdownHtml = function (text) { return this.data ? this.data.getMarkdownHtml(text) : null; };
    MatrixDropdownRowModelBase.prototype.onLocaleChanged = function () {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].question.onLocaleChanged();
        }
    };
    MatrixDropdownRowModelBase.prototype.runCondition = function (values) {
        values["row"] = this.value;
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].runCondition(values);
        }
    };
    MatrixDropdownRowModelBase.prototype.buildCells = function () {
        var columns = this.data.columns;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            this.cells.push(this.createCell(column));
        }
    };
    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
        return new MatrixDropdownCell(column, this, this.data);
    };
    MatrixDropdownRowModelBase.prototype.geSurveyData = function () { return this; };
    MatrixDropdownRowModelBase.prototype.getSurvey = function () { return this.data ? this.data.getSurvey() : null; };
    //ITextProcessor
    MatrixDropdownRowModelBase.prototype.hasProcessedTextValue = function (name) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        return firstName == "row";
    };
    MatrixDropdownRowModelBase.prototype.getProcessedTextValue = function (name, returnDisplayValue) {
        //name should start with the row
        var values = { row: this.value };
        return new __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, values);
    };
    MatrixDropdownRowModelBase.prototype.getTextProcessor = function () { return this; };
    MatrixDropdownRowModelBase.prototype.processText = function (text, returnDisplayValue) {
        text = this.textPreProcessor.process(text, returnDisplayValue);
        return this.getSurvey().processText(text, returnDisplayValue);
    };
    MatrixDropdownRowModelBase.prototype.processTextEx = function (text) {
        text = this.processText(text, true);
        var hasAllValuesOnLastRun = this.textPreProcessor.hasAllValuesOnLastRun;
        var res = this.getSurvey().processTextEx(text);
        res.hasAllValuesOnLastRun = res.hasAllValuesOnLastRun && hasAllValuesOnLastRun;
        return res;
    };
    return MatrixDropdownRowModelBase;
}());

MatrixDropdownRowModelBase.idCounter = 1;
/**
 * A base class for matrix dropdown and matrix dynamic questions.
 */
var QuestionMatrixDropdownModelBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModelBase, _super);
    function QuestionMatrixDropdownModelBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isRowChanging = false;
        _this.generatedVisibleRows = null;
        var self = _this;
        _this.columnsValue = _this.createNewArray("columns", function (item) { item.colOwner = self; });
        _this.choicesValue = _this.createItemValues("choices");
        _this.createLocalizableString("optionsCaption", _this);
        _this.registerFunctionOnPropertyValueChanged("columns", function () { self.generatedVisibleRows = null; self.fireCallback(self.columnsChangedCallback); });
        return _this;
    }
    QuestionMatrixDropdownModelBase.addDefaultColumns = function (matrix) {
        var colNames = __WEBPACK_IMPORTED_MODULE_11__questionfactory__["a" /* QuestionFactory */].DefaultColums;
        for (var i = 0; i < colNames.length; i++)
            matrix.addColumn(colNames[i]);
    };
    QuestionMatrixDropdownModelBase.prototype.getType = function () {
        return "matrixdropdownbase";
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
        /**
         * The list of matrix columns.
         */
        get: function () { return this.columnsValue; },
        set: function (value) {
            this.setPropertyValue("columns", value);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.onMatrixRowCreated = function (row) {
        if (!this.survey)
            return;
        var options = { rowValue: row.value, row: row, column: null, columnName: null, cell: null, cellQuestion: null, value: null };
        for (var i = 0; i < this.columns.length; i++) {
            options.column = this.columns[i];
            options.columnName = options.column.name;
            var cell = row.cells[i];
            options.cell = cell;
            options.cellQuestion = cell.question;
            options.value = cell.value;
            this.survey.matrixCellCreated(this, options);
        }
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
        /**
         * Use this property to change the default cell type.
         */
        get: function () { return this.getPropertyValue("cellType", "dropdown"); },
        set: function (val) {
            val = val.toLowerCase();
            if (this.cellType == val)
                return;
            this.setPropertyValue("cellType", val);
            this.fireCallback(this.updateCellsCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
        /**
         * The default column count for radiogroup and checkbox  cell types.
         */
        get: function () { return this.getPropertyValue("columnColCount", 0); },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.setPropertyValue("columnColCount", value);
            this.fireCallback(this.updateCellsCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnMinWidth", {
        /**
         * Use this property to set the mimimum column width.
         */
        get: function () { return this.getPropertyValue("columnMinWidth", ""); },
        set: function (val) { this.setPropertyValue("columnMinWidth", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "horizontalScroll", {
        /**
         * Set this property to true to show the horizontal scroll.
         */
        get: function () { return this.getPropertyValue("horizontalScroll", false); },
        set: function (val) { this.setPropertyValue("horizontalScroll", val); },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.getRequiredText = function () { return this.survey ? this.survey.requiredText : ""; };
    QuestionMatrixDropdownModelBase.prototype.onColumnPropertiesChanged = function (column) {
        if (!this.generatedVisibleRows)
            return;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var row = this.generatedVisibleRows[i];
            for (var j = 0; j < row.cells.length; j++) {
                if (row.cells[j].column !== column)
                    continue;
                this.setQuestionProperties(row.cells[j].question, column, row);
                break;
            }
        }
    };
    QuestionMatrixDropdownModelBase.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        this.runCellsCondition(values);
    };
    QuestionMatrixDropdownModelBase.prototype.runCellsCondition = function (values) {
        if (!this.generatedVisibleRows || !this.hasVisibleIfColumn)
            return;
        var newValues = {};
        if (values && values instanceof Object) {
            newValues = JSON.parse(JSON.stringify(values));
        }
        newValues["row"] = {};
        var rows = this.generatedVisibleRows;
        for (var i = 0; i < rows.length; i++) {
            rows[i].runCondition(newValues);
        }
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "hasVisibleIfColumn", {
        get: function () {
            for (var i = 0; i < this.columns.length; i++) {
                if (this.columns[i].visibleIf)
                    return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i].onLocaleChanged();
        }
        var rows = this.visibleRows;
        if (!rows)
            return;
        for (var i = 0; i < rows.length; i++) {
            rows[i].onLocaleChanged();
        }
        this.fireCallback(this.updateCellsCallback);
    };
    /**
     * Returns the column by it's name. Retuns null if a column with this name doesn't exist.
     * @param column
     */
    QuestionMatrixDropdownModelBase.prototype.getColumnName = function (columnName) {
        for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].name == columnName)
                return this.columns[i];
        }
        return null;
    };
    /**
     * Returns the column width.
     * @param column
     */
    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
        return column.minWidth ? column.minWidth : this.columnMinWidth;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
        /**
         * The default choices for dropdown, checkbox and radiogroup cell types.
         */
        get: function () { return this.choicesValue; },
        set: function (val) {
            this.setPropertyValue("choices", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
        /**
         * The default options caption for dropdown cell type.
         */
        get: function () { return this.getLocalizableStringText("optionsCaption", __WEBPACK_IMPORTED_MODULE_8__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption")); },
        set: function (val) { this.setLocalizableStringText("optionsCaption", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "locOptionsCaption", {
        get: function () { return this.getLocalizableString("optionsCaption"); },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
        if (title === void 0) { title = null; }
        var column = new MatrixDropdownColumn(name, title);
        this.columnsValue.push(column);
        return column;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
        /**
         * Returns the rows model objects that used during rendering.
         */
        get: function () {
            if (this.isLoadingFromJson)
                return;
            if (!this.generatedVisibleRows) {
                this.generatedVisibleRows = this.generateRows();
                if (this.data) {
                    this.runCellsCondition(this.data.getAllValues());
                }
            }
            return this.generatedVisibleRows;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.generatedVisibleRows = null;
    };
    /**
     * Returns the row value. If the row value is empty, the object is empty: {}.
     * @param rowIndex row index from 0 to visible row count - 1.
     */
    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (rowIndex) {
        if (rowIndex < 0)
            return null;
        var visRows = this.visibleRows;
        if (rowIndex >= visRows.length)
            return null;
        var newValue = this.createNewValue(this.value);
        return this.getRowValueCore(visRows[rowIndex], newValue);
    };
    /**
     * Set the row value.
     * @param rowIndex row index from 0 to visible row count - 1.
     * @param rowValue an object {"column name": columnValue,... }
     */
    QuestionMatrixDropdownModelBase.prototype.setRowValue = function (rowIndex, rowValue) {
        if (rowIndex < 0)
            return null;
        var visRows = this.visibleRows;
        if (rowIndex >= visRows.length)
            return null;
        this.onRowChanged(visRows[rowIndex], "", rowValue);
        this.onValueChanged();
    };
    QuestionMatrixDropdownModelBase.prototype.generateRows = function () { return null; };
    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) { return !curValue ? {} : curValue; };
    QuestionMatrixDropdownModelBase.prototype.getRowValueCore = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
        if (!result && create) {
            result = {};
            questionValue[row.rowName] = result;
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.getRowDisplayValue = function (row, rowValue) {
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (rowValue[column.name]) {
                rowValue[column.name] = row.cells[i].question.displayValue;
            }
        }
        return rowValue;
    };
    QuestionMatrixDropdownModelBase.prototype.onBeforeValueChanged = function (val) {
    };
    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
        if (this.isRowChanging)
            return;
        this.onBeforeValueChanged(this.value);
        if (!(this.generatedVisibleRows) || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var row = this.generatedVisibleRows[i];
            this.generatedVisibleRows[i].value = this.getRowValueCore(row, val);
        }
        this.isRowChanging = false;
    };
    QuestionMatrixDropdownModelBase.prototype.supportGoNextPageAutomatic = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            if (!cells)
                continue;
            for (var colIndex = 0; colIndex < cells.length; colIndex++) {
                var question = cells[colIndex].question;
                if (question && (!question.supportGoNextPageAutomatic() || !question.value))
                    return false;
            }
        }
        return true;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var errosInColumns = this.hasErrorInColumns(fireCallback);
        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
    };
    QuestionMatrixDropdownModelBase.prototype.getAllErrors = function () {
        var result = _super.prototype.getAllErrors.call(this);
        var rows = this.generatedVisibleRows;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            for (var j = 0; j < row.cells.length; j++) {
                var errors = row.cells[j].question.getAllErrors();
                if (errors && errors.length > 0) {
                    result = result.concat(errors);
                }
            }
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
        if (!this.generatedVisibleRows)
            return false;
        var res = false;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            if (!cells)
                continue;
            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
                if (!cells[colIndex])
                    continue;
                var question = cells[colIndex].question;
                res = question && question.visible && question.hasErrors(fireCallback) || res;
            }
        }
        return res;
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstInputElementId = function () {
        var question = this.getFirstCellQuestion(false);
        return question ? question.inputId : _super.prototype.getFirstInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstErrorInputElementId = function () {
        var question = this.getFirstCellQuestion(true);
        return question ? question.inputId : _super.prototype.getFirstErrorInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstCellQuestion = function (onError) {
        if (!this.generatedVisibleRows)
            return null;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
                if (!onError)
                    return cells[colIndex].question;
                if (cells[colIndex].question.currentErrorCount > 0)
                    return cells[colIndex].question;
            }
        }
        return null;
    };
    //IMatrixDropdownData
    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
        return this.createQuestionCore(row, column);
    };
    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
        var cellType = column.cellType == "default" ? this.cellType : column.cellType;
        var question = this.createCellQuestion(cellType, column.name);
        question.setSurveyImpl(row);
        this.setQuestionProperties(question, column, row);
        return question;
    };
    QuestionMatrixDropdownModelBase.prototype.getColumnChoices = function (column) {
        return column.choices && column.choices.length > 0 ? column.choices : this.choices;
    };
    QuestionMatrixDropdownModelBase.prototype.getColumnOptionsCaption = function (column) {
        return column.optionsCaption ? column.optionsCaption : this.optionsCaption;
    };
    QuestionMatrixDropdownModelBase.prototype.setQuestionProperties = function (question, column, row) {
        if (!question)
            return;
        question.name = column.name;
        question.isRequired = column.isRequired;
        question.hasOther = column.hasOther;
        question.readOnly = this.readOnly;
        question.validators = column.validators;
        question.visibleIf = column.visibleIf;
        if (column.hasOther) {
            if (question instanceof __WEBPACK_IMPORTED_MODULE_9__question_baseselect__["b" /* QuestionSelectBase */]) {
                question.storeOthersAsComment = false;
            }
        }
        var t = question.getType();
        if (t == "checkbox" || t == "radiogroup") {
            question.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
            this.setSelectBaseProperties(question, column, row);
        }
        if (t == "dropdown") {
            question.optionsCaption = this.getColumnOptionsCaption(column);
            this.setSelectBaseProperties(question, column, row);
        }
        if (t == "text") {
            question.inputType = column.inputType;
            question.placeHolder = column.placeHolder;
        }
        if (t == "comment") {
            question.placeHolder = column.placeHolder;
        }
        if (t == "boolean") {
            question.defaultValue = column.booleanDefaultValue;
            question.showTitle = true;
        }
    };
    QuestionMatrixDropdownModelBase.prototype.setSelectBaseProperties = function (question, column, row) {
        question.choicesOrder = column.choicesOrder;
        question.choices = this.getColumnChoices(column);
        question.choicesByUrl.setData(column.choicesByUrl);
        if (!question.choicesByUrl.isEmpty) {
            question.choicesByUrl.run(row);
        }
    };
    QuestionMatrixDropdownModelBase.prototype.createCellQuestion = function (questionType, name) {
        return __WEBPACK_IMPORTED_MODULE_11__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
    };
    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
        delete newValue[row.rowName];
        return Object.keys(newValue).length == 0 ? null : newValue;
    };
    QuestionMatrixDropdownModelBase.prototype.onAnyValueChanged = function (name) {
        if (this.isLoadingFromJson)
            return;
        var rows = this.visibleRows;
        for (var i = 0; i < rows.length; i++) {
            rows[i].onAnyValueChanged(name);
        }
    };
    QuestionMatrixDropdownModelBase.prototype.onCellValueChanged = function (row, columnName, rowValue) {
        if (!this.survey)
            return;
        var self = this;
        var getQuestion = function (colName) {
            for (var i = 0; self.columns.length; i++) {
                if (self.columns[i].name == colName) {
                    return row.cells[i].question;
                }
            }
            return null;
        };
        var options = { row: row, columnName: columnName, rowValue: rowValue, value: rowValue[columnName], getCellQuestion: getQuestion };
        this.survey.matrixCellValueChanged(this, options);
    };
    QuestionMatrixDropdownModelBase.prototype.validateCell = function (row, columnName, rowValue) {
        if (!this.survey)
            return;
        var self = this;
        var options = { row: row, columnName: columnName, rowValue: rowValue, value: rowValue[columnName] };
        return this.survey.matrixCellValidate(this, options);
    };
    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, columnName, newRowValue) {
        var oldValue = this.createNewValue(this.value);
        if (this.isMatrixValueEmpty(oldValue))
            oldValue = null;
        var newValue = this.createNewValue(this.value);
        var rowValue = this.getRowValueCore(row, newValue, true);
        if (!rowValue)
            rowValue = {};
        for (var key in rowValue)
            delete rowValue[key];
        if (newRowValue) {
            newRowValue = JSON.parse(JSON.stringify(newRowValue));
            for (var key in newRowValue) {
                if (!this.isValueEmpty(newRowValue[key])) {
                    rowValue[key] = newRowValue[key];
                }
            }
        }
        if (Object.keys(rowValue).length == 0) {
            newValue = this.deleteRowValue(newValue, row);
        }
        if (this.isTwoValueEquals(oldValue, newValue))
            return;
        this.isRowChanging = true;
        this.setNewValue(newValue);
        this.isRowChanging = false;
        if (columnName) {
            this.onCellValueChanged(row, columnName, rowValue);
        }
    };
    QuestionMatrixDropdownModelBase.prototype.isMatrixValueEmpty = function (val) {
        if (!val)
            return;
        if (Array.isArray(val)) {
            for (var i = 0; i < val.length; i++) {
                if (Object.keys(val[i]).length > 0)
                    return false;
            }
            return true;
        }
        return Object.keys(val).length == 0;
    };
    QuestionMatrixDropdownModelBase.prototype.getSurvey = function () { return this.survey; };
    return QuestionMatrixDropdownModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdowncolumn", ["name", { name: "title", serializationProperty: "locTitle" },
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_7__itemvalue__["a" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "optionsCaption", serializationProperty: "locOptionsCaption" }, { name: "cellType", default: "default", choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment", "boolean"] },
    { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] }, "isRequired:boolean", "hasOther:boolean", "minWidth", { name: "placeHolder", serializationProperty: "locPlaceHolder" },
    { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] },
    { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function (obj) { return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl; }, onSetValue: function (obj, value) { obj.choicesByUrl.setData(value); } },
    { name: "booleanDefaultValue", default: "indeterminate", choices: ["indeterminate", "false", "true"] },
    { name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] },
    "visibleIf:expression", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () { return new MatrixDropdownColumn(""); });
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdownbase", [{ name: "columns:matrixdropdowncolumns", className: "matrixdropdowncolumn" },
    "horizontalScroll:boolean",
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_7__itemvalue__["a" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "optionsCaption", serializationProperty: "locOptionsCaption" },
    { name: "cellType", default: "dropdown", choices: ["dropdown", "checkbox", "radiogroup", "text", "comment", "boolean"] },
    { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] }, "columnMinWidth"], function () { return new QuestionMatrixDropdownModelBase(""); }, "question");


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionCustomWidgets__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });






/**
 * A base class for all questions. QuestionBase doesn't have information about title, values, errors and so on.
 * Those properties are defined in the Question class.
 */
var QuestionBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBase, _super);
    function QuestionBase(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.conditionRunner = null;
        _this.isCustomWidgetRequested = false;
        _this.customWidgetData = { isNeedRender: true };
        /**
         * The event is fired when the survey change it's locale
         * @see SurveyModel.locale
         */
        _this.localeChanged = new __WEBPACK_IMPORTED_MODULE_1__base__["b" /* Event */]();
        _this.id = QuestionBase.getQuestionId();
        _this.onCreating();
        return _this;
    }
    QuestionBase.getQuestionId = function () {
        return "sq_" + QuestionBase.questionCounter++;
    };
    QuestionBase.prototype.getType = function () { return "questionbase"; };
    Object.defineProperty(QuestionBase.prototype, "isPanel", {
        /**
         * Always returns false.
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visible", {
        /**
         * Use it to get/set the question visibility.
         * @see visibleIf
         */
        get: function () { return this.getPropertyValue("visible", true); },
        set: function (val) {
            if (val == this.visible)
                return;
            this.setPropertyValue("visible", val);
            this.setPropertyValue("isVisible", this.isVisible);
            if (this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visibleIf", {
        /**
         * An expression that returns true or false. If it returns true the Question becomes visible and if it returns false the Question becomes invisible. The library runs the expression on survey start and on changing a question value. If the property is empty then visible property is used.
         * @see visible
         */
        get: function () { return this.getPropertyValue("visibleIf", ""); },
        set: function (val) { this.setPropertyValue("visibleIf", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isVisible", {
        /**
         * Returns true if the question is visible or survey is in design mode right now.
         */
        get: function () { return this.visible || this.isDesignMode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isDesignMode", {
        /**
         * Returns true if the question in design mode right now.
         */
        get: function () { return this.survey && this.survey.isDesignMode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isReadOnly", {
        /**
         * Returns true if there is no input in the question. It always returns true for html question or survey is in 'display' mode.
         * @see QuestionHtmlModel
         * @see SurveyModel.mode
         * @see Question.readOnly
         */
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
        /**
         * Returns the visible index of the question in the survey. It can be from 0 to all visible questions count - 1
         */
        get: function () { return this.getPropertyValue("visibleIndex", -1); },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if there is at least one error on question validation.
     * @param fireCallback set it to true to show error in UI
     */
    QuestionBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        return false;
    };
    Object.defineProperty(QuestionBase.prototype, "currentErrorCount", {
        /**
         * Returns the number of erros on validation.
         */
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
        /**
         * Returns false if the question doesn't have a title property, for example: QuestionHtmlModel
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasDescription", {
        /**
         * Returns false if the question doesn't have a description property, for example: QuestionHtmlModel, or description property is empty.
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasInput", {
        /**
         * Returns false if the question doesn't have an input element, for example: QuestionHtmlModel
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasComment", {
        /**
         * Returns true, if you can have a comment for the question.
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "id", {
        /**
         * The unique identificator. It is generated automatically.
         */
        get: function () { return this.getPropertyValue("id"); },
        set: function (val) { this.setPropertyValue("id", val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list of errors that has in the question. For example, isRequired error.
     */
    QuestionBase.prototype.getAllErrors = function () { return []; };
    Object.defineProperty(QuestionBase.prototype, "customWidget", {
        /**
         * The link to the custom widget.
         */
        get: function () {
            if (!this.isCustomWidgetRequested && !this.customWidgetValue) {
                this.isCustomWidgetRequested = true;
                this.updateCustomWidget();
            }
            return this.customWidgetValue;
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.updateCustomWidget = function () {
        this.customWidgetValue = __WEBPACK_IMPORTED_MODULE_5__questionCustomWidgets__["a" /* CustomWidgetCollection */].Instance.getCustomWidget(this);
    };
    Object.defineProperty(QuestionBase.prototype, "startWithNewLine", {
        /**
         * The Question renders on the new line if the property is true. If the property is false, the question tries to render on the same line/row with a previous question/panel.
         */
        get: function () { return this.getPropertyValue("startWithNewLine", true); },
        set: function (val) {
            if (this.startWithNewLine == val)
                return;
            this.setPropertyValue("startWithNewLine", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "cssClasses", {
        /**
         * Returns all css classes that used for rendering the question. You may use survey.updateQuestionCssClasses event to override css classes for a question.
         * @see SurveyModel.updateQuestionCssClasses
         */
        get: function () {
            var surveyCss = this.css;
            var classes = { error: {} };
            this.copyCssClasses(classes, surveyCss.question);
            this.copyCssClasses(classes.error, surveyCss.error);
            this.updateCssClasses(classes, surveyCss);
            if (this.survey) {
                this.survey.updateQuestionCssClasses(this, classes);
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.getRootCss = function (classes) { return classes.question.root; };
    QuestionBase.prototype.updateCssClasses = function (res, surveyCss) {
        var objCss = surveyCss[this.getType()];
        if (objCss === undefined || objCss === null)
            return;
        if (typeof objCss === 'string' || objCss instanceof String) {
            res.root = objCss;
        }
        else {
            for (var key in objCss) {
                res[key] = objCss[key];
            }
        }
    };
    QuestionBase.prototype.copyCssClasses = function (dest, source) {
        if (!source)
            return;
        if (typeof source === 'string' || source instanceof String) {
            dest["root"] = source;
        }
        else {
            for (var key in source) {
                dest[key] = source[key];
            }
        }
    };
    Object.defineProperty(QuestionBase.prototype, "css", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssstandard__["b" /* surveyCss */].getCss(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "width", {
        /**
         * Use it to set the specific width to the question.
         */
        get: function () { return this.getPropertyValue("width", ""); },
        set: function (val) { this.setPropertyValue("width", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
        /**
         * The rendered width of the question.
         */
        get: function () { return this.getPropertyValue("renderWidth", ""); },
        set: function (val) { this.setPropertyValue("renderWidth", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "indent", {
        /**
         * Set it different from 0 to increase the left padding.
         */
        get: function () { return this.getPropertyValue("indent", 0); },
        set: function (val) { this.setPropertyValue("indent", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
        /**
         * Set it different from 0 to increase the right padding.
         */
        get: function () { return this.getPropertyValue("rightIndent", 0); },
        set: function (val) { this.setPropertyValue("rightIndent", val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Focus the question input.
     * @param onError Focus if there is an error.
     */
    QuestionBase.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
    };
    QuestionBase.prototype.fireCallback = function (callback) {
        if (callback)
            callback();
    };
    QuestionBase.prototype.onCreating = function () { };
    /**
     * Run visibleIf and enableIf expressions. If visibleIf or/and enabledIf are not empty, then the results of performing the expression (true or false) set to the visible/readOnly properties.
     * @param values Typically survey results
     * @see visible
     * @see visibleIf
     * @see readOnly
     * @see enableIf
     */
    QuestionBase.prototype.runCondition = function (values) {
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    //IQuestion
    QuestionBase.prototype.onSurveyValueChanged = function (newValue) {
    };
    QuestionBase.prototype.onSurveyLoad = function () {
        this.fireCallback(this.surveyLoadCallback);
    };
    QuestionBase.prototype.setVisibleIndex = function (val) {
        if (this.visibleIndex == val)
            return 1;
        this.setPropertyValue("visibleIndex", val);
        return 1;
    };
    QuestionBase.prototype.supportGoNextPageAutomatic = function () { return false; };
    QuestionBase.prototype.clearUnusedValues = function () { };
    Object.defineProperty(QuestionBase.prototype, "displayValue", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        this.localeChanged.fire(this, this.getLocale());
    };
    QuestionBase.prototype.onReadOnlyChanged = function () { };
    QuestionBase.prototype.onAnyValueChanged = function (name) { };
    //ILocalizableOwner
    /**
     * Returns the current survey locale
     * @see SurveyModel.locale
     */
    QuestionBase.prototype.getLocale = function () { return this.survey ? this.survey.getLocale() : ""; };
    QuestionBase.prototype.getMarkdownHtml = function (text) { return this.survey ? this.survey.getMarkdownHtml(text) : null; };
    return QuestionBase;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* SurveyElement */]));

QuestionBase.questionCounter = 100;
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("questionbase", ["!name", { name: "visible:boolean", default: true }, "visibleIf:expression",
    { name: "width" }, { name: "startWithNewLine:boolean", default: true }, { name: "indent:number", default: 0, choices: [0, 1, 2, 3] }]);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyNavigationBase; });


var SurveyNavigationBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyNavigationBase, _super);
    function SurveyNavigationBase(props) {
        var _this = _super.call(this, props) || this;
        _this.updateStateFunction = null;
        _this.survey = props.survey;
        _this.css = props.css;
        _this.state = { update: 0 };
        return _this;
    }
    SurveyNavigationBase.prototype.componentWillReceiveProps = function (nextProps) {
        this.survey = nextProps.survey;
        this.css = nextProps.css;
    };
    SurveyNavigationBase.prototype.componentDidMount = function () {
        if (this.survey) {
            var self = this;
            this.updateStateFunction = function () {
                self.state.update = self.state.update + 1;
                self.setState(self.state);
            };
            this.survey.onPageVisibleChanged.add(this.updateStateFunction);
        }
    };
    SurveyNavigationBase.prototype.componentWillUnmount = function () {
        if (this.survey && this.updateStateFunction) {
            this.survey.onPageVisibleChanged.remove(this.updateStateFunction);
            this.updateStateFunction = null;
        }
    };
    return SurveyNavigationBase;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactquestion__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactquestionelement__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyRow; });




var SurveyPage = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyPage, _super);
    function SurveyPage(props) {
        var _this = _super.call(this, props) || this;
        _this.page = props.page;
        _this.survey = props.survey;
        _this.creator = props.creator;
        _this.css = props.css;
        return _this;
    }
    SurveyPage.prototype.componentWillReceiveProps = function (nextProps) {
        this.page = nextProps.page;
        this.survey = nextProps.survey;
        this.creator = nextProps.creator;
        this.css = nextProps.css;
    };
    SurveyPage.prototype.componentDidMount = function () {
        var el = this.refs["root"];
        if (el && this.survey)
            this.survey.afterRenderPage(el);
    };
    SurveyPage.prototype.render = function () {
        if (this.page == null || this.survey == null || this.creator == null)
            return null;
        var title = this.renderTitle();
        var rows = [];
        var questionRows = this.page.rows;
        for (var i = 0; i < questionRows.length; i++) {
            rows.push(this.createRow(questionRows[i], i));
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: "root" },
            title,
            rows));
    };
    SurveyPage.prototype.createRow = function (row, index) {
        var rowName = "row" + (index + 1);
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyRow, { key: rowName, row: row, survey: this.survey, creator: this.creator, css: this.css });
    };
    SurveyPage.prototype.renderTitle = function () {
        if (!this.page.title || !this.survey.showPageTitles)
            return null;
        var text = __WEBPACK_IMPORTED_MODULE_3__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.page.locTitle);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h4", { className: this.css.pageTitle }, text));
    };
    return SurveyPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var SurveyPanel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyPanel, _super);
    function SurveyPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.panel = props.panel;
        _this.survey = props.survey;
        _this.creator = props.creator;
        _this.css = props.css;
        _this.state = { modelChanged: 0 };
        return _this;
    }
    SurveyPanel.prototype.componentWillReceiveProps = function (nextProps) {
        this.panel = nextProps.panel;
        this.survey = nextProps.survey;
        this.creator = nextProps.creator;
        this.css = nextProps.css;
    };
    SurveyPanel.prototype.componentDidMount = function () {
        var self = this;
        var el = this.refs['root'];
        if (el && this.survey) {
            this.survey.afterRenderPanel(this.panel, el);
        }
        this.panel.registerFunctionOnPropertiesValueChanged(["isVisible", "renderWidth", "innerIndent", "rightIndent"], function () {
            self.state.modelChanged = self.state.modelChanged + 1;
            self.setState(self.state);
        }, "react");
    };
    SurveyPanel.prototype.componentWillUnmount = function () {
        if (this.panel) {
            this.panel.unRegisterFunctionOnPropertiesValueChanged(["isVisible", "renderWidth", "innerIndent", "rightIndent"], "react");
        }
    };
    SurveyPanel.prototype.render = function () {
        if (this.panel == null || this.survey == null || this.creator == null)
            return null;
        if (!this.panel.isVisible)
            return null;
        var title = this.renderTitle();
        var rows = [];
        var questionRows = this.panel.rows;
        for (var i = 0; i < questionRows.length; i++) {
            rows.push(this.createRow(questionRows[i], i));
        }
        var style = { "paddingLeft": this.panel.innerIndent * this.css.question.indent + 'px' };
        var rootStyle = {};
        if (this.panel.renderWidth)
            rootStyle["width"] = this.panel.renderWidth;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: "root", className: this.css.panel.container, style: rootStyle },
            title,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: style }, rows)));
    };
    SurveyPanel.prototype.createRow = function (row, index) {
        var rowName = "row" + (index + 1);
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyRow, { key: rowName, row: row, survey: this.survey, creator: this.creator, css: this.css });
    };
    SurveyPanel.prototype.renderTitle = function () {
        if (!this.panel.title)
            return null;
        var text = __WEBPACK_IMPORTED_MODULE_3__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.panel.locTitle);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h4", { className: this.css.panel.title }, text));
    };
    return SurveyPanel;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var SurveyRow = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyRow, _super);
    function SurveyRow(props) {
        var _this = _super.call(this, props) || this;
        _this.setProperties(props);
        return _this;
    }
    SurveyRow.prototype.componentWillReceiveProps = function (nextProps) {
        this.setProperties(nextProps);
    };
    SurveyRow.prototype.setProperties = function (props) {
        this.row = props.row;
        if (this.row) {
            var self = this;
            this.row.visibilityChangedCallback = function () { self.setState({ visible: self.row.visible }); };
        }
        this.survey = props.survey;
        this.creator = props.creator;
        this.css = props.css;
    };
    SurveyRow.prototype.render = function () {
        if (this.row == null || this.survey == null || this.creator == null)
            return null;
        var questions = null;
        if (this.row.visible) {
            questions = [];
            for (var i = 0; i < this.row.elements.length; i++) {
                var question = this.row.elements[i];
                questions.push(this.createQuestion(question));
            }
        }
        var style = this.row.visible ? {} : { display: "none" };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.row, style: style }, questions));
    };
    SurveyRow.prototype.createQuestion = function (question) {
        if (question.isPanel) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyPanel, { key: question.name, panel: question, creator: this.creator, survey: this.survey, css: this.css });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__reactquestion__["a" /* SurveyQuestion */], { key: question.name, question: question, creator: this.creator, css: this.css });
        }
    };
    return SurveyRow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactquestioncomment__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reactquestionelement__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_widget__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionErrors; });






var SurveyQuestion = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestion, _super);
    function SurveyQuestion(props) {
        var _this = _super.call(this, props) || this;
        _this.setQuestion(props.question);
        _this.state = _this.getState();
        _this.creator = props.creator;
        return _this;
    }
    SurveyQuestion.prototype.componentWillReceiveProps = function (nextProps) {
        this.creator = nextProps.creator;
        this.setQuestion(nextProps.question);
        this.setState(this.getState());
    };
    SurveyQuestion.prototype.setQuestion = function (question) {
        this.questionBase = question;
        this.question = question instanceof __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */] ? question : null;
    };
    SurveyQuestion.prototype.getState = function () {
        var value = this.question ? this.question.value : null;
        return {
            visible: this.questionBase.visible, value: value, error: 0, renderWidth: 0,
            visibleIndexValue: -1, isReadOnly: this.questionBase.isReadOnly
        };
    };
    SurveyQuestion.prototype.componentDidMount = function () {
        if (this.questionBase) {
            var self = this;
            this.questionBase["react"] = self;
            this.questionBase.registerFunctionOnPropertiesValueChanged(["renderWidth", "indent", "rightIndent"], function () {
                self.state.renderWidth = self.state.renderWidth + 1;
                self.setState(self.state);
            }, "react");
            this.questionBase.registerFunctionOnPropertyValueChanged("visibleIndex", function () {
                self.state.visibleIndexValue = self.questionBase.visibleIndex;
                self.setState(self.state);
            }, "react");
            this.questionBase.registerFunctionOnPropertyValueChanged("isReadOnly", function () {
                self.state.isReadOnly = self.questionBase.isReadOnly;
                self.setState(self.state);
            }, "react");
            var el = this.refs["root"];
            if (el && this.questionBase.survey)
                this.questionBase.survey.afterRenderQuestion(this.questionBase, el);
        }
    };
    SurveyQuestion.prototype.componentWillUnmount = function () {
        if (this.questionBase) {
            this.questionBase["react"] = null;
            this.questionBase.unRegisterFunctionOnPropertiesValueChanged(["visibleIndex", "renderWidth", "indent", "rightIndent, isReadOnly"], "react");
        }
    };
    SurveyQuestion.prototype.render = function () {
        if (!this.questionBase || !this.creator)
            return null;
        if (!this.questionBase.visible)
            return null;
        var cssClasses = this.questionBase.cssClasses;
        var questionRender = this.renderQuestion();
        var title = this.questionBase.hasTitle ? this.renderTitle(cssClasses) : null;
        var description = this.renderDescription(cssClasses);
        var titleTop = this.creator.questionTitleLocation() == "top" ? title : null;
        var titleBottom = this.creator.questionTitleLocation() == "bottom" ? title : null;
        var descriptionTop = this.creator.questionTitleLocation() == "top" ? description : null;
        var descriptionBottom = this.creator.questionTitleLocation() == "bottom" ? description : null;
        var comment = (this.question && this.question.hasComment) ? this.renderComment(cssClasses) : null;
        var errors = this.renderErrors(cssClasses);
        var errorsTop = this.creator.questionErrorLocation() == "top" ? errors : null;
        var errorsBottom = this.creator.questionErrorLocation() == "bottom" ? errors : null;
        var paddingLeft = (this.questionBase.indent > 0) ? this.questionBase.indent * cssClasses.indent + "px" : null;
        var paddingRight = (this.questionBase.rightIndent > 0) ? this.questionBase.rightIndent * cssClasses.indent + "px" : null;
        var rootStyle = {};
        if (this.questionBase.renderWidth)
            rootStyle["width"] = this.questionBase.renderWidth;
        if (paddingLeft)
            rootStyle["paddingLeft"] = paddingLeft;
        if (paddingRight)
            rootStyle["paddingRight"] = paddingRight;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: "root", id: this.questionBase.id, className: cssClasses.mainRoot, style: rootStyle },
            titleTop,
            descriptionTop,
            errorsTop,
            questionRender,
            comment,
            errorsBottom,
            titleBottom,
            descriptionBottom));
    };
    SurveyQuestion.prototype.renderQuestion = function () {
        var customWidget = this.questionBase.customWidget;
        if (!customWidget) {
            return this.creator.createQuestionElement(this.questionBase);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__custom_widget__["a" /* SurveyCustomWidget */], { creator: this.creator, question: this.questionBase });
    };
    SurveyQuestion.prototype.renderTitle = function (cssClasses) {
        var titleText = __WEBPACK_IMPORTED_MODULE_4__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.question.locTitle);
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h5", { className: cssClasses.title }, titleText);
    };
    SurveyQuestion.prototype.renderDescription = function (cssClasses) {
        if (!this.questionBase.hasDescription)
            return null;
        var descriptionText = __WEBPACK_IMPORTED_MODULE_4__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.question.locDescription);
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: cssClasses.description }, descriptionText);
    };
    SurveyQuestion.prototype.renderComment = function (cssClasses) {
        var commentText = __WEBPACK_IMPORTED_MODULE_4__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.question.locCommentText);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null, commentText),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__reactquestioncomment__["a" /* SurveyQuestionCommentItem */], { question: this.question, cssClasses: cssClasses })));
    };
    SurveyQuestion.prototype.renderErrors = function (cssClasses) {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyQuestionErrors, { question: this.question, cssClasses: cssClasses, creator: this.creator });
    };
    return SurveyQuestion;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var SurveyQuestionErrors = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionErrors, _super);
    function SurveyQuestionErrors(props) {
        var _this = _super.call(this, props) || this;
        _this.setQuestion(props.question);
        _this.state = _this.getState();
        _this.creator = props.creator;
        return _this;
    }
    SurveyQuestionErrors.prototype.componentWillReceiveProps = function (nextProps) {
        this.setQuestion(nextProps.question);
        this.setState(this.getState());
        this.creator = nextProps.creator;
    };
    SurveyQuestionErrors.prototype.setQuestion = function (question) {
        var _this = this;
        this.question = question instanceof __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */] ? question : null;
        if (this.question) {
            this.question.errorsChangedCallback = function () {
                _this.setState(_this.getState(_this.state));
            };
        }
    };
    SurveyQuestionErrors.prototype.getState = function (prevState) {
        if (prevState === void 0) { prevState = null; }
        return !prevState ? { error: 0 } : { error: prevState.error + 1 };
    };
    SurveyQuestionErrors.prototype.render = function () {
        if (!this.question || this.question.errors.length == 0)
            return null;
        var errors = [];
        for (var i = 0; i < this.question.errors.length; i++) {
            var errorText = this.question.errors[i].getText();
            var key = "error" + i;
            errors.push(this.creator.renderError(key, errorText, this.cssClasses));
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { role: "alert", className: this.cssClasses.error.root }, errors));
    };
    return SurveyQuestionErrors;
}(__WEBPACK_IMPORTED_MODULE_4__reactquestionelement__["c" /* ReactSurveyElement */]));



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactSurveyModel; });


var ReactSurveyModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ReactSurveyModel, _super);
    function ReactSurveyModel(jsonObj) {
        if (jsonObj === void 0) { jsonObj = null; }
        return _super.call(this, jsonObj) || this;
    }
    ReactSurveyModel.prototype.render = function () {
        if (this.renderCallback) {
            this.renderCallback();
        }
    };
    ReactSurveyModel.prototype.mergeCss = function (src, dest) {
        this.mergeValues(src, dest);
    };
    ReactSurveyModel.prototype.doAfterRenderSurvey = function (el) {
        this.afterRenderSurvey(el);
    };
    ReactSurveyModel.prototype.onLoadSurveyFromService = function () {
        this.render();
    };
    ReactSurveyModel.prototype.onLoadingSurveyFromService = function () {
        this.render();
    };
    ReactSurveyModel.prototype.setCompletedState = function (value, text) {
        _super.prototype.setCompletedState.call(this, value, text);
        this.render();
    };
    return ReactSurveyModel;
}(__WEBPACK_IMPORTED_MODULE_1__survey__["a" /* SurveyModel */]));

__WEBPACK_IMPORTED_MODULE_1__survey__["a" /* SurveyModel */].platform = "react";


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ValidatorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SurveyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NumericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TextValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnswerCountValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RegexValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EmailValidator; });





var ValidatorResult = (function () {
    function ValidatorResult(value, error) {
        if (error === void 0) { error = null; }
        this.value = value;
        this.error = error;
    }
    return ValidatorResult;
}());

/**
 * Base SurveyJS validator class.
 */
var SurveyValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyValidator, _super);
    function SurveyValidator() {
        var _this = _super.call(this) || this;
        _this.text = "";
        return _this;
    }
    SurveyValidator.prototype.getErrorText = function (name) {
        if (this.text)
            return this.text;
        return this.getDefaultErrorText(name);
    };
    SurveyValidator.prototype.getDefaultErrorText = function (name) {
        return "";
    };
    SurveyValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        return null;
    };
    return SurveyValidator;
}(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* Base */]));

var ValidatorRunner = (function () {
    function ValidatorRunner() {
    }
    ValidatorRunner.prototype.run = function (owner) {
        for (var i = 0; i < owner.validators.length; i++) {
            var validatorResult = owner.validators[i].validate(owner.validatedValue, owner.getValidatorTitle());
            if (validatorResult != null) {
                if (validatorResult.error)
                    return validatorResult.error;
                if (validatorResult.value) {
                    owner.validatedValue = validatorResult.value;
                }
            }
        }
        return null;
    };
    return ValidatorRunner;
}());

/**
 * Validate numeric values.
 */
var NumericValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NumericValidator, _super);
    function NumericValidator(minValue, maxValue) {
        if (minValue === void 0) { minValue = null; }
        if (maxValue === void 0) { maxValue = null; }
        var _this = _super.call(this) || this;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    NumericValidator.prototype.getType = function () { return "numericvalidator"; };
    NumericValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!this.isNumber(value)) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["b" /* RequreNumericError */]());
        }
        var result = new ValidatorResult(parseFloat(value));
        if (this.minValue !== null && this.minValue > result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(name));
            return result;
        }
        if (this.maxValue !== null && this.maxValue < result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(name));
            return result;
        }
        return (typeof value === 'number') ? null : result;
    };
    NumericValidator.prototype.getDefaultErrorText = function (name) {
        var vName = name ? name : __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("value");
        if (this.minValue !== null && this.maxValue !== null) {
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
        }
        else {
            if (this.minValue !== null) {
                return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMin")["format"](vName, this.minValue);
            }
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMax")["format"](vName, this.maxValue);
        }
    };
    NumericValidator.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return NumericValidator;
}(SurveyValidator));

/**
 * Validate text values
 */
var TextValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](TextValidator, _super);
    function TextValidator(minLength, maxLength) {
        if (minLength === void 0) { minLength = 0; }
        if (maxLength === void 0) { maxLength = 0; }
        var _this = _super.call(this) || this;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        return _this;
    }
    TextValidator.prototype.getType = function () { return "textvalidator"; };
    TextValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (this.minLength > 0 && value.length < this.minLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(name)));
        }
        if (this.maxLength > 0 && value.length > this.maxLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(name)));
        }
        return null;
    };
    TextValidator.prototype.getDefaultErrorText = function (name) {
        if (this.minLength > 0 && this.maxLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMinMaxLength")["format"](this.minLength, this.maxLength);
        if (this.minLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMinLength")["format"](this.minLength);
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMaxLength")["format"](this.maxLength);
    };
    return TextValidator;
}(SurveyValidator));

var AnswerCountValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerCountValidator, _super);
    function AnswerCountValidator(minCount, maxCount) {
        if (minCount === void 0) { minCount = null; }
        if (maxCount === void 0) { maxCount = null; }
        var _this = _super.call(this) || this;
        _this.minCount = minCount;
        _this.maxCount = maxCount;
        return _this;
    }
    AnswerCountValidator.prototype.getType = function () { return "answercountvalidator"; };
    AnswerCountValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (value == null || value.constructor != Array)
            return null;
        var count = value.length;
        if (this.minCount && count < this.minCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("minSelectError")["format"](this.minCount))));
        }
        if (this.maxCount && count > this.maxCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("maxSelectError")["format"](this.maxCount))));
        }
        return null;
    };
    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
        return name;
    };
    return AnswerCountValidator;
}(SurveyValidator));

/**
 * Use it to validate the text by regular expressions.
 */
var RegexValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RegexValidator, _super);
    function RegexValidator(regex) {
        if (regex === void 0) { regex = null; }
        var _this = _super.call(this) || this;
        _this.regex = regex;
        return _this;
    }
    RegexValidator.prototype.getType = function () { return "regexvalidator"; };
    RegexValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!this.regex || !value)
            return null;
        var re = new RegExp(this.regex);
        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
                var res = this.hasError(re, value[i], name);
                if (res)
                    return res;
            }
        }
        return this.hasError(re, value, name);
        ;
    };
    RegexValidator.prototype.hasError = function (re, value, name) {
        if (re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(name)));
    };
    return RegexValidator;
}(SurveyValidator));

/**
 * Validate e-mail address in the text input
 */
var EmailValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](EmailValidator, _super);
    function EmailValidator() {
        var _this = _super.call(this) || this;
        _this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return _this;
    }
    EmailValidator.prototype.getType = function () { return "emailvalidator"; };
    EmailValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!value)
            return null;
        if (this.re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* CustomError */](this.getErrorText(name)));
    };
    EmailValidator.prototype.getDefaultErrorText = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("invalidEmail");
    };
    return EmailValidator;
}(SurveyValidator));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("surveyvalidator", ["text"]);
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () { return new NumericValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("textvalidator", ["minLength:number", "maxLength:number"], function () { return new TextValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () { return new AnswerCountValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("regexvalidator", ["regex"], function () { return new RegexValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("emailvalidator", [], function () { return new EmailValidator(); }, "surveyvalidator");


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactSurvey__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactquestionelement__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyWindow; });




var SurveyWindow = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyWindow, _super);
    function SurveyWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.updateSurvey(props);
        _this.handleOnExpanded = _this.handleOnExpanded.bind(_this);
        return _this;
    }
    SurveyWindow.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateSurvey(nextProps);
    };
    SurveyWindow.prototype.handleOnExpanded = function (event) {
        this.state.expanded = !this.state.expanded;
        this.setState(this.state);
    };
    SurveyWindow.prototype.render = function () {
        if (this.state.hidden)
            return null;
        var header = this.renderHeader();
        var body = this.state.expanded ? this.renderBody() : null;
        var style = { position: "fixed", bottom: 3, right: 10 };
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.window.root, style: style },
            header,
            body);
    };
    SurveyWindow.prototype.renderHeader = function () {
        var styleA = { width: "100%" };
        var styleTitle = { paddingRight: "10px" };
        var glyphClassName = this.state.expanded ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
        glyphClassName = "glyphicon pull-right " + glyphClassName;
        var title = __WEBPACK_IMPORTED_MODULE_3__reactquestionelement__["a" /* SurveyElementBase */].renderLocString(this.survey.locTitle);
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.window.header.root },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { href: "#", onClick: this.handleOnExpanded, style: styleA },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: this.css.window.header.title, style: styleTitle }, title),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: glyphClassName, "aria-hidden": "true" })));
    };
    SurveyWindow.prototype.renderBody = function () {
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.window.body }, this.renderSurvey());
    };
    SurveyWindow.prototype.updateSurvey = function (newProps) {
        _super.prototype.updateSurvey.call(this, newProps);
        var hasExpanded = newProps["expanded"] ? newProps.expanded : false;
        this.setState({ expanded: hasExpanded, hidden: false });
        var self = this;
        this.survey.onComplete.add(function (s) {
            self.state.hidden = true;
            self.setState(self.state);
        });
    };
    return SurveyWindow;
}(__WEBPACK_IMPORTED_MODULE_2__reactSurvey__["a" /* Survey */]));



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditions__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionsParser; });

var ConditionsParser = (function () {
    function ConditionsParser() {
    }
    ConditionsParser.prototype.parse = function (text, root) {
        this.text = text;
        this.root = root;
        this.root.clear();
        this.at = 0;
        this.length = this.text.length;
        var res = this.parseText();
        return res;
    };
    ConditionsParser.prototype.toString = function (root) {
        this.root = root;
        return this.nodeToString(root);
    };
    ConditionsParser.prototype.toStringCore = function (value) {
        if (!value)
            return "";
        if (value["children"])
            return this.nodeToString(value);
        if (value["left"])
            return this.conditionToString(value);
        return "";
    };
    ConditionsParser.prototype.nodeToString = function (node) {
        if (node.isEmpty)
            return "";
        var res = "";
        for (var i = 0; i < node.children.length; i++) {
            var nodeText = this.toStringCore(node.children[i]);
            if (nodeText) {
                if (res)
                    res += ' ' + node.connective + ' ';
                res += nodeText;
            }
        }
        if (node != this.root && node.children.length > 1) {
            res = '(' + res + ')';
        }
        return res;
    };
    ConditionsParser.prototype.conditionToString = function (condition) {
        if (!condition.right || !condition.operator)
            return "";
        var left = condition.left.operandToString();
        var res = left + ' ' + this.operationToString(condition.operator);
        if (this.isNoRightOperation(condition.operator))
            return res;
        var right = condition.right.operandToString();
        return res + ' ' + right;
    };
    ConditionsParser.prototype.operationToString = function (op) {
        if (op == "equal")
            return "=";
        if (op == "notequal")
            return "!=";
        if (op == "greater")
            return ">";
        if (op == "less")
            return "<";
        if (op == "greaterorequal")
            return ">=";
        if (op == "lessorequal")
            return "<=";
        return op;
    };
    ConditionsParser.prototype.parseText = function () {
        this.node = this.root;
        this.expressionNodes = [];
        this.expressionNodes.push(this.node);
        var res = this.readConditions();
        return res && this.at >= this.length;
    };
    ConditionsParser.prototype.readConditions = function () {
        var res = this.readCondition();
        if (!res)
            return res;
        var connective = this.readConnective();
        if (connective) {
            this.addConnective(connective);
            return this.readConditions();
        }
        return true;
    };
    ConditionsParser.prototype.readCondition = function () {
        var expRes = this.readExpression();
        if (expRes < 0)
            return false;
        if (expRes == 1)
            return true;
        var left = this.readString();
        if (!left)
            return false;
        if (this.isConstant(left)) {
            var c = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* Condition */]();
            c.left = this.createOperand(left, null);
            this.addCondition(c);
            return true;
        }
        var params = this.readParameters();
        var op = this.readOperator();
        if (!op)
            return false;
        var c = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* Condition */]();
        c.left = this.createOperand(left, params);
        c.operator = op;
        if (!this.isNoRightOperation(op)) {
            var right = this.readString();
            if (!right)
                return false;
            params = this.readParameters();
            c.right = this.createOperand(right, params);
        }
        this.addCondition(c);
        return true;
    };
    ConditionsParser.prototype.readExpression = function () {
        this.skip();
        if (this.at >= this.length || this.ch != '(')
            return 0;
        this.at++;
        this.pushExpression();
        var res = this.readConditions();
        if (res) {
            this.skip();
            res = this.ch == ')';
            this.at++;
            this.popExpression();
            return 1;
        }
        return -1;
    };
    Object.defineProperty(ConditionsParser.prototype, "ch", {
        get: function () { return this.text.charAt(this.at); },
        enumerable: true,
        configurable: true
    });
    ConditionsParser.prototype.skip = function () {
        while (this.at < this.length && this.isSpace(this.ch))
            this.at++;
    };
    ConditionsParser.prototype.isSpace = function (c) {
        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
    };
    ConditionsParser.prototype.isQuotes = function (c) {
        return c == "'" || c == '"';
    };
    ConditionsParser.prototype.isComma = function (c) { return c == ','; };
    ConditionsParser.prototype.isOperatorChar = function (c) {
        return c == '>' || c == '<' || c == '=' || c == '!';
    };
    ConditionsParser.prototype.isOpenBracket = function (c) { return c == '('; };
    ConditionsParser.prototype.isCloseBracket = function (c) { return c == ')'; };
    ConditionsParser.prototype.isBrackets = function (c) {
        return this.isOpenBracket(c) || this.isCloseBracket(c);
    };
    ConditionsParser.prototype.readString = function () {
        this.skip();
        if (this.at >= this.length)
            return null;
        var start = this.at;
        var hasQuotes = this.isQuotes(this.ch);
        if (hasQuotes)
            this.at++;
        var isFirstOpCh = this.isOperatorChar(this.ch);
        while (this.at < this.length) {
            if (!hasQuotes && this.isSpace(this.ch))
                break;
            if (this.isQuotes(this.ch)) {
                if (hasQuotes)
                    this.at++;
                break;
            }
            if (!hasQuotes) {
                if (isFirstOpCh != this.isOperatorChar(this.ch))
                    break;
                if (this.isBrackets(this.ch) || this.isComma(this.ch))
                    break;
            }
            this.at++;
        }
        if (this.at <= start)
            return null;
        var res = this.text.substr(start, this.at - start);
        if (res) {
            if (res.length > 1 && this.isQuotes(res[0])) {
                var len = res.length - 1;
                if (this.isQuotes(res[res.length - 1]))
                    len--;
                res = res.substr(1, len);
            }
        }
        return res;
    };
    ConditionsParser.prototype.createOperand = function (str, params) {
        if (!params)
            return new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* Operand */](str);
        var res = new __WEBPACK_IMPORTED_MODULE_0__conditions__["d" /* FunctionOperand */](str);
        res.parameters = params;
        return res;
    };
    ConditionsParser.prototype.readParameters = function () {
        if (!this.isOpenBracket(this.ch))
            return null;
        var params = [];
        while (this.at < this.length && !this.isCloseBracket(this.ch)) {
            this.at++;
            var str = this.readString();
            if (str) {
                var newParams = this.readParameters();
                params.push(this.createOperand(str, newParams));
            }
        }
        this.at++;
        return params;
    };
    ConditionsParser.prototype.isNoRightOperation = function (op) {
        return op == "empty" || op == "notempty";
    };
    ConditionsParser.prototype.isConstant = function (str) {
        if (!str)
            return false;
        str = str.toLowerCase();
        return ConditionsParser.constants.indexOf(str) > -1;
    };
    ConditionsParser.prototype.readOperator = function () {
        var op = this.readString();
        if (!op)
            return null;
        op = op.toLowerCase();
        if (op == '>')
            op = "greater";
        if (op == '<')
            op = "less";
        if (op == '>=' || op == '=>')
            op = "greaterorequal";
        if (op == '<=' || op == '=<')
            op = "lessorequal";
        if (op == '=' || op == '==')
            op = "equal";
        if (op == '<>' || op == '!=')
            op = "notequal";
        if (op == 'contain' || op == '*=')
            op = "contains";
        if (op == 'notcontain')
            op = "notcontains";
        return op;
    };
    ConditionsParser.prototype.readConnective = function () {
        var con = this.readString();
        if (!con)
            return null;
        con = con.toLowerCase();
        if (con == "&" || con == "&&")
            con = "and";
        if (con == "|" || con == "||")
            con = "or";
        if (con != "and" && con != "or")
            con = null;
        return con;
    };
    ConditionsParser.prototype.pushExpression = function () {
        var node = new __WEBPACK_IMPORTED_MODULE_0__conditions__["e" /* ConditionNode */]();
        this.expressionNodes.push(node);
        this.node = node;
    };
    ConditionsParser.prototype.popExpression = function () {
        var node = this.expressionNodes.pop();
        this.node = this.expressionNodes[this.expressionNodes.length - 1];
        this.node.children.push(node);
    };
    ConditionsParser.prototype.addCondition = function (c) {
        this.node.children.push(c);
    };
    ConditionsParser.prototype.addConnective = function (con) {
        if (this.node.children.length < 2) {
            this.node.connective = con;
        }
        else {
            if (this.node.connective != con) {
                var oldCon = this.node.connective;
                var oldChildren = this.node.children;
                this.node.clear();
                this.node.connective = con;
                var oldNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["e" /* ConditionNode */]();
                oldNode.connective = oldCon;
                oldNode.children = oldChildren;
                this.node.children.push(oldNode);
                var newNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["e" /* ConditionNode */]();
                this.node.children.push(newNode);
                this.node = newNode;
            }
        }
    };
    return ConditionsParser;
}());

ConditionsParser.constants = ["true", "false"];


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dxSurveyService; });
/**
 * The class contains methods to work with www.dxsurvey.com service.
 */
var dxSurveyService = (function () {
    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
    function dxSurveyService() {
    }
    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurvey?surveyId=' + surveyId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.getSurveyJsonAndIsCompleted = function (surveyId, clientId, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurveyAndIsCompleted?surveyId=' + surveyId + '&clientId=' + clientId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            var surveyJson = result ? result.survey : null;
            var isCompleted = result ? result.isCompleted : null;
            onLoad(xhr.status == 200, surveyJson, isCompleted, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', dxSurveyService.serviceUrl + '/post/');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        var data = { postId: postId, surveyResult: JSON.stringify(result) };
        if (clientId)
            data['clientId'] = clientId;
        if (isPartialCompleted)
            data['isPartialCompleted'] = true;
        var dataStringify = JSON.stringify(data);
        var self = this;
        xhr.onload = xhr.onerror = function () {
            if (!onSendResult)
                return;
            onSendResult(xhr.status == 200, xhr.response);
        };
        xhr.send(dataStringify);
    };
    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
        var xhr = new XMLHttpRequest();
        xhr.onload = xhr.onerror = function () {
            if (!onSendFile)
                return;
            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
        };
        xhr.open("POST", dxSurveyService.serviceUrl + '/upload/', true);
        var formData = new FormData();
        formData.append("file", file);
        formData.append("postId", postId);
        xhr.send(formData);
    };
    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
        var xhr = new XMLHttpRequest();
        var data = 'resultId=' + resultId + '&name=' + name;
        xhr.open('GET', dxSurveyService.serviceUrl + '/getResult?' + data);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            var result = null;
            var list = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                list = [];
                for (var key in result.QuestionResult) {
                    var el = { name: key, value: result.QuestionResult[key] };
                    list.push(el);
                }
            }
            onGetResult(xhr.status == 200, result, list, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
        var xhr = new XMLHttpRequest();
        var data = 'resultId=' + resultId + '&clientId=' + clientId;
        xhr.open('GET', dxSurveyService.serviceUrl + '/isCompleted?' + data);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            var result = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
            }
            onIsCompleted(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    return dxSurveyService;
}());

dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionFactory; });
var FunctionFactory = (function () {
    function FunctionFactory() {
        this.functionHash = {};
    }
    FunctionFactory.prototype.register = function (name, func) {
        this.functionHash[name] = func;
    };
    FunctionFactory.prototype.clear = function () {
        this.functionHash = {};
    };
    FunctionFactory.prototype.getAll = function () {
        var result = [];
        for (var key in this.functionHash) {
            result.push(key);
        }
        return result.sort();
    };
    FunctionFactory.prototype.run = function (name, params) {
        var func = this.functionHash[name];
        if (!func)
            return null;
        return func(params);
    };
    return FunctionFactory;
}());

FunctionFactory.Instance = new FunctionFactory();
function sum(params) {
    var res = 0;
    for (var i = 0; i < params.length; i++) {
        res += params[i];
    }
    return res;
}
FunctionFactory.Instance.register("sum", sum);
function age(params) {
    if (params.length < 1)
        return -1;
    var birthDay = new Date(params[0]);
    var ageDifMs = Date.now() - birthDay.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
FunctionFactory.Instance.register("age", age);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModel; });




/**
 * The page object. It has elements collection, that contains questions and panels.
 */
var PageModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PageModel, _super);
    function PageModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    PageModel.prototype.getType = function () { return "page"; };
    Object.defineProperty(PageModel.prototype, "visibleIndex", {
        /**
         * The visible index of the page. It has values from 0 to visible page count - 1.
         * @see SurveyModel.visiblePages
         * @see SurveyModel.pages
         */
        get: function () { return this.getPropertyValue("visibleIndex", -1); },
        set: function (val) { this.setPropertyValue("visibleIndex", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "num", {
        get: function () { return this.getPropertyValue("num", -1); },
        set: function (val) {
            if (this.num == val)
                return;
            this.setPropertyValue("num", val);
            this.onNumChanged(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "navigationButtonsVisibility", {
        /**
         * Set this property to "hide" to make "Prev", "Next" and "Complete" buttons are invisible for this page. Set this property to "show" to make these buttons visible, even if survey showNavigationButtons property is false.
         * @see SurveyMode.showNavigationButtons
         */
        get: function () { return this.getPropertyValue("navigationButtonsVisibility", "inherit"); },
        set: function (val) {
            this.setPropertyValue("navigationButtonsVisibility", val.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.getRenderedTitle = function (str) {
        str = _super.prototype.getRenderedTitle.call(this, str);
        if (this.num > 0) {
            str = this.num + ". " + str;
        }
        return str;
    };
    /**
     * Call it to focus the input on the first question
     */
    PageModel.prototype.focusFirstQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            if (!question.visible || !question.hasInput)
                continue;
            this.questions[i].focus();
            break;
        }
    };
    /**
     * Call it to focus the input of the first question that has an error.
     */
    PageModel.prototype.focusFirstErrorQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (!this.questions[i].visible || this.questions[i].currentErrorCount == 0)
                continue;
            this.questions[i].focus(true);
            break;
        }
    };
    /**
     * Call it to scroll to the page top.
     */
    PageModel.prototype.scrollToTop = function () {
        __WEBPACK_IMPORTED_MODULE_2__base__["a" /* SurveyElement */].ScrollElementToTop(this.id);
    };
    PageModel.prototype.onNumChanged = function (value) {
    };
    PageModel.prototype.onVisibleChanged = function () {
        _super.prototype.onVisibleChanged.call(this);
        if (this.survey != null) {
            this.survey.pageVisibilityChanged(this, this.visible);
        }
    };
    return PageModel;
}(__WEBPACK_IMPORTED_MODULE_3__panel__["b" /* PanelModelBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("page", [{ name: "navigationButtonsVisibility", default: "inherit", choices: ["inherit", "show", "hide"] }], function () { return new PageModel(); }, "panel");


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionCustomWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWidgetCollection; });

var QuestionCustomWidget = (function () {
    function QuestionCustomWidget(name, widgetJson) {
        this.name = name;
        this.widgetJson = widgetJson;
        this.htmlTemplate = widgetJson.htmlTemplate ? widgetJson.htmlTemplate : "";
    }
    QuestionCustomWidget.prototype.afterRender = function (question, el) {
        if (this.widgetJson.afterRender)
            this.widgetJson.afterRender(question, el);
    };
    QuestionCustomWidget.prototype.willUnmount = function (question, el) {
        if (this.widgetJson.willUnmount)
            this.widgetJson.willUnmount(question, el);
    };
    QuestionCustomWidget.prototype.isFit = function (question) {
        if (this.widgetJson.isFit)
            return this.widgetJson.isFit(question);
        return false;
    };
    QuestionCustomWidget.prototype.activatedByChanged = function (activatedBy) {
        if (this.widgetJson.activatedByChanged) {
            this.widgetJson.activatedByChanged(activatedBy);
        }
    };
    Object.defineProperty(QuestionCustomWidget.prototype, "isDefaultRender", {
        get: function () { return this.widgetJson.isDefaultRender; },
        enumerable: true,
        configurable: true
    });
    return QuestionCustomWidget;
}());

var CustomWidgetCollection = (function () {
    function CustomWidgetCollection() {
        this.widgetsValues = [];
        this.widgetsActivatedBy = {};
        this.onCustomWidgetAdded = new __WEBPACK_IMPORTED_MODULE_0__base__["b" /* Event */]();
    }
    Object.defineProperty(CustomWidgetCollection.prototype, "widgets", {
        get: function () { return this.widgetsValues; },
        enumerable: true,
        configurable: true
    });
    CustomWidgetCollection.prototype.addCustomWidget = function (widgetJson, activatedBy) {
        if (activatedBy === void 0) { activatedBy = "property"; }
        var name = widgetJson.name;
        if (!name) {
            name = "widget_" + this.widgets.length + 1;
        }
        var customWidget = new QuestionCustomWidget(name, widgetJson);
        this.widgetsValues.push(customWidget);
        this.widgetsActivatedBy[name] = activatedBy;
        customWidget.activatedByChanged(activatedBy);
        this.onCustomWidgetAdded.fire(customWidget, null);
    };
    /**
     * Returns the way the custom wiget is activated. It can be activated by a property ("property"), question type ("type") or by new/custom question type ("customtype").
     * @param widgetName the custom widget name
     * @see setActivatedBy
     */
    CustomWidgetCollection.prototype.getActivatedBy = function (widgetName) {
        var res = this.widgetsActivatedBy[widgetName];
        return res ? res : "property";
    };
    /**
     * Sets the way the custom wiget is activated. The activation types are: property ("property"), question type ("type") or new/custom question type ("customtype"). A custom wiget may support all or only some of this activation types.
     * @param widgetName
     * @param activatedBy there are three possible variants: "property", "type" and "customtype"
     */
    CustomWidgetCollection.prototype.setActivatedBy = function (widgetName, activatedBy) {
        if (!widgetName || !activatedBy)
            return;
        var widget = this.getCustomWidgetByName(widgetName);
        if (!widget)
            return;
        this.widgetsActivatedBy[widgetName] = activatedBy;
        widget.activatedByChanged(activatedBy);
    };
    CustomWidgetCollection.prototype.clear = function () { this.widgetsValues = []; };
    CustomWidgetCollection.prototype.getCustomWidgetByName = function (name) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].name == name)
                return this.widgets[i];
        }
        return null;
    };
    CustomWidgetCollection.prototype.getCustomWidget = function (question) {
        for (var i = 0; i < this.widgetsValues.length; i++) {
            if (this.widgetsValues[i].isFit(question))
                return this.widgetsValues[i];
        }
        return null;
    };
    return CustomWidgetCollection;
}());

CustomWidgetCollection.Instance = new CustomWidgetCollection();


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactquestionelement__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyCustomWidget; });



var SurveyCustomWidget = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyCustomWidget, _super);
    function SurveyCustomWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.localeChangedHandler = function (sender) { return sender.customWidgetData.isNeedRender = true; };
        return _this;
    }
    SurveyCustomWidget.prototype._afterRender = function () {
        var el = this.refs['root'];
        if (this.questionBase.customWidget) {
            el = this.refs['widget'];
            if (!!el) {
                this.questionBase.customWidget.afterRender(this.questionBase, el);
                this.questionBase.customWidgetData.isNeedRender = false;
            }
        }
    };
    SurveyCustomWidget.prototype.componentDidMount = function () {
        if (this.questionBase) {
            this._afterRender();
            this.questionBase.localeChanged.add(this.localeChangedHandler);
        }
    };
    SurveyCustomWidget.prototype.componentDidUpdate = function () {
        if (this.questionBase) {
            this._afterRender();
        }
    };
    SurveyCustomWidget.prototype.componentWillUnmount = function () {
        var el = this.refs['root'];
        if (this.questionBase.customWidget) {
            el = this.refs['widget'];
            if (!!el) {
                this.questionBase.customWidget.willUnmount(this.questionBase, el);
            }
        }
        this.questionBase.localeChanged.remove(this.localeChangedHandler);
    };
    SurveyCustomWidget.prototype.render = function () {
        if (!this.questionBase || !this.creator) {
            return null;
        }
        if (!this.questionBase.visible) {
            return null;
        }
        var customWidget = this.questionBase.customWidget;
        if (customWidget.isDefaultRender) {
            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: 'widget' }, this.creator.createQuestionElement(this.questionBase));
        }
        var widget = null;
        if (customWidget.widgetJson.render) {
            widget = customWidget.widgetJson.render(this.questionBase);
        }
        else {
            if (customWidget.htmlTemplate) {
                var htmlValue = { __html: customWidget.htmlTemplate };
                return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: 'widget', dangerouslySetInnerHTML: htmlValue });
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { ref: 'widget' }, widget);
    };
    return SurveyCustomWidget;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["b" /* SurveyQuestionElementBase */]));



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactSurveyNavigationBase__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyNavigation; });



var SurveyNavigation = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyNavigation, _super);
    function SurveyNavigation(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePrevClick = _this.handlePrevClick.bind(_this);
        _this.handleNextClick = _this.handleNextClick.bind(_this);
        _this.handleCompleteClick = _this.handleCompleteClick.bind(_this);
        return _this;
    }
    SurveyNavigation.prototype.handlePrevClick = function (event) {
        this.survey.prevPage();
    };
    SurveyNavigation.prototype.handleNextClick = function (event) {
        this.survey.nextPage();
    };
    SurveyNavigation.prototype.handleCompleteClick = function (event) {
        this.survey.completeLastPage();
    };
    SurveyNavigation.prototype.render = function () {
        if (!this.survey || !this.survey.isNavigationButtonsShowing)
            return null;
        var prevButton = !this.survey.isFirstPage ? this.renderButton(this.handlePrevClick, this.survey.pagePrevText, this.css.navigation.prev) : null;
        var nextButton = !this.survey.isLastPage ? this.renderButton(this.handleNextClick, this.survey.pageNextText, this.css.navigation.next) : null;
        var completeButton = this.survey.isLastPage && this.survey.isEditMode ? this.renderButton(this.handleCompleteClick, this.survey.completeText, this.css.navigation.complete) : null;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.footer },
            prevButton,
            nextButton,
            completeButton));
    };
    SurveyNavigation.prototype.renderButton = function (click, text, btnClassName) {
        var style = { marginRight: "5px" };
        var className = this.css.navigationButton + (btnClassName ? ' ' + btnClassName : "");
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { className: className, style: style, type: "button", onClick: click, value: text });
    };
    return SurveyNavigation;
}(__WEBPACK_IMPORTED_MODULE_2__reactSurveyNavigationBase__["a" /* SurveyNavigationBase */]));



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactSurveyNavigationBase__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyProgress; });



var SurveyProgress = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyProgress, _super);
    function SurveyProgress(props) {
        var _this = _super.call(this, props) || this;
        _this.isTop = props.isTop;
        return _this;
    }
    SurveyProgress.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.isTop = nextProps.isTop;
    };
    Object.defineProperty(SurveyProgress.prototype, "progress", {
        get: function () { return this.survey.getProgress(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyProgress.prototype, "progressText", {
        get: function () { return this.survey.progressText; },
        enumerable: true,
        configurable: true
    });
    SurveyProgress.prototype.render = function () {
        var style = this.isTop ? { width: "60%" } : { width: "60%", marginTop: "10px" };
        var progressStyle = { width: "auto", minWidth: this.progress + "%", paddingLeft: "2px", paddingRight: "2px" };
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.css.progress, style: style },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: progressStyle, className: this.css.progressBar, role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100" },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, this.progressText))));
    };
    return SurveyProgress;
}(__WEBPACK_IMPORTED_MODULE_2__reactSurveyNavigationBase__["a" /* SurveyNavigationBase */]));



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactquestionelement__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactquestion__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reactquestionfactory__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_widget__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionMatrixDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionMatrixDropdownRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionMatrixDropdownCell; });






var SurveyQuestionMatrixDropdown = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionMatrixDropdown, _super);
    function SurveyQuestionMatrixDropdown(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdown.prototype, "question", {
        get: function () { return this.questionBase; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionMatrixDropdown.prototype.render = function () {
        if (!this.question)
            return null;
        var cssClasses = this.question.cssClasses;
        var headers = [];
        for (var i = 0; i < this.question.columns.length; i++) {
            var column = this.question.columns[i];
            var key = "column" + i;
            var minWidth = this.question.getColumnWidth(column);
            var columnStyle = minWidth ? { minWidth: minWidth } : {};
            var columnTitle = this.renderLocString(column.locTitle);
            headers.push(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("th", { key: key, style: columnStyle }, columnTitle));
        }
        var rows = [];
        var visibleRows = this.question.visibleRows;
        for (var i = 0; i < visibleRows.length; i++) {
            var row = visibleRows[i];
            rows.push(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyQuestionMatrixDropdownRow, { key: i, row: row, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode, creator: this.creator }));
        }
        var divStyle = this.question.horizontalScroll ? { overflowX: 'scroll' } : {};
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { style: divStyle },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("table", { className: cssClasses.root },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("thead", null,
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", null),
                        headers)),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tbody", null, rows))));
    };
    return SurveyQuestionMatrixDropdown;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["b" /* SurveyQuestionElementBase */]));

var SurveyQuestionMatrixDropdownRow = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionMatrixDropdownRow, _super);
    function SurveyQuestionMatrixDropdownRow(props) {
        var _this = _super.call(this, props) || this;
        _this.setProperties(props);
        return _this;
    }
    SurveyQuestionMatrixDropdownRow.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.setProperties(nextProps);
    };
    SurveyQuestionMatrixDropdownRow.prototype.setProperties = function (nextProps) {
        this.row = nextProps.row;
        this.creator = nextProps.creator;
    };
    SurveyQuestionMatrixDropdownRow.prototype.render = function () {
        if (!this.row)
            return null;
        var tds = [];
        for (var i = 0; i < this.row.cells.length; i++) {
            var cell = this.row.cells[i];
            var cellElement = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyQuestionMatrixDropdownCell, { key: "row" + i, cssClasses: this.cssClasses, cell: cell, creator: this.creator });
            tds.push(cellElement);
        }
        var rowText = this.renderLocString(this.row.locText);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("tr", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", null, rowText),
            tds));
    };
    return SurveyQuestionMatrixDropdownRow;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["c" /* ReactSurveyElement */]));

var SurveyQuestionMatrixDropdownCell = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionMatrixDropdownCell, _super);
    function SurveyQuestionMatrixDropdownCell(props) {
        var _this = _super.call(this, props) || this;
        _this.setProperties(props);
        return _this;
    }
    SurveyQuestionMatrixDropdownCell.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.setProperties(nextProps);
    };
    SurveyQuestionMatrixDropdownCell.prototype.setProperties = function (nextProps) {
        this.cell = nextProps.cell;
        this.creator = nextProps.creator;
    };
    SurveyQuestionMatrixDropdownCell.prototype.componentDidMount = function () {
        var el = this.refs["cell"];
        if (el && this.cell && this.cell.question.survey) {
            var options = { cell: this.cell, cellQuestion: this.cell.question, htmlElement: el, row: this.cell.row, column: this.cell.column };
            this.cell.question.survey.matrixAfterCellRender(this.cell.question, options);
        }
    };
    SurveyQuestionMatrixDropdownCell.prototype.render = function () {
        if (!this.cell)
            return null;
        var errors = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__reactquestion__["b" /* SurveyQuestionErrors */], { question: this.cell.question, cssClasses: this.cssClasses, creator: this.creator });
        var renderedCell = this.renderCell();
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("td", { ref: "cell", className: this.cssClasses.itemValue },
            errors,
            renderedCell));
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCell = function () {
        if (!this.cell.question.visible)
            return null;
        var customWidget = this.cell.question.customWidget;
        if (!customWidget) {
            return this.creator.createQuestionElement(this.cell.question);
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__custom_widget__["a" /* SurveyCustomWidget */], { creator: this.creator, question: this.cell.question });
    };
    return SurveyQuestionMatrixDropdownCell;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["c" /* ReactSurveyElement */]));

__WEBPACK_IMPORTED_MODULE_4__reactquestionfactory__["a" /* ReactQuestionFactory */].Instance.registerQuestion("matrixdropdown", function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyQuestionMatrixDropdown, props);
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_model__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["C"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["D"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["E"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["F"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["G"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["H"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["I"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["J"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["K"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["L"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["M"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["N"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["O"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["P"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["R"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["S"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["T"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["U"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["V"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["W"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["X"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_0"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_1"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_2"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_3"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_4"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_5"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_6"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_7"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_8"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_9"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_10"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_52", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_11"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_53", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_12"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_54", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_13"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_55", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_14"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_56", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_15"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_57", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_16"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_58", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_17"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_59", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_18"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_60", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_19"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_61", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_20"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_62", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_21"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_63", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_22"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_64", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_23"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_65", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_24"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_66", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_25"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_67", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_26"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_68", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_27"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_69", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_28"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_70", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_29"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_localization__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssbootstrapmaterial__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssbootstrapmaterial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_reactSurvey__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__react_reactSurvey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__react_reactsurveymodel__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__react_reactsurveymodel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__react_reactsurveymodel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__react_reactSurveyNavigationBase__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__react_reactSurveyNavigationBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__react_reactSurveyNavigation__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__react_reactSurveyNavigation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__react_reactpage__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10__react_reactpage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__react_reactpage__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__react_reactquestion__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_11__react_reactquestion__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_11__react_reactquestion__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__react_reactquestionelement__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__react_reactquestionelement__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_12__react_reactquestionelement__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__react_reactquestioncomment__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_13__react_reactquestioncomment__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_13__react_reactquestioncomment__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__react_reactquestioncheckbox__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_14__react_reactquestioncheckbox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_14__react_reactquestioncheckbox__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__react_reactquestiondropdown__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_15__react_reactquestiondropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__react_reactquestionmatrixdropdown__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_16__react_reactquestionmatrixdropdown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_16__react_reactquestionmatrixdropdown__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__react_reactquestionmatrix__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_17__react_reactquestionmatrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_17__react_reactquestionmatrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__react_reactquestionhtml__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_18__react_reactquestionhtml__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__react_reactquestionfile__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_19__react_reactquestionfile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__react_reactquestionmultipletext__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_20__react_reactquestionmultipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_20__react_reactquestionmultipletext__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__react_reactquestionradiogroup__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_21__react_reactquestionradiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__react_reactquestiontext__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_22__react_reactquestiontext__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__react_reactquestionboolean__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_23__react_reactquestionboolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__react_reactquestionempty__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_24__react_reactquestionempty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__react_reactquestionmatrixdynamic__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_25__react_reactquestionmatrixdynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_25__react_reactquestionmatrixdynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__react_reactquestionpaneldynamic__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_26__react_reactquestionpaneldynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__react_reactSurveyProgress__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_27__react_reactSurveyProgress__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__react_reactquestionrating__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_28__react_reactquestionrating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__react_reactSurveyWindow__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_29__react_reactSurveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__react_reactquestionfactory__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_30__react_reactquestionfactory__["a"]; });
// model

// localization

// helpers

// css standard

// css bootstrap

// css bootstrap + material

// react


























//Uncomment to include the "date" question type.
//export {default as SurveyQuestionDate} from "../plugins/react/reactquestiondate";


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

!function(global, factory) {
     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
}(this, function(exports) {
    function VNode(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
        this.key = attributes && attributes.key;
    }
    function h(nodeName, attributes) {
        var children, lastSimple, child, simple, i;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !0 && child !== !1) {
            if ('number' == typeof child) child = String(child);
            simple = 'string' == typeof child;
            if (simple && lastSimple) children[children.length - 1] += child; else {
                (children || (children = [])).push(child);
                lastSimple = simple;
            }
        }
        var p = new VNode(nodeName, attributes || void 0, children || EMPTY_CHILDREN);
        if (options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        if (props) for (var i in props) obj[i] = props[i];
        return obj;
    }
    function clone(obj) {
        return extend({}, obj);
    }
    function delve(obj, key) {
        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
        return obj;
    }
    function isFunction(obj) {
        return 'function' == typeof obj;
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function hashToClassName(c) {
        var str = '';
        for (var prop in c) if (c[prop]) {
            if (str) str += ' ';
            str += prop;
        }
        return str;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function createLinkedState(component, key, eventPath) {
        var path = key.split('.');
        return function(e) {
            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
            obj[path[i]] = v;
            component.setState(state);
        };
    }
    function enqueueRender(component) {
        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p._dirty) renderComponent(p);
    }
    function isFunctionalComponent(vnode) {
        var nodeName = vnode && vnode.nodeName;
        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
    }
    function buildFunctionalComponent(vnode, context) {
        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
    }
    function isSameNodeType(node, vnode) {
        if (isString(vnode)) return node instanceof Text;
        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else ;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
    }
    function getNodeProps(vnode) {
        var props = clone(vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function removeNode(node) {
        var p = node.parentNode;
        if (p) p.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var l = node._listeners || (node._listeners = {});
            name = toLowerCase(name.substring(2));
            if (value) {
                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            l[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name.match(/^xlink\:?(.+)/);
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this._listeners[e.type](options.event && options.event(e) || e);
    }
    function collectNode(node) {
        removeNode(node);
        if (node instanceof Element) {
            node._component = node._componentConstructor = null;
            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
            (nodes[_name] || (nodes[_name] = [])).push(node);
        }
    }
    function createNode(nodeName, isSvg) {
        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
        node.normalizedNodeName = name;
        return node;
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = parent && 'undefined' != typeof parent.ownerSVGElement;
            hydrating = dom && !(ATTR_KEY in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll) {
        var ref = vnode && vnode.attributes && vnode.attributes.ref;
        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
        if (null == vnode) vnode = '';
        if (isString(vnode)) {
            if (dom && dom instanceof Text && dom.parentNode) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                if (dom) recollectNodeTree(dom);
                dom = document.createTextNode(vnode);
            }
            return dom;
        }
        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
            out = createNode(nodeName, isSvgMode);
            while (dom.firstChild) out.appendChild(dom.firstChild);
            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom);
        }
        var fc = out.firstChild, props = out[ATTR_KEY];
        if (!props) {
            out[ATTR_KEY] = props = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        if (ref) (props.ref = ref)(out);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
        if (len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (hydrating || absorb || props || _child instanceof Text) children[childrenLen++] = _child;
        }
        if (vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && key in keyed) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                c = children[j];
                if (c && isSameNodeType(c, vchild)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
                dom.insertBefore(child, originalChildren[i] || null);
            }
        }
        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
        while (min <= childrenLen) {
            child = children[childrenLen--];
            if (child) recollectNodeTree(child);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component, !unmountOnly); else {
            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
            if (!unmountOnly) collectNode(node);
            var c;
            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if (!(attrs && name in attrs) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        if (attrs) for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name, list = components[name];
        if (list) list.push(component); else components[name] = [ component ];
    }
    function createComponent(Ctor, props, context) {
        var inst = new Ctor(props, context), list = components[Ctor.name];
        Component.call(inst, props, context);
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.nextBase = list[i].nextBase;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component._disable) {
            component._disable = !0;
            if (component.__ref = props.ref) delete props.ref;
            if (component.__key = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.prevContext) component.prevContext = component.context;
                component.context = context;
            }
            if (!component.prevProps) component.prevProps = component.props;
            component.props = props;
            component._disable = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__ref) component.__ref(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component._disable) {
            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
            component._dirty = !1;
            if (!skip) {
                if (component.render) rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if (isFunction(childComponent)) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
                        toUnmount = inst;
                        inst = createComponent(childComponent, childProps, context);
                        inst.nextBase = inst.nextBase || nextBase;
                        inst._parentComponent = component;
                        component._component = inst;
                        setComponentProps(inst, childProps, 0, context);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t._parentComponent) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            var fn, cb = component._renderCallbacks;
            if (cb) while (fn = cb.pop()) fn.call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent, !0);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.nextBase) {
                c.nextBase = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom);
            }
        }
        return dom;
    }
    function unmountComponent(component, remove) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component._disable = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner, remove); else if (base) {
            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
            component.nextBase = base;
            if (remove) {
                removeNode(base);
                collectComponent(component);
            }
            var c;
            while (c = base.lastChild) recollectNodeTree(c, !remove);
        }
        if (component.__ref) component.__ref(null);
        if (component.componentDidUnmount) component.componentDidUnmount();
    }
    function Component(props, context) {
        this._dirty = !0;
        this.context = context;
        this.props = props;
        if (!this.state) this.state = {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var lcCache = {};
    var toLowerCase = function(s) {
        return lcCache[s] || (lcCache[s] = s.toLowerCase());
    };
    var resolved = 'undefined' != typeof Promise && Promise.resolve();
    var defer = resolved ? function(f) {
        resolved.then(f);
    } : setTimeout;
    var EMPTY = {};
    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
    var NON_DIMENSION_PROPS = {
        boxFlex: 1,
        boxFlexGroup: 1,
        columnCount: 1,
        fillOpacity: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        fontWeight: 1,
        lineClamp: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        strokeOpacity: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    };
    var NON_BUBBLING_EVENTS = {
        blur: 1,
        error: 1,
        focus: 1,
        load: 1,
        resize: 1,
        scroll: 1
    };
    var items = [];
    var nodes = {};
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        linkState: function(key, eventPath) {
            var c = this._linkedStates || (this._linkedStates = {});
            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
        },
        setState: function(state, callback) {
            var s = this.state;
            if (!this.prevState) this.prevState = clone(s);
            extend(s, isFunction(state) ? state(s, this.props) : state);
            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function() {
            renderComponent(this, 2);
        },
        render: function() {}
    });
    exports.h = h;
    exports.cloneElement = cloneElement;
    exports.Component = Component;
    exports.render = render;
    exports.rerender = rerender;
    exports.options = options;
});
//# sourceMappingURL=preact.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.PropTypes = mod.exports;
  }
})(this, function (exports, module) {

  'use strict';

  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var ReactElement = {};

  ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };

  var emptyFunction = {
    thatReturns: function thatReturns(what) {
      return function () {
        return what;
      };
    }
  };

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];

        var preciseType = getPreciseType(propValue);

        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }

    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  module.exports = ReactPropTypes;
});

//# sourceMappingURL=index.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultBootstrapCss; });

var defaultBootstrapCss = {
    root: "",
    header: "panel-heading",
    body: "panel-body",
    footer: "panel-footer",
    navigationButton: "",
    navigation: { complete: "sv_complete_btn", prev: "sv_prev_btn", next: "sv_next_btn" },
    progress: "progress center-block", progressBar: "progress-bar",
    pageTitle: "",
    row: "",
    question: { mainRoot: "sv_qstn", title: "", description: "small", comment: "form-control", required: "", titleRequired: "", indent: 20 },
    panel: { title: "", container: "sv_p_container" },
    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
    boolean: { root: "sv_qbln form-inline", item: "checkbox" },
    checkbox: { root: "sv_qcbx form-inline", item: "checkbox", other: "" },
    comment: "form-control",
    dropdown: { root: "", control: "form-control", other: "" },
    matrix: { root: "table", label: "sv_q_m_label" },
    matrixdropdown: { root: "table" },
    matrixdynamic: { root: "table", button: "button" },
    paneldynamic: { root: "", button: "button" },
    multipletext: { root: "table", itemTitle: "", itemValue: "sv_q_mt_item_value form-control" },
    radiogroup: { root: "form-inline", item: "radio", label: "", other: "" },
    rating: { root: "btn-group", item: "btn btn-default", selected: "active" },
    text: "form-control",
    saveData: { root: "", saving: "alert alert-info", error: "alert alert-danger", success: "alert alert-success", saveAgainButton: "" },
    window: {
        root: "modal-content", body: "modal-body",
        header: {
            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__cssstandard__["b" /* surveyCss */]["bootstrap"] = defaultBootstrapCss;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultBootstrapMaterialCss; });

var defaultBootstrapMaterialCss = {
    root: "",
    header: "panel-heading",
    body: "panel-body",
    footer: "panel-footer",
    navigationButton: "", navigation: { complete: "sv_complete_btn", prev: "sv_prev_btn", next: "sv_next_btn" },
    progress: "progress center-block", progressBar: "progress-bar",
    pageTitle: "",
    row: "",
    question: { mainRoot: "sv_qstn form-group", title: "", description: "small", comment: "form-control", required: "", titleRequired: "", indent: 20 },
    panel: { title: "", container: "sv_p_container" },
    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
    boolean: { root: "sv_qbln form-inline", item: "checkbox" },
    checkbox: { root: "sv_qcbx form-inline", item: "checkbox", other: "" },
    comment: "form-control",
    dropdown: { root: "", control: "form-control", other: "" },
    matrix: { root: "table", row: "form-group", label: "sv_q_m_label radio-inline", itemValue: "form-control" },
    matrixdropdown: { root: "table", itemValue: "form-group" },
    matrixdynamic: { root: "table", button: "button" },
    paneldynamic: { root: "", button: "button" },
    multipletext: { root: "table", itemTitle: "", row: "form-group", itemValue: "sv_q_mt_item_value form-control" },
    radiogroup: { root: "form-inline", item: "radio-inline", label: "radio-inline", other: "" },
    rating: { root: "btn-group", item: "btn btn-default", selected: "active" },
    text: "form-control",
    saveData: { root: "", saving: "alert alert-info", error: "alert alert-danger", success: "alert alert-success", saveAgainButton: "" },
    window: {
        root: "modal-content", body: "modal-body",
        header: {
            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__cssstandard__["b" /* surveyCss */]["bootstrapmaterial"] = defaultBootstrapMaterialCss;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_arabic__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localization_czech__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localization_danish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localization_dutch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localization_finnish__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localization_french__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localization_german__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localization_greek__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localization_hungarian__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__localization_icelandic__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__localization_italian__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__localization_latvian__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__localization_polish__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__localization_portuguese__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__localization_romanian__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__localization_russian__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__localization_spanish__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__localization_swedish__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__localization_turkish__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__localization_simplified_chinese__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__localization_persian__ = __webpack_require__(62);























/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localizablestring__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__localizablestring__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__functionsfactory__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__functionsfactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conditions__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__conditions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__conditions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_8__conditions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__conditionsParser__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_9__conditionsParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__conditionProcessValue__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_10__conditionProcessValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_11__error__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__error__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_11__error__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__jsonobject__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__question_matrixdropdown__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_14__question_matrixdropdown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_14__question_matrixdropdown__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_matrixdynamic__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_15__question_matrixdynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_15__question_matrixdynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__question_matrix__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_16__question_matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_16__question_matrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__question_multipletext__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_17__question_multipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_17__question_multipletext__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__panel__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_18__panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_18__panel__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_18__panel__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_19__page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__question__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_20__question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__questionbase__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_21__questionbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__question_empty__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_22__question_empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__question_baseselect__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_23__question_baseselect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_23__question_baseselect__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__question_checkbox__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_24__question_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__question_comment__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_25__question_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__question_dropdown__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_26__question_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__questionfactory__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_27__questionfactory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_27__questionfactory__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__question_file__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_28__question_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__question_html__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_29__question_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__question_radiogroup__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_30__question_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__question_rating__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_31__question_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__question_text__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_32__question_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__question_boolean__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_33__question_boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__question_paneldynamic__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_34__question_paneldynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_34__question_paneldynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__survey__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_35__survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__trigger__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_36__trigger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_36__trigger__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_36__trigger__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_36__trigger__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_36__trigger__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__surveyWindow__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_37__surveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__textPreProcessor__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_38__textPreProcessor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__dxSurveyService__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_39__dxSurveyService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__surveyStrings__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_40__surveyStrings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_40__surveyStrings__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__questionCustomWidgets__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_41__questionCustomWidgets__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_41__questionCustomWidgets__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Version; });
// styles

var Version;
Version = "" + "0.12.35";









































//Uncomment to include the "date" question type.
//export {default as QuestionDateModel} from "../../plugins/question_date";


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export arabicSurveyStrings */

var arabicSurveyStrings = {
    pagePrevText: "السابق",
    pageNextText: "التالي",
    completeText: "انهاء- تم",
    progressText: "{1} صفحة {0} من",
    otherItemText: "نص آخر",
    emptySurvey: "لا توجد صفحة مرئية أو سؤال في المسح",
    completingSurvey: "شكرا لك لاستكمال الاستبيان!",
    loadingSurvey: "...يتم تحميل الاستبيان",
    optionsCaption: "...اختر",
    requiredError: ".يرجى الإجابة على السؤال",
    requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
    numericError: "يجب أن تكون القيمة الرقمية.",
    textMinLength: "الرجاء إدخال ما لا يقل عن {0} حرف",
    textMaxLength: "الرجاء إدخال أقل من {0} حرف",
    textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حرف",
    minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
    minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
    maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
    numericMinMax: "و'{0}' يجب أن تكون مساوية أو أكثر من {1} ويساوي أو أقل من {2}ا",
    numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
    numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
    invalidEmail: "رجاء قم بإدخال بريد الكتروني صحيح",
    urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
    urlGetChoicesError: "عاد طلب بيانات فارغة أو 'المسار' ممتلكات غير صحيحة ",
    exceedMaxSize: "وينبغي ألا يتجاوز حجم الملف {0}ا",
    otherRequiredError: "الرجاء إدخال قيمة أخرى",
    uploadingFile: "الملف الخاص بك تحميل. يرجى الانتظار عدة ثوان وحاول مرة أخرى",
    addRow: "اضافة صف",
    removeRow: "إزالة صف"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ar"] = arabicSurveyStrings;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export czechSurveyStrings */

var czechSurveyStrings = {
    pagePrevText: "Předchozí",
    pageNextText: "Další",
    completeText: "Hotovo",
    otherItemText: "Jiná odpověď (napište)",
    progressText: "Strana {0} z {1}",
    emptySurvey: "Průzkumu neobsahuje žádné otázky.",
    completingSurvey: "Děkujeme za vyplnění průzkumu!",
    loadingSurvey: "Probíhá načítání průzkumu...",
    optionsCaption: "Vyber...",
    requiredError: "Odpovězte prosím na otázku.",
    requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
    numericError: "V tomto poli lze zadat pouze čísla.",
    textMinLength: "Zadejte prosím alespoň {0} znaků.",
    textMaxLength: "Zadejte prosím méně než {0} znaků.",
    textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
    minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
    minSelectError: "Vyberte prosím alespoň {0} varianty.",
    maxSelectError: "Nevybírejte prosím více než {0} variant.",
    numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
    numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
    numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
    invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
    urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
    urlGetChoicesError: "Požadavek nevrátil data nebo cesta je neplatná",
    exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
    otherRequiredError: "Zadejte prosím jinou hodnotu.",
    uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
    addRow: "Přidat řádek",
    removeRow: "Odstranit"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["cz"] = czechSurveyStrings;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export danishSurveyStrings */

var danishSurveyStrings = {
    pagePrevText: "Tilbage",
    pageNextText: "Videre",
    completeText: "Færdig",
    progressText: "Side {0} af {1}",
    emptySurvey: "Der er ingen synlige spørgsmål.",
    completingSurvey: "Mange tak for din besvarelse!",
    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
    otherItemText: "Valgfrit svar...",
    optionsCaption: "Vælg...",
    requiredError: "Besvar venligst spørgsmålet.",
    numericError: "Angiv et tal.",
    textMinLength: "Angiv mindst {0} tegn.",
    minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
    numericMin: "'{0}' skal være lig med eller større end {1}",
    numericMax: "'{0}' skal være lig med eller mindre end {1}",
    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
    otherRequiredError: "Angiv en værdi for dit valgfrie svar."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["da"] = danishSurveyStrings;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export dutchSurveyStrings */
//Created on behalf https://github.com/Frank13

var dutchSurveyStrings = {
    pagePrevText: "Vorige",
    pageNextText: "Volgende",
    completeText: "Afsluiten",
    otherItemText: "Andere",
    progressText: "Pagina {0} van {1}",
    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
    completingSurvey: "Bedankt om deze vragenlijst in te vullen",
    loadingSurvey: "De vragenlijst is aan het laden...",
    optionsCaption: "Kies...",
    requiredError: "Gelieve een antwoord in te vullen",
    numericError: "Het antwoord moet een getal zijn",
    textMinLength: "Gelieve minsten {0} karakters in te vullen.",
    minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
    maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
    otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["nl"] = dutchSurveyStrings;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export finnishSurveyStrings */

var finnishSurveyStrings = {
    pagePrevText: "Edellinen",
    pageNextText: "Seuraava",
    completeText: "Valmis",
    otherItemText: "Muu (kuvaile)",
    progressText: "Sivu {0}/{1}",
    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
    loadingSurvey: "Kyselyä ladataan palvelimelta...",
    optionsCaption: "Valitse...",
    requiredError: "Vastaa kysymykseen, kiitos.",
    numericError: "Arvon tulee olla numeerinen.",
    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
    invalidEmail: "Syötä validi sähköpostiosoite.",
    otherRequiredError: "Ole hyvä ja syötä \"Muu (kuvaile)\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fi"] = finnishSurveyStrings;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export frenchSurveyStrings */
//Created on behalf https://github.com/Frank13

var frenchSurveyStrings = {
    pagePrevText: "Pr\u00e9c\u00e9dent",
    pageNextText: "Suivant",
    completeText: "Terminer",
    otherItemText: "Autre (pr\u00e9ciser)",
    progressText: "Page {0} sur {1}",
    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
    completingSurvey: "Merci d'avoir r\u00e9pondu au questionnaire!",
    loadingSurvey: "Le questionnaire est en cours de chargement...",
    optionsCaption: "Choisissez...",
    requiredError: "La r\u00e9ponse \u00e0 cette question est obligatoire.",
    requiredInAllRowsError: "Toutes les lignes sont obligatoires",
    numericError: "La r\u00e9ponse doit \u00eatre un nombre.",
    textMinLength: "Merci d'entrer au moins {0} symboles.",
    minSelectError: "Merci de s\u00e9lectionner au moins {0}r\u00e9ponses.",
    maxSelectError: "Merci de s\u00e9lectionner au plus {0}r\u00e9ponses.",
    numericMinMax: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1} et inf\u00e9rieure ou\u00e9gale \u00e0 {2}",
    numericMin: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1}",
    numericMax: "Votre r\u00e9ponse '{0}' doit \u00eatreinf\u00e9rieure ou \u00e9gale \u00e0 {1}",
    invalidEmail: "Merci d'entrer une adresse mail valide.",
    exceedMaxSize: "La taille du fichier ne doit pas exc\u00e9der {0}.",
    otherRequiredError: "Merci de pr\u00e9ciser le champ 'Autre'."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fr"] = frenchSurveyStrings;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export germanSurveyStrings */

var germanSurveyStrings = {
    pagePrevText: "Zurück",
    pageNextText: "Weiter",
    completeText: "Absenden",
    progressText: "Seite {0} von {1}",
    emptySurvey: "Es gibt keine sichtbare Frage.",
    completingSurvey: "Vielen Dank für die Beantwortung des Fragebogens!",
    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
    otherItemText: "Benutzerdefinierte Antwort...",
    optionsCaption: "Wählen...",
    requiredError: "Bitte beantworten Sie diese Frage.",
    numericError: "Der Wert sollte eine Zahl sein.",
    textMinLength: "Bitte geben Sie mindestens {0} Zeichen ein.",
    minSelectError: "Bitte wählen Sie mindestens {0} Einträge.",
    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Einträge.",
    numericMinMax: "'{0}' sollte gleich oder größer sein als {1} und gleich oder kleiner als {2}.",
    numericMin: "'{0}' sollte gleich oder größer sein als {1}.",
    numericMax: "'{0}' sollte gleich oder kleiner als {1} sein.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail Adresse ein.",
    exceedMaxSize: "Die Dateigröße darf {0} KB nicht überschreiten.",
    otherRequiredError: "Bitte geben Sie Ihre benutzerdefinierte Antwort ein."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["de"] = germanSurveyStrings;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export greekSurveyStrings */
//Created by https://github.com/agelospanagiotakis

var greekSurveyStrings = {
    pagePrevText: "Προηγούμενο",
    pageNextText: "Επόμενο",
    completeText: "Ολοκλήρωση",
    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
    progressText: "Σελίδα {0} από {1}",
    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
    optionsCaption: "Επιλέξτε...",
    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
    requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
    numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
    exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
    addRow: "Προσθήκη γραμμής",
    removeRow: "Αφαίρεση"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["gr"] = greekSurveyStrings;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export hungarianSurveyStrings */

var hungarianSurveyStrings = {
    pagePrevText: "Vissza",
    pageNextText: "Tovább",
    completeText: "Kész",
    otherItemText: "Egyéb (adja meg)",
    progressText: "{0}./{1} oldal",
    emptySurvey: "There is no visible page or question in the survey.",
    completingSurvey: "Köszönjük, hogy kitöltötte felmérésünket!",
    completingSurveyBefore: "Már kitöltötte a felmérést.",
    loadingSurvey: "Felmérés betöltése...",
    optionsCaption: "Válasszon...",
    value: "érték",
    requiredError: "Kérjük, válaszolja meg ezt a kérdést!",
    requiredInAllRowsError: "Kérjük adjon választ minden sorban!",
    numericError: "Az érték szám kell, hogy legyen!",
    textMinLength: "Adjon meg legalább {0} karaktert!",
    textMaxLength: "Legfeljebb {0} karaktert adjon meg!",
    textMinMaxLength: "Adjon meg legalább {0}, de legfeljebb {1} karaktert!",
    minRowCountError: "Töltsön ki minimum {0} sort!",
    minSelectError: "Válasszon ki legalább {0} lehetőséget!",
    maxSelectError: "Ne válasszon többet, mint {0} lehetőség!",
    numericMinMax: "'{0}' legyen nagyobb, vagy egyenlő, mint {1} és kisebb, vagy egyenlő, mint {2}!",
    numericMin: "'{0}' legyen legalább {1}!",
    numericMax: "The '{0}' ne legyen nagyobb, mint {1}!",
    invalidEmail: "Adjon meg egy valós email címet!",
    urlRequestError: "A lekérdezés hibával tért vissza: '{0}'. {1}",
    urlGetChoicesError: "A lekérdezés üres adattal tért vissza, vagy a 'path' paraméter helytelen.",
    exceedMaxSize: "A méret nem lehet nagyobb, mint {0}.",
    otherRequiredError: "Adja meg az egyéb értéket!",
    uploadingFile: "Feltöltés folyamatban. Várjon pár másodpercet, majd próbálja újra.",
    confirmDelete: "Törli ezt a rekordot?",
    keyDuplicationError: "Az értéknek egyedinek kell lennie.",
    addRow: "Sor hozzáadása",
    removeRow: "Eltávolítás",
    addPanel: "Új hozzáadása",
    removePanel: "Eltávolítás",
    choices_Item: "elem",
    matrix_column: "Oszlop",
    matrix_row: "Sor",
    savingData: "Eredmény mentése a szerverre...",
    savingDataError: "Egy hiba folytán nem tudtuk elmenteni az eredményt.",
    savingDataSuccess: "Eredmény sikeresen mentve!",
    saveAgainButton: "Próbálja újra"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["hu"] = hungarianSurveyStrings;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export icelandicSurveyStrings */

var icelandicSurveyStrings = {
    pagePrevText: "Tilbaka",
    pageNextText: "Áfram",
    completeText: "Lokið",
    otherItemText: "Hinn (skýring)",
    progressText: "Síða {0} of {1}",
    emptySurvey: "Það er enginn síða eða spurningar í þessari könnun.",
    completingSurvey: "Takk fyrir að fyllja út þessa könnun!",
    loadingSurvey: "Könnunin er að hlaða...",
    optionsCaption: "Veldu...",
    requiredError: "Vinsamlegast svarið spurningunni.",
    requiredInAllRowsError: "Vinsamlegast svarið spurningum í öllum röðum.",
    numericError: "Þetta gildi verður að vera tala.",
    textMinLength: "Það ætti að vera minnst {0} tákn.",
    textMaxLength: "Það ætti að vera mest {0} tákn.",
    textMinMaxLength: "Það ætti að vera fleiri en {0} og færri en {1} tákn.",
    minRowCountError: "Vinsamlegast fyllið úr að minnsta kosti {0} raðir.",
    minSelectError: "Vinsamlegast veljið að minnsta kosti {0} möguleika.",
    maxSelectError: "Vinsamlegast veljið ekki fleiri en {0} möguleika.",
    numericMinMax: "'{0}' ætti að vera meira en eða jafnt og {1} minna en eða jafnt og {2}",
    numericMin: "{0}' ætti að vera meira en eða jafnt og {1}",
    numericMax: "'{0}' ætti að vera minna en eða jafnt og {1}",
    invalidEmail: "Vinsamlegast sláið inn gilt netfang.",
    urlRequestError: "Beiðninn skilaði eftirfaranadi villu '{0}'. {1}",
    urlGetChoicesError: "Beiðninng skilaði engum gögnum eða slóðinn var röng",
    exceedMaxSize: "Skráinn skal ekki vera stærri en {0}.",
    otherRequiredError: "Vinamlegast fyllið út hitt gildið.",
    uploadingFile: "Skráinn þín var send. Vinsamlegast bíðið í nokkrar sekúndur og reynið aftur.",
    addRow: "Bæta við röð",
    removeRow: "Fjarlægja",
    choices_firstItem: "fyrsti hlutur",
    choices_secondItem: "annar hlutur",
    choices_thirdItem: "þriðji hlutur",
    matrix_column: "Dálkur",
    matrix_row: "Röð"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["is"] = icelandicSurveyStrings;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export italianSurveyStrings */

var italianSurveyStrings = {
    pagePrevText: "Precedente",
    pageNextText: "Successivo",
    completeText: "Salva",
    otherItemText: "Altro (descrivi)",
    progressText: "Pagina {0} di {1}",
    emptySurvey: "Non ci sono pagine o domande visibili nel questionario.",
    completingSurvey: "Grazie per aver completato il questionario!",
    loadingSurvey: "Caricamento del questionario in corso...",
    optionsCaption: "Scegli...",
    requiredError: "Campo obbligatorio",
    requiredInAllRowsError: "Completare tutte le righe",
    numericError: "Il valore deve essere numerico",
    textMinLength: "Inserire almeno {0} caratteri",
    textMaxLength: "Lunghezza massima consentita {0} caratteri",
    textMinMaxLength: "Inserire una stringa con minimo {0} e massimo {1} caratteri",
    minRowCountError: "Completare almeno {0} righe.",
    minSelectError: "Selezionare almeno {0} varianti.",
    maxSelectError: "Selezionare massimo {0} varianti.",
    numericMinMax: "'{0}' deve essere uguale o superiore a {1} e uguale o inferiore a {2}",
    numericMin: "'{0}' deve essere uguale o superiore a {1}",
    numericMax: "'{0}' deve essere uguale o inferiore a {1}",
    invalidEmail: "Inserire indirizzo mail valido",
    urlRequestError: "La richiesta ha risposto con un errore '{0}'. {1}",
    urlGetChoicesError: "La richiesta ha risposto null oppure il percorso non è corretto",
    exceedMaxSize: "Il file non può eccedere {0}",
    otherRequiredError: "Inserire il valore 'altro'",
    uploadingFile: "File in caricamento. Attendi alcuni secondi e riprova",
    addRow: "Aggiungi riga",
    removeRow: "Rimuovi riga",
    choices_Item: "Elemento",
    matrix_column: "Colonna",
    matrix_row: "Riga"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["it"] = italianSurveyStrings;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export latvianSurveyStrings */

var latvianSurveyStrings = {
    pagePrevText: "Atpakaļ",
    pageNextText: "Tālāk",
    completeText: "Pabeigt",
    progressText: "Lappuse {0} no {1}",
    emptySurvey: "Nav neviena jautājuma.",
    completingSurvey: "Pateicamies Jums par anketas aizpildīšanu!",
    loadingSurvey: "Ielāde no servera...",
    otherItemText: "Cits (lūdzu, aprakstiet!)",
    optionsCaption: "Izvēlēties...",
    requiredError: "Lūdzu, atbildiet uz jautājumu!",
    numericError: "Atbildei ir jābūt skaitlim.",
    textMinLength: "Lūdzu, ievadiet vismaz {0} simbolus.",
    minSelectError: "Lūdzu, izvēlieties vismaz {0} variantu.",
    maxSelectError: "Lūdzu, izvēlieties ne vairak par {0} variantiem.",
    numericMinMax: "'{0}' jābūt vienādam vai lielākam nekā {1}, un vienādam vai mazākam, nekā {2}",
    numericMin: "'{0}' jābūt vienādam vai lielākam {1}",
    numericMax: "'{0}' jābūt vienādam vai lielākam {1}",
    invalidEmail: "Lūdzu, ievadiet patiesu e-pasta adresi!",
    otherRequiredError: "Lūdzu, ievadiet datus laukā \"Cits\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["lv"] = latvianSurveyStrings;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export persianSurveyStrings */

var persianSurveyStrings = {
    pagePrevText: "قبلی",
    pageNextText: "بعدی",
    completeText: "تکمیل",
    otherItemText: "دیگر(توضیح)",
    progressText: "صفحه {0} از {1}",
    emptySurvey: "صفحه ای یا گزینه ای برای این پرسشنامه موجود نیست.",
    completingSurvey: "از شما بابت تکمیل این پرسشنامه متشکریم",
    completingSurveyBefore: "به نظر می رسد هم هم اکنون پرسشنامه را تکمیل کرده اید.",
    loadingSurvey: "درحال ایجاد پرسشنامه",
    optionsCaption: "انتخاب کنید...",
    value: "مقدار",
    requiredError: "لطفا به سوال پاسخ دهید",
    requiredInAllRowsError: "لطفا به تمام سطر های سوالات پاسخ دهید",
    numericError: "مقدار باید عددی باشد",
    textMinLength: "لطفا حداقل  {0} حرف وارد کنید",
    textMaxLength: "لطفا کمتر از  {0} حرف وارد کنید.",
    textMinMaxLength: "لطفا بیشتر از  {0} حرف و کمتر از {1} حرف وارد کنید.",
    minRowCountError: "لطفا حداقل {0} سطر وارد کنید.",
    minSelectError: "حداقل {0} انتخاب کنید.",
    maxSelectError: "لطفا بیشتر از  {0} انتخاب کنید.",
    numericMinMax: "'{0}' باید بین {1} و {2} باشد",
    numericMin: "'{0}' بزرگتر مساوی {1} باشد",
    numericMax: "'{0}' باید کوچکتر یا مساوی {1} باشد",
    invalidEmail: "لطفا ایمیل صحیح درج کنید",
    urlRequestError: "درخواست با خطا روبرو شد: '{0}'. {1}",
    urlGetChoicesError: "درخواست مسیری خالی بازگشت داده یا مسیر درست تنظیم نشده",
    exceedMaxSize: "بیشترین حجم مجاز فایل: {0}",
    otherRequiredError: "مقدار 'دیگر' را وارد کنید",
    uploadingFile: "فایل در حال آیلود می باشد. لطفا صبر کنید.",
    confirmDelete: "آیا مایل به حذف این ردیف هستید؟",
    keyDuplicationError: "این مقدار باید غیر تکراری باشد",
    addRow: "سطر جدید",
    removeRow: "حذف",
    addPanel: "جدید",
    removePanel: "حذف",
    choices_Item: "آیتم",
    matrix_column: "ستون",
    matrix_row: "سطر",
    savingData: "نتایج در حال ذخیره سازی در سرور می باشد",
    savingDataError: "خطایی در ذخیره سازی نتایج رخ داده است",
    savingDataSuccess: "نتایج با موفقیت ذخیره شد",
    saveAgainButton: "مجدد تلاش کنید"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fa"] = persianSurveyStrings;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export polishSurveyStrings */

var polishSurveyStrings = {
    pagePrevText: "Wstecz",
    pageNextText: "Dalej",
    completeText: "Gotowe",
    otherItemText: "Inna odpowiedź (wpisz)",
    progressText: "Strona {0} z {1}",
    emptySurvey: "Nie ma widocznych pytań.",
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    loadingSurvey: "Trwa wczytywanie ankiety...",
    optionsCaption: "Wybierz...",
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    numericError: "W tym polu można wpisać tylko liczby.",
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    invalidEmail: "Proszę podać prawidłowy adres email.",
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    otherRequiredError: "Proszę podać inną odpowiedź.",
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    addRow: "Dodaj wiersz",
    removeRow: "Usuń"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["pl"] = polishSurveyStrings;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export portugueseSurveyStrings */

var portugueseSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Próximo",
    completeText: "Finalizar",
    otherItemText: "Outros (descrever)",
    progressText: "Pagina {0} de {1}",
    emptySurvey: "Não há página visível ou pergunta na pesquisa.",
    completingSurvey: "Obrigado por finalizar a pesquisa!",
    completingSurveyBefore: "Nossos registros mostram que você já finalizou a pesquisa.",
    loadingSurvey: "A pesquisa está carregando...",
    optionsCaption: "Selecione...",
    value: "valor",
    requiredError: "Por favor, responda a pergunta.",
    requiredInAllRowsError: "Por favor, responda as perguntas em todas as linhas.",
    numericError: "O valor deve ser numérico.",
    textMinLength: "Por favor, insira pelo menos {0} caracteres.",
    textMaxLength: "Por favor, insira menos de {0} caracteres.",
    textMinMaxLength: "Por favor, insira mais de {0} e menos de {1} caracteres.",
    minRowCountError: "Preencha pelo menos {0} linhas.",
    minSelectError: "Selecione pelo menos {0} opções.",
    maxSelectError: "Por favor, selecione não mais do que {0} opções.",
    numericMinMax: "O '{0}' deve ser igual ou superior a {1} e igual ou menor que {2}",
    numericMin: "O '{0}' deve ser igual ou superior a {1}",
    numericMax: "O '{0}' deve ser igual ou inferior a {1}",
    invalidEmail: "Por favor, informe um e-mail válido.",
    urlRequestError: "A requisição retornou o erro '{0}'. {1}",
    urlGetChoicesError: "A requisição não retornou dados ou o 'caminho' da requisição não está correto",
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    otherRequiredError: "Por favor, informe o outro valor.",
    uploadingFile: "Seu arquivo está sendo carregado. Por favor, aguarde alguns segundos e tente novamente.",
    addRow: "Adicionar linha",
    removeRow: "Remover linha",
    addPanel: "Adicionar novo",
    removePanel: "Remover",
    choices_Item: "item",
    matrix_column: "Coluna",
    matrix_row: "Linha",
    savingData: "Os resultados esto sendo salvos no servidor...",
    savingDataError: "Ocorreu um erro e não foi possível salvar os resultados.",
    savingDataSuccess: "Os resultados foram salvos com sucesso!",
    saveAgainButton: "Tente novamente"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["pt"] = portugueseSurveyStrings;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export romanianSurveyStrings */

var romanianSurveyStrings = {
    pagePrevText: "Precedent",
    pageNextText: "Următor",
    completeText: "Finalizare",
    otherItemText: "Altul(precizaţi)",
    progressText: "Pagina {0} din {1}",
    emptySurvey: "Nu sunt întrebări pentru acest chestionar",
    completingSurvey: "Vă mulţumim pentru timpul acordat!",
    loadingSurvey: "Chestionarul se încarcă...",
    optionsCaption: "Alegeţi...",
    requiredError: "Răspunsul la această întrebare este obligatoriu.",
    requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
    numericError: "Răspunsul trebuie să fie numeric.",
    textMinLength: "Trebuie să introduci minim {0} caractere.",
    minSelectError: "Trebuie să selectezi minim {0} opţiuni.",
    maxSelectError: "Trebuie să selectezi maxim {0} opţiuni.",
    numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
    numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
    numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
    invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
    exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
    otherRequiredError: "Trebuie să completezi câmpul 'Altul'."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ro"] = romanianSurveyStrings;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export russianSurveyStrings */

var russianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далее",
    completeText: "Готово",
    progressText: "Страница {0} из {1}",
    emptySurvey: "Нет ни одного вопроса.",
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    loadingSurvey: "Загрузка с сервера...",
    otherItemText: "Другое (пожалуйста, опишите)",
    optionsCaption: "Выбрать...",
    requiredError: "Пожалуйста, ответьте на вопрос.",
    numericError: "Ответ должен быть числом.",
    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
    numericMin: "'{0}' должно быть равным или больше, чем {1}",
    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    otherRequiredError: "Пожалуйста, введите данные в поле \"Другое\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ru"] = russianSurveyStrings;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export simplifiedChineseSurveyStrings */

var simplifiedChineseSurveyStrings = {
    pagePrevText: "上一页",
    pageNextText: "下一页",
    completeText: "提交问卷",
    otherItemText: "填写其他答案",
    progressText: "第 {0} 页, 共 {1} 页",
    emptySurvey: "问卷中没有问题或页面",
    completingSurvey: "感谢您的参与!",
    loadingSurvey: "问卷正在加载中...",
    optionsCaption: "请选择...",
    requiredError: "请填写此问题",
    requiredInAllRowsError: "请填写所有行中问题",
    numericError: "答案必须是个数字",
    textMinLength: "答案长度至少 {0} 个字符",
    textMaxLength: "答案长度不能超过 {0} 个字符",
    textMinMaxLength: "答案长度必须在 {0} - {1} 个字符之间",
    minRowCountError: "最少需要填写 {0} 行答案",
    minSelectError: "最少需要选择 {0} 项答案",
    maxSelectError: "最多只能选择 {0} 项答案",
    numericMinMax: "答案 '{0}' 必须大于等于 {1} 且小于等于 {2}",
    numericMin: "答案 '{0}' 必须大于等于 {1}",
    numericMax: "答案 '{0}' 必须小于等于 {1}",
    invalidEmail: "请输入有效的 Email 地址",
    urlRequestError: "载入选项时发生错误 '{0}': {1}",
    urlGetChoicesError: "未能载入有效的选项或请求参数路径有误",
    exceedMaxSize: "文件大小不能超过 {0}",
    otherRequiredError: "请完成其他问题",
    uploadingFile: "文件上传中... 请耐心等待几秒后重试",
    addRow: "添加答案",
    removeRow: "删除答案",
    choices_Item: "选项",
    matrix_column: "列",
    matrix_row: "行",
    savingData: "正在将结果保存到服务器...",
    savingDataError: "在保存结果过程中发生了错误，结果未能保存",
    savingDataSuccess: "结果保存成功!",
    saveAgainButton: "请重试"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["zh-cn"] = simplifiedChineseSurveyStrings;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export spanishSurveyStrings */

var spanishSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Siguiente",
    completeText: "Completo",
    otherItemText: "Otro (describa)",
    progressText: "Página {0} de {1}",
    emptySurvey: "No hay página visible o pregunta en la encuesta.",
    completingSurvey: "Gracias por completar la encuesta!",
    loadingSurvey: "La encuesta está cargando...",
    optionsCaption: "Seleccione...",
    requiredError: "Por favor conteste la pregunta.",
    requiredInAllRowsError: "Por favor conteste las preguntas en cada hilera.",
    numericError: "La estimación debe ser numérica.",
    textMinLength: "Por favor entre por lo menos {0} símbolos.",
    textMaxLength: "Por favor entre menos de {0} símbolos.",
    textMinMaxLength: "Por favor entre más de {0} y menos de {1} símbolos.",
    minRowCountError: "Por favor llene por lo menos {0} hileras.",
    minSelectError: "Por favor seleccione por lo menos {0} variantes.",
    maxSelectError: "Por favor seleccione no más de {0} variantes.",
    numericMinMax: "El '{0}' debe de ser igual o más de {1} y igual o menos de {2}",
    numericMin: "El '{0}' debe ser igual o más de {1}",
    numericMax: "El '{0}' debe ser igual o menos de {1}",
    invalidEmail: "Por favor agregue un correo electrónico válido.",
    urlRequestError: "La solicitud regresó error '{0}'. {1}",
    urlGetChoicesError: "La solicitud regresó vacío de data o la propiedad 'trayectoria' no es correcta",
    exceedMaxSize: "El tamaño del archivo no debe de exceder {0}.",
    otherRequiredError: "Por favor agregue la otra estimación.",
    uploadingFile: "Su archivo se está subiendo. Por favor espere unos segundos e intente de nuevo.",
    addRow: "Agregue una hilera",
    removeRow: "Eliminar una hilera",
    choices_firstItem: "primer artículo",
    choices_secondItem: "segundo artículo",
    choices_thirdItem: "tercera artículo",
    matrix_column: "Columna",
    matrix_row: "Hilera"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["es"] = spanishSurveyStrings;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export swedishSurveyStrings */
//Create by Mattias Asplund

var swedishSurveyStrings = {
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Färdig",
    otherItemText: "Annat (beskriv)",
    progressText: "Sida {0} av {1}",
    emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
    completingSurvey: "Tack för att du genomfört enkäten!!",
    loadingSurvey: "Enkäten laddas...",
    optionsCaption: "Välj...",
    requiredError: "Var vänlig besvara frågan.",
    requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
    numericError: "Värdet ska vara numeriskt.",
    textMinLength: "Var vänlig ange minst {0} tecken.",
    minRowCountError: "Var vänlig fyll i minst {0} rader.",
    minSelectError: "Var vänlig välj åtminstone {0} varianter.",
    maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
    numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
    numericMin: "'{0}' ska vara lika med eller mer än {1}",
    numericMax: "'{0}' ska vara lika med eller mindre än {1}",
    invalidEmail: "Var vänlig ange en korrekt e-postadress.",
    urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
    urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
    exceedMaxSize: "Filstorleken får ej överstiga {0}.",
    otherRequiredError: "Var vänlig ange det andra värdet.",
    uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
    addRow: "Lägg till rad",
    removeRow: "Ta bort"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["sv"] = swedishSurveyStrings;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(1);
/* unused harmony export turkishSurveyStrings */

var turkishSurveyStrings = {
    pagePrevText: "Geri",
    pageNextText: "İleri",
    completeText: "Anketi Tamamla",
    otherItemText: "Diğer (açıklayınız)",
    progressText: "Sayfa {0} / {1}",
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
    loadingSurvey: "Anket sunucudan yükleniyor ...",
    optionsCaption: "Seçiniz ...",
    requiredError: "Lütfen soruya cevap veriniz",
    numericError: "Girilen değer numerik olmalıdır",
    textMinLength: "En az {0} sembol giriniz.",
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
    maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
    urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
    urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    otherRequiredError: "Lütfen diğer değerleri giriniz.",
    uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
    addRow: "Satır Ekle",
    removeRow: "Kaldır"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["tr"] = turkishSurveyStrings;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBooleanModel; });




/**
 * A Model for a boolean question.
 */
var QuestionBooleanModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBooleanModel, _super);
    function QuestionBooleanModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("label", _this, true);
        return _this;
    }
    QuestionBooleanModel.prototype.getType = function () {
        return "boolean";
    };
    Object.defineProperty(QuestionBooleanModel.prototype, "isIndeterminate", {
        /**
         * Returns true if the question check will be rendered in indeterminate mode. value is empty.
         */
        get: function () { return this.isEmpty(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "hasTitle", {
        get: function () { return this.showTitle; },
        enumerable: true,
        configurable: true
    });
    QuestionBooleanModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    Object.defineProperty(QuestionBooleanModel.prototype, "checkedValue", {
        /**
         * Get/set question value in 3 modes: indeterminate (value is empty), true (check is set) and false (check is unset).
         * @see valueTrue
         * @see valueFalse
         */
        get: function () {
            if (this.isEmpty())
                return null;
            return this.value == this.getValueTrue();
        },
        set: function (val) {
            if (this.isValueEmpty(val)) {
                this.value = null;
            }
            else {
                this.value = val == true ? this.getValueTrue() : this.getValueFalse();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "defaultValue", {
        /**
         * Set the default state of the check: "indeterminate" - default (value is empty/null), "true" - value equals valueTrue or true, "false" - value equals valueFalse or false.
         */
        get: function () { return this.getPropertyValue("defaultValue", "indeterminate"); },
        set: function (val) {
            this.setPropertyValue("defaultValue", val);
            this.updateValueWithDefaults();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "label", {
        /**
         * The checkbox label. If it is empty and showTitle is false then title is rendered
         * @see showTitle
         * @see title
         */
        get: function () { return this.getLocalizableStringText("label"); },
        set: function (val) { this.setLocalizableStringText("label", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "locLabel", {
        get: function () { return this.getLocalizableString("label"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "locDisplayLabel", {
        get: function () {
            if (this.locLabel.text)
                return this.locLabel;
            return this.showTitle ? this.locLabel : this.locTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "showTitle", {
        /**
         * Set this property to true to show the question title. It is hidden by default.
         */
        get: function () { return this.getPropertyValue("showTitle"); },
        set: function (val) { this.setPropertyValue("showTitle", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "valueTrue", {
        /**
         * Set this property, if you want to have a different value from true when check is set.
         */
        get: function () { return this.getPropertyValue("valueTrue"); },
        set: function (val) { this.setPropertyValue("valueTrue", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "valueFalse", {
        /**
         * Set this property, if you want to have a different value from false when check is unset.
         */
        get: function () { return this.getPropertyValue("valueFalse"); },
        set: function (val) { this.setPropertyValue("valueFalse", val); },
        enumerable: true,
        configurable: true
    });
    QuestionBooleanModel.prototype.getValueTrue = function () { return this.valueTrue ? this.valueTrue : true; };
    QuestionBooleanModel.prototype.getValueFalse = function () { return this.valueFalse ? this.valueFalse : false; };
    QuestionBooleanModel.prototype.setDefaultValue = function () {
        if (this.defaultValue == "true")
            this.checkedValue = true;
        if (this.defaultValue == "false")
            this.checkedValue = false;
        if (this.defaultValue == "indeterminate")
            this.value = null;
    };
    return QuestionBooleanModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("boolean", [{ name: "defaultValue", default: "indeterminate", choices: ["indeterminate", "false", "true"] },
    { name: "label:text", serializationProperty: "locLabel" },
    "showTitle:boolean", "valueTrue", "valueFalse"], function () { return new QuestionBooleanModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_1__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("boolean", function (name) { return new QuestionBooleanModel(name); });


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxModel; });




/**
 * A Model for a checkbox question
 */
var QuestionCheckboxModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxModel, _super);
    function QuestionCheckboxModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Object.defineProperty(QuestionCheckboxModel.prototype, "displayValue", {
        get: function () {
            if (this.isEmpty())
                return "";
            var items = this.visibleChoices;
            var values = this.value;
            var str = "";
            for (var i = 0; i < values.length; i++) {
                var valStr = this.getDisplayValue(items, values[i]);
                if (valStr) {
                    if (str)
                        str += ", ";
                    str += valStr;
                }
            }
            return str;
        },
        enumerable: true,
        configurable: true
    });
    QuestionCheckboxModel.prototype.getHasOther = function (val) {
        if (!val || !Array.isArray(val))
            return false;
        return val.indexOf(this.otherItem.value) >= 0;
    };
    QuestionCheckboxModel.prototype.valueFromData = function (val) {
        if (!val)
            return val;
        if (!Array.isArray(val))
            return [val];
        return _super.prototype.valueFromData.call(this, val);
    };
    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value)
                return val;
            if (this.hasUnknownValue(val[i])) {
                this.comment = val[i];
                var newVal = val.slice();
                newVal[i] = this.otherItem.value;
                return newVal;
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
        if (!val || !val.length)
            return val;
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value) {
                if (this.getComment()) {
                    var newVal = val.slice();
                    newVal[i] = this.getComment();
                    return newVal;
                }
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.getType = function () {
        return "checkbox";
    };
    return QuestionCheckboxModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("checkbox", [], function () { return new QuestionCheckboxModel(""); }, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("checkbox", function (name) { var q = new QuestionCheckboxModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCommentModel; });




/**
 * A Model for a comment question
 */
var QuestionCommentModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCommentModel, _super);
    function QuestionCommentModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("placeHolder", _this);
        return _this;
    }
    Object.defineProperty(QuestionCommentModel.prototype, "placeHolder", {
        /**
         * Use this property to set the input place holder.
         */
        get: function () { return this.getLocalizableStringText("placeHolder"); },
        set: function (val) { this.setLocalizableStringText("placeHolder", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCommentModel.prototype, "locPlaceHolder", {
        get: function () { return this.getLocalizableString("placeHolder"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCommentModel.prototype, "rows", {
        /**
         * The html rows attribute.
         */
        get: function () { return this.getPropertyValue("rows", 4); },
        set: function (val) { this.setPropertyValue("rows", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCommentModel.prototype, "cols", {
        /**
         * The html cols attribute.
         */
        get: function () { return this.getPropertyValue("cols", 50); },
        set: function (val) { this.setPropertyValue("cols", val); },
        enumerable: true,
        configurable: true
    });
    QuestionCommentModel.prototype.getType = function () {
        return "comment";
    };
    QuestionCommentModel.prototype.isEmpty = function () {
        return _super.prototype.isEmpty.call(this) || this.value === "";
    };
    return QuestionCommentModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("comment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 },
    { name: "placeHolder", serializationProperty: "locPlaceHolder" }], function () { return new QuestionCommentModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("comment", function (name) { return new QuestionCommentModel(name); });


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDropdownModel; });





/**
 * A Model for a dropdown question
 */
var QuestionDropdownModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionDropdownModel, _super);
    function QuestionDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("optionsCaption", _this);
        return _this;
    }
    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
        /**
         * Use this property to set the options caption different from the default value. The default value is taken from localization strings.
         */
        get: function () { return this.getLocalizableStringText("optionsCaption", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption")); },
        set: function (val) { this.setLocalizableStringText("optionsCaption", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionDropdownModel.prototype, "locOptionsCaption", {
        get: function () { return this.getLocalizableString("optionsCaption"); },
        enumerable: true,
        configurable: true
    });
    QuestionDropdownModel.prototype.getType = function () {
        return "dropdown";
    };
    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["b" /* QuestionSelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("dropdown", [{ name: "optionsCaption", serializationProperty: "locOptionsCaption" }], function () { return new QuestionDropdownModel(""); }, "selectbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("dropdown", function (name) { var q = new QuestionDropdownModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionEmptyModel; });



/**
 * A Model for an question that renders empty "div" tag. It used as a base class for some custom widgets
 */
var QuestionEmptyModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionEmptyModel, _super);
    function QuestionEmptyModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionEmptyModel.prototype.getType = function () {
        return "empty";
    };
    return QuestionEmptyModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("empty", [], function () { return new QuestionEmptyModel(""); }, "question");


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyStrings__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFileModel; });






/**
 * A Model for a file question
 */
var QuestionFileModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFileModel, _super);
    function QuestionFileModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isUploading = false;
        return _this;
    }
    QuestionFileModel.prototype.getType = function () {
        return "file";
    };
    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
        /**
         * Set it to true, to show the preview for the image files.
         */
        get: function () { return this.getPropertyValue("showPreview", false); },
        set: function (val) { this.setPropertyValue("showPreview", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "imageHeight", {
        /**
         * The image height.
         */
        get: function () { return this.getPropertyValue("imageHeight"); },
        set: function (val) { this.setPropertyValue("imageHeight", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "imageWidth", {
        /**
         * The image width.
         */
        get: function () { return this.getPropertyValue("imageWidth"); },
        set: function (val) { this.setPropertyValue("imageWidth", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "storeDataAsText", {
        /**
         * Set it to true to serialize file content as text.
         */
        get: function () { return this.getPropertyValue("storeDataAsText", false); },
        set: function (val) { this.setPropertyValue("storeDataAsText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "maxSize", {
        /**
         * Use this property to setup the maximum allowed file size.
         */
        get: function () { return this.getPropertyValue("maxSize", 0); },
        set: function (val) { this.setPropertyValue("maxSize", val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Load file programmatically.
     * @param file
     */
    QuestionFileModel.prototype.loadFile = function (file) {
        var self = this;
        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status) { self.isUploading = status == "uploading"; }))
            return;
        this.setFileValue(file);
    };
    QuestionFileModel.prototype.setFileValue = function (file) {
        if (!FileReader)
            return;
        if (!this.showPreview && !this.storeDataAsText)
            return;
        if (this.checkFileForErrors(file))
            return;
        var fileReader = new FileReader();
        var self = this;
        fileReader.onload = function (e) {
            if (self.showPreview) {
                self.previewValue = self.isFileImage(file) ? fileReader.result : null;
                self.fireCallback(self.previewValueLoadedCallback);
            }
            if (self.storeDataAsText) {
                self.value = fileReader.result;
            }
        };
        fileReader.readAsDataURL(file);
    };
    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.isUploading) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["c" /* CustomError */](__WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("uploadingFile")));
        }
    };
    QuestionFileModel.prototype.checkFileForErrors = function (file) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        if (this.maxSize > 0 && file.size > this.maxSize) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["d" /* ExceedSizeError */](this.maxSize));
        }
        if (errorLength != this.errors.length || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        return this.errors.length > 0;
    };
    QuestionFileModel.prototype.isFileImage = function (file) {
        if (!file || !file.type)
            return;
        var str = file.type.toLowerCase();
        return str.indexOf("image") == 0;
    };
    return QuestionFileModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () { return new QuestionFileModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("file", function (name) { return new QuestionFileModel(name); });


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionbase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHtmlModel; });




/**
 * A Model for html question. Unlike other questions it doesn't have value and title.
 */
var QuestionHtmlModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionHtmlModel, _super);
    function QuestionHtmlModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("html", _this);
        return _this;
    }
    QuestionHtmlModel.prototype.getType = function () {
        return "html";
    };
    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
        get: function () { return this.getLocalizableStringText("html", ""); },
        set: function (val) { this.setLocalizableStringText("html", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionHtmlModel.prototype, "locHtml", {
        get: function () { return this.getLocalizableString("html"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
        get: function () { return this.survey ? this.survey.processHtml(this.html) : this.html; },
        enumerable: true,
        configurable: true
    });
    return QuestionHtmlModel;
}(__WEBPACK_IMPORTED_MODULE_1__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("html", [{ name: "html:html", serializationProperty: "locHtml" }], function () { return new QuestionHtmlModel(""); }, "questionbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("html", function (name) { return new QuestionHtmlModel(name); });


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixModel; });







var MatrixRowModel = (function () {
    function MatrixRowModel(item, fullName, data, value) {
        this.fullName = fullName;
        this.item = item;
        this.data = data;
        this.rowValue = value;
    }
    Object.defineProperty(MatrixRowModel.prototype, "name", {
        get: function () { return this.item.value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixRowModel.prototype, "text", {
        get: function () { return this.item.text; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixRowModel.prototype, "locText", {
        get: function () {
            return this.item.locText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixRowModel.prototype, "value", {
        get: function () { return this.rowValue; },
        set: function (newValue) {
            this.rowValue = newValue;
            if (this.data)
                this.data.onMatrixRowChanged(this);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    MatrixRowModel.prototype.onValueChanged = function () {
    };
    return MatrixRowModel;
}());

/**
 * A Model for a simple matrix question.
 */
var QuestionMatrixModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixModel, _super);
    function QuestionMatrixModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isRowChanging = false;
        _this.columnsValue = _this.createItemValues("columns");
        _this.rowsValue = _this.createItemValues("rows");
        return _this;
    }
    QuestionMatrixModel.prototype.getType = function () {
        return "matrix";
    };
    Object.defineProperty(QuestionMatrixModel.prototype, "isAllRowRequired", {
        /**
         * Set this property to true, if you want a user to answer all rows.
         */
        get: function () { return this.getPropertyValue("isAllRowRequired", false); },
        set: function (val) { this.setPropertyValue("isAllRowRequired", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
        /**
         * Returns true, if there is at least one row.
         */
        get: function () {
            return this.rowsValue.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
        /**
         * The list of columns. A column has a value and an optional text
         */
        get: function () { return this.columnsValue; },
        set: function (newValue) {
            this.setPropertyValue("columns", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
        /**
         * The list of rows. A row has a value and an optional text
         */
        get: function () { return this.rowsValue; },
        set: function (newValue) {
            this.setPropertyValue("rows", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
        /**
         * Returns the list of rows as model objects.
         */
        get: function () {
            var result = new Array();
            var val = this.value;
            if (!val)
                val = {};
            for (var i = 0; i < this.rows.length; i++) {
                if (!this.rows[i].value)
                    continue;
                result.push(this.createMatrixRow(this.rows[i], this.name + '_' + this.rows[i].value.toString(), val[this.rows[i].value]));
            }
            if (result.length == 0) {
                result.push(this.createMatrixRow(new __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */](null), this.name, val));
            }
            this.generatedVisibleRows = result;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixModel.prototype.supportGoNextPageAutomatic = function () { return this.hasValuesInAllRows(); };
    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("requiredInAllRowsError")));
        }
    };
    QuestionMatrixModel.prototype.hasErrorInRows = function () {
        if (!this.isAllRowRequired)
            return false;
        return !this.hasValuesInAllRows();
    };
    QuestionMatrixModel.prototype.hasValuesInAllRows = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var val = rows[i].value;
            if (!val)
                return false;
        }
        return true;
    };
    QuestionMatrixModel.prototype.createMatrixRow = function (item, fullName, value) {
        return new MatrixRowModel(item, fullName, this, value);
    };
    QuestionMatrixModel.prototype.onValueChanged = function () {
        if (this.isRowChanging || !(this.generatedVisibleRows) || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.value;
        if (!val)
            val = {};
        if (this.rows.length == 0) {
            this.generatedVisibleRows[0].value = val;
        }
        else {
            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
                var row = this.generatedVisibleRows[i];
                var rowVal = val[row.name] ? val[row.name] : null;
                this.generatedVisibleRows[i].value = rowVal;
            }
        }
        this.isRowChanging = false;
    };
    Object.defineProperty(QuestionMatrixModel.prototype, "displayValue", {
        get: function () {
            var values = this.value;
            if (!values)
                return values;
            for (var key in values) {
                values[key] = __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getTextOrHtmlByValue(this.columns, values[key]);
            }
            return values;
        },
        enumerable: true,
        configurable: true
    });
    //IMatrixData
    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
        if (this.isRowChanging)
            return;
        this.isRowChanging = true;
        if (!this.hasRows) {
            this.setNewValue(row.value);
        }
        else {
            var newValue = this.value;
            if (!newValue) {
                newValue = {};
            }
            newValue[row.name] = row.value;
            this.setNewValue(newValue);
        }
        this.isRowChanging = false;
    };
    return QuestionMatrixModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("matrix", [{ name: "columns:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getData(obj.columns); }, onSetValue: function (obj, value) { obj.columns = value; } },
    { name: "rows:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getData(obj.rows); }, onSetValue: function (obj, value) { obj.rows = value; } },
    "isAllRowRequired:boolean"], function () { return new QuestionMatrixModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrix", function (name) { var q = new QuestionMatrixModel(name); q.rows = __WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].DefaultRows; q.columns = __WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].DefaultColums; return q; });


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDropdownRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDropdownModel; });





var MatrixDropdownRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownRowModel, _super);
    function MatrixDropdownRowModel(name, item, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.name = name;
        _this.item = item;
        _this.buildCells();
        return _this;
    }
    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
        get: function () { return this.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModel.prototype, "text", {
        get: function () { return this.item.text; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModel.prototype, "locText", {
        get: function () { return this.item.locText; },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["c" /* MatrixDropdownRowModelBase */]));

/**
 * A Model for a matrix dropdown question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors.
 */
var QuestionMatrixDropdownModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModel, _super);
    function QuestionMatrixDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowsValue = _this.createItemValues("rows");
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("rows", function () { self.generatedVisibleRows = null; });
        return _this;
    }
    QuestionMatrixDropdownModel.prototype.getType = function () {
        return "matrixdropdown";
    };
    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "displayValue", {
        get: function () {
            var values = this.value;
            if (!values)
                return values;
            var rows = this.visibleRows;
            for (var i = 0; i < rows.length; i++) {
                var rowValue = this.rows[i].value;
                var val = values[rowValue];
                if (!val)
                    continue;
                values[rowValue] = this.getRowDisplayValue(rows[i], val);
            }
            return values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
        /**
         * The list of rows. A row has a value and an optional text
         */
        get: function () { return this.rowsValue; },
        set: function (val) {
            this.setPropertyValue("rows", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModel.prototype.generateRows = function () {
        var result = new Array();
        if (!this.rows || this.rows.length === 0)
            return result;
        var val = this.value;
        if (!val)
            val = {};
        for (var i = 0; i < this.rows.length; i++) {
            if (!this.rows[i].value)
                continue;
            result.push(this.createMatrixRow(this.rows[i], val[this.rows[i].value]));
        }
        return result;
    };
    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (item, value) {
        var row = new MatrixDropdownRowModel(item.value, item, this, value);
        this.onMatrixRowCreated(row);
        return row;
    };
    return QuestionMatrixDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["d" /* QuestionMatrixDropdownModelBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdown", [{ name: "rows:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].getData(obj.rows); }, onSetValue: function (obj, value) { obj.rows = value; } }], function () { return new QuestionMatrixDropdownModel(""); }, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdropdown", function (name) { var q = new QuestionMatrixDropdownModel(name); q.choices = [1, 2, 3, 4, 5]; q.rows = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].DefaultColums; __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["d" /* QuestionMatrixDropdownModelBase */].addDefaultColumns(q); return q; });


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDynamicRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDynamicModel; });






var MatrixDynamicRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDynamicRowModel, _super);
    function MatrixDynamicRowModel(index, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.index = index;
        _this.buildCells();
        return _this;
    }
    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
        get: function () { return this.id; },
        enumerable: true,
        configurable: true
    });
    return MatrixDynamicRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["c" /* MatrixDropdownRowModelBase */]));

/**
 * A Model for a matrix dymanic question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors.
 * An end-user may dynamically add/remove rows, unlike in matrix dropdown question.
 */
var QuestionMatrixDynamicModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamicModel, _super);
    function QuestionMatrixDynamicModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowCounter = 0;
        _this.rowCountValue = 2;
        _this.createLocalizableString("confirmDeleteText", _this);
        _this.createLocalizableString("keyDuplicationError", _this);
        _this.createLocalizableString("addRowText", _this);
        _this.createLocalizableString("removeRowText", _this);
        return _this;
    }
    QuestionMatrixDynamicModel.prototype.getType = function () {
        return "matrixdynamic";
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "confirmDelete", {
        /**
         * Set it to true, to show a confirmation dialog on removing a row
         * @see ConfirmDeleteText
         */
        get: function () { return this.getPropertyValue("confirmDelete", false); },
        set: function (val) { this.setPropertyValue("confirmDelete", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "keyName", {
        /**
         * Set it to a column name and the library shows duplication error, if there are same values in different rows in the column.
         * @see keyDuplicationError
         */
        get: function () { return this.getPropertyValue("keyName", ""); },
        set: function (val) { this.setPropertyValue("keyName", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
        /**
         * The number of rows in the matrix.
         * @see minRowCount
         * @see maxRowCount
         */
        get: function () { return this.rowCountValue; },
        set: function (val) {
            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount)
                return;
            var prevValue = this.rowCountValue;
            this.rowCountValue = val;
            if (this.value && this.value.length > val) {
                var qVal = this.value;
                qVal.splice(val);
                this.value = qVal;
            }
            if (this.isLoadingFromJson)
                return;
            if (this.generatedVisibleRows) {
                this.generatedVisibleRows.splice(val);
                for (var i = prevValue; i < val; i++) {
                    this.generatedVisibleRows.push(this.createMatrixRow(null));
                }
            }
            this.fireCallback(this.rowCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "minRowCount", {
        /**
         * The minimum row count. A user could not delete a row if the rowCount equals to minRowCount
         * @see rowCount
         * @see maxRowCount
         */
        get: function () { return this.getPropertyValue("minRowCount", 0); },
        set: function (val) {
            if (val < 0)
                val = 0;
            if (val == this.minRowCount || val > this.maxRowCount)
                return;
            this.setPropertyValue("minRowCount", val);
            if (this.rowCount < val)
                this.rowCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "maxRowCount", {
        /**
         * The maximum row count. A user could not add a row if the rowCount equals to maxRowCount
         * @see rowCount
         * @see minRowCount
         */
        get: function () { return this.getPropertyValue("maxRowCount", QuestionMatrixDynamicModel.MaxRowCount); },
        set: function (val) {
            if (val <= 0)
                return;
            if (val > QuestionMatrixDynamicModel.MaxRowCount)
                val = QuestionMatrixDynamicModel.MaxRowCount;
            if (val == this.maxRowCount || val < this.minRowCount)
                return;
            this.setPropertyValue("maxRowCount", val);
            if (this.rowCount > val)
                this.rowCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "canAddRow", {
        /**
         * Returns true, if a new row can be added.
         * @see maxRowCount
         * @see canRemoveRow
         * @see rowCount
         */
        get: function () { return this.rowCount < this.maxRowCount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "canRemoveRow", {
        /**
         * Returns true, if a row can be removed.
         * @see minRowCount
         * @see canAddRow
         * @see rowCount
         */
        get: function () { return this.rowCount > this.minRowCount; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates and add a new row.
     */
    QuestionMatrixDynamicModel.prototype.addRow = function () {
        if (!this.canAddRow)
            return;
        var prevRowCount = this.rowCount;
        this.rowCount = this.rowCount + 1;
        if (this.data) {
            this.runCellsCondition(this.data.getAllValues());
        }
        if (this.survey) {
            if (prevRowCount + 1 == this.rowCount)
                this.survey.matrixRowAdded(this);
        }
    };
    /**
     * Removes a row by it's index. If confirmDelete is true, show a confirmation dialog
     * @param index a row index, from 0 to rowCount - 1
     * @see removeRow
     * @see confirmDelete
     */
    QuestionMatrixDynamicModel.prototype.removeRowUI = function (value) {
        if (!this.confirmDelete || confirm(this.confirmDeleteText)) {
            this.removeRow(value);
        }
    };
    /**
     * Removes a row by it's index.
     * @param index a row index, from 0 to rowCount - 1
     */
    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
        if (!this.canRemoveRow)
            return;
        if (index < 0 || index >= this.rowCount)
            return;
        if (this.survey) {
            var row = this.generatedVisibleRows ? this.generatedVisibleRows[index] : null;
            this.survey.matrixRowRemoved(this, index, row);
        }
        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
            this.generatedVisibleRows.splice(index, 1);
        }
        if (this.value) {
            var val = this.createNewValue(this.value);
            val.splice(index, 1);
            val = this.deleteRowValue(val, null);
            this.value = val;
        }
        this.rowCountValue--;
        this.fireCallback(this.rowCountChangedCallback);
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "confirmDeleteText", {
        /**
         * Use this property to change the default text showing in the confirmation delete dialog on removing a row.
         */
        get: function () { return this.getLocalizableStringText("confirmDeleteText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("confirmDelete")); },
        set: function (val) { this.setLocalizableStringText("confirmDeleteText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locConfirmDeleteText", {
        get: function () { return this.getLocalizableString("confirmDeleteText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "keyDuplicationError", {
        /**
         * The duplication value error text. Set it to show the text different from the default.
         * @see keyName
         */
        get: function () { return this.getLocalizableStringText("keyDuplicationError", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("keyDuplicationError")); },
        set: function (val) { this.setLocalizableStringText("keyDuplicationError", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locKeyDuplicationError", {
        get: function () { return this.getLocalizableString("keyDuplicationError"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
        /**
         * Use this property to change the default value of add row button text.
         */
        get: function () { return this.getLocalizableStringText("addRowText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("addRow")); },
        set: function (val) { this.setLocalizableStringText("addRowText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locAddRowText", {
        get: function () { return this.getLocalizableString("addRowText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
        /**
         * Use this property to change the default value of remove row button text.
         */
        get: function () { return this.getLocalizableStringText("removeRowText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("removeRow")); },
        set: function (val) { this.setLocalizableStringText("removeRowText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locRemoveRowText", {
        get: function () { return this.getLocalizableString("removeRowText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "displayValue", {
        get: function () {
            var values = this.value;
            if (!values)
                return values;
            var rows = this.visibleRows;
            for (var i = 0; i < rows.length && i < values.length; i++) {
                var val = values[i];
                if (!val)
                    continue;
                values[i] = this.getRowDisplayValue(rows[i], val);
            }
            return values;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.supportGoNextPageAutomatic = function () { return false; };
    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("minRowCountError")["format"](this.minRowCount)));
        }
    };
    QuestionMatrixDynamicModel.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var prevValue = _super.prototype.hasErrors.call(this, fireCallback);
        return this.isValueDuplicated() || prevValue;
    };
    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
        if (this.minRowCount <= 0 || !this.generatedVisibleRows)
            return false;
        var res = false;
        var setRowCount = 0;
        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
            var row = this.generatedVisibleRows[rowIndex];
            if (!row.isEmpty)
                setRowCount++;
        }
        return setRowCount < this.minRowCount;
    };
    QuestionMatrixDynamicModel.prototype.isValueDuplicated = function () {
        if (!this.keyName || !this.generatedVisibleRows)
            return false;
        var column = this.getColumnName(this.keyName);
        if (!column)
            return false;
        var keyValues = [];
        var res = false;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            res = this.isValueDuplicatedInRow(this.generatedVisibleRows[i], column, keyValues) || res;
        }
        return res;
    };
    QuestionMatrixDynamicModel.prototype.isValueDuplicatedInRow = function (row, column, keyValues) {
        var question = row.getQuestionByColumn(column);
        if (!question || question.isEmpty())
            return false;
        var value = question.value;
        for (var i = 0; i < keyValues.length; i++) {
            if (value == keyValues[i]) {
                question.addError(new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* CustomError */](this.keyDuplicationError));
                return true;
            }
        }
        keyValues.push(value);
        return false;
    };
    QuestionMatrixDynamicModel.prototype.generateRows = function () {
        var result = new Array();
        if (this.rowCount === 0)
            return result;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.rowCount; i++) {
            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
        var row = new MatrixDynamicRowModel(this.rowCounter++, this, value);
        this.onMatrixRowCreated(row);
        return row;
    };
    QuestionMatrixDynamicModel.prototype.onBeforeValueChanged = function (val) {
        var newRowCount = val && Array.isArray(val) ? val.length : 0;
        if (newRowCount <= this.rowCount)
            return;
        this.rowCountValue = newRowCount;
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows = null;
            this.generatedVisibleRows = this.visibleRows;
        }
    };
    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
        var result = curValue;
        if (!result)
            result = [];
        var r = [];
        if (result.length > this.rowCount)
            result.splice(this.rowCount - 1);
        for (var i = result.length; i < this.rowCount; i++) {
            result.push({});
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
        var isEmpty = true;
        for (var i = 0; i < newValue.length; i++) {
            if (Object.keys(newValue[i]).length > 0) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty ? null : newValue;
    };
    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
    };
    QuestionMatrixDynamicModel.prototype.getRowValueCore = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        if (!this.generatedVisibleRows)
            return {};
        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
    };
    return QuestionMatrixDynamicModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["d" /* QuestionMatrixDropdownModelBase */]));

QuestionMatrixDynamicModel.MaxRowCount = 100;
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 }, { name: "maxRowCount:number", default: QuestionMatrixDynamicModel.MaxRowCount },
    { name: "keyName" }, { name: "keyDuplicationError", serializationProperty: "locKeyDuplicationError" },
    { name: "confirmDelete:boolean" }, { name: "confirmDeleteText", serializationProperty: "locConfirmDeleteText" },
    { name: "addRowText", serializationProperty: "locAddRowText" }, { name: "removeRowText", serializationProperty: "locRemoveRowText" }], function () { return new QuestionMatrixDynamicModel(""); }, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdynamic", function (name) { var q = new QuestionMatrixDynamicModel(name); q.choices = [1, 2, 3, 4, 5]; __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["d" /* QuestionMatrixDropdownModelBase */].addDefaultColumns(q); return q; });


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleTextItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMultipleTextModel; });







var MultipleTextItemModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleTextItemModel, _super);
    function MultipleTextItemModel(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.idValue = MultipleTextItemModel.getItemId();
        _this.validators = new Array();
        var self = _this;
        _this.name = name;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) { return self.getFullTitle(text); };
        _this.title = title;
        _this.createLocalizableString("placeHolder", _this);
        return _this;
    }
    MultipleTextItemModel.getItemId = function () {
        return "sp_" + MultipleTextItemModel.itemCounter++;
    };
    MultipleTextItemModel.prototype.getType = function () {
        return "multipletextitem";
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "name", {
        /**
         * The item name.
         */
        get: function () { return this.getPropertyValue("name"); },
        set: function (val) {
            this.setPropertyValue("name", val);
            if (this.locTitle) {
                this.locTitle.onChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.setData = function (data) {
        this.data = data;
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "isRequired", {
        /**
         * Set this property to true, to make the item a required. If a user doesn't fill the item then a validation error will be generated.
         */
        get: function () { return this.getPropertyValue("isRequired", false); },
        set: function (val) { this.setPropertyValue("isRequired", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "inputType", {
        /**
         * Use this property to change the default input type.
         */
        get: function () { return this.getPropertyValue("inputType", "text"); },
        set: function (val) {
            this.setPropertyValue("inputType", val.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
        /**
         * Item title. If it is empty, the item name is rendered as title. This property supports markdown.
         * @see name
         */
        get: function () { return this.getLocalizableStringText("title", this.name); },
        set: function (val) { this.setLocalizableStringText("title", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "locTitle", {
        get: function () { return this.getLocalizableString("title"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "fullTitle", {
        /**
         * Returns the text or html for rendering the title.
         */
        get: function () { return this.getFullTitle(this.locTitle.textOrHtml); },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.getFullTitle = function (str) {
        if (!str)
            str = this.name;
        if (this.isRequired && this.data)
            str = this.data.getIsRequiredText() + ' ' + str;
        return str;
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "placeHolder", {
        /**
         * The input place holder.
         */
        get: function () { return this.getLocalizableStringText("placeHolder"); },
        set: function (val) { this.setLocalizableStringText("placeHolder", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "locPlaceHolder", {
        get: function () { return this.getLocalizableString("placeHolder"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
        /**
         * The item value.
         */
        get: function () {
            return this.data ? this.data.getMultipleTextValue(this.name) : null;
        },
        set: function (value) {
            if (this.data != null) {
                this.data.setMultipleTextValue(this.name, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {
        if (this.valueChangedCallback)
            this.valueChangedCallback(newValue);
    };
    //IValidatorOwner
    MultipleTextItemModel.prototype.getValidatorTitle = function () { return this.title; };
    Object.defineProperty(MultipleTextItemModel.prototype, "validatedValue", {
        get: function () { return this.value; },
        set: function (val) { this.value = val; },
        enumerable: true,
        configurable: true
    });
    //ILocalizableOwner
    MultipleTextItemModel.prototype.getLocale = function () { return this.data ? this.data.getLocale() : ""; };
    MultipleTextItemModel.prototype.getMarkdownHtml = function (text) { return this.data ? this.data.getMarkdownHtml(text) : null; };
    return MultipleTextItemModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* Base */]));

MultipleTextItemModel.itemCounter = 100;
/**
 * A Model for a multiple text question.
 */
var QuestionMultipleTextModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleTextModel, _super);
    function QuestionMultipleTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.itemsValues = new Array();
        _this.isMultipleItemValueChanging = false;
        var self = _this;
        _this.itemsValues = _this.createNewArray("items", function (item) { item.setData(self); });
        _this.registerFunctionOnPropertyValueChanged("items", function () { self.fireCallback(self.colCountChangedCallback); });
        _this.registerFunctionOnPropertyValueChanged("colCount", function () { self.fireCallback(self.colCountChangedCallback); });
        return _this;
    }
    QuestionMultipleTextModel.prototype.getType = function () {
        return "multipletext";
    };
    QuestionMultipleTextModel.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        this.fireCallback(this.colCountChangedCallback);
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
        /**
         * The list of input items.
         */
        get: function () { return this.itemsValues; },
        set: function (val) { this.setPropertyValue("items", val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a new text item.
     * @param name a item name
     * @param title a item title (optional)
     */
    QuestionMultipleTextModel.prototype.addItem = function (name, title) {
        if (title === void 0) { title = null; }
        var item = this.createTextItem(name, title);
        this.items.push(item);
        return item;
    };
    QuestionMultipleTextModel.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onLocaleChanged();
        }
    };
    QuestionMultipleTextModel.prototype.supportGoNextPageAutomatic = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (!this.items[i].value)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
        /**
         * The number of columns. Items are rendred in one line if the value is 0.
         */
        get: function () { return this.getPropertyValue("colCount", 1); },
        set: function (val) {
            if (val < 1 || val > 4)
                return;
            this.setPropertyValue("colCount", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMultipleTextModel.prototype, "itemSize", {
        /**
         * The default text input size.
         */
        get: function () { return this.getPropertyValue("itemSize", 25); },
        set: function (val) { this.setPropertyValue("itemSize", val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list of rendered rows.
     */
    QuestionMultipleTextModel.prototype.getRows = function () {
        var colCount = this.colCount;
        var items = this.items;
        var rows = [];
        var index = 0;
        for (var i = 0; i < items.length; i++) {
            if (index == 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(items[i]);
            index++;
            if (index >= colCount) {
                index = 0;
            }
        }
        return rows;
    };
    QuestionMultipleTextModel.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        this.onItemValueChanged();
    };
    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
        return new MultipleTextItemModel(name, title);
    };
    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
        if (this.isMultipleItemValueChanging)
            return;
        for (var i = 0; i < this.items.length; i++) {
            var itemValue = null;
            if (this.value && (this.items[i].name in this.value)) {
                itemValue = this.value[this.items[i].name];
            }
            this.items[i].onValueChanged(itemValue);
        }
    };
    QuestionMultipleTextModel.prototype.runValidators = function () {
        var error = _super.prototype.runValidators.call(this);
        if (error != null)
            return error;
        for (var i = 0; i < this.items.length; i++) {
            error = new __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* ValidatorRunner */]().run(this.items[i]);
            if (error != null)
                return error;
        }
        return null;
    };
    QuestionMultipleTextModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.isRequired && !item.value) {
                errors.push(new __WEBPACK_IMPORTED_MODULE_6__error__["a" /* AnswerRequiredError */]());
            }
        }
    };
    //IMultipleTextData
    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
        if (!this.value)
            return null;
        return this.value[name];
    };
    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
        this.isMultipleItemValueChanging = true;
        var newValue = this.value;
        if (!newValue) {
            newValue = {};
        }
        newValue[name] = value;
        this.setNewValue(newValue);
        this.isMultipleItemValueChanging = false;
    };
    QuestionMultipleTextModel.prototype.getIsRequiredText = function () {
        return this.survey ? this.survey.requiredText : "";
    };
    return QuestionMultipleTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("multipletextitem", ["name", "isRequired:boolean", { name: "placeHolder", serializationProperty: "locPlaceHolder" },
    { name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] },
    { name: "title", serializationProperty: "locTitle" }, { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () { return new MultipleTextItemModel(""); });
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("multipletext", [{ name: "!items:textitems", className: "multipletextitem" },
    { name: "itemSize:number", default: 25 }, { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }], function () { return new QuestionMultipleTextModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("multipletext", function (name) { var q = new QuestionMultipleTextModel(name); q.addItem("text1"); q.addItem("text2"); return q; });


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyStrings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textPreProcessor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__panel__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionPanelDynamicItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPanelDynamicModel; });










var QuestionPanelDynamicItem = (function () {
    function QuestionPanelDynamicItem(data, panel) {
        this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_3__textPreProcessor__["a" /* TextPreProcessor */]();
        this.data = data;
        this.panelValue = panel;
        this.panel.setSurveyImpl(this);
        this.panel.updateCustomWidgets();
        var self = this;
        this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_3__textPreProcessor__["a" /* TextPreProcessor */]();
        this.textPreProcessor.onHasValue = function (name) { return self.hasProcessedTextValue(name); };
        this.textPreProcessor.onProcess = function (name, returnDisplayValue) { return self.getProcessedTextValue(name, returnDisplayValue); };
    }
    Object.defineProperty(QuestionPanelDynamicItem.prototype, "panel", {
        get: function () { return this.panelValue; },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicItem.prototype.runCondition = function (values) {
        this.panel.runCondition(values);
    };
    QuestionPanelDynamicItem.prototype.getValue = function (name) {
        var values = this.data.getPanelItemData(this);
        return values[name];
    };
    QuestionPanelDynamicItem.prototype.setValue = function (name, newValue) {
        this.data.setPanelItemData(this, name, newValue);
    };
    QuestionPanelDynamicItem.prototype.getComment = function (name) {
        var result = this.getValue(name + __WEBPACK_IMPORTED_MODULE_1__base__["c" /* Base */].commentPrefix);
        return result ? result : "";
    };
    QuestionPanelDynamicItem.prototype.setComment = function (name, newValue) {
        this.setValue(name + __WEBPACK_IMPORTED_MODULE_1__base__["c" /* Base */].commentPrefix, newValue);
    };
    QuestionPanelDynamicItem.prototype.onSurveyValueChanged = function () {
        var questions = this.panel.questions;
        var values = this.data.getPanelItemData(this);
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            q.onSurveyValueChanged(values[q.name]);
        }
    };
    QuestionPanelDynamicItem.prototype.setVisibleIndex = function (index, showIndex) {
        return __WEBPACK_IMPORTED_MODULE_1__base__["a" /* SurveyElement */].setVisibleIndex(this.panel.questions, index, showIndex);
    };
    QuestionPanelDynamicItem.prototype.getAllValues = function () { return this.data.getPanelItemData(this); };
    QuestionPanelDynamicItem.prototype.geSurveyData = function () { return this; };
    QuestionPanelDynamicItem.prototype.getSurvey = function () { return this.data ? this.data.getSurvey() : null; };
    QuestionPanelDynamicItem.prototype.getTextProcessor = function () { return this; };
    //ITextProcessor
    QuestionPanelDynamicItem.prototype.hasProcessedTextValue = function (name) {
        if (name == QuestionPanelDynamicItem.IndexVariableName)
            return true;
        var firstName = new __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        return firstName == QuestionPanelDynamicItem.ItemVariableName;
    };
    QuestionPanelDynamicItem.prototype.getProcessedTextValue = function (name, returnDisplayValue) {
        if (name == QuestionPanelDynamicItem.IndexVariableName)
            return this.data.getItemIndex(this) + 1;
        //name should start with the panel
        name = name.replace(QuestionPanelDynamicItem.ItemVariableName + ".", "");
        var firstName = new __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        var question = this.panel.getQuestionByName(firstName);
        if (!question)
            return null;
        var values = {};
        values[firstName] = returnDisplayValue ? question.displayValue : question.value;
        return new __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, values);
    };
    QuestionPanelDynamicItem.prototype.processText = function (text, returnDisplayValue) {
        text = this.textPreProcessor.process(text, returnDisplayValue);
        var survey = this.getSurvey();
        return survey ? survey.processText(text, returnDisplayValue) : text;
    };
    QuestionPanelDynamicItem.prototype.processTextEx = function (text) {
        text = this.processText(text, true);
        var hasAllValuesOnLastRun = this.textPreProcessor.hasAllValuesOnLastRun;
        var res = { hasAllValuesOnLastRun: true, text: text };
        if (this.getSurvey()) {
            res = this.getSurvey().processTextEx(text);
        }
        res.hasAllValuesOnLastRun = res.hasAllValuesOnLastRun && hasAllValuesOnLastRun;
        return res;
    };
    QuestionPanelDynamicItem.prototype.onAnyValueChanged = function (name) {
        this.panel.onAnyValueChanged(name);
        this.panel.onAnyValueChanged(QuestionPanelDynamicItem.ItemVariableName);
    };
    return QuestionPanelDynamicItem;
}());

QuestionPanelDynamicItem.ItemVariableName = "panel";
QuestionPanelDynamicItem.IndexVariableName = "panelIndex";
/**
 * A Model for a panel dymanic question. You setup the template panel, but adding elements (any question or a panel) and assign a text to it's title, and this panel will be used as a template on creating dynamic panels. The number of panels is defined by panelCount property.
 * An end-user may dynamically add/remove panels, unless you forbidden this.
 */
var QuestionPanelDynamicModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionPanelDynamicModel, _super);
    function QuestionPanelDynamicModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.itemsValue = new Array();
        _this.loadingPanelCount = 0;
        _this.currentIndexValue = -1;
        _this.templateValue = _this.createNewPanelObject();
        _this.template.renderWidth = "100%";
        _this.template.selectedElementInDesign = _this;
        var self = _this;
        _this.oldTemplateRowsChangedCallback = _this.template.rowsChangedCallback;
        _this.template.rowsChangedCallback = function () { self.templateOnRowsChanged(); if (self.oldTemplateRowsChangedCallback)
            self.oldTemplateRowsChangedCallback(); };
        _this.createLocalizableString("confirmDeleteText", _this);
        _this.createLocalizableString("keyDuplicationError", _this);
        _this.createLocalizableString("panelAddText", _this);
        _this.createLocalizableString("panelRemoveText", _this);
        _this.createLocalizableString("panelPrevText", _this);
        _this.createLocalizableString("panelNextText", _this);
        return _this;
    }
    QuestionPanelDynamicModel.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        this.template.setSurveyImpl(this.surveyImpl);
    };
    QuestionPanelDynamicModel.prototype.templateOnRowsChanged = function () {
        if (this.isLoadingFromJson)
            return;
        this.rebuildPanels();
    };
    QuestionPanelDynamicModel.prototype.getType = function () {
        return "paneldynamic";
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "template", {
        /**
         * The template Panel. This panel is used as a template on creatign dynamic panels
         * @see  templateElements
         * @see templateTitle
         * @see panelCount
         */
        get: function () { return this.templateValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "templateElements", {
        /**
         * The template Panel elements, questions and panels.
         * @see  templateElements
         * @see template
         * @see panelCount
         */
        get: function () { return this.template.elements; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "templateTitle", {
        /**
         * The template Panel title property.
         * @see  templateElements
         * @see template
         * @see panelCount
         */
        get: function () { return this.template.title; },
        set: function (newValue) {
            this.template.title = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locTemplateTitle", {
        get: function () { return this.template.locTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "items", {
        get: function () { return this.itemsValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panels", {
        /**
         * The array of dynamic panels created based on panel template
         * @see template
         * @see panelCount
         */
        get: function () {
            var res = [];
            for (var i = 0; i < this.items.length; i++) {
                res.push(this.items[i].panel);
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "currentIndex", {
        /**
         * The index of current active dynamical panel when the renderMode is not "list". If there is no dymamic panel (panelCount = 0) or renderMode equals "list" it returns -1, otherwise it returns a value from 0 to panelCount - 1.
         * @see currentPanel
         * @see panels
         * @see panelCount
         * @see renderMode
         */
        get: function () {
            if (this.isRenderModeList)
                return -1;
            if (this.currentIndexValue < 0 && this.panelCount > 0) {
                this.currentIndexValue = 0;
            }
            if (this.currentIndexValue >= this.panelCount) {
                this.currentIndexValue = this.panelCount - 1;
            }
            return this.currentIndexValue;
        },
        set: function (val) {
            if (val >= this.panelCount)
                val = this.panelCount - 1;
            this.currentIndexValue = val;
            this.fireCallback(this.currentIndexChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "currentPanel", {
        /**
         * The current active dynamical panel when the renderMode is not "list". If there is no dymamic panel (panelCount = 0) or renderMode equals "list" it returns null.
         * @see currenIndex
         * @see panels
         * @see panelCount
         * @see renderMode
         */
        get: function () {
            var index = this.currentIndex;
            if (index < 0 || index >= this.panels.length)
                return null;
            return this.panels[index];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "confirmDelete", {
        /**
         * Set it to true, to show a confirmation dialog on removing a panel
         * @see ConfirmDeleteText
         */
        get: function () { return this.getPropertyValue("confirmDelete", false); },
        set: function (val) { this.setPropertyValue("confirmDelete", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "keyName", {
        /**
         * Set it to a question name used in the template panel and the library shows duplication error, if there are same values in different panels of this question.
         * @see keyDuplicationError
         */
        get: function () { return this.getPropertyValue("keyName", ""); },
        set: function (val) { this.setPropertyValue("keyName", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "confirmDeleteText", {
        /**
         * Use this property to change the default text showing in the confirmation delete dialog on removing a panel.
         */
        get: function () { return this.getLocalizableStringText("confirmDeleteText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("confirmDelete")); },
        set: function (val) { this.setLocalizableStringText("confirmDeleteText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locConfirmDeleteText", {
        get: function () { return this.getLocalizableString("confirmDeleteText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "keyDuplicationError", {
        /**
         * The duplication value error text. Set it to show the text different from the default.
         * @see keyName
         */
        get: function () { return this.getLocalizableStringText("keyDuplicationError", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("keyDuplicationError")); },
        set: function (val) { this.setLocalizableStringText("keyDuplicationError", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locKeyDuplicationError", {
        get: function () { return this.getLocalizableString("keyDuplicationError"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelPrevText", {
        /**
         * Use this property to change the default previous button text. Previous button shows the previous panel, change the currentPanel, when the renderMode doesn't equal to "list".
         * @see currentPanel
         * @see currentIndex
         * @see renderMode
         */
        get: function () { return this.getLocalizableStringText("panelPrevText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("pagePrevText")); },
        set: function (val) { this.setLocalizableStringText("panelPrevText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelPrevText", {
        get: function () { return this.getLocalizableString("panelPrevText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelNextText", {
        /**
         * Use this property to change the default next button text. Next button shows the next panel, change the currentPanel, when the renderMode doesn't equal to "list".
         * @see currentPanel
         * @see currentIndex
         * @see renderMode
         */
        get: function () { return this.getLocalizableStringText("panelNextText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("pageNextText")); },
        set: function (val) { this.setLocalizableStringText("panelNextText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelNextText", {
        get: function () { return this.getLocalizableString("panelNextText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelAddText", {
        /**
         * Use this property to change the default value of add panel button text.
         */
        get: function () { return this.getLocalizableStringText("panelAddText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("addPanel")); },
        set: function (value) { this.setLocalizableStringText("panelAddText", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelAddText", {
        get: function () { return this.getLocalizableString("panelAddText"); ; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelRemoveText", {
        /**
         * Use this property to change the default value of remove panel button text.
         */
        get: function () { return this.getLocalizableStringText("panelRemoveText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("removePanel")); },
        set: function (val) { this.setLocalizableStringText("panelRemoveText", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelRemoveText", {
        get: function () { return this.getLocalizableString("panelRemoveText"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isProgressTopShowing", {
        /**
         * Returns true when the renderMode equals to "progressTop" or "progressTopBottom"
         */
        get: function () { return this.renderMode == "progressTop" || this.renderMode == "progressTopBottom"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isProgressBottomShowing", {
        /**
         * Returns true when the renderMode equals to "progressBottom" or "progressTopBottom"
         */
        get: function () { return this.renderMode == "progressBottom" || this.renderMode == "progressTopBottom"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isPrevButtonShowing", {
        /**
         * Returns true when currentIndex is more than 0.
         * @see currenIndex
         * @see currenPanel
         */
        get: function () { return this.currentIndex > 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isNextButtonShowing", {
        /**
         * Returns true when currentIndex is more than or equal 0 and less then panelCount - 1.
         * @see currenIndex
         * @see currenPanel
         * @see panelCount
         */
        get: function () { return this.currentIndex >= 0 && this.currentIndex < this.panelCount - 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isRangeShowing", {
        /**
         * Returns true when showRangeInProgress equals to true, renderMode doesn't equal to "list" and panelCount is >= 2.
         */
        get: function () { return this.showRangeInProgress && (this.currentIndex >= 0 && this.panelCount > 1); },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.getElementsInDesign = function (includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        return includeHidden ? [this.template] : this.templateElements;
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelCount", {
        /**
         * Use this property to get/set the number of dynamic panels.
         * @see template
         * @see minPanelCount
         * @see maxPanelCount
         * @see addPanel
         * @see removePanel
         * @see removePanelUI
         */
        get: function () { return this.isLoadingFromJson ? this.loadingPanelCount : this.items.length; },
        set: function (val) {
            if (val < 0)
                return;
            if (this.isLoadingFromJson) {
                this.loadingPanelCount = val;
                return;
            }
            if (val == this.items.length || this.isDesignMode)
                return;
            for (var i = this.panelCount; i < val; i++) {
                this.items.push(this.createNewItem());
            }
            if (val < this.panelCount)
                this.items.splice(val, this.panelCount - val);
            this.setValueBasedOnPanelCount();
            this.reRunCondition();
            this.fireCallback(this.panelCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.setValueBasedOnPanelCount = function () {
        var value = this.value;
        if (!value || !Array.isArray(value))
            value = [];
        if (value.length == this.panelCount)
            return;
        for (var i = value.length; i < this.panelCount; i++)
            value.push({});
        if (value.length > this.panelCount)
            value.splice(this.panelCount, value.length - this.panelCount);
        this.value = value;
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "minPanelCount", {
        /**
         * The minimum panel count. A user could not delete a panel if the panelCount equals to minPanelCount
         * @see panelCount
         * @see maxPanelCount
         */
        get: function () { return this.getPropertyValue("minPanelCount", 0); },
        set: function (val) {
            if (val < 0)
                val = 0;
            if (val == this.minPanelCount || val > this.maxPanelCount)
                return;
            this.setPropertyValue("minPanelCount", val);
            if (this.panelCount < val)
                this.panelCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "maxPanelCount", {
        /**
         * The maximum panel count. A user could not add a panel if the panelCount equals to maxPanelCount
         * @see panelCount
         * @see minPanelCount
         */
        get: function () { return this.getPropertyValue("maxPanelCount", QuestionPanelDynamicModel.MaxPanelCount); },
        set: function (val) {
            if (val <= 0)
                return;
            if (val > QuestionPanelDynamicModel.MaxPanelCount)
                val = QuestionPanelDynamicModel.MaxPanelCount;
            if (val == this.maxPanelCount || val < this.minPanelCount)
                return;
            this.setPropertyValue("maxPanelCount", val);
            if (this.panelCount > val)
                this.panelCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "showQuestionNumbers", {
        /**
         * Use this property to show/hide the numbers in titles in questions inside a dynamic panel.
         * By default the value is "off". You may set it to "onPanel" and the first question inside a dynamic panel will start with 1 or "onSurvey" to include nested questions in dymamic panels into global survey question numbering.
         */
        get: function () { return this.getPropertyValue("showQuestionNumbers", "off"); },
        set: function (val) {
            this.setPropertyValue("showQuestionNumbers", val);
            if (!this.isLoadingFromJson && this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "showRangeInProgress", {
        /**
         * Shows the range from 1 to panelCount when renderMode doesn't equal to "list". Set to false to hide this element.
         * @see panelCount
         * @see renderMode
         */
        get: function () { return this.getPropertyValue("showRangeInProgress", true); },
        set: function (val) {
            this.setPropertyValue("showRangeInProgress", val);
            this.fireCallback(this.currentIndexChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "renderMode", {
        /**
         * By default the property equals to "list" and all dynamic panels are rendered one by one on the page. You may change it to: "progressTop", "progressBottom" or "progressTopBottom" to render only one dynamic panel at once. The progress and navigation elements can be rendred on top, bottom or both.
         */
        get: function () { return this.getPropertyValue("renderMode", "list"); },
        set: function (val) {
            this.setPropertyValue("renderMode", val);
            this.fireCallback(this.renderModeChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isRenderModeList", {
        /**
         * Returns true when renderMode equals to "list".
         * @renderMode
         */
        get: function () { return this.renderMode == "list"; },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.setVisibleIndex = function (value) {
        var startIndex = this.showQuestionNumbers == "onSurvey" ? value : 0;
        for (var i = 0; i < this.items.length; i++) {
            var counter = this.items[i].setVisibleIndex(startIndex, this.showQuestionNumbers != "off");
            if (this.showQuestionNumbers == "onSurvey") {
                startIndex += counter;
            }
        }
        _super.prototype.setVisibleIndex.call(this, this.showQuestionNumbers != "onSurvey" ? value : -1);
        return this.showQuestionNumbers != "onSurvey" ? 1 : startIndex - value;
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "canAddPanel", {
        /**
         * Returns true when an end user may add a new panel. The question is not read only and panelCount less than maxPanelCount
         * @see isReadOnly
         * @see panelCount
         * @see maxPanelCount
         */
        get: function () { return !this.isReadOnly && (this.panelCount < this.maxPanelCount); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "canRemovePanel", {
        /**
         * Returns true when an end user may remove a panel. The question is not read only and panelCount is more than minPanelCount
         * @see isReadOnly
         * @see panelCount
         * @see minPanelCount
         */
        get: function () { return !this.isReadOnly && (this.panelCount > this.minPanelCount); },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.rebuildPanels = function () {
        var items = new Array();
        if (this.isDesignMode) {
            items.push(new QuestionPanelDynamicItem(this, this.template));
            if (this.oldTemplateRowsChangedCallback) {
                this.oldTemplateRowsChangedCallback();
            }
        }
        else {
            for (var i = 0; i < this.panelCount; i++) {
                items.push(this.createNewItem());
            }
        }
        this.itemsValue = items;
        this.reRunCondition();
        this.fireCallback(this.panelCountChangedCallback);
    };
    /**
     * Add a new dynamic panel based on the template Panel.
     * @see template
     * @see panelCount
     * @see panels
     */
    QuestionPanelDynamicModel.prototype.addPanel = function () {
        if (!this.canAddPanel)
            return null;
        this.panelCount++;
        if (!this.isRenderModeList) {
            this.currentIndex = this.panelCount - 1;
        }
        return this.items[this.panelCount - 1].panel;
    };
    /**
     * Call removePanel function. If confirmDelete set to true, it shows the confirmation dialog first.
     * @param value a panel or panel index
     * @see removePanel
     * @see confirmDelete
     * @see confirmDeleteText
     */
    QuestionPanelDynamicModel.prototype.removePanelUI = function (value) {
        if (!this.confirmDelete || confirm(this.confirmDeleteText)) {
            this.removePanel(value);
        }
    };
    /**
     * Removes a dynamic panel from the panels array. Do nothing is caRemovePanel returns false.
     * @param value a panel or panel index
     * @see panels
     * @see canRemovePanel
     * @see template
     */
    QuestionPanelDynamicModel.prototype.removePanel = function (value) {
        if (!this.canRemovePanel)
            return;
        var index = this.getPanelIndex(value);
        if (index < 0 || index >= this.panelCount)
            return;
        this.items.splice(index, 1);
        var value = this.value;
        if (!value || !Array.isArray(value) || index >= value.length)
            return;
        value.splice(index, 1);
        this.value = value;
        this.fireCallback(this.panelCountChangedCallback);
    };
    QuestionPanelDynamicModel.prototype.getPanelIndex = function (val) {
        if (!isNaN(parseFloat(val)) && isFinite(val))
            return val;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] === val || this.items[i].panel === val)
                return i;
        }
        return -1;
    };
    QuestionPanelDynamicModel.prototype.onSurveyLoad = function () {
        if (this.loadingPanelCount > 0) {
            this.panelCount = this.loadingPanelCount;
        }
        if (this.isDesignMode) {
            this.rebuildPanels();
        }
        _super.prototype.onSurveyLoad.call(this);
    };
    QuestionPanelDynamicModel.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        this.runPanelsCondition(values);
    };
    QuestionPanelDynamicModel.prototype.reRunCondition = function () {
        if (!this.data)
            return;
        this.runCondition(this.data.getAllValues());
    };
    QuestionPanelDynamicModel.prototype.runPanelsCondition = function (values) {
        var newValues = {};
        if (values && values instanceof Object) {
            newValues = JSON.parse(JSON.stringify(values));
        }
        for (var i = 0; i < this.items.length; i++) {
            newValues[QuestionPanelDynamicItem.ItemVariableName] = this.getPanelItemData(this.items[i]);
            this.items[i].runCondition(newValues);
        }
    };
    QuestionPanelDynamicModel.prototype.onAnyValueChanged = function (name) {
        _super.prototype.onAnyValueChanged.call(this, name);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onAnyValueChanged(name);
        }
    };
    QuestionPanelDynamicModel.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var errosInPanels = this.hasErrorInPanels(fireCallback);
        return _super.prototype.hasErrors.call(this, fireCallback) || errosInPanels;
    };
    QuestionPanelDynamicModel.prototype.getAllErrors = function () {
        var result = _super.prototype.getAllErrors.call(this);
        for (var i = 0; i < this.panels.length; i++) {
            var questions = this.panels[i].questions;
            for (var j = 0; j < questions.length; j++) {
                var errors = questions[j].getAllErrors();
                if (errors && errors.length > 0) {
                    result = result.concat(errors);
                }
            }
        }
        return result;
    };
    QuestionPanelDynamicModel.prototype.hasErrorInPanels = function (fireCallback) {
        var res = false;
        var panels = this.panels;
        var keyValues = [];
        for (var i = 0; i < panels.length; i++) {
            var pnlError = panels[i].hasErrors(fireCallback);
            pnlError = this.isValueDuplicated(panels[i], keyValues) || pnlError;
            if (!this.isRenderModeList && pnlError && !res) {
                this.currentIndex = i;
            }
            res = pnlError || res;
        }
        return res;
    };
    QuestionPanelDynamicModel.prototype.isValueDuplicated = function (panel, keyValues) {
        if (!this.keyName)
            return false;
        var question = panel.getQuestionByName(this.keyName);
        if (!question || question.isEmpty())
            return false;
        var value = question.value;
        for (var i = 0; i < keyValues.length; i++) {
            if (value == keyValues[i]) {
                question.addError(new __WEBPACK_IMPORTED_MODULE_9__error__["c" /* CustomError */](this.keyDuplicationError));
                return true;
            }
        }
        keyValues.push(value);
        return false;
    };
    QuestionPanelDynamicModel.prototype.createNewItem = function () {
        return new QuestionPanelDynamicItem(this, this.createNewPanel());
    };
    QuestionPanelDynamicModel.prototype.createNewPanel = function () {
        var panel = this.createNewPanelObject();
        var jObj = new __WEBPACK_IMPORTED_MODULE_7__jsonobject__["a" /* JsonObject */]();
        var json = jObj.toJsonObject(this.template);
        jObj.toObject(json, panel);
        panel.renderWidth = "100%";
        return panel;
    };
    QuestionPanelDynamicModel.prototype.createNewPanelObject = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__panel__["a" /* PanelModel */]();
    };
    QuestionPanelDynamicModel.prototype.onValueChanged = function () {
        if (this.isValueChangingInternally)
            return;
        var val = this.value;
        var newPanelCount = val && Array.isArray(val) ? val.length : 0;
        if (newPanelCount <= this.panelCount)
            return;
        this.panelCount = newPanelCount;
    };
    QuestionPanelDynamicModel.prototype.onSurveyValueChanged = function (newValue) {
        _super.prototype.onSurveyValueChanged.call(this, newValue);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onSurveyValueChanged();
        }
    };
    QuestionPanelDynamicModel.prototype.onSetData = function () {
        _super.prototype.onSetData.call(this);
        if (this.isDesignMode) {
            this.template.setSurveyImpl(this.surveyImpl);
            if (!this.isLoadingFromJson) {
                this.rebuildPanels();
            }
        }
    };
    //IQuestionPanelDynamicData
    QuestionPanelDynamicModel.prototype.getItemIndex = function (item) {
        return this.items.indexOf(item);
    };
    QuestionPanelDynamicModel.prototype.getPanelItemData = function (item) {
        var index = this.items.indexOf(item);
        if (index < 0)
            return {};
        var qValue = this.value;
        if (!qValue || !Array.isArray(qValue) || qValue.length <= index)
            return {};
        return qValue[index];
    };
    QuestionPanelDynamicModel.prototype.setPanelItemData = function (item, name, val) {
        var index = this.items.indexOf(item);
        if (index < 0)
            return;
        var qValue = this.value;
        if (!qValue || !Array.isArray(qValue) || qValue.length <= index)
            return;
        if (!qValue[index])
            qValue[index] = {};
        qValue[index][name] = val;
        this.isValueChangingInternally = true;
        this.value = qValue;
        this.isValueChangingInternally = false;
    };
    QuestionPanelDynamicModel.prototype.getSurvey = function () { return this.survey; };
    return QuestionPanelDynamicModel;
}(__WEBPACK_IMPORTED_MODULE_5__question__["a" /* Question */]));

QuestionPanelDynamicModel.MaxPanelCount = 100;
__WEBPACK_IMPORTED_MODULE_7__jsonobject__["a" /* JsonObject */].metaData.addClass("paneldynamic", [{ name: "templateElements", alternativeName: "questions", visible: false },
    { name: "templateTitle:text", serializationProperty: "locTemplateTitle" }, { name: "panelCount:number", default: 0, choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { name: "minPanelCount:number", default: 0 }, { name: "maxPanelCount:number", default: QuestionPanelDynamicModel.MaxPanelCount },
    { name: "keyName" }, { name: "keyDuplicationError", serializationProperty: "locKeyDuplicationError" },
    { name: "confirmDelete:boolean" }, { name: "confirmDeleteText", serializationProperty: "locConfirmDeleteText" },
    { name: "panelAddText", serializationProperty: "locPanelAddText" }, { name: "panelRemoveText", serializationProperty: "locPanelRemoveText" },
    { name: "panelPrevText", serializationProperty: "locPanelPrevText" }, { name: "panelNextText", serializationProperty: "locPanelNextText" },
    { name: "showQuestionNumbers", default: "off", choices: ["off", "onPanel", "onSurvey"] }, { name: "showRangeInProgress", default: true },
    { name: "renderMode", default: "list", choices: ["list", "progressTop", "progressBottom", "progressTopBottom"] }], function () { return new QuestionPanelDynamicModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_8__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("paneldynamic", function (name) { return new QuestionPanelDynamicModel(name); });


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadiogroupModel; });




/**
 * A Model for a radiogroup question.
 */
var QuestionRadiogroupModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRadiogroupModel, _super);
    function QuestionRadiogroupModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionRadiogroupModel.prototype.getType = function () {
        return "radiogroup";
    };
    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionRadiogroupModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("radiogroup", [], function () { return new QuestionRadiogroupModel(""); }, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("radiogroup", function (name) { var q = new QuestionRadiogroupModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRatingModel; });





/**
 * A Model for a rating question.
 */
var QuestionRatingModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRatingModel, _super);
    function QuestionRatingModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rates = _this.createItemValues("rates");
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("rates", function () { self.fireCallback(self.rateValuesChangedCallback); });
        _this.onPropertyChanged.add(function (sender, options) {
            if (options.name == "rateMin" || options.name == "rateMax" || options.name == "rateStep") {
                self.fireCallback(self.rateValuesChangedCallback);
            }
        });
        var locMinRateDescriptionValue = _this.createLocalizableString("minRateDescription", _this, true);
        var locMaxRateDescriptionValue = _this.createLocalizableString("maxRateDescription", _this, true);
        locMinRateDescriptionValue.onGetTextCallback = function (text) { return text ? text + " " : text; };
        locMaxRateDescriptionValue.onGetTextCallback = function (text) { return text ? " " + text : text; };
        return _this;
    }
    QuestionRatingModel.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.fireCallback(this.rateValuesChangedCallback);
    };
    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
        /**
         * The list of rate items. Every item has value and text. If text is empty, the value is rendered. The item text supports markdown. If it is empty the array is generated by using rateMin, rateMax and rateStep properties.
         * @see rateMin
         * @see rateMax
         * @see rateStep
         */
        get: function () { return this.rates; },
        set: function (val) {
            this.setPropertyValue("rates", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "rateMin", {
        /**
         * This property is used to generate rate values if rateValues array is empty. It is the first value in the rating. The default value is 1.
         * @see rateValues
         * @see rateMax
         * @see rateStep
         */
        get: function () { return this.getPropertyValue("rateMin", 1); },
        set: function (val) {
            if (val > this.rateMax - this.rateStep)
                val = this.rateMax - this.rateStep;
            this.setPropertyValue("rateMin", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "rateMax", {
        /**
        * This property is used to generate rate values if rateValues array is empty. It is the last value in the rating. The default value is 5.
        * @see rateValues
        * @see rateMin
        * @see rateStep
         */
        get: function () { return this.getPropertyValue("rateMax", 5); },
        set: function (val) {
            if (val < this.rateMin + this.rateStep)
                val = this.rateMin + this.rateStep;
            this.setPropertyValue("rateMax", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "rateStep", {
        /**
         * This property is used to generate rate values if rateValues array is empty. It is the step value. The number of rate values are (rateMax - rateMin) / rateStep. The default value is 1.
        * @see rateValues
        * @see rateMin
        * @see rateMax
         */
        get: function () { return this.getPropertyValue("rateStep", 1); },
        set: function (val) {
            if (val <= 0)
                val = 1;
            if (val > this.rateMax - this.rateMin)
                val = this.rateMax - this.rateMin;
            this.setPropertyValue("rateStep", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
        get: function () {
            if (this.rateValues.length > 0)
                return this.rateValues;
            var res = [];
            var value = this.rateMin;
            while (value <= this.rateMax && res.length < QuestionRatingModel.MaximumRateValueCount) {
                res.push(new __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */](value));
                value += this.rateStep;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    QuestionRatingModel.prototype.getType = function () {
        return "rating";
    };
    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    QuestionRatingModel.prototype.supportComment = function () { return true; };
    QuestionRatingModel.prototype.supportOther = function () { return true; };
    Object.defineProperty(QuestionRatingModel.prototype, "minRateDescription", {
        /**
         * The description of minimum (first) item.
         */
        get: function () { return this.getLocalizableStringText("minRateDescription"); },
        set: function (val) { this.setLocalizableStringText("minRateDescription", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "locMinRateDescription", {
        get: function () { return this.getLocalizableString("minRateDescription"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "maxRateDescription", {
        /**
         * The description of maximum (last) item.
         */
        get: function () { return this.getLocalizableStringText("maxRateDescription"); },
        set: function (val) { this.setLocalizableStringText("maxRateDescription", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "locMaxRateDescription", {
        get: function () { return this.getLocalizableString("maxRateDescription"); },
        enumerable: true,
        configurable: true
    });
    ;
    return QuestionRatingModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

QuestionRatingModel.MaximumRateValueCount = 20;
__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("rating", ["hasComment:boolean", { name: "rateValues:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getData(obj.rateValues); }, onSetValue: function (obj, value) { obj.rateValues = value; } },
    { name: "rateMin:number", default: 1 }, { name: "rateMax:number", default: 5 }, { name: "rateStep:number", default: 1 },
    { name: "minRateDescription", alternativeName: "mininumRateDescription", serializationProperty: "locMinRateDescription" },
    { name: "maxRateDescription", alternativeName: "maximumRateDescription", serializationProperty: "locMaxRateDescription" }], function () { return new QuestionRatingModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("rating", function (name) { return new QuestionRatingModel(name); });


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionfactory__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTextModel; });




/**
 * A Model for an input text question.
 */
var QuestionTextModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionTextModel, _super);
    function QuestionTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("placeHolder", _this);
        return _this;
    }
    QuestionTextModel.prototype.getType = function () {
        return "text";
    };
    Object.defineProperty(QuestionTextModel.prototype, "inputType", {
        /**
         * Use this property to change the default input type.
         */
        get: function () { return this.getPropertyValue("inputType", "text"); },
        set: function (val) {
            val = val.toLowerCase();
            if (val == "datetime_local")
                val = "datetime-local";
            this.setPropertyValue("inputType", val.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionTextModel.prototype, "size", {
        /**
         * The text input size
         */
        get: function () { return this.getPropertyValue("size", 25); },
        set: function (val) { this.setPropertyValue("size", val); },
        enumerable: true,
        configurable: true
    });
    QuestionTextModel.prototype.isEmpty = function () { return _super.prototype.isEmpty.call(this) || this.value === ""; };
    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    Object.defineProperty(QuestionTextModel.prototype, "placeHolder", {
        /**
         * The input place holder.
         */
        get: function () { return this.getLocalizableStringText("placeHolder"); },
        set: function (val) { this.setLocalizableStringText("placeHolder", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionTextModel.prototype, "locPlaceHolder", {
        get: function () { return this.getLocalizableString("placeHolder"); },
        enumerable: true,
        configurable: true
    });
    QuestionTextModel.prototype.setNewValue = function (newValue) {
        newValue = this.correctValueType(newValue);
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionTextModel.prototype.correctValueType = function (newValue) {
        if (!newValue)
            return newValue;
        if (this.inputType == "number" || this.inputType == "range") {
            return this.isNumber(newValue) ? parseFloat(newValue) : "";
        }
        return newValue;
    };
    QuestionTextModel.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return QuestionTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("text", [{ name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] },
    { name: "size:number", default: 25 }, { name: "placeHolder", serializationProperty: "locPlaceHolder" }], function () { return new QuestionTextModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_1__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("text", function (name) { return new QuestionTextModel(name); });


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactquestionelement__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reactquestionfactory__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionBoolean; });




var SurveyQuestionBoolean = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyQuestionBoolean, _super);
    function SurveyQuestionBoolean(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.question.checkedValue };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }
    SurveyQuestionBoolean.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        this.setState({ value: this.question.checkedValue });
    };
    Object.defineProperty(SurveyQuestionBoolean.prototype, "question", {
        get: function () { return this.questionBase; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionBoolean.prototype.handleOnChange = function (event) {
        this.question.checkedValue = event.target.checked;
        this.setState({ value: this.question.checkedValue });
    };
    SurveyQuestionBoolean.prototype.componentDidMount = function () {
        this.updateIndeterminate();
    };
    SurveyQuestionBoolean.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    SurveyQuestionBoolean.prototype.updateIndeterminate = function () {
        if (!this.question)
            return;
        var el = this.refs["check"];
        if (el) {
            el["indeterminate"] = this.question.isIndeterminate;
        }
    };
    SurveyQuestionBoolean.prototype.render = function () {
        if (!this.question)
            return null;
        var cssClasses = this.question.cssClasses;
        var text = this.renderLocString(this.question.locDisplayLabel);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: cssClasses.item },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("label", { className: cssClasses.item },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("input", { ref: "check", type: "checkbox", value: this.question.checkedValue, id: this.question.inputId, disabled: this.isDisplayMode, checked: this.question.checkedValue, onChange: this.handleOnChange, "aria-label": this.question.locTitle.renderedHtml }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "checkbox-material" },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "check" })),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", null, text))));
    };
    return SurveyQuestionBoolean;
}(__WEBPACK_IMPORTED_MODULE_2__reactquestionelement__["b" /* SurveyQuestionElementBase */]));

__WEBPACK_IMPORTED_MODULE_3__reactquestionfactory__["a" /* ReactQuestionFactory */].Instance.registerQuestion("boolean", function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](SurveyQuest
