new Vue({
	el: '#app',
	data: {
		title: 'The Breakfast Club'
	},
	methods: {
		changeTitle: function(){
			this.title = event.target.value;
		}
	}
});