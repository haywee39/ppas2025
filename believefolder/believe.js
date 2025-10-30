		   fetch("believefolder/believe.html")
			.then(response => response.text())
			.then(data => {
			document.getElementById("believes").innerHTML = data;
			})
			.catch(error => console.error("Error loading believes:", error));