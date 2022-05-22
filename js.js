function showText (el) {
	if(el.previousElementSibling.clientHeight === 80) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Згорнути";
	} else {
		el.previousElementSibling.style.height = "80px";
		el.innerHTML = "Розгорнути";
	}
}
function imagefun() {
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("images/Q.jpg")) {
                Image_Id.src = "images/K.jpg";
            }
            else if ((Image_Id.src.match("images/K.jpg")) {
            	Image_Id.src = "images/Q+K.jpg"
            }
						else {
                Image_Id.src = "images/Q.jpg";
            }
        }
