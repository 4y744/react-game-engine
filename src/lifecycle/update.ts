let last_frame = Date.now();

setInterval(() => {

	const current_frame = Date.now();

	/**
	 * Called constantly, limited only by hardware.
	 * @param delta - Time passed since last frame (in seconds).
	 */
	const update = new CustomEvent("update", {
		detail: (current_frame - last_frame) / 1000
	});

	document.dispatchEvent(update);
	
	last_frame = current_frame;

}, 0);