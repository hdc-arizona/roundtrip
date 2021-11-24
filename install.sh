#!/bin/sh

case *"$PWD"*
    in "$PYTHONPATH")
        ;;

    *)
        PYTHONPATH=$PWD:$PYTHONPATH
        ;;
esac