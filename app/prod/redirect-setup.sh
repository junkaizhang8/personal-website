#!/bin/bash
[ ! -f ../dist/browser/index.html ] && echo "index.html not found" && exit 1
tail -n 1 ../dist/browser/index.html | grep -q "<!-- Redirect setup complete -->" && echo "Redirect script already set up. Terminating." && exit 1
[ ! -f redirect-script ] && echo "redirect-script not found" && exit 1
[ ! -f 404.html ] && echo "404.html not found" && exit 1
head -n 12 ../dist/browser/index.html > temp.txt
mv temp.txt ../dist/browser/index.html
cat redirect-script >> ../dist/browser/index.html
cp 404.html ../dist/browser/404.html