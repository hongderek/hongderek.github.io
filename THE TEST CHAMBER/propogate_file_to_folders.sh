#!/bin/bash  

# WILL OVERWRITE FILES, BE VERY CAREFUL!!!

control_c() {
    kill $PID
    exit
}

trap control_c SIGINT

f=$1

declare -a JAPN0300=("L1" "L2" "L3" "L4" "L5" "L6" "L7")
declare -a JAPN0400=("L8" "L9" "L10" "L11" "L12" "L13" "L14" "L15")
declare -a JAPN0500=("R6" "R40")

declare -a filesys=("JAPN0300" "JAPN0400" "JAPN0500")

for course in "${filesys[@]}"; do
  currentCourse="$course[@]"
  for lesson in "${!currentCourse}"; do
    cp ./"$f" ../"$course"/"$lesson"
    echo ...copying "$f" to ../"$course"/"$lesson"
  done
done

echo Finished copying.

