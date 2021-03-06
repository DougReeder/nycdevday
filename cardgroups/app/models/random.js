/* Copyright 2010 Palm, Inc. All rights reserved. */
/*globals Observable:false */
function Random(id) {
    Observable.call(this);
    this.id = id;

    this.newData();
}
Random.prototype.__proto__ = Observable.prototype;

Random.prototype.newData = function() {
    this.data = (Math.random()*1000)|0;
    this.notifyObservers({});
};
