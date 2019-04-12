let style = {}

style.layout = {
	
}

style.updateStyle = (top,left,width) => {
	style.layout.left = left || 0;
	style.layout.top = top || 0;
	style.layout.width = width || "20px"
}

export default style;