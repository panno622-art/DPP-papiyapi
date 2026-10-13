#!/bin/sh
if [ $# -eq 0 ]; then
echo "No argument supplied"
else
for name in "$@"; do 
mkdir "ex$name"
done 
fi

