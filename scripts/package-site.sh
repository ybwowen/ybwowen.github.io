#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
artifact_dir="${1:-_site}"
if [[ "$artifact_dir" != "_site" && "$artifact_dir" != "/tmp/arvid-artifact" ]]; then
  echo 'Use _site or /tmp/arvid-artifact as the output directory.' >&2
  exit 1
fi
rm -rf -- "$artifact_dir"
mkdir -p "$artifact_dir/assets"
cp -- *.html *.css *.js .nojekyll robots.txt sitemap.xml "$artifact_dir/"
for directory in publication publications talks slides portfolio year-archive cv posts about resume blogs files images; do
  cp -R -- "$directory" "$artifact_dir/"
done
mkdir -p "$artifact_dir/vendor"
cp -- vendor/marked.umd.js vendor/marked-LICENSE.md "$artifact_dir/vendor/"
cp -R -- vendor/mathjax "$artifact_dir/vendor/"
cp -R -- assets/fonts "$artifact_dir/assets/"
cp -R -- assets/img "$artifact_dir/assets/"
