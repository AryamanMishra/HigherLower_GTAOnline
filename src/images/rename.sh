#!/bin/bash

for file in *.webp; 
do
	mv -- "$file" "${file%.webp}.jpeg"
done
