# Running the OpenMAMA documentation locally

To view the OpenMAMA website locally, you can simply [install jekyll](https://jekyllrb.com/docs/installation/), then run:

    bundle exec jekyll serve

from this directory.

Alternatively you can run this from docker using:

    docker run --rm -h localhost -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve bundle exec jekyll serve --force_polling -H localhost -P 4000

Or on windows `cmd.exe`:

    docker run --rm -h localhost -p 4000:4000 -v %CD%:/site bretfisher/jekyll-serve bundle exec jekyll serve --force_polling -H localhost -P 4000

Replacing `$(pwd)` with `%CD%` or similar on windows if necessary.
