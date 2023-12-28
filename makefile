make:
	@echo "Building..."
	@npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css
	@cp node_modules/htmx.org/dist/htmx.min.js src/scripts/htmx.min.js
	@echo "Done Building!"

serve: make
	@echo "Serving..."
	@npx serve src/

dist: make
	@echo "Building for production..."
	@npx tailwindcss -i ./src/styles/input.css -o ./src/dist/output.min.css --minify
	@echo "Done Building for production!"