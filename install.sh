#!/bin/sh

case "$PYTHONPATH" in
    *"$PWD"*)
        ;;

    *)
        PYTHONPATH=$PWD:$PYTHONPATH
        ;;
esac