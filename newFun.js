newItems = [
	{
		network: 'facebook',
		text: 'post number 1',
	},
	{
		network: 'twitter',
		text: 'some twitter text',
	},
	{
		network: 'gplus',
		text: 'some gplus stuff',
	},
	{
		network: 'facebook',
		text: 'post number 2',
	},
]

function foo(arrayOfItems, aNetwork) {
	finalsItems = []
	arrayOfItems.map((nw) => {
		let newItem 
		if(nw.network == aNetwork){
			newItem = {
				'displayName': aNetwork,
				'text': nw.text,
			}
			finalsItems.push(newItem)
		}
		
	})
	return finalsItems
}

console.log(foo(newItems, 'facebook'));
console.log(foo(newItems, 'gplus'))