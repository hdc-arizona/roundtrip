#!/bin/sh

PYTHONPATH=$PWD:$PYTHONPATH
pip3 install -r requirements.txt
npx webpack -c roundtrip/example_code/webpack.config.js
