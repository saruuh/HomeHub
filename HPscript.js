window.onload = function() {
    console.log("Page loaded and JavaScript is working!");
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long',  day: 'numeric', month: 'long', year: 'numeric' });

    const weekElement = document.getElementById('current-week');
    if (weekElement) {
        weekElement.textContent = `Current Date: ${formattedDate}`;
    }

    // More button functionality
    const moreButton = document.getElementById('more-button');
    if (moreButton) {
        moreButton.addEventListener('click', function () {
            // Show specific hidden offers by targeting their IDs
            document.getElementById('offer7').style.display = 'block';
            document.getElementById('offer8').style.display = 'block';
			document.getElementById('offer9').style.display = 'block';

            // Optionally hide the button
            moreButton.style.display = 'none';
        });
    }

    // Hover functionality for reviews
    const reviews = document.querySelectorAll('.review');
    reviews.forEach(review => {
        review.addEventListener('mouseover', function() {
            const hoverDiv = this.querySelector('.review-hover');
            if (hoverDiv) {
                hoverDiv.style.display = 'block';
            }
        });
        review.addEventListener('mouseout', function() {
            const hoverDiv = this.querySelector('.review-hover');
            if (hoverDiv) {
                hoverDiv.style.display = 'none';
            }
        });
    });
	
};
