setInterval(() => {

    /**
     * Called 100 times per second (10ms interval).
     */
	const fixed = new Event("fixed");

	document.dispatchEvent(fixed);

}, 10);