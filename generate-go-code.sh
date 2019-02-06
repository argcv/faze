#!/usr/bin/env bash

set -e
set -o pipefail

pushd $(dirname $0) > /dev/null # GO TO PROJECT ROOT

echo "Working dir: $(pwd -P)"

yarn install
yarn build


cmd_required() {
    if type $1 > /dev/null ; then
        echo "CHECK: $1 OK"
    else
        echo "CHECK: $1 FAILED"
        echo "Note: "$2
        exit 1
    fi
}

cmd_required go-bindata "You can install it using 'go get -u github.com/kevinburke/go-bindata/...'"

go-bindata -pkg ui build/...



popd > /dev/null # EXIT FROM PROJECT ROOT