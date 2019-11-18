Vue.component('child-component', {
    props:['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component', {
    props:['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! Passed from Parent Component',
        anotherMessage: '임의의 문자열이다',
    }
});