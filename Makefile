install: 
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/runBrainEven.js

brain-calc:
	node bin/runBrainCalc.js

brain-games:
	node bin/runBrainGames.js

brain-GCD:
	node bin/runBrainGCD.js

brain-progression:
	node bin/runBrainProgression.js
