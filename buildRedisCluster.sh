#!/bin/bash
for ((i=0; i<6; i++))
do
docker run --name redis700$i -p 700$i:6379 -d redis redis-server --appendonly yes --protected-mode no --cluster-enabled yes
done