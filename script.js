function multipulateArray(){
	return new Promise((resolve)=> {
		setTimeout(()=> {
			resolve([1,2,3,4]);
		}, 3000)
	})
	.then((arr)=>{
		return new Promise((resolve)=> {
			const evens = arr.filter((num)=> num % 2 === 0);
			setTimeout(()=> {
				document.getElementById("output").innerHTML = evens.join(",");
				resolve(evens);
			}, 1000);
		});
	})
	.then((evens)=>{
		return new Promise((resolve)=> {
			const doubled = evens.map((num)=> num * 2);
			setTimeout(()=> {
				document.getElementById("output").innerHTML = doubled.join(",");
				resolve(doubled);
			}, 2000)
		});
	});
}
window.onload = multipulateArray;