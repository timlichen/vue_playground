var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
});

app.todos.push({text: "More things"})
app.todos.push({text: "Even more More things"})