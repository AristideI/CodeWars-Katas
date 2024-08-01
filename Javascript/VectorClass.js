"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(components) {
        this.nums = components;
    }
    Vector.prototype.add = function (a) {
        if (a.nums.length != this.nums.length) {
            throw new Error("Vectors must have the same number of components.");
        }
        var addArr = this.nums.map(function (elt, ind) { return elt + a.nums[ind]; });
        return new Vector(addArr);
    };
    Vector.prototype.subtract = function (a) {
        if (a.nums.length != this.nums.length) {
            throw new Error("Vectors must have the same number of components.");
        }
        var addArr = this.nums.map(function (elt, ind) { return elt - a.nums[ind]; });
        return new Vector(addArr);
    };
    Vector.prototype.dot = function (a) {
        if (a.nums.length != this.nums.length) {
            throw new Error("Vectors must have the same number of components.");
        }
        var addArr = this.nums
            .map(function (elt, ind) { return elt * a.nums[ind]; })
            .reduce(function (j, k) { return j + k; });
        return addArr;
    };
    Vector.prototype.norm = function () {
        var addArr = this.nums
            .map(function (elt) { return elt * elt; })
            .reduce(function (j, k) { return j + k; });
        return Math.pow(addArr, 0.5);
    };
    Vector.prototype.toString = function () {
        return "(" + this.nums.join(",") + ")";
    };
    Vector.prototype.equals = function (a) {
        if (a.nums.length !== this.nums.length)
            return false;
        for (var i = 0; i < this.nums.length; i++) {
            if (this.nums[i] !== a.nums[i])
                return false;
        }
        return true;
    };
    return Vector;
}());
exports.Vector = Vector;
