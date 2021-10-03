#!/bin/bash

function d-c() {
    project=$(basename "$(pwd)")
    docker-compose -p "${project}" "$@"
}

function main() {
    case "$1" in
        "run")
            d-c stop -t 0
            d-c build
            d-c up -d
            ;;

        "logs")
            shift
            d-c logs -f "$@"
            ;;
        *)
            d-c "$@"
            ;;
    esac
}

main "$@"
