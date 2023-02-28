fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
.then(res=>res.json())
.then(data=>{
    console.log(data.drinks[1].strDrink);
})
.catch(err=>{
    console.log(`error ${err}`);
});