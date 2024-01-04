@help:
    echo "each recipe is a command"
    just --list

@setup:
    set -e && set -x 
    echo "installing dependencies"
    pnpm i
    echo "installing playwright browsers"
    chmod +x ./scripts/install/playwright-browsers
    ./scripts/install/playwright-browsers
    # post setup configurations
    chmod +x ./scripts/dev-container/post-start
    ./scripts/dev-container/post-start

@serve:
    pnpm dev

@build:
    pnpm build 

@test:
    pnpm test

@lint:
    pnpm lint

@format:
    pnpm format

@deploy:
    echo 'this command is not set yet'

alias rn := reincarnate

@reincarnate:
    rm -rf node_modules
    rm -rf pnpm-lock.yaml 
    echo 'done cleaning up..'
    echo 'reincarnating..'
    just setup
