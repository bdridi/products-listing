angular.module('Factories',[])


/*   	Factory provider that return an object of items	*/

.factory('mainFactory', function($http){
		
		var factory = {};						
    factory.list = [];
		factory.loadData = function(){
			  
			  console.log("loadData call");
			  $http.get('data.txt').success(function(response){
			  factory.list = response;
			  console.log("loading ok");
			});
		
			};
			
		factory.getItems = function(){
		    console.log("get items call");
		    return factory.list;
		};	
		
			factory.setList = function(_list){
		    factory.list = _list;
		};	
		
		factory.getItems2 = function(){
			  return $http.get('products.json');
		};
			
			
		factory.getItem = function(id){
					var item = {};
					angular.forEach(factory.list, function(value, key0) {
						if (value._id == id )
							item = value;
						});
			
				return item;
		};	
		
		return factory;
})

/* Factory that calculate the total price of selected items and prepare devi*/

.factory('deviFactory', function(){
		
		var item = function(id,name,price){
			this.id = id;
			this.name = name;
			this.price = price;

		};
			
		var factory = {};
		
		factory.list = [];
		
		
		
		factory.getDevi = function(){
			return factory.list;
		};
		
		factory.add = function(id,name,price){
			console.log("Adding new item to Factory devi ! ");
			console.log("id :" +id+" name : "+name+" price :"+price);
			tmp = new item(id,name,price);			
			factory.list.push(tmp);
			console.log(factory.list.length);	
			// Disabling button of selected item
			//angular.element(document.getElementByID('#'+id)).attr('ng-disabled','true'); 
			
		};
		
		factory.remove = function(id){
		
		for(var i=0;i<factory.list.length;i++){
				var element = factory.list[i];
				if (id == element.id){
					// suppression de l'element du tableau
					factory.list.splice(i,1);
					return;
				}
			}
		};
		
		factory.getTotal = function(){
			console.log("Calculating total ");
			var total = 0;
			for(var i=0;i<factory.list.length;i++){
				var element = factory.list[i];
				if (element instanceof item){
				console.log("Current Price  :"+element.price);
				total += element.price;		
				}
			}
			
			
			return total;			
		};
		
		factory.reset = function(){
			factory.list = [];			
		};	
		
		return factory;		
		
});

