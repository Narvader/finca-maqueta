var scroll25 = false;
var scroll50 = false;
var scroll75 = false;
var scroll100 = false;

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;

var offsetScroll

var footer = document.getElementById("footer");
var sharing = document.getElementById("sharing");

var picture = document.querySelectorAll(".img");

var promotionBar = document.getElementsByClassName('promotion')[0];
var closeBtn = document.getElementsByClassName('close-btn')[0];
var closeBtnClicked = false;

var imgToAnimate = document.getElementsByClassName('img-animate');
var imgToAnimateArr = Array.prototype.slice.call(imgToAnimate);

var text = document.getElementsByClassName('text');
var textArr = Array.prototype.slice.call(text);

var textAndTitle = document.getElementsByClassName('container-to-visible');
var textAndTitleArr = Array.prototype.slice.call(textAndTitle);


var titleSections = document.getElementsByClassName('title-section');
var titleSectionsArr = Array.prototype.slice.call(titleSections);
// MAIN LOGIC
main();

closeBtn.addEventListener('click', function() {

	promotionBar.classList.remove('visible');
	closeBtnClicked = true;	
});
	

window.addEventListener('scroll', function(){
	scrollActiv();

	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
	if ( scrollTop > viewportHeight ){
		sharing.classList.add("visible");
		if(closeBtnClicked == false) {
			promotionBar.classList.add("visible");
		}
		
	} else {
		sharing.classList.remove("visible");
		if(closeBtnClicked == false) {
			promotionBar.classList.remove("visible");
		}
	}

	for (var i = 0; i < imgToAnimateArr.length; i++) {
		if(isElementInViewport(imgToAnimateArr[i])) {
			if(!imgToAnimateArr[i].classList.contains('visible')) {
				imgToAnimateArr[i].classList.add('visible');
			}
		}
	}

	for (var i = 0; i < textArr.length; i++) {
		if(isElementInViewport(textArr[i])) {
			if(!textArr[i].classList.contains('visible')) {
				textArr[i].classList.add('visible');
			}
		}
	}

	for (var i = 0; i < titleSectionsArr.length; i++) {
		if(isElementInViewport(titleSectionsArr[i])) {
			if(!titleSectionsArr[i].classList.contains('visible')) {
				titleSectionsArr[i].classList.add('visible');
			}
		}
	}

	for (var i = 0; i < textAndTitleArr.length; i++) {
		if(isElementInViewport(textAndTitleArr[i])) {
			if(!textAndTitleArr[i].classList.contains('visible')) {
				textAndTitleArr[i].classList.add('visible');
			}
		}
	}


});

function main() {
	setRRSSLinks();
}

function isElementInViewport(el) {
    var scroll = window.scrollY || window.pageYOffset
    var boundsTop = el.getBoundingClientRect().top + scroll
    
    var viewport = {
        top: scroll,
        bottom: scroll + viewportHeight,
    }
    
    var bounds

    if(!isDevice()) {
    	bounds = {
	        top: Math.floor(boundsTop) + el.offsetHeight,
	        bottom: boundsTop + el.clientHeight,
    	}
    } else {
    	bounds = {
	        top: Math.floor(boundsTop) + (el.offsetHeight / 2),
	        bottom: boundsTop + el.clientHeight,
	    }
    }
    

    return ( (viewport.bottom > bounds.top) && (viewport.top < bounds.bottom) ) 
}


function scrollActiv(){
	scrollPercent = getScrollPercent();

	if (typeof universalGa !== 'undefined') {
		if ( scrollPercent >= 25 ) {
			if ( !scroll25 ) {
			    universalGa('brands.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 25%', {nonInteraction: true});
		        universalGa('t1.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 25%');
			    scroll25 = true;
			}
		}

		if ( scrollPercent >= 50 ) {
			if ( !scroll50 ) {
			  	universalGa('brands.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 50%', {nonInteraction: true});
		      	universalGa('t1.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 50%');
			   	scroll50 = true;
			}
		}
		if ( scrollPercent >= 75 ) {
		    if ( !scroll75 ) {
			    universalGa('brands.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 75%', {nonInteraction: true});
		        universalGa('t1.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 75%');
			    scroll75 = true;
			}
		}

		if ( scrollPercent >= 100 ) {
			if ( !scroll100 ) {
			  	universalGa('brands.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 100%', {nonInteraction: true});
		      	universalGa('t1.send', 'event', 'Especial La Finca - teletrabajo en la naturaleza', 'scroll', 'Scroll Depth 100%');
			   	scroll100 = true;
			}
		}
	}

}

function getScrollPercent() {

	var height = document.documentElement.clientHeight;
   	var scrollHeight = document.documentElement.scrollHeight - height;
    var scrollTop = document.documentElement.scrollTop;
    var percent = Math.round(scrollTop / scrollHeight * 100);

	return percent;
}

function setRRSSLinks() {
    var urlPage = window.location.href;

    //Facebook
    var shareFB = document.getElementById("shareFB")
    var fbHref = "https://www.facebook.com/sharer/sharer.php?u="+urlPage
    shareFB.setAttribute("href",fbHref)

    //Twitter
    var shareTW = document.getElementById("shareTW")
    var twText = shareTW.getAttribute("data-text")
    var twHref = "https://twitter.com/intent/tweet?url="+urlPage+"&text="+twText+"&original_referer="+urlPage
    shareTW.setAttribute("href",twHref)

    //Linkedin
    var shareLK = document.getElementById("shareLK")
    var lkText = shareLK.getAttribute("data-text")
    var lkHref = "https://www.linkedin.com/shareArticle?mini=true&url="+urlPage+"&title="+lkText+"&summary=&source="
    shareLK.setAttribute("href",lkHref)

    //WhatsApp
    var shareWA = document.getElementById("shareWA")
    var waText = shareWA.getAttribute("data-text")
    var waHref = "https://api.whatsapp.com/send?text="+waText+" "+urlPage
    shareWA.setAttribute("href",waHref)
}

function isMobile() {
	return viewportWidth < 768
}

function isDevice() {
	return viewportWidth < 993
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}